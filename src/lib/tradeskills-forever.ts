/*
 * De data van de tradeskills van WoW Forever (tools/tradeskills_forever.py): recepten,
 * items en de berekende levelroute per tradeskill. Voor de subpagina's
 * /tradeskills/forever/<skill>/recipes/ en /leveling/ (Nutri, 19 oktober 2026).
 */
import type { Locale } from '../i18n/ui';
import { localizePath } from '../i18n/utils';

export type TsRecipe = {
  id: number;
  name: string;
  learn: number;
  colors: number[];
  creates: [number, number] | null;
  reagents: [number, number][];
  sources: string[];
  cost: number;
  cooldown: number;
  detail: { type: string; where?: string[]; favor?: number; standing?: string }[];
  category: string;
  status: 'new' | 'updated' | 'unchanged';
  changes: string[];
};

export type TsItem = { name: string; quality: number; icon: string | null; buy: number; vendor: boolean };
export type TsStep = { id: number; from: number; to: number; crafts: number };

export type TsData = {
  skill: string;
  type: 'crafting' | 'gathering' | 'secondary';
  build: string;
  updated: string;
  ranks: { rank: string; max: number }[];
  recipes: TsRecipe[];
  items: Record<string, TsItem>;
  route: TsStep[];
};

const files = import.meta.glob<{ default: TsData }>('../data/tradeskills/*.json', { eager: true });
const all: Record<string, TsData> = Object.fromEntries(
  Object.values(files).map((file) => [file.default.skill, file.default]),
);

export function tsData(skill: string): TsData | undefined {
  return all[skill];
}

/* Herbalism, Skinning en Fishing hebben geen recepten om te tonen; Mining wel (smelten), maar geen route. */
export function hasRecipes(skill: string): boolean {
  const d = all[skill];
  return !!d && d.recipes.length > 0 && !['herbalism', 'skinning', 'fishing'].includes(skill);
}

export function hasRoute(skill: string): boolean {
  const d = all[skill];
  return !!d && d.route.length > 0 && d.type !== 'gathering';
}

export const tsSkills = (): string[] => Object.keys(all);

export function tsPath(locale: Locale, skill: string, sub?: 'recipes' | 'leveling'): string {
  return `${localizePath(`tradeskills/forever/${skill}${sub ? `/${sub}` : ''}`, locale)}/`;
}

/** 12345 koper wordt "1g 23s 45c", zoals in het spel. */
export function money(copper: number): string {
  if (!copper) return '';
  const g = Math.floor(copper / 10000);
  const s = Math.floor((copper % 10000) / 100);
  const c = copper % 100;
  return [g && `${g}g`, s && `${s}s`, c && `${c}c`].filter(Boolean).join(' ');
}

export const whSpell = (id: number) => `https://www.wowhead.com/forever/spell=${id}`;
export const whItem = (id: number) => `https://www.wowhead.com/forever/item=${id}`;
