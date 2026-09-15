/*
 * De zeven era's van de era-schakelaar (PROJECT_SPEC.md §4.3, handoff §6.2).
 *
 * De volgorde ligt vast: Forever eerst omdat het de focus is, daarna in de
 * volgorde van de uitbreidingen (Nutri, 14 september 2026). Forever is de standaard.
 *
 * De keuze geldt voor BIS, CLASSES, TRADESKILLS en REPUTATIONS tegelijk.
 * Elke era heeft een eigen pagina per sectie (`/bis/tbc/`), zodat hij zonder
 * JavaScript werkt en vindbaar is; de keuze wordt onthouden in `wf-era`, en
 * het overzicht van een sectie stuurt door naar de onthouden era.
 *
 * Tellingen per era komen uit de data en worden hier nooit getypt. De namen
 * zijn eigennamen en worden nooit vertaald (SCHRIJFSTIJL.md §6).
 */

export const eraKeys = ['forever', 'classic', 'tbc', 'wotlk', 'cata', 'mop', 'hardcore'] as const;
export type EraKey = (typeof eraKeys)[number];

export const defaultEra: EraKey = 'forever';

/** Waar de keuze in de browser staat. */
export const eraStorageKey = 'wf-era';

export type Era = {
  key: EraKey;
  /** Het label op de tab, in kapitalen. */
  short: string;
  /** De volledige naam, in koppen en zinnen. */
  name: string;
  /**
   * De kleur van het ruitje van deze era. Alleen voor ruitjes en randen, nooit
   * voor tekst; allemaal uit het palet van de handoff (§4.1).
   */
  color: string;
};

export const eras: Record<EraKey, Era> = {
  forever: { key: 'forever', short: 'FOREVER', name: 'WoW Forever', color: '#e0b77a' },
  tbc: { key: 'tbc', short: 'TBC', name: 'TBC Anniversary', color: '#7fae6a' },
  classic: { key: 'classic', short: 'CLASSIC', name: 'Classic Era', color: '#b5872f' },
  wotlk: { key: 'wotlk', short: 'WOTLK', name: 'WotLK Classic', color: '#4f7fd9' },
  cata: { key: 'cata', short: 'CATA', name: 'Cata Classic', color: '#b4553a' },
  mop: { key: 'mop', short: 'MOP', name: 'MoP Classic', color: '#f2d95c' },
  hardcore: { key: 'hardcore', short: 'HARDCORE', name: 'Hardcore', color: '#c0483f' },
};

export const eraList: Era[] = eraKeys.map((key) => eras[key]);

export function isEraKey(value: string | null | undefined): value is EraKey {
  return !!value && (eraKeys as readonly string[]).includes(value);
}
