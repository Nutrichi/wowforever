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
import { bisEraCounts, bisPath, bisPhasePath, phasesWithLists } from '../lib/bis';
import { guidePath } from '../lib/guides';
import { getPages } from '../lib/pages';
import { getReputations, reputationPath } from '../lib/reputations';
import { bisEras, foreverPhases, phaseContent } from '../config/bis';
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
      ? [`- [Best in slot](${url(bisPath(defaultLocale))}): best-in-slot gear lists per class, spec and phase, with the source of every item, enchants and gems. Every list has its own page at /bis/<era>/<phase>/<class>-<spec>/, and every phase has its own page at /bis/<era>/<phase>/.`]
      : []),
    /*
     * Elke fase apart, met de raids erbij. Dit is waar "wow forever bis phase 1"
     * en "bis molten core" op uitkomen, en een taalmodel dat dit leest weet
     * meteen welke raids bij welke fase horen (PROJECT_SPEC.md §11).
     */
    ...foreverPhases.map((phase) => {
      /* Een fase zonder namen zegt wat er wél bekend is: de groepsgroottes. */
      const names = phase.raids.some((raid) => raid.name)
        ? phase.raids.map((raid) => (raid.players ? `${raid.name} (${raid.players} players)` : raid.name)).filter(Boolean).join(', ')
        : phase.raids.map((raid) => (raid.kind === 'revamp'
          ? 'a revamped iconic raid, not named yet'
          : raid.players ? `a new raid for ${raid.players} players, not named yet` : 'a raid, not named yet')).join(', ');
      const dungeons = phase.dungeons.length
        ? phase.dungeons.map((dungeon) => `${dungeon.name} (levels ${dungeon.levels})`).join(', ')
        : phase.dungeonsUnnamed ? `${phase.dungeonsUnnamed} new dungeons, not named yet` : '';
      return `- [WoW Forever BiS ${phase.id.replace('p', 'phase ')}](${url(bisPhasePath(defaultLocale, 'forever', phase.id))}): what opens in this phase of WoW Forever${names ? `. Raids: ${names}` : ''}${dungeons ? `. Dungeons: ${dungeons}` : ''}. Best-in-slot lists follow as soon as there is item data.`;
    }),
    ...bisReady.flatMap((era) =>
      phasesWithLists(era).map((phase) => {
        const content = phaseContent[era]?.[phase];
        const names = content?.raids.join(', ') ?? '';
        const where = phase === 'preraid'
          ? `pre-raid best in slot, from ${content?.dungeons.join(', ') ?? 'the dungeons'}`
          : names ? `best in slot for ${names}` : 'best in slot for this phase';
        return `- [${eras[era].name} ${phase === 'preraid' ? 'pre-raid' : phase.replace('p', 'phase ')} BiS](${url(bisPhasePath(defaultLocale, era, phase))}): ${where}, one list per class and spec.`;
      })),
    `- [Classes](${url(guidePath('classes', defaultLocale))}): leveling guides per class and spec for each era, plus what is known about classes, race and class combinations and racials in WoW Forever.`,
    `- [Tradeskills](${url(guidePath('tradeskills', defaultLocale))}): tradeskill guides for each era, plus the tradeskill perks and Legacy perks of WoW Forever.`,
    `- [Talents](${url(localizePath('talents', defaultLocale))}/): the WoW Forever talent calculator, with all nine classes and their three trees, and the Legacy calculator for the account-wide Legacy perks. A build is shareable as a link.`,
    ...(factions.length
      ? [`- [Reputations](${url(reputationPath(defaultLocale))}): reputation guides per faction for WoW Forever. The Azeroth Commerce Authority and Durotar Supply and Logistics are Forever's own factions from the beta; the rest start from the factions of Classic Era until Forever shows its own. Per faction: the standings, the fastest way to farm reputation and the rewards per standing.`]
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
    'What this site answers: the release date and the beta of WoW Forever, its talents and talent calculator, best-in-slot (BiS) lists, classes, races and racials, professions and tradeskills, reputations and factions, leveling routes and leveling addons such as RestedXP and Zygor, plus live streams and clips.',
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
