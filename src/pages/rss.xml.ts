/* /rss.xml: de Engelse nieuwsfeed. De andere talen staan in [lang]/rss.xml.ts. */
import type { APIRoute } from 'astro';
import { rssResponse } from '../lib/rss';
import { defaultLocale } from '../i18n/ui';

export const GET: APIRoute = ({ site }) => rssResponse(defaultLocale, site);
