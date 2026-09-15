/*
 * De catalogus van CLASSES en TRADESKILLS (PROJECT_SPEC.md §5, handoff §7.3
 * en §7.4). De gidsen zelf staan als Markdown in src/content/classes/ en
 * src/content/tradeskills/; hier staat wat er per era bestaat.
 *
 * Opbouw (Nutri, 14 september 2026): per era per spec een eigen pagina
 * (`/classes/tbc/warrior-arms/`) en per era per tradeskill een eigen pagina
 * (`/tradeskills/tbc/alchemy/`). Forever toont wat al bekend is uit de beta en
 * BlizzCon: race- en classcombinaties, racials en tradeskill-perks. Hardcore
 * krijgt geen tab.
 *
 * Namen uit het spel (classes, specs, rassen, tradeskills) blijven Engels in
 * elke taal (SCHRIJFSTIJL.md §6).
 */

import type { EraKey } from './eras';

/** De era's met gidsen, in de volgorde van de era-schakelaar. */
export const guideEras = ['classic', 'tbc', 'wotlk', 'cata', 'mop'] as const;
export type GuideEra = (typeof guideEras)[number];

/** De tabs van CLASSES en TRADESKILLS: Forever plus de vijf era's, zonder Hardcore. */
export const guideTabEras: readonly EraKey[] = ['forever', ...guideEras];

export function isGuideEra(value: string | null | undefined): value is GuideEra {
  return !!value && (guideEras as readonly string[]).includes(value);
}

/** De levels die een classgids per era dekt. */
export const levelRange: Record<'forever' | GuideEra, string> = {
  forever: '1-60',
  classic: '1-60',
  tbc: '60-70',
  wotlk: '70-80',
  cata: '80-85',
  mop: '85-90',
};

/** De skillpunten die een tradeskillgids per era dekt. */
export const skillRange: Record<'forever' | GuideEra, string> = {
  forever: '1-300',
  classic: '1-300',
  tbc: '300-375',
  wotlk: '375-450',
  cata: '450-525',
  mop: '525-600',
};

const classicSpecs: Record<string, string[]> = {
  druid: ['balance', 'feral', 'restoration'],
  hunter: ['beast-mastery', 'marksmanship', 'survival'],
  mage: ['arcane', 'fire', 'frost'],
  paladin: ['holy', 'protection', 'retribution'],
  priest: ['discipline', 'holy', 'shadow'],
  rogue: ['assassination', 'combat', 'subtlety'],
  shaman: ['elemental', 'enhancement', 'restoration'],
  warlock: ['affliction', 'demonology', 'destruction'],
  warrior: ['arms', 'fury', 'protection'],
};

const deathKnight = { 'death-knight': ['blood', 'frost', 'unholy'] };

/** De classes en specs die in een era bestaan. */
export const classSpecs: Record<'forever' | GuideEra, Record<string, string[]>> = {
  forever: classicSpecs,
  classic: classicSpecs,
  tbc: classicSpecs,
  wotlk: { ...deathKnight, ...classicSpecs },
  cata: { ...deathKnight, ...classicSpecs },
  mop: {
    ...deathKnight,
    ...classicSpecs,
    druid: ['balance', 'feral', 'guardian', 'restoration'],
    monk: ['brewmaster', 'mistweaver', 'windwalker'],
  },
};

/*
 * Wie welke class kan spelen in WoW Forever, zoals Blizzard het vastlegde
 * (Nutri, 14 september 2026: "set in stone"). `new` is een combinatie die in
 * Classic niet bestond. De volgorde van rassen en classes is die van
 * Blizzards eigen overzicht: eerst de Horde, dan de Alliance.
 */
export type ComboState = 'classic' | 'new';

export type ForeverRace = {
  key: string;
  name: string;
  faction: 'alliance' | 'horde';
  classes: Record<string, ComboState>;
};

/** De kolommen van de tabel, in de volgorde van Blizzard. */
export const foreverClassOrder = ['warrior', 'hunter', 'mage', 'rogue', 'priest', 'warlock', 'paladin', 'druid', 'shaman'];

export const foreverRaces: ForeverRace[] = [
  { key: 'orc', name: 'Orc', faction: 'horde', classes: { warrior: 'classic', hunter: 'classic', mage: 'new', rogue: 'classic', warlock: 'classic', shaman: 'classic' } },
  { key: 'troll', name: 'Troll', faction: 'horde', classes: { warrior: 'classic', hunter: 'classic', mage: 'classic', rogue: 'classic', priest: 'classic', warlock: 'new', shaman: 'classic' } },
  { key: 'tauren', name: 'Tauren', faction: 'horde', classes: { warrior: 'classic', hunter: 'classic', druid: 'classic', shaman: 'classic' } },
  { key: 'undead', name: 'Undead', faction: 'horde', classes: { warrior: 'classic', mage: 'classic', rogue: 'classic', priest: 'classic', warlock: 'classic', paladin: 'new' } },
  { key: 'windshaper-skyborne', name: 'Windshaper Skyborne', faction: 'horde', classes: { warrior: 'new', hunter: 'new', rogue: 'new', druid: 'new', shaman: 'new' } },
  { key: 'human', name: 'Human', faction: 'alliance', classes: { warrior: 'classic', hunter: 'new', mage: 'classic', rogue: 'classic', priest: 'classic', warlock: 'classic', paladin: 'classic' } },
  { key: 'dwarf', name: 'Dwarf', faction: 'alliance', classes: { warrior: 'classic', hunter: 'classic', rogue: 'classic', priest: 'classic', paladin: 'classic', shaman: 'new' } },
  { key: 'night-elf', name: 'Night Elf', faction: 'alliance', classes: { warrior: 'classic', hunter: 'classic', rogue: 'classic', priest: 'classic', druid: 'classic' } },
  { key: 'gnome', name: 'Gnome', faction: 'alliance', classes: { warrior: 'classic', mage: 'classic', rogue: 'classic', priest: 'new', warlock: 'classic' } },
  { key: 'high-order-skyborne', name: 'High Order Skyborne', faction: 'alliance', classes: { warrior: 'new', hunter: 'new', mage: 'new', rogue: 'new', druid: 'new' } },
];

export type TradeskillType = 'gathering' | 'crafting' | 'secondary';

/** De kleur van het ruitje per soort tradeskill (handoff §7.4). */
export const tradeskillColors: Record<TradeskillType, string> = {
  gathering: '#7fae6a',
  crafting: '#e0b77a',
  secondary: '#4f7fd9',
};

const everyEra = ['forever', ...guideEras] as const;

export type Tradeskill = {
  key: string;
  name: string;
  type: TradeskillType;
  /** De era's waarin deze tradeskill bestaat. */
  eras: readonly ('forever' | GuideEra)[];
};

/** Alle tradeskills, eerst de primaire en dan de secundaire, elk alfabetisch. */
export const tradeskills: Tradeskill[] = [
  { key: 'alchemy', name: 'Alchemy', type: 'crafting', eras: everyEra },
  { key: 'blacksmithing', name: 'Blacksmithing', type: 'crafting', eras: everyEra },
  { key: 'enchanting', name: 'Enchanting', type: 'crafting', eras: everyEra },
  { key: 'engineering', name: 'Engineering', type: 'crafting', eras: everyEra },
  { key: 'herbalism', name: 'Herbalism', type: 'gathering', eras: everyEra },
  { key: 'inscription', name: 'Inscription', type: 'crafting', eras: ['wotlk', 'cata', 'mop'] },
  { key: 'jewelcrafting', name: 'Jewelcrafting', type: 'crafting', eras: ['tbc', 'wotlk', 'cata', 'mop'] },
  { key: 'leatherworking', name: 'Leatherworking', type: 'crafting', eras: everyEra },
  { key: 'mining', name: 'Mining', type: 'gathering', eras: everyEra },
  { key: 'skinning', name: 'Skinning', type: 'gathering', eras: everyEra },
  { key: 'tailoring', name: 'Tailoring', type: 'crafting', eras: everyEra },
  { key: 'cooking', name: 'Cooking', type: 'secondary', eras: everyEra },
  { key: 'first-aid', name: 'First Aid', type: 'secondary', eras: everyEra },
  { key: 'fishing', name: 'Fishing', type: 'secondary', eras: everyEra },
];

export function tradeskillByKey(key: string): Tradeskill | undefined {
  return tradeskills.find((skill) => skill.key === key);
}
