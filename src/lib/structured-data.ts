/*
 * Gestructureerde data (PROJECT_SPEC.md §11): de stukjes JSON-LD die meer dan
 * één pagina nodig heeft. Wat maar op één soort pagina staat, blijft in die
 * layout.
 *
 * Alle URL's zijn absoluut; JSON-LD met een relatief pad is voor een
 * zoekmachine een half gegeven.
 */

import { localeTags, type Locale } from '../i18n/ui';
import { localizePath } from '../i18n/utils';

const fallbackSite = new URL('https://wowforever.be');

export const absolute = (path: string, site: URL | undefined) =>
  new URL(path, site ?? fallbackSite).href;

/** WebSite op de homepage, met de zoekfunctie erbij (`?q=` filtert de lijst). */
export function websiteJsonLd(locale: Locale, site: URL | undefined) {
  const home = absolute(localizePath('', locale), site);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WoW Forever',
    url: home,
    inLanguage: localeTags[locale],
    publisher: publisherJsonLd(site),
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${home}?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** De broodkruimel, in de volgorde waarin hij op de pagina staat. */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>, site: URL | undefined) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path, site),
    })),
  };
}

/** De site als uitgever en auteur. Nooit een persoon (§2.1). */
export function publisherJsonLd(site: URL | undefined) {
  return {
    '@type': 'Organization',
    name: 'WoW Forever',
    url: absolute('/', site),
    logo: { '@type': 'ImageObject', url: absolute('/assets/icon-192.png', site) },
  };
}
