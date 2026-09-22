/*
 * /api/v1/bis/<era>-<fase>-<class>-<spec>.json: één BiS-lijst.
 *
 * Eén bestand per lijst en niet per taal: de itemnamen zijn in elke taal
 * Engels, en de notities gaan in alle zes de talen mee (lib/api-bis.ts).
 *
 * `url` wijst naar dezelfde lijst op de site, per taal. Dat is waar de app
 * naartoe stuurt als iemand op een item tikt: daar staan de bron, de enchants
 * en de link naar Wowhead.
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { getBisLists, bisPath } from '../../../../lib/bis';
import { jsonResponse } from '../../../../lib/api-feed';
import { apiBisId, apiBisList } from '../../../../lib/api-bis';
import { locales } from '../../../../i18n/ui';

export const getStaticPaths: GetStaticPaths = () =>
  getBisLists().map((list) => ({ params: { id: apiBisId(list) }, props: { list } }));

export const GET: APIRoute = ({ props, site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const list = props.list as ReturnType<typeof getBisLists>[number];

  const urls: Record<string, string> = {};
  for (const locale of locales) {
    urls[locale] = new URL(bisPath(locale, list.era, list.phase, list.slug), base).href;
  }

  return jsonResponse(apiBisList(list, urls));
};
