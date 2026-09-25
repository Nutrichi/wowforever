/*
 * Vaste gegevens van de site. Eén plek, zodat een wijziging niet door
 * templates gejaagd hoeft te worden.
 */

/** Meet-ID uit PROJECT_SPEC.md §11.1 (Nutri, 14 september 2026). */
export const ga4Id = 'G-66BFB2QS27';

/**
 * De launch van WoW Forever: 4 november 2026 om 15.00 uur PST, dat is
 * 00.00 uur Belgische tijd op 5 november. De aftelchip rekent hierop.
 */
export const launchDate = '2026-11-04T23:00:00Z';

/**
 * De sociale links uit §10. Aangeleverd door Nutri op 14 september 2026.
 * De voettekst laat een link weg zolang zijn URL leeg is, dus leeghalen
 * volstaat om er een te verbergen.
 */
export const social = {
  youtube: 'https://www.youtube.com/@nutri_r1?sub_confirmation=1',
  twitch: 'https://www.twitch.tv/nutri_r1',
  discord: 'https://discord.com/invite/YYGrKGNWr2',
};

/**
 * De partnerlink van RestedXP. Een inkomstenvereiste: hij staat op elke
 * pagina, in de tweede balk en in de voettekst (§1).
 */
export const restedxpUrl = 'https://shop.restedxp.com/ref/nutri/';

/**
 * De partnerlink van Zygor (Nutri, 22 september 2026).
 *
 * Anders dan RestedXP hoeft deze niet op elke pagina te staan. Zygor komt
 * alleen ter sprake waar hij inhoudelijk hoort, in de vergelijkingen. Maar
 * wordt hij genoemd met een link, dan is het deze.
 */
export const zygorUrl = 'https://zygorguides.com/ref/Nutri/';

/**
 * De Ko-fi-pagina van Nutri, voor een fooi (Nutri, 25 september 2026). Staat in
 * de voettekst als eerste link, voor YouTube, met een eigen kopje als icoon.
 * Geen partnerlink: gewone `noopener`, geen `sponsored`.
 */
export const kofiUrl = 'https://ko-fi.com/nutri_wow';

/**
 * De vergelijkingen die onder het RestedXP-blok ook een Zygor-blok dragen
 * (Nutri, 25 september 2026). RestedXP blijft bovenaan; Zygor staat eronder.
 */
export const zygorPages = [
  'compare/leveling-addons-forever',
  'compare/restedxp-vs-zygor',
  'compare/free-vs-premium',
];

/**
 * Alle partnerlinks. Een link die hiermee begint, krijgt `sponsored` in plaats
 * van `nofollow`.
 *
 * Waarom een lijst en geen tekstcontrole per plek: tot 22 september 2026 stond
 * er op twee plaatsen `source.url.includes('shop.restedxp.com')` in de sjablonen.
 * Bij een tweede partner moet zoiets op elke plek opnieuw, en dan is er altijd
 * een plek die het niet krijgt.
 */
export const partnerUrls = [restedxpUrl, zygorUrl];

/** Is dit een van onze partnerlinks? */
export function isPartnerLink(url: string): boolean {
  return partnerUrls.some((partner) => url.startsWith(partner));
}

/**
 * De app in de App Store (Nutri, 19 september 2026).
 *
 * **Leeg betekent overal weg.** Zolang hier niets staat, toont de site geen
 * enkele verwijzing naar de app: geen link in de voettekst en geen blok op
 * `/talents/`. Zo kan de knop klaarstaan zonder iets te beloven wat er nog
 * niet is.
 *
 * Vul dit pas in als de app echt in de App Store staat, met de vorm
 * `https://apps.apple.com/app/id<nummer>`. Het nummer staat in App Store
 * Connect bij de app, als Apple ID. Eén regel wijzigen en promoten volstaat;
 * er hoeft verder niets aangepast te worden.
 */
export const appStoreUrl = '';

/**
 * Het pad naar de inzendpagina (§6.2). Aan sinds fase 8 (15 september 2026),
 * **uit sinds 25 september 2026** (Nutri: de knop "Submit news" onder de feed is
 * nutteloos). Leeg verbergt de knop; de pagina `/submit/` zelf bestaat nog en
 * blijft noindex. Terugzetten op 'submit' toont de knop weer.
 */
export const submitPath = '';

/**
 * Het pad naar de Forever-hub (§4.4), sinds fase 5. De aftelchip in de tweede
 * balk linkt ernaartoe. Leeghalen maakt de chip weer gewone tekst.
 */
export const foreverHubPath = 'forever';
