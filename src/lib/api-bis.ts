/*
 * De BiS-lijsten als JSON, voor de iOS-app (/api/v1/bis).
 *
 * Waarom dit apart staat van api-feed.ts: een post is tekst en een BiS-lijst
 * is uitrusting. De app tekent daar het character pane van het spel mee, dus
 * wat hier uitgaat is per slot al klaar om op zijn plaats te zetten.
 *
 * De itemnamen blijven Engels, in elke taal (SCHRIJFSTIJL.md §6), dus de
 * lijsten zelf zijn taalvrij en staan één keer op de server. Wat wél vertaald
 * is, zijn de notities: die gaan in alle zes de talen mee in hetzelfde
 * bestand, want ze zijn kort.
 *
 * `pane` is de plaats in het character pane van WoW. De app hoeft de
 * 77 slotnamen uit de data dus niet te kennen: staat er `pane`, dan hoort het
 * item in dat vakje; staat er niets, dan hoort het onder het pane in de lijst
 * met de rest (een quiver, een reeks wapenopties, een tweede idol).
 *
 * Een item zonder `id` is een naam die niet bij Wowhead bevestigd is. Dan is
 * er ook geen icoon en geen kwaliteit, en toont de app hem in de gewone
 * tekstkleur. De app linkt zelf nooit naar Wowhead (Nutri, 22 september 2026):
 * `url` wijst naar de pagina op wowforever.be, en daar staan de Wowhead-links.
 */

import { slotParts, type BisEra } from '../config/bis';
import { wowheadEntry, splitName } from './bis-items';
import type { BisList } from './bis';
import { translateNotes } from '../i18n/bis-notes';
import { locales, type Locale } from '../i18n/ui';

/** Verhoog dit alleen samen met een nieuwe map /api/vN. */
export const BIS_SCHEMA = 1;

/*
 * De negentien vakjes van het character pane, in de volgorde waarin het spel
 * ze tekent: acht links, acht rechts, drie onderaan. De app leest deze
 * volgorde niet uit de JSON maar kent ze zelf; ze staat hier zodat beide
 * kanten dezelfde namen gebruiken.
 */
export type PaneSlot =
  | 'head' | 'neck' | 'shoulders' | 'back' | 'chest' | 'shirt' | 'tabard' | 'wrists'
  | 'hands' | 'waist' | 'legs' | 'feet' | 'ring1' | 'ring2' | 'trinket1' | 'trinket2'
  | 'mainHand' | 'offHand' | 'ranged';

/*
 * Van een sleutel uit config/bis.ts naar een vakje.
 *
 * Enkelvoud krijgt een vakje, meervoud niet. "Weapon", "One-Hand", "Two-Hand"
 * en "Staff" gaan over één wapen en horen dus in de main hand. "Weapons",
 * "Rings", "Trinkets" en "Main-Hand / Off-Hand" gaan over meerdere vakjes
 * tegelijk; die horen als lijst gelezen te worden en komen onder het pane.
 *
 * Relic, idol, libram, totem, sigil, wand en thrown delen wel één vakje met
 * ranged: het spel heeft daar ook maar één plaats voor.
 */
const paneOf: Record<string, PaneSlot> = {
  head: 'head',
  neck: 'neck',
  shoulders: 'shoulders',
  back: 'back',
  chest: 'chest',
  wrists: 'wrists',
  hands: 'hands',
  waist: 'waist',
  legs: 'legs',
  feet: 'feet',
  ring1: 'ring1',
  ring2: 'ring2',
  trinket1: 'trinket1',
  trinket2: 'trinket2',
  mainHand: 'mainHand',
  weapon: 'mainHand',
  oneHand: 'mainHand',
  twoHand: 'mainHand',
  staff: 'mainHand',
  daggers: 'mainHand',
  swords: 'mainHand',
  offHand: 'offHand',
  shield: 'offHand',
  ranged: 'ranged',
  wand: 'ranged',
  thrown: 'ranged',
  relic: 'ranged',
  idol: 'ranged',
  libram: 'ranged',
  totem: 'ranged',
  sigil: 'ranged',
};

export type ApiItem = {
  /** De naam zoals het spel hem schrijft, altijd Engels. */
  name: string;
  /** Waar het vandaan komt, als de bron het zegt. */
  source?: string;
  /** Het ID bij Wowhead, of niets als de naam niet bevestigd is. */
  id?: number;
  /** 1 tot 7, de kwaliteitskleur van het spel. Niets betekent gewone tekst. */
  quality?: number;
  /** Het icoon, als pad op deze site: /wh/<naam>.jpg */
  icon?: string;
};

export type ApiSlot = {
  /** De slotnaam zoals de bron hem schrijft. */
  label: string;
  /** De sleutel uit config/bis.ts, of niets bij een onbekende slotnaam. */
  key: string | null;
  /** Het vakje in het character pane, of niets als het er geen heeft. */
  pane: PaneSlot | null;
  /** De opties, de beste eerst. */
  items: ApiItem[];
};

export type ApiBisList = {
  schema: number;
  era: BisEra;
  phase: string;
  class: string;
  spec: string;
  role: string;
  updated: string;
  /** De adressen van de volledige lijst op de site, per taal. */
  url: Record<string, string>;
  slots: ApiSlot[];
  enchants: { slot: string; name: string; source?: string }[];
  gems: { color: string; name: string }[];
  /** De notities, per taal, al vertaald. */
  notes: Record<string, string[]>;
};

function item(era: BisEra, raw: { name: string; source?: string }): ApiItem {
  const { main, extra } = splitName('gear', raw.name);
  const entry = wowheadEntry(era, 'gear', raw.name);
  const quality = entry?.quality ?? -1;
  const out: ApiItem = { name: main };
  const source = raw.source?.trim() || extra || undefined;
  if (source) out.source = source;
  if (entry) out.id = entry.id;
  if (quality >= 1 && quality <= 7) out.quality = quality;
  if (entry?.icon) out.icon = `/wh/${entry.icon}.jpg`;
  return out;
}

/** Eén lijst, klaar om in het character pane gezet te worden. */
export function apiBisList(list: BisList, urls: Record<string, string>): ApiBisList {
  const notes: Record<string, string[]> = {};
  for (const locale of locales) notes[locale] = translateNotes(list.notes, locale as Locale);

  return {
    schema: BIS_SCHEMA,
    era: list.era,
    phase: list.phase,
    class: list.class,
    spec: list.spec,
    role: list.role,
    updated: list.updated,
    url: urls,
    slots: list.slots.map((slot) => {
      const parts = slotParts(slot.slot);
      return {
        label: parts.raw,
        key: parts.key,
        pane: (parts.key && paneOf[parts.key]) || null,
        items: slot.items.map((raw) => item(list.era, raw)),
      };
    }),
    enchants: list.enchants.map((enchant) => ({
      slot: enchant.slot,
      name: splitName('enchant', enchant.name).main,
      ...(enchant.source ? { source: enchant.source } : {}),
    })),
    gems: list.gems.map((gem) => ({ color: gem.color, name: splitName('gem', gem.name).main })),
    notes,
  };
}

/** Het bestandsnaamdeel van een lijst in de API: classic-p1-warrior-fury */
export function apiBisId(list: BisList): string {
  return `${list.era}-${list.phase}-${list.slug}`;
}
