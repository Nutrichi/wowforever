/*
 * Nutri op YouTube: de uitgelichte video op Clips, en het
 * blok FEATURED STREAM op Streams (Nutri, 6 oktober 2026). Die stream komt
 * sinds 10 oktober 2026 van Twitch.
 *
 * Het bestand src/data/generated/youtube.json komt uit scripts/fetch-feeds.mjs,
 * net als clips.json en streams.json, en staat dus niet in git. Ontbreekt het,
 * dan is er geen blok; dat is geen fout.
 *
 * Alleen op de site. De feed voor de app (lib/api-feed.ts) kent dit niet.
 */

import { supabaseUrl } from '../config/supabase';

export type YoutubeVideo = {
  id: string;
  title: string;
  channel: string;
  channelId: string;
  publishedAt: string;
  thumbnail: string | null;
  url: string;
};

type YoutubeFile = {
  fetchedAt: string;
  channelId: string;
  latest: YoutubeVideo | null;
  live: YoutubeVideo | null;
};

const generated = import.meta.glob('../data/generated/youtube.json', { eager: true, import: 'default' });
const file = (generated['../data/generated/youtube.json'] as YoutubeFile | undefined) ?? null;

/** De nieuwste gemonteerde video van Nutri: geen opname van een stream, geen Short. */
export const latestVideo: YoutubeVideo | null = file?.latest ?? null;

/**
 * Was Nutri live op YouTube bij het bouwen? Niet meer gebruikt sinds de stream
 * naar Twitch ging (10 oktober 2026); blijft voor als het terugdraait.
 */
export const liveAtBuild: YoutubeVideo | null = file?.live ?? null;

/**
 * De Edge Function die zegt of Nutri nu live is. Sinds 10 oktober 2026
 * `twitch-live`: Nutri streamt weer op Twitch, omdat daar de kijkers zitten.
 * `youtube-live` staat er nog, voor als het ooit terugdraait.
 */
export const liveEndpoint = supabaseUrl ? `${supabaseUrl}/functions/v1/twitch-live` : '';

/** Het Twitch-kanaal van Nutri: de speler en de link van FEATURED STREAM. */
export const twitchLogin = 'nutri_r1';
export const twitchUrl = `https://www.twitch.tv/${twitchLogin}`;

/** Het YouTube-kanaal, voor de link onder FEATURED VIDEO. */
export const channelUrl = 'https://www.youtube.com/@nutri_r1';
