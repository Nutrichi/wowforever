/*
 * /api/v1/guides/<taal>/<pad>.json: een gids met de tekst erin, zoals
 * /api/v1/guides/nl/dungeons/the-deadmines.json. Ook elke pet heeft er een.
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { locales, type Locale } from '../../../../../i18n/ui';
import { jsonResponse } from '../../../../../lib/api-feed';
import { getGuides, guideDetail, guidePath } from '../../../../../lib/api-guides';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (const lang of locales) {
    for (const page of await getGuides(lang)) {
      paths.push({ params: { lang, path: guidePath(page) }, props: { page } });
    }
  }
  return paths;
};

export const GET: APIRoute = async ({ props, params, site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse(await guideDetail(props.page, params.lang as Locale, base));
};
