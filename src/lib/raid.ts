/*
 * De raidplanner (AFSPRAKEN.md §21 van de app): wie brengt welke buff, en hoe
 * verdeel je de groepen zo dat elke groep er het meeste aan heeft.
 *
 * De data staat in src/data/raid.json; de site leest hem hier en in de browser,
 * de app via /api/v1/raid.json met dezelfde regels in Swift (`Raid.swift`). Wat
 * hier verandert, verandert daar ook, anders verdeelt de knop anders op de site
 * dan in de app.
 *
 * De regels:
 *  1. Een raidbuff telt voor de hele raid zodra iemand hem brengt.
 *  2. Elke Paladin geeft elke speler één Blessing. Wie twee Paladins heeft, krijgt er
 *     twee, in de volgorde van `blessingOrder`.
 *  3. Een groepsbuff (shout, aura, totem) telt alleen in de eigen groep. Elke Shaman
 *     zet één Air Totem neer; twee Shamans in een groep geven er twee.
 *  4. Een debuff op de baas telt één keer. Elke Warlock houdt één curse op; Curse of
 *     the Elements gaat voor, Curse of Recklessness vervangt Faerie Fire alleen als er
 *     nog een Warlock over is.
 *
 * De deelcode (`?r=10.1ab0r`): de raidgrootte, een punt, en per plek één teken, de
 * `code` van de spec of `0` voor een lege plek; nullen op het einde vallen weg.
 * **De codes van de specs veranderen nooit**: een nieuwe spec krijgt een nieuw teken
 * achteraan, anders opent elke gedeelde raid met andere spelers.
 *
 * De namen (Nutri, 11 oktober 2026) staan ernaast in `&n=Thrall~~Jaina`: per plek een naam,
 * gescheiden door `~`, lege namen op het einde vallen weg. Een naam is hoogstens 24 tekens
 * en draagt zelf geen `~` (die wordt een koppelteken). De app maakt dezelfde link.
 */

import data from '../data/raid.json';

export type RaidSpec = {
  code: string;
  id: string;
  class: string;
  name: string;
  role: 'tank' | 'healer' | 'damage' | 'hybrid';
  roleLabel?: 'ranged' | 'melee' | 'hybrid';
  icon: string;
  provides: string[];
  tags: string[];
};

export type RaidBuff = {
  name: string;
  scope: 'raid' | 'party' | 'boss';
  helps: string;
  icon: string;
  spell: number;
};

type Entry = { id: string; effects: string[]; perProvider?: boolean; weight?: number; needs?: string };

export type RaidData = {
  schema: number;
  read: string;
  groupSize: number;
  sizes: number[];
  specs: RaidSpec[];
  buffs: Record<string, RaidBuff>;
  raid: string[];
  blessings: string[];
  party: Entry[];
  boss: Entry[];
};

export const raidData = data as unknown as RaidData;
export const RAID_SCHEMA = raidData.schema;
export const defaultRaidSize = 10;

/** Een plek in de raid: een spec, of leeg. */
export type Slot = RaidSpec | null;

export type Status = 'full' | 'part' | 'none' | 'na';

export type RaidLine = {
  id: string;
  providers: number;
  recipients: number;
  eligible: number;
  status: Status;
};

export type PartyLine = {
  entry: string;
  effect: string;
  recipients: number;
  eligible: number;
};

export type GroupResult = {
  covered: PartyLine[];
  /** Wat de groep mist terwijl iemand anders in de raid het wel brengt. */
  missing: string[];
};

export type BossLine = {
  id: string;
  /** Het effect dat er komt, of null als niemand het brengt. */
  effect: string | null;
  effects: string[];
  providers: number;
};

export type RaidResult = {
  players: number;
  paladins: number;
  raid: RaidLine[];
  groups: GroupResult[];
  boss: BossLine[];
  score: number;
};

const byId = new Map(raidData.specs.map((spec) => [spec.id, spec]));
const byCode = new Map(raidData.specs.map((spec) => [spec.code, spec]));

export const raidSpec = (id: string): RaidSpec | undefined => byId.get(id);

export function eligible(buffId: string, spec: RaidSpec, d: RaidData = raidData): boolean {
  const helps = d.buffs[buffId]?.helps;
  return helps === 'all' || (helps !== undefined && spec.tags.includes(helps));
}

/** Melee wil eerst Might, de rest eerst Wisdom; Kings voor iedereen eerst. */
export function blessingOrder(spec: RaidSpec): string[] {
  return spec.tags.includes('melee')
    ? ['kings', 'might', 'salvation', 'wisdom']
    : ['kings', 'wisdom', 'salvation', 'might'];
}

const chunk = (slots: Slot[], size: number): Slot[][] => {
  const groups: Slot[][] = [];
  for (let i = 0; i < slots.length; i += size) groups.push(slots.slice(i, i + size));
  return groups;
};

/** De groepsbuffs van één groep: wat er is en wat ontbreekt. */
function analyzeGroup(group: Slot[], raidProviders: Set<string>, d: RaidData): GroupResult & { score: number } {
  const members = group.filter((s): s is RaidSpec => s !== null);
  const covered: PartyLine[] = [];
  const missing: string[] = [];
  let score = 0;

  for (const entry of d.party) {
    const relevant = members.filter((m) => entry.effects.some((e) => eligible(e, m, d)));
    if (relevant.length === 0) continue;
    const weight = entry.weight ?? 1;

    if (entry.perProvider) {
      // Elke provider zet één effect neer, het beste dat nog niet staat.
      const providers = members.filter((m) => entry.effects.some((e) => m.provides.includes(e)));
      const taken: string[] = [];
      for (const provider of providers) {
        const next = entry.effects.find((e) => provider.provides.includes(e) && !taken.includes(e)
          && members.some((m) => eligible(e, m, d)));
        if (next) taken.push(next);
      }
      for (const effect of taken) {
        const recipients = members.filter((m) => eligible(effect, m, d)).length;
        covered.push({ entry: entry.id, effect, recipients, eligible: recipients });
        score += weight * recipients;
      }
      const wanted = entry.effects.find((e) => raidProviders.has(e) && members.some((m) => eligible(e, m, d)));
      if (taken.length === 0 && wanted) missing.push(wanted);
      continue;
    }

    const effect = entry.effects.find((e) => members.some((m) => m.provides.includes(e)));
    if (effect) {
      const recipients = members.filter((m) => eligible(effect, m, d)).length;
      covered.push({ entry: entry.id, effect, recipients, eligible: relevant.length });
      score += weight * recipients;
    } else {
      const elsewhere = entry.effects.find((e) => raidProviders.has(e) && members.some((m) => eligible(e, m, d)));
      if (elsewhere) missing.push(elsewhere);
    }
  }
  return { covered, missing, score };
}

export function analyzeRaid(slots: Slot[], d: RaidData = raidData): RaidResult {
  const players = slots.filter((s): s is RaidSpec => s !== null);
  const provided = new Set(players.flatMap((p) => p.provides));
  const paladins = players.filter((p) => p.class === 'paladin').length;

  // Regel 2: per speler zoveel Blessings als er Paladins zijn.
  const blessed = new Map<RaidSpec, string[]>();
  players.forEach((p) => {
    blessed.set(p, blessingOrder(p).filter((b) => eligible(b, p, d)).slice(0, paladins));
  });

  const raid: RaidLine[] = d.raid.map((id) => {
    const providers = players.filter((p) => p.provides.includes(id)).length;
    const pool = players.filter((p) => eligible(id, p, d));
    const recipients = d.blessings.includes(id)
      ? pool.filter((p) => blessed.get(p)!.includes(id)).length
      : (providers > 0 ? pool.length : 0);
    const status: Status = pool.length === 0 ? 'na'
      : recipients === pool.length ? 'full' : recipients > 0 ? 'part' : 'none';
    return { id, providers, recipients, eligible: pool.length, status };
  });

  const groups = chunk(slots, d.groupSize).map((g) => analyzeGroup(g, provided, d));
  const score = groups.reduce((sum, g) => sum + g.score, 0);

  // Regel 4: de debuffs, met de curses van de Warlocks als beperking.
  let curses = players.filter((p) => p.class === 'warlock').length;
  const order = [...d.boss].sort((a, b) => Number(b.id === 'elements') - Number(a.id === 'elements'));
  const chosen = new Map<string, BossLine>();
  for (const entry of order) {
    if (players.length === 0) break;
    if (entry.needs && !players.some((p) => p.tags.includes(entry.needs!))) continue;
    let effect: string | null = null;
    for (const e of entry.effects) {
      if (!provided.has(e)) continue;
      const isCurse = e.startsWith('curse');
      if (isCurse && curses === 0) continue;
      if (isCurse) curses -= 1;
      effect = e;
      break;
    }
    const providers = effect ? players.filter((p) => p.provides.includes(effect!)).length : 0;
    chosen.set(entry.id, { id: entry.id, effect, effects: entry.effects, providers });
  }
  const boss = d.boss.map((entry) => chosen.get(entry.id)).filter((line): line is BossLine => line !== undefined);

  return { players: players.length, paladins, raid, groups, boss, score };
}

const roleRank = { tank: 0, hybrid: 1, healer: 2, damage: 3 } as const;
const classOrder = (spec: RaidSpec, d: RaidData) => d.specs.indexOf(spec);

/** Binnen een groep: tanks, dan healers, dan damage; daarbinnen alfabetisch. */
function tidy(group: Slot[], d: RaidData): Slot[] {
  const members = group.filter((s): s is RaidSpec => s !== null)
    .sort((a, b) => roleRank[a.role] - roleRank[b.role] || classOrder(a, d) - classOrder(b, d));
  return [...members, ...Array(group.length - members.length).fill(null)];
}

const groupScore = (group: Slot[], provided: Set<string>, d: RaidData) => analyzeGroup(group, provided, d).score;

/**
 * Regel 3 in de andere richting: verdeel de spelers over de groepen zodat de
 * groepsbuffs zoveel mogelijk spelers raken. Eerst de spelers met de meeste
 * groepsbuffs, elk in de groep waar ze het meest opleveren; daarna ruilen zolang
 * een ruil iets oplevert. Altijd in dezelfde volgorde, dus dezelfde raid geeft
 * dezelfde groepen, op de site en in de app.
 */
export function autoArrange(slots: Slot[], d: RaidData = raidData): Slot[] {
  const size = slots.length;
  const count = Math.ceil(size / d.groupSize);
  const players = slots.filter((s): s is RaidSpec => s !== null);
  const provided = new Set(players.flatMap((p) => p.provides));
  const partyEffects = new Set(d.party.flatMap((e) => e.effects));
  const weight = (p: RaidSpec) => p.provides.filter((e) => partyEffects.has(e)).length;

  const queue = [...players].sort((a, b) => weight(b) - weight(a) || classOrder(a, d) - classOrder(b, d));
  const groups: Slot[][] = Array.from({ length: count }, () => []);
  for (const player of queue) {
    let best = -1;
    let bestGain = -Infinity;
    groups.forEach((group, index) => {
      if (group.length >= d.groupSize) return;
      const gain = groupScore([...group, player], provided, d) - groupScore(group, provided, d);
      // Bij gelijke winst: de leegste groep, zodat de providers zich spreiden.
      if (gain > bestGain || (gain === bestGain && best >= 0 && group.length < groups[best].length)) {
        best = index;
        bestGain = gain;
      }
    });
    groups[best].push(player);
  }
  const filled: Slot[][] = groups.map((g) => [...g, ...Array(d.groupSize - g.length).fill(null)]);

  // Ruilen tussen twee groepen, ook met een lege plek, zolang het de som verhoogt.
  for (let pass = 0; pass < 40; pass += 1) {
    let improved = false;
    for (let a = 0; a < count; a += 1) {
      for (let b = a + 1; b < count; b += 1) {
        for (let i = 0; i < d.groupSize; i += 1) {
          for (let j = 0; j < d.groupSize; j += 1) {
            const ga = filled[a];
            const gb = filled[b];
            if (ga[i] === null && gb[j] === null) continue;
            const before = groupScore(ga, provided, d) + groupScore(gb, provided, d);
            [ga[i], gb[j]] = [gb[j], ga[i]];
            const after = groupScore(ga, provided, d) + groupScore(gb, provided, d);
            if (after > before + 1e-9) improved = true;
            else [ga[i], gb[j]] = [gb[j], ga[i]];
          }
        }
      }
    }
    if (!improved) break;
  }
  return filled.flatMap((g) => tidy(g, d)).slice(0, size);
}

/** `10.1ab0r`: de grootte, en per plek de code van de spec. */
export function encodeRaid(slots: Slot[]): string {
  const body = slots.map((s) => s?.code ?? '0').join('').replace(/0+$/, '');
  return `${slots.length}.${body}`;
}

export function decodeRaid(code: string | null | undefined, d: RaidData = raidData): Slot[] {
  const [head, body = ''] = (code ?? '').split('.');
  const asked = Number(head);
  const size = d.sizes.includes(asked) ? asked : defaultRaidSize;
  const codes = d === raidData ? byCode : new Map(d.specs.map((s) => [s.code, s]));
  return Array.from({ length: size }, (_, i) => codes.get(body[i] ?? '0') ?? null);
}

/** Hoogstens 24 tekens, zonder `~` (het scheidingsteken van de deellink). */
export const NAME_MAX = 24;
export function cleanName(name: string): string {
  return name.replace(/~/g, '-').replace(/\s+/g, ' ').trim().slice(0, NAME_MAX);
}

/** `Thrall~~Jaina`: een naam per plek, lege namen op het einde weg. */
export function encodeNames(names: string[]): string {
  return names.map(cleanName).join('~').replace(/~+$/, '');
}

export function decodeNames(param: string | null | undefined, size: number): string[] {
  const parts = (param ?? '').split('~').map(cleanName);
  return Array.from({ length: size }, (_, i) => parts[i] ?? '');
}
