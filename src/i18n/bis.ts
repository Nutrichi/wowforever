/*
 * De teksten van de BiS-pagina's, in zes talen (PROJECT_SPEC.md §8).
 *
 * Gestructureerd vertaald (Nutri, 14 september 2026): interface, slots, rollen,
 * fasen en edelsteenkleuren staan hier; vaste zinsdelen in de bronteksten in
 * bis-sources.ts; de notities in bis-notes.ts. Namen uit het spel (items,
 * bazen, zones, enchants, gems, classes, specs, tradeskills) blijven Engels.
 *
 * Geen gedachtestreepjes, in geen enkele taal.
 */

import { defaultLocale, type Locale } from './ui';

const ui = {
  en: {
    crumb: 'BiS',
    hubTitle: 'Best in slot for {era}',
    foreverMetaTitle: 'WoW Forever BiS lists: level 30 beta best in slot per class and spec',
    live: '{phase} live',
    count: '{n} lists · updated {date}',
    phases: 'Phases',
    roles: 'Roles',
    allRoles: 'All roles',
    preraid: 'Pre-raid',
    betaPhase: 'Beta',
    betaH1: 'WoW Forever beta: best in slot at level 30',
    betaMeta: 'WoW Forever beta BiS: level 30 best in slot per class and spec',
    betaDesc: 'Best in slot for the WoW Forever beta at level 30: {n} lists for every class and spec, with Alliance and Horde items, sources and enchants.',
    betaDetailDesc: '{name} best in slot for the WoW Forever beta at level 30: every gear slot with three options and their source, for the Alliance and the Horde, plus enchants.',
    faction: 'Faction',
    phase: 'Phase {n}',
    slots: '{n} slots',
    detailTitle: '{name} best in slot',
    metaTitle: '{name} BiS, {era} {phase}',
    detailDescription: '{name} best in slot for {era}, {phase}: every gear slot with its source, plus enchants and gems.',
    hubDescription: 'Best-in-slot lists for {era}: {n} lists for every class and spec, per phase, with sources, enchants and gems.',
    foreverDescription: 'Best-in-slot lists for the WoW Forever beta at level 30, for every class and spec, with Alliance and Horde items. Lists for every WoW Classic expansion are ready too.',
    hardcoreDescription: 'Hardcore has no separate best-in-slot lists yet. The Classic Era lists cover the same gear.',
    gear: 'Gear',
    slot: 'Slot',
    item: 'Item',
    source: 'Source',
    enchants: 'Enchants',
    enchant: 'Enchant',
    gems: 'Gems',
    socket: 'Socket',
    gem: 'Gem',
    notes: 'Notes',
    draft: 'Draft',
    draftNote: 'Not yet checked by hand.',
    samePhases: 'This spec in other phases',
    otherSpecs: 'Other {class} specs in this phase',
    wowhead: '{item} on Wowhead',
    noMatch: 'No lists for this role in this phase.',
    moreOptions: 'Show {n} more options',
    rank: 'Option {n}',
    noItem: 'No single best item',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raids',
    dungeonsLabel: 'Dungeons',
    extraLabel: 'Also in this phase',
    preraidGear: 'Gear comes from',
    noRaids: 'No raid opens in this phase',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase}: best in slot',
    preraidH1: '{era}: pre-raid best in slot',
    phaseMetaWithRaids: '{raids} BiS lists: {era} {phase} best in slot',
    phaseMetaNoRaids: '{era} {phase} BiS lists: best in slot per class and spec',
    preraidMeta: '{era} pre-raid BiS: best in slot before the first raid',
    phaseDescWithRaids: 'Best in slot for {era} {phase} ({raids}): {n} lists for every class and spec, with sources, enchants and gems.',
    phaseDescNoRaids: 'Best in slot for {era} {phase}: {n} lists for every class and spec, with sources, enchants and gems.',
    preraidDesc: 'Pre-raid best in slot for {era}: {n} lists for every class and spec, and the dungeons the gear comes from.',
    otherPhases: 'Other phases',
    allLists: 'All {era} lists',
    listCount: '{n} lists',

  },
  nl: {
    crumb: 'BiS',
    hubTitle: 'Best in slot voor {era}',
    foreverMetaTitle: 'WoW Forever BiS-lijsten: best in slot voor de beta op level 30 per class en spec',
    live: '{phase} live',
    count: '{n} lijsten · bijgewerkt op {date}',
    phases: 'Fasen',
    roles: 'Rollen',
    allRoles: 'Alle rollen',
    preraid: 'Pre-raid',
    betaPhase: 'Beta',
    betaH1: 'WoW Forever-beta: best in slot op level 30',
    betaMeta: 'WoW Forever-beta BiS: best in slot op level 30 per class en spec',
    betaDesc: 'Best in slot voor de beta van WoW Forever op level 30: {n} lijsten voor elke class en spec, met items voor de Alliance en de Horde, bronnen en enchants.',
    betaDetailDesc: '{name} best in slot voor de beta van WoW Forever op level 30: elk slot met drie opties en hun bron, voor de Alliance en de Horde, plus enchants.',
    faction: 'Kant',
    phase: 'Fase {n}',
    slots: '{n} slots',
    detailTitle: 'Best in slot voor {name}',
    metaTitle: 'BiS voor {name}, {era} {phase}',
    detailDescription: 'Best in slot voor {name} in {era}, {phase}: elk gearslot met zijn bron, plus enchants en gems.',
    hubDescription: 'Best-in-slotlijsten voor {era}: {n} lijsten voor elke class en spec, per fase, met bronnen, enchants en gems.',
    foreverDescription: 'Best-in-slotlijsten voor de beta van WoW Forever op level 30, voor elke class en spec, met items voor de Alliance en de Horde. Ook voor elke uitbreiding van WoW Classic staan de lijsten klaar.',
    hardcoreDescription: 'Hardcore heeft nog geen eigen best-in-slotlijsten. De lijsten van Classic Era dekken dezelfde gear.',
    gear: 'Gear',
    slot: 'Slot',
    item: 'Item',
    source: 'Bron',
    enchants: 'Enchants',
    enchant: 'Enchant',
    gems: 'Gems',
    socket: 'Socket',
    gem: 'Gem',
    notes: 'Notities',
    draft: 'Concept',
    draftNote: 'Nog niet met de hand nagekeken.',
    samePhases: 'Deze spec in andere fasen',
    otherSpecs: 'Andere specs van {class} in deze fase',
    wowhead: '{item} op Wowhead',
    noMatch: 'Geen lijsten voor deze rol in deze fase.',
    moreOptions: 'Toon nog {n} opties',
    rank: 'Optie {n}',
    noItem: 'Geen vast beste item',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raids',
    dungeonsLabel: 'Dungeons',
    extraLabel: 'Ook in deze fase',
    preraidGear: 'Uitrusting komt uit',
    noRaids: 'In deze fase gaat er geen raid open',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase}: best in slot',
    preraidH1: '{era}: best in slot voor de eerste raid',
    phaseMetaWithRaids: 'BiS-lijsten voor {raids}: {era} {phase} best in slot',
    phaseMetaNoRaids: 'BiS-lijsten voor {era} {phase}: best in slot per class en spec',
    preraidMeta: 'Pre-raid BiS voor {era}: best in slot voor de eerste raid',
    phaseDescWithRaids: 'Best in slot voor {era} {phase} ({raids}): {n} lijsten voor elke class en spec, met bronnen, enchants en gems.',
    phaseDescNoRaids: 'Best in slot voor {era} {phase}: {n} lijsten voor elke class en spec, met bronnen, enchants en gems.',
    preraidDesc: 'Pre-raid best in slot voor {era}: {n} lijsten voor elke class en spec, en de dungeons waar de uitrusting vandaan komt.',
    otherPhases: 'Andere fasen',
    allLists: 'Alle lijsten van {era}',
    listCount: '{n} lijsten',

  },
  fr: {
    crumb: 'BiS',
    hubTitle: 'Best in slot pour {era}',
    foreverMetaTitle: 'Listes BiS WoW Forever : best in slot de la bêta niveau 30 par classe et spé',
    live: '{phase} en cours',
    count: '{n} listes · mises à jour le {date}',
    phases: 'Phases',
    roles: 'Rôles',
    allRoles: 'Tous les rôles',
    preraid: 'Pré-raid',
    betaPhase: 'Beta',
    betaH1: 'Bêta de WoW Forever : best in slot au niveau 30',
    betaMeta: 'BiS de la bêta WoW Forever : best in slot niveau 30 par classe et spé',
    betaDesc: 'Best in slot pour la bêta de WoW Forever au niveau 30 : {n} listes pour chaque classe et spé, avec les objets de l’Alliance et de la Horde, les sources et les enchantements.',
    betaDetailDesc: '{name} best in slot pour la bêta de WoW Forever au niveau 30 : chaque emplacement avec trois options et leur source, pour l’Alliance et la Horde, plus les enchantements.',
    faction: 'Faction',
    phase: 'Phase {n}',
    slots: '{n} emplacements',
    detailTitle: 'Best in slot pour {name}',
    metaTitle: 'BiS pour {name}, {era} {phase}',
    detailDescription: 'Best in slot pour {name} dans {era}, {phase} : chaque emplacement avec sa source, plus enchantements et gemmes.',
    hubDescription: 'Listes best-in-slot pour {era} : {n} listes pour chaque classe et spécialisation, par phase, avec sources, enchantements et gemmes.',
    foreverDescription: 'Listes best-in-slot pour la bêta de WoW Forever au niveau 30, pour chaque classe et spé, avec les objets de l’Alliance et de la Horde. Les listes de chaque extension de WoW Classic sont prêtes aussi.',
    hardcoreDescription: 'Hardcore n’a pas encore de listes best-in-slot propres. Les listes de Classic Era couvrent le même équipement.',
    gear: 'Équipement',
    slot: 'Emplacement',
    item: 'Objet',
    source: 'Source',
    enchants: 'Enchantements',
    enchant: 'Enchantement',
    gems: 'Gemmes',
    socket: 'Châsse',
    gem: 'Gemme',
    notes: 'Notes',
    draft: 'Brouillon',
    draftNote: 'Pas encore vérifiée à la main.',
    samePhases: 'Cette spécialisation dans les autres phases',
    otherSpecs: 'Autres spécialisations de {class} dans cette phase',
    wowhead: '{item} sur Wowhead',
    noMatch: 'Aucune liste pour ce rôle dans cette phase.',
    moreOptions: 'Afficher {n} autres options',
    rank: 'Option {n}',
    noItem: 'Pas d’objet unique recommandé',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raids',
    dungeonsLabel: 'Donjons',
    extraLabel: 'Aussi dans cette phase',
    preraidGear: 'L’équipement vient de',
    noRaids: 'Aucun raid n’ouvre dans cette phase',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase} : best in slot',
    preraidH1: '{era} : best in slot avant le premier raid',
    phaseMetaWithRaids: 'Listes BiS pour {raids} : {era} {phase} best in slot',
    phaseMetaNoRaids: 'Listes BiS {era} {phase} : best in slot par classe et spé',
    preraidMeta: 'BiS pré-raid {era} : best in slot avant le premier raid',
    phaseDescWithRaids: 'Best in slot pour {era} {phase} ({raids}) : {n} listes pour chaque classe et spé, avec les sources, les enchantements et les gemmes.',
    phaseDescNoRaids: 'Best in slot pour {era} {phase} : {n} listes pour chaque classe et spé, avec les sources, les enchantements et les gemmes.',
    preraidDesc: 'Best in slot pré-raid pour {era} : {n} listes pour chaque classe et spé, et les donjons d’où vient l’équipement.',
    otherPhases: 'Autres phases',
    allLists: 'Toutes les listes {era}',
    listCount: '{n} listes',

  },
  es: {
    crumb: 'BiS',
    hubTitle: 'Best in slot para {era}',
    foreverMetaTitle: 'Listas BiS de WoW Forever: best in slot de la beta a nivel 30 por clase y spec',
    live: '{phase} activa',
    count: '{n} listas · actualizadas el {date}',
    phases: 'Fases',
    roles: 'Roles',
    allRoles: 'Todos los roles',
    preraid: 'Pre-raid',
    betaPhase: 'Beta',
    betaH1: 'Beta de WoW Forever: best in slot a nivel 30',
    betaMeta: 'BiS de la beta de WoW Forever: best in slot a nivel 30 por clase y spec',
    betaDesc: 'Best in slot para la beta de WoW Forever a nivel 30: {n} listas para cada clase y spec, con objetos de la Alliance y la Horde, procedencias y encantamientos.',
    betaDetailDesc: '{name} best in slot para la beta de WoW Forever a nivel 30: cada ranura con tres opciones y su procedencia, para la Alliance y la Horde, más encantamientos.',
    faction: 'Facción',
    phase: 'Fase {n}',
    slots: '{n} ranuras',
    detailTitle: 'Best in slot para {name}',
    metaTitle: 'BiS para {name}, {era} {phase}',
    detailDescription: 'Best in slot para {name} en {era}, {phase}: cada ranura de equipo con su procedencia, además de encantamientos y gemas.',
    hubDescription: 'Listas best-in-slot para {era}: {n} listas para cada clase y especialización, por fase, con procedencias, encantamientos y gemas.',
    foreverDescription: 'Listas best-in-slot para la beta de WoW Forever a nivel 30, para cada clase y spec, con objetos de la Alliance y la Horde. Las listas de cada expansión de WoW Classic también están listas.',
    hardcoreDescription: 'Hardcore todavía no tiene listas best-in-slot propias. Las listas de Classic Era cubren el mismo equipo.',
    gear: 'Equipo',
    slot: 'Ranura',
    item: 'Objeto',
    source: 'Fuente',
    enchants: 'Encantamientos',
    enchant: 'Encantamiento',
    gems: 'Gemas',
    socket: 'Ranura de gema',
    gem: 'Gema',
    notes: 'Notas',
    draft: 'Borrador',
    draftNote: 'Aún no revisada a mano.',
    samePhases: 'Esta especialización en otras fases',
    otherSpecs: 'Otras especializaciones de {class} en esta fase',
    wowhead: '{item} en Wowhead',
    noMatch: 'No hay listas para este rol en esta fase.',
    moreOptions: 'Mostrar {n} opciones más',
    rank: 'Opción {n}',
    noItem: 'Ningún objeto único recomendado',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raids',
    dungeonsLabel: 'Mazmorras',
    extraLabel: 'También en esta fase',
    preraidGear: 'El equipo viene de',
    noRaids: 'En esta fase no abre ninguna raid',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase}: best in slot',
    preraidH1: '{era}: best in slot antes de la primera raid',
    phaseMetaWithRaids: 'Listas BiS de {raids}: {era} {phase} best in slot',
    phaseMetaNoRaids: 'Listas BiS de {era} {phase}: best in slot por clase y spec',
    preraidMeta: 'BiS pre-raid de {era}: best in slot antes de la primera raid',
    phaseDescWithRaids: 'Best in slot para {era} {phase} ({raids}): {n} listas para cada clase y spec, con fuentes, encantamientos y gemas.',
    phaseDescNoRaids: 'Best in slot para {era} {phase}: {n} listas para cada clase y spec, con fuentes, encantamientos y gemas.',
    preraidDesc: 'Best in slot pre-raid para {era}: {n} listas para cada clase y spec, y las mazmorras de donde viene el equipo.',
    otherPhases: 'Otras fases',
    allLists: 'Todas las listas de {era}',
    listCount: '{n} listas',

  },
  it: {
    crumb: 'BiS',
    hubTitle: 'Best in slot per {era}',
    foreverMetaTitle: 'Liste BiS di WoW Forever: best in slot della beta al livello 30 per classe e spec',
    live: '{phase} in corso',
    count: '{n} liste · aggiornate il {date}',
    phases: 'Fasi',
    roles: 'Ruoli',
    allRoles: 'Tutti i ruoli',
    preraid: 'Pre-raid',
    betaPhase: 'Beta',
    betaH1: 'Beta di WoW Forever: best in slot al livello 30',
    betaMeta: 'BiS della beta di WoW Forever: best in slot al livello 30 per classe e spec',
    betaDesc: 'Best in slot per la beta di WoW Forever al livello 30: {n} liste per ogni classe e spec, con gli oggetti dell’Alliance e dell’Horde, le provenienze e gli incantamenti.',
    betaDetailDesc: '{name} best in slot per la beta di WoW Forever al livello 30: ogni slot con tre opzioni e la loro provenienza, per l’Alliance e l’Horde, più gli incantamenti.',
    faction: 'Fazione',
    phase: 'Fase {n}',
    slots: '{n} slot',
    detailTitle: 'Best in slot per {name}',
    metaTitle: 'BiS per {name}, {era} {phase}',
    detailDescription: 'Best in slot per {name} in {era}, {phase}: ogni slot dell’equipaggiamento con la sua provenienza, più incantamenti e gemme.',
    hubDescription: 'Liste best-in-slot per {era}: {n} liste per ogni classe e specializzazione, per fase, con provenienze, incantamenti e gemme.',
    foreverDescription: 'Liste best-in-slot per la beta di WoW Forever al livello 30, per ogni classe e spec, con gli oggetti dell’Alliance e dell’Horde. Anche le liste per ogni espansione di WoW Classic sono pronte.',
    hardcoreDescription: 'Hardcore non ha ancora liste best-in-slot proprie. Le liste di Classic Era coprono lo stesso equipaggiamento.',
    gear: 'Equipaggiamento',
    slot: 'Slot',
    item: 'Oggetto',
    source: 'Fonte',
    enchants: 'Incantamenti',
    enchant: 'Incantamento',
    gems: 'Gemme',
    socket: 'Incastonatura',
    gem: 'Gemma',
    notes: 'Note',
    draft: 'Bozza',
    draftNote: 'Non ancora controllata a mano.',
    samePhases: 'Questa specializzazione nelle altre fasi',
    otherSpecs: 'Altre specializzazioni di {class} in questa fase',
    wowhead: '{item} su Wowhead',
    noMatch: 'Nessuna lista per questo ruolo in questa fase.',
    moreOptions: 'Mostra altre {n} opzioni',
    rank: 'Opzione {n}',
    noItem: 'Nessun oggetto unico consigliato',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raid',
    dungeonsLabel: 'Dungeon',
    extraLabel: 'Anche in questa fase',
    preraidGear: 'L\'equipaggiamento viene da',
    noRaids: 'In questa fase non apre nessuna raid',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase}: best in slot',
    preraidH1: '{era}: best in slot prima della prima raid',
    phaseMetaWithRaids: 'Liste BiS per {raids}: {era} {phase} best in slot',
    phaseMetaNoRaids: 'Liste BiS {era} {phase}: best in slot per classe e spec',
    preraidMeta: 'BiS pre-raid {era}: best in slot prima della prima raid',
    phaseDescWithRaids: 'Best in slot per {era} {phase} ({raids}): {n} liste per ogni classe e spec, con fonti, incantesimi e gemme.',
    phaseDescNoRaids: 'Best in slot per {era} {phase}: {n} liste per ogni classe e spec, con fonti, incantesimi e gemme.',
    preraidDesc: 'Best in slot pre-raid per {era}: {n} liste per ogni classe e spec, e i dungeon da cui viene l\'equipaggiamento.',
    otherPhases: 'Altre fasi',
    allLists: 'Tutte le liste {era}',
    listCount: '{n} liste',

  },
  de: {
    crumb: 'BiS',
    hubTitle: 'Best in Slot für {era}',
    foreverMetaTitle: 'WoW Forever BiS-Listen: Best in Slot der Beta auf Level 30 pro Klasse und Spec',
    live: '{phase} live',
    count: '{n} Listen · aktualisiert am {date}',
    phases: 'Phasen',
    roles: 'Rollen',
    allRoles: 'Alle Rollen',
    preraid: 'Pre-Raid',
    betaPhase: 'Beta',
    betaH1: 'Beta von WoW Forever: Best in Slot auf Level 30',
    betaMeta: 'BiS der Beta von WoW Forever: Best in Slot auf Level 30 pro Klasse und Spec',
    betaDesc: 'Best in Slot für die Beta von WoW Forever auf Level 30: {n} Listen für jede Klasse und Spec, mit Gegenständen für die Alliance und die Horde, Quellen und Verzauberungen.',
    betaDetailDesc: '{name} Best in Slot für die Beta von WoW Forever auf Level 30: jeder Platz mit drei Optionen und ihrer Quelle, für die Alliance und die Horde, plus Verzauberungen.',
    faction: 'Fraktion',
    phase: 'Phase {n}',
    slots: '{n} Slots',
    detailTitle: 'Best in Slot für {name}',
    metaTitle: 'BiS für {name}, {era} {phase}',
    detailDescription: 'Best in Slot für {name} in {era}, {phase}: jeder Ausrüstungsslot mit Quelle, dazu Verzauberungen und Edelsteine.',
    hubDescription: 'Best-in-Slot-Listen für {era}: {n} Listen für jede Klasse und Spezialisierung, pro Phase, mit Quellen, Verzauberungen und Edelsteinen.',
    foreverDescription: 'Best-in-Slot-Listen für die Beta von WoW Forever auf Level 30, für jede Klasse und Spec, mit Gegenständen für die Alliance und die Horde. Auch für jede Erweiterung von WoW Classic sind die Listen fertig.',
    hardcoreDescription: 'Hardcore hat noch keine eigenen Best-in-Slot-Listen. Die Listen von Classic Era decken dieselbe Ausrüstung ab.',
    gear: 'Ausrüstung',
    slot: 'Slot',
    item: 'Gegenstand',
    source: 'Quelle',
    enchants: 'Verzauberungen',
    enchant: 'Verzauberung',
    gems: 'Edelsteine',
    socket: 'Sockel',
    gem: 'Edelstein',
    notes: 'Notizen',
    draft: 'Entwurf',
    draftNote: 'Noch nicht von Hand geprüft.',
    samePhases: 'Diese Spezialisierung in anderen Phasen',
    otherSpecs: 'Andere Spezialisierungen von {class} in dieser Phase',
    wowhead: '{item} auf Wowhead',
    noMatch: 'Keine Listen für diese Rolle in dieser Phase.',
    moreOptions: '{n} weitere Optionen zeigen',
    rank: 'Option {n}',
    noItem: 'Kein einzelner bester Gegenstand',

    /* De inhoud van een fase (config/bis.ts, phaseContent). */
    raidsLabel: 'Raids',
    dungeonsLabel: 'Dungeons',
    extraLabel: 'Auch in dieser Phase',
    preraidGear: 'Die Ausrüstung kommt aus',
    noRaids: 'In dieser Phase öffnet kein Raid',

    /* De eigen pagina van elke fase (§11, vindbaarheid). */
    phaseH1: '{era} {phase}: Best in Slot',
    preraidH1: '{era}: Best in Slot vor dem ersten Raid',
    phaseMetaWithRaids: 'BiS-Listen für {raids}: {era} {phase} Best in Slot',
    phaseMetaNoRaids: 'BiS-Listen {era} {phase}: Best in Slot pro Klasse und Spec',
    preraidMeta: 'Pre-Raid-BiS für {era}: Best in Slot vor dem ersten Raid',
    phaseDescWithRaids: 'Best in Slot für {era} {phase} ({raids}): {n} Listen für jede Klasse und Spec, mit Quellen, Verzauberungen und Edelsteinen.',
    phaseDescNoRaids: 'Best in Slot für {era} {phase}: {n} Listen für jede Klasse und Spec, mit Quellen, Verzauberungen und Edelsteinen.',
    preraidDesc: 'Pre-Raid-Best-in-Slot für {era}: {n} Listen für jede Klasse und Spec, und die Dungeons, aus denen die Ausrüstung kommt.',
    otherPhases: 'Andere Phasen',
    allLists: 'Alle {era}-Listen',
    listCount: '{n} Listen',

  },
} as const;

export type BisUiKey = keyof (typeof ui)['en'];

/** Vertaalt een BiS-tekst en vult {sleutels} in. Ontbreekt iets, dan Engels. */
export function bisT(locale: Locale) {
  return (key: BisUiKey, vars: Record<string, string | number> = {}): string => {
    const table = ui[locale] as Partial<Record<BisUiKey, string>>;
    let text = table[key] ?? ui[defaultLocale][key];
    for (const [name, value] of Object.entries(vars)) text = text.split(`{${name}}`).join(String(value));
    return text;
  };
}

type Words = Record<Locale, string>;

const slotLabels: Record<string, Words> = {
  head: { en: 'Head', nl: 'Hoofd', fr: 'Tête', es: 'Cabeza', it: 'Testa', de: 'Kopf' },
  neck: { en: 'Neck', nl: 'Nek', fr: 'Cou', es: 'Cuello', it: 'Collo', de: 'Hals' },
  shoulders: { en: 'Shoulders', nl: 'Schouders', fr: 'Épaules', es: 'Hombros', it: 'Spalle', de: 'Schultern' },
  back: { en: 'Back', nl: 'Rug', fr: 'Dos', es: 'Espalda', it: 'Schiena', de: 'Rücken' },
  chest: { en: 'Chest', nl: 'Borst', fr: 'Torse', es: 'Pecho', it: 'Torso', de: 'Brust' },
  wrists: { en: 'Wrists', nl: 'Polsen', fr: 'Poignets', es: 'Muñecas', it: 'Polsi', de: 'Handgelenke' },
  hands: { en: 'Hands', nl: 'Handen', fr: 'Mains', es: 'Manos', it: 'Mani', de: 'Hände' },
  waist: { en: 'Waist', nl: 'Taille', fr: 'Taille', es: 'Cintura', it: 'Vita', de: 'Taille' },
  legs: { en: 'Legs', nl: 'Benen', fr: 'Jambes', es: 'Piernas', it: 'Gambe', de: 'Beine' },
  feet: { en: 'Feet', nl: 'Voeten', fr: 'Pieds', es: 'Pies', it: 'Piedi', de: 'Füße' },
  finger: { en: 'Ring', nl: 'Ring', fr: 'Anneau', es: 'Anillo', it: 'Anello', de: 'Ring' },
  rings: { en: 'Rings', nl: 'Ringen', fr: 'Anneaux', es: 'Anillos', it: 'Anelli', de: 'Ringe' },
  ring1: { en: 'Ring 1', nl: 'Ring 1', fr: 'Anneau 1', es: 'Anillo 1', it: 'Anello 1', de: 'Ring 1' },
  ring2: { en: 'Ring 2', nl: 'Ring 2', fr: 'Anneau 2', es: 'Anillo 2', it: 'Anello 2', de: 'Ring 2' },
  trinket1: { en: 'Trinket 1', nl: 'Trinket 1', fr: 'Bijou 1', es: 'Abalorio 1', it: 'Monile 1', de: 'Schmuckstück 1' },
  trinket2: { en: 'Trinket 2', nl: 'Trinket 2', fr: 'Bijou 2', es: 'Abalorio 2', it: 'Monile 2', de: 'Schmuckstück 2' },
  trinket3: { en: 'Trinket 3', nl: 'Trinket 3', fr: 'Bijou 3', es: 'Abalorio 3', it: 'Monile 3', de: 'Schmuckstück 3' },
  trinkets: { en: 'Trinkets', nl: 'Trinkets', fr: 'Bijoux', es: 'Abalorios', it: 'Monili', de: 'Schmuckstücke' },
  mainHand: { en: 'Main hand', nl: 'Hoofdhand', fr: 'Main droite', es: 'Mano derecha', it: 'Mano primaria', de: 'Waffenhand' },
  offHand: { en: 'Off hand', nl: 'Tweede hand', fr: 'Main gauche', es: 'Mano izquierda', it: 'Mano secondaria', de: 'Schildhand' },
  mainOffHand: { en: 'Main hand / off hand', nl: 'Hoofdhand / tweede hand', fr: 'Main droite / main gauche', es: 'Mano derecha / mano izquierda', it: 'Mano primaria / secondaria', de: 'Waffenhand / Schildhand' },
  oneHand: { en: 'One-hand', nl: 'Eenhandig', fr: 'Une main', es: 'Una mano', it: 'Una mano', de: 'Einhändig' },
  twoHand: { en: 'Two-hand', nl: 'Tweehandig', fr: 'Deux mains', es: 'Dos manos', it: 'Due mani', de: 'Zweihändig' },
  weapon: { en: 'Weapon', nl: 'Wapen', fr: 'Arme', es: 'Arma', it: 'Arma', de: 'Waffe' },
  weapons: { en: 'Weapons', nl: 'Wapens', fr: 'Armes', es: 'Armas', it: 'Armi', de: 'Waffen' },
  ranged: { en: 'Ranged', nl: 'Afstandswapen', fr: 'Arme à distance', es: 'A distancia', it: 'A distanza', de: 'Distanzwaffe' },
  thrown: { en: 'Thrown', nl: 'Werpwapen', fr: 'Arme de jet', es: 'Arrojadiza', it: 'Da lancio', de: 'Wurfwaffe' },
  wand: { en: 'Wand', nl: 'Toverstaf', fr: 'Baguette', es: 'Varita', it: 'Bacchetta', de: 'Zauberstab' },
  shield: { en: 'Shield', nl: 'Schild', fr: 'Bouclier', es: 'Escudo', it: 'Scudo', de: 'Schild' },
  relic: { en: 'Relic', nl: 'Relikwie', fr: 'Relique', es: 'Reliquia', it: 'Reliquia', de: 'Relikt' },
  idol: { en: 'Idol', nl: 'Idol', fr: 'Idol', es: 'Idol', it: 'Idol', de: 'Idol' },
  libram: { en: 'Libram', nl: 'Libram', fr: 'Libram', es: 'Libram', it: 'Libram', de: 'Libram' },
  totem: { en: 'Totem', nl: 'Totem', fr: 'Totem', es: 'Totem', it: 'Totem', de: 'Totem' },
  sigil: { en: 'Sigil', nl: 'Sigil', fr: 'Sigil', es: 'Sigil', it: 'Sigil', de: 'Sigil' },
  quiver: { en: 'Quiver', nl: 'Pijlkoker', fr: 'Carquois', es: 'Carcaj', it: 'Faretra', de: 'Köcher' },
  arrows: { en: 'Arrows', nl: 'Pijlen', fr: 'Flèches', es: 'Flechas', it: 'Frecce', de: 'Pfeile' },
  daggers: { en: 'Daggers', nl: 'Dolken', fr: 'Dagues', es: 'Dagas', it: 'Pugnali', de: 'Dolche' },
  swords: { en: 'Swords', nl: 'Zwaarden', fr: 'Épées', es: 'Espadas', it: 'Spade', de: 'Schwerter' },
  staff: { en: 'Staff', nl: 'Staf', fr: 'Bâton', es: 'Bastón', it: 'Bastone', de: 'Stab' },
};

const meleeWord: Words = { en: 'melee', nl: 'melee', fr: 'mêlée', es: 'cuerpo a cuerpo', it: 'mischia', de: 'Nahkampf' };

const qualifiers: Record<string, Words> = {
  'enchanting-only': { en: 'Enchanting only', nl: 'alleen Enchanting', fr: 'Enchanting uniquement', es: 'solo Enchanting', it: 'solo Enchanting', de: 'nur Enchanting' },
};

/** Het label van een slot, met toevoegingen. */
/**
 * De namen van de vakjes van het character pane, in zes talen.
 *
 * Voor de iOS-app, die het pane natekent en de namen niet nog eens mag
 * overtypen (lib/api-bis.ts, PaneSlot). `shirt` en `tabard` staan er niet in:
 * die vakjes blijven altijd leeg in een BiS-lijst, dus de app tekent ze zonder
 * naam.
 */
export function paneSlotWords(): Record<string, Record<string, string>> {
  const keys = [
    'head', 'neck', 'shoulders', 'back', 'chest', 'wrists',
    'hands', 'waist', 'legs', 'feet', 'ring1', 'ring2',
    'trinket1', 'trinket2', 'mainHand', 'offHand', 'ranged',
  ];
  return Object.fromEntries(keys.map((key) => [key, { ...slotLabels[key] }]));
}

export function slotLabel(parts: { key: string | null; raw: string; qualifier?: string; melee: boolean }, locale: Locale): string {
  let label = parts.key && slotLabels[parts.key] ? slotLabels[parts.key][locale] : parts.raw;
  const extra: string[] = [];
  if (parts.melee) extra.push(meleeWord[locale]);
  if (parts.qualifier) extra.push(qualifiers[parts.qualifier.toLowerCase()]?.[locale] ?? parts.qualifier);
  if (parts.key && extra.length) label = `${label} (${extra.join(', ')})`;
  return label;
}

const roleWords: Record<string, Words> = {
  tank: { en: 'Tank', nl: 'Tank', fr: 'Tank', es: 'Tanque', it: 'Tank', de: 'Tank' },
  healer: { en: 'Healer', nl: 'Healer', fr: 'Soigneur', es: 'Sanador', it: 'Guaritore', de: 'Heiler' },
  melee: { en: 'Melee DPS', nl: 'Melee-DPS', fr: 'DPS mêlée', es: 'DPS cuerpo a cuerpo', it: 'DPS in mischia', de: 'Nahkampf-DPS' },
  ranged: { en: 'Ranged DPS', nl: 'Ranged-DPS', fr: 'DPS distance', es: 'DPS a distancia', it: 'DPS a distanza', de: 'Fernkampf-DPS' },
  dps: { en: 'DPS', nl: 'DPS', fr: 'DPS', es: 'DPS', it: 'DPS', de: 'DPS' },
};

export function roleLabel(key: string, locale: Locale): string {
  return roleWords[key]?.[locale] ?? key;
}

const gemColors: Record<string, Words> = {
  meta: { en: 'Meta', nl: 'Meta', fr: 'Méta', es: 'Meta', it: 'Meta', de: 'Meta' },
  red: { en: 'Red', nl: 'Rood', fr: 'Rouge', es: 'Rojo', it: 'Rosso', de: 'Rot' },
  blue: { en: 'Blue', nl: 'Blauw', fr: 'Bleu', es: 'Azul', it: 'Blu', de: 'Blau' },
  yellow: { en: 'Yellow', nl: 'Geel', fr: 'Jaune', es: 'Amarillo', it: 'Giallo', de: 'Gelb' },
  'orange/yellow': { en: 'Orange or yellow', nl: 'Oranje of geel', fr: 'Orange ou jaune', es: 'Naranja o amarillo', it: 'Arancione o giallo', de: 'Orange oder Gelb' },
  'jewelcrafting only': { en: 'Jewelcrafting only', nl: 'Alleen Jewelcrafting', fr: 'Jewelcrafting uniquement', es: 'Solo Jewelcrafting', it: 'Solo Jewelcrafting', de: 'Nur Jewelcrafting' },
};

export function gemColorLabel(color: string, locale: Locale): string {
  return gemColors[color.toLowerCase()]?.[locale] ?? color;
}

/** "Pre-raid" of "Fase 3" in de taal van de pagina. */
export function phaseLabel(phase: string, locale: Locale): string {
  const t = bisT(locale);
  if (phase === 'preraid') return t('preraid');
  if (phase === 'beta') return t('betaPhase');
  return t('phase', { n: phase.replace(/^p/, '') });
}
