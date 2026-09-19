/*
 * Content collections. De navigatie en de feed worden hieruit afgeleid
 * (PROJECT_SPEC.md §4.2).
 *
 * Mapindeling: <collectie>/<taal>/<slug>.md. De Engelse map is de bron; de
 * vijf andere talen worden met de hand geschreven en dragen `manual: true`
 * (SCHRIJFSTIJL.md §11). Ontbreekt een vertaling, dan valt de pagina terug op
 * het Engels, zodat een halve vertaling nooit een lege pagina oplevert.
 *
 * De build faalt luid op een foute post. Liever geen site dan een kapotte
 * pagina.
 *
 * BIS leest zijn JSON rechtstreeks (src/lib/bis.ts). CLASSES en TRADESKILLS
 * zijn collecties met één gids per era: <collectie>/<taal>/<era>/<slug>.md.
 * REPUTATIONS is alleen voor WoW Forever en heeft geen era:
 * reputations/<taal>/<factie>.md.
 */

import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { locales } from './i18n/ui';
import { categoryKeys } from './config/categories';
import { guideEras, tradeskills } from './config/guides';
import { reputationOrigins, reputationSides, standings } from './config/reputations';

/** Velden die elke post deelt, in welke taal dan ook. */
const postFields = ({ image }: SchemaContext) => ({
  title: z.string(),
  /** De samenvatting onder de titel én de metabeschrijving van de pagina. */
  description: z.string(),
  date: z.coerce.date(),
  /** Engelse bron blijft de waarheid; een vertaling verwijst hiernaar. */
  lang: z.enum(locales).default('en'),
  /** Zet op true om iets in het repo te hebben zonder het te publiceren. */
  draft: z.boolean().default(false),
  /** Een met de hand geschreven vertaling (alle vertalingen, SCHRIJFSTIJL.md §11). */
  manual: z.boolean().default(false),
  /**
   * Het beeld, relatief aan het Markdown-bestand. Astro schaalt en comprimeert
   * het bij het bouwen. Ontbreekt het, dan komt er een gestreepte plek.
   */
  image: image().optional(),
  imageAlt: z.string().optional(),
  /** Eén post staat groot links op de homepage; zonder dit vlagje de nieuwste. */
  featured: z.boolean().default(false),
  /** De primaire bron onderaan een post. Platte tekst, geen merk. */
  source: z.string().optional(),
  /* Een leeg tekstveld is hetzelfde als geen veld. */
  sourceUrl: z.preprocess((value) => (value === '' ? undefined : value), z.url().optional()),
  tags: z.array(z.string()).default([]),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: (context) =>
    z.object({
      ...postFields(context),
      /*
       * Het spel waar de post over gaat (§4.5). Verplicht: zonder categorie
       * heeft de pil geen kleur en valt de post buiten elk filter.
       */
      category: z.enum(categoryKeys),
    }),
});

/** Velden die elke gids deelt, class of tradeskill. */
const guideFields = {
  title: z.string(),
  /** De metabeschrijving en de regel onder de titel. */
  description: z.string(),
  lang: z.enum(locales).default('en'),
  manual: z.boolean().default(false),
  draft: z.boolean().default(false),
  /** Wanneer de inhoud voor het laatst nagekeken is. */
  updated: z.coerce.date(),
  /** Moet overeenkomen met de map; de loader controleert dat. */
  era: z.enum(guideEras),
};

/** De bronregel onderaan, gedempt zoals bij een post. */
const sourcesField = z.array(z.object({ name: z.string(), url: z.url() })).default([]);

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: z.object({
    ...guideFields,
    class: z.string(),
    spec: z.string(),
    role: z.enum(['tank', 'healer', 'melee', 'ranged']),
  }),
});

const tradeskillsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tradeskills' }),
  schema: z.object({
    ...guideFields,
    skill: z.enum(tradeskills.map((skill) => skill.key) as [string, ...string[]]),
  }),
});

/*
 * Eén gids per factie, alleen voor WoW Forever (Nutri, 15 september 2026),
 * met de facties van Classic Era als vertrekpunt. De velden voor de rij op het
 * overzicht staan in de frontmatter; de tabel van de standings, de beloningen
 * en de snelste manier om te farmen staan in de tekst. Bronnen zoals bij een
 * post (§5): Wowhead en Icy Veins mogen, wowforevertalents.com nooit.
 */
const reputations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reputations' }),
  schema: z.object({
    title: z.string(),
    /** De metabeschrijving van de pagina. */
    description: z.string(),
    lang: z.enum(locales).default('en'),
    manual: z.boolean().default(false),
    draft: z.boolean().default(false),
    /** Wanneer de inhoud voor het laatst nagekeken is. */
    updated: z.coerce.date(),
    /** De naam van de factie, Engels zoals in het spel. */
    faction: z.string(),
    /** Waar de factie woont, met de namen uit het spel. */
    zone: z.string(),
    side: z.enum(reputationSides),
    /**
     * Waar de factie vandaan komt. `classic` is een factie van Classic Era die
     * als vertrekpunt dient; `forever` is een factie die alleen in WoW Forever
     * bestaat en uit de cliëntdata van de beta komt. Dat verschil bepaalt de
     * zin bovenaan de gids (Nutri, 19 september 2026).
     */
    origin: z.enum(reputationOrigins).default('classic'),
    /** De standing waarop een nieuw personage begint. */
    start: z.enum(standings),
    /** De hoogste standing met iets te halen. */
    cap: z.enum(standings),
    /** Eén zin voor de rij: hoe je reputatie haalt. */
    method: z.string(),
    /** Eén zin voor de rij: wat er te halen is. */
    rewards: z.string(),
    sources: sourcesField,
  }),
});

/*
 * Losse pagina's buiten de zeven secties (§4.4, fase 5): de hub /forever/, de
 * levelroutes onder /routes/ en de vergelijkingen onder /compare/. Het pad in
 * de map is het adres: pages/<taal>/routes/1-60.md wordt /routes/1-60/.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    /** De kop van de pagina. */
    title: z.string(),
    /** De titel in de browser en in zoekmachines; zonder dit veld de kop. */
    metaTitle: z.string().optional(),
    description: z.string(),
    /** Korte naam in de broodkruimel en in de chips; zonder dit veld de kop. */
    short: z.string().optional(),
    lang: z.enum(locales).default('en'),
    manual: z.boolean().default(false),
    draft: z.boolean().default(false),
    updated: z.coerce.date(),
    /** Vragen en antwoorden onderaan, ook als FAQPage in de JSON-LD. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: sourcesField,
  }),
});

export const collections = { news, classes, tradeskills: tradeskillsCollection, reputations, pages };
