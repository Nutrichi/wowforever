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

/**
 * De era's van WoW Classic met lijsten, in de volgorde van de era-schakelaar.
 * Elk heeft een eigen pagina onder /bis/<era>/.
 */
export const bisEras = ['classic', 'tbc', 'wotlk', 'cata', 'mop'] as const;

/**
 * Alle era's met lijsten: Forever erbij sinds 18 oktober 2026, met de lijsten van
 * de beta op level 30 (Nutri: "In BIS -> Forever, and then call it "Beta""). Forever
 * heeft geen eigen /bis/forever/: dat is /bis/ zelf, zoals voorheen. De API van de
 * app blijft op `bisEras`: de app kent de schakelaar Alliance/Horde nog niet.
 */
export const listEras = ['forever', ...bisEras] as const;
export type BisEra = (typeof listEras)[number];

export function isBisEra(value: string | null | undefined): value is BisEra {
  return !!value && (listEras as readonly string[]).includes(value);
}

/**
 * De tabs van de era-schakelaar op BIS, in de volgorde van Nutri
 * (14 september 2026): Forever, Classic, TBC, WotLK, Cata, MoP. Hardcore heeft
 * geen eigen lijsten en krijgt hier geen tab.
 */
export const bisTabEras: readonly EraKey[] = ['forever', ...bisEras];

/** De fasen per era, in volgorde. `preraid` komt altijd eerst. */
export const phaseIds: Record<BisEra, string[]> = {
  forever: ['beta'],
  classic: ['preraid', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
  tbc: ['preraid', 'p1', 'p2', 'p3', 'p4', 'p5'],
  wotlk: ['preraid', 'p1', 'p2', 'p3', 'p4'],
  cata: ['preraid', 'p1', 'p2', 'p3'],
  mop: ['preraid', 'p1', 'p2', 'p3'],
};

/**
 * Wat er in elke fase opengaat: de raids en de dungeons, voluit en in het
 * Engels, want namen uit het spel blijven Engels (SCHRIJFSTIJL.md §6).
 *
 * `preraid` is geen fase die opengaat maar een vertrekpunt, dus daar staan de
 * dungeons waar de uitrusting vandaan komt, en `preraidNote` zegt dat.
 *
 * Bijwerken hoort bij het nieuws: kondigt Blizzard een fase aan, dan gaat dit
 * bestand mee in dezelfde sessie (PROJECT_SPEC.md §2.10).
 */
export type PhaseContent = {
  /** Raids die in deze fase opengaan. Leeg bij preraid. */
  raids: string[];
  /** Dungeons die in deze fase opengaan, of waar preraid-uitrusting vandaan komt. */
  dungeons: string[];
  /** Wereldbazen en evenementen die in deze fase bijkomen. */
  extra?: string[];
};

export const phaseContent: Record<BisEra, Record<string, PhaseContent>> = {
  /* De beta van Forever toont geen rij dungeons boven de lijsten (Nutri, 19 oktober 2026). */
  forever: {},
  classic: {
    preraid: {
      raids: [],
      dungeons: [
        'Blackrock Depths',
        'Lower Blackrock Spire',
        'Upper Blackrock Spire',
        'Scholomance',
        'Stratholme',
        'The Temple of Atal\'Hakkar',
        'Dire Maul',
      ],
    },
    p1: { raids: ['Molten Core', "Onyxia's Lair"], dungeons: ['Maraudon'] },
    p2: { raids: [], dungeons: ['Dire Maul'], extra: ['Azuregos', 'Lord Kazzak'] },
    p3: { raids: ['Blackwing Lair'], dungeons: [], extra: ['Darkmoon Faire'] },
    p4: { raids: ["Zul'Gurub"], dungeons: [], extra: ['Dragons of Nightmare'] },
    p5: { raids: ["Ruins of Ahn'Qiraj", "Temple of Ahn'Qiraj"], dungeons: [], extra: ["Ahn'Qiraj War Effort"] },
    p6: { raids: ['Naxxramas'], dungeons: [], extra: ['Scourge Invasion'] },
  },
  tbc: {
    preraid: {
      raids: [],
      dungeons: [
        'Hellfire Ramparts',
        'The Blood Furnace',
        'The Shattered Halls',
        'The Slave Pens',
        'The Underbog',
        'The Steamvault',
        'Mana-Tombs',
        'Auchenai Crypts',
        'Sethekk Halls',
        'Shadow Labyrinth',
        'Old Hillsbrad Foothills',
        'The Black Morass',
        'The Mechanar',
        'The Botanica',
        'The Arcatraz',
      ],
    },
    p1: { raids: ['Karazhan', "Gruul's Lair", "Magtheridon's Lair"], dungeons: [] },
    p2: { raids: ['Serpentshrine Cavern', 'Tempest Keep'], dungeons: [] },
    p3: { raids: ['Hyjal Summit', 'Black Temple'], dungeons: [] },
    p4: { raids: ["Zul'Aman"], dungeons: [] },
    p5: { raids: ['Sunwell Plateau'], dungeons: ["Magisters' Terrace"] },
  },
  wotlk: {
    preraid: {
      raids: [],
      dungeons: [
        'Utgarde Keep',
        'The Nexus',
        'Azjol-Nerub',
        'Ahn\'kahet: The Old Kingdom',
        "Drak'Tharon Keep",
        'The Violet Hold',
        'Gundrak',
        'Halls of Stone',
        'Halls of Lightning',
        'The Oculus',
        'Utgarde Pinnacle',
        'The Culling of Stratholme',
      ],
    },
    p1: { raids: ['Naxxramas', 'The Obsidian Sanctum', 'The Eye of Eternity'], dungeons: [] },
    p2: { raids: ['Ulduar'], dungeons: [] },
    p3: { raids: ['Trial of the Crusader'], dungeons: ['Trial of the Champion'] },
    p4: {
      raids: ['Icecrown Citadel', 'The Ruby Sanctum'],
      dungeons: ['The Forge of Souls', 'Pit of Saron', 'Halls of Reflection'],
    },
  },
  cata: {
    preraid: {
      raids: [],
      dungeons: [
        'Blackrock Caverns',
        'Throne of the Tides',
        'The Stonecore',
        'The Vortex Pinnacle',
        'Grim Batol',
        'Halls of Origination',
        "Lost City of the Tol'vir",
        'The Deadmines',
        'Shadowfang Keep',
      ],
    },
    p1: { raids: ['Blackwing Descent', 'The Bastion of Twilight', 'Throne of the Four Winds'], dungeons: [] },
    p2: { raids: ['Firelands'], dungeons: ["Zul'Aman", "Zul'Gurub"] },
    p3: { raids: ['Dragon Soul'], dungeons: ['End Time', 'Well of Eternity', 'Hour of Twilight'] },
  },
  mop: {
    preraid: {
      raids: [],
      dungeons: [
        'Temple of the Jade Serpent',
        'Stormstout Brewery',
        'Shado-Pan Monastery',
        "Mogu'shan Palace",
        'Siege of Niuzao Temple',
        'Gate of the Setting Sun',
        'Scarlet Halls',
        'Scarlet Monastery',
        'Scholomance',
      ],
    },
    p1: { raids: ["Mogu'shan Vaults", 'Heart of Fear', 'Terrace of Endless Spring'], dungeons: [] },
    p2: { raids: ['Throne of Thunder'], dungeons: [] },
    p3: { raids: ['Siege of Orgrimmar'], dungeons: [] },
  },
};

/**
 * De raids van elke fase als één regel. Afgeleid van `phaseContent`, zodat de
 * namen maar op één plaats staan.
 */
export const phaseRaids: Record<BisEra, Record<string, string>> = Object.fromEntries(
  listEras.map((era) => [
    era,
    Object.fromEntries(
      Object.entries(phaseContent[era]).map(([phase, content]) => [phase, content.raids.join(', ')]),
    ),
  ]),
) as Record<BisEra, Record<string, string>>;

/**
 * De fase die nu live is op de realms van een era. Alleen waar dat zinvol is;
 * zonder waarde opent de pagina van die era op de laatste fase. Bijwerken
 * wanneer Blizzard een fase opent (TBC Anniversary fase 3: 27 augustus 2026).
 */
export const livePhase: Partial<Record<BisEra, string>> = {
  forever: 'beta',
  tbc: 'p3',
};

/** Het pad op Wowhead voor elke era, voor de zoeklink bij een item. */
export const wowheadPath: Record<BisEra, string> = {
  forever: 'forever',
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
