/* /nl/guides/rss.xml enzovoort: de feed van de gidsen in de vijf niet-standaardtalen (lib/rss.ts). */
import type { APIRoute } from 'astro';
import { guidesRssResponse } from '../../../lib/rss';
import { otherLocales } from '../../../lib/posts';
import type { Locale } from '../../../i18n/ui';

export function getStaticPaths() {
  return otherLocales.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params, site }) => guidesRssResponse(params.lang as Locale, site);
