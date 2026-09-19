/*
 * Datums, in de taal van de pagina. Twee vormen, allebei uit het ontwerp:
 * de korte in de metaregel van het uitgelichte artikel ("08 SEP 2026") en
 * de lange bovenaan een post ("8 September 2026").
 *
 * Intl doet het werk, dus elke taal krijgt zijn eigen maandnaam zonder dat
 * er een lijst in de vertaalbestanden bij hoeft.
 *
 * **Alles wordt in Belgische tijd getoond** (Nutri, 19 september 2026). Een
 * post draagt sinds die dag een tijdstip in `date`, want dat tijdstip bepaalt
 * de volgorde in de feed (`lib/posts.ts`). Zou de opmaak in UTC blijven, dan
 * kwam een post die om 00.30 geschreven is op de vorige dag te staan: precies
 * de fout die we hier weghalen. Een datum zonder tijdstip (de gidsen, de
 * pagina's) staat op middernacht UTC en valt in Brussel op 01.00 of 02.00 van
 * diezelfde dag, dus voor die datums verandert er niets.
 */

import { localeTags, type Locale } from '../i18n/ui';

/*
 * Voor datums is `en` niet genoeg: Intl leest dat als Amerikaans Engels en
 * schrijft "August 1, 2026". Het ontwerp tekent "8 September 2026", dus voor
 * de opmaak gebruiken we en-GB. Het lang-attribuut en de hreflang-tags
 * blijven gewoon `en`; dit gaat alleen over hoe een datum eruitziet.
 */
const dateTags: Partial<Record<Locale, string>> = { en: 'en-GB' };

const tagFor = (locale: Locale) => dateTags[locale] ?? localeTags[locale];

/** De site is Belgisch; de aftelchip rekent al in deze zone (§4.3). */
const timeZone = 'Europe/Brussels';

/**
 * Voor het datetime-attribuut van <time> en voor de JSON-LD: de dag zoals de
 * bezoeker hem ziet, dus in Belgische tijd en niet in UTC.
 */
export function isoDate(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone,
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  return `${get('year')}-${get('month')}-${get('day')}`;
}

/**
 * Het volledige tijdstip, voor `datePublished` van een post. Een post draagt
 * sinds 19 september 2026 een tijdstip, en dat hoort ook in de gestructureerde
 * data te staan: zo weet een zoekmachine welke van twee posts van dezelfde dag
 * de nieuwste is.
 */
export function isoDateTime(date: Date): string {
  return date.toISOString();
}

/** "08 SEP 2026": kort, in kapitalen, zoals de metaregel het tekent. */
export function shortDate(date: Date, locale: Locale): string {
  const parts = new Intl.DateTimeFormat(tagFor(locale), {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone,
  }).formatToParts(date);

  return parts
    .map((part) => (part.type === 'month' ? part.value.replace('.', '') : part.value))
    .join('')
    .toUpperCase();
}

/** "8 September 2026": de metaregel van de postpagina. */
export function longDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(tagFor(locale), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone,
  }).format(date);
}
