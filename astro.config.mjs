// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import whAutolink from './src/plugins/rehype-wh-autolink.mjs';

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

  /*
   * Wowhead-links bij het bouwen (29 september 2026): een bekende naam in een
   * Markdown-pagina wordt een link met icoon, kleur en tooltip. Zie het plugin.
   */
  markdown: {
    processor: satteri({ hastPlugins: [whAutolink] }),
  },

  /*
   * Verhuisde gidsen (28 september 2026): de dungeongidsen staan sinds dan
   * onder /guides/dungeons/. Astro schrijft voor elk oud adres een kleine
   * pagina die meteen doorstuurt, zodat links en zoekresultaten blijven werken.
   */
  redirects: {
    '/guides/ruins-of-lordaeron': '/guides/dungeons/ruins-of-lordaeron',
    '/guides/hall-of-thanes-quests': '/guides/dungeons/hall-of-thanes',
    '/nl/guides/ruins-of-lordaeron': '/nl/guides/dungeons/ruins-of-lordaeron',
    '/nl/guides/hall-of-thanes-quests': '/nl/guides/dungeons/hall-of-thanes',
    '/fr/guides/ruins-of-lordaeron': '/fr/guides/dungeons/ruins-of-lordaeron',
    '/fr/guides/hall-of-thanes-quests': '/fr/guides/dungeons/hall-of-thanes',
    '/es/guides/ruins-of-lordaeron': '/es/guides/dungeons/ruins-of-lordaeron',
    '/es/guides/hall-of-thanes-quests': '/es/guides/dungeons/hall-of-thanes',
    '/it/guides/ruins-of-lordaeron': '/it/guides/dungeons/ruins-of-lordaeron',
    '/it/guides/hall-of-thanes-quests': '/it/guides/dungeons/hall-of-thanes',
    '/de/guides/ruins-of-lordaeron': '/de/guides/dungeons/ruins-of-lordaeron',
    '/de/guides/hall-of-thanes-quests': '/de/guides/dungeons/hall-of-thanes',

    /*
     * De korte link wowforever.be/rxp staat hier niet meer, maar in
     * public/rxp.html (Nutri, 6 oktober 2026: "I want to go INSTANT to my
     * referral link. No delay."). Een redirect van Astro wordt rxp/index.html:
     * GitHub stuurt /rxp dan eerst door naar /rxp/, en de pagina toont
     * "Redirecting from ..." tot de meta-refresh afgaat. rxp.html serveert
     * GitHub rechtstreeks op /rxp, en het script in de head springt door
     * voordat er iets getekend wordt.
     */
  },

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
