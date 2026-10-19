/*
 * De data van de dungeonpagina's met drie tabs (19 oktober 2026): per dungeon een
 * taalloos bestand data/dungeons/<slug>.json (bazen, buit, quests, itemkaarten, gemaakt
 * door tools/dungeons_build.py en nagekeken bij Wowhead Forever) en per taal de teksten
 * in data/dungeons/text/<taal>.json (plaats, ingang, inleiding, questdoelen), met de hand
 * geschreven.
 */
import type { Locale } from '../i18n/ui';

export type DungeonTab = 'loot' | 'quests' | 'guide';

export type DungeonPlace = {
  name: string;
  kind: 'npc' | 'item' | 'object' | string;
  npc?: number | null;
  item?: number | null;
  zone?: string;
  place?: string;
  at?: { x: number; y: number };
  taxi?: { name: string; yards: number };
};

export type DungeonQuestLink = { name: string; id: number | null; optional: boolean };

export type DungeonQuest = {
  id: number;
  name: string;
  level: number;
  minLevel: number;
  faction: 'alliance' | 'horde' | null;
  classes: string[] | null;
  races: string[] | null;
  xp: number | null;
  rep: string | null;
  site: string | null;
  from: DungeonPlace[];
  to: DungeonPlace[];
  chain: DungeonQuestLink[];
  next: DungeonQuestLink[];
  rewards: number[];
  choice: boolean;
};

export type DungeonData = {
  slug: string;
  levels: string;
  bosses: { name: string; slug: string; level: string; npc: number | null; items: number[] }[];
  loose: number[];
  quests: DungeonQuest[];
  cards: Record<string, string>;
};

export type DungeonText = {
  location: string;
  entrance: string;
  intro: string;
  group?: number;
  quests: Record<string, { objective: string; note?: string; shots?: { file: string; alt: string }[] }>;
};

const data = import.meta.glob<DungeonData>('../data/dungeons/*.json', { eager: true, import: 'default' });
const texts = import.meta.glob<Record<string, DungeonText>>('../data/dungeons/text/*.json', { eager: true, import: 'default' });

export function dungeonData(slug: string): DungeonData | undefined {
  return data[`../data/dungeons/${slug}.json`];
}

export function dungeonText(slug: string, locale: Locale): DungeonText | undefined {
  return texts[`../data/dungeons/text/${locale}.json`]?.[slug] ?? texts['../data/dungeons/text/en.json']?.[slug];
}

/** Het adres van een tab: de buit op het adres van de dungeon zelf, de rest daaronder. */
export function dungeonTabKey(slug: string, tab: DungeonTab): string {
  return tab === 'loot' ? `guides/dungeons/${slug}` : `guides/dungeons/${slug}/${tab}`;
}

/** /way met één cijfer na de komma, zoals in de rest van de site. */
export function way(at: { x: number; y: number }): string {
  return `/way ${at.x.toFixed(1)} ${at.y.toFixed(1)}`;
}
