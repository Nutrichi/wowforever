/*
 * De notities bij de BiS-lijsten, als zinnentabel in zes talen (fase 3b).
 *
 * De notities in de data zijn opgebouwd uit ongeveer 400 terugkerende
 * zinnen. Elke zin staat één keer in de tabel, herschreven voor de lezer en
 * met de hand vertaald. De tabel staat per era in bis-notes/<era>.json.
 *
 * De sleutel is de zin uit de data na normalizeSentence, met {class} en
 * {spec} op de plek van de namen. De waarde:
 *   null                       een werknotitie over hoe de lijst gemaakt is;
 *                              die verschijnt niet op de site;
 *   [en, nl, fr, es, it, de]   de zin per taal, met {class} en {spec} in
 *                              dezelfde volgorde als in de sleutel.
 *
 * Een zin die niet in de tabel staat, verschijnt in het oorspronkelijke
 * Engels, zonder gedachtestreepje. Na een wijziging aan de data controleert
 * tools/check_bis_notes.py of elke zin er staat (STATUS.md).
 */

import type { Locale } from './ui';
import classic from './bis-notes/classic.json';
import tbc from './bis-notes/tbc.json';
import wotlk from './bis-notes/wotlk.json';
import cata from './bis-notes/cata.json';
import mop from './bis-notes/mop.json';

export type NoteRow = null | string[];

/** De volgorde van de talen in een rij. */
const columns: Locale[] = ['en', 'nl', 'fr', 'es', 'it', 'de'];

export const noteTable = { ...classic, ...tbc, ...wotlk, ...cata, ...mop } as Record<string, NoteRow>;

const CLASS = /\b(Death Knight|Druid|Warrior|Paladin|Hunter|Rogue|Priest|Shaman|Mage|Warlock|Monk)\b/g;
const SPEC = /\b(Beast Mastery|Balance|Feral|Guardian|Restoration|Arms|Fury|Protection|Holy|Discipline|Shadow|Retribution|Marksmanship|Survival|Assassination|Combat|Subtlety|Elemental|Enhancement|Arcane|Fire|Frost|Affliction|Demonology|Destruction|Blood|Unholy|Brewmaster|Mistweaver|Windwalker)\b/g;

/** Knipt een notitie in zinnen, zoals de tabel gemaakt is. */
export function splitNotes(notes: string): string[] {
  return notes.trim().split(/(?<=[.!?])\s+(?=[A-Z0-9])/).filter(Boolean);
}

/**
 * Brengt varianten van dezelfde zin samen: de rol in "Dps gear guide", een
 * ankerverwijzing en een adres van Wowhead tussen haakjes vallen weg, en een
 * gedachtestreepje wordt `--`, zodat de sleutels er geen bevatten.
 */
export function normalizeSentence(sentence: string): string {
  return sentence
    .replace(/⚠\s*/g, '')
    .replace(/\s*\(wowhead\.com[^)]*\)/g, '')
    .replace(/\s*\(anchor [^)]*\)/g, '')
    .replace(/ (?:Melee |Ranged )?(?:Dps|DPS|Healer|Tank) gear guide/g, ' gear guide')
    .replace(/\s*\u2014\s*/g, ' -- ')
    .trim();
}

/** Maakt de sleutel van een zin en onthoudt de namen die eruit gingen. */
export function noteKey(sentence: string): { key: string; classes: string[]; specs: string[] } {
  const classes: string[] = [];
  const specs: string[] = [];
  const withoutClass = normalizeSentence(sentence).replace(CLASS, (match) => { classes.push(match); return '{class}'; });
  const key = withoutClass.replace(SPEC, (match) => { specs.push(match); return '{spec}'; });
  return { key, classes, specs };
}

function fill(template: string, classes: string[], specs: string[]): string {
  let c = 0;
  let s = 0;
  return template
    .replace(/\{class\}/g, () => classes[Math.min(c++, classes.length - 1)] ?? '')
    .replace(/\{spec\}/g, () => specs[Math.min(s++, specs.length - 1)] ?? '');
}

/** De zinnen van een notitie in de taal van de pagina, zonder dubbels. */
export function translateNotes(notes: string, locale: Locale): string[] {
  const column = Math.max(0, columns.indexOf(locale));
  const sentences = splitNotes(notes).flatMap((sentence) => {
    const { key, classes, specs } = noteKey(sentence);
    if (!(key in noteTable)) return [sentence.replace(/\s+\u2014\s+/g, ', ').replace(/⚠\s*/g, '')];
    const row = noteTable[key];
    if (row === null) return [];
    return [fill(row[column] ?? row[0], classes, specs)];
  });
  return [...new Set(sentences)];
}
