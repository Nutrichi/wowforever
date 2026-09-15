/*
 * De vaste woorden van REPUTATIONS (PROJECT_SPEC.md §5, handoff §7.5). De
 * gidsen zelf staan als Markdown in src/content/reputations/<taal>/<era>/.
 *
 * De standings zijn namen uit het spel en blijven Engels in elke taal
 * (SCHRIJFSTIJL.md §6). De volgorde is die van het spel, van laag naar hoog.
 */

export const standings = ['hated', 'hostile', 'unfriendly', 'neutral', 'friendly', 'honored', 'revered', 'exalted'] as const;
export type Standing = (typeof standings)[number];

export const standingNames: Record<Standing, string> = {
  hated: 'Hated',
  hostile: 'Hostile',
  unfriendly: 'Unfriendly',
  neutral: 'Neutral',
  friendly: 'Friendly',
  honored: 'Honored',
  revered: 'Revered',
  exalted: 'Exalted',
};

/** Voor wie een factie is: één factie van het spel of allebei. */
export const reputationSides = ['alliance', 'horde', 'both'] as const;
export type ReputationSide = (typeof reputationSides)[number];
