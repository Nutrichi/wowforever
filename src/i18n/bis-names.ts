/*
 * Wat tussen haakjes achter een item-, enchant- of gemnaam in de BiS-data
 * staat, in de taal van de pagina (fase 9, Nutri 15 september 2026: de kleine
 * rest van BIS mag meteen opgeruimd worden).
 *
 * De naam zelf is een naam uit het spel en blijft Engels. Stats blijven ook
 * Engels (Int, Agi, crit, hit, mastery; SCHRIJFSTIJL.md §6). Wat vertaald
 * wordt, zijn de gewone woorden eromheen: gem socket, all stats, minor run
 * speed, meta activator.
 *
 * Interne notities uit de data (in welke fase een gem komt, wat nog na te
 * kijken is) zijn geen informatie voor de lezer en verdwijnen in elke taal,
 * ook in het Engels.
 *
 * Volgorde telt: de langste en meest specifieke patronen eerst.
 */

import type { Locale } from './ui';

type Rule = { pattern: RegExp } & Partial<Record<Exclude<Locale, 'en'>, string>>;

/** Notities voor de redactie, geen informatie voor de lezer. */
const notes: RegExp[] = [
  /;\s*recipe availability in P\d+\+? to verify/gi,
  /;\s*haste gems arrive with P\d+\+?/gi,
  /;\s*[A-Z][\w' ]+? from P\d+\+?(?=\))/g,
  /,\s*pre-T\d+/gi,
  /,\s*Phase \d+(?:\s*&\s*\d+)*/gi,
  /,\s*Tier \d+(?=\))/g,
];

const rules: Rule[] = [
  // Gems: voorwaarden voor de meta gem.
  { pattern: /needs (\d+) red \/ (\d+) yellow \/ (\d+) blue/g, nl: 'vraagt $1 rode, $2 gele en $3 blauwe gems', fr: 'demande $1 rouges, $2 jaunes et $3 bleues', es: 'pide $1 rojas, $2 amarillas y $3 azules', it: 'richiede $1 rosse, $2 gialle e $3 blu', de: 'braucht $1 rote, $2 gelbe und $3 blaue' },
  { pattern: /needs (\d+) blue gems/g, nl: 'vraagt $1 blauwe gems', fr: 'demande $1 gemmes bleues', es: 'pide $1 gemas azules', it: 'richiede $1 gemme blu', de: 'braucht $1 blaue Edelsteine' },
  { pattern: /requires two blue\/purple\/green gems/g, nl: 'vraagt twee blauwe, paarse of groene gems', fr: 'demande deux gemmes bleues, violettes ou vertes', es: 'pide dos gemas azules, moradas o verdes', it: 'richiede due gemme blu, viola o verdi', de: 'braucht zwei blaue, violette oder grüne Edelsteine' },
  { pattern: /two of these keep the meta active/g, nl: 'twee hiervan houden de meta actief', fr: 'deux de celles-ci gardent la méta active', es: 'dos de estas mantienen activa la meta', it: 'due di queste tengono attiva la meta', de: 'zwei davon halten den Meta aktiv' },
  { pattern: /two keep the meta active/g, nl: 'twee houden de meta actief', fr: 'deux gardent la méta active', es: 'dos mantienen activa la meta', it: 'due tengono attiva la meta', de: 'zwei halten den Meta aktiv' },
  { pattern: /meta requirements must be met/g, nl: 'aan de voorwaarden van de meta moet voldaan zijn', fr: 'les conditions de la méta doivent être remplies', es: 'hay que cumplir los requisitos de la meta', it: 'i requisiti della meta devono essere soddisfatti', de: 'die Bedingungen des Meta müssen erfüllt sein' },
  { pattern: /activates the meta gem by itself/g, nl: 'activeert de meta gem op zichzelf', fr: 'active la gemme méta à elle seule', es: 'activa la gema meta por sí sola', it: 'attiva da sola la gemma meta', de: 'aktiviert den Meta-Edelstein allein' },
  { pattern: /the only blue gem needed/g, nl: 'de enige blauwe gem die je nodig hebt', fr: 'la seule gemme bleue nécessaire', es: 'la única gema azul necesaria', it: 'l’unica gemma blu necessaria', de: 'der einzige nötige blaue Edelstein' },
  { pattern: /minimum needed for meta/g, nl: 'minimum voor de meta', fr: 'minimum pour la méta', es: 'mínimo para la meta', it: 'minimo per la meta', de: 'Minimum für den Meta' },
  { pattern: /meta activator/g, nl: 'activeert de meta', fr: 'active la méta', es: 'activa la meta', it: 'attiva la meta', de: 'aktiviert den Meta' },
  { pattern: /activate with Nightmare Tear/g, nl: 'activeer met Nightmare Tear', fr: 'à activer avec Nightmare Tear', es: 'actívala con Nightmare Tear', it: 'da attivare con Nightmare Tear', de: 'mit Nightmare Tear aktivieren' },

  // Gems: legendary en alternatieven.
  { pattern: /Legendary · Wrathion questline/g, nl: 'legendarisch · questreeks van Wrathion', fr: 'légendaire · suite de quêtes de Wrathion', es: 'legendario · cadena de misiones de Wrathion', it: 'leggendario · catena di missioni di Wrathion', de: 'legendär · Questreihe von Wrathion' },
  { pattern: /; (\w+) Primal Diamond otherwise/g, nl: '; anders $1 Primal Diamond', fr: '; sinon $1 Primal Diamond', es: '; si no, $1 Primal Diamond', it: '; altrimenti $1 Primal Diamond', de: '; sonst $1 Primal Diamond' },
  { pattern: /; (\w+) Primal Diamond for progression/g, nl: '; $1 Primal Diamond tijdens progressie', fr: '; $1 Primal Diamond pendant la progression', es: '; $1 Primal Diamond durante el progreso', it: '; $1 Primal Diamond durante il progress', de: '; $1 Primal Diamond während des Progress' },

  // Gems: effecten.
  { pattern: /chance to restore mana on (?:spellcast|cast)/g, nl: 'kans om mana te herstellen bij een spell', fr: 'chance de rendre du mana en lançant un sort', es: 'probabilidad de recuperar maná al lanzar', it: 'probabilità di recuperare mana al lancio', de: 'Chance, beim Zaubern Mana wiederherzustellen' },
  { pattern: /chance on hit to gain (\d+)% armor/g, nl: 'kans om bij een treffer $1% armor te krijgen', fr: 'chance de gagner $1 % d’armure en étant touché', es: 'probabilidad de ganar un $1% de armadura al recibir un golpe', it: 'probabilità di ottenere il $1% di armatura quando si viene colpiti', de: 'Chance, bei Treffer $1 % Rüstung zu erhalten' },
  { pattern: /\+(\d+)% healing crit effect/g, nl: '+$1% crit-effect van heals', fr: '+$1 % d’effet critique des soins', es: '+$1% de efecto crítico de sanación', it: '+$1% di effetto critico delle cure', de: '+$1 % kritischer Heileffekt' },
  { pattern: /(\d+)% increased crit effect/g, nl: '$1% sterker crit-effect', fr: 'effet critique augmenté de $1 %', es: 'efecto crítico aumentado un $1%', it: 'effetto critico aumentato del $1%', de: '$1 % erhöhter kritischer Effekt' },
  { pattern: /\+(\d+)% armor from items/g, nl: '+$1% armor van items', fr: '+$1 % d’armure des objets', es: '+$1% de armadura de objetos', it: '+$1% di armatura dagli oggetti', de: '+$1 % Rüstung durch Gegenstände' },
  { pattern: /mana-restore proc/g, nl: 'proc die mana herstelt', fr: 'proc qui rend du mana', es: 'proc que recupera maná', it: 'proc che recupera mana', de: 'Proc, der Mana wiederherstellt' },
  { pattern: /stun resist/g, nl: 'weerstand tegen stuns', fr: 'résistance aux étourdissements', es: 'resistencia a aturdimientos', it: 'resistenza agli stordimenti', de: 'Betäubungswiderstand' },

  // Gems: raad bij het kiezen.
  { pattern: /if better than matching a socket bonus/g, nl: 'als dat beter is dan de socketbonus', fr: 'si c’est mieux que le bonus de châsse', es: 'si es mejor que la bonificación de ranura', it: 'se è meglio del bonus d’incavo', de: 'wenn das besser ist als der Sockelbonus' },
  { pattern: /converts to hit for Balance/g, nl: 'wordt hit voor Balance', fr: 'devient du hit pour Balance', es: 'se convierte en hit para Balance', it: 'diventa hit per Balance', de: 'wird für Balance zu Hit' },
  { pattern: /ignore weak socket bonuses/g, nl: 'negeer zwakke socketbonussen', fr: 'ignorez les bonus de châsse faibles', es: 'ignora las bonificaciones de ranura débiles', it: 'ignora i bonus d’incavo deboli', de: 'schwache Sockelboni ignorieren' },
  { pattern: /personal preference: mana regen vs raw healing/g, nl: 'persoonlijke keuze: mana regen of meer healing', fr: 'préférence personnelle : régénération de mana ou soins bruts', es: 'preferencia personal: regeneración de maná o sanación pura', it: 'preferenza personale: rigenerazione di mana o cure pure', de: 'persönliche Wahl: Manaregeneration oder mehr Heilung' },
  { pattern: /stamina everywhere once defense-capped/g, nl: 'stamina overal zodra defense gecapt is', fr: 'de la stamina partout une fois la défense au plafond', es: 'stamina en todas partes con la defensa al tope', it: 'stamina ovunque una volta al limite di difesa', de: 'überall Stamina, sobald Verteidigung gecappt ist' },
  { pattern: /stamina in every socket once uncrushable/g, nl: 'stamina in elke socket zodra je uncrushable bent', fr: 'de la stamina dans chaque châsse une fois uncrushable', es: 'stamina en cada ranura una vez uncrushable', it: 'stamina in ogni incavo una volta uncrushable', de: 'Stamina in jedem Sockel, sobald uncrushable' },
  { pattern: /\(pure stamina\)/g, nl: '(alleen stamina)', fr: '(stamina pure)', es: '(solo stamina)', it: '(solo stamina)', de: '(nur Stamina)' },
  { pattern: /\(e\.g\. a Spirit\/Mp5 hybrid\)/g, nl: '(bijvoorbeeld een hybride met Spirit en Mp5)', fr: '(par exemple une hybride Spirit/Mp5)', es: '(por ejemplo, una híbrida Spirit/Mp5)', it: '(per esempio un’ibrida Spirit/Mp5)', de: '(zum Beispiel ein Spirit/Mp5-Hybrid)' },
  { pattern: /\(rare\)/g, nl: '(zeldzaam)', fr: '(rare)', es: '(raro)', it: '(raro)', de: '(selten)' },

  // Gems: de uitleg achter het streepje (B2, Nutri 15 september 2026). Eerst
  // de lange zinnen, dan de korte stukken die in meerdere zinnen terugkomen.
  { pattern: /No meta · Wolfshead Helm has no meta socket and still wins the slot/g, nl: 'Geen meta · Wolfshead Helm heeft geen meta socket en is toch de beste keuze', fr: 'Pas de méta · Wolfshead Helm n’a pas de châsse méta et reste le meilleur choix', es: 'Sin meta · Wolfshead Helm no tiene ranura meta y sigue siendo la mejor opción', it: 'Nessuna meta · Wolfshead Helm non ha un incavo meta e resta la scelta migliore', de: 'Kein Meta · Wolfshead Helm hat keinen Meta-Sockel und bleibt trotzdem die beste Wahl' },
  { pattern: /often skipped since Wolfshead Helm outperforms any meta-socketed helm/g, nl: 'vaak overgeslagen, want Wolfshead Helm is beter dan elke helm met een meta socket', fr: 'souvent ignorée, car Wolfshead Helm surpasse tout casque avec châsse méta', es: 'a menudo se omite, porque Wolfshead Helm supera a cualquier casco con ranura meta', it: 'spesso saltata, perché Wolfshead Helm supera ogni elmo con incavo meta', de: 'oft ausgelassen, weil Wolfshead Helm jeden Helm mit Meta-Sockel übertrifft' },
  { pattern: /rarely needed since Wolfshead Helm skips the meta socket/g, nl: 'zelden nodig, want Wolfshead Helm heeft geen meta socket', fr: 'rarement utile, car Wolfshead Helm n’a pas de châsse méta', es: 'rara vez necesaria, porque Wolfshead Helm no tiene ranura meta', it: 'raramente necessaria, perché Wolfshead Helm non ha un incavo meta', de: 'selten nötig, weil Wolfshead Helm keinen Meta-Sockel hat' },
  { pattern: /used in nearly all sockets; only match other colors for strong socket bonuses/g, nl: 'in bijna elke socket; andere kleuren alleen voor sterke socketbonussen', fr: 'dans presque toutes les châsses ; autres couleurs seulement pour les bons bonus de châsse', es: 'en casi todas las ranuras; otros colores solo para bonificaciones de ranura fuertes', it: 'in quasi tutti gli incavi; altri colori solo per bonus d’incavo forti', de: 'in fast jedem Sockel; andere Farben nur für starke Sockelboni' },
  { pattern: /only for strong socket bonuses, otherwise red/g, nl: 'alleen voor sterke socketbonussen, anders rood', fr: 'seulement pour les bons bonus de châsse, sinon rouge', es: 'solo para bonificaciones de ranura fuertes; si no, rojo', it: 'solo per bonus d’incavo forti, altrimenti rosso', de: 'nur für starke Sockelboni, sonst rot' },
  { pattern: /only for meta activation or strong socket bonuses/g, nl: 'alleen om de meta te activeren of voor sterke socketbonussen', fr: 'seulement pour activer la méta ou pour les bons bonus de châsse', es: 'solo para activar la meta o para bonificaciones de ranura fuertes', it: 'solo per attivare la meta o per bonus d’incavo forti', de: 'nur zum Aktivieren des Meta oder für starke Sockelboni' },
  { pattern: /used regardless of socket color to maximize Strength/g, nl: 'in elke socket, ongeacht de kleur, voor zoveel mogelijk Strength', fr: 'quelle que soit la couleur de la châsse, pour un maximum de Strength', es: 'sin importar el color de la ranura, para maximizar Strength', it: 'a prescindere dal colore dell’incavo, per massimizzare Strength', de: 'unabhängig von der Sockelfarbe, für möglichst viel Strength' },
  { pattern: /used regardless of socket color/g, nl: 'in elke socket, ongeacht de kleur', fr: 'quelle que soit la couleur de la châsse', es: 'sin importar el color de la ranura', it: 'a prescindere dal colore dell’incavo', de: 'unabhängig von der Sockelfarbe' },
  { pattern: /used in most sockets regardless of color/g, nl: 'in de meeste sockets, ongeacht de kleur', fr: 'dans la plupart des châsses, quelle que soit la couleur', es: 'en la mayoría de las ranuras, sin importar el color', it: 'nella maggior parte degli incavi, a prescindere dal colore', de: 'in den meisten Sockeln, unabhängig von der Farbe' },
  { pattern: /ignore yellow socket bonuses in favor of pure Strength/g, nl: 'negeer gele socketbonussen en kies puur Strength', fr: 'ignorez les bonus de châsse jaunes au profit de la Strength pure', es: 'ignora las bonificaciones de ranura amarillas en favor de Strength pura', it: 'ignora i bonus d’incavo gialli a favore di Strength pura', de: 'gelbe Sockelboni ignorieren, zugunsten von reiner Strength' },
  { pattern: /ignore yellow bonuses, stack Strength/g, nl: 'negeer gele bonussen, stapel Strength', fr: 'ignorez les bonus jaunes, cumulez la Strength', es: 'ignora las bonificaciones amarillas, acumula Strength', it: 'ignora i bonus gialli, accumula Strength', de: 'gelbe Boni ignorieren, Strength stapeln' },
  { pattern: /ignore non-red\/yellow socket bonuses/g, nl: 'negeer socketbonussen die niet rood of geel zijn', fr: 'ignorez les bonus de châsse qui ne sont ni rouges ni jaunes', es: 'ignora las bonificaciones de ranura que no sean rojas o amarillas', it: 'ignora i bonus d’incavo che non sono rossi o gialli', de: 'Sockelboni ignorieren, die nicht rot oder gelb sind' },
  { pattern: /occasional pick near a haste breakpoint, also unlocks the meta/g, nl: 'soms gekozen vlak bij een haste breakpoint, activeert ook de meta', fr: 'choix ponctuel près d’un palier de haste, active aussi la méta', es: 'elección ocasional cerca de un umbral de haste, también activa la meta', it: 'scelta occasionale vicino a una soglia di haste, attiva anche la meta', de: 'gelegentlich nahe einem Haste-Breakpoint, aktiviert auch den Meta' },
  { pattern: /any blue\/green gem sufficient to activate the meta/g, nl: 'elke blauwe of groene gem die de meta activeert', fr: 'toute gemme bleue ou verte qui active la méta', es: 'cualquier gema azul o verde que active la meta', it: 'qualsiasi gemma blu o verde che attivi la meta', de: 'jeder blaue oder grüne Edelstein, der den Meta aktiviert' },
  { pattern: /any blue gem sufficient to activate the meta/g, nl: 'elke blauwe gem die de meta activeert', fr: 'toute gemme bleue qui active la méta', es: 'cualquier gema azul que active la meta', it: 'qualsiasi gemma blu che attivi la meta', de: 'jeder blaue Edelstein, der den Meta aktiviert' },
  { pattern: /minimize blue sockets otherwise/g, nl: 'verder zo weinig mogelijk blauwe sockets', fr: 'sinon, le moins de châsses bleues possible', es: 'por lo demás, las mínimas ranuras azules', it: 'per il resto, meno incavi blu possibile', de: 'sonst so wenige blaue Sockel wie möglich' },
  { pattern: /or a green Agi\/Hit gem to satisfy yellow\+blue meta requirements at once/g, nl: 'of een groene Agi/Hit-gem die meteen aan de gele en blauwe voorwaarden van de meta voldoet', fr: 'ou une gemme verte Agi/Hit qui remplit d’un coup les conditions jaune et bleue de la méta', es: 'o una gema verde Agi/Hit que cumple a la vez los requisitos amarillo y azul de la meta', it: 'o una gemma verde Agi/Hit che soddisfa insieme i requisiti giallo e blu della meta', de: 'oder ein grüner Agi/Hit-Edelstein, der die gelbe und blaue Bedingung des Meta zugleich erfüllt' },
  { pattern: /or a matched socket bonus that grants more Intellect/g, nl: 'of een passende socketbonus die meer Intellect geeft', fr: 'ou un bonus de châsse respecté qui donne plus d’Intellect', es: 'o una bonificación de ranura que dé más Intellect', it: 'o un bonus d’incavo rispettato che dia più Intellect', de: 'oder ein erfüllter Sockelbonus, der mehr Intellect gibt' },
  { pattern: /need two to unlock the meta(?: gem)?/g, nl: 'je hebt er twee nodig om de meta te activeren', fr: 'il en faut deux pour activer la méta', es: 'hacen falta dos para activar la meta', it: 'ne servono due per attivare la meta', de: 'zwei nötig, um den Meta zu aktivieren' },
  { pattern: /only 2 needed to activate the meta/g, nl: 'er zijn er maar 2 nodig om de meta te activeren', fr: 'deux suffisent pour activer la méta', es: 'solo hacen falta 2 para activar la meta', it: 'ne bastano 2 per attivare la meta', de: 'nur 2 nötig, um den Meta zu aktivieren' },
  { pattern: /needs two blue\/purple\/green gems/g, nl: 'vraagt twee blauwe, paarse of groene gems', fr: 'demande deux gemmes bleues, violettes ou vertes', es: 'pide dos gemas azules, moradas o verdes', it: 'richiede due gemme blu, viola o verdi', de: 'braucht zwei blaue, violette oder grüne Edelsteine' },
  { pattern: /only enough to activate the meta/g, nl: 'alleen genoeg om de meta te activeren', fr: 'juste assez pour activer la méta', es: 'solo las justas para activar la meta', it: 'solo quante bastano per attivare la meta', de: 'nur so viele, wie der Meta braucht' },
  { pattern: /used to unlock the meta/g, nl: 'om de meta te activeren', fr: 'pour activer la méta', es: 'para activar la meta', it: 'per attivare la meta', de: 'um den Meta zu aktivieren' },
  { pattern: /\bunlocks (?=[A-Z])/g, nl: 'activeert ', fr: 'active ', es: 'activa ', it: 'attiva ', de: 'aktiviert ' },
  { pattern: /once hit-capped isn't needed/g, nl: 'als je geen hit meer nodig hebt', fr: 'quand le hit n’est plus nécessaire', es: 'cuando ya no necesitas hit', it: 'quando non serve più hit', de: 'wenn kein Hit mehr nötig ist' },
  { pattern: /swap to (.+?) once armor-pen soft-capped/g, nl: 'wissel naar $1 zodra armor-pen aan de soft cap zit', fr: 'passez à $1 une fois l’armor-pen au soft cap', es: 'cambia a $1 al llegar al soft cap de armor-pen', it: 'passa a $1 al soft cap di armor-pen', de: 'wechsle zu $1, sobald Armor-Pen am Soft-Cap ist' },
  { pattern: /until (\d+)% hit cap, then/g, nl: 'tot de hit cap van $1%, daarna', fr: 'jusqu’au hit cap de $1 %, puis', es: 'hasta el hit cap del $1%, después', it: 'fino all’hit cap del $1%, poi', de: 'bis zum Hit-Cap von $1 %, danach' },
  { pattern: /until hit-capped, then/g, nl: 'tot hit gecapt is, daarna', fr: 'jusqu’au hit cap, puis', es: 'hasta el hit cap, después', it: 'fino all’hit cap, poi', de: 'bis zum Hit-Cap, danach' },
  { pattern: /while under hit cap/g, nl: 'zolang je onder de hit cap zit', fr: 'tant que vous êtes sous le hit cap', es: 'mientras estés por debajo del hit cap', it: 'finché sei sotto l’hit cap', de: 'solange du unter dem Hit-Cap bist' },
  { pattern: /once hit-capped/g, nl: 'zodra hit gecapt is', fr: 'une fois au hit cap', es: 'al llegar al hit cap', it: 'una volta all’hit cap', de: 'sobald Hit gecappt ist' },
  { pattern: /once capped/g, nl: 'zodra je gecapt bent', fr: 'une fois au cap', es: 'al llegar al cap', it: 'una volta al cap', de: 'sobald gecappt' },
  { pattern: /\bbefore that\b/g, nl: 'daarvoor', fr: 'avant cela', es: 'antes de eso', it: 'prima di allora', de: 'davor' },
  { pattern: /if (hit|defense)-capped/g, nl: 'als $1 gecapt is', fr: 'au cap de $1', es: 'con $1 al cap', it: 'con $1 al cap', de: 'wenn $1 gecappt ist' },
  { pattern: /if short on ([\w/]+)/g, nl: 'als je $1 tekortkomt', fr: 's’il vous manque du $1', es: 'si te falta $1', it: 'se ti manca $1', de: 'wenn dir $1 fehlt' },
  { pattern: /if you need hit/g, nl: 'als je hit nodig hebt', fr: 'si vous avez besoin de hit', es: 'si necesitas hit', it: 'se ti serve hit', de: 'wenn du Hit brauchst' },
  { pattern: /if mana isn't an issue/g, nl: 'als mana geen probleem is', fr: 'si le mana n’est pas un problème', es: 'si el maná no es un problema', it: 'se il mana non è un problema', de: 'wenn Mana kein Problem ist' },
  { pattern: /once mana is no longer an issue/g, nl: 'zodra mana geen probleem meer is', fr: 'dès que le mana n’est plus un problème', es: 'cuando el maná ya no sea un problema', it: 'quando il mana non è più un problema', de: 'sobald Mana kein Problem mehr ist' },
  { pattern: /once haste goals are met/g, nl: 'zodra je haste-doelen gehaald zijn', fr: 'une fois les objectifs de haste atteints', es: 'al alcanzar los objetivos de haste', it: 'una volta raggiunti gli obiettivi di haste', de: 'sobald die Haste-Ziele erreicht sind' },
  { pattern: /when stacking haste/g, nl: 'als je haste stapelt', fr: 'si vous cumulez la haste', es: 'si acumulas haste', it: 'se accumuli haste', de: 'wenn du Haste stapelst' },
  { pattern: /toward crit immunity/g, nl: 'richting crit-immuniteit', fr: 'vers l’immunité aux crits', es: 'hacia la inmunidad a críticos', it: 'verso l’immunità ai critici', de: 'Richtung Crit-Immunität' },
  { pattern: /toward the (\d+) defense cap/g, nl: 'richting de defense cap van $1', fr: 'vers le cap de $1 defense', es: 'hacia el cap de $1 defense', it: 'verso il cap di $1 defense', de: 'Richtung Defense-Cap von $1' },
  { pattern: /for strong socket bonuses/g, nl: 'voor sterke socketbonussen', fr: 'pour les bons bonus de châsse', es: 'para bonificaciones de ranura fuertes', it: 'per bonus d’incavo forti', de: 'für starke Sockelboni' },
  { pattern: /for socket bonus/g, nl: 'voor de socketbonus', fr: 'pour le bonus de châsse', es: 'para la bonificación de ranura', it: 'per il bonus d’incavo', de: 'für den Sockelbonus' },
  { pattern: /for extra blue sockets/g, nl: 'voor extra blauwe sockets', fr: 'pour des châsses bleues en plus', es: 'para ranuras azules extra', it: 'per incavi blu in più', de: 'für zusätzliche blaue Sockel' },
  { pattern: /for jewelcrafters/g, nl: 'voor jewelcrafters', fr: 'pour les jewelcrafters', es: 'para jewelcrafters', it: 'per i jewelcrafter', de: 'für Jewelcrafter' },
  { pattern: / for (hit\/expertise|hit|expertise|haste|threat)\b/g, nl: ' voor $1', fr: ' pour le $1', es: ' para $1', it: ' per $1', de: ' für $1' },
  { pattern: /otherwise more /g, nl: 'anders meer ', fr: 'sinon plus de ', es: 'si no, más ', it: 'altrimenti più ', de: 'sonst mehr ' },
  { pattern: /\boffensively\b/g, nl: 'offensief', fr: 'en offensif', es: 'en ofensiva', it: 'in offensiva', de: 'offensiv' },
  { pattern: /\bvariants\b/g, nl: 'varianten', fr: 'variantes', es: 'variantes', it: 'varianti', de: 'Varianten' },
  { pattern: /\(Str\+crit or Str\+hit\)/g, nl: '(Str+crit of Str+hit)', fr: '(Str+crit ou Str+hit)', es: '(Str+crit o Str+hit)', it: '(Str+crit o Str+hit)', de: '(Str+crit oder Str+hit)' },
  { pattern: /before Tier (\d+)/g, nl: 'vóór Tier $1', fr: 'avant Tier $1', es: 'antes de Tier $1', it: 'prima di Tier $1', de: 'vor Tier $1' },
  { pattern: /from Phase (\d+) onward/g, nl: 'vanaf fase $1', fr: 'à partir de la phase $1', es: 'desde la fase $1', it: 'dalla fase $1', de: 'ab Phase $1' },
  { pattern: / in Phase (\d+)/g, nl: ' in fase $1', fr: ' en phase $1', es: ' en la fase $1', it: ' nella fase $1', de: ' in Phase $1' },

  // Gems en enchants: waar de uitleg een enchant herkomst geeft.
  { pattern: /Only for 2H weapons\. There is no useful enchant at launch for 1H weapons as a Hunter\./g, nl: 'Alleen voor tweehandige wapens. Bij de start is er als Hunter geen nuttige enchant voor eenhandige wapens.', fr: 'Seulement pour les armes à deux mains. Au lancement, il n’y a pas d’enchantement utile pour les armes à une main en tant que Hunter.', es: 'Solo para armas de dos manos. Al lanzamiento no hay un encantamiento útil para armas de una mano como Hunter.', it: 'Solo per armi a due mani. Al lancio non c’è un incantamento utile per armi a una mano come Hunter.', de: 'Nur für Zweihandwaffen. Zum Start gibt es als Hunter keine nützliche Verzauberung für Einhandwaffen.' },
  { pattern: /\bThreat : /g, nl: 'Voor threat: ', fr: 'Menace : ', es: 'Amenaza: ', it: 'Minaccia: ', de: 'Bedrohung: ' },
  { pattern: /\bSurvivability : /g, nl: 'Om te overleven: ', fr: 'Survie : ', es: 'Supervivencia: ', it: 'Sopravvivenza: ', de: 'Überleben: ' },
  { pattern: /· from the quest (.+?) from the (?=[A-Z])/g, nl: '· van de quest $1 van de ', fr: '· par la quête $1 de ', es: '· de la misión $1 de ', it: '· dalla missione $1 di ', de: '· aus der Quest $1 von ' },
  { pattern: /· from the quest /g, nl: '· van de quest ', fr: '· par la quête ', es: '· de la misión ', it: '· dalla missione ', de: '· aus der Quest ' },
  { pattern: /· drops from /g, nl: '· valt bij ', fr: '· butin de ', es: '· botín de ', it: '· bottino di ', de: '· Beute von ' },
  { pattern: /· from the (?=[A-Z])/g, nl: '· van de ', fr: '· de ', es: '· de ', it: '· da ', de: '· von ' },
  { pattern: /· from (?=[A-Z])/g, nl: '· van ', fr: '· de ', es: '· de ', it: '· da ', de: '· von ' },
  { pattern: /· available once (?:of|at) (\w+) reputation with the (?:The )?/g, nl: '· beschikbaar vanaf $1 bij de ', fr: '· disponible dès $1 auprès de la faction ', es: '· disponible desde $1 con la facción ', it: '· disponibile da $1 con la fazione ', de: '· verfügbar ab $1 bei der Fraktion ' },
  { pattern: / in the Burning Steppes/g, nl: ' in de Burning Steppes', fr: ' dans les Burning Steppes', es: ' en las Burning Steppes', it: ' nelle Burning Steppes', de: ' in den Burning Steppes' },
  { pattern: / in (?=Stranglethorn Vale|Naxxramas|Dire Maul|Zangarmarsh|Caverns of Time)/g, fr: ' à ', es: ' en ' },

  // Het laatste alternatief na het streepje.
  { pattern: /· or /g, nl: '· of ', fr: '· ou ', es: '· o ', it: '· o ', de: '· oder ' },
  { pattern: /, or (?=[A-Z])/g, nl: ', of ', fr: ', ou ', es: ', o ', it: ', o ', de: ', oder ' },

  // Enchants.
  { pattern: /\(or the easier-to-obtain (.+?)\)/g, nl: '(of de makkelijker te krijgen $1)', fr: '(ou $1, plus facile à obtenir)', es: '(o $1, más fácil de conseguir)', it: '(o $1, più facile da ottenere)', de: '(oder das leichter erhältliche $1)' },
  { pattern: /\bgem socket\b/g, nl: 'sokkel', fr: 'châsse', es: 'ranura', it: 'incavo', de: 'Sockel' },
  { pattern: /\ball stats\b/g, nl: 'alle stats', fr: 'toutes les caractéristiques', es: 'todas las estadísticas', it: 'tutte le statistiche', de: 'alle Werte' },
  { pattern: /\bminor run speed\b/g, nl: 'iets sneller lopen', fr: 'légère hausse de vitesse de course', es: 'ligero aumento de velocidad de carrera', it: 'leggero aumento della velocità di corsa', de: 'etwas mehr Laufgeschwindigkeit' },
  { pattern: /\(Requires Enchanting\)/g, nl: '(vraagt Enchanting)', fr: '(nécessite Enchanting)', es: '(requiere Enchanting)', it: '(richiede Enchanting)', de: '(erfordert Enchanting)' },
  { pattern: /\(Enchanting only\)/g, nl: '(alleen Enchanting)', fr: '(Enchanting uniquement)', es: '(solo Enchanting)', it: '(solo Enchanting)', de: '(nur Enchanting)' },
  { pattern: /(-\d+)% threat\b/g, nl: '$1% threat', fr: '$1 % de menace', es: '$1% de amenaza', it: '$1% di minaccia', de: '$1 % Bedrohung' },
  { pattern: /(\d+ \w+) each\)/g, nl: '$1 elk)', fr: '$1 chacun)', es: '$1 cada uno)', it: '$1 ciascuno)', de: '$1 je)' },
  { pattern: /\(or (?=[A-Z])/g, nl: '(of ', fr: '(ou ', es: '(o ', it: '(o ', de: '(oder ' },
  { pattern: /\(cheaper\)/g, nl: '(goedkoper)', fr: '(moins cher)', es: '(más barato)', it: '(più economico)', de: '(günstiger)' },
  { pattern: /\(both weapons\)/g, nl: '(beide wapens)', fr: '(les deux armes)', es: '(ambas armas)', it: '(entrambe le armi)', de: '(beide Waffen)' },
  { pattern: /\(Mana issues\)/g, nl: '(bij manatekort)', fr: '(en cas de manque de mana)', es: '(si falta maná)', it: '(se manca il mana)', de: '(bei Manaproblemen)' },

  // Items.
  { pattern: /\(only with a one-hand weapon\)/g, nl: '(alleen met een eenhandig wapen)', fr: '(seulement avec une arme à une main)', es: '(solo con un arma de una mano)', it: '(solo con un’arma a una mano)', de: '(nur mit einer Einhandwaffe)' },
  { pattern: /\(one-hand, with off-hand\)/g, nl: '(eenhandig, met off-hand)', fr: '(une main, avec main gauche)', es: '(una mano, con mano izquierda)', it: '(una mano, con mano secondaria)', de: '(einhändig, mit Nebenhand)' },
  { pattern: /\(one-hand, with ([A-Z][\w' ]+)\)/g, nl: '(eenhandig, met $1)', fr: '(une main, avec $1)', es: '(una mano, con $1)', it: '(una mano, con $1)', de: '(einhändig, mit $1)' },
  { pattern: /\(with one-hand\)/g, nl: '(met een eenhandig wapen)', fr: '(avec une arme à une main)', es: '(con un arma de una mano)', it: '(con un’arma a una mano)', de: '(mit Einhandwaffe)' },
  { pattern: /\(one-hand\)/g, nl: '(eenhandig)', fr: '(une main)', es: '(una mano)', it: '(una mano)', de: '(einhändig)' },
  { pattern: /\(two-handed build\)/g, nl: '(build met een tweehandig wapen)', fr: '(build à deux mains)', es: '(build a dos manos)', it: '(build a due mani)', de: '(Zweihand-Build)' },
  { pattern: /\(two-hand\)/g, nl: '(tweehandig)', fr: '(deux mains)', es: '(dos manos)', it: '(due mani)', de: '(zweihändig)' },
  { pattern: /\(with ([A-Z][\w' ]+)\)/g, nl: '(met $1)', fr: '(avec $1)', es: '(con $1)', it: '(con $1)', de: '(mit $1)' },
  { pattern: /\(second copy\)/g, nl: '(tweede exemplaar)', fr: '(second exemplaire)', es: '(segunda copia)', it: '(seconda copia)', de: '(zweites Exemplar)' },
  { pattern: /\(staff\)/g, nl: '(staf)', fr: '(bâton)', es: '(bastón)', it: '(bastone)', de: '(Stab)' },
  { pattern: /\(if available to healers\)/g, nl: '(als healers het kunnen krijgen)', fr: '(si les soigneurs y ont accès)', es: '(si está disponible para sanadores)', it: '(se disponibile per i guaritori)', de: '(falls für Heiler verfügbar)' },
  { pattern: /\(passive alternative\)/g, nl: '(passief alternatief)', fr: '(alternative passive)', es: '(alternativa pasiva)', it: '(alternativa passiva)', de: '(passive Alternative)' },
  { pattern: /\(AoE fights\)/g, nl: '(AoE-gevechten)', fr: '(combats de zone)', es: '(combates de área)', it: '(scontri ad area)', de: '(AoE-Kämpfe)' },
  { pattern: /\(fire builds\)/g, nl: '(fire-builds)', fr: '(builds feu)', es: '(builds de fuego)', it: '(build di fuoco)', de: '(Feuer-Builds)' },
  { pattern: /\(Legendary\)/g, nl: '(legendarisch)', fr: '(légendaire)', es: '(legendario)', it: '(leggendario)', de: '(legendär)' },
  { pattern: /\(Alliance\)/g, es: '(Alianza)', it: '(Alleanza)', de: '(Allianz)' },
  { pattern: /\(Horde\)/g, es: '(Horda)', it: '(Orda)' },
];

/** Een item-, enchant- of gemnaam met wat erachter staat, in de taal van de pagina. */
export function translateName(text: string, locale: Locale): string {
  let out = text.replace(/\s+\u2014\s+/g, ' · ').replace(/\u2014/g, '·');
  for (const note of notes) out = out.replace(note, '');
  out = out.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')').replace(/\s*\(\s*\)/g, '');
  if (locale !== 'en') {
    for (const rule of rules) {
      const replacement = rule[locale];
      if (replacement !== undefined) out = out.replace(rule.pattern, replacement);
    }
  }
  return out.replace(/\s{2,}/g, ' ').trim();
}
