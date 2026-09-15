/*
 * /llms.txt (PROJECT_SPEC.md §11): waar de site over gaat en hoe hij in elkaar
 * zit, voor taalmodellen die hem lezen. Bij elke build opnieuw gemaakt uit
 * dezelfde bronnen als de pagina's, dus hij noemt nooit een sectie die er niet
 * is (§4.2).
 *
 * In het Engels, want dat is de brontaal van de site.
 */

import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { getClips, getStreams } from '../lib/feeds';
import { defaultLocale, localeNames, locales, ui } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { bisT } from '../i18n/bis';
import { bisEraCounts, bisPath } from '../lib/bis';
import { guidePath } from '../lib/guides';
import { getPages } from '../lib/pages';
import { getReputations, reputationPath } from '../lib/reputations';
import { bisEras } from '../config/bis';
import { eras } from '../config/eras';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const url = (path: string) => new URL(path, base).href;
  const en = ui.en;

  const posts = await getPosts(defaultLocale);
  const clips = getClips();
  const streams = getStreams();

  const pages = await getPages(defaultLocale);
  const pageLine = (page: (typeof pages)[number]) => `- [${page.title}](${url(page.href)}): ${page.description}`;

  const bis = bisT(defaultLocale);
  const bisCounts = bisEraCounts();
  const bisReady = bisEras.filter((era) => bisCounts[era] > 0);

  const factions = await getReputations(defaultLocale);

  const sections = [
    `- [News](${url('/')}): the full news archive about WoW Forever and WoW Classic, newest first.`,
    ...(bisReady.length
      ? [`- [Best in slot](${url(bisPath(defaultLocale))}): best-in-slot gear lists per class, spec and phase, with the source of every item, enchants and gems. Every list has its own page at /bis/<era>/<phase>/<class>-<spec>/.`]
      : []),
    `- [Classes](${url(guidePath('classes', defaultLocale))}): leveling guides per class and spec for each era, plus what is known about classes, race and class combinations and racials in WoW Forever.`,
    `- [Tradeskills](${url(guidePath('tradeskills', defaultLocale))}): tradeskill guides for each era, plus the tradeskill perks and Legacy perks of WoW Forever.`,
    ...(factions.length
      ? [`- [Reputations](${url(reputationPath(defaultLocale))}): reputation guides per faction for WoW Forever, based on the factions of Classic Era until Forever shows its own: the standings, the fastest way to farm reputation and the rewards per standing.`]
      : []),
    ...factions.map((faction) => `- [${faction.data.title}](${url(faction.href)}): ${faction.data.description}`),
    ...pages.filter((page) => page.key === 'forever').map(pageLine),
    ...pages.filter((page) => page.key === 'routes' || page.key.startsWith('routes/')).map(pageLine),
    ...pages.filter((page) => page.key.startsWith('compare/')).map(pageLine),
    ...(clips
      ? [`- [${en['clips.title']}](${url('/clips/')}): ${en['clips.description'].replace('{h}', String(clips.rules.windowHours))}`]
      : []),
    ...(streams ? [`- [${en['streams.title']}](${url('/streams/')}): ${en['streams.description']}`] : []),
  ];

  const lines = [
    '# WoW Forever',
    '',
    `> ${en['site.description']}`,
    '',
    en['site.disclaimer'],
    '',
    `Every page exists in ${locales.length} languages: ${locales
      .map((locale) => `${localeNames[locale]} (${url(localizePath('', locale))})`)
      .join(', ')}. Posts are written in English and translated by hand. Names from the game (items, spells, zones, dungeons, raids, bosses, classes, specs, tradeskills and factions) are never translated.`,
    '',
    '## Sections',
    '',
    ...sections,
    '',
    '## News',
    '',
    ...posts.map((post) => `- [${post.title}](${url(post.href)}): ${post.description}`),
    '',
    ...(bisReady.length
      ? [
        '## Best in slot',
        '',
        ...bisReady.map((era) => `- [${bis('hubTitle', { era: eras[era].name })}](${url(bisPath(defaultLocale, era))}): ${bis('hubDescription', { era: eras[era].name, n: bisCounts[era] })}`),
        '',
      ]
      : []),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
