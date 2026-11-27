/*
 * Praten met Supabase, zonder bibliotheek (PROJECT_SPEC.md §6).
 *
 * De officiële client is ongeveer dertig kilobyte voor drie verzoeken; dit
 * zijn drie `fetch`-aanroepen.
 *
 * Elke functie hier faalt zacht. Zolang er geen project is (`supabaseEnabled`
 * is false) doet ze niets en geeft ze het lege antwoord terug. Een fout wordt
 * gemeld aan de aanroeper en gooit nooit iets omhoog waar de pagina van
 * omvalt.
 */

import { identityKey, supabaseEnabled, supabaseKey, supabaseUrl } from '../config/supabase';

const headers = {
  apikey: supabaseKey,
  Authorization: `Bearer ${supabaseKey}`,
  'Content-Type': 'application/json',
};

/**
 * Het ID dat deze browser identificeert. Willekeurig, lokaal gemaakt, en
 * verder nergens aan gekoppeld: geen account, geen e-mail, geen naam.
 */
export function identity(): string | null {
  try {
    let id = localStorage.getItem(identityKey);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(identityKey, id);
    }
    return id;
  } catch (error) {
    // Privémodus of geblokkeerde opslag: dan kan deze bezoeker niet liken.
    return null;
  }
}

/**
 * De tellingen van een reeks posts. Zo weinig verzoeken als kan: de lijst
 * wordt alleen opgesplitst als de URL te lang wordt. Met alle posts in één
 * URL gaf Supabase vanaf 27 november 2026 een 400 (URL van ongeveer 19 KB).
 */
const MAX_LIST = 7000; // tekens van de gecodeerde lijst per verzoek

export async function likeCounts(postIds: string[]): Promise<Record<string, number>> {
  if (!supabaseEnabled || postIds.length === 0) return {};

  // PostgREST wil de lijst tussen haakjes; elk item tussen aanhalingstekens.
  const lists: string[] = [];
  let current = '';
  for (const id of postIds) {
    const item = encodeURIComponent(`"${id.replace(/"/g, '')}"`);
    const next = current ? `${current}${encodeURIComponent(',')}${item}` : item;
    if (current && next.length > MAX_LIST) {
      lists.push(current);
      current = item;
    } else {
      current = next;
    }
  }
  if (current) lists.push(current);

  // De sleutel in de URL en geen eigen headers: dan is het een "simple
  // request" en stuurt de browser geen OPTIONS vooraf. Dat halveert de
  // logregels in Supabase (Nutri, 16 november 2026, Log Ingestion 1,77 van
  // 1 GB). De publishable key staat toch al in de broncode van de pagina.
  const parts = await Promise.all(lists.map(async (list) => {
    const url = `${supabaseUrl}/rest/v1/post_stats?select=post_id,like_count&post_id=in.(${list})&apikey=${encodeURIComponent(supabaseKey)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) return [];
      return (await response.json()) as { post_id: string; like_count: number }[];
    } catch (error) {
      return [];
    }
  }));
  return Object.fromEntries(parts.flat().map((row) => [row.post_id, row.like_count]));
}

/**
 * Een like plaatsen. Geeft de nieuwe telling terug, of null als het niet
 * gelukt is. Twee keer liken is geen fout: de database houdt het op één.
 */
export async function addLike(postId: string): Promise<number | null> {
  if (!supabaseEnabled) return null;
  const id = identity();
  if (!id) return null;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/add_like`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ p_post_id: postId, p_identity: id }),
    });
    if (!response.ok) return null;
    const count = await response.json();
    return typeof count === 'number' ? count : null;
  } catch (error) {
    return null;
  }
}

/** Wat er terugkomt uit het inzendformulier. */
export type SubmitResult = { ok: true } | { ok: false; reason: 'storage' | 'network' };

/** Een tip insturen (§6.2). De drempels tegen bots staan in de database. */
export async function submitNews(fields: {
  title: string;
  sourceUrl: string;
  note: string;
  nickname: string;
}): Promise<SubmitResult> {
  if (!supabaseEnabled) return { ok: false, reason: 'network' };
  const id = identity();
  if (!id) return { ok: false, reason: 'storage' };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/submit_news`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        p_title: fields.title,
        p_source_url: fields.sourceUrl,
        p_note: fields.note,
        p_nickname: fields.nickname,
        p_identity: id,
      }),
    });
    return response.ok ? { ok: true } : { ok: false, reason: 'network' };
  } catch (error) {
    return { ok: false, reason: 'network' };
  }
}
