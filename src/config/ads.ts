/*
 * GEPARKEERD (Nutri, 20 oktober 2026): geen enkele pagina gebruikt AdSlot of
 * AdPlacer nog; de plekken staan in commentaar (zoek op "geparkeerd"), de stijl
 * ook (global.css). Terugzetten = die regels weer aanzetten.
 *
 * Advertenties van Google AdSense (Nutri, 20 oktober 2026: niveau A, "It should
 * make sense", geen sticky balk op een telefoon, geen eigen opvulling als Google
 * niets heeft). Plekken: in gidsen (niet de dungeons, niet de hub) en posts via
 * AdPlacer, en een vaste plek op de BiS-lijsten, de talent- en Legacy-calculator,
 * de raidplanner, de levelbuild en de Class Picker via AdSlot.
 *
 * Zolang `enabled` false is, toont de dev-server een gestreepte plek met de maat
 * (zodat Nutri het in tst ziet) en bouwt de echte site niets: geen kader, geen
 * script, geen cookie. Na de goedkeuring van AdSense komen hier de ID's van de
 * advertentieblokken en gaat `enabled` op true. De toestemming (cookiebanner)
 * komt van de gecertificeerde CMP van Google zelf (Privacy en berichten).
 */
export const ads = {
  client: 'ca-pub-7413153622184825',
  enabled: false,
  slots: {
    /* In de tekst: native, kleuren en letters in te stellen bij AdSense. */
    inArticle: '',
    /* Aan het einde van een lange gids of post: raster van kleine tegels. */
    multiplex: '',
    /* Onder een tool: responsieve display, liggend. */
    display: '',
  },
};

export type AdKind = 'inArticle' | 'multiplex' | 'display';

/** Toont deze build plekken? In dev altijd (als voorbeeld), live alleen als het aan staat. */
export const adsVisible = import.meta.env.DEV || ads.enabled;

export const adLabel: Record<string, string> = {
  en: 'Advertisement',
  nl: 'Advertentie',
  fr: 'Publicité',
  es: 'Publicidad',
  it: 'Pubblicità',
  de: 'Anzeige',
};
