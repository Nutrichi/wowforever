/*
 * /api/v1/bis/manifest.json: de catalogus van alle BiS-lijsten.
 *
 * De app haalt dit één keer op en weet dan welke lijsten er zijn, per era en
 * per fase, met voor elke fase de raids en de dungeons die erbij horen. Pas
 * als iemand een spec openslaat, haalt hij dat ene bestand op.
 *
 * Er staan hier geen items in, alleen namen en tellingen, dus dit blijft klein
 * ook als er lijsten bijkomen.
 */

import type { APIRoute } from 'astro';
import { bisEras, phaseContent, phaseIds } from '../../../../config/bis';
import { getBisLists, phasesWithLists } from '../../../../lib/bis';
import { jsonResponse } from '../../../../lib/api-feed';
import { BIS_SCHEMA, apiBisId } from '../../../../lib/api-bis';
import { locales } from '../../../../i18n/ui';
import { paneSlotWords } from '../../../../i18n/bis';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://wowforever.be');
  const lists = getBisLists();

  const eras = bisEras.map((era) => ({
    era,
    phases: phasesWithLists(era).map((phase) => {
      const content = phaseContent[era]?.[phase];
      const here = lists.filter((list) => list.era === era && list.phase === phase);
      return {
        phase,
        /* De volgorde van de fasen zoals de site ze toont. */
        order: phaseIds[era].indexOf(phase),
        raids: content?.raids ?? [],
        dungeons: content?.dungeons ?? [],
        lists: here.map((list) => ({
          id: apiBisId(list),
          class: list.class,
          spec: list.spec,
          role: list.role,
          updated: list.updated,
          url: new URL(`/api/v1/bis/${apiBisId(list)}.json`, base).href,
        })),
      };
    }),
  }));

  return jsonResponse({
    schema: BIS_SCHEMA,
    generated: new Date().toISOString(),
    site: base.origin,
    languages: locales,
    lists: lists.length,
    /* De namen van de vakjes van het character pane, zodat de app ze niet
       nog eens hoeft over te typen. */
    paneSlots: paneSlotWords(),
    eras,
  });
};
