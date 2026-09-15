/*
 * Wat over tradeskills in WoW Forever bekend is, in zes talen: de perks per
 * tradeskill en de Legacy-perks voor tradeskills.
 *
 * Uit beelden van BlizzCon 2026. De exacte getallen liggen nog niet vast; bijwerken
 * zodra de beta ze bevestigt. Namen van perks blijven Engels.
 */

import type { Locale } from './ui';

type Words = Record<Locale, string>;

/** De perks van elke primaire tradeskill die op BlizzCon getoond zijn. */
export const foreverPerks: Record<string, Words> = {
  alchemy: {
    en: "Mixology: elixirs and flasks last longer and are stronger. Philosopher's Stone: a trinket that grows with your skill. New recipes.",
    nl: "Mixology: elixirs en flasks duren langer en zijn sterker. Philosopher's Stone: een trinket die meegroeit met je skill. Nieuwe recepten.",
    fr: "Mixology : les élixirs et flacons durent plus longtemps et sont plus puissants. Philosopher's Stone : un bijou qui progresse avec votre skill. Nouvelles recettes.",
    es: "Mixology: los elixires y frascos duran más y son más fuertes. Philosopher's Stone: un abalorio que crece con tu skill. Recetas nuevas.",
    it: "Mixology: elisir e flask durano di più e sono più forti. Philosopher's Stone: un monile che cresce con il tuo skill. Nuove ricette.",
    de: "Mixology: Elixiere und Fläschchen halten länger und wirken stärker. Philosopher's Stone: ein Schmuckstück, das mit deinem Skill wächst. Neue Rezepte.",
  },
  blacksmithing: {
    en: 'Repair All: repair all your equipment at once. Belt buckles that add a socket to waist armor. New recipes.',
    nl: 'Repair All: al je uitrusting in één keer repareren. Belt buckles die een socket toevoegen aan een riem. Nieuwe recepten.',
    fr: 'Repair All : réparer tout votre équipement d’un coup. Des boucles de ceinture qui ajoutent une châsse. Nouvelles recettes.',
    es: 'Repair All: repara todo tu equipo de una vez. Hebillas que añaden una ranura de gema al cinturón. Recetas nuevas.',
    it: 'Repair All: ripara tutto l’equipaggiamento in una volta. Fibbie che aggiungono un’incastonatura alla cintura. Nuove ricette.',
    de: 'Repair All: die ganze Ausrüstung auf einmal reparieren. Gürtelschnallen, die einem Gürtel einen Sockel geben. Neue Rezepte.',
  },
  enchanting: {
    en: 'Ring enchants, transmuting shards to a higher grade, and crafting staves.',
    nl: 'Enchants voor ringen, shards omzetten naar een hogere graad, en staven craften.',
    fr: 'Enchantements d’anneau, transmutation d’éclats vers une qualité supérieure et fabrication de bâtons.',
    es: 'Encantamientos de anillo, transmutar fragmentos a un grado superior y fabricar bastones.',
    it: 'Incantamenti per anelli, trasmutazione dei frammenti a un grado superiore e creazione di bastoni.',
    de: 'Ringverzauberungen, Splitter in eine höhere Stufe umwandeln und Stäbe herstellen.',
  },
  engineering: {
    en: 'Still one of the strongest tradeskills for combat, with more gadgets, bombs and trinkets, and a Goblin or Gnomish specialization.',
    nl: 'Nog altijd een van de sterkste tradeskills voor gevechten, met meer gadgets, bommen en trinkets, en een specialisatie Goblin of Gnomish.',
    fr: 'Toujours l’un des tradeskills les plus forts au combat, avec plus de gadgets, de bombes et de bijoux, et une spécialisation Goblin ou Gnomish.',
    es: 'Sigue siendo uno de los tradeskills más fuertes en combate, con más artilugios, bombas y abalorios, y una especialización Goblin o Gnomish.',
    it: 'Resta una delle tradeskill più forti in combattimento, con più gadget, bombe e monili, e una specializzazione Goblin o Gnomish.',
    de: 'Weiterhin einer der stärksten Tradeskills im Kampf, mit mehr Gadgets, Bomben und Schmuckstücken und einer Spezialisierung Goblin oder Gnomish.',
  },
  herbalism: {
    en: 'Natural Talent: higher resistance to all schools of magic. Better odds on a rare lotus and more herbs per node.',
    nl: 'Natural Talent: meer resistance tegen alle soorten magie. Meer kans op een zeldzame lotus en meer kruiden per node.',
    fr: 'Natural Talent : résistance accrue à toutes les écoles de magie. Plus de chances d’obtenir un lotus rare et plus d’herbes par gisement.',
    es: 'Natural Talent: más resistencia a todas las escuelas de magia. Más probabilidad de un loto raro y más hierbas por nodo.',
    it: 'Natural Talent: più resistenza a tutte le scuole di magia. Più probabilità di un loto raro e più erbe per nodo.',
    de: 'Natural Talent: höhere Resistenz gegen alle Magieschulen. Bessere Chancen auf einen seltenen Lotus und mehr Kräuter pro Vorkommen.',
  },
  leatherworking: {
    en: 'Armor kits for leather and mail, higher mounted speed, and dragonscale and elemental leather sets.',
    nl: 'Armor kits voor leer en mail, hogere snelheid op een mount, en sets van dragonscale en elemental leather.',
    fr: 'Kits d’armure pour le cuir et les mailles, vitesse montée accrue, et ensembles en dragonscale et elemental leather.',
    es: 'Kits de armadura para cuero y malla, más velocidad montado, y conjuntos de dragonscale y elemental leather.',
    it: 'Kit d’armatura per cuoio e maglia, più velocità in sella, e set di dragonscale ed elemental leather.',
    de: 'Rüstungsbausätze für Leder und Kette, höheres Reittempo und Sets aus Dragonscale und Elemental Leather.',
  },
  mining: {
    en: 'Made of Metal: total health +5%. Extra ore from mineral nodes, and rare materials for combat.',
    nl: 'Made of Metal: totale health +5%. Extra erts uit mineraalnodes, en zeldzame materialen voor gevechten.',
    fr: 'Made of Metal : points de vie totaux +5 %. Minerai en plus sur les gisements, et matériaux rares pour le combat.',
    es: 'Made of Metal: salud total +5 %. Mineral extra de los nodos, y materiales raros para el combate.',
    it: 'Made of Metal: salute totale +5%. Minerale in più dai nodi, e materiali rari per il combattimento.',
    de: 'Made of Metal: gesamte Gesundheit +5 %. Zusätzliches Erz aus Vorkommen und seltene Materialien für den Kampf.',
  },
  skinning: {
    en: 'Beasts of the Wild: damage to Beasts and Dragonkin +5%. Better odds on rare hides.',
    nl: 'Beasts of the Wild: schade tegen Beasts en Dragonkin +5%. Meer kans op zeldzame huiden.',
    fr: 'Beasts of the Wild : dégâts contre les Beasts et Dragonkin +5 %. Plus de chances d’obtenir des peaux rares.',
    es: 'Beasts of the Wild: daño contra Beasts y Dragonkin +5 %. Más probabilidad de pieles raras.',
    it: 'Beasts of the Wild: danni contro Beasts e Dragonkin +5%. Più probabilità di pelli rare.',
    de: 'Beasts of the Wild: Schaden gegen Beasts und Dragonkin +5 %. Bessere Chancen auf seltene Häute.',
  },
  tailoring: {
    en: 'Embroidery with bonuses for tailors on cloth gear, extra cloth from humanoids, and new and reworked cloth sets.',
    nl: 'Embroidery met bonussen voor tailors op stoffen gear, extra cloth van humanoids, en nieuwe en herwerkte sets van stof.',
    fr: 'Embroidery avec des bonus réservés aux tailleurs sur l’équipement en tissu, du tissu en plus sur les humanoïdes, et des ensembles en tissu nouveaux et retravaillés.',
    es: 'Embroidery con bonos para sastres en equipo de tela, tela extra de humanoides, y conjuntos de tela nuevos y rehechos.',
    it: 'Embroidery con bonus per i sarti sull’equipaggiamento di stoffa, stoffa in più dagli umanoidi, e set di stoffa nuovi e rifatti.',
    de: 'Embroidery mit Boni für Schneider auf Stoffausrüstung, zusätzlicher Stoff von Humanoiden und neue und überarbeitete Stoffsets.',
  },
};

export type LegacyPerk = { name: string; text: Words };

/** De Legacy-perks in de categorie voor tradeskills. */
export const legacyPerks: LegacyPerk[] = [
  {
    name: 'Working Overtime',
    text: {
      en: '+4% chance per rank to gain skill in any tradeskill.',
      nl: '+4% kans per rank om skill te krijgen in elke tradeskill.',
      fr: '+4 % de chances par rang de gagner du skill dans n’importe quel tradeskill.',
      es: '+4 % de probabilidad por rango de ganar skill en cualquier tradeskill.',
      it: '+4% di probabilità per grado di guadagnare skill in qualsiasi tradeskill.',
      de: '+4 % Chance pro Rang, in jedem Tradeskill Skill zu gewinnen.',
    },
  },
  {
    name: 'Bountiful Harvest',
    text: {
      en: '20% more Scarce materials from Mining, Herbalism and Skinning.',
      nl: '20% meer Scarce-materialen uit Mining, Herbalism en Skinning.',
      fr: '20 % de matériaux Scarce en plus avec Mining, Herbalism et Skinning.',
      es: '20 % más de materiales Scarce con Mining, Herbalism y Skinning.',
      it: '20% di materiali Scarce in più da Mining, Herbalism e Skinning.',
      de: '20 % mehr Scarce-Materialien aus Mining, Herbalism und Skinning.',
    },
  },
  {
    name: 'Master Chef',
    text: {
      en: '10% chance for an extra result from Cooking.',
      nl: '10% kans op een extra resultaat bij Cooking.',
      fr: '10 % de chances d’obtenir un résultat en plus avec Cooking.',
      es: '10 % de probabilidad de un resultado extra con Cooking.',
      it: '10% di probabilità di un risultato in più con Cooking.',
      de: '10 % Chance auf ein zusätzliches Ergebnis beim Cooking.',
    },
  },
  {
    name: 'Performance Bonus',
    text: {
      en: "5% chance for double Merchant's Favor on supply crate turn-ins.",
      nl: "5% kans op dubbele Merchant's Favor bij het inleveren van supply crates.",
      fr: "5 % de chances de doubler le Merchant's Favor en rendant des supply crates.",
      es: "5 % de probabilidad de doble Merchant's Favor al entregar supply crates.",
      it: "5% di probabilità di Merchant's Favor doppio consegnando le supply crate.",
      de: "5 % Chance auf doppelten Merchant's Favor bei der Abgabe von Supply Crates.",
    },
  },
  {
    name: 'Luremaster',
    text: {
      en: '25% chance for an extra fish while a lure is active.',
      nl: '25% kans op een extra vis zolang er een lure actief is.',
      fr: '25 % de chances d’obtenir un poisson en plus quand un leurre est actif.',
      es: '25 % de probabilidad de un pez extra mientras hay un cebo activo.',
      it: '25% di probabilità di un pesce in più mentre un’esca è attiva.',
      de: '25 % Chance auf einen zusätzlichen Fisch, solange ein Köder aktiv ist.',
    },
  },
  {
    name: 'Dedicated Study',
    text: {
      en: 'Once every 23 hours, +1 skill in your lowest tradeskill; with everything at 300, 2 to 4 random Elemental Essences instead.',
      nl: 'Eens per 23 uur +1 skill in je laagste tradeskill; staat alles op 300, dan 2 tot 4 willekeurige Elemental Essences.',
      fr: 'Une fois toutes les 23 heures, +1 skill dans votre tradeskill le plus bas ; si tout est à 300, 2 à 4 Elemental Essences aléatoires à la place.',
      es: 'Una vez cada 23 horas, +1 skill en tu tradeskill más bajo; con todo a 300, de 2 a 4 Elemental Essences al azar.',
      it: 'Una volta ogni 23 ore, +1 skill nella tua tradeskill più bassa; con tutto a 300, da 2 a 4 Elemental Essences casuali.',
      de: 'Einmal alle 23 Stunden +1 Skill im niedrigsten Tradeskill; steht alles auf 300, stattdessen 2 bis 4 zufällige Elemental Essences.',
    },
  },
];
