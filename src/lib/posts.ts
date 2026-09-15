/*
 * Eén plek die weet wat een post is. De homepage, de postpagina, de navigatie
 * en de sitemap lezen allemaal hiervandaan.
 *
 * Drie dingen gebeuren hier:
 *
 * 1. Concepten eruit. `draft: true` wordt nooit gebouwd of geïndexeerd.
 * 2. Taal kiezen. Een post bestaat per taal als een eigen bestand onder
 *    <collectie>/<taal>/<slug>.md. Ontbreekt de vertaling, dan komt de
 *    Engelse tekst.
 * 3. Nieuwste eerst.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryKeys, collectionPath, type CategoryKey } from '../config/categories';
import { defaultLocale, locales, type Locale } from '../i18n/ui';
import { isLocale, localizePath } from '../i18n/utils';

/** De collecties die als post in de feed verschijnen. */
type PostCollection = 'news';
type PostEntry = CollectionEntry<'news'>;

export type Post = {
  slug: string;
  /** Waar de post staat. Bepaalt de URL. */
  collection: PostCollection;
  /** Het spel waar hij over gaat. Bepaalt kleur, label en filter. */
  category: CategoryKey;
  /** Het pad naar deze post in de gevraagde taal. */
  href: string;
  /** De taal van de tekst die je hier krijgt; niet altijd de gevraagde taal. */
  lang: Locale;
  /** Waar de tekst nog Engels is omdat de vertaling ontbreekt. */
  isFallback: boolean;
  title: string;
  description: string;
  date: Date;
  featured: boolean;
  tags: string[];
  source?: string;
  sourceUrl?: string;
  image?: PostEntry['data']['image'];
  imageAlt?: string;
  /** Nodig om de Markdown te renderen op de postpagina. */
  entry: PostEntry;
  /** Ongeveer hoeveel minuten lezen; de metaregel van de postpagina. */
  readingMinutes: number;
};

/**
 * Splitst de id van de glob-loader. `en/beta-opens` geeft taal `en` en slug
 * `beta-opens`. Staat een bestand zonder taalmap, dan wint het `lang`-veld.
 */
function splitId(entry: PostEntry): { lang: Locale; slug: string } {
  const parts = entry.id.split('/');
  const first = parts[0];
  if (parts.length > 1 && isLocale(first)) {
    return { lang: first, slug: parts.slice(1).join('/') };
  }
  return { lang: entry.data.lang as Locale, slug: entry.id };
}

/** Ruwe schatting: 200 woorden per minuut, minimaal één. */
function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/*
 * Alles inlezen. Bij het bouwen wordt het antwoord onthouden; in `astro dev`
 * niet, anders zou een nieuwe post pas na een herstart verschijnen.
 */
async function readAll() {
  const news = await getCollection('news');
  return { news } as Record<PostCollection, PostEntry[]>;
}

let cache: ReturnType<typeof readAll> | null = null;

function loadAll() {
  if (!import.meta.env.PROD) return readAll();
  if (!cache) cache = readAll();
  return cache;
}

function toPost(
  entry: PostEntry,
  collection: PostCollection,
  slug: string,
  lang: Locale,
  wanted: Locale,
): Post {
  const data = entry.data;
  return {
    slug,
    collection,
    category: data.category as CategoryKey,
    // Met slash op het einde, zoals elke andere interne link (§17).
    href: `${localizePath(`${collectionPath[collection]}/${slug}`, wanted)}/`,
    lang,
    isFallback: lang !== wanted,
    title: data.title,
    description: data.description,
    date: data.date,
    featured: data.featured,
    tags: data.tags,
    source: data.source,
    sourceUrl: data.sourceUrl,
    image: data.image,
    imageAlt: data.imageAlt,
    entry,
    readingMinutes: readingMinutes(entry.body),
  };
}

/** Alle gepubliceerde posts in één taal, nieuwste eerst. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const all = await loadAll();
  const posts: Post[] = [];

  for (const collection of Object.keys(all) as PostCollection[]) {
    const bySlug = new Map<string, Map<Locale, PostEntry>>();

    for (const entry of all[collection]) {
      if (entry.data.draft) continue;
      const { lang, slug } = splitId(entry);
      if (!bySlug.has(slug)) bySlug.set(slug, new Map());
      bySlug.get(slug)!.set(lang, entry);
    }

    for (const [slug, byLang] of bySlug) {
      /*
       * De gevraagde taal, anders het Engels. Bestaat een post alleen in een
       * derde taal, dan is dat een fout in de content en geen geldige post.
       */
      const chosenLang = byLang.has(locale)
        ? locale
        : byLang.has(defaultLocale)
          ? defaultLocale
          : undefined;
      if (!chosenLang) continue;

      posts.push(toPost(byLang.get(chosenLang)!, collection, slug, chosenLang, locale));
    }
  }

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/** Het uitgelichte artikel: de post met `featured: true`, en anders de nieuwste. */
export function pickFeatured(posts: Post[]): Post | undefined {
  return posts.find((post) => post.featured) ?? posts[0];
}

/** Eén post opzoeken, voor de postpagina. */
export async function getPost(
  collection: PostCollection,
  slug: string,
  locale: Locale,
): Promise<Post | undefined> {
  const posts = await getPosts(locale);
  return posts.find((post) => post.collection === collection && post.slug === slug);
}

/** Elke slug van één collectie, voor `getStaticPaths`. */
export async function getSlugs(collection: PostCollection): Promise<string[]> {
  const posts = await getPosts(defaultLocale);
  return posts.filter((post) => post.collection === collection).map((post) => post.slug);
}

/** Welke categorieën echt posts hebben, in de vaste volgorde. */
export async function getUsedCategories(locale: Locale): Promise<CategoryKey[]> {
  const posts = await getPosts(locale);
  return categoryKeys.filter((key) => posts.some((post) => post.category === key));
}

/** Hoeveel posts er in deze taal staan. */
export async function getPostCount(locale: Locale): Promise<number> {
  return (await getPosts(locale)).length;
}

/** Alle talen, voor de routes met taalvoorvoegsel. */
export const otherLocales = locales.filter((locale) => locale !== defaultLocale);
