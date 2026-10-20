/* /guides/rss.xml: de Engelse feed van de gidsen. De andere talen staan in [lang]/guides/rss.xml.ts. */
import type { APIRoute } from 'astro';
import { guidesRssResponse } from '../../lib/rss';
import { defaultLocale } from '../../i18n/ui';

export const GET: APIRoute = ({ site }) => guidesRssResponse(defaultLocale, site);
