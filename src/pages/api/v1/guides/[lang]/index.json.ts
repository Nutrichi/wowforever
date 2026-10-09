/*
 * /api/v1/guides/<taal>/index.json: alle gidsen in een taal, zonder tekst.
 *
 * De pets en de mounts staan hier niet per stuk in: die komen als eigen lijst
 * uit /api/v1/guides/pets.json en mounts.json, met zoeken en filters in de app.
 * Hun pagina's bestaan wel als detail, voor wie er een opent.
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { locales, type Locale } from '../../../../../i18n/ui';
import { jsonResponse } from '../../../../../lib/api-feed';
import { GUIDES_SCHEMA, channelUrl, getGuides, guideSummary } from '../../../../../lib/api-guides';

export const getStaticPaths: GetStaticPaths = () => locales.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = async ({ params, site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const lang = params.lang as Locale;
  const guides = (await getGuides(lang)).map((page) => guideSummary(page, lang, base));
  return jsonResponse({
    schema: GUIDES_SCHEMA,
    lang,
    channel: channelUrl(),
    pets: new URL('/api/v1/guides/pets.json', base).href,
    mounts: new URL('/api/v1/guides/mounts.json', base).href,
    guides: guides.filter((guide) => guide.section !== 'pets' && guide.section !== 'mounts'),
  });
};
