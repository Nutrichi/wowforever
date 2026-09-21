/*
 * De brug tussen een naam in een BiS-lijst en wat Wowhead van dat item weet.
 *
 * `src/data/bis-item-ids.json` wordt gemaakt door tools/itemids.py uit de
 * clientdata en daarna nagemeten bij Wowhead zelf door tools/itemids_verify.py.
 * Wat daar niet in staat, is niet bevestigd: dat blijft een gewone zoeklink
 * zonder icoon. De sleutels zijn de namen zoals ze in `src/data/bis/*.json`
 * staan, dus `lookupName()` hieronder moet dezelfde bewerking doen als
 * `collect()` in dat gereedschap.
 */
import ids from '../data/bis-item-ids.json';
import { wowheadPath, type BisEra } from '../config/bis';
import type { Locale } from '../i18n/ui';

export type WowheadEntry = {
  kind: 'item' | 'spell';
  id: number;
  icon?: string | null;
  quality?: number | null;
};

type Book = Record<string, Record<string, WowheadEntry>>;
const book = ids as Book;

/*
 * Wowhead zet de taal ná de uitbreiding: /classic/de/item=19862. Nederlands
 * bestaat daar niet (dat geeft een 404), Italiaans wel, al blijven de namen
 * daar Engels. Nagemeten in een echte browser op 21 september 2026.
 */
const wowheadLocale: Partial<Record<Locale, string>> = {
  de: 'de',
  fr: 'fr',
  es: 'es',
  it: 'it',
};

/** De uitbreiding en de taal samen, zoals ze in elke Wowhead-link staan. */
function wowheadBase(era: BisEra, locale: Locale): string {
  const language = wowheadLocale[locale];
  return `https://www.wowhead.com/${wowheadPath[era]}${language ? `/${language}` : ''}`;
}

/**
 * Een naam uit de data uit elkaar: wat het heet, en wat erachter staat.
 *
 * De data schrijft een toevoeging achter een gedachtestreepje, en dat is bijna
 * altijd de bron: "Animist's Caress — from the quest ... in Stranglethorn
 * Vale." Die hoort in de bronkolom, niet in de linktekst.
 *
 * Eén valstrik: bij een enchant scheidt datzelfde streepje soms de naam zelf,
 * zoals "Enchant Cloak — Superior Intellect". Het spel schrijft dat met een
 * gewoon koppelteken, dus dat zetten we eerst recht; daarna is elk streepje dat
 * overblijft wel degelijk een toevoeging.
 */
export function splitName(kind: 'gear' | 'enchant' | 'gem', raw: string):
  { main: string; extra: string } {
  const text = kind === 'enchant'
    ? raw.trim().replace(/^(Enchant [\w-]+(?: [\w-]+)?)\s+—\s+/, '$1 - ')
    : raw.trim();
  const [main, ...rest] = text.split(/\s+—\s+/);
  return { main: main.trim(), extra: rest.join(' · ').trim() };
}

/** De naam waaronder een regel in de kaart staat. */
export function lookupName(kind: 'gear' | 'enchant' | 'gem', raw: string): string {
  return splitName(kind, raw).main;
}

/** Wat Wowhead van deze naam weet, of niets als het ID niet bevestigd is. */
export function wowheadEntry(era: BisEra, kind: 'gear' | 'enchant' | 'gem', raw: string):
  WowheadEntry | undefined {
  return book[era]?.[lookupName(kind, raw)];
}

/** De link naar de pagina van dit item of deze spreuk. */
export function wowheadLink(era: BisEra, locale: Locale, entry: WowheadEntry): string {
  return `${wowheadBase(era, locale)}/${entry.kind}=${entry.id}`;
}

/** De zoekpagina, voor een naam die geen bevestigd ID heeft. */
export function wowheadSearch(era: BisEra, locale: Locale, query: string): string {
  return `${wowheadBase(era, locale)}/search?q=${encodeURIComponent(query)}`;
}

/** Ons eigen icoon, uit public/wh/, want een telefoon haalt hier niets op. */
export function wowheadIcon(entry: WowheadEntry): string | undefined {
  return entry.icon ? `/wh/${entry.icon}.jpg` : undefined;
}

/*
 * De kwaliteitskleuren van het spel. Alleen voor de naam van een item, zoals
 * het spel ze zelf toont; -1 en 0 betekenen dat Wowhead geen kwaliteit kent
 * (een spreuk), en die blijft in de gewone tekstkleur staan.
 */
export function qualityClass(entry: WowheadEntry): string | undefined {
  const quality = entry.quality ?? -1;
  return quality >= 1 && quality <= 7 ? `wf-q${quality}` : undefined;
}
