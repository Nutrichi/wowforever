/*
 * Het deelbeeld van een pagina uit de collectie `pages` (gidsen, routes,
 * vergelijkingen, tradeskills): og:image, twitter:image en `image` in de
 * JSON-LD van Article (20 oktober 2026, Nutri: "check all pages in the guides
 * section if they will be easily found by google, crawlers, ai, ... feeds").
 * Tot dan kreeg elke gids het algemene og-image.png, dus elke gedeelde gids
 * toonde hetzelfde beeld en Google had geen beeld voor Discover.
 *
 * Volgorde: het beeld van de eigen kaart in de hub (config/guides-hub.ts),
 * anders het eerste beeld uit src/assets/posts in de tekst, anders de kaart
 * van de pagina erboven (een tab van een dungeon, een tradeskill onder
 * /tradeskills), anders niets: dan blijft het algemene beeld.
 */

import type { ImageMetadata } from 'astro';
import { hubCategories } from '../config/guides-hub';
import type { SitePage } from './pages';

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/posts/*.{jpg,jpeg,png,webp}', { eager: true });

function fileOf(name: string): ImageMetadata | undefined {
  const match = Object.entries(imageFiles).find(([path]) => path.endsWith(`/${name}`));
  return match?.[1].default;
}

const cards = hubCategories.flatMap((category) => category.cards);

/** De kaart van deze pagina in de hub; met `ancestors` ook die van de pagina erboven (dungeon-tabs). */
function cardImage(key: string, ancestors: boolean): string | undefined {
  const guideKey = key.startsWith('guides/') ? key.slice('guides/'.length) : `/${key}`;
  const parts = guideKey.split('/');
  for (let n = parts.length; n > 0; n--) {
    const candidate = parts.slice(0, n).join('/');
    if (!candidate || candidate === '/') break;
    const card = cards.find((c) => c.image && (c.key === candidate || c.parts?.includes(candidate)));
    if (card?.image) return card.image;
    if (!ancestors) break;
  }
  return undefined;
}

export function pageImage(page: SitePage): ImageMetadata | undefined {
  // De hub zelf neemt het beeld van zijn eerste kaart.
  if (page.key === 'guides') {
    const first = cards.find((c) => c.image)?.image;
    return first ? fileOf(first) : undefined;
  }
  const own = cardImage(page.key, false);
  if (own && fileOf(own)) return fileOf(own);
  const body = page.entry.body ?? '';
  const inline = body.match(/assets\/posts\/([^)\s"']+\.(?:jpe?g|png|webp))/i);
  if (inline && fileOf(inline[1])) return fileOf(inline[1]);
  const parent = cardImage(page.key, true);
  return parent ? fileOf(parent) : undefined;
}
