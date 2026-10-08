/*
 * /news-sitemap.xml: de Google News-sitemap (8 oktober 2026). Alleen posts
 * van de laatste twee dagen, in elke taal die echt bestaat, zoals Google News
 * het vraagt. Zo ziet Google meteen wat nieuw is en haalt het die posts eerst.
 *
 * De lijst wordt bij elke build gemaakt. De site bouwt na elke push en daarna
 * om de paar uur op schema (deploy.yml), dus een post valt er vanzelf uit
 * zodra hij ouder is dan twee dagen. Een lege lijst is geldig.
 *
 * sitemap.xml en robots.txt verwijzen ernaar.
 */

import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { locales } from '../i18n/ui';

const TWO_DAYS = 2 * 24 * 60 * 60 * 1000;

const esc = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const since = Date.now() - TWO_DAYS;

  const urls: string[] = [];
  for (const locale of locales) {
    const posts = (await getPosts(locale)).filter((post) => !post.isFallback && post.date.getTime() >= since);
    for (const post of posts) {
      urls.push(`  <url>
    <loc>${esc(new URL(post.href, base).href)}</loc>
    <news:news>
      <news:publication>
        <news:name>WoW Forever</news:name>
        <news:language>${locale}</news:language>
      </news:publication>
      <news:publication_date>${post.date.toISOString()}</news:publication_date>
      <news:title>${esc(post.title)}</news:title>
    </news:news>
  </url>`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
