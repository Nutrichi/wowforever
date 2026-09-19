// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wowforever.be',

  // Statische uitvoer, geen server. PROJECT_SPEC.md §3.
  output: 'static',
  trailingSlash: 'ignore',

  /*
   * Een pagina alvast ophalen zodra de muis op een link rust, zodat een klik
   * in het menu meteen verder gaat.
   */
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },

  // Zes talen (PROJECT_SPEC.md §8). Engels staat op /, de rest op /nl/ /fr/ /es/ /it/ /de/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr', 'es', 'it', 'de'],
    routing: {
      prefixDefaultLocale: false,
      // Geen doorverwijzing door de server. De browsertaal kiest alleen bij het
      // allereerste bezoek, in de browser zelf (BaseLayout, §8).
      redirectToDefaultLocale: false,
    },
  },

  // De balk rechtsonder tijdens `npm run dev` staat in de weg en zit nooit in de build.
  devToolbar: {
    enabled: false,
  },

  build: {
    // Nette mappen zodat /nl/ met een slash werkt op GitHub Pages.
    format: 'directory',
    // De CSS in de pagina zelf: dat scheelt een rondreis voor de eerste weergave (§11).
    inlineStylesheets: 'always',
  },

  /*
   * De sitemap, bij elke build opnieuw, met de taalversies van elke pagina.
   * Lege secties hebben geen pagina en staan er dus niet in (§4.2). De
   * inzendpagina draagt noindex en hoort er ook niet in.
   */
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', nl: 'nl', fr: 'fr', es: 'es', it: 'it', de: 'de' },
      },
      filter: (page) => !/\/(submit|privacy|support)\/?$/.test(new URL(page).pathname),
    }),
  ],

  vite: {
    /*
     * Een eigen cache voor controles en builds naast een draaiende dev-server:
     * `WF_VITE_CACHE=node_modules/.vite-check npx astro check`. Zonder dat
     * bouwt een controle de voorgebouwde bibliotheken van de dev-server om.
     */
    cacheDir: process.env.WF_VITE_CACHE || 'node_modules/.vite',
  },
});
