// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import whAutolink from './src/plugins/rehype-wh-autolink.mjs';

/*
 * lastmod in de sitemap (8 oktober 2026). De sitemap wordt geschreven nadat
 * alle pagina's in dist staan; per adres lezen we daar de dateModified uit de
 * JSON-LD van die pagina. Posts, gidsen, pagina's en BiS-lijsten dragen die al,
 * dus de sitemap zegt nooit iets anders dan de pagina zelf. Een pagina zonder
 * dateModified (een overzicht, een calculator) krijgt geen lastmod.
 */
const distDir = new URL('./dist/', import.meta.url);
function lastmodFor(url) {
  const path = new URL(url).pathname;
  const file = new URL(`.${path}${path.endsWith('/') ? 'index.html' : ''}`, distDir);
  try {
    return readFileSync(file, 'utf8').match(/"dateModified":"([^"]+)"/)?.[1];
  } catch {
    return undefined;
  }
}

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
    /*
     * De CSS als eigen bestand, dat de browser na de eerste pagina bewaart.
     * Tot 7 oktober 2026 stond hier 'always' (§11: een rondreis minder), maar
     * dan droeg elke pagina dezelfde 37 KB CSS: 292 MB van een build van 866 MB,
     * dicht bij de grens van 1 GB van GitHub Pages. Nutri koos op 7 oktober om
     * dat nu aan te pakken. Kleine stylesheets zet Astro nog wel in de pagina.
     */
    inlineStylesheets: 'auto',
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
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
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
