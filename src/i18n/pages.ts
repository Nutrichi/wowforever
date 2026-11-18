/*
 * De teksten rond de losse pagina's (hub, routes, vergelijkingen), in zes
 * talen (PROJECT_SPEC.md §8). De pagina's zelf zijn Markdown per taal.
 * Geen gedachtestreepjes.
 */

import { defaultLocale, type Locale } from './ui';

const ui = {
  en: {
    updated: 'Updated {date}',
    faqTitle: 'Frequently asked questions',
    tocTitle: 'Contents',
    backToTop: 'Back to top',
    playVideo: 'Play the video on YouTube.',
    sources: 'Sources:',
    routesCrumb: 'Leveling routes',
    otherPages: 'Related pages',
    routeLink: 'Leveling route {range}',
  },
  nl: {
    updated: 'Bijgewerkt op {date}',
    faqTitle: 'Veelgestelde vragen',
    tocTitle: 'Inhoud',
    backToTop: 'Terug naar boven',
    playVideo: 'Speel de video af op YouTube.',
    sources: 'Bronnen:',
    routesCrumb: 'Levelroutes',
    otherPages: 'Verwante pagina’s',
    routeLink: 'Levelroute {range}',
  },
  fr: {
    updated: 'Mis à jour le {date}',
    faqTitle: 'Questions fréquentes',
    tocTitle: 'Sommaire',
    backToTop: 'Retour en haut',
    playVideo: 'Lancer la vidéo sur YouTube.',
    sources: 'Sources :',
    routesCrumb: 'Routes de montée',
    otherPages: 'Pages liées',
    routeLink: 'Route de montée {range}',
  },
  es: {
    updated: 'Actualizado el {date}',
    faqTitle: 'Preguntas frecuentes',
    tocTitle: 'Índice',
    backToTop: 'Volver arriba',
    playVideo: 'Reproducir el vídeo en YouTube.',
    sources: 'Fuentes:',
    routesCrumb: 'Rutas de subida',
    otherPages: 'Páginas relacionadas',
    routeLink: 'Ruta de subida {range}',
  },
  it: {
    updated: 'Aggiornato il {date}',
    faqTitle: 'Domande frequenti',
    tocTitle: 'Indice',
    backToTop: 'Torna su',
    playVideo: 'Riproduci il video su YouTube.',
    sources: 'Fonti:',
    routesCrumb: 'Percorsi di livellamento',
    otherPages: 'Pagine correlate',
    routeLink: 'Percorso di livellamento {range}',
  },
  de: {
    updated: 'Aktualisiert am {date}',
    faqTitle: 'Häufige Fragen',
    tocTitle: 'Inhalt',
    backToTop: 'Nach oben',
    playVideo: 'Spiel das Video auf YouTube ab.',
    sources: 'Quellen:',
    routesCrumb: 'Levelrouten',
    otherPages: 'Verwandte Seiten',
    routeLink: 'Levelroute {range}',
  },
} as const;

export type PageUiKey = keyof (typeof ui)['en'];

/** Vertaalt een tekst rond een losse pagina en vult {sleutels} in. Ontbreekt iets, dan Engels. */
export function pageT(locale: Locale) {
  return (key: PageUiKey, vars: Record<string, string | number> = {}): string => {
    const table = ui[locale] as Partial<Record<PageUiKey, string>>;
    let text = table[key] ?? ui[defaultLocale][key];
    for (const [name, value] of Object.entries(vars)) text = text.split(`{${name}}`).join(String(value));
    return text;
  };
}
