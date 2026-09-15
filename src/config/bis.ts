/*
 * De vaste gegevens van de BiS-lijsten (PROJECT_SPEC.md §5, handoff §7.2).
 *
 * De lijsten zelf staan als JSON in src/data/bis/, één bestand per lijst.
 * Alles hier is de catalogus eromheen: welke
 * fasen een era heeft, welke raids erbij horen, de kleur van elke class.
 *
 * Namen uit het spel (raids, classes, specs) blijven Engels in elke taal
 * (SCHRIJFSTIJL.md §6). Wat vertaald wordt, staat in src/i18n/bis.ts.
 */

import type { EraKey } from './eras';

/** De era's met lijsten, in de volgorde van de era-schakelaar. */
export const bisEras = ['classic', 'tbc', 'wotlk', 'cata', 'mop'] as const;
export type BisEra = (typeof bisEras)[number];

export function isBisEra(value: string | null | undefined): value is BisEra {
  return !!value && (bisEras as readonly string[]).includes(value);
}

/**
 * De tabs van de era-schakelaar op BIS, in de volgorde van Nutri
 * (14 september 2026): Forever, Classic, TBC, WotLK, Cata, MoP. Hardcore heeft
 * geen eigen lijsten en krijgt hier geen tab.
 */
export const bisTabEras: readonly EraKey[] = ['forever', ...bisEras];

/** De fasen per era, in volgorde. `preraid` komt altijd eerst. */
export const phaseIds: Record<BisEra, string[]> = {
  classic: ['preraid', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
  tbc: ['preraid', 'p1', 'p2', 'p3', 'p4', 'p5'],
  wotlk: ['preraid', 'p1', 'p2', 'p3', 'p4'],
  cata: ['preraid', 'p1', 'p2', 'p3'],
  mop: ['preraid', 'p1', 'p2', 'p3'],
};

/** De raids van elke fase, voluit en in het Engels. */
export const phaseRaids: Record<BisEra, Record<string, string>> = {
  classic: {
    preraid: '',
    p1: "Molten Core, Onyxia's Lair",
    p2: 'Dire Maul',
    p3: 'Blackwing Lair',
    p4: "Zul'Gurub",
    p5: "Ahn'Qiraj",
    p6: 'Naxxramas',
  },
  tbc: {
    preraid: '',
    p1: "Karazhan, Gruul's Lair, Magtheridon's Lair",
    p2: 'Serpentshrine Cavern, Tempest Keep',
    p3: 'Hyjal Summit, Black Temple',
    p4: "Zul'Aman",
    p5: 'Sunwell Plateau',
  },
  wotlk: {
    preraid: '',
    p1: 'Naxxramas, The Obsidian Sanctum, The Eye of Eternity',
    p2: 'Ulduar',
    p3: 'Trial of the Crusader',
    p4: 'Icecrown Citadel, The Ruby Sanctum',
  },
  cata: {
    preraid: '',
    p1: 'Blackwing Descent, The Bastion of Twilight, Throne of the Four Winds',
    p2: 'Firelands',
    p3: 'Dragon Soul',
  },
  mop: {
    preraid: '',
    p1: "Mogu'shan Vaults, Heart of Fear, Terrace of Endless Spring",
    p2: 'Throne of Thunder',
    p3: 'Siege of Orgrimmar',
  },
};

/**
 * De fase die nu live is op de realms van een era. Alleen waar dat zinvol is;
 * zonder waarde opent de pagina van die era op de laatste fase. Bijwerken
 * wanneer Blizzard een fase opent (TBC Anniversary fase 3: 27 augustus 2026).
 */
export const livePhase: Partial<Record<BisEra, string>> = {
  tbc: 'p3',
};

/** Het pad op Wowhead voor elke era, voor de zoeklink bij een item. */
export const wowheadPath: Record<BisEra, string> = {
  classic: 'classic',
  tbc: 'tbc',
  wotlk: 'wotlk',
  cata: 'cata',
  mop: 'mop-classic',
};

/**
 * De classes met hun canonieke kleuren van Blizzard (handoff §4.5; Monk
 * aangevuld met de kleur van Blizzard). Alleen voor ruitjes en randen, nooit
 * voor tekst op een lichte grond.
 */
export const classes: Record<string, { label: string; color: string }> = {
  'death-knight': { label: 'Death Knight', color: '#c41e3a' },
  druid: { label: 'Druid', color: '#ff7c0a' },
  hunter: { label: 'Hunter', color: '#aad372' },
  mage: { label: 'Mage', color: '#3fc7eb' },
  monk: { label: 'Monk', color: '#00ff98' },
  paladin: { label: 'Paladin', color: '#f48cba' },
  priest: { label: 'Priest', color: '#ffffff' },
  rogue: { label: 'Rogue', color: '#fff468' },
  shaman: { label: 'Shaman', color: '#2359ff' },
  warlock: { label: 'Warlock', color: '#8788ee' },
  warrior: { label: 'Warrior', color: '#c69b6d' },
};

export function classLabel(id: string): string {
  return classes[id]?.label ?? id;
}

/** `beast-mastery` wordt `Beast Mastery`. */
export function specLabel(id: string): string {
  return id.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

/** De vier rollen uit de data, en de drie groepen van de filterchips. */
export type RoleKey = 'tank' | 'healer' | 'melee' | 'ranged';
export type RoleGroup = 'tank' | 'healer' | 'dps';

export function roleKey(role: string): RoleKey {
  const r = role.toLowerCase();
  if (r.includes('tank')) return 'tank';
  if (r.includes('heal')) return 'healer';
  if (r.includes('melee')) return 'melee';
  return 'ranged';
}

export function roleGroup(role: string): RoleGroup {
  const key = roleKey(role);
  return key === 'melee' || key === 'ranged' ? 'dps' : key;
}

/*
 * De slotnamen in de data zijn niet eenduidig (Head en Helm, Waist en Belt,
 * 77 varianten). Hier worden ze teruggebracht tot een vaste sleutel, die
 * src/i18n/bis.ts vertaalt. Een onbekende naam blijft staan zoals hij is.
 */
const slotMap: Record<string, string> = {
  head: 'head', helm: 'head',
  neck: 'neck',
  shoulder: 'shoulders', shoulders: 'shoulders',
  back: 'back', cloak: 'back',
  chest: 'chest',
  wrist: 'wrists', wrists: 'wrists', bracer: 'wrists', bracers: 'wrists',
  hands: 'hands', gloves: 'hands',
  waist: 'waist', belt: 'waist',
  legs: 'legs',
  feet: 'feet', boots: 'feet',
  finger: 'finger', ring: 'finger', rings: 'rings',
  'ring 1': 'ring1', 'ring 2': 'ring2',
  'trinket 1': 'trinket1', 'trinket 2': 'trinket2', 'trinket 3': 'trinket3',
  trinkets: 'trinkets', 'best trinkets': 'trinkets',
  'main hand': 'mainHand', 'main-hand': 'mainHand', 'main-hand weapon': 'mainHand',
  'main hand weapon': 'mainHand', 'dual wield - mh': 'mainHand',
  'off hand': 'offHand', 'off-hand': 'offHand', 'off-hand weapon': 'offHand',
  'off hand weapon': 'offHand', 'dual wield - oh': 'offHand', 'off-hands': 'offHand',
  'main-hand / off-hand': 'mainOffHand',
  'one-hand': 'oneHand', '1h weapons': 'oneHand', 'one-hand weapons': 'oneHand',
  'one-handed weapons': 'oneHand',
  'two-hand': 'twoHand', '2-hander': 'twoHand', '2h weapons': 'twoHand',
  'two-hand weapon': 'twoHand', 'two-hand weapons': 'twoHand', 'two-handed weapon': 'twoHand',
  weapon: 'weapon', weapons: 'weapons', 'weapon(s)': 'weapons',
  ranged: 'ranged', 'ranged weapon': 'ranged', 'ranged weapons': 'ranged',
  thrown: 'thrown', wand: 'wand', shield: 'shield',
  relic: 'relic', relics: 'relic',
  idol: 'idol', idols: 'idol', libram: 'libram', totem: 'totem', sigil: 'sigil',
  quiver: 'quiver', arrows: 'arrows', daggers: 'daggers', swords: 'swords', staff: 'staff',
};

export type SlotParts = {
  /** De vaste sleutel, of null als de naam onbekend is. */
  key: string | null;
  /** De naam zoals hij in de data staat, zonder sterretje. */
  raw: string;
  /** Een toevoeging tussen haakjes, zoals een talent. */
  qualifier?: string;
  /** Een wapenslot voor melee bij een class die ook op afstand vecht. */
  melee: boolean;
};

export function slotParts(value: string): SlotParts {
  let raw = value.replace(/\*+$/, '').trim();
  let qualifier: string | undefined;
  const withQualifier = raw.match(/^(.*?)\s*\((.+)\)$/);
  if (withQualifier && withQualifier[1].toLowerCase() !== 'weapon') {
    raw = withQualifier[1];
    qualifier = withQualifier[2];
  }
  let base = raw.toLowerCase();
  const melee = base.startsWith('melee ');
  if (melee) base = base.slice(6);
  const key = slotMap[base] ?? slotMap[raw.toLowerCase()] ?? null;
  return { key, raw: value.replace(/\*+$/, '').trim(), qualifier, melee };
}

export type { EraKey };
