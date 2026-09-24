/*
 * De racials van elk ras in WoW Forever, in zes talen, vergeleken met Classic.
 *
 * Uit beelden van BlizzCon 2026 op level 60; Wowhead bevestigde de racials
 * van de Skyborne en de wijzigingen bij Tauren, Orc en Gnome. De waarden kunnen
 * tijdens de beta nog veranderen. Bijgewerkt op 25 september 2026 met de
 * ontwikkelingsnotities van de build van 24 september: Eureka!, Cultivation en
 * Touch of the Grave. Namen van racials blijven Engels.
 */

import type { Locale } from './ui';

type Words = Record<Locale, string>;

export type RacialState = 'new' | 'changed' | 'same';
export type Racial = { name: string; state: RacialState; text: Words };
export type RaceRacials = { racials: Racial[]; removed: string[] };

const w = (en: string, nl: string, fr: string, es: string, it: string, de: string): Words => ({ en, nl, fr, es, it, de });

const beasts = w('Damage to Beasts +5%.', 'Schade tegen Beasts +5%.', 'Dégâts contre les Beasts +5 %.', 'Daño contra Beasts +5 %.', 'Danni contro Beasts +5%.', 'Schaden gegen Beasts +5 %.');
const walkOnAir = w('Glide down through the air for 10 sec.', 'Glijd 10 sec lang door de lucht naar beneden.', 'Planer vers le bas pendant 10 s.', 'Planea hacia abajo durante 10 s.', 'Plana verso il basso per 10 s.', 'Gleitet 10 Sek. lang durch die Luft nach unten.');
const windBlessed = w('Haste +1% for melee, ranged and spells.', 'Haste +1% voor melee, ranged en spells.', 'Haste +1 % en mêlée, à distance et pour les sorts.', 'Haste +1 % cuerpo a cuerpo, a distancia y en hechizos.', 'Haste +1% in mischia, a distanza e per gli incantesimi.', 'Haste +1 % im Nahkampf, Fernkampf und für Zauber.');
const elementalInsight = w('Damage to Elementals +5%.', 'Schade tegen Elementals +5%.', 'Dégâts contre les Elementals +5 %.', 'Daño contra Elementals +5 %.', 'Danni contro Elementals +5%.', 'Schaden gegen Elementals +5 %.');

export const foreverRacials: Record<string, RaceRacials> = {
  human: {
    racials: [
      { name: 'Will to Survive', state: 'new', text: w('Removes all Stun effects.', 'Verwijdert alle stuneffecten.', 'Supprime tous les effets d’étourdissement.', 'Elimina todos los efectos de aturdimiento.', 'Rimuove tutti gli effetti di stordimento.', 'Entfernt alle Betäubungseffekte.') },
      { name: 'Perception', state: 'same', text: w('Greatly increases stealth detection for 20 sec.', 'Ziet stealth 20 sec lang veel beter.', 'Augmente fortement la détection du camouflage pendant 20 s.', 'Aumenta mucho la detección de sigilo durante 20 s.', 'Aumenta molto il rilevamento della furtività per 20 s.', 'Erhöht die Tarnungsentdeckung 20 Sek. lang stark.') },
      { name: 'Sword Specialization', state: 'changed', text: w('Swords increase spell and ability Crit by 2% (was +5 sword skill).', 'Zwaarden geven 2% Crit op spells en abilities (was +5 sword skill).', 'Les épées augmentent le Crit des sorts et techniques de 2 % (avant : +5 en sword skill).', 'Las espadas aumentan el Crit de hechizos y habilidades un 2 % (antes +5 de sword skill).', 'Le spade aumentano il Crit di incantesimi e abilità del 2% (prima +5 sword skill).', 'Schwerter erhöhen den Crit von Zaubern und Fähigkeiten um 2 % (vorher +5 Sword Skill).') },
      { name: 'The Human Spirit', state: 'same', text: w('Spirit increased by 5%.', 'Spirit +5%.', 'Spirit augmenté de 5 %.', 'Spirit aumentado un 5 %.', 'Spirit aumentato del 5%.', 'Spirit um 5 % erhöht.') },
    ],
    removed: ['Diplomacy', 'Mace Specialization'],
  },
  dwarf: {
    racials: [
      { name: 'Find Treasure', state: 'changed', text: w('Shows nearby treasure on the minimap.', 'Toont schatten in de buurt op de minimap.', 'Affiche les trésors proches sur la mini-carte.', 'Muestra tesoros cercanos en el minimapa.', 'Mostra i tesori vicini sulla minimappa.', 'Zeigt Schätze in der Nähe auf der Minikarte.') },
      { name: 'Stoneform', state: 'changed', text: w('Removes all Poison and Disease effects and reduces Physical damage taken for 8 sec (was immunity plus 10% armor).', 'Verwijdert alle Poison- en Disease-effecten en vermindert fysieke schade 8 sec lang (was immuniteit plus 10% armor).', 'Supprime tous les effets de poison et de maladie et réduit les dégâts physiques subis pendant 8 s (avant : immunité et 10 % d’armure).', 'Elimina todos los efectos de veneno y enfermedad y reduce el daño físico recibido durante 8 s (antes inmunidad y 10 % de armadura).', 'Rimuove tutti gli effetti di veleno e malattia e riduce i danni fisici subiti per 8 s (prima immunità e 10% di armatura).', 'Entfernt alle Gift- und Krankheitseffekte und verringert erlittenen körperlichen Schaden 8 Sek. lang (vorher Immunität plus 10 % Rüstung).') },
      { name: 'Mace Specialization', state: 'new', text: w('Maces increase spell and ability Crit by 1%.', 'Maces geven 1% Crit op spells en abilities.', 'Les masses augmentent le Crit des sorts et techniques de 1 %.', 'Las mazas aumentan el Crit de hechizos y habilidades un 1 %.', 'Le mazze aumentano il Crit di incantesimi e abilità dell’1%.', 'Streitkolben erhöhen den Crit von Zaubern und Fähigkeiten um 1 %.') },
      { name: 'Big Game Hunter', state: 'new', text: beasts },
    ],
    removed: ['Frost Resistance', 'Gun Specialization'],
  },
  'night-elf': {
    racials: [
      { name: "Elune's Light", state: 'new', text: w('Crit +10% for 15 sec.', 'Crit +10%, 15 sec lang.', 'Crit +10 % pendant 15 s.', 'Crit +10 % durante 15 s.', 'Crit +10% per 15 s.', 'Crit +10 % für 15 Sek.') },
      { name: 'Shadowmeld', state: 'changed', text: w('Slip into the shadows; threat returns against enemies still in combat when it ends.', 'Verdwijn in de schaduw; bij het einde komt de threat terug bij vijanden die nog in gevecht zijn.', 'Se fondre dans les ombres ; à la fin, la menace revient face aux ennemis encore en combat.', 'Te fundes con las sombras; al terminar, la amenaza vuelve contra los enemigos que siguen en combate.', 'Ti fondi con le ombre; alla fine la minaccia torna contro i nemici ancora in combattimento.', 'Verschmilzt mit den Schatten; am Ende kehrt die Bedrohung bei Gegnern zurück, die noch im Kampf sind.') },
      { name: 'Quickness', state: 'changed', text: w('1% dodge and 2% run speed (was dodge only).', '1% dodge en 2% loopsnelheid (was alleen dodge).', '1 % d’esquive et 2 % de vitesse de course (avant : esquive seulement).', '1 % de esquiva y 2 % de velocidad de carrera (antes solo esquiva).', '1% di schivata e 2% di velocità di corsa (prima solo schivata).', '1 % Ausweichen und 2 % Laufgeschwindigkeit (vorher nur Ausweichen).') },
      { name: 'Wisp Spirit', state: 'changed', text: w('75% speed as a wisp while dead (was 50%).', '75% snelheid als wisp wanneer je dood bent (was 50%).', '75 % de vitesse en feu follet une fois mort (avant : 50 %).', '75 % de velocidad como fuego fatuo al morir (antes 50 %).', '75% di velocità come fuoco fatuo da morto (prima 50%).', '75 % Tempo als Irrwisch im Tod (vorher 50 %).') },
    ],
    removed: ['Nature Resistance'],
  },
  gnome: {
    racials: [
      { name: 'Eureka!', state: 'new', text: w('Your next 3 spells or abilities cost 10% less Mana, Rage or Energy and deal or heal 10% more.', 'Je volgende 3 spells of abilities kosten 10% minder Mana, Rage of Energy en doen of helen 10% meer.', 'Vos 3 prochains sorts ou techniques coûtent 10 % de Mana, de Rage ou d’Energy en moins et infligent ou soignent 10 % de plus.', 'Tus 3 próximos hechizos o habilidades cuestan un 10 % menos de Mana, Rage o Energy e infligen o sanan un 10 % más.', 'I tuoi prossimi 3 incantesimi o abilità costano il 10% in meno di Mana, Rage o Energy e infliggono o curano il 10% in più.', 'Deine nächsten 3 Zauber oder Fähigkeiten kosten 10 % weniger Mana, Rage oder Energy und verursachen oder heilen 10 % mehr.') },
      { name: 'Expansive Mind', state: 'changed', text: w('Maximum Mana, Rage or Energy +5% (was 5% Intellect).', 'Maximale Mana, Rage of Energy +5% (was 5% Intellect).', 'Mana, Rage ou Energy maximum +5 % (avant : 5 % d’Intellect).', 'Mana, Rage o Energy máximos +5 % (antes 5 % de Intellect).', 'Mana, Rage o Energy massimi +5% (prima 5% di Intellect).', 'Maximales Mana, Rage oder Energy +5 % (vorher 5 % Intellect).') },
      { name: 'Engineering Specialization', state: 'changed', text: w('Engineering devices are more reliable (was +15 skill).', 'Apparaten van Engineering zijn betrouwbaarder (was +15 skill).', 'Les appareils d’Engineering sont plus fiables (avant : +15 en skill).', 'Los artilugios de Engineering son más fiables (antes +15 de skill).', 'I dispositivi di Engineering sono più affidabili (prima +15 skill).', 'Engineering-Geräte sind zuverlässiger (vorher +15 Skill).') },
      { name: 'Escape Artist', state: 'same', text: w('Escape any immobilize or movement slow.', 'Ontsnap aan elke immobilisatie of vertraging.', 'Se libérer de toute immobilisation ou ralentissement.', 'Escapa de cualquier inmovilización o ralentización.', 'Libera da qualsiasi immobilizzazione o rallentamento.', 'Befreit von jeder Bewegungsunfähigkeit oder Verlangsamung.') },
    ],
    removed: ['Arcane Resistance'],
  },
  'high-order-skyborne': {
    racials: [
      { name: 'Walk on Air', state: 'new', text: walkOnAir },
      { name: 'Read Ley Line', state: 'new', text: w('Activate a ley line for 100% more Health and Mana regeneration.', 'Activeer een ley line voor 100% meer regeneratie van Health en Mana.', 'Activer une ligne tellurique pour 100 % de régénération de vie et de mana en plus.', 'Activa una línea ley para un 100 % más de regeneración de salud y maná.', 'Attiva una linea di potere per il 100% in più di rigenerazione di salute e mana.', 'Aktiviert eine Leylinie für 100 % mehr Regeneration von Gesundheit und Mana.') },
      { name: 'Wind Blessed', state: 'new', text: windBlessed },
      { name: 'Elemental Insight', state: 'new', text: elementalInsight },
    ],
    removed: [],
  },
  orc: {
    racials: [
      { name: 'Blood Fury', state: 'changed', text: w('Attack Power and Spell Power +10% for 15 sec, without the old healing penalty.', 'Attack Power en Spell Power +10%, 15 sec lang, zonder de oude straf op healing.', 'Attack Power et Spell Power +10 % pendant 15 s, sans l’ancienne pénalité de soins.', 'Attack Power y Spell Power +10 % durante 15 s, sin la antigua penalización a la sanación.', 'Attack Power e Spell Power +10% per 15 s, senza la vecchia penalità alle cure.', 'Attack Power und Spell Power +10 % für 15 Sek., ohne den alten Heilungsmalus.') },
      { name: 'Shatter Curse', state: 'new', text: w('Immunity to Curses and Banes and less Magical damage taken for 8 sec.', 'Immuniteit voor Curses en Banes en minder magische schade, 8 sec lang.', 'Immunité aux malédictions et fléaux et dégâts magiques subis réduits pendant 8 s.', 'Inmunidad a maldiciones y perdiciones y menos daño mágico recibido durante 8 s.', 'Immunità a maledizioni e flagelli e meno danni magici subiti per 8 s.', 'Immunität gegen Flüche und Verderbnis und weniger erlittener Magieschaden für 8 Sek.') },
      { name: 'Axe Specialization', state: 'changed', text: w('Axes increase spell and ability Crit by 1%.', 'Bijlen geven 1% Crit op spells en abilities.', 'Les haches augmentent le Crit des sorts et techniques de 1 %.', 'Las hachas aumentan el Crit de hechizos y habilidades un 1 %.', 'Le asce aumentano il Crit di incantesimi e abilità dell’1%.', 'Äxte erhöhen den Crit von Zaubern und Fähigkeiten um 1 %.') },
      { name: 'Hardiness', state: 'changed', text: w('Stuns last 20% shorter (was a chance to resist).', 'Stuns duren 20% korter (was een kans om te weerstaan).', 'Les étourdissements durent 20 % de moins (avant : une chance de résister).', 'Los aturdimientos duran un 20 % menos (antes una probabilidad de resistir).', 'Gli stordimenti durano il 20% in meno (prima una probabilità di resistere).', 'Betäubungen dauern 20 % kürzer (vorher eine Chance zu widerstehen).') },
    ],
    removed: ['Command'],
  },
  undead: {
    racials: [
      { name: 'Will of the Forsaken', state: 'changed', text: w('Removes any Charm, Fear or Sleep effect.', 'Verwijdert elk Charm-, Fear- of Sleep-effect.', 'Supprime tout effet de charme, de peur ou de sommeil.', 'Elimina cualquier efecto de encantamiento, miedo o sueño.', 'Rimuove qualsiasi effetto di ammaliamento, paura o sonno.', 'Entfernt jeden Bezauberungs-, Furcht- oder Schlafeffekt.') },
      { name: 'Cannibalize', state: 'changed', text: w('Restores 35% of total Health and Mana over 10 sec from a nearby Humanoid or Undead corpse (was Health only).', 'Herstelt 35% van je totale Health en Mana over 10 sec via een Humanoid- of Undead-lijk vlakbij (was alleen Health).', 'Rend 35 % de la vie et du mana totaux en 10 s sur un cadavre humanoïde ou mort-vivant proche (avant : vie seulement).', 'Recupera el 35 % de la salud y el maná totales en 10 s con un cadáver humanoide o no-muerto cercano (antes solo salud).', 'Ripristina il 35% di salute e mana totali in 10 s da un cadavere umanoide o non morto vicino (prima solo salute).', 'Stellt 35 % der gesamten Gesundheit und des Manas über 10 Sek. an einem nahen Humanoiden- oder Untoten-Leichnam wieder her (vorher nur Gesundheit).') },
      { name: 'Underwater Breathing', state: 'changed', text: w('Breath lasts 300% longer.', 'Adem houdt 300% langer vol.', 'Le souffle dure 300 % plus longtemps.', 'El aliento dura un 300 % más.', 'Il respiro dura il 300% in più.', 'Der Atem hält 300 % länger.') },
      { name: 'Touch of the Grave', state: 'new', text: w('5% chance on hit to drain Health, up to 5% of your maximum Health. Only damage triggers it, and it never breaks crowd control.', '5% kans bij een treffer om Health af te tappen, tot 5% van je maximale Health. Alleen schade activeert het, en het breekt nooit crowd control.', '5 % de chances en touchant de drainer de la vie, jusqu’à 5 % de votre vie maximale. Seuls les dégâts le déclenchent, et il ne brise jamais un contrôle de foule.', '5 % de probabilidad al golpear de drenar salud, hasta un 5 % de tu salud máxima. Solo el daño lo activa, y nunca rompe el control de masas.', '5% di probabilità a colpo di drenare salute, fino al 5% della tua salute massima. Solo i danni lo attivano, e non interrompe mai il controllo di massa.', '5 % Chance bei Treffern, Gesundheit zu entziehen, bis zu 5 % deiner maximalen Gesundheit. Nur Schaden löst es aus, und es bricht nie Crowd Control.') },
    ],
    removed: ['Shadow Resistance'],
  },
  tauren: {
    racials: [
      { name: 'War Stomp', state: 'changed', text: w('Stuns up to 5 enemies within 8 yards for 2 sec.', 'Stunt tot 5 vijanden binnen 8 yards, 2 sec lang.', 'Étourdit jusqu’à 5 ennemis à 8 mètres pendant 2 s.', 'Aturde hasta 5 enemigos a 8 metros durante 2 s.', 'Stordisce fino a 5 nemici entro 8 metri per 2 s.', 'Betäubt bis zu 5 Gegner im Umkreis von 8 Metern für 2 Sek.') },
      { name: 'Cultivation', state: 'changed', text: w('Grows bonus herbs that anyone can gather without Herbalism (was +15 Herbalism). Each herb needs a player level equal to its Herbalism requirement divided by 5.', 'Laat extra kruiden groeien die iedereen kan plukken zonder Herbalism (was +15 Herbalism). Elk kruid vraagt een level gelijk aan zijn Herbalism-vereiste gedeeld door 5.', 'Fait pousser des herbes en plus que tout le monde peut cueillir sans Herbalism (avant : +15 en Herbalism). Chaque herbe demande un niveau égal à son exigence en Herbalism divisée par 5.', 'Hace crecer hierbas extra que cualquiera puede recoger sin Herbalism (antes +15 de Herbalism). Cada hierba exige un nivel igual a su requisito de Herbalism dividido entre 5.', 'Fa crescere erbe in più che chiunque può raccogliere senza Herbalism (prima +15 Herbalism). Ogni erba richiede un livello pari al suo requisito di Herbalism diviso per 5.', 'Lässt zusätzliche Kräuter wachsen, die jeder ohne Herbalism sammeln kann (vorher +15 Herbalism). Jedes Kraut verlangt eine Stufe gleich seiner Herbalism-Anforderung geteilt durch 5.') },
      { name: 'Plainsrunning', state: 'new', text: w('Movement speed rises the longer you keep moving.', 'Je loopsnelheid stijgt hoe langer je blijft bewegen.', 'La vitesse de déplacement augmente tant que vous continuez à bouger.', 'La velocidad de movimiento sube cuanto más tiempo sigues moviéndote.', 'La velocità di movimento cresce più a lungo continui a muoverti.', 'Das Bewegungstempo steigt, je länger du in Bewegung bleibst.') },
      { name: 'Endurance', state: 'changed', text: w('Total Health +5% and Hit +1%.', 'Totale Health +5% en Hit +1%.', 'Vie totale +5 % et Hit +1 %.', 'Salud total +5 % y Hit +1 %.', 'Salute totale +5% e Hit +1%.', 'Gesamte Gesundheit +5 % und Hit +1 %.') },
    ],
    removed: ['Nature Resistance'],
  },
  troll: {
    racials: [
      { name: 'Berserking', state: 'changed', text: w('Attack and casting speed +10% for 10 sec, no longer scaling with low Health.', 'Aanvals- en castsnelheid +10%, 10 sec lang, niet meer afhankelijk van lage Health.', 'Vitesse d’attaque et d’incantation +10 % pendant 10 s, sans dépendre des points de vie bas.', 'Velocidad de ataque y de lanzamiento +10 % durante 10 s, ya sin depender de la salud baja.', 'Velocità d’attacco e di lancio +10% per 10 s, senza più dipendere dalla salute bassa.', 'Angriffs- und Zaubertempo +10 % für 10 Sek., nicht mehr abhängig von niedriger Gesundheit.') },
      { name: 'Rapid Regeneration', state: 'new', text: w('Regenerates 50% of maximum Health over a short time.', 'Regenereert 50% van je maximale Health in korte tijd.', 'Régénère 50 % de la vie maximale en peu de temps.', 'Regenera el 50 % de la salud máxima en poco tiempo.', 'Rigenera il 50% della salute massima in poco tempo.', 'Regeneriert 50 % der maximalen Gesundheit in kurzer Zeit.') },
      { name: 'Regeneration', state: 'same', text: w('Health regeneration +10%, and 10% continues in combat.', 'Regeneratie van Health +10%, en 10% loopt door in gevecht.', 'Régénération de vie +10 %, et 10 % continue en combat.', 'Regeneración de salud +10 %, y un 10 % sigue en combate.', 'Rigenerazione della salute +10%, e il 10% continua in combattimento.', 'Gesundheitsregeneration +10 %, 10 % laufen im Kampf weiter.') },
      { name: 'Beast Slaying', state: 'same', text: beasts },
    ],
    removed: ['Bow Specialization', 'Throwing Specialization'],
  },
  'windshaper-skyborne': {
    racials: [
      { name: 'Walk on Air', state: 'new', text: walkOnAir },
      { name: 'Skysight', state: 'new', text: w('An Elemental Blessing that raises run speed by 10%.', 'Een Elemental Blessing die je loopsnelheid met 10% verhoogt.', 'Une Elemental Blessing qui augmente la vitesse de course de 10 %.', 'Una Elemental Blessing que aumenta la velocidad de carrera un 10 %.', 'Una Elemental Blessing che aumenta la velocità di corsa del 10%.', 'Ein Elemental Blessing, das das Lauftempo um 10 % erhöht.') },
      { name: 'Wind Blessed', state: 'new', text: windBlessed },
      { name: 'Elemental Insight', state: 'new', text: elementalInsight },
    ],
    removed: [],
  },
};
