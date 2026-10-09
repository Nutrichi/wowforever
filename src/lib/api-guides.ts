/*
 * De gidsen voor de app (/api/v1/guides). De Gidsen-tab van de iOS-app leest dit
 * (AFSPRAKEN.md §17 van de app).
 *
 * Zelfde aanpak als de nieuwsfeed in api-feed.ts: de Markdown onder
 * src/content/pages blijft de enige waarheid, dit vertaalt hem alleen. Wat hier
 * staat, komt uit `getPages()`, dus de app toont nooit een gids die de site niet
 * toont; een concept (`draft: true`, zoals Mounts) valt daar al af.
 *
 * Eén verschil met het nieuws: **geen link naar Wowhead in de app** (AFSPRAKEN.md
 * §16 van de app). De naam en het icoon blijven staan, de link gaat eraf.
 */

import { render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getPages, type SitePage } from './pages';
import { API_SCHEMA, forApp } from './api-feed';
import type { Locale } from '../i18n/ui';
import { social } from '../config/site';

/** Verhoog dit alleen samen met een nieuwe vorm; de app controleert het. */
export const GUIDES_SCHEMA = 1;

/** Alles onder guides/, behalve de map zelf. */
export async function getGuides(locale: Locale): Promise<SitePage[]> {
  return (await getPages(locale)).filter((page) => page.key.startsWith('guides/'));
}

/** `guides/dungeons/the-deadmines` wordt `dungeons/the-deadmines`. */
export function guidePath(page: SitePage): string {
  return page.key.slice('guides/'.length);
}

/** De rubriek in de app: dungeons, pets of de rest. */
function sectionOf(path: string): 'dungeons' | 'pets' | 'general' {
  if (path.startsWith('dungeons/')) return 'dungeons';
  if (path.startsWith('pets/')) return 'pets';
  return 'general';
}

export function guideSummary(page: SitePage, locale: Locale, site: URL) {
  const path = guidePath(page);
  return {
    id: path,
    section: sectionOf(path),
    lang: page.lang,
    isFallback: page.isFallback,
    title: page.title,
    short: page.short,
    description: page.description,
    updated: page.updated.toISOString().slice(0, 10),
    /* Een eigen video bij de gids, als die er is: het id op YouTube. */
    video: page.entry.data.video ?? null,
    url: new URL(page.href, site).href,
    detail: new URL(`/api/v${API_SCHEMA}/guides/${locale}/${path}.json`, site).href,
  };
}

let container: Promise<AstroContainer> | null = null;
function getContainer() {
  if (!container) container = AstroContainer.create();
  return container;
}

/**
 * Een link naar Wowhead wordt een `span` met dezelfde klassen: de kleur van de
 * kwaliteit en het icoon blijven, alleen tikken doet niets meer.
 */
export function withoutWowhead(html: string): string {
  return html.replace(
    /<a\b([^>]*?)\shref="https?:\/\/(?:www\.)?wowhead\.com[^"]*"([^>]*)>([\s\S]*?)<\/a>/g,
    (_m, before: string, after: string, inner: string) => `<span${before}${after}>${inner}</span>`,
  );
}

function absolutise(html: string, site: URL): string {
  return html.replace(/(\s(?:src|href)=")\/(?!\/)/g, `$1${site.origin}/`);
}

export async function guideDetail(page: SitePage, locale: Locale, site: URL) {
  const { Content } = await render(page.entry);
  const html = await (await getContainer()).renderToString(Content);
  return {
    schema: GUIDES_SCHEMA,
    ...guideSummary(page, locale, site),
    bodyHtml: forApp(withoutWowhead(absolutise(html, site))),
  };
}

/** Het kanaal voor de knop in de app, zonder de abonneerparameter van de site. */
export function channelUrl(): string {
  return social.youtube.split('?')[0];
}
