/*
 * De teksten van REPUTATIONS, in zes talen (PROJECT_SPEC.md §8).
 *
 * REPUTATIONS is alleen voor WoW Forever, met de facties van Classic Era als
 * vertrekpunt (Nutri, 15 september 2026). De gidsen zelf zijn Markdown per
 * taal; hier staat alles eromheen. Namen uit het spel blijven Engels, ook
 * facties en standings (SCHRIJFSTIJL.md §6). Geen gedachtestreepjes.
 */

import { defaultLocale, type Locale } from './ui';

const ui = {
  en: {
    title: 'Reputations in WoW Forever',
    description: 'Reputation guides for WoW Forever: where every faction starts, the fastest way to raise it and the rewards at each standing, based on Classic Era.',
    intro: 'The beta of WoW Forever has shown its first two own factions, the Azeroth Commerce Authority and Durotar Supply and Logistics, and both have a guide here. The other guides start from the factions of Classic Era: where each faction starts, the fastest way to farm reputation and the rewards at each standing. More Forever factions follow as the beta shows them.',
    count: 'Factions: {n} · updated {date}',
    guideTitle: '{faction} reputation guide',
    metaTitle: '{faction} reputation guide for WoW Forever',
    note: 'Based on Classic Era. WoW Forever has not shown this reputation yet, so the numbers and rewards below can still change.',
    noteForever: 'New in WoW Forever. Everything below comes from the beta client and from Wowhead, so the numbers and rewards can still change before launch.',
    groupBoth: 'Both factions',
    groupAlliance: 'Alliance',
    groupHorde: 'Horde',
    range: '{start} to {cap}',
    sideAlliance: 'Alliance',
    sideHorde: 'Horde',
    sideBoth: 'Alliance and Horde',
    method: 'How to farm',
    rewards: 'Rewards',
  },
  nl: {
    title: 'Reputaties in WoW Forever',
    description: 'Reputatiegidsen voor WoW Forever: waar elke factie begint, de snelste manier om reputatie te halen en de beloningen per standing, op basis van Classic Era.',
    intro: 'De beta van WoW Forever toonde de eerste twee eigen facties, de Azeroth Commerce Authority en Durotar Supply and Logistics, en allebei staan ze hier met een gids. De andere gidsen vertrekken van de facties van Classic Era: waar elke factie begint, de snelste manier om reputatie te farmen en de beloningen per standing. Meer Forever-facties volgen zodra de beta ze toont.',
    count: 'Facties: {n} · bijgewerkt op {date}',
    guideTitle: 'Reputatiegids voor {faction}',
    metaTitle: 'Reputatiegids voor {faction} in WoW Forever',
    note: 'Op basis van Classic Era. WoW Forever heeft deze reputatie nog niet getoond, dus de cijfers en beloningen hieronder kunnen nog veranderen.',
    noteForever: 'Nieuw in WoW Forever. Alles hieronder komt uit de betacliënt en van Wowhead, dus de cijfers en beloningen kunnen voor de lancering nog veranderen.',
    groupBoth: 'Beide facties',
    groupAlliance: 'Alliance',
    groupHorde: 'Horde',
    range: '{start} tot {cap}',
    sideAlliance: 'Alliance',
    sideHorde: 'Horde',
    sideBoth: 'Alliance en Horde',
    method: 'Zo farm je',
    rewards: 'Beloningen',
  },
  fr: {
    title: 'Les réputations de WoW Forever',
    description: 'Guides de réputation pour WoW Forever : le niveau de départ de chaque faction, la façon la plus rapide de monter la réputation et les récompenses à chaque niveau, sur la base de Classic Era.',
    intro: 'La bêta de WoW Forever a montré ses deux premières factions propres, l’Azeroth Commerce Authority et Durotar Supply and Logistics, et les deux ont leur guide ici. Les autres guides partent des factions de Classic Era : le niveau de départ de chaque faction, la façon la plus rapide de farmer la réputation et les récompenses à chaque niveau. D’autres factions de Forever suivront dès que la bêta les montrera.',
    count: 'Factions : {n} · mis à jour le {date}',
    guideTitle: 'Guide de réputation {faction}',
    metaTitle: 'Guide de réputation {faction} pour WoW Forever',
    note: 'Basé sur Classic Era. WoW Forever n’a pas encore montré cette réputation : les chiffres et les récompenses ci-dessous peuvent encore changer.',
    noteForever: 'Nouveau dans WoW Forever. Tout ce qui suit vient du client de la bêta et de Wowhead : les chiffres et les récompenses peuvent encore changer avant la sortie.',
    groupBoth: 'Les deux factions',
    groupAlliance: 'Alliance',
    groupHorde: 'Horde',
    range: '{start} à {cap}',
    sideAlliance: 'Alliance',
    sideHorde: 'Horde',
    sideBoth: 'Alliance et Horde',
    method: 'Comment farmer',
    rewards: 'Récompenses',
  },
  es: {
    title: 'Las reputaciones de WoW Forever',
    description: 'Guías de reputación para WoW Forever: dónde empieza cada facción, la forma más rápida de subir la reputación y las recompensas de cada nivel, a partir de Classic Era.',
    intro: 'La beta de WoW Forever ha mostrado sus dos primeras facciones propias, la Azeroth Commerce Authority y Durotar Supply and Logistics, y las dos tienen guía aquí. Las demás guías parten de las facciones de Classic Era: dónde empieza cada facción, la forma más rápida de farmear reputación y las recompensas de cada nivel. Habrá más facciones de Forever en cuanto la beta las muestre.',
    count: 'Facciones: {n} · actualizadas el {date}',
    guideTitle: 'Guía de reputación de {faction}',
    metaTitle: 'Guía de reputación de {faction} para WoW Forever',
    note: 'Basada en Classic Era. WoW Forever aún no ha mostrado esta reputación, así que las cifras y recompensas de abajo todavía pueden cambiar.',
    noteForever: 'Nueva en WoW Forever. Todo lo de abajo viene del cliente de la beta y de Wowhead, así que las cifras y recompensas pueden cambiar antes del lanzamiento.',
    groupBoth: 'Ambas facciones',
    groupAlliance: 'Alianza',
    groupHorde: 'Horda',
    range: 'De {start} a {cap}',
    sideAlliance: 'Alianza',
    sideHorde: 'Horda',
    sideBoth: 'Alianza y Horda',
    method: 'Cómo farmear',
    rewards: 'Recompensas',
  },
  it: {
    title: 'Le reputazioni di WoW Forever',
    description: 'Guide alle reputazioni per WoW Forever: da dove parte ogni fazione, il modo più rapido per salire di reputazione e le ricompense di ogni livello, sulla base di Classic Era.',
    intro: 'La beta di WoW Forever ha mostrato le sue prime due fazioni proprie, l’Azeroth Commerce Authority e Durotar Supply and Logistics, ed entrambe hanno una guida qui. Le altre guide partono dalle fazioni di Classic Era: da dove parte ogni fazione, il modo più rapido per farmare reputazione e le ricompense di ogni livello. Altre fazioni di Forever seguiranno appena la beta le mostrerà.',
    count: 'Fazioni: {n} · aggiornate il {date}',
    guideTitle: 'Guida alla reputazione {faction}',
    metaTitle: 'Guida alla reputazione {faction} per WoW Forever',
    note: 'Basata su Classic Era. WoW Forever non ha ancora mostrato questa reputazione, quindi i numeri e le ricompense qui sotto possono ancora cambiare.',
    noteForever: 'Nuova in WoW Forever. Tutto quello che segue viene dal client della beta e da Wowhead, quindi i numeri e le ricompense possono ancora cambiare prima dell’uscita.',
    groupBoth: 'Entrambe le fazioni',
    groupAlliance: 'Alleanza',
    groupHorde: 'Orda',
    range: 'Da {start} a {cap}',
    sideAlliance: 'Alleanza',
    sideHorde: 'Orda',
    sideBoth: 'Alleanza e Orda',
    method: 'Come farmare',
    rewards: 'Ricompense',
  },
  de: {
    title: 'Ruf in WoW Forever',
    description: 'Rufguides für WoW Forever: wo jede Fraktion beginnt, der schnellste Weg zu mehr Ruf und die Belohnungen auf jeder Stufe, auf Basis von Classic Era.',
    intro: 'Die Beta von WoW Forever hat die ersten beiden eigenen Fraktionen gezeigt, die Azeroth Commerce Authority und Durotar Supply and Logistics, und beide haben hier einen Guide. Die anderen Guides gehen von den Fraktionen aus Classic Era aus: wo jede Fraktion beginnt, der schnellste Weg, Ruf zu farmen, und die Belohnungen auf jeder Stufe. Weitere Forever-Fraktionen folgen, sobald die Beta sie zeigt.',
    count: 'Fraktionen: {n} · aktualisiert am {date}',
    guideTitle: 'Rufguide für {faction}',
    metaTitle: 'Rufguide für {faction} in WoW Forever',
    note: 'Auf Basis von Classic Era. WoW Forever hat diesen Ruf noch nicht gezeigt, die Zahlen und Belohnungen unten können sich also noch ändern.',
    noteForever: 'Neu in WoW Forever. Alles unten stammt aus dem Beta-Client und von Wowhead, die Zahlen und Belohnungen können sich bis zum Launch also noch ändern.',
    groupBoth: 'Beide Fraktionen',
    groupAlliance: 'Allianz',
    groupHorde: 'Horde',
    range: '{start} bis {cap}',
    sideAlliance: 'Allianz',
    sideHorde: 'Horde',
    sideBoth: 'Allianz und Horde',
    method: 'So farmst du',
    rewards: 'Belohnungen',
  },
} as const;

export type RepUiKey = keyof (typeof ui)['en'];

/** Vertaalt een tekst van REPUTATIONS en vult {sleutels} in. Ontbreekt iets, dan Engels. */
export function repT(locale: Locale) {
  return (key: RepUiKey, vars: Record<string, string | number> = {}): string => {
    const table = ui[locale] as Partial<Record<RepUiKey, string>>;
    let text = table[key] ?? ui[defaultLocale][key];
    for (const [name, value] of Object.entries(vars)) text = text.split(`{${name}}`).join(String(value));
    return text;
  };
}
