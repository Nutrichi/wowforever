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
    sources: 'Sources:',
    routesCrumb: 'Leveling routes',
    otherPages: 'Related pages',
    routeLink: 'Leveling route {range}',
  },
  nl: {
    updated: 'Bijgewerkt op {date}',
    faqTitle: 'Veelgestelde vragen',
    sources: 'Bronnen:',
    routesCrumb: 'Levelroutes',
    otherPages: 'Verwante pagina’s',
    routeLink: 'Levelroute {range}',
  },
  fr: {
    updated: 'Mis à jour le {date}',
    faqTitle: 'Questions fréquentes',
    sources: 'Sources :',
    routesCrumb: 'Routes de montée',
    otherPages: 'Pages liées',
    routeLink: 'Route de montée {range}',
  },
  es: {
    updated: 'Actualizado el {date}',
    faqTitle: 'Preguntas frecuentes',
    sources: 'Fuentes:',
    routesCrumb: 'Rutas de subida',
    otherPages: 'Páginas relacionadas',
    routeLink: 'Ruta de subida {range}',
  },
  it: {
    updated: 'Aggiornato il {date}',
    faqTitle: 'Domande frequenti',
    sources: 'Fonti:',
    routesCrumb: 'Percorsi di livellamento',
    otherPages: 'Pagine correlate',
    routeLink: 'Percorso di livellamento {range}',
  },
  de: {
    updated: 'Aktualisiert am {date}',
    faqTitle: 'Häufige Fragen',
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
