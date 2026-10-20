/*
 * De hub /guides/ als kaarten per categorie (Nutri, 10 oktober 2026: "Do
 * everything except for 3"). Een nieuwe gids komt hier bij, in de juiste
 * categorie, met een omschrijving in i18n/guides-hub.ts. De tekst bovenaan en
 * de frontmatter blijven in pages/<taal>/guides.md.
 *
 * `key` is het taalloze pad van de pagina zonder `guides/` ervoor (`camping`,
 * `dungeons/gnomeregan`), of een sectie buiten /guides/ met `/` ervoor
 * (`/classes`). Het beeld is een bestand uit src/assets/posts; zonder beeld
 * krijgt de kaart de gestreepte plek uit de handoff (§4.1).
 */

export type HubCard = {
  key: string;
  /** Titel uit i18n (`card...`); anders de korte naam van de pagina. */
  label?: 'cardDungeons' | 'cardLeveling' | 'cardRoutes' | 'cardClasses' | 'cardTradeskills' | 'cardReputations' | 'cardForever';
  image?: string;
  levels?: string;
  isNew?: boolean;
  /** Een reeks pagina's op één kaart, zoals de vijf delen van de Skyborne-route. */
  parts?: string[];
};

export type HubCategory = {
  key: 'dungeons' | 'leveling' | 'classes' | 'collections' | 'world' | 'items' | 'more';
  cards: HubCard[];
  /** Telt niet mee in het aantal gidsen: verwijzingen naar andere secties. */
  external?: boolean;
};

export const hubCategories: HubCategory[] = [
  {
    key: 'leveling',
    cards: [
      {
        key: 'leveling/skyborne-druid-1-6',
        label: 'cardLeveling',
        image: '2026-09-28-wow-forever-skyborne-above-the-clouds.jpg',
        levels: '1-16',
        parts: [
          'leveling/skyborne-druid-1-6',
          'leveling/skyborne-druid-6-10',
          'leveling/skyborne-druid-10-13',
          'leveling/skyborne-druid-13-14',
          'leveling/skyborne-druid-14-16',
        ],
      },
      { key: 'experience', image: '2026-10-14-wow-forever-camp-tent-and-sleeping-bag.jpg' },
      { key: '/routes', label: 'cardRoutes', image: '2026-09-17-wow-forever-dustwallow-marsh.jpg' },
      // De vergelijkingen (Nutri, 19 oktober 2026: "on this overview page I also miss the comparison posts").
      { key: '/compare/leveling-addons-forever', image: '2026-10-19-wow-forever-journey-guide-menu.png' },
      { key: '/compare/restedxp-vs-journey', image: '2026-10-19-wow-forever-journey-guide-panel.png' },
      { key: '/compare/journey-vs-zygor', image: '2026-10-19-wow-forever-journey-vendor-step.png' },
      { key: '/compare/restedxp-vs-zygor', image: '2026-10-04-wow-forever-leveling-alone-in-durotar.jpg' },
      { key: '/compare/free-vs-premium', image: '2026-10-14-wow-forever-quest-log-colors.jpg' },
      { key: '/compare/dungeon-vs-questing', image: '2026-10-04-wow-forever-players-queue-for-a-quest-in-a-cave.jpg' },
    ],
  },
  {
    key: 'dungeons',
    cards: [
      // Het overzicht met de levelband van alle dungeons, sinds 19 oktober 2026 als eerste rij.
      { key: 'dungeons', label: 'cardDungeons', image: '2026-10-04-wow-forever-group-fights-in-stratholme.jpg', levels: '9-60' },
      { key: 'dungeons/ragefire-chasm', image: '2026-10-03-wow-forever-ragefire-chasm-taragaman.jpg', levels: '13-18' },
      { key: 'dungeons/hall-of-thanes', image: '2026-09-28-wow-forever-hall-of-thanes-entrance.jpg', levels: '13-18', isNew: true },
      { key: 'dungeons/ruins-of-lordaeron', image: '2026-09-28-wow-forever-ruins-of-lordaeron-entrance.jpg', levels: '15-20', isNew: true },
      { key: 'dungeons/wailing-caverns', image: '2026-10-03-wow-forever-wailing-caverns-entrance.jpg', levels: '15-24' },
      { key: 'dungeons/the-deadmines', image: '2026-10-03-wow-forever-deadmines-entrance-portal.jpg', levels: '17-26' },
      { key: 'dungeons/shadowfang-keep', image: '2026-10-03-wow-forever-shadowfang-keep-entrance-portal.jpg', levels: '20-30' },
      { key: 'dungeons/blackfathom-deeps', image: '2026-10-03-wow-forever-blackfathom-deeps-entrance-portal.jpg', levels: '24-32' },
      { key: 'dungeons/excavation-site-wetlands', image: '2026-10-03-wow-forever-excavation-site-entrance.jpg', levels: '26-31', isNew: true },
      { key: 'dungeons/the-stockade', image: '2026-10-03-wow-forever-stockade-entrance-portal.jpg', levels: '24-32' },
      { key: 'dungeons/city-of-dalaran', image: '2026-09-29-wow-forever-dalaran-at-sunset.jpg', levels: '28-33', isNew: true },
      { key: 'dungeons/razorfen-kraul', image: '2026-10-03-wow-forever-razorfen-kraul-entrance.jpg', levels: '29-38' },
      { key: 'dungeons/gnomeregan', image: '2026-10-03-wow-forever-gnomeregan-front-entrance.jpg', levels: '29-38' },
      { key: 'dungeons/scarlet-monastery-graveyard', image: '2026-10-07-wow-forever-scarlet-crusade-set.jpg', levels: '30-38' },
      { key: 'dungeons/scarlet-monastery-library', image: '2026-10-07-wow-forever-chain-of-the-scarlet-crusade-pieces.jpg', levels: '33-41' },
      { key: 'dungeons/scarlet-monastery-armory', image: '2026-10-03-wow-forever-scarlet-monastery-armory.jpg', levels: '36-44' },
      { key: 'dungeons/scarlet-monastery-cathedral', image: '2026-10-03-wow-forever-scarlet-monastery-cathedral.jpg', levels: '38-46' },
      { key: 'dungeons/razorfen-downs', image: '2026-10-03-wow-forever-razorfen-downs-entrance.jpg', levels: '37-46' },
      { key: 'dungeons/uldaman', levels: '41-51' },
    ],
  },
  {
    key: 'classes',
    cards: [
      { key: 'races-and-classes', image: '2026-10-05-wow-forever-character-creation-hd-portraits.jpg' },
      { key: 'restoration-druid', image: '2026-09-30-wow-forever-druid-talent-trees.jpg' },
      { key: 'balance-druid', image: '2026-10-12-wow-forever-night-elf-glade.jpg' },
      { key: 'mage-leveling', image: '2026-10-08-wow-forever-mage-talent-trees.jpg' },
      { key: 'frost-mage', image: '2026-10-01-wow-forever-dwarf-in-the-snow.jpg' },
      { key: 'arcane-mage', image: '2026-10-19-wow-forever-mage-casting-in-razorfen-kraul.jpg' },
      { key: 'affliction-warlock', image: '2026-10-08-wow-forever-warlock-talent-trees.jpg' },
      { key: 'priest-leveling', image: '2026-10-01-wow-forever-priest-talent-trees.jpg' },
      { key: 'rogue-leveling', image: '2026-10-08-wow-forever-rogue-talent-trees.jpg' },
      { key: 'druid-leveling', image: '2026-10-06-wow-forever-feral-druid-cat-art.jpg' },
      { key: 'warlock-leveling', image: '2026-10-16-wow-forever-troll-warlock-casting.jpg' },
      { key: 'paladin-leveling', image: '2026-10-18-wow-forever-dwarf-paladin-holy-light.jpg' },
      { key: 'warrior-leveling', image: '2026-10-18-wow-forever-dwarf-warrior-two-weapons.jpg' },
      { key: 'hunter-leveling', image: '2026-10-19-wow-forever-night-elf-hunter-and-wolf.jpg' },
      { key: '/classes', label: 'cardClasses', image: '2026-09-13-wow-forever-key-art.jpg' },
    ],
  },
  {
    key: 'collections',
    cards: [
      { key: 'pets', image: '2026-09-30-wow-forever-sewer-beast-raid.jpg' },
      { key: 'mounts', image: '2026-09-23-wow-forever-pack-kodo-vendor.jpg' },
    ],
  },
  {
    key: 'world',
    cards: [
      // De algemene pagina over WoW Forever, met de tijdlijn (Nutri, 19 oktober 2026).
      { key: '/forever', label: 'cardForever', image: '2026-09-17-wow-forever-cinematic-hunter-and-bear.jpg' },
      { key: 'flight-paths', image: '2026-09-28-wow-forever-flight-and-ship-routes-map.jpg' },
      { key: 'camping', image: '2026-09-29-wow-forever-camp-in-teldrassil.jpg' },
      { key: 'bmah', image: '2026-09-27-wow-forever-black-market-agents.jpg' },
    ],
  },
  {
    key: 'items',
    cards: [
      { key: 'library-books', image: '2026-10-06-wow-forever-library-reading-table.jpg' },
      { key: 'night-watchmans-torch', image: '2026-10-09-wow-forever-night-watchmans-torch.jpg' },
      { key: 'cozy-sleeping-bag', image: '2026-09-22-wow-forever-cozy-sleeping-bag.jpg' },
    ],
  },
  {
    key: 'more',
    external: true,
    cards: [
      { key: '/tradeskills', label: 'cardTradeskills', image: '2026-09-21-wow-forever-campfire.jpg' },
      { key: '/reputations', label: 'cardReputations' },
    ],
  },
];

export type HubDungeon = {
  name: string;
  min: number;
  max: number;
  /** Pad onder /guides/ als de dungeon een eigen gids heeft. */
  key?: string;
  isNew?: boolean;
};

/** Alle dungeons van Forever, in de volgorde van het dungeonoverzicht. */
export const hubDungeons: HubDungeon[] = [
  { name: 'Ragefire Chasm', min: 13, max: 18, key: 'dungeons/ragefire-chasm' },
  { name: 'The Hall of Thanes', min: 13, max: 18, key: 'dungeons/hall-of-thanes', isNew: true },
  { name: 'Ruins of Lordaeron', min: 15, max: 20, key: 'dungeons/ruins-of-lordaeron', isNew: true },
  { name: 'Wailing Caverns', min: 15, max: 24, key: 'dungeons/wailing-caverns' },
  { name: 'The Deadmines', min: 17, max: 26, key: 'dungeons/the-deadmines' },
  { name: 'Shadowfang Keep', min: 20, max: 30, key: 'dungeons/shadowfang-keep' },
  { name: 'Blackfathom Deeps', min: 24, max: 32, key: 'dungeons/blackfathom-deeps' },
  { name: 'Excavation Site: Wetlands', min: 26, max: 31, key: 'dungeons/excavation-site-wetlands', isNew: true },
  { name: 'The Stockade', min: 24, max: 32, key: 'dungeons/the-stockade' },
  { name: 'City of Dalaran', min: 28, max: 33, key: 'dungeons/city-of-dalaran', isNew: true },
  { name: 'Razorfen Kraul', min: 29, max: 38, key: 'dungeons/razorfen-kraul' },
  { name: 'Gnomeregan', min: 29, max: 38, key: 'dungeons/gnomeregan' },
  { name: 'The Drowned City', min: 35, max: 40, isNew: true },
  { name: 'Scarlet Monastery: Graveyard', min: 30, max: 38, key: 'dungeons/scarlet-monastery-graveyard' },
  { name: 'Scarlet Monastery: Library', min: 33, max: 41, key: 'dungeons/scarlet-monastery-library' },
  { name: 'Scarlet Monastery: Armory', min: 36, max: 44, key: 'dungeons/scarlet-monastery-armory' },
  { name: 'Scarlet Monastery: Cathedral', min: 38, max: 46, key: 'dungeons/scarlet-monastery-cathedral' },
  { name: 'Razorfen Downs', min: 37, max: 46, key: 'dungeons/razorfen-downs' },
  { name: "Krol'dok Stronghold", min: 40, max: 45, isNew: true },
  { name: 'Uldaman', min: 41, max: 51, key: 'dungeons/uldaman' },
  { name: "Zul'Farrak", min: 40, max: 50 },
  { name: 'Maraudon', min: 41, max: 50 },
  { name: 'Alcaz Prison', min: 48, max: 53, isNew: true },
  { name: 'Sunken Temple', min: 46, max: 54 },
  { name: 'Blackrock Depths', min: 50, max: 60 },
  { name: 'Dire Maul', min: 52, max: 60 },
  { name: 'Blackmaw Hold', min: 55, max: 60, isNew: true },
  { name: "Shaper's Terrace", min: 58, max: 60, isNew: true },
  { name: 'Lower Blackrock Spire', min: 54, max: 60 },
  { name: 'Scholomance', min: 54, max: 60 },
  { name: 'Stratholme', min: 54, max: 60 },
  { name: 'Upper Blackrock Spire', min: 54, max: 60 },
];
