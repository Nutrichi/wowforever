/*
 * /api/v1/leveling.json: de levelbuilds voor de Leveling-tab van de app
 * (AFSPRAKEN.md §19 van de app).
 *
 * Taalvrij, zoals de BiS-lijsten: de namen van de talenten staan in de talents.json
 * die de app zelf meedraagt, dus hier staan alleen de sleutels `boom/talent`. De
 * rekenregel (L - 9 + Talented punten, de fases) staat in lib/leveling.ts en in de app.
 * `complete` is false zolang de bron nog niet tot level 60 gaat; de app zegt dat dan.
 *
 * Bevroren op build 70450 (31 oktober 2026): apps tot en met build 6 dragen de oude bomen.
 * Nieuwere apps lezen /api/v1/leveling-v2.json.
 */

import type { APIRoute } from 'astro';
import { jsonResponse } from '../../../lib/api-feed';
import { LEVELING_SCHEMA } from '../../../lib/leveling';
import frozen from '../../../data/leveling-app-70450.json';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse({
    schema: LEVELING_SCHEMA,
    read: frozen.read,
    clientBuild: frozen.clientBuild,
    classes: frozen.classes.map((build) => ({
      ...build,
      url: new URL(`/leveling/${build.id}/`, base).href,
    })),
  });
};
