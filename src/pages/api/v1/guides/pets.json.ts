/*
 * /api/v1/guides/pets.json: alle pets als data, voor de lijst in de app.
 *
 * De bron is src/data/pets.json, geschreven door tools/petgids/app.py met
 * dezelfde functies als de petpagina's, dus de lijst en de pagina's zeggen
 * hetzelfde. De tekst staat in zes talen in hetzelfde bestand: het zijn korte
 * regels, en zo is het één verzoek.
 */

import type { APIRoute } from 'astro';
import data from '../../../../data/pets.json';
import { jsonResponse } from '../../../../lib/api-feed';
import { GUIDES_SCHEMA } from '../../../../lib/api-guides';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse({
    schema: GUIDES_SCHEMA,
    updated: data.updated,
    pets: data.pets.map((pet) => ({
      ...pet,
      icon: new URL(`/wh/${pet.icon}.jpg`, base).href,
    })),
  });
};
