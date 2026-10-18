/*
 * De Class Picker op /class-picker/ (Nutri, 19 oktober 2026: "make a new tool in
 * Tools called "Class Picker for new players" and make a 10-15 questionaire that
 * will decide what class and spec they will play").
 *
 * Elk antwoord geeft punten aan een of meer classes; de class met de meeste punten
 * wint, bij gelijke stand de eerste in `classOrder`. De spec volgt uit de rol en de
 * afstand die de speler koos. De aanbevelingen per activiteit zijn onze keuze; de
 * spec voor levelen volgt telkens de tabel bovenaan onze levelgids van die class.
 * Namen uit het spel (classes, specs, rassen) blijven Engels (SCHRIJFSTIJL.md §6).
 */
import type { Locale } from '../i18n/ui';

export type ClassId = 'warrior' | 'hunter' | 'mage' | 'rogue' | 'priest' | 'warlock' | 'paladin' | 'druid' | 'shaman';
type Words = Record<Locale, string>;
type Weights = Partial<Record<ClassId, number>>;

export const classOrder: ClassId[] = ['warrior', 'paladin', 'hunter', 'rogue', 'priest', 'shaman', 'mage', 'warlock', 'druid'];

export type PickerAnswer = { text: Words; weights: Weights; role?: 'tank' | 'healer' | 'damage'; range?: 'melee' | 'ranged'; faction?: 'alliance' | 'horde' };
export type PickerQuestion = { id: string; text: Words; answers: PickerAnswer[] };

export const pickerQuestions: PickerQuestion[] = [
  {
    id: 'role',
    text: { en: 'What do you want to do in a group?', nl: 'Wat wil je doen in een groep?', fr: 'Que veux-tu faire en groupe ?', es: '¿Qué quieres hacer en un grupo?', it: 'Cosa vuoi fare in un gruppo?', de: 'Was willst du in einer Gruppe machen?' },
    answers: [
      { text: { en: 'Stand in front and take the hits', nl: 'Vooraan staan en de klappen opvangen', fr: 'Être devant et encaisser les coups', es: 'Ir delante y aguantar los golpes', it: 'Stare davanti e incassare i colpi', de: 'Vorne stehen und die Schläge einstecken' }, weights: { warrior: 3, paladin: 2, druid: 2 }, role: 'tank' },
      { text: { en: 'Keep everyone alive', nl: 'Iedereen in leven houden', fr: 'Garder tout le monde en vie', es: 'Mantener a todos con vida', it: 'Tenere tutti in vita', de: 'Alle am Leben halten' }, weights: { priest: 3, paladin: 2, druid: 2, shaman: 2 }, role: 'healer' },
      { text: { en: 'Deal as much damage as possible', nl: 'Zoveel mogelijk schade doen', fr: 'Faire un maximum de dégâts', es: 'Hacer todo el daño posible', it: 'Fare più danni possibile', de: 'So viel Schaden wie möglich machen' }, weights: { rogue: 2, mage: 2, warlock: 2, hunter: 2, warrior: 1 }, role: 'damage' },
      { text: { en: 'No idea yet', nl: 'Nog geen idee', fr: 'Aucune idée pour l’instant', es: 'Todavía no lo sé', it: 'Non lo so ancora', de: 'Noch keine Ahnung' }, weights: {} },
    ],
  },
  {
    id: 'range',
    text: { en: 'Up close or from a distance?', nl: 'Van dichtbij of van op afstand?', fr: 'Au corps à corps ou à distance ?', es: '¿De cerca o a distancia?', it: 'Da vicino o a distanza?', de: 'Aus der Nähe oder aus der Ferne?' },
    answers: [
      { text: { en: 'Up close, in melee', nl: 'Van dichtbij, in melee', fr: 'Au corps à corps', es: 'De cerca, cuerpo a cuerpo', it: 'Da vicino, in mischia', de: 'Aus der Nähe, im Nahkampf' }, weights: { warrior: 2, rogue: 2, paladin: 1, shaman: 1, druid: 1 }, range: 'melee' },
      { text: { en: 'From a distance, with spells or a bow', nl: 'Van op afstand, met spreuken of een boog', fr: 'À distance, avec des sorts ou un arc', es: 'A distancia, con hechizos o un arco', it: 'A distanza, con incantesimi o un arco', de: 'Aus der Ferne, mit Zaubern oder einem Bogen' }, weights: { mage: 2, warlock: 2, hunter: 2, priest: 1 }, range: 'ranged' },
      { text: { en: 'A bit of both', nl: 'Een beetje van allebei', fr: 'Un peu des deux', es: 'Un poco de ambos', it: 'Un po’ di entrambi', de: 'Ein bisschen von beidem' }, weights: { druid: 2, shaman: 2, hunter: 1, paladin: 1 } },
      { text: { en: 'I don’t mind', nl: 'Maakt me niet uit', fr: 'Peu importe', es: 'Me da igual', it: 'Per me è uguale', de: 'Ist mir egal' }, weights: {} },
    ],
  },
  {
    id: 'hero',
    text: { en: 'Which hero speaks to you most?', nl: 'Welke held spreekt je het meest aan?', fr: 'Quel héros te parle le plus ?', es: '¿Qué héroe te atrae más?', it: 'Quale eroe ti attira di più?', de: 'Welcher Held spricht dich am meisten an?' },
    answers: [
      { text: { en: 'A fighter in heavy armor with a big weapon', nl: 'Een vechter in zware wapenrusting met een groot wapen', fr: 'Un combattant en armure lourde avec une grosse arme', es: 'Un luchador con armadura pesada y un arma enorme', it: 'Un combattente in armatura pesante con una grande arma', de: 'Ein Kämpfer in schwerer Rüstung mit einer großen Waffe' }, weights: { warrior: 3, paladin: 2 } },
      { text: { en: 'A caster who throws fire and ice', nl: 'Een caster die vuur en ijs gooit', fr: 'Un lanceur de sorts qui projette feu et glace', es: 'Un lanzador de hechizos de fuego y hielo', it: 'Un incantatore che scaglia fuoco e ghiaccio', de: 'Ein Zauberer, der Feuer und Eis schleudert' }, weights: { mage: 3, warlock: 1 } },
      { text: { en: 'An assassin who strikes from the shadows', nl: 'Een sluipmoordenaar die toeslaat vanuit de schaduw', fr: 'Un assassin qui frappe depuis l’ombre', es: 'Un asesino que ataca desde las sombras', it: 'Un assassino che colpisce dall’ombra', de: 'Ein Assassine, der aus den Schatten zuschlägt' }, weights: { rogue: 3, druid: 1 } },
      { text: { en: 'A hunter with a loyal beast at their side', nl: 'Een jager met een trouw beest naast zich', fr: 'Un chasseur avec une bête fidèle à ses côtés', es: 'Un cazador con una bestia fiel a su lado', it: 'Un cacciatore con una bestia fedele al suo fianco', de: 'Ein Jäger mit einem treuen Tier an seiner Seite' }, weights: { hunter: 3, druid: 1 } },
    ],
  },
  {
    id: 'magic',
    text: { en: 'And which of these?', nl: 'En welke van deze?', fr: 'Et lequel de ceux-ci ?', es: '¿Y cuál de estos?', it: 'E quale di questi?', de: 'Und welcher von diesen?' },
    answers: [
      { text: { en: 'A champion of the Holy Light', nl: 'Een kampioen van het Heilige Licht', fr: 'Un champion de la Lumière sacrée', es: 'Un campeón de la Luz Sagrada', it: 'Un campione della Luce Sacra', de: 'Ein Streiter des Heiligen Lichts' }, weights: { paladin: 3, priest: 3 } },
      { text: { en: 'A dark caster who commands demons', nl: 'Een duistere caster die demonen beveelt', fr: 'Un lanceur de sorts sombre qui commande des démons', es: 'Un lanzador oscuro que domina demonios', it: 'Un incantatore oscuro che comanda i demoni', de: 'Ein dunkler Zauberer, der Dämonen befehligt' }, weights: { warlock: 3, priest: 1 } },
      { text: { en: 'A shapeshifter who becomes a bear or a cat', nl: 'Een gedaanteverwisselaar die een beer of een kat wordt', fr: 'Un métamorphe qui devient ours ou félin', es: 'Un cambiaformas que se convierte en oso o felino', it: 'Un mutaforma che diventa orso o felino', de: 'Ein Gestaltwandler, der zum Bären oder zur Katze wird' }, weights: { druid: 3 } },
      { text: { en: 'A shaman who calls on the elements with totems', nl: 'Een shaman die met totems de elementen oproept', fr: 'Un chaman qui invoque les éléments avec des totems', es: 'Un chamán que invoca a los elementos con tótems', it: 'Uno sciamano che invoca gli elementi con i totem', de: 'Ein Schamane, der mit Totems die Elemente ruft' }, weights: { shaman: 3 } },
    ],
  },
  {
    id: 'pet',
    text: { en: 'Do you want a pet that fights with you?', nl: 'Wil je een huisdier dat met je meevecht?', fr: 'Veux-tu un familier qui combat avec toi ?', es: '¿Quieres una mascota que luche contigo?', it: 'Vuoi un famiglio che combatta con te?', de: 'Willst du ein Begleittier, das mit dir kämpft?' },
    answers: [
      { text: { en: 'Yes, I want a companion', nl: 'Ja, ik wil een metgezel', fr: 'Oui, je veux un compagnon', es: 'Sí, quiero un compañero', it: 'Sì, voglio un compagno', de: 'Ja, ich will einen Begleiter' }, weights: { hunter: 3, warlock: 3 } },
      { text: { en: 'No, I fight alone', nl: 'Nee, ik vecht alleen', fr: 'Non, je me bats seul', es: 'No, lucho solo', it: 'No, combatto da solo', de: 'Nein, ich kämpfe allein' }, weights: { warrior: 1, rogue: 1, mage: 1, priest: 1, paladin: 1, druid: 1, shaman: 1 } },
      { text: { en: 'I don’t mind', nl: 'Maakt me niet uit', fr: 'Peu importe', es: 'Me da igual', it: 'Per me è uguale', de: 'Ist mir egal' }, weights: {} },
    ],
  },
  {
    id: 'difficulty',
    text: { en: 'How hard may leveling be?', nl: 'Hoe moeilijk mag levelen zijn?', fr: 'Le leveling peut-il être difficile ?', es: '¿Cuánto puede costar subir de nivel?', it: 'Quanto può essere difficile salire di livello?', de: 'Wie schwer darf das Leveln sein?' },
    answers: [
      { text: { en: 'Easy and safe, I want to relax', nl: 'Makkelijk en veilig, ik wil ontspannen', fr: 'Facile et sûr, je veux me détendre', es: 'Fácil y seguro, quiero relajarme', it: 'Facile e sicuro, voglio rilassarmi', de: 'Leicht und sicher, ich will entspannen' }, weights: { hunter: 3, warlock: 2, paladin: 2, mage: 1 } },
      { text: { en: 'A bit of a challenge is fine', nl: 'Een beetje uitdaging is prima', fr: 'Un peu de défi, ça va', es: 'Un poco de reto está bien', it: 'Un po’ di sfida va bene', de: 'Ein bisschen Herausforderung ist okay' }, weights: { mage: 1, druid: 1, shaman: 1, priest: 1, rogue: 1 } },
      { text: { en: 'Hard is fine, I like to master a class', nl: 'Moeilijk mag, ik wil een class onder de knie krijgen', fr: 'Difficile, c’est bien, j’aime maîtriser une classe', es: 'Difícil está bien, me gusta dominar una clase', it: 'Difficile va bene, mi piace padroneggiare una classe', de: 'Schwer ist okay, ich will eine Klasse meistern' }, weights: { warrior: 3, rogue: 2, priest: 1 } },
    ],
  },
  {
    id: 'buttons',
    text: { en: 'How many buttons do you like to press?', nl: 'Hoeveel knoppen druk je graag in?', fr: 'Combien de touches aimes-tu utiliser ?', es: '¿Cuántos botones te gusta pulsar?', it: 'Quanti tasti ti piace premere?', de: 'Wie viele Tasten drückst du gern?' },
    answers: [
      { text: { en: 'Few, a simple rotation', nl: 'Weinig, een eenvoudige rotatie', fr: 'Peu, une rotation simple', es: 'Pocos, una rotación sencilla', it: 'Pochi, una rotazione semplice', de: 'Wenige, eine einfache Rotation' }, weights: { hunter: 2, paladin: 2, warlock: 1, mage: 1 } },
      { text: { en: 'A normal amount', nl: 'Een normale hoeveelheid', fr: 'Une quantité normale', es: 'Una cantidad normal', it: 'Una quantità normale', de: 'Eine normale Menge' }, weights: { rogue: 1, priest: 1, mage: 1, warlock: 1 } },
      { text: { en: 'Lots, I want a tool for everything', nl: 'Veel, ik wil voor alles een middel', fr: 'Beaucoup, je veux un outil pour tout', es: 'Muchos, quiero una herramienta para todo', it: 'Tanti, voglio uno strumento per tutto', de: 'Viele, ich will für alles ein Werkzeug' }, weights: { druid: 2, shaman: 2, warrior: 2 } },
    ],
  },
  {
    id: 'armor',
    text: { en: 'Which armor do you want to wear?', nl: 'Welke wapenrusting wil je dragen?', fr: 'Quelle armure veux-tu porter ?', es: '¿Qué armadura quieres llevar?', it: 'Quale armatura vuoi indossare?', de: 'Welche Rüstung willst du tragen?' },
    answers: [
      { text: { en: 'Heavy plate', nl: 'Zware plate', fr: 'Plaques lourdes', es: 'Placas pesadas', it: 'Piastre pesanti', de: 'Schwere Platte' }, weights: { warrior: 2, paladin: 2 } },
      { text: { en: 'Mail', nl: 'Mail', fr: 'Mailles', es: 'Malla', it: 'Maglia', de: 'Kette' }, weights: { hunter: 2, shaman: 2 } },
      { text: { en: 'Leather', nl: 'Leer', fr: 'Cuir', es: 'Cuero', it: 'Cuoio', de: 'Leder' }, weights: { rogue: 2, druid: 2 } },
      { text: { en: 'Cloth robes', nl: 'Gewaden van stof', fr: 'Robes en tissu', es: 'Túnicas de tela', it: 'Vesti di stoffa', de: 'Stoffroben' }, weights: { mage: 2, priest: 2, warlock: 2 } },
    ],
  },
  {
    id: 'survive',
    text: { en: 'How do you survive a hard fight?', nl: 'Hoe overleef je een zwaar gevecht?', fr: 'Comment survis-tu à un combat difficile ?', es: '¿Cómo sobrevives a un combate difícil?', it: 'Come sopravvivi a uno scontro difficile?', de: 'Wie überlebst du einen harten Kampf?' },
    answers: [
      { text: { en: 'I heal myself', nl: 'Ik heal mezelf', fr: 'Je me soigne', es: 'Me curo a mí mismo', it: 'Mi curo da solo', de: 'Ich heile mich selbst' }, weights: { paladin: 2, druid: 2, shaman: 2, priest: 2, warlock: 1 } },
      { text: { en: 'I take the hits and keep standing', nl: 'Ik vang de klappen op en blijf staan', fr: 'J’encaisse les coups et je tiens bon', es: 'Aguanto los golpes y sigo en pie', it: 'Incasso i colpi e resto in piedi', de: 'Ich stecke die Schläge ein und bleibe stehen' }, weights: { warrior: 2, paladin: 1, druid: 1 } },
      { text: { en: 'I keep enemies at a distance and control them', nl: 'Ik hou vijanden op afstand en onder controle', fr: 'Je garde les ennemis à distance et je les contrôle', es: 'Mantengo a los enemigos lejos y bajo control', it: 'Tengo i nemici a distanza e sotto controllo', de: 'Ich halte Gegner auf Abstand und kontrolliere sie' }, weights: { mage: 2, hunter: 2, warlock: 2 } },
      { text: { en: 'I pick my fights and vanish when needed', nl: 'Ik kies mijn gevechten en verdwijn als het moet', fr: 'Je choisis mes combats et je disparais si besoin', es: 'Elijo mis combates y desaparezco si hace falta', it: 'Scelgo i miei scontri e sparisco se serve', de: 'Ich wähle meine Kämpfe und verschwinde, wenn nötig' }, weights: { rogue: 3, druid: 1 } },
    ],
  },
  {
    id: 'perk',
    text: { en: 'Which perk sounds best?', nl: 'Welk voordeel klinkt het best?', fr: 'Quel avantage te plaît le plus ?', es: '¿Qué ventaja te gusta más?', it: 'Quale vantaggio ti piace di più?', de: 'Welcher Vorteil klingt am besten?' },
    answers: [
      { text: { en: 'Conjure food and water, and portals to the cities', nl: 'Eten en water maken, en portals naar de steden', fr: 'Invoquer nourriture et eau, et des portails vers les villes', es: 'Crear comida y agua, y portales a las ciudades', it: 'Evocare cibo e acqua, e portali per le città', de: 'Essen und Wasser herbeizaubern und Portale in die Städte' }, weights: { mage: 3 } },
      { text: { en: 'Summon friends to the dungeon and hand out healthstones', nl: 'Vrienden naar de dungeon summonen en healthstones uitdelen', fr: 'Invoquer ses amis au donjon et distribuer des pierres de soins', es: 'Invocar amigos a la mazmorra y repartir piedras de salud', it: 'Evocare gli amici alla spedizione e distribuire pietre della salute', de: 'Freunde zum Dungeon beschwören und Gesundheitssteine verteilen' }, weights: { warlock: 3 } },
      { text: { en: 'Stealth, and picking locks and lockboxes', nl: 'Stealth, en sloten en lockboxes openen', fr: 'Le camouflage, et crocheter serrures et coffres', es: 'Sigilo, y forzar cerraduras y cofres', it: 'Furtività, e scassinare serrature e forzieri', de: 'Verstohlenheit und Schlösser und Kassetten knacken' }, weights: { rogue: 3 } },
      { text: { en: 'Bringing fallen players back to life', nl: 'Gevallen spelers weer tot leven wekken', fr: 'Ramener les joueurs tombés à la vie', es: 'Devolver la vida a los jugadores caídos', it: 'Riportare in vita i giocatori caduti', de: 'Gefallene Spieler wiederbeleben' }, weights: { priest: 2, paladin: 2, shaman: 2, druid: 1 } },
      { text: { en: 'Shapeshift to run faster and swim underwater', nl: 'Van gedaante wisselen om sneller te lopen en onder water te zwemmen', fr: 'Changer de forme pour courir plus vite et nager sous l’eau', es: 'Cambiar de forma para correr más rápido y nadar bajo el agua', it: 'Cambiare forma per correre più veloce e nuotare sott’acqua', de: 'Die Gestalt wandeln, um schneller zu laufen und unter Wasser zu schwimmen' }, weights: { druid: 3, shaman: 1 } },
    ],
  },
  {
    id: 'hybrid',
    text: { en: 'Do you want to switch roles later?', nl: 'Wil je later van rol kunnen wisselen?', fr: 'Veux-tu pouvoir changer de rôle plus tard ?', es: '¿Quieres poder cambiar de rol más adelante?', it: 'Vuoi poter cambiare ruolo più avanti?', de: 'Willst du später die Rolle wechseln können?' },
    answers: [
      { text: { en: 'Yes, tank, heal and damage with one character', nl: 'Ja, tanken, healen en schade doen met één personage', fr: 'Oui, tank, soin et dégâts avec un seul personnage', es: 'Sí, tanque, sanador y daño con un solo personaje', it: 'Sì, tank, cure e danni con un solo personaggio', de: 'Ja, tanken, heilen und Schaden machen mit einem Charakter' }, weights: { druid: 3, paladin: 2, shaman: 2, priest: 1 } },
      { text: { en: 'No, I want to be great at one thing', nl: 'Nee, ik wil uitblinken in één ding', fr: 'Non, je veux exceller dans une seule chose', es: 'No, quiero ser muy bueno en una cosa', it: 'No, voglio eccellere in una cosa sola', de: 'Nein, ich will in einer Sache richtig gut sein' }, weights: { mage: 1, rogue: 1, warlock: 1, hunter: 1, warrior: 1 } },
      { text: { en: 'I don’t mind', nl: 'Maakt me niet uit', fr: 'Peu importe', es: 'Me da igual', it: 'Per me è uguale', de: 'Ist mir egal' }, weights: {} },
    ],
  },
  {
    id: 'content',
    text: { en: 'Where will you spend most of your time?', nl: 'Waar breng je de meeste tijd door?', fr: 'Où passeras-tu le plus de temps ?', es: '¿Dónde pasarás más tiempo?', it: 'Dove passerai la maggior parte del tempo?', de: 'Wo verbringst du die meiste Zeit?' },
    answers: [
      { text: { en: 'Questing and farming on my own', nl: 'Alleen questen en farmen', fr: 'Quêtes et farm en solo', es: 'Haciendo misiones y farmeando solo', it: 'Missioni e farm da solo', de: 'Allein questen und farmen' }, weights: { hunter: 2, warlock: 2, druid: 1, mage: 1, paladin: 1 } },
      { text: { en: 'Dungeons and raids with others', nl: 'Dungeons en raids met anderen', fr: 'Donjons et raids avec d’autres', es: 'Mazmorras y bandas con otros', it: 'Spedizioni e incursioni con altri', de: 'Dungeons und Raids mit anderen' }, weights: { priest: 1, warrior: 1, mage: 1, rogue: 1, shaman: 1, paladin: 1 } },
      { text: { en: 'A mix of both', nl: 'Een mix van allebei', fr: 'Un mélange des deux', es: 'Una mezcla de ambos', it: 'Un mix di entrambi', de: 'Eine Mischung aus beidem' }, weights: { druid: 1, shaman: 1, paladin: 1 } },
    ],
  },
  {
    id: 'pvp',
    text: { en: 'How much do you like PvP?', nl: 'Hoeveel hou je van PvP?', fr: 'À quel point aimes-tu le PvP ?', es: '¿Cuánto te gusta el PvP?', it: 'Quanto ti piace il PvP?', de: 'Wie sehr magst du PvP?' },
    answers: [
      { text: { en: 'A lot: duels, battlegrounds and world PvP', nl: 'Heel graag: duels, battlegrounds en world PvP', fr: 'Beaucoup : duels, champs de bataille et PvP sauvage', es: 'Mucho: duelos, campos de batalla y PvP en el mundo', it: 'Molto: duelli, campi di battaglia e PvP nel mondo', de: 'Sehr: Duelle, Schlachtfelder und Open-World-PvP' }, weights: { rogue: 2, warrior: 1, priest: 1, mage: 1, warlock: 1, druid: 1 } },
      { text: { en: 'Now and then', nl: 'Af en toe', fr: 'De temps en temps', es: 'De vez en cuando', it: 'Ogni tanto', de: 'Ab und zu' }, weights: {} },
      { text: { en: 'Not at all', nl: 'Helemaal niet', fr: 'Pas du tout', es: 'Nada', it: 'Per niente', de: 'Gar nicht' }, weights: {} },
    ],
  },
  {
    id: 'faction',
    text: { en: 'Which faction do you play?', nl: 'Welke factie speel je?', fr: 'Quelle faction joues-tu ?', es: '¿Qué facción juegas?', it: 'Quale fazione giochi?', de: 'Welche Fraktion spielst du?' },
    answers: [
      { text: { en: 'Alliance', nl: 'Alliance', fr: 'Alliance', es: 'Alliance', it: 'Alliance', de: 'Alliance' }, weights: {}, faction: 'alliance' },
      { text: { en: 'Horde', nl: 'Horde', fr: 'Horde', es: 'Horde', it: 'Horde', de: 'Horde' }, weights: {}, faction: 'horde' },
      { text: { en: 'Not decided yet', nl: 'Nog niet beslist', fr: 'Pas encore décidé', es: 'Aún no lo he decidido', it: 'Non ho ancora deciso', de: 'Noch nicht entschieden' }, weights: {} },
    ],
  },
];

/** Per activiteit de spec die wij aanraden, en bij dungeons en raids de rol erbij. */
export type Activity = 'leveling' | 'dungeons' | 'raids' | 'solo' | 'pvp';
export type Pick = { spec: string; role?: 'tank' | 'healer' | 'damage' };

export type PickerClass = {
  id: ClassId;
  name: string;
  pitch: Words;
  /** De spec om mee te beginnen per rol; `damage` geldt ook zonder voorkeur. */
  start: { tank?: string; healer?: string; damage: string; damageRanged?: string; damageMelee?: string };
  picks: Record<Activity, Pick[]>;
  races: { alliance: string; horde: string };
};

export const pickerClasses: Record<ClassId, PickerClass> = {
  warrior: {
    id: 'warrior',
    name: 'Warrior',
    pitch: {
      en: 'The plate fighter who builds Rage by fighting. A slow start, but the best tank and huge damage once the gear is there.',
      nl: 'De vechter in plate die Rage opbouwt door te vechten. Een trage start, maar de beste tank en enorme schade zodra de uitrusting er is.',
      fr: 'Le combattant en plaques qui génère de la Rage en se battant. Un début lent, mais le meilleur tank et d’énormes dégâts une fois bien équipé.',
      es: 'El luchador con placas que genera Ira peleando. Un comienzo lento, pero el mejor tanque y un daño enorme cuando tiene buen equipo.',
      it: 'Il combattente in piastre che accumula Rabbia combattendo. Un inizio lento, ma il miglior tank e danni enormi con il giusto equipaggiamento.',
      de: 'Der Kämpfer in Platte, der im Kampf Wut aufbaut. Ein langsamer Start, aber der beste Tank und enormer Schaden mit guter Ausrüstung.',
    },
    start: { tank: 'Protection', damage: 'Arms' },
    picks: {
      leveling: [{ spec: 'Arms' }],
      dungeons: [{ spec: 'Protection', role: 'tank' }, { spec: 'Fury', role: 'damage' }],
      raids: [{ spec: 'Fury', role: 'damage' }, { spec: 'Protection', role: 'tank' }],
      solo: [{ spec: 'Arms' }],
      pvp: [{ spec: 'Arms' }],
    },
    races: { alliance: 'Human, Dwarf, Night Elf, Gnome, High Order', horde: 'Orc, Troll, Tauren, Undead, Windshaper' },
  },
  paladin: {
    id: 'paladin',
    name: 'Paladin',
    pitch: {
      en: 'A holy fighter in plate who heals, protects and fights. Very hard to kill, and welcome in every group.',
      nl: 'Een heilige vechter in plate die healt, beschermt en vecht. Heel moeilijk te doden, en welkom in elke groep.',
      fr: 'Un combattant sacré en plaques qui soigne, protège et se bat. Très dur à tuer, et bienvenu dans chaque groupe.',
      es: 'Un luchador sagrado con placas que cura, protege y pelea. Muy difícil de matar y bienvenido en cualquier grupo.',
      it: 'Un combattente sacro in piastre che cura, protegge e combatte. Difficilissimo da uccidere e benvenuto in ogni gruppo.',
      de: 'Ein heiliger Kämpfer in Platte, der heilt, schützt und kämpft. Sehr schwer zu töten und in jeder Gruppe willkommen.',
    },
    start: { tank: 'Protection', healer: 'Holy', damage: 'Retribution' },
    picks: {
      leveling: [{ spec: 'Retribution' }],
      dungeons: [{ spec: 'Holy', role: 'healer' }, { spec: 'Protection', role: 'tank' }],
      raids: [{ spec: 'Holy', role: 'healer' }],
      solo: [{ spec: 'Retribution' }],
      pvp: [{ spec: 'Holy' }],
    },
    races: { alliance: 'Human, Dwarf', horde: 'Undead' },
  },
  hunter: {
    id: 'hunter',
    name: 'Hunter',
    pitch: {
      en: 'A ranged fighter with a pet that holds the monsters for you. One of the easiest and safest classes to level.',
      nl: 'Een vechter op afstand met een huisdier dat de monsters voor je vasthoudt. Een van de makkelijkste en veiligste classes om te levelen.',
      fr: 'Un combattant à distance avec un familier qui retient les monstres pour toi. L’une des classes les plus faciles et sûres à monter.',
      es: 'Un luchador a distancia con una mascota que entretiene a los monstruos por ti. Una de las clases más fáciles y seguras para subir.',
      it: 'Un combattente a distanza con un famiglio che tiene occupati i mostri al posto tuo. Una delle classi più facili e sicure da livellare.',
      de: 'Ein Fernkämpfer mit einem Begleiter, der die Monster für dich festhält. Eine der leichtesten und sichersten Klassen zum Leveln.',
    },
    start: { damage: 'Beast Mastery' },
    picks: {
      leveling: [{ spec: 'Beast Mastery' }],
      dungeons: [{ spec: 'Marksmanship', role: 'damage' }],
      raids: [{ spec: 'Marksmanship', role: 'damage' }],
      solo: [{ spec: 'Beast Mastery' }],
      pvp: [{ spec: 'Marksmanship' }],
    },
    races: { alliance: 'Human, Dwarf, Night Elf, High Order', horde: 'Orc, Troll, Tauren, Windshaper' },
  },
  rogue: {
    id: 'rogue',
    name: 'Rogue',
    pitch: {
      en: 'Stealth, poisons and fast strikes. You choose when the fight starts, and vanish when it goes wrong.',
      nl: 'Stealth, gif en snelle aanvallen. Jij kiest wanneer het gevecht begint, en je verdwijnt als het misloopt.',
      fr: 'Camouflage, poisons et frappes rapides. Tu choisis quand le combat commence, et tu disparais si ça tourne mal.',
      es: 'Sigilo, venenos y golpes rápidos. Tú eliges cuándo empieza el combate y desapareces si sale mal.',
      it: 'Furtività, veleni e colpi rapidi. Scegli tu quando inizia lo scontro, e sparisci se va male.',
      de: 'Verstohlenheit, Gifte und schnelle Schläge. Du bestimmst, wann der Kampf beginnt, und verschwindest, wenn es schiefgeht.',
    },
    start: { damage: 'Combat' },
    picks: {
      leveling: [{ spec: 'Combat' }],
      dungeons: [{ spec: 'Combat', role: 'damage' }],
      raids: [{ spec: 'Combat', role: 'damage' }],
      solo: [{ spec: 'Combat' }],
      pvp: [{ spec: 'Subtlety' }],
    },
    races: { alliance: 'Human, Dwarf, Night Elf, Gnome, High Order', horde: 'Orc, Troll, Undead, Windshaper' },
  },
  priest: {
    id: 'priest',
    name: 'Priest',
    pitch: {
      en: 'The healer every group looks for, with shields and strong heals, and a dark Shadow side for damage.',
      nl: 'De healer die elke groep zoekt, met shields en sterke heals, en een duistere Shadow-kant voor schade.',
      fr: 'Le soigneur que chaque groupe cherche, avec boucliers et soins puissants, et un côté Ombre pour les dégâts.',
      es: 'El sanador que todo grupo busca, con escudos y curas potentes, y un lado oscuro de Sombra para el daño.',
      it: 'Il guaritore che ogni gruppo cerca, con scudi e cure potenti, e un lato oscuro dell’Ombra per i danni.',
      de: 'Der Heiler, den jede Gruppe sucht, mit Schilden und starken Heilungen, und einer dunklen Schattenseite für Schaden.',
    },
    start: { healer: 'Holy', damage: 'Discipline' },
    picks: {
      leveling: [{ spec: 'Discipline' }],
      dungeons: [{ spec: 'Holy', role: 'healer' }, { spec: 'Discipline', role: 'healer' }],
      raids: [{ spec: 'Holy', role: 'healer' }],
      solo: [{ spec: 'Shadow' }],
      pvp: [{ spec: 'Shadow' }, { spec: 'Discipline' }],
    },
    races: { alliance: 'Human, Dwarf, Night Elf, Gnome', horde: 'Troll, Undead' },
  },
  shaman: {
    id: 'shaman',
    name: 'Shaman',
    pitch: {
      en: 'Totems, the power of the elements and a big two-handed weapon. Heals, casts or fights in melee.',
      nl: 'Totems, de kracht van de elementen en een groot tweehandig wapen. Healt, cast of vecht in melee.',
      fr: 'Des totems, la puissance des éléments et une grande arme à deux mains. Soigne, lance des sorts ou se bat au corps à corps.',
      es: 'Tótems, el poder de los elementos y una gran arma a dos manos. Cura, lanza hechizos o lucha cuerpo a cuerpo.',
      it: 'Totem, il potere degli elementi e una grande arma a due mani. Cura, lancia incantesimi o combatte in mischia.',
      de: 'Totems, die Macht der Elemente und eine große Zweihandwaffe. Heilt, zaubert oder kämpft im Nahkampf.',
    },
    start: { healer: 'Restoration', damage: 'Enhancement', damageRanged: 'Elemental' },
    picks: {
      leveling: [{ spec: 'Enhancement' }],
      dungeons: [{ spec: 'Restoration', role: 'healer' }],
      raids: [{ spec: 'Restoration', role: 'healer' }],
      solo: [{ spec: 'Enhancement' }],
      pvp: [{ spec: 'Elemental' }],
    },
    races: { alliance: 'Dwarf', horde: 'Orc, Troll, Tauren, Windshaper' },
  },
  mage: {
    id: 'mage',
    name: 'Mage',
    pitch: {
      en: 'Fire, frost and arcane magic, with free food and water and portals to the cities. Great at killing many monsters at once.',
      nl: 'Vuur-, ijs- en arcane magie, met gratis eten en water en portals naar de steden. Sterk in veel monsters tegelijk doden.',
      fr: 'Magie de feu, de givre et des arcanes, avec nourriture et eau gratuites et des portails vers les villes. Excellent pour tuer beaucoup de monstres à la fois.',
      es: 'Magia de fuego, escarcha y arcana, con comida y agua gratis y portales a las ciudades. Ideal para matar muchos monstruos a la vez.',
      it: 'Magia del fuoco, del gelo e arcana, con cibo e acqua gratis e portali per le città. Ottimo per uccidere tanti mostri insieme.',
      de: 'Feuer-, Frost- und Arkanmagie, mit kostenlosem Essen und Wasser und Portalen in die Städte. Stark darin, viele Monster auf einmal zu töten.',
    },
    start: { damage: 'Frost' },
    picks: {
      leveling: [{ spec: 'Frost' }],
      dungeons: [{ spec: 'Frost', role: 'damage' }],
      raids: [{ spec: 'Fire', role: 'damage' }, { spec: 'Frost', role: 'damage' }],
      solo: [{ spec: 'Frost' }],
      pvp: [{ spec: 'Frost' }],
    },
    races: { alliance: 'Human, Gnome, High Order', horde: 'Orc, Troll, Undead' },
  },
  warlock: {
    id: 'warlock',
    name: 'Warlock',
    pitch: {
      en: 'Demons, curses and Fear. Rarely needs to drink, and summons the whole group to the dungeon.',
      nl: 'Demonen, curses en Fear. Hoeft zelden te drinken, en summont de hele groep naar de dungeon.',
      fr: 'Des démons, des malédictions et la Peur. Boit rarement, et invoque tout le groupe au donjon.',
      es: 'Demonios, maldiciones y Miedo. Casi nunca necesita beber e invoca a todo el grupo a la mazmorra.',
      it: 'Demoni, maledizioni e Paura. Raramente deve bere, e evoca tutto il gruppo alla spedizione.',
      de: 'Dämonen, Flüche und Furcht. Muss selten trinken und beschwört die ganze Gruppe zum Dungeon.',
    },
    start: { damage: 'Affliction' },
    picks: {
      leveling: [{ spec: 'Affliction' }],
      dungeons: [{ spec: 'Destruction', role: 'damage' }],
      raids: [{ spec: 'Destruction', role: 'damage' }],
      solo: [{ spec: 'Affliction' }],
      pvp: [{ spec: 'Affliction' }],
    },
    races: { alliance: 'Human, Gnome', horde: 'Orc, Troll, Undead' },
  },
  druid: {
    id: 'druid',
    name: 'Druid',
    pitch: {
      en: 'A shapeshifter who tanks as a bear, fights as a cat, heals or casts. The most flexible class in the game.',
      nl: 'Een gedaanteverwisselaar die tankt als beer, vecht als kat, healt of cast. De meest veelzijdige class van het spel.',
      fr: 'Un métamorphe qui tanke en ours, se bat en félin, soigne ou lance des sorts. La classe la plus polyvalente du jeu.',
      es: 'Un cambiaformas que tanquea como oso, lucha como felino, cura o lanza hechizos. La clase más versátil del juego.',
      it: 'Un mutaforma che fa da tank come orso, combatte come felino, cura o lancia incantesimi. La classe più versatile del gioco.',
      de: 'Ein Gestaltwandler, der als Bär tankt, als Katze kämpft, heilt oder zaubert. Die vielseitigste Klasse im Spiel.',
    },
    start: { tank: 'Feral', healer: 'Restoration', damage: 'Feral', damageRanged: 'Balance' },
    picks: {
      leveling: [{ spec: 'Feral' }],
      dungeons: [{ spec: 'Feral', role: 'tank' }, { spec: 'Restoration', role: 'healer' }],
      raids: [{ spec: 'Restoration', role: 'healer' }],
      solo: [{ spec: 'Feral' }],
      pvp: [{ spec: 'Restoration' }, { spec: 'Balance' }],
    },
    races: { alliance: 'Night Elf, High Order', horde: 'Tauren, Windshaper' },
  },
};

/** De slug van een BiS-lijst van de beta voor deze class en spec. */
export function bisSlug(id: ClassId, spec: string, role?: string): string {
  if (id === 'druid' && spec === 'Feral' && role === 'tank') return 'druid-feral-tank';
  return `${id}-${spec.toLowerCase().replace(/ /g, '-')}`;
}
