/*
 * /sitemap.xml: dé sitemap van de site, en het enige adres dat we naar buiten
 * brengen (Nutri, 15 september 2026). `robots.txt` wijst hiernaar en dit is
 * het adres voor Search Console, want dit is de naam die elke crawler eerst
 * probeert en die elke site gebruikt.
 *
 * Het is een sitemap-index die naar de sitemap van @astrojs/sitemap wijst.
 * Die integratie schrijft zelf ook sitemap-index.xml en sitemap-0.xml; die
 * eerste blijft bestaan maar wordt nergens meer genoemd.
 *
 * Eén deel volstaat: de integratie begint pas bij 45.000 adressen aan een
 * tweede. Komt er ooit een sitemap-1.xml bij, dan hoort die hier ook.
 */

import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL('/sitemap-0.xml', base).href}</loc></sitemap>
</sitemapindex>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
