/*
 * De RSS-feed van het nieuws, één per taal (8 oktober 2026): /rss.xml voor
 * het Engels, /nl/rss.xml en zo verder voor de andere talen.
 *
 * Google News, Feedly, Flipboard en de meeste andere lezers vinden nieuwe
 * posts via een feed. De pagina's verwijzen ernaar met een
 * <link rel="alternate" type="application/rss+xml"> in de head (BaseLayout).
 *
 * Alleen posts die echt in die taal bestaan: een Engelse tekst onder /nl/
 * hoort niet in de Nederlandse feed. Ingeplande posts laat getPosts al weg.
 */

import { getPosts } from './posts';
import { defaultLocale, localeTags, type Locale } from '../i18n/ui';
import { localizePath, useTranslations } from '../i18n/utils';

/** Zoveel posts staan er in de feed; lezers onthouden zelf wat ouder is. */
const LIMIT = 50;

const esc = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const mime = (src: string) => {
  const ext = src.split('?')[0].split('.').pop()?.toLowerCase();
  if (ext === 'png') return 'image/png';
  if (ext === 'webp') return 'image/webp';
  if (ext === 'avif') return 'image/avif';
  return 'image/jpeg';
};

export function rssPath(locale: Locale): string {
  return locale === defaultLocale ? '/rss.xml' : `/${locale}/rss.xml`;
}

export async function rssResponse(locale: Locale, site: URL | undefined): Promise<Response> {
  const base = site ?? new URL('https://wowforever.be');
  const url = (path: string) => new URL(path, base).href;
  const t = useTranslations(locale);

  const posts = (await getPosts(locale)).filter((post) => !post.isFallback).slice(0, LIMIT);
  const built = posts[0]?.date ?? new Date();

  const items = posts
    .map((post) => {
      const link = url(post.href);
      const image = post.image
        ? `\n      <media:content url="${esc(url(post.image.src))}" medium="image" type="${mime(post.image.src)}" />`
        : '';
      const category = `\n      <category>${esc(post.category)}</category>`;
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${esc(post.description)}</description>${category}${image}
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${esc(t('site.title'))}</title>
    <link>${esc(url(localizePath('', locale)))}</link>
    <description>${esc(t('site.description'))}</description>
    <language>${localeTags[locale]}</language>
    <lastBuildDate>${built.toUTCString()}</lastBuildDate>
    <atom:link href="${esc(url(rssPath(locale)))}" rel="self" type="application/rss+xml" />
    <image>
      <url>${esc(url('/assets/icon-192.png'))}</url>
      <title>${esc(t('site.title'))}</title>
      <link>${esc(url(localizePath('', locale)))}</link>
    </image>
${items}
  </channel>
</rss>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
