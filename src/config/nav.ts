/*
 * De navigatie. Eén plek; een tab bijzetten is hier een regel erbij en geen
 * verbouwing (PROJECT_SPEC.md §4).
 *
 * De harde regel uit §4.2: een sectie is zichtbaar als en alleen als ze
 * inhoud heeft. Dat wordt bij het bouwen bepaald, niet met een schakelaar
 * die iemand moet onthouden. Geen inhoud betekent geen navigatie-item, en
 * dus ook geen "binnenkort" in het menu.
 *
 * De zeven items staan in de volgorde van handoff §5. NEWS is de homepage en
 * staat er altijd. BIS, CLASSES, TRADESKILLS en REPUTATIONS krijgen hun
 * inhoud in fase 3 tot 6; tot dan geven ze `false` en blijven ze weg.
 */

import { defaultLocale, type Locale, type UIKey } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { feedHasContent } from '../lib/feeds';
import { getBisLists } from '../lib/bis';
import { getReputations } from '../lib/reputations';
import { talentClasses } from '../lib/talents';
import { bisEras } from './bis';
import { guideEras } from './guides';

export type NavItem = {
  id: string;
  /** Sleutel in de vertaalbestanden; nooit een letterlijk label hier. */
  labelKey: UIKey;
  /** Het pad in de gevraagde taal, met een slash op het einde. */
  path: string;
  /** De era's met een eigen pagina, gescheiden door spaties (BaseLayout). */
  eraLinks?: string;
};

type Section = {
  id: string;
  labelKey: UIKey;
  /** Taalloos pad; de taalversie komt uit localizePath. */
  path: string;
  /** De era's met een eigen pagina in deze sectie. */
  eraLinks?: readonly string[];
  /** Heeft deze sectie inhoud? Draait bij het bouwen. */
  hasContent: () => boolean | Promise<boolean>;
};

const sections: Section[] = [
  { id: 'news', labelKey: 'nav.news', path: '', hasContent: () => true },
  // De BiS-lijsten uit src/data/bis/ (fase 3).
  { id: 'bis', labelKey: 'nav.bis', path: 'bis', eraLinks: bisEras, hasContent: () => getBisLists().length > 0 },
  // De classgidsen per era; Forever toont altijd wat al bekend is (fase 4).
  { id: 'classes', labelKey: 'nav.classes', path: 'classes', eraLinks: guideEras, hasContent: () => true },
  // De tradeskillgidsen per era; Forever toont de perks (fase 4).
  { id: 'tradeskills', labelKey: 'nav.tradeskills', path: 'tradeskills', eraLinks: guideEras, hasContent: () => true },
  /*
   * De rekenmachines voor talenten en Legacy (Nutri, 18 september 2026). Geen
   * era: ze gaan alleen over Forever. De tab staat er zodra er data is, en die
   * zit in src/data/; zie components/talents/.
   */
  { id: 'talents', labelKey: 'nav.talents', path: 'talents', hasContent: () => talentClasses().length > 0 },
  // De facties van WoW Forever, zonder era (fase 6, Nutri 15 september 2026): de tab verschijnt met de eerste factie.
  { id: 'reputations', labelKey: 'nav.reputations', path: 'reputations', hasContent: async () => (await getReputations(defaultLocale)).length > 0 },
  // Clips en Streams halen hun inhoud op vlak voor de build (§7).
  { id: 'clips', labelKey: 'nav.clips', path: 'clips', hasContent: () => feedHasContent('clips') },
  { id: 'streams', labelKey: 'nav.streams', path: 'streams', hasContent: () => feedHasContent('streams') },
];

/**
 * Bouwt de zichtbare navigatie voor één taal.
 * Draait bij het bouwen, dus dit kost de bezoeker niets.
 */
export async function getNav(locale: Locale): Promise<NavItem[]> {
  const items: NavItem[] = [];

  for (const section of sections) {
    if (!(await section.hasContent())) continue;
    items.push({
      id: section.id,
      labelKey: section.labelKey,
      // Met slash op het einde: zo stuurt GitHub Pages niet eerst door.
      path: section.path ? `${localizePath(section.path, locale)}/` : localizePath('', locale),
      eraLinks: section.eraLinks?.join(' '),
    });
  }

  return items;
}

/**
 * Is dit navigatie-item de huidige pagina? Vergelijkt zonder slashes zodat
 * `/nl/bis` en `/nl/bis/` hetzelfde antwoord geven. NEWS is de homepage en is
 * ook actief op een nieuwspost.
 */
export function isCurrent(itemPath: string, pathname: string): boolean {
  const a = itemPath.replace(/^\/+|\/+$/g, '');
  const b = pathname.replace(/^\/+|\/+$/g, '');
  if (a === '' || /^[a-z]{2}$/.test(a)) {
    const newsPrefix = a === '' ? 'news' : `${a}/news`;
    return b === a || b === newsPrefix || b.startsWith(`${newsPrefix}/`);
  }
  return b === a || b.startsWith(`${a}/`);
}
