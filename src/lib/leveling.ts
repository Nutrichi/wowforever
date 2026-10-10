/*
 * De levelbuilds (tools/levelbuilds/, AFSPRAKEN.md §19 van de app): per class welk
 * talent je op welk level neemt. De data staat in src/data/leveling.json; de pagina's
 * /leveling/ en de feed /api/v1/leveling.json lezen hem allebei.
 *
 * Een build bestaat uit fases. Een fase begint op een level met een respec (de Priest
 * op 30 en op 40) en heeft een eigen volgorde, een punt per regel als `boom/talent`.
 * Op level L met T extra punten van Legacy "Talented" heb je L - 9 + T punten: de
 * volgorde blijft dezelfde, je loopt T punten voor. Een fase die korter is, stopt
 * gewoon.
 *
 * Dezelfde rekenregel staat in de app (`Leveling.swift`); de feed geeft de data, niet
 * de uitkomst.
 */

import data from '../data/leveling.json';
import { talentClass, type TalentClass } from './talents';

export type LevelingPhase = { from: number; order: string[] };
export type LevelingBuild = { id: string; complete: boolean; maxLevel: number; phases: LevelingPhase[] };

export const LEVELING_SCHEMA = 1;
export const MIN_LEVEL = 10;
export const MAX_LEVEL = 60;
export const MAX_TALENTED = 5;

export const levelingBuilds = (): LevelingBuild[] => data.classes as LevelingBuild[];
export const levelingBuild = (id: string): LevelingBuild | undefined =>
  levelingBuilds().find((build) => build.id === id);
export const levelingRead = (): string => data.read;
export const levelingClientBuild = (): string => data.clientBuild;

/** De fase die op dit level geldt: de laatste die al begonnen is. */
export function phaseAt(build: LevelingBuild, level: number): number {
  let index = 0;
  build.phases.forEach((phase, i) => { if (phase.from <= level) index = i; });
  return index;
}

/** Hoeveel punten er op dit level staan, en welke fase. */
export function pointsAt(build: LevelingBuild, level: number, talented = 0) {
  const phase = phaseAt(build, level);
  const order = build.phases[phase].order;
  const count = Math.max(0, Math.min(order.length, level - 9 + talented));
  return { phase, count, order };
}

/** De punten als rangen per boom, in de volgorde van de talenten in talents.json. */
export function ranksAt(klass: TalentClass, build: LevelingBuild, level: number, talented = 0): number[][] {
  const { count, order } = pointsAt(build, level, talented);
  const taken = new Map<string, number>();
  for (const key of order.slice(0, count)) taken.set(key, (taken.get(key) ?? 0) + 1);
  return klass.trees.map((tree) => tree.talents.map((talent) => taken.get(`${tree.id}/${talent.id}`) ?? 0));
}

/**
 * De lijst per level: elk punt met het level waarop je het neemt en de rang die het
 * talent dan krijgt. Bij een respec staan de punten tot dat level allemaal op dat level.
 */
export function levelRows(klass: TalentClass, build: LevelingBuild, talented = 0) {
  const name = new Map<string, string>();
  for (const tree of klass.trees) for (const talent of tree.talents) name.set(`${tree.id}/${talent.id}`, talent.name);
  return build.phases.map((phase, p) => {
    const rank = new Map<string, number>();
    return {
      from: phase.from,
      respec: p > 0,
      rows: phase.order.map((key, i) => {
        rank.set(key, (rank.get(key) ?? 0) + 1);
        return {
          key,
          point: i + 1,
          level: Math.max(phase.from, MIN_LEVEL + i - talented),
          name: name.get(key) ?? key,
          rank: rank.get(key) ?? 1,
        };
      }),
    };
  });
}

export function classOfBuild(build: LevelingBuild): TalentClass {
  const klass = talentClass(build.id);
  if (!klass) throw new Error(`Levelbuild voor een onbekende class: ${build.id}`);
  return klass;
}
