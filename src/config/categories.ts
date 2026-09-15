/*
 * De categorieën. Eén plek (PROJECT_SPEC.md §4.5): een categorie bijzetten is
 * hier een regel erbij en geen verbouwing. Het filter op de homepage, het
 * ruitje in de pil en het label op de postpagina lezen allemaal hieruit.
 *
 * Drie categorieën (Nutri, 14 september 2026):
 *   Forever   alles over World of Warcraft: Forever;
 *   Classic   de Classic-bibliotheek: Classic Era, TBC, WotLK, Cata, MoP, Hardcore;
 *   Blizzard  alles wat niet over WoW gaat, of niet thuishoort in Forever of
 *             Classic, zoals BlizzCon.
 *
 * Een categorie is niet het soort post (nieuws, gids, datamining). De
 * categorie bepaalt ook niet de URL: een post staat op /news/<slug>, zodat hij
 * niet verhuist als hij van categorie wisselt.
 *
 * De namen zijn eigennamen en worden nooit vertaald (SCHRIJFSTIJL.md §6).
 * Onder twee categorieën met posts valt het filter weg.
 */

export const categoryKeys = ['forever', 'classic', 'blizzard'] as const;
export type CategoryKey = (typeof categoryKeys)[number];

export type Category = {
  key: CategoryKey;
  /** De CSS-variabele met de kleur van het ruitje en de badge. */
  color: string;
  /** Wat er op de chip en de badge staat. Nooit vertaald. */
  label: string;
};

export const categories: Record<CategoryKey, Category> = {
  forever: {
    key: 'forever',
    color: 'var(--wf-cat-forever)',
    label: 'Forever',
  },
  classic: {
    key: 'classic',
    color: 'var(--wf-cat-classic)',
    label: 'Classic',
  },
  blizzard: {
    key: 'blizzard',
    color: 'var(--wf-cat-blizzard)',
    label: 'Blizzard',
  },
};

/** De lijst in de vaste volgorde, voor de filterchips. */
export const categoryList: Category[] = categoryKeys.map((key) => categories[key]);

/** Is dit een categorie die we kennen? Gebruikt door het filter in de URL. */
export function isCategoryKey(value: string | null | undefined): value is CategoryKey {
  return !!value && (categoryKeys as readonly string[]).includes(value);
}

/** Onder welk pad een post staat. Dit volgt de collectie en niet de categorie. */
export const collectionPath = { news: 'news' } as const;
