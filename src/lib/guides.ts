/*
 * Eén plek die de gidsen van CLASSES en TRADESKILLS kent (PROJECT_SPEC.md §5).
 * REPUTATIONS heeft een eigen, eenvoudiger bron zonder era: lib/reputations.ts.
 *
 * Een gids staat per taal als eigen bestand onder
 * <collectie>/<taal>/<era>/<slug>.md. Ontbreekt de vertaling, dan komt de
 * Engelse tekst, zoals bij de posts. Concepten (`draft: true`) worden nooit
 * gebouwd. De navigatie, de era-tellingen, de sitemap en /llms.txt lezen
 * allemaal hiervandaan.
 *
 * De build faalt luid als de era in de frontmatter niet bij de map past, of
 * als de slug van een classgids niet <class>-<spec> is.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import type { EraKey } from '../config/eras';
import { classSpecs, guideEras, guideTabEras, isGuideEra, type GuideEra } from '../config/guides';
import { defaultLocale, type Locale } from '../i18n/ui';
import { isLocale, localizePath } from '../i18n/utils';

export type GuideKind = 'classes' | 'tradeskills';

type ClassEntry = CollectionEntry<'classes'>;
type TradeskillEntry = CollectionEntry<'tradeskills'>;
type Entry = ClassEntry | TradeskillEntry;

export type Guide = {
  kind: GuideKind;
  era: GuideEra;
  /** `warrior-arms` of `alchemy`, het laatste deel van het adres. */
  slug: string;
  /** De taal van de tekst die je hier krijgt; niet altijd de gevraagde taal. */
  lang: Locale;
  isFallback: boolean;
  title: string;
  description: string;
  updated: Date;
  href: string;
  entry: Entry;
  /** Alleen bij een classgids. */
  class?: string;
  spec?: string;
  role?: 'tank' | 'healer' | 'melee' | 'ranged';
  /** Alleen bij een tradeskillgids. */
  skill?: string;
};

/** Het adres van het overzicht, een era of één gids, in een taal. Altijd met slash op het einde. */
export function guidePath(kind: GuideKind, locale: Locale, era?: EraKey, slug?: string): string {
  if (!era || era === 'forever') return `${localizePath(kind, locale)}/`;
  if (slug) return `${localizePath(`${kind}/${era}/${slug}`, locale)}/`;
  return `${localizePath(`${kind}/${era}`, locale)}/`;
}

/** De adressen van de era-tabs op CLASSES of TRADESKILLS. */
export function guideHrefs(kind: GuideKind, locale: Locale): Partial<Record<EraKey, string>> {
  return Object.fromEntries(guideTabEras.map((era) => [era, guidePath(kind, locale, era)]));
}

function split(entry: Entry): { lang: Locale; era: GuideEra; slug: string } {
  const [lang, era, ...rest] = entry.id.split('/');
  if (!isLocale(lang) || !isGuideEra(era) || rest.length !== 1) {
    throw new Error(`Gids ${entry.id} staat niet als <taal>/<era>/<slug>.md`);
  }
  if (entry.data.era !== era) {
    throw new Error(`Gids ${entry.id}: era ${entry.data.era} in de frontmatter past niet bij de map ${era}`);
  }
  return { lang, era, slug: rest[0] };
}

async function readAll(kind: GuideKind): Promise<Entry[]> {
  const entries = kind === 'classes' ? await getCollection('classes') : await getCollection('tradeskills');
  return (entries as Entry[]).filter((entry) => !entry.data.draft);
}

const cache = new Map<GuideKind, Promise<Entry[]>>();

/* Bij het bouwen één keer inlezen; in `astro dev` telkens, zodat een nieuwe gids meteen verschijnt. */
function loadAll(kind: GuideKind): Promise<Entry[]> {
  if (!import.meta.env.PROD) return readAll(kind);
  if (!cache.has(kind)) cache.set(kind, readAll(kind));
  return cache.get(kind)!;
}

function toGuide(kind: GuideKind, entry: Entry, era: GuideEra, slug: string, lang: Locale, wanted: Locale): Guide {
  const data = entry.data;
  const guide: Guide = {
    kind,
    era,
    slug,
    lang,
    isFallback: lang !== wanted,
    title: data.title,
    description: data.description,
    updated: data.updated,
    href: guidePath(kind, wanted, era, slug),
    entry,
  };
  if (kind === 'classes') {
    const classData = (entry as ClassEntry).data;
    if (slug !== `${classData.class}-${classData.spec}`) {
      throw new Error(`Classgids ${entry.id}: de naam moet ${classData.class}-${classData.spec}.md zijn`);
    }
    if (!classSpecs[era][classData.class]?.includes(classData.spec)) {
      throw new Error(`Classgids ${entry.id}: ${classData.class} ${classData.spec} bestaat niet in ${era}`);
    }
    guide.class = classData.class;
    guide.spec = classData.spec;
    guide.role = classData.role;
  } else {
    guide.skill = (entry as TradeskillEntry).data.skill;
  }
  return guide;
}

/** Alle gidsen van één soort in één taal, gesorteerd op era en slug. */
export async function getGuides(kind: GuideKind, locale: Locale): Promise<Guide[]> {
  const byKey = new Map<string, Map<Locale, { entry: Entry; era: GuideEra; slug: string }>>();
  for (const entry of await loadAll(kind)) {
    const { lang, era, slug } = split(entry);
    const key = `${era}/${slug}`;
    if (!byKey.has(key)) byKey.set(key, new Map());
    byKey.get(key)!.set(lang, { entry, era, slug });
  }

  const guides: Guide[] = [];
  for (const byLang of byKey.values()) {
    const lang = byLang.has(locale) ? locale : byLang.has(defaultLocale) ? defaultLocale : undefined;
    if (!lang) continue;
    const found = byLang.get(lang)!;
    guides.push(toGuide(kind, found.entry, found.era, found.slug, lang, locale));
  }

  return guides.sort((a, b) => guideEras.indexOf(a.era) - guideEras.indexOf(b.era) || a.slug.localeCompare(b.slug));
}

export async function guidesForEra(kind: GuideKind, era: EraKey, locale: Locale): Promise<Guide[]> {
  return (await getGuides(kind, locale)).filter((guide) => guide.era === era);
}

export async function getGuide(kind: GuideKind, era: GuideEra, slug: string, locale: Locale): Promise<Guide | undefined> {
  return (await getGuides(kind, locale)).find((guide) => guide.era === era && guide.slug === slug);
}

/** Het aantal gidsen per era, ook nul, geteld op de Engelse bron. */
export async function guideCounts(kind: GuideKind): Promise<Record<EraKey, number>> {
  const counts = Object.fromEntries(guideTabEras.map((era) => [era, 0])) as Record<EraKey, number>;
  for (const guide of await getGuides(kind, defaultLocale)) counts[guide.era] += 1;
  return counts;
}

/** De laatste datum van een era, voor de telregel bovenaan. */
export async function guidesUpdated(kind: GuideKind, era: EraKey): Promise<Date | undefined> {
  const dates = (await getGuides(kind, defaultLocale)).filter((guide) => guide.era === era).map((guide) => guide.updated.getTime());
  return dates.length ? new Date(Math.max(...dates)) : undefined;
}

/** De era's die gidsen hebben, voor de navigatie en de doorverwijzing. */
export async function erasWithGuides(kind: GuideKind): Promise<GuideEra[]> {
  const counts = await guideCounts(kind);
  return guideEras.filter((era) => counts[era] > 0);
}

/** De era met de meeste gidsen, voor de knop in de lege staat. */
export async function largestGuideEra(kind: GuideKind): Promise<GuideEra> {
  const counts = await guideCounts(kind);
  return [...guideEras].sort((a, b) => counts[b] - counts[a])[0];
}
