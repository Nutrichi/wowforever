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
  label?: 'cardDungeons' | 'cardLeveling' | 'cardRoutes' | 'cardClasses' | 'cardTradeskills' | 'cardReputations';
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
    key: 'dungeons',
    cards: [
      { key: 'dungeons/ragefire-chasm', image: '2026-10-03-wow-forever-ragefire-chasm-taragaman.jpg', levels: '9-19' },
      { key: 'dungeons/hall-of-thanes', image: '2026-09-28-wow-forever-hall-of-thanes-entrance.jpg', levels: '13-18', isNew: true },
      { key: 'dungeons/ruins-of-lordaeron', image: '2026-09-28-wow-forever-ruins-of-lordaeron-entrance.jpg', levels: '15-20', isNew: true },
      { key: 'dungeons/wailing-caverns', image: '2026-10-03-wow-forever-wailing-caverns-entrance.jpg', levels: '15-24' },
      { key: 'dungeons/the-deadmines', image: '2026-10-03-wow-forever-deadmines-entrance-portal.jpg', levels: '14-24' },
      { key: 'dungeons/shadowfang-keep', image: '2026-10-03-wow-forever-shadowfang-keep-entrance-portal.jpg', levels: '18-28' },
      { key: 'dungeons/blackfathom-deeps', image: '2026-10-03-wow-forever-blackfathom-deeps-entrance-portal.jpg', levels: '21-30' },
      { key: 'dungeons/excavation-site-wetlands', image: '2026-10-03-wow-forever-excavation-site-entrance.jpg', levels: '26-31', isNew: true },
      { key: 'dungeons/the-stockade', image: '2026-10-03-wow-forever-stockade-entrance-portal.jpg', levels: '22-30' },
      { key: 'dungeons/city-of-dalaran', image: '2026-09-29-wow-forever-dalaran-at-sunset.jpg', levels: '28-33', isNew: true },
      { key: 'dungeons/razorfen-kraul', image: '2026-10-03-wow-forever-razorfen-kraul-entrance.jpg', levels: '25-34' },
      { key: 'dungeons/gnomeregan', image: '2026-10-03-wow-forever-gnomeregan-front-entrance.jpg', levels: '25-38' },
      { key: 'dungeons/scarlet-monastery', image: '2026-10-03-wow-forever-scarlet-monastery-cathedral.jpg', levels: '26-45' },
      { key: 'dungeons/razorfen-downs', image: '2026-10-03-wow-forever-razorfen-downs-entrance.jpg', levels: '35-44' },
    ],
  },
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
      { key: '/routes', label: 'cardRoutes', image: '2026-09-17-wow-forever-dustwallow-marsh.jpg' },
    ],
  },
  {
    key: 'classes',
    cards: [
      { key: 'races-and-classes', image: '2026-10-05-wow-forever-character-creation-hd-portraits.jpg' },
      { key: 'restoration-druid', image: '2026-09-30-wow-forever-druid-talent-trees.jpg' },
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
      { key: 'flight-paths', image: '2026-09-28-wow-forever-flight-and-ship-routes-map.jpg' },
      { key: 'camping', image: '2026-09-29-wow-forever-camp-in-teldrassil.jpg' },
      { key: 'bmah', image: '2026-09-27-wow-forever-black-market-agents.jpg' },
    ],
  },
  {
    key: 'items',
    cards: [
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

/** De kaart naar het dungeonoverzicht, boven de levelband. */
export const dungeonOverviewKey = 'dungeons';

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
  { name: 'Ragefire Chasm', min: 9, max: 19, key: 'dungeons/ragefire-chasm' },
  { name: 'The Hall of Thanes', min: 13, max: 18, key: 'dungeons/hall-of-thanes', isNew: true },
  { name: 'Ruins of Lordaeron', min: 15, max: 20, key: 'dungeons/ruins-of-lordaeron', isNew: true },
  { name: 'Wailing Caverns', min: 15, max: 24, key: 'dungeons/wailing-caverns' },
  { name: 'The Deadmines', min: 14, max: 24, key: 'dungeons/the-deadmines' },
  { name: 'Shadowfang Keep', min: 18, max: 28, key: 'dungeons/shadowfang-keep' },
  { name: 'Blackfathom Deeps', min: 21, max: 30, key: 'dungeons/blackfathom-deeps' },
  { name: 'Excavation Site: Wetlands', min: 26, max: 31, key: 'dungeons/excavation-site-wetlands', isNew: true },
  { name: 'The Stockade', min: 22, max: 30, key: 'dungeons/the-stockade' },
  { name: 'City of Dalaran', min: 28, max: 33, key: 'dungeons/city-of-dalaran', isNew: true },
  { name: 'Razorfen Kraul', min: 25, max: 34, key: 'dungeons/razorfen-kraul' },
  { name: 'Gnomeregan', min: 25, max: 38, key: 'dungeons/gnomeregan' },
  { name: 'The Drowned City', min: 35, max: 40, isNew: true },
  { name: 'Scarlet Monastery', min: 26, max: 45, key: 'dungeons/scarlet-monastery' },
  { name: 'Razorfen Downs', min: 35, max: 44, key: 'dungeons/razorfen-downs' },
  { name: "Krol'dok Stronghold", min: 40, max: 45, isNew: true },
  { name: 'Uldaman', min: 37, max: 47 },
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
