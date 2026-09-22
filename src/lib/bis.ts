/*
 * Eén plek die de BiS-lijsten kent (PROJECT_SPEC.md §5).
 *
 * Leest de 757 JSON-bestanden uit src/data/bis/ bij het bouwen, één keer, en
 * geeft ze gesorteerd terug. De pagina's, de navigatie, de sitemap en
 * /llms.txt lezen allemaal hiervandaan, zodat een telling nooit getypt wordt.
 *
 * Een bestand heet <era>-<fase>-<class>-<spec>.json; de inhoud moet daarmee
 * overeenkomen, anders faalt de build luid.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { eraKeys, type EraKey } from '../config/eras';
import { bisEras, bisTabEras, classes, isBisEra, phaseIds, type BisEra } from '../config/bis';

export type BisItem = { name: string; source?: string };
export type BisSlot = { slot: string; items: BisItem[] };
export type BisEnchant = { slot: string; name: string; source?: string };
export type BisGem = { color: string; name: string };

export type BisList = {
  era: BisEra;
  phase: string;
  class: string;
  spec: string;
  role: string;
  notes: string;
  updated: string;
  slots: BisSlot[];
  enchants: BisEnchant[];
  gems: BisGem[];
  /** `<class>-<spec>`, het laatste deel van het adres. */
  slug: string;
};

const DIR = path.join(process.cwd(), 'src/data/bis');

let cache: BisList[] | null = null;

function readAll(): BisList[] {
  const files = fs.readdirSync(DIR).filter((file) => file.endsWith('.json'));
  const lists: BisList[] = files.map((file) => {
    const raw = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
    const expected = `${raw.expansion}-${raw.phase}-${raw.class}-${raw.spec}.json`;
    if (file !== expected) throw new Error(`BiS-bestand ${file} past niet bij zijn inhoud (${expected})`);
    if (!isBisEra(raw.expansion)) throw new Error(`BiS-bestand ${file}: onbekende era ${raw.expansion}`);
    if (!phaseIds[raw.expansion as BisEra].includes(raw.phase)) {
      throw new Error(`BiS-bestand ${file}: onbekende fase ${raw.phase}`);
    }
    if (!classes[raw.class]) throw new Error(`BiS-bestand ${file}: onbekende class ${raw.class}`);
    return {
      era: raw.expansion,
      phase: raw.phase,
      class: raw.class,
      spec: raw.spec,
      role: raw.role ?? '',
      notes: raw.notes ?? '',
      updated: raw.updated ?? '',
      slots: raw.slots ?? [],
      enchants: raw.enchants ?? [],
      gems: raw.gems ?? [],
      slug: `${raw.class}-${raw.spec}`,
    };
  });

  return lists.sort((a, b) =>
    bisEras.indexOf(a.era) - bisEras.indexOf(b.era)
    || phaseIds[a.era].indexOf(a.phase) - phaseIds[b.era].indexOf(b.phase)
    || a.class.localeCompare(b.class)
    || a.spec.localeCompare(b.spec));
}

/** Alle lijsten, gesorteerd op era, fase, class en spec. */
export function getBisLists(): BisList[] {
  if (!cache) cache = readAll();
  return cache;
}

export function listsForEra(era: EraKey): BisList[] {
  return getBisLists().filter((list) => list.era === era);
}

/** Het aantal lijsten per era, ook nul voor Forever en Hardcore. */
export function bisEraCounts(): Record<EraKey, number> {
  const counts = Object.fromEntries(eraKeys.map((key) => [key, 0])) as Record<EraKey, number>;
  for (const list of getBisLists()) counts[list.era] += 1;
  return counts;
}

/** De fasen van een era die echt lijsten hebben, in volgorde. */
export function phasesWithLists(era: BisEra): string[] {
  const present = new Set(listsForEra(era).map((list) => list.phase));
  return phaseIds[era].filter((phase) => present.has(phase));
}

/** De datum van de laatst bijgewerkte lijst van een era. */
export function lastUpdated(era: EraKey): Date | undefined {
  const dates = listsForEra(era).map((list) => list.updated).filter(Boolean).sort();
  return dates.length ? new Date(`${dates[dates.length - 1]}T00:00:00Z`) : undefined;
}

/** Het adres van het overzicht, een era of één lijst, in een taal. */
export function bisPath(locale: Locale, era?: EraKey, phase?: string, slug?: string): string {
  // Met slash op het einde: zo stuurt GitHub Pages niet eerst nog door.
  if (!era || era === 'forever') return `${localizePath('bis', locale)}/`;
  if (phase && slug) return `${localizePath(`bis/${era}/${phase}/${slug}`, locale)}/`;
  return `${localizePath(`bis/${era}`, locale)}/`;
}

/**
 * Het adres van de eigen pagina van één fase: /bis/classic/p1/.
 *
 * Forever heeft geen era-pagina onder /bis/forever/ (dat is /bis/ zelf), maar
 * de fasen eronder hebben wél een eigen adres. Anders kan een zoekmachine
 * "wow forever bis phase 1" nergens naartoe sturen (PROJECT_SPEC.md §11).
 */
export function bisPhasePath(locale: Locale, era: EraKey, phase: string): string {
  return `${localizePath(`bis/${era}/${phase}`, locale)}/`;
}

/** De adressen van de era-tabs op de BiS-pagina's. */
export function eraHrefs(locale: Locale): Partial<Record<EraKey, string>> {
  return Object.fromEntries(bisTabEras.map((key) => [key, bisPath(locale, key)]));
}

/** De era met de meeste lijsten, voor de knop in de lege staat. */
export function largestEra(): BisEra {
  const counts = bisEraCounts();
  return [...bisEras].sort((a, b) => counts[b] - counts[a])[0];
}

/** Dezelfde class en spec in de andere fasen van een era. */
export function samSpecPhases(list: BisList): BisList[] {
  return listsForEra(list.era).filter((other) => other.slug === list.slug);
}

/** De andere specs van dezelfde class in dezelfde fase. */
export function siblingSpecs(list: BisList): BisList[] {
  return listsForEra(list.era).filter(
    (other) => other.phase === list.phase && other.class === list.class && other.spec !== list.spec,
  );
}
