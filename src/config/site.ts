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
 * Het pad naar de inzendpagina (§6.2). Aan sinds fase 8 (15 september 2026):
 * het Supabase-project staat er en `submit_news` is doorgemeten, dus de knop
 * onder de feed doet wat ze belooft. Leeghalen verbergt de knop weer.
 */
export const submitPath = 'submit';

/**
 * Het pad naar de Forever-hub (§4.4), sinds fase 5. De aftelchip in de tweede
 * balk linkt ernaartoe. Leeghalen maakt de chip weer gewone tekst.
 */
export const foreverHubPath = 'forever';
