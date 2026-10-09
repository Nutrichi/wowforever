/*
 * /api/v1/guides/mounts.json: alle mounts als data, voor de lijst in de app.
 *
 * De bron is src/data/mounts.json, geschreven door tools/mountgids/app.py met
 * dezelfde functies als de mountpagina's. Dezelfde vorm als pets.json, met
 * level, rijvaardigheid en snelheid erbij. Een mount waarvan het icoon nog
 * versleuteld in de bestanden zit, heeft geen icoon.
 */

import type { APIRoute } from 'astro';
import data from '../../../../data/mounts.json';
import { jsonResponse } from '../../../../lib/api-feed';
import { GUIDES_SCHEMA } from '../../../../lib/api-guides';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  return jsonResponse({
    schema: GUIDES_SCHEMA,
    updated: data.updated,
    mounts: data.mounts.map((mount) => ({
      ...mount,
      icon: mount.icon ? new URL(`/wh/${mount.icon}.jpg`, base).href : null,
    })),
  });
};
