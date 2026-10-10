/*
 * De tooltip van een talent, als HTML: naam, nieuw of gewijzigd, kosten en elke rang.
 * Gedeeld door de talentcalculator en de levelbuilds, zodat een talent er op beide
 * pagina's hetzelfde uitziet.
 */

import type { Locale } from '../i18n/ui';
import { talT } from '../i18n/talents';
import type { Talent } from './talents';

/** Tekst veilig in HTML zetten; de teksten komen uit de client van het spel. */
export function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function talentTip(talent: Talent, locale: Locale): string {
  const t = talT(locale);
  const merk = talent.status === 'new' ? t('statusNew')
    : talent.status === 'changed' ? t('statusChanged') : '';
  const regels = talent.ranks
    .map((r) => `<span class="wf-tip__rank"><b>${t('rank')} ${r.rank}</b>${escapeHtml(r.text)}</span>`)
    .join('');
  return [
    `<span class="wf-tip__name">${escapeHtml(talent.name)}</span>`,
    merk ? `<span class="wf-tip__flag">${escapeHtml(merk)}</span>` : '',
    talent.cost ? `<span class="wf-tip__cost">${escapeHtml(talent.cost)}</span>` : '',
    regels || `<span class="wf-tip__rank">${escapeHtml(t('noDescription'))}</span>`,
  ].join('');
}
