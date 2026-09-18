/*
 * De talentbomen en de Legacy-boom, en de codering van een build in een adres.
 *
 * De data staat in `src/data/talents.json` en `src/data/legacy.json`. Die twee
 * bestanden zijn **letterlijk dezelfde** als die in de iOS-app, want de app en
 * deze pagina moeten dezelfde build uit hetzelfde adres lezen. Wijkt er een af,
 * dan opent een link uit de app hier iets anders. `tools/check_talentdata.py`
 * controleert dat ze gelijk zijn.
 *
 * **De codering staat in `AFSPRAKEN.md` §15 van de app**, en dat is met opzet:
 * ze hoort bij geen van de twee kanten alleen. Kort:
 *
 *   /talents/warrior/?t=3530000-0000000-0000000
 *
 * Eén cijfer per talent, in de volgorde waarin ze in de data staan (op rij en
 * dan kolom). Bomen gescheiden door een streepje. Nullen op het einde mogen
 * weg. Zo herkent iedereen die ooit een Classic-calculator gebruikt heeft de
 * vorm, en is een build met het blote oog na te lezen.
 */

import talentsData from '../data/talents.json';
import legacyData from '../data/legacy.json';

export type TalentRank = { rank: number; text: string };

export type Talent = {
  id: string;
  name: string;
  row: number;
  col: number;
  maxRank: number;
  icon: string | null;
  /** `new`, `changed` of `unchanged`, tegenover Classic Era. */
  status: string;
  /** Het talent in dezelfde boom dat eerst vol moet staan. */
  requires: string | null;
  cost: string | null;
  ranks: TalentRank[];
};

export type TalentTree = { id: string; name: string; talents: Talent[] };
export type TalentClass = { id: string; name: string; trees: TalentTree[] };

export type LegacyNode = {
  id: string;
  name: string;
  row: number;
  col: number;
  maxRank: number;
  icon: string | null;
  passive: boolean;
  /** Blizzard heeft dit vakje leeg gelaten voor een latere patch. */
  unknown: boolean;
  cost: string | null;
  requires: string | null;
  ranks: TalentRank[];
};

export type LegacyCategory = {
  id: string;
  name: string;
  cols: number;
  rows: number;
  nodes: LegacyNode[];
};

const talents = talentsData as unknown as {
  clientBuild: string;
  read: string;
  totalPoints: number;
  classes: TalentClass[];
};

const legacy = legacyData as unknown as {
  clientBuild: string;
  spendable: number;
  earnable: number;
  categories: LegacyCategory[];
};

export const talentClasses = (): TalentClass[] => talents.classes;
export const talentClass = (id: string): TalentClass | undefined =>
  talents.classes.find((c) => c.id === id);
export const totalTalentPoints = (): number => talents.totalPoints;
export const clientBuild = (): string => talents.clientBuild;
export const dataRead = (): string => talents.read;

export const legacyCategories = (): LegacyCategory[] => legacy.categories;
export const legacySpendable = (): number => legacy.spendable;
export const legacyEarnable = (): number => legacy.earnable;

/** Hoeveel punten er nodig zijn om de rij van dit talent te openen. */
export const requiredPoints = (talent: Talent): number => (talent.row - 1) * 5;

/**
 * De hoogste rij van een boom. Zeven bij elke class, op een enkele tak na.
 */
export const rowCount = (tree: TalentTree): number =>
  tree.talents.reduce((hoogste, t) => Math.max(hoogste, t.row), 1);

/* ------------------------------------------------------------- de codering */

/**
 * Een build als tekst. Per boom een cijfer per talent, bomen gescheiden door
 * een streepje, nullen op het einde eraf.
 *
 * `ranks` is per boom-id een lijst met het aantal punten per talent, in de
 * volgorde van de data.
 */
export function encodeBuild(groups: number[][]): string {
  return groups
    .map((ranks) => ranks.join('').replace(/0+$/, ''))
    .join('-');
}

/**
 * Een build uit een adres. Geeft per boom een lijst met het aantal punten per
 * talent, altijd even lang als die boom talenten heeft.
 *
 * Alles wat niet klopt wordt genegeerd en niet geweigerd: een adres uit een
 * chat van vorig jaar hoort iets te tonen en geen foutmelding. Een cijfer boven
 * de hoogste rang zakt naar die rang, een te lange reeks wordt afgekapt, en een
 * te korte wordt met nullen aangevuld.
 */
export function decodeBuild(code: string | null, sizes: number[], maxRanks: number[][]): number[][] {
  const groups = (code ?? '').split('-');
  return sizes.map((size, tree) => {
    const digits = (groups[tree] ?? '').replace(/[^0-9]/g, '');
    return Array.from({ length: size }, (_, i) => {
      const waarde = Number(digits[i] ?? '0');
      const hoogste = maxRanks[tree]?.[i] ?? 0;
      return Number.isFinite(waarde) ? Math.min(Math.max(0, waarde), hoogste) : 0;
    });
  });
}

/** Het adres van het icoon van een talent. De iconen staan in `public/icons/`. */
export const iconUrl = (key: string | null): string =>
  key ? `/icons/${key}.jpg` : '';
