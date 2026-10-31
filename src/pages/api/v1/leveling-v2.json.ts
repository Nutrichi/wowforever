/*
 * /api/v1/leveling-v2.json: de levelbuilds voor de Leveling-tab van de app
 * (AFSPRAKEN.md §19 van de app).
 *
 * Taalvrij, zoals de BiS-lijsten: de namen van de talenten staan in de talents.json
 * die de app zelf meedraagt, dus hier staan alleen de sleutels `boom/talent`. De
 * rekenregel (L - 9 + Talented punten, de fases) staat in lib/leveling.ts en in de app.
 * `complete` is false zolang de bron nog niet tot level 60 gaat; de app zegt dat dan.
 */

import type { APIRoute } from 'astro';
import { jsonResponse } from '../../../lib/api-feed';
import { LEVELING_SCHEMA, levelingBuilds, levelingClientBuild, levelingRead } from '../../../lib/leveling';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse({
    schema: LEVELING_SCHEMA,
    read: levelingRead(),
    clientBuild: levelingClientBuild(),
    classes: levelingBuilds().map((build) => ({
      ...build,
      url: new URL(`/leveling/${build.id}/`, base).href,
    })),
  });
};
