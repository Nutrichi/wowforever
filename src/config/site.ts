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
 * De eerste raids (Barrow Deeps, Hyjal Summit, Onyxia's Lair): 9 december 2026.
 * Blizzard noemt geen uur (stand 4 november 2026); tot dan rekenen we met
 * hetzelfde uur als de launch, 15.00 uur PST, 00.00 uur Belgische tijd op
 * 10 december. Na de launch rekent de aftelchip hierop.
 */
export const raidsDate = '2026-12-09T23:00:00Z';

/**
 * Regio's voor de timers in de balk (Nutri, 9 november 2026: "EU and US, switchable"). De
 * wekelijkse reset in UTC, vast het hele jaar: EU woensdag 04.00 (05.00 Belgische tijd in de
 * winter), US dinsdag 15.00 (16.00 Belgische tijd). `day` is de weekdag van getUTCDay (0 = zondag).
 * Blizzard zegt alleen dat elke raid wekelijks reset (podcast en blog, oktober 2026).
 */
export const regions = {
  eu: { day: 3, hourUtc: 4, tz: 'Europe/Paris' },
  us: { day: 2, hourUtc: 15, tz: 'America/Los_Angeles' },
} as const;
export type Region = keyof typeof regions;

/**
 * De raids per fase, met hun reset. Een nieuwe fase: een regel erbij met haar datum (`opens`) en
 * raids. `reset` is het aantal dagen tussen twee resets; 7 = de wekelijkse reset van de regio.
 */
export const raidPhases = [
  {
    phase: 1,
    opens: raidsDate,
    raids: [
      { name: 'Barrow Deeps', size: 10, reset: 7 },
      { name: 'Hyjal Summit', size: 20, reset: 7 },
      { name: "Onyxia's Lair", size: 40, reset: 7 },
    ],
  },
] as const;

/**
 * De Darkmoon Faire (kalender van Nutri, 9 november 2026). `from` en `to` zijn de dagen van de
 * kalender (maandag tot zondag). De kalender in het spel zegt "Begins: 11/09 4:00 AM, Ends:
 * 11/16 4:00 AM": open op `from` om 04.00 realmtijd, dicht de dag na `to` om 04.00 realmtijd.
 * Realmtijd: `tz` van de regio (EU Midden-Europese tijd, US Pacific; US-realms hebben elk hun eigen
 * tijdzone, Pacific is de referentie van Blizzard). Eerst rekenden we met het resetuur (Nutri koos
 * dat zonder het uur te kennen); rechtgezet op 9 november 2026 na de vraag van Nutri.
 */
export const darkmoonHour = 4;
export const darkmoonFaire = [
  { from: '2026-11-09', to: '2026-11-15', where: 'Elwynn Forest' },
  { from: '2026-12-07', to: '2026-12-13', where: 'Mulgore' },
  { from: '2027-01-04', to: '2027-01-10', where: 'Elwynn Forest' },
  { from: '2027-02-08', to: '2027-02-14', where: 'Mulgore' },
  { from: '2027-03-08', to: '2027-03-14', where: 'Elwynn Forest' },
  { from: '2027-04-05', to: '2027-04-11', where: 'Mulgore' },
] as const;

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
 * De partnerlink van Journey (Nutri, 19 oktober 2026): de creatorcode nutri zit
 * in de link en geeft de koper 10% korting.
 * Het blok staat onder het RestedXP-blok, overal waar dat blok staat.
 */
export const journeyUrl = 'https://getjourney.gg/?code=nutri';

/**
 * De Ko-fi-pagina van Nutri, voor een fooi (Nutri, 25 september 2026). Staat in
 * de voettekst als eerste link, voor YouTube, met een eigen kopje als icoon.
 * Geen partnerlink: gewone `noopener`, geen `sponsored`.
 */
export const kofiUrl = 'https://ko-fi.com/nutri_wow';

/**
 * Pagina's buiten routes en vergelijkingen die toch het RestedXP-blok onderaan
 * dragen (Nutri, 14 oktober 2026: de ervaringsgids moet RestedXP met de
 * korting van 10% noemen). Sinds 15 oktober 2026 ook elke gids over leveling:
 * de Skyborne-route en de levelgidsen per class (Nutri: "het restedxp-blok mag
 * je ook op de guide pagina's zetten in het onderdeel van leveling").
 * Een nieuwe levelgids komt hier bij.
 */
export const restedxpPages = [
  'guides/experience',
  'guides/leveling/skyborne-druid-1-6',
  'guides/leveling/skyborne-druid-6-10',
  'guides/leveling/skyborne-druid-10-13',
  'guides/leveling/skyborne-druid-13-14',
  'guides/leveling/skyborne-druid-14-16',
  'guides/mage-leveling',
  'guides/priest-leveling',
  'guides/rogue-leveling',
  'guides/druid-leveling',
  'guides/warlock-leveling',
  'guides/paladin-leveling',
  'guides/warrior-leveling',
  'guides/hunter-leveling',
  'guides/shaman-leveling',
  'guides/zephras-isle',
  'guides/riverglades',
  'guides/journey',
];

/**
 * De vergelijkingen die onder het RestedXP-blok ook een Zygor-blok dragen
 * (Nutri, 25 september 2026). RestedXP blijft bovenaan; Zygor staat eronder.
 */
export const zygorPages = [
  'compare/leveling-addons-forever',
  'compare/journey-vs-zygor',
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
export const partnerUrls = [restedxpUrl, journeyUrl, zygorUrl];

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
