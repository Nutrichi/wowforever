/*
 * De reeks van The WoW: Forever Podcast (Nutri, 2 oktober 2026: "everytime a
 * new episode is posted, we can easily make a new post and refer to the old
 * episodes").
 *
 * Elke post met `podcast` in de frontmatter krijgt onderaan een blok met alle
 * afleveringen, de nieuwste eerst: de link naar onze post en de volledige link
 * naar de video op YouTube. Een nieuwe aflevering is dus alleen een nieuwe
 * post; de oudere posts tonen haar vanzelf bij de volgende bouw.
 *
 * Eén bron voor de site (PostLayout.astro) en de app (api-feed.ts), zodat de
 * lijst in de app hetzelfde is als op het web.
 */

import type { Locale } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';
import { longDate } from './date';
import { getPosts, type Post } from './posts';

type Episode = { episode: number; title: string; minutes: number };

function episodeOf(post: Post): Episode | undefined {
  const data = post.entry.data as { podcast?: Episode };
  return data.podcast;
}

function escape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** De HTML van het blok, of null als deze post geen aflevering is. */
export async function podcastSeries(post: Post, locale: Locale): Promise<string | null> {
  if (!episodeOf(post)) return null;
  const t = useTranslations(locale);

  const episodes = (await getPosts(locale))
    .filter((other) => episodeOf(other) && other.sourceUrl)
    .sort((a, b) => episodeOf(b)!.episode - episodeOf(a)!.episode);

  const items = episodes.map((other) => {
    const ep = episodeOf(other)!;
    const video = other.sourceUrl!;
    const label = `${t('podcast.episode').replace('{n}', String(ep.episode))}: ${ep.title}`;
    const meta = `${longDate(other.date, locale)} · ${t('podcast.minutes').replace('{n}', String(ep.minutes))}`;
    const here = other.slug === post.slug;
    const name = here
      ? `<strong>${escape(label)}</strong> <span class="wf-podcast__here">(${escape(t('podcast.current'))})</span>`
      : `<a href="${escape(other.href)}">${escape(label)}</a>`;
    return (
      `<li>${name}<br><span class="wf-podcast__meta">${escape(meta)}</span><br>` +
      `<a href="${escape(video)}" rel="noopener nofollow" target="_blank">${escape(video.replace(/^https:\/\/(www\.)?/, ''))}</a></li>`
    );
  });

  return (
    `<aside class="wf-podcast" data-pagefind-ignore><h2>${escape(t('podcast.title'))}</h2>` +
    `<p>${escape(t('podcast.intro'))}</p><ul>${items.join('')}</ul></aside>`
  );
}
