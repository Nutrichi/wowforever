/*
 * De factiegidsen van REPUTATIONS (PROJECT_SPEC.md §5).
 *
 * Alleen voor WoW Forever (Nutri, 15 september 2026), dus zonder era: één
 * bestand per factie per taal, reputations/<taal>/<factie>.md, op
 * /reputations/<factie>/. De facties van Classic Era zijn het vertrekpunt en
 * worden bijgewerkt zodra Forever zelf meer toont.
 *
 * Ontbreekt de vertaling, dan komt de Engelse tekst, zoals bij de gidsen.
 * Concepten (`draft: true`) worden nooit gebouwd. De navigatie, de sitemap en
 * /llms.txt lezen hiervandaan.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from '../i18n/ui';
import { isLocale, localizePath } from '../i18n/utils';

type Entry = CollectionEntry<'reputations'>;

export type Reputation = {
  /** `timbermaw-hold`, het laatste deel van het adres. */
  slug: string;
  /** De taal van de tekst die je hier krijgt; niet altijd de gevraagde taal. */
  lang: Locale;
  isFallback: boolean;
  href: string;
  entry: Entry;
  data: Entry['data'];
};

/** Het adres van de lijst of van één factie, in een taal. Altijd met slash op het einde. */
export function reputationPath(locale: Locale, slug?: string): string {
  return `${localizePath(slug ? `reputations/${slug}` : 'reputations', locale)}/`;
}

function split(entry: Entry): { lang: Locale; slug: string } {
  const [lang, ...rest] = entry.id.split('/');
  if (!isLocale(lang) || rest.length !== 1) {
    throw new Error(`Factie ${entry.id} staat niet als <taal>/<factie>.md`);
  }
  return { lang, slug: rest[0] };
}

async function readAll(): Promise<Entry[]> {
  return (await getCollection('reputations')).filter((entry) => !entry.data.draft);
}

let cache: Promise<Entry[]> | undefined;

/* Bij het bouwen één keer inlezen; in `astro dev` telkens, zodat een nieuwe factie meteen verschijnt. */
function loadAll(): Promise<Entry[]> {
  if (!import.meta.env.PROD) return readAll();
  cache ??= readAll();
  return cache;
}

/** Alle facties in één taal, alfabetisch op de naam uit het spel. */
export async function getReputations(locale: Locale): Promise<Reputation[]> {
  const bySlug = new Map<string, Map<Locale, Entry>>();
  for (const entry of await loadAll()) {
    const { lang, slug } = split(entry);
    if (!bySlug.has(slug)) bySlug.set(slug, new Map());
    bySlug.get(slug)!.set(lang, entry);
  }

  const list: Reputation[] = [];
  for (const [slug, byLang] of bySlug) {
    const lang = byLang.has(locale) ? locale : byLang.has(defaultLocale) ? defaultLocale : undefined;
    if (!lang) continue;
    const entry = byLang.get(lang)!;
    list.push({ slug, lang, isFallback: lang !== locale, href: reputationPath(locale, slug), entry, data: entry.data });
  }

  return list.sort((a, b) => a.data.faction.localeCompare(b.data.faction, 'en'));
}

export async function getReputation(slug: string, locale: Locale): Promise<Reputation | undefined> {
  return (await getReputations(locale)).find((reputation) => reputation.slug === slug);
}

/** De laatste datum van alle facties, voor de telregel bovenaan. */
export async function reputationsUpdated(): Promise<Date | undefined> {
  const dates = (await getReputations(defaultLocale)).map((reputation) => reputation.data.updated.getTime());
  return dates.length ? new Date(Math.max(...dates)) : undefined;
}
