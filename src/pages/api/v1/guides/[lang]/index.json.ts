/*
 * /api/v1/guides/<taal>/index.json: alle gidsen in een taal, zonder tekst.
 *
 * De pets en de mounts staan hier niet per stuk in: die komen als eigen lijst
 * uit /api/v1/guides/pets.json en mounts.json, met zoeken en filters in de app.
 * Hun pagina's bestaan wel als detail, voor wie er een opent.
 *
 * `hub` is de indeling van de hub /guides/ (lib/guides-hub.ts): Onlangs
 * bijgewerkt, de categorieën met hun kaarten in de volgorde van de site, en de
 * levelband van de dungeons. Kaarten naar een sectie buiten /guides/ (Routes,
 * Classes, Tradeskills, Reputations) staan er niet in: de app linkt niet naar
 * de site als hoofdhandeling (AFSPRAKEN.md §16 en §17 van de app). Het veld is
 * nieuw op 10 oktober 2026 en optioneel; een app zonder kent de lijst `guides`.
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { getImage } from 'astro:assets';
import { locales, type Locale } from '../../../../../i18n/ui';
import { jsonResponse } from '../../../../../lib/api-feed';
import { GUIDES_SCHEMA, channelUrl, getGuides, guideSummary } from '../../../../../lib/api-guides';
import { hubDungeons, type HubCard } from '../../../../../config/guides-hub';
import { hubImageOf, hubImageWidths, hubModel, isExternalCard } from '../../../../../lib/guides-hub';
import { hubBlurbs, hubT } from '../../../../../i18n/guides-hub';

export const getStaticPaths: GetStaticPaths = () => locales.map((lang) => ({ params: { lang } }));

async function imageUrls(file: string | undefined, widths: number[], site: URL) {
  const image = hubImageOf(file);
  if (!image) return null;
  const result = await getImage({ src: image, widths, format: 'webp' });
  const src: Record<string, string> = {};
  for (const variant of result.srcSet.values) {
    const width = String(variant.attributes?.width ?? variant.descriptor ?? '').replace('w', '');
    if (width) src[width] = new URL(variant.url, site).href;
  }
  return src;
}

async function hub(lang: Locale, site: URL) {
  const t = hubT(lang);
  const blurbs = hubBlurbs[lang];
  const { pageOf, categories, recent } = await hubModel(lang);

  const card = async (c: HubCard, widths = hubImageWidths.card) => ({
    /* Het pad onder /guides/, zoals in `guides`; bij een reeks het eerste deel. */
    id: c.key,
    /* De delen van een reeks, zoals de vijf levelgidsen van de Skyborne Druid. */
    parts: c.parts ?? null,
    title: c.label ? t(c.label) : pageOf(c.key)?.short ?? c.key,
    blurb: blurbs[c.label === 'cardLeveling' ? 'leveling' : c.key] ?? null,
    levels: c.levels ?? null,
    isNew: c.isNew ?? false,
    image: await imageUrls(c.image, widths, site),
  });

  return {
    labels: { recent: t('recent'), new: t('new'), band: t('bandTitle') },
    recent: await Promise.all(recent.map(({ card: c, updated }) =>
      card(c, hubImageWidths.recent).then((out) => ({ ...out, updated: updated.toISOString().slice(0, 10) })))),
    categories: await Promise.all(categories
      .filter((category) => !category.external)
      .map(async (category) => ({
        key: category.key,
        title: t(`c_${category.key}` as Parameters<typeof t>[0]),
        cards: await Promise.all(category.cards.filter((c) => !isExternalCard(c)).map((c) => card(c))),
      }))),
    dungeons: hubDungeons.map((d) => ({
      name: d.name,
      min: d.min,
      max: d.max,
      /* Alleen als de gids op de site echt bestaat. */
      guide: d.key && pageOf(d.key) ? d.key : null,
      isNew: d.isNew ?? false,
    })),
  };
}

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
    hub: await hub(lang, base),
  });
};
