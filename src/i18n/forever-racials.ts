/*
 * De racials van elk ras in WoW Forever, in zes talen, vergeleken met Classic.
 *
 * Uit beelden van BlizzCon 2026 op level 60; Wowhead bevestigde de racials
 * van de Skyborne en de wijzigingen bij Tauren, Orc en Gnome. De waarden kunnen
 * tijdens de beta nog veranderen. Bijgewerkt op 25 september 2026 met de
 * ontwikkelingsnotities van de build van 24 september: Eureka!, Cultivation en
 * Touch of the Grave. Op 2 oktober 2026: Eureka! werkt niet meer op periodieke
 * effecten (build van 1 oktober). Op 16 oktober 2026 met de notities van de
 * build van 15 oktober: de wapenspecialisaties van Human, Dwarf en Orc zijn
 * vervangen (Ruthless, Earth Fury, Savage), plus Tauren, Skyborne, Eureka!,
 * Shatter Curse, Touch of the Grave, Quickness en Regeneration. Namen van
 * racials blijven Engels. Op 27 oktober 2026 met de notities van 26 oktober:
 * Earth Fury en Savage weg, Artisan's Precision en Command erbij, Ruthless,
 * The Human Spirit, Plainsrunning, Endurance en de Skyborne bijgesteld. Later
 * die dag (bericht 8 van dezelfde draad): Blood Fury 2 min, Berserking 15 sec,
 * Touch of the Grave 15 sec interne cooldown, Attuned en Charged weg in een raid.
 */

import type { Locale } from './ui';

type Words = Record<Locale, string>;

export type RacialState = 'new' | 'changed' | 'same';
export type Racial = { name: string; state: RacialState; text: Words };
export type RaceRacials = { racials: Racial[]; removed: string[] };

const w = (en: string, nl: string, fr: string, es: string, it: string, de: string): Words => ({ en, nl, fr, es, it, de });

const beasts = w('Damage to Beasts +5%.', 'Schade tegen Beasts +5%.', 'Dégâts contre les Beasts +5 %.', 'Daño contra Beasts +5 %.', 'Danni contro Beasts +5%.', 'Schaden gegen Beasts +5 %.');
const walkOnAir = w('Glide down through the air for 10 sec. 90 sec cooldown.', 'Glijd 10 sec lang door de lucht naar beneden. Cooldown 90 sec.', 'Planer vers le bas pendant 10 s. Temps de recharge 90 s.', 'Planea hacia abajo durante 10 s. Reutilización de 90 s.', 'Plana verso il basso per 10 s. Ricarica di 90 s.', 'Gleitet 10 Sek. lang durch die Luft nach unten. Abklingzeit 90 Sek.');
const windBlessed = w('Haste +2% for melee, ranged and spells.', 'Haste +2% voor melee, ranged en spells.', 'Haste +2 % en mêlée, à distance et pour les sorts.', 'Haste +2 % cuerpo a cuerpo, a distancia y en hechizos.', 'Haste +2% in mischia, a distanza e per gli incantesimi.', 'Haste +2 % im Nahkampf, im Fernkampf und für Zauber.');
const elementalInsight = w('Damage to Elementals +5%.', 'Schade tegen Elementals +5%.', 'Dégâts contre les Elementals +5 %.', 'Daño contra Elementals +5 %.', 'Danni contro Elementals +5%.', 'Schaden gegen Elementals +5 %.');

export const foreverRacials: Record<string, RaceRacials> = {
  human: {
    racials: [
      { name: 'Will to Survive', state: 'new', text: w('Removes all Stun effects.', 'Verwijdert alle stuneffecten.', 'Supprime tous les effets d’étourdissement.', 'Elimina todos los efectos de aturdimiento.', 'Rimuove tutti gli effetti di stordimento.', 'Entfernt alle Betäubungseffekte.') },
      { name: 'Perception', state: 'same', text: w('Greatly increases stealth detection for 20 sec.', 'Ziet stealth 20 sec lang veel beter.', 'Augmente fortement la détection du camouflage pendant 20 s.', 'Aumenta mucho la detección de sigilo durante 20 s.', 'Aumenta molto il rilevamento della furtività per 20 s.', 'Erhöht die Tarnungsentdeckung 20 Sek. lang stark.') },
      { name: 'Ruthless', state: 'new', text: w('Critical strike chance +1%. Replaces Sword Specialization.', 'Kans op een critical strike +1%. Vervangt Sword Specialization.', 'Chance de coup critique +1 %. Remplace Sword Specialization.', 'Probabilidad de golpe crítico +1 %. Sustituye a Sword Specialization.', 'Probabilità di colpo critico +1%. Sostituisce Sword Specialization.', 'Chance auf kritische Treffer +1 %. Ersetzt Sword Specialization.') },
      { name: 'The Human Spirit', state: 'changed', text: w('Spirit increased by 10% (was 5%).', 'Spirit +10% (was 5%).', 'Spirit augmenté de 10 % (avant : 5 %).', 'Spirit aumentado un 10 % (antes 5 %).', 'Spirit aumentato del 10% (prima 5%).', 'Spirit um 10 % erhöht (vorher 5 %).') },
    ],
    removed: ['Diplomacy', 'Mace Specialization', 'Sword Specialization'],
  },
  dwarf: {
    racials: [
      { name: 'Find Treasure', state: 'changed', text: w('Shows nearby treasure on the minimap, and gives a chance at extra items from most chests.', 'Toont schatten in de buurt op de minimap, en geeft een kans op extra voorwerpen uit de meeste kisten.', 'Affiche les trésors proches sur la mini-carte et donne une chance d’objets en plus dans la plupart des coffres.', 'Muestra tesoros cercanos en el minimapa y da una probabilidad de objetos extra en la mayoría de los cofres.', 'Mostra i tesori vicini sulla minimappa e dà una probabilità di oggetti in più dalla maggior parte dei forzieri.', 'Zeigt Schätze in der Nähe auf der Minikarte und gibt eine Chance auf zusätzliche Gegenstände aus den meisten Truhen.') },
      { name: 'Stoneform', state: 'changed', text: w('Removes all Poison and Disease effects and reduces Physical damage taken for 8 sec (was immunity plus 10% armor).', 'Verwijdert alle Poison- en Disease-effecten en vermindert fysieke schade 8 sec lang (was immuniteit plus 10% armor).', 'Supprime tous les effets de poison et de maladie et réduit les dégâts physiques subis pendant 8 s (avant : immunité et 10 % d’armure).', 'Elimina todos los efectos de veneno y enfermedad y reduce el daño físico recibido durante 8 s (antes inmunidad y 10 % de armadura).', 'Rimuove tutti gli effetti di veleno e malattia e riduce i danni fisici subiti per 8 s (prima immunità e 10% di armatura).', 'Entfernt alle Gift- und Krankheitseffekte und verringert erlittenen körperlichen Schaden 8 Sek. lang (vorher Immunität plus 10 % Rüstung).') },
      { name: "Artisan's Precision", state: 'new', text: w('Hit chance with spells and attacks +1%.', 'Kans om te raken met spells en aanvallen +1%.', 'Chance de toucher avec les sorts et les attaques +1 %.', 'Probabilidad de impacto con hechizos y ataques +1 %.', 'Probabilità di colpire con incantesimi e attacchi +1%.', 'Trefferchance mit Zaubern und Angriffen +1 %.') },
      { name: 'Big Game Hunter', state: 'new', text: beasts },
    ],
    removed: ['Frost Resistance', 'Gun Specialization'],
  },
  'night-elf': {
    racials: [
      { name: "Elune's Light", state: 'new', text: w('Crit +10% for 15 sec.', 'Crit +10%, 15 sec lang.', 'Crit +10 % pendant 15 s.', 'Crit +10 % durante 15 s.', 'Crit +10% per 15 s.', 'Crit +10 % für 15 Sek.') },
      { name: 'Shadowmeld', state: 'changed', text: w('Slip into the shadows; threat returns against enemies still in combat when it ends.', 'Verdwijn in de schaduw; bij het einde komt de threat terug bij vijanden die nog in gevecht zijn.', 'Se fondre dans les ombres ; à la fin, la menace revient face aux ennemis encore en combat.', 'Te fundes con las sombras; al terminar, la amenaza vuelve contra los enemigos que siguen en combate.', 'Ti fondi con le ombre; alla fine la minaccia torna contro i nemici ancora in combattimento.', 'Verschmilzt mit den Schatten; am Ende kehrt die Bedrohung bei Gegnern zurück, die noch im Kampf sind.') },
      { name: 'Quickness', state: 'changed', text: w('1% dodge and 2% run speed that stacks with other speed bonuses (was dodge only).', '1% dodge en 2% loopsnelheid die stapelt met andere snelheidsbonussen (was alleen dodge).', '1 % d’esquive et 2 % de vitesse de course, cumulables avec les autres bonus de vitesse (avant : esquive seulement).', '1 % de esquiva y 2 % de velocidad de carrera, acumulable con otras bonificaciones de velocidad (antes solo esquiva).', '1% di schivata e 2% di velocità di corsa, cumulabile con altri bonus di velocità (prima solo schivata).', '1 % Ausweichen und 2 % Laufgeschwindigkeit, stapelbar mit anderen Tempoboni (vorher nur Ausweichen).') },
      { name: 'Wisp Spirit', state: 'changed', text: w('75% speed as a wisp while dead (was 50%).', '75% snelheid als wisp wanneer je dood bent (was 50%).', '75 % de vitesse en feu follet une fois mort (avant : 50 %).', '75 % de velocidad como fuego fatuo al morir (antes 50 %).', '75% di velocità come fuoco fatuo da morto (prima 50%).', '75 % Tempo als Irrwisch im Tod (vorher 50 %).') },
    ],
    removed: ['Nature Resistance'],
  },
  gnome: {
    racials: [
      { name: 'Eureka!', state: 'new', text: w('For 8 sec, your non-periodic spells and abilities cost 10% less Mana, Rage or Energy and deal or heal 10% more. Also works on Power Word: Shield.', 'Je niet-periodieke spells en abilities kosten 8 sec lang 10% minder Mana, Rage of Energy en doen of helen 10% meer. Werkt ook op Power Word: Shield.', 'Pendant 8 s, vos sorts et techniques non périodiques coûtent 10 % de Mana, de Rage ou d’Energy en moins et infligent ou soignent 10 % de plus. Fonctionne aussi sur Power Word: Shield.', 'Durante 8 s, tus hechizos y habilidades no periódicos cuestan un 10 % menos de Mana, Rage o Energy e infligen o sanan un 10 % más. También funciona con Power Word: Shield.', 'Per 8 s i tuoi incantesimi e abilità non periodici costano il 10% in meno di Mana, Rage o Energy e infliggono o curano il 10% in più. Funziona anche su Power Word: Shield.', 'Für 8 Sek. kosten deine nicht periodischen Zauber und Fähigkeiten 10 % weniger Mana, Rage oder Energy und verursachen oder heilen 10 % mehr. Wirkt auch auf Power Word: Shield.') },
      { name: 'Expansive Mind', state: 'changed', text: w('Maximum Mana, Rage or Energy +5% (was 5% Intellect).', 'Maximale Mana, Rage of Energy +5% (was 5% Intellect).', 'Mana, Rage ou Energy maximum +5 % (avant : 5 % d’Intellect).', 'Mana, Rage o Energy máximos +5 % (antes 5 % de Intellect).', 'Mana, Rage o Energy massimi +5% (prima 5% di Intellect).', 'Maximales Mana, Rage oder Energy +5 % (vorher 5 % Intellect).') },
      { name: 'Engineering Specialization', state: 'changed', text: w('Engineering devices are more reliable (was +15 skill).', 'Apparaten van Engineering zijn betrouwbaarder (was +15 skill).', 'Les appareils d’Engineering sont plus fiables (avant : +15 en skill).', 'Los artilugios de Engineering son más fiables (antes +15 de skill).', 'I dispositivi di Engineering sono più affidabili (prima +15 skill).', 'Engineering-Geräte sind zuverlässiger (vorher +15 Skill).') },
      { name: 'Escape Artist', state: 'same', text: w('Escape any immobilize or movement slow.', 'Ontsnap aan elke immobilisatie of vertraging.', 'Se libérer de toute immobilisation ou ralentissement.', 'Escapa de cualquier inmovilización o ralentización.', 'Libera da qualsiasi immobilizzazione o rallentamento.', 'Befreit von jeder Bewegungsunfähigkeit oder Verlangsamung.') },
    ],
    removed: ['Arcane Resistance'],
  },
  'high-order-skyborne': {
    racials: [
      { name: 'Walk on Air', state: 'new', text: walkOnAir },
      { name: 'Read Leyline', state: 'new', text: w('Activate a ley line for 50% more Health and Mana regeneration for 15 sec, and Attuned for 1 hour: 100% while Attuned, also after death, until you enter a raid. Not with Innervate active. Castable while moving.', 'Activeer een ley line voor 50% meer regeneratie van Health en Mana, 15 sec lang, en 1 uur Attuned: dan 100%, ook na je dood, tot je een raid binnengaat. Niet samen met Innervate. Ook al bewegend te casten.', 'Activer une ligne tellurique pour 50 % de régénération de vie et de mana en plus pendant 15 s, et Attuned pendant 1 h : 100 % tant qu’il dure, même après la mort, jusqu’à l’entrée dans un raid. Pas avec Innervate actif. Utilisable en mouvement.', 'Activa una línea ley para un 50 % más de regeneración de salud y maná durante 15 s, y Attuned durante 1 h: 100 % mientras dura, también tras morir, hasta entrar en una banda. No con Innervate activo. Se lanza en movimiento.', 'Attiva una linea di potere per il 50% in più di rigenerazione di salute e mana per 15 s, e Attuned per 1 ora: 100% finché dura, anche dopo la morte, fino all’ingresso in un raid. Non con Innervate attivo. Lanciabile in movimento.', 'Aktiviert eine Leylinie für 50 % mehr Regeneration von Gesundheit und Mana für 15 Sek., dazu 1 Std. Attuned: dann 100 %, auch nach dem Tod, bis du einen Schlachtzug betrittst. Nicht mit aktivem Innervate. Auch in Bewegung wirkbar.') },
      { name: 'Wind Blessed', state: 'new', text: windBlessed },
      { name: 'Elemental Insight', state: 'new', text: elementalInsight },
    ],
    removed: [],
  },
  orc: {
    racials: [
      { name: 'Blood Fury', state: 'changed', text: w('Attack Power and Spell Power +10% for 15 sec, without the old healing penalty. 2 min cooldown (was 3 min).', 'Attack Power en Spell Power +10%, 15 sec lang, zonder de oude straf op healing. Cooldown 2 min (was 3 min).', 'Attack Power et Spell Power +10 % pendant 15 s, sans l’ancienne pénalité de soins. Temps de recharge 2 min (au lieu de 3 min).', 'Attack Power y Spell Power +10 % durante 15 s, sin la antigua penalización a la sanación. Reutilización de 2 min (antes 3 min).', 'Attack Power e Spell Power +10% per 15 s, senza la vecchia penalità alle cure. Ricarica di 2 min (prima 3 min).', 'Attack Power und Spell Power +10 % für 15 Sek., ohne den alten Heilungsmalus. Abklingzeit 2 Min. (vorher 3 Min.).') },
      { name: 'Shatter Curse', state: 'new', text: w('Removes Curses and Banes, and Magical damage taken is 5% lower.', 'Verwijdert Curses en Banes, en je krijgt 5% minder magische schade.', 'Dissipe les malédictions et les fléaux, et les dégâts magiques subis sont réduits de 5 %.', 'Disipa maldiciones y perdiciones, y el daño mágico recibido baja un 5 %.', 'Dissolve maledizioni e flagelli, e i danni magici subiti calano del 5%.', 'Bannt Flüche und Verderbnis, und erlittener Magieschaden sinkt um 5 %.') },
      { name: 'Command', state: 'same', text: w('Damage of Warlock and Hunter pets +5%.', 'Schade van pets van Warlocks en Hunters +5%.', 'Dégâts des familiers de démonistes et de chasseurs +5 %.', 'Daño de las mascotas de brujos y cazadores +5 %.', 'Danni dei famigli di stregoni e cacciatori +5%.', 'Schaden von Begleitern von Hexenmeistern und Jägern +5 %.') },
      { name: 'Hardiness', state: 'changed', text: w('Stuns last 20% shorter (was a chance to resist).', 'Stuns duren 20% korter (was een kans om te weerstaan).', 'Les étourdissements durent 20 % de moins (avant : une chance de résister).', 'Los aturdimientos duran un 20 % menos (antes una probabilidad de resistir).', 'Gli stordimenti durano il 20% in meno (prima una probabilità di resistere).', 'Betäubungen dauern 20 % kürzer (vorher eine Chance zu widerstehen).') },
    ],
    removed: ['Axe Specialization'],
  },
  undead: {
    racials: [
      { name: 'Will of the Forsaken', state: 'changed', text: w('Removes any Charm, Fear or Sleep effect.', 'Verwijdert elk Charm-, Fear- of Sleep-effect.', 'Supprime tout effet de charme, de peur ou de sommeil.', 'Elimina cualquier efecto de encantamiento, miedo o sueño.', 'Rimuove qualsiasi effetto di ammaliamento, paura o sonno.', 'Entfernt jeden Bezauberungs-, Furcht- oder Schlafeffekt.') },
      { name: 'Cannibalize', state: 'changed', text: w('Restores 35% of total Health and Mana over 10 sec from a nearby Humanoid or Undead corpse (was Health only).', 'Herstelt 35% van je totale Health en Mana over 10 sec via een Humanoid- of Undead-lijk vlakbij (was alleen Health).', 'Rend 35 % de la vie et du mana totaux en 10 s sur un cadavre humanoïde ou mort-vivant proche (avant : vie seulement).', 'Recupera el 35 % de la salud y el maná totales en 10 s con un cadáver humanoide o no-muerto cercano (antes solo salud).', 'Ripristina il 35% di salute e mana totali in 10 s da un cadavere umanoide o non morto vicino (prima solo salute).', 'Stellt 35 % der gesamten Gesundheit und des Manas über 10 Sek. an einem nahen Humanoiden- oder Untoten-Leichnam wieder her (vorher nur Gesundheit).') },
      { name: 'Underwater Breathing', state: 'changed', text: w('Breath lasts 300% longer.', 'Adem houdt 300% langer vol.', 'Le souffle dure 300 % plus longtemps.', 'El aliento dura un 300 % más.', 'Il respiro dura il 300% in più.', 'Der Atem hält 300 % länger.') },
      { name: 'Touch of the Grave', state: 'new', text: w('A chance on hit to drain Health, up to 5% of your maximum Health, with a steadier proc since 15 October and at most once every 15 sec (was 25 sec). Only damage triggers it, and it never breaks crowd control.', 'Een kans bij een treffer om Health af te tappen, tot 5% van je maximale Health, sinds 15 oktober gelijkmatiger en hoogstens eens per 15 sec (was 25 sec). Alleen schade activeert het, en het breekt nooit crowd control.', 'Une chance en touchant de drainer de la vie, jusqu’à 5 % de votre vie maximale, plus régulière depuis le 15 octobre et au plus une fois toutes les 15 s (au lieu de 25 s). Seuls les dégâts le déclenchent, et il ne brise jamais un contrôle de foule.', 'Una probabilidad al golpear de drenar salud, hasta un 5 % de tu salud máxima, más regular desde el 15 de octubre y como mucho una vez cada 15 s (antes 25 s). Solo el daño lo activa, y nunca rompe el control de masas.', 'Una probabilità a colpo di drenare salute, fino al 5% della tua salute massima, più regolare dal 15 ottobre e al massimo una volta ogni 15 s (prima 25 s). Solo i danni lo attivano, e non interrompe mai il controllo di massa.', 'Eine Chance bei Treffern, Gesundheit zu entziehen, bis zu 5 % deiner maximalen Gesundheit, seit dem 15. Oktober gleichmäßiger und höchstens alle 15 Sek. (vorher 25 Sek.). Nur Schaden löst es aus, und es bricht nie Crowd Control.') },
    ],
    removed: ['Shadow Resistance'],
  },
  tauren: {
    racials: [
      { name: 'War Stomp', state: 'changed', text: w('Stuns up to 5 enemies within 8 yards for 2 sec. 90 sec cooldown.', 'Stunt tot 5 vijanden binnen 8 yards, 2 sec lang. Cooldown 90 sec.', 'Étourdit jusqu’à 5 ennemis à 8 mètres pendant 2 s. Temps de recharge 90 s.', 'Aturde hasta 5 enemigos a 8 metros durante 2 s. Reutilización de 90 s.', 'Stordisce fino a 5 nemici entro 8 metri per 2 s. Ricarica di 90 s.', 'Betäubt bis zu 5 Gegner im Umkreis von 8 Metern für 2 Sek. Abklingzeit 90 Sek.') },
      { name: 'Cultivation', state: 'changed', text: w('Grows bonus herbs that anyone can gather without Herbalism (was +15 Herbalism). Each herb needs a player level equal to its Herbalism requirement divided by 5. 15 min cooldown.', 'Laat extra kruiden groeien die iedereen kan plukken zonder Herbalism (was +15 Herbalism). Elk kruid vraagt een level gelijk aan zijn Herbalism-vereiste gedeeld door 5. Cooldown 15 min.', 'Fait pousser des herbes en plus que tout le monde peut cueillir sans Herbalism (avant : +15 en Herbalism). Chaque herbe demande un niveau égal à son exigence en Herbalism divisée par 5. Temps de recharge 15 min.', 'Hace crecer hierbas extra que cualquiera puede recoger sin Herbalism (antes +15 de Herbalism). Cada hierba exige un nivel igual a su requisito de Herbalism dividido entre 5. Reutilización de 15 min.', 'Fa crescere erbe in più che chiunque può raccogliere senza Herbalism (prima +15 Herbalism). Ogni erba richiede un livello pari al suo requisito di Herbalism diviso per 5. Ricarica di 15 min.', 'Lässt zusätzliche Kräuter wachsen, die jeder ohne Herbalism sammeln kann (vorher +15 Herbalism). Jedes Kraut verlangt eine Stufe gleich seiner Herbalism-Anforderung geteilt durch 5. Abklingzeit 15 Min.') },
      { name: 'Plainsrunning', state: 'new', text: w('Movement speed +2% per stack the longer you keep moving, up to 60%. No longer affects mounted speed.', 'Loopsnelheid +2% per stack hoe langer je blijft bewegen, tot 60%. Werkt niet meer op een mount.', 'Vitesse de déplacement +2 % par cumul tant que vous continuez à bouger, jusqu’à 60 %. Ne s’applique plus en monture.', 'Velocidad de movimiento +2 % por acumulación mientras sigues moviéndote, hasta un 60 %. Ya no afecta a la montura.', 'Velocità di movimento +2% per accumulo finché continui a muoverti, fino al 60%. Non vale più in cavalcatura.', 'Bewegungstempo +2 % pro Stapel, solange du in Bewegung bleibst, bis 60 %. Wirkt nicht mehr auf dem Reittier.') },
      { name: 'Endurance', state: 'changed', text: w('Total Health +5% (no more Hit or critical damage).', 'Totale Health +5% (geen Hit of kritieke schade meer).', 'Vie totale +5 % (plus de Hit ni de dégâts critiques).', 'Salud total +5 % (ya sin Hit ni daño crítico).', 'Salute totale +5% (niente più Hit né danni critici).', 'Gesamte Gesundheit +5 % (kein Hit und kein kritischer Schaden mehr).') },
    ],
    removed: ['Nature Resistance'],
  },
  troll: {
    racials: [
      { name: 'Berserking', state: 'changed', text: w('Attack and casting speed +10% for 15 sec (was 10 sec), no longer scaling with low Health.', 'Aanvals- en castsnelheid +10%, 15 sec lang (was 10 sec), niet meer afhankelijk van lage Health.', 'Vitesse d’attaque et d’incantation +10 % pendant 15 s (au lieu de 10 s), sans dépendre des points de vie bas.', 'Velocidad de ataque y de lanzamiento +10 % durante 15 s (antes 10 s), ya sin depender de la salud baja.', 'Velocità d’attacco e di lancio +10% per 15 s (prima 10 s), senza più dipendere dalla salute bassa.', 'Angriffs- und Zaubertempo +10 % für 15 Sek. (vorher 10 Sek.), nicht mehr abhängig von niedriger Gesundheit.') },
      { name: 'Rapid Regeneration', state: 'new', text: w('Regenerates 50% of maximum Health over a short time.', 'Regenereert 50% van je maximale Health in korte tijd.', 'Régénère 50 % de la vie maximale en peu de temps.', 'Regenera el 50 % de la salud máxima en poco tiempo.', 'Rigenera il 50% della salute massima in poco tempo.', 'Regeneriert 50 % der maximalen Gesundheit in kurzer Zeit.') },
      { name: 'Regeneration', state: 'changed', text: w('Health regeneration +20% (was 10%), and 10% continues in combat.', 'Regeneratie van Health +20% (was 10%), en 10% loopt door in gevecht.', 'Régénération de vie +20 % (avant : 10 %), et 10 % continue en combat.', 'Regeneración de salud +20 % (antes 10 %), y un 10 % sigue en combate.', 'Rigenerazione della salute +20% (prima 10%), e il 10% continua in combattimento.', 'Gesundheitsregeneration +20 % (vorher 10 %), 10 % laufen im Kampf weiter.') },
      { name: 'Beast Slaying', state: 'same', text: beasts },
    ],
    removed: ['Bow Specialization', 'Throwing Specialization'],
  },
  'windshaper-skyborne': {
    racials: [
      { name: 'Walk on Air', state: 'new', text: walkOnAir },
      { name: 'Skysight', state: 'new', text: w('An Elemental Blessing that raises movement speed by 15% for 15 sec. At an Elemental Convergence also Charged for 1 hour: 30% while Charged, also after death, until you enter a raid. Castable while moving.', 'Een Elemental Blessing die je loopsnelheid 15 sec lang met 15% verhoogt. Bij een Elemental Convergence ook 1 uur Charged: dan 30%, ook na je dood, tot je een raid binnengaat. Ook al bewegend te casten.', 'Une Elemental Blessing qui augmente la vitesse de déplacement de 15 % pendant 15 s. À une Elemental Convergence, aussi Charged pendant 1 h : 30 % tant qu’il dure, même après la mort, jusqu’à l’entrée dans un raid. Utilisable en mouvement.', 'Una Elemental Blessing que aumenta la velocidad de movimiento un 15 % durante 15 s. En una Elemental Convergence, también Charged durante 1 h: 30 % mientras dura, también tras morir, hasta entrar en una banda. Se lanza en movimiento.', 'Una Elemental Blessing che aumenta la velocità di movimento del 15% per 15 s. A una Elemental Convergence anche Charged per 1 ora: 30% finché dura, anche dopo la morte, fino all’ingresso in un raid. Lanciabile in movimento.', 'Ein Elemental Blessing, das das Bewegungstempo 15 Sek. lang um 15 % erhöht. An einer Elemental Convergence zusätzlich 1 Std. Charged: dann 30 %, auch nach dem Tod, bis du einen Schlachtzug betrittst. Auch in Bewegung wirkbar.') },
      { name: 'Wind Blessed', state: 'new', text: windBlessed },
      { name: 'Elemental Insight', state: 'new', text: elementalInsight },
    ],
    removed: [],
  },
};
