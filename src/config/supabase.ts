/*
 * De verbinding met Supabase (PROJECT_SPEC.md §6).
 *
 * Een eigen, nieuw project voor deze site, los van elk ander project. Het
 * project staat er sinds 15 september 2026, regio Central EU (Frankfurt).
 * Zolang de waarden hieronder leeg zijn, tonen de hartjes nul en wordt er
 * niets verzonden; elke functie in lib/supabase.ts kijkt eerst naar
 * `supabaseEnabled`.
 *
 * **De publishable key hoort openbaar te zijn.** Hij staat in de JavaScript van
 * de site en dus in de publieke repo; zo werkt Supabase. De beveiliging zit in
 * row level security en in de functies. De `secret`-sleutel komt hier nooit.
 */

export const supabaseUrl = 'https://izdfwmtrhxkjrzanzgsr.supabase.co';

/** De publishable key. Openbaar bedoeld; zie hierboven. */
export const supabaseKey = 'sb_publishable_CEaFFtrKn4g8NIico3_6xw_tWgudwn8';

/** Zolang er geen project is, praat de site met niemand. */
export const supabaseEnabled = supabaseUrl !== '' && supabaseKey !== '';

/** Waar de sleutel in localStorage staat die één browser identificeert. */
export const identityKey = 'wf-identity';
