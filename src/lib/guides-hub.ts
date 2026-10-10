/*
 * De indeling van de hub /guides/, op één plek berekend: welke kaarten er
 * staan (een kaart naar een gids die er niet is, valt weg) en welke vier gidsen
 * onder Onlangs bijgewerkt komen. `components/guides/GuidesHub.astro` tekent
 * het op de site, `/api/v1/guides/<taal>/index.json` geeft het aan de Gidsen-tab
 * van de app (AFSPRAKEN.md §17 van de app). Zo kan de app niet anders ingedeeld
 * zijn dan de site.
 */

import type { ImageMetadata } from 'astro';
import { hubCategories, type HubCard } from '../config/guides-hub';
import { getPages } from './pages';
import type { Locale } from '../i18n/ui';

export const isExternalCard = (card: HubCard) => card.key.startsWith('/');

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/posts/*.{jpg,jpeg,png,webp}', { eager: true });

export function hubImageOf(file?: string) {
  if (!file) return undefined;
  const match = Object.entries(imageFiles).find(([path]) => path.endsWith(`/${file}`));
  // Een verkeerde bestandsnaam faalt luid bij het bouwen, niet stil als lege kaart.
  if (!match) throw new Error(`Beeld voor de gidsenhub niet gevonden: ${file}`);
  return match[1].default;
}

/*
 * De breedtes van een kaartbeeld, dezelfde als in GuidesHub.astro: zo geeft de
 * feed dezelfde bestanden als de pagina en maakt de build er geen bij.
 */
export const hubImageWidths = { recent: [240, 400], card: [320, 520] };

export async function hubModel(locale: Locale) {
  const pages = await getPages(locale);
  const pageOf = (key: string) => pages.find((page) => page.key === `guides/${key}`);

  const categories = hubCategories
    .map((category) => ({
      ...category,
      cards: category.cards.filter((card) => isExternalCard(card) || pageOf(card.key)),
    }))
    .filter((category) => category.cards.length > 0);

  /*
   * Onlangs bijgewerkt: de vier gidsen met de recentste `updated`, elke kaart één
   * keer (de delen van een reeks tellen als hun kaart). Bij gelijke datum de
   * volgorde van de hub.
   */
  const recent = categories
    .flatMap((category) => category.cards)
    .filter((card) => !isExternalCard(card))
    .map((card, order) => {
      const keys = card.parts ?? [card.key];
      const updated = new Date(Math.max(...keys.map((key) => pageOf(key)?.updated.getTime() ?? 0)));
      return { card, order, updated };
    })
    .sort((a, b) => b.updated.getTime() - a.updated.getTime() || a.order - b.order)
    .slice(0, 4);

  return { pages, pageOf, categories, recent };
}
