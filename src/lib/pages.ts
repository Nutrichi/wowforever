/*
 * De losse pagina's buiten de zeven secties (PROJECT_SPEC.md §4.4, fase 5):
 * de hub /forever/, de levelroutes onder /routes/ en de vergelijkingen onder
 * /compare/.
 *
 * Een pagina staat per taal als pages/<taal>/<pad>.md; het pad is het adres.
 * Ontbreekt de vertaling, dan komt de Engelse tekst, zoals bij de posts en de
 * gidsen. Concepten (`draft: true`) worden nooit gebouwd. Een route of een
 * vergelijking zonder Engelse tekst heeft dus ook geen pagina (§4.2).
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import type { GuideEra } from '../config/guides';
import { defaultLocale, type Locale } from '../i18n/ui';
import { isLocale, localizePath } from '../i18n/utils';

type Entry = CollectionEntry<'pages'>;

export type SitePage = {
  /** Het taalloze pad: `forever`, `routes`, `routes/1-60`, `compare/restedxp-vs-zygor`. */
  key: string;
  /** De taal van de tekst die je hier krijgt; niet altijd de gevraagde taal. */
  lang: Locale;
  isFallback: boolean;
  title: string;
  metaTitle: string;
  description: string;
  short: string;
  updated: Date;
  faq: { q: string; a: string }[];
  sources: { name: string; url: string }[];
  href: string;
  entry: Entry;
};

/** De route van elke era met classgidsen, voor de link op CLASSES. */
export const routeKeyForEra: Partial<Record<GuideEra, string>> = {
  classic: 'routes/1-60',
  tbc: 'routes/60-70',
  wotlk: 'routes/70-80',
  cata: 'routes/80-85',
  mop: 'routes/85-90',
};

/** Het adres van een pagina in een taal, altijd met slash op het einde. */
export function pagePath(key: string, locale: Locale): string {
  return `${localizePath(key, locale)}/`;
}

function split(entry: Entry): { lang: Locale; key: string } {
  const [lang, ...rest] = entry.id.split('/');
  if (!isLocale(lang) || rest.length === 0) {
    throw new Error(`Pagina ${entry.id} staat niet als <taal>/<pad>.md`);
  }
  return { lang, key: rest.join('/') };
}

async function readAll(): Promise<Entry[]> {
  return (await getCollection('pages')).filter((entry) => !entry.data.draft);
}

let cache: Promise<Entry[]> | undefined;

/* Bij het bouwen één keer inlezen; in `astro dev` telkens, zodat een nieuwe pagina meteen verschijnt. */
function loadAll(): Promise<Entry[]> {
  if (!import.meta.env.PROD) return readAll();
  cache ??= readAll();
  return cache;
}

/** Alle pagina's in één taal, gesorteerd op pad. */
export async function getPages(locale: Locale): Promise<SitePage[]> {
  const byKey = new Map<string, Map<Locale, Entry>>();
  for (const entry of await loadAll()) {
    const { lang, key } = split(entry);
    if (!byKey.has(key)) byKey.set(key, new Map());
    byKey.get(key)!.set(lang, entry);
  }

  const pages: SitePage[] = [];
  for (const [key, byLang] of byKey) {
    const lang = byLang.has(locale) ? locale : byLang.has(defaultLocale) ? defaultLocale : undefined;
    if (!lang) continue;
    const entry = byLang.get(lang)!;
    const data = entry.data;
    pages.push({
      key,
      lang,
      isFallback: lang !== locale,
      title: data.title,
      metaTitle: data.metaTitle ?? data.title,
      description: data.description,
      short: data.short ?? data.title,
      updated: data.updated,
      faq: data.faq,
      sources: data.sources,
      href: pagePath(key, locale),
      entry,
    });
  }

  return pages.sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true }));
}

export async function getPage(key: string, locale: Locale): Promise<SitePage | undefined> {
  return (await getPages(locale)).find((page) => page.key === key);
}

/**
 * De slugs onder een map, voor getStaticPaths: `undefined` is de pagina van de
 * map zelf (/routes/), een string een pagina eronder (/routes/1-60/).
 */
export async function pageSlugs(folder: 'routes' | 'compare'): Promise<(string | undefined)[]> {
  const keys = (await getPages(defaultLocale)).map((page) => page.key);
  return keys
    .filter((key) => key === folder || key.startsWith(`${folder}/`))
    .map((key) => (key === folder ? undefined : key.slice(folder.length + 1)));
}
