/*
 * /api/v1/raid.json: de data van de raidplanner voor de Raid-tab van de app
 * (AFSPRAKEN.md §21 van de app).
 *
 * Taalvrij, zoals de levelbuilds: de namen van buffs en specs zijn namen uit het
 * spel en blijven Engels; de teksten eromheen draagt de app zelf. De rekenregels
 * staan in lib/raid.ts en in de app (`Raid.swift`). `url` is de planner op de
 * site, waar een gedeelde raid (`?r=`) opengaat.
 */

import type { APIRoute } from 'astro';
import { jsonResponse } from '../../../lib/api-feed';
import { raidData } from '../../../lib/raid';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse({ ...raidData, url: new URL('/raid/', base).href });
};
