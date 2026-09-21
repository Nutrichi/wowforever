/*
 * Vaste zinsdelen in de bronteksten van de BiS-lijsten, in zes talen.
 *
 * Een brontekst is meestal een naam uit het spel ("Nefarian in Blackwing
 * Lair", "Karazhan · Prince Malchezaar"); die blijft Engels. Wat vertaald
 * wordt, zijn de vaste woorden eromheen: vendor, world drop, quest, crafted.
 * Een zinsdeel dat hier niet staat, blijft Engels. Een regel bijzetten is
 * één regel.
 *
 * Volgorde telt: de langste en meest specifieke patronen eerst.
 * De Engelse kolom zet alleen gebroken of misleidend Engels recht.
 */

import type { Locale } from './ui';

type Rule = { pattern: RegExp } & Partial<Record<Locale, string>>;

/** Hele teksten die iets anders betekenen dan ze zeggen. */
const whole: Array<[RegExp, Partial<Record<Locale, string>>]> = [
  [/^Icy Veins TBC Classic gear guide$/i, { en: 'Source not listed on Icy Veins', nl: 'Bron niet vermeld op Icy Veins', fr: 'Source non indiquée sur Icy Veins', es: 'Procedencia no indicada en Icy Veins', it: 'Provenienza non indicata su Icy Veins', de: 'Quelle bei Icy Veins nicht angegeben' }],
  [/^source not listed on the Icy Veins page$/i, { en: 'Source not listed on Icy Veins', nl: 'Bron niet vermeld op Icy Veins', fr: 'Source non indiquée sur Icy Veins', es: 'Procedencia no indicada en Icy Veins', it: 'Provenienza non indicata su Icy Veins', de: 'Quelle bei Icy Veins nicht angegeben' }],
  [/^Icy Veins Classic enchant guide \(further ranked alternatives on the guide page\)$/i, { en: 'Icy Veins enchant guide for Classic, with more ranked options on the guide', nl: 'Enchantgids van Icy Veins voor Classic, met meer gerangschikte opties in de gids', fr: 'Guide d’enchantements Classic d’Icy Veins, avec d’autres options classées dans le guide', es: 'Guía de encantamientos de Classic de Icy Veins, con más opciones clasificadas en la guía', it: 'Guida agli incantamenti per Classic di Icy Veins, con altre opzioni in classifica nella guida', de: 'Verzauberungsguide von Icy Veins für Classic, mit weiteren gereihten Optionen im Guide' }],
  [/^Icy Veins TBC Classic enchant guide \(full ranked alternatives on the guide page\)$/i, { en: 'Icy Veins enchant guide for TBC Classic, with all ranked options on the guide', nl: 'Enchantgids van Icy Veins voor TBC Classic, met alle gerangschikte opties in de gids', fr: 'Guide d’enchantements TBC Classic d’Icy Veins, avec toutes les options classées dans le guide', es: 'Guía de encantamientos de TBC Classic de Icy Veins, con todas las opciones clasificadas en la guía', it: 'Guida agli incantamenti per TBC Classic di Icy Veins, con tutte le opzioni in classifica nella guida', de: 'Verzauberungsguide von Icy Veins für TBC Classic, mit allen gereihten Optionen im Guide' }],
  [/^Created through a quest chain, starting from getting the Eye of Sulfuras from Ragnaros in Molten Core$/i, { en: 'Quest chain that starts with the Eye of Sulfuras from Ragnaros in Molten Core', nl: 'Questreeks die begint met de Eye of Sulfuras van Ragnaros in Molten Core', fr: 'Suite de quêtes qui commence avec l’Eye of Sulfuras de Ragnaros dans Molten Core', es: 'Cadena de misiones que empieza con el Eye of Sulfuras de Ragnaros en Molten Core', it: 'Catena di missioni che inizia con l’Eye of Sulfuras di Ragnaros in Molten Core', de: 'Questreihe, die mit dem Eye of Sulfuras von Ragnaros in Molten Core beginnt' }],
  [/^older-raid item, not obtainable in Celestial Dungeons$/i, { en: 'item from an older raid, not available in the Celestial Dungeons', nl: 'item uit een oudere raid, niet te krijgen in de Celestial Dungeons', fr: 'objet d’un ancien raid, introuvable dans les Celestial Dungeons', es: 'objeto de una banda anterior, no disponible en las Celestial Dungeons', it: 'oggetto di un raid precedente, non ottenibile nei Celestial Dungeons', de: 'Gegenstand aus einem älteren Raid, nicht in den Celestial Dungeons erhältlich' }],
  [/^Only for 2H weapons\. There is no useful enchant at launch for 1H weapons as a Hunter\.$/i, { en: 'Only for a two-hander. At launch there is no worthwhile enchant for a one-hander on a Hunter.', nl: 'Alleen voor een tweehander. Bij de lancering is er geen zinnige enchant voor een eenhander op een Hunter.', fr: 'Uniquement pour une arme \u00e0 deux mains. Au lancement, il n\u2019existe aucun enchantement utile pour une arme \u00e0 une main sur un Hunter.', es: 'Solo para un arma a dos manos. En el lanzamiento no hay ning\u00fan encantamiento \u00fatil para un arma de una mano en un Hunter.', it: 'Solo per un\u2019arma a due mani. Al lancio non esiste alcun incantamento utile per un\u2019arma a una mano su un Hunter.', de: 'Nur f\u00fcr eine Zweihandwaffe. Zum Start gibt es f\u00fcr eine Einhandwaffe auf einem Hunter keine sinnvolle Verzauberung.' }],
  [/^Classic legacy item$/i, { nl: 'legacy-item uit Classic', fr: 'objet hérité de Classic', es: 'objeto heredado de Classic', it: 'oggetto ereditato da Classic', de: 'Legacy-Gegenstand aus Classic' }],
];

const rules: Rule[] = [
  // Gebroken Engels in enchantnamen: "X \u2014 available once of Friendly reputation with the Y".
  { pattern: /available once of (\w+) reputation with the /gi, en: 'requires $1 with the ', nl: 'vraagt $1 bij de ', fr: 'nécessite $1 auprès de ', es: 'requiere $1 con ', it: 'richiede $1 con ', de: 'erfordert $1 bei ' },

  { pattern: /\bBought from the PvP Vendor at Rank (\d+)/g, nl: 'Gekocht bij de PvP-verkoper vanaf rank $1', fr: 'Acheté au vendeur PvP à partir du rang $1', es: 'Comprado al vendedor PvP desde el rango $1', it: 'Acquistato dal venditore PvP dal grado $1', de: 'Beim PvP-Händler ab Rang $1 gekauft' },
  { pattern: /\bRank (\d+) PvP (Reward|Weapon|set armor)/g, nl: 'PvP-beloning vanaf rank $1', fr: 'Récompense PvP du rang $1', es: 'Recompensa PvP del rango $1', it: 'Ricompensa PvP del grado $1', de: 'PvP-Belohnung ab Rang $1' },
  { pattern: /\bExalted with the (.+?) reputation\b/g, nl: 'Exalted bij $1', fr: 'Exalted auprès de $1', es: 'Exalted con $1', it: 'Exalted con $1', de: 'Exalted bei $1' },
  { pattern: /\bReward from being Exalted with the (.+?) Reputation\b/g, nl: 'Beloning voor Exalted bij $1', fr: 'Récompense pour Exalted auprès de $1', es: 'Recompensa por Exalted con $1', it: 'Ricompensa per Exalted con $1', de: 'Belohnung für Exalted bei $1' },
  { pattern: /\bDarkmoon Faire (\d+) Ticket reward\b/g, nl: 'Darkmoon Faire, beloning voor $1 tickets', fr: 'Darkmoon Faire, récompense pour $1 tickets', es: 'Darkmoon Faire, recompensa por $1 tickets', it: 'Darkmoon Faire, ricompensa per $1 biglietti', de: 'Darkmoon Faire, Belohnung für $1 Lose' },
  { pattern: /\bFrom the same quest chain as\b/g, nl: 'Uit dezelfde questreeks als', fr: 'De la même suite de quêtes que', es: 'De la misma cadena de misiones que', it: 'Dalla stessa catena di missioni di', de: 'Aus derselben Questreihe wie' },
  { pattern: /\bFinal Twilight Protocol Boss\b/g, nl: 'Laatste baas van Twilight Protocol', fr: 'Dernier boss de Twilight Protocol', es: 'Último jefe de Twilight Protocol', it: 'Ultimo boss di Twilight Protocol', de: 'Letzter Boss von Twilight Protocol' },

  { pattern: /\b(?:World drop \(BoE\)|BoE World Drop|World drop BoE|World drop bind on equip item)/gi, nl: 'World drop (BoE)', fr: 'Butin du monde (BoE)', es: 'Botín del mundo (BoE)', it: 'Bottino del mondo (BoE)', de: 'Weltdrop (BoE)' },
  { pattern: /\bMolten Core drop BoE\b/g, nl: 'Drop in Molten Core (BoE)', fr: 'Butin de Molten Core (BoE)', es: 'Botín de Molten Core (BoE)', it: 'Bottino di Molten Core (BoE)', de: 'Drop in Molten Core (BoE)' },
  { pattern: /\bWorld drop\b/gi, nl: 'World drop', fr: 'Butin du monde', es: 'Botín del mundo', it: 'Bottino del mondo', de: 'Weltdrop' },
  { pattern: /\bZone drop from\b/g, nl: 'Zonedrop in', fr: 'Butin de zone dans', es: 'Botín de zona en', it: 'Bottino di zona in', de: 'Zonendrop in' },
  { pattern: /\bShared Loot\b/gi, nl: 'Gedeelde loot', fr: 'Butin partagé', es: 'Botín compartido', it: 'Bottino condiviso', de: 'Geteilte Beute' },
  { pattern: /\bBlackwing Lair trash mobs\b/g, en: 'Trash in Blackwing Lair', nl: 'Trash in Blackwing Lair', fr: 'Trash dans Blackwing Lair', es: 'Trash en Blackwing Lair', it: 'Trash in Blackwing Lair', de: 'Trash in Blackwing Lair' },
  { pattern: /\b(?:Trash inside of|Trash mobs in|Trash drop in)\b/g, nl: 'Trash in', fr: 'Trash dans', es: 'Trash en', it: 'Trash in', de: 'Trash in' },
  { pattern: /\b(?:Various Bosses in|Multiple bosses in|Multiple Bosses in|Several bosses in)\b/g, nl: 'Verschillende bazen in', fr: 'Plusieurs boss dans', es: 'Varios jefes en', it: 'Vari boss in', de: 'Mehrere Bosse in' },
  { pattern: /\b(?:Side bosses in|Mini-bosses in)\b/g, nl: 'Nevenbazen in', fr: 'Boss secondaires dans', es: 'Jefes secundarios en', it: 'Boss secondari in', de: 'Nebenbosse in' },
  { pattern: /\b(?:The 3 drake bosses in|Drake bosses in|Drake Bosses in)\b/g, nl: 'Drakenbazen in', fr: 'Boss dragons dans', es: 'Jefes dragón en', it: 'Boss drago in', de: 'Drachenbosse in' },
  { pattern: /\bMultiple Bosses\b/g, nl: 'Verschillende bazen', fr: 'Plusieurs boss', es: 'Varios jefes', it: 'Vari boss', de: 'Mehrere Bosse' },
  { pattern: /\bmultiple bosses\b/g, nl: 'verschillende bazen', fr: 'plusieurs boss', es: 'varios jefes', it: 'vari boss', de: 'mehrere Bosse' },
  { pattern: /\bBadge of Justice vendor\b/gi, nl: 'Verkoper van Badge of Justice', fr: 'Vendeur de Badge of Justice', es: 'Vendedor de Badge of Justice', it: 'Venditore di Badge of Justice', de: 'H\u00e4ndler f\u00fcr Badge of Justice' },
  { pattern: /\bArena vendor\b/gi, nl: 'Arenaverkoper', fr: 'Vendeur d\u2019ar\u00e8ne', es: 'Vendedor de arena', it: 'Venditore dell\u2019arena', de: 'Arenah\u00e4ndler' },
  { pattern: /\bPvP vendor\b/gi, nl: 'PvP-verkoper', fr: 'Vendeur PvP', es: 'Vendedor PvP', it: 'Venditore PvP', de: 'PvP-H\u00e4ndler' },
  { pattern: /\bBadge [Vv]endor\.?/g, nl: 'Verkoper van badges', fr: 'Vendeur de badges', es: 'Vendedor de insignias', it: 'Venditore di insegne', de: 'Abzeichenhändler' },
  { pattern: /\bEmblem Vendors?\b/g, nl: 'verkopers van emblemen', fr: 'vendeurs d’emblèmes', es: 'vendedores de emblemas', it: 'venditori di emblemi', de: 'Emblemhändler' },
  { pattern: /\bReward from the quest\b/g, nl: 'Beloning van de quest', fr: 'Récompense de la quête', es: 'Recompensa de la misión', it: 'Ricompensa della missione', de: 'Belohnung der Quest' },
  { pattern: /\bReward from\b/g, nl: 'Beloning van', fr: 'Récompense de', es: 'Recompensa de', it: 'Ricompensa di', de: 'Belohnung von' },
  { pattern: /\bquest reward\b/gi, nl: 'questbeloning', fr: 'récompense de quête', es: 'recompensa de misión', it: 'ricompensa di missione', de: 'Questbelohnung' },
  { pattern: /\bLegendary cloak questline\b/gi, nl: 'Questreeks voor de legendary cloak', fr: 'Suite de qu\u00eates de la cape l\u00e9gendaire', es: 'Cadena de misiones de la capa legendaria', it: 'Catena di missioni del mantello leggendario', de: 'Questreihe zum legend\u00e4ren Umhang' },
  { pattern: /\b(?:questline|quest chain)\b/gi, nl: 'questreeks', fr: 'suite de quêtes', es: 'cadena de misiones', it: 'catena di missioni', de: 'Questreihe' },
  { pattern: /\bPurchased with\b/g, nl: 'Gekocht met', fr: 'Acheté avec', es: 'Comprado con', it: 'Acquistato con', de: 'Gekauft mit' },
  { pattern: /\bSold by\b/g, nl: 'Verkocht door', fr: 'Vendu par', es: 'Vendido por', it: 'Venduto da', de: 'Verkauft von' },
  { pattern: /\bHonor quartermaster\b/g, nl: 'Honor-quartermaster', fr: 'Intendant d’Honneur', es: 'Intendente de Honor', it: 'Intendente dell’Onore', de: 'Ehren-Rüstmeister' },
  { pattern: /\bbefore reputation discounts\b/g, nl: 'zonder reputatiekorting', fr: 'avant réduction de réputation', es: 'antes de descuentos por reputación', it: 'prima degli sconti di reputazione', de: 'vor Rufrabatt' },
  { pattern: /\((\d+)(?:st|nd|rd|th) Timed Chest\)|\b(\d+)(?:st|nd|rd|th) Timed Chest\b/g, nl: 'getimede kist $1$2', fr: 'coffre chronométré $1$2', es: 'cofre cronometrado $1$2', it: 'forziere a tempo $1$2', de: 'Zeitkiste $1$2' },
  { pattern: /\(side-entrance\)/g, nl: '(zij-ingang)', fr: '(entrée latérale)', es: '(entrada lateral)', it: '(ingresso laterale)', de: '(Seiteneingang)' },
  { pattern: /\(main-entrance\)/g, nl: '(hoofdingang)', fr: '(entrée principale)', es: '(entrada principal)', it: '(ingresso principale)', de: '(Haupteingang)' },
  { pattern: /\bliving side\b/g, nl: 'levende kant', fr: 'côté vivant', es: 'lado vivo', it: 'lato dei vivi', de: 'lebende Seite' },
  { pattern: /,? the world boss in\b/g, nl: ', world boss in', fr: ', boss mondial en', es: ', jefe del mundo en', it: ', boss mondiale in', de: ', Weltboss in' },
  { pattern: /\bWorld Boss\b/g, nl: 'world boss', fr: 'boss mondial', es: 'jefe del mundo', it: 'boss mondiale', de: 'Weltboss' },

  // Tussen haakjes achter een tradeskill of een baas.
  { pattern: /\(crafted, usable by all\)/g, nl: '(gecraft, voor iedereen)', fr: '(fabriqué, pour tous)', es: '(fabricado, para todos)', it: '(creato, per tutti)', de: '(hergestellt, für alle)' },
  { pattern: /\bcrafted, usable by all\b/g, nl: 'gecraft, voor iedereen', fr: 'fabriqué, pour tous', es: 'fabricado, para todos', it: 'creato, per tutti', de: 'hergestellt, für alle' },
  { pattern: /\bcrafted scope, usable by all\b/g, nl: 'gecrafte scope, voor iedereen', fr: 'lunette fabriquée, pour tous', es: 'mira fabricada, para todos', it: 'mirino creato, per tutti', de: 'hergestelltes Zielfernrohr, für alle' },
  { pattern: /\bcrafted\b/g, nl: 'gecraft', fr: 'fabriqué', es: 'fabricado', it: 'creato', de: 'hergestellt' },
  { pattern: /\btier token\b/gi, nl: 'penning voor de tierset', fr: 'jeton de tier', es: 'ficha de tier', it: 'token del tier', de: 'Tier-Marke' },
  { pattern: /\bshared loot\b/g, nl: 'gedeelde loot', fr: 'butin partagé', es: 'botín compartido', it: 'bottino condiviso', de: 'geteilte Beute' },
  { pattern: /\benchanters only\b/g, nl: 'alleen voor Enchanting', fr: 'Enchanting uniquement', es: 'solo Enchanting', it: 'solo Enchanting', de: 'nur Enchanting' },
  { pattern: /\bleatherworkers only\b/g, nl: 'alleen voor Leatherworking', fr: 'Leatherworking uniquement', es: 'solo Leatherworking', it: 'solo Leatherworking', de: 'nur Leatherworking' },
  { pattern: /\bfor tailors\b/g, nl: 'voor Tailoring', fr: 'pour Tailoring', es: 'para Tailoring', it: 'per Tailoring', de: 'für Tailoring' },
  { pattern: /\bfor engineers\b/g, nl: 'voor Engineering', fr: 'pour Engineering', es: 'para Engineering', it: 'per Engineering', de: 'für Engineering' },
  { pattern: /\bfor leatherworkers\b/g, nl: 'voor Leatherworking', fr: 'pour Leatherworking', es: 'para Leatherworking', it: 'per Leatherworking', de: 'für Leatherworking' },
  { pattern: /\bfor scribes\b/g, nl: 'voor Inscription', fr: 'pour Inscription', es: 'para Inscription', it: 'per Inscription', de: 'für Inscription' },
  { pattern: /\bfor staves\b/g, nl: 'voor staven', fr: 'pour les bâtons', es: 'para bastones', it: 'per i bastoni', de: 'für Stäbe' },
  { pattern: /\bfor main-hand\b/g, nl: 'voor de hoofdhand', fr: 'pour la main droite', es: 'para la mano derecha', it: 'per la mano primaria', de: 'für die Waffenhand' },
  { pattern: /\bfor specific fights\b/g, nl: 'voor specifieke gevechten', fr: 'pour certains combats', es: 'para combates concretos', it: 'per scontri specifici', de: 'für bestimmte Kämpfe' },
  { pattern: /\bas a cheaper alternative\b/g, nl: 'als goedkoper alternatief', fr: 'comme alternative moins chère', es: 'como alternativa más barata', it: 'come alternativa più economica', de: 'als günstigere Alternative' },
  { pattern: /\bas budget options?\b/g, nl: 'als budgetkeuze', fr: 'comme option économique', es: 'como opción económica', it: 'come opzione economica', de: 'als günstige Option' },
  { pattern: /\bcheaper (.+?) alternative\b/g, nl: 'goedkoper alternatief: $1', fr: 'alternative moins chère : $1', es: 'alternativa más barata: $1', it: 'alternativa più economica: $1', de: 'günstigere Alternative: $1' },
  { pattern: /\balternative\b/g, nl: 'als alternatief', fr: 'en alternative', es: 'como alternativa', it: 'come alternativa', de: 'als Alternative' },
  { pattern: /\balso strong\b/g, nl: 'ook sterk', fr: 'aussi solide', es: 'también fuerte', it: 'anche forte', de: 'auch stark' },
  { pattern: /\bif missing hit\b|\bif short on hit\b/g, nl: 'als je hit tekortkomt', fr: 'si le toucher manque', es: 'si falta golpe', it: 'se manca il colpire', de: 'wenn Trefferwertung fehlt' },
  { pattern: /\bif missing defense\b/g, nl: 'als je defense tekortkomt', fr: 'si la défense manque', es: 'si falta defensa', it: 'se manca la difesa', de: 'wenn Verteidigung fehlt' },
  { pattern: /\bif needed for caps\b/g, nl: 'als het nodig is voor caps', fr: 'si besoin pour les plafonds', es: 'si hace falta para los topes', it: 'se serve per i limiti', de: 'wenn für Caps nötig' },
  { pattern: /\bonce defense-capped\b/g, nl: 'zodra defense gecapt is', fr: 'une fois la défense au plafond', es: 'con la defensa al tope', it: 'una volta al limite di difesa', de: 'sobald Verteidigung gecappt ist' },
  { pattern: /\bif below crit immunity\b/g, nl: 'onder crit-immuniteit', fr: 'sous l’immunité aux critiques', es: 'por debajo de la inmunidad a críticos', it: 'sotto l’immunità ai critici', de: 'unter Krit-Immunität' },
  { pattern: /\bif speed is covered\b/g, nl: 'als snelheid al gedekt is', fr: 'si la vitesse est couverte', es: 'si la velocidad ya está cubierta', it: 'se la velocità è coperta', de: 'wenn Tempo abgedeckt ist' },
  { pattern: /\bfor threat\b/g, nl: 'voor threat', fr: 'pour la menace', es: 'para amenaza', it: 'per la minaccia', de: 'für Bedrohung' },
  { pattern: /\bfor armor\b/g, nl: 'voor armor', fr: 'pour l’armure', es: 'para armadura', it: 'per l’armatura', de: 'für Rüstung' },
  { pattern: /\bfor shadow bolt builds\b/g, nl: 'voor Shadow Bolt-builds', fr: 'pour les builds Shadow Bolt', es: 'para builds de Shadow Bolt', it: 'per build Shadow Bolt', de: 'für Shadow-Bolt-Builds' },
  { pattern: /\botherwise\b/g, nl: 'anders', fr: 'sinon', es: 'si no', it: 'altrimenti', de: 'sonst' },
  { pattern: /\bNaxx veterans:/g, nl: 'Wie Naxxramas deed:', fr: 'Vétérans de Naxxramas :', es: 'Veteranos de Naxxramas:', it: 'Veterani di Naxxramas:', de: 'Naxxramas-Veteranen:' },
  { pattern: /\bprofession recipe\b/gi, en: 'tradeskill recipe', nl: 'tradeskillrecept', fr: 'recette de tradeskill', es: 'receta de tradeskill', it: 'ricetta di tradeskill', de: 'Tradeskill-Rezept' },
  { pattern: /\btier alternative if not using offset\b/g, nl: 'tier als alternatief zonder offset', fr: 'alternative de tier sans offset', es: 'alternativa de tier sin offset', it: 'alternativa di tier senza offset', de: 'Tier-Alternative ohne Offset' },
  { pattern: /\bor the legendary\b/g, nl: 'of de legendary', fr: 'ou la légendaire', es: 'o el legendario', it: 'o il leggendario', de: 'oder das legendäre' },
  { pattern: /\bfrom Ulduar if available\b/g, nl: 'uit Ulduar als je die hebt', fr: 'd’Ulduar si disponible', es: 'de Ulduar si se tiene', it: 'da Ulduar se disponibile', de: 'aus Ulduar, falls vorhanden' },

  /*
   * Zinsdelen die de bronteksten half Engels lieten staan (Nutri, 21 september
   * 2026). Ze staan hier vlak voor de kleine verbindingswoorden, want ze zijn
   * specifieker: "from the quest" moet aan de beurt komen voor "from".
   */
  { pattern: /\bNormal version of the (.+?) drop\b/g, en: 'drop from the normal version of $1', nl: 'drop uit de normale versie van $1', fr: 'butin de la version normale de $1', es: 'bot\u00edn de la versi\u00f3n normal de $1', it: 'bottino della versione normale di $1', de: 'Drop aus der normalen Version von $1' },
  { pattern: /\bShared drop from the\b/g, nl: 'Gedeelde drop van', fr: 'Butin partag\u00e9 de', es: 'Bot\u00edn compartido de', it: 'Bottino condiviso di', de: 'Geteilter Drop von' },
  { pattern: /\bdrops? from the\b/g, nl: 'drop van', fr: 'butin de', es: 'bot\u00edn de', it: 'bottino di', de: 'Drop von' },
  { pattern: /\bdrops from\b/g, nl: 'drop van', fr: 'butin de', es: 'bot\u00edn de', it: 'bottino di', de: 'Drop von' },
  { pattern: /\bfrom the quest\b/gi, nl: 'van de quest', fr: 'de la qu\u00eate', es: 'de la misi\u00f3n', it: 'dalla missione', de: 'aus der Quest' },
  { pattern: /\bBosses in\b/g, nl: 'Bazen in', fr: 'Boss dans', es: 'Jefes en', it: 'Boss in', de: 'Bosse in' },
  { pattern: /\bThe three drakes in\b/gi, nl: 'De drie draken in', fr: 'Les trois drakes dans', es: 'Los tres dracos en', it: 'I tre draghi in', de: 'Die drei Drachen in' },
  { pattern: /\bmade by combining the item\b/gi, nl: 'gemaakt door het item te combineren', fr: 'obtenu en combinant l\u2019objet', es: 'se obtiene combinando el objeto', it: 'si ottiene combinando l\u2019oggetto', de: 'entsteht durch Kombinieren des Gegenstands' },
  { pattern: /\btrash mobs\b/gi, nl: 'trash', fr: 'trash', es: 'trash', it: 'trash', de: 'Trash' },

  // Kleine verbindingswoorden, als laatste.
  { pattern: /^or /g, nl: 'of ', fr: 'ou ', es: 'o ', it: 'o ', de: 'oder ' },
  { pattern: / or /g, nl: ' of ', fr: ' ou ', es: ' o ', it: ' o ', de: ' oder ' },
  /* Het lidwoord valt weg voor een naam uit het spel: "in the Burning Steppes"
     wordt "in Burning Steppes". Anders moet je in het Frans, Spaans en Italiaans
     het geslacht van een Engelse naam raden, en dat gaat mis. */
  { pattern: /\bin the (?=[A-Z])/g, nl: 'in ', fr: 'dans ', es: 'en ', it: 'in ', de: 'in ' },
  { pattern: /\bfrom the (?=[A-Z])/g, nl: 'van ', fr: 'de ', es: 'de ', it: 'da ', de: 'von ' },
  { pattern: / in (?=[A-Z])/g, nl: ' in ', fr: ' dans ', es: ' en ', it: ' in ', de: ' in ' },
  { pattern: /\bfrom (?=[A-Z])/g, nl: 'van ', fr: 'de ', es: 'de ', it: 'da ', de: 'von ' },
];

/** Een gedachtestreepje in de data wordt een scheidingspunt. */
function cleanDashes(text: string): string {
  return text.replace(/\s+\u2014\s+/g, ' · ').replace(/\u2014/g, '·');
}

/** Een brontekst, enchantnaam of edelsteennaam in de taal van de pagina. */
export function translateSource(text: string | undefined, locale: Locale): string {
  if (!text) return '';
  const trimmed = text.trim();
  for (const [pattern, map] of whole) {
    if (pattern.test(trimmed)) return map[locale] ?? map.en ?? trimmed;
  }
  let out = cleanDashes(trimmed);
  for (const rule of rules) {
    const replacement = rule[locale] ?? (locale === 'en' ? undefined : undefined);
    if (locale === 'en') {
      if (rule.en) out = out.replace(rule.pattern, rule.en);
      continue;
    }
    if (replacement !== undefined) out = out.replace(rule.pattern, replacement);
    else if (rule.en) out = out.replace(rule.pattern, rule.en);
  }
  return out.replace(/\$\d/g, '').replace(/\s+([,.])/g, '$1').replace(/\s{2,}/g, ' ').trim();
}
