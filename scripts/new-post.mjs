#!/usr/bin/env node
/*
 * `npm run new-post`: maakt een correct gevormd Markdown-bestand met de datum
 * van vandaag, zodat een post beginnen nooit betekent dat je frontmatter uit
 * een ander bestand moet kopiëren.
 *
 * Gebruik:
 *   npm run new-post -- "Blizzard opens the WoW Forever beta" --category forever
 *   npm run new-post -- "TBC Anniversary phase 4 starts" --category classic
 *   npm run new-post -- "Blizzard announces the BlizzCon 2027 dates" --category blizzard
 *
 * Schrijft altijd naar de Engelse map: Engels is de brontaal. De vijf
 * vertalingen worden met de hand geschreven, elk met `manual: true`
 * (SCHRIJFSTIJL.md §11).
 */

import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const CATEGORIES = ['forever', 'classic', 'blizzard'];

/** Titel naar slug: kleine letters, koppeltekens, geen accenten. */
function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

/** Een waarde die veilig tussen aanhalingstekens in YAML past. */
function quote(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function parseArgs(argv) {
  const args = { title: '', category: '', slug: '' };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--category') args.category = argv[++i] ?? '';
    else if (arg === '--slug') args.slug = argv[++i] ?? '';
    else if (!arg.startsWith('--') && !args.title) args.title = arg;
  }

  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.title || !CATEGORIES.includes(args.category)) {
  console.error('Gebruik: npm run new-post -- "De titel van de post" --category forever');
  console.error(`De categorie is verplicht, een van: ${CATEGORIES.join(', ')}`);
  process.exit(1);
}

const slug = args.slug ? slugify(args.slug) : slugify(args.title);

if (!slug) {
  console.error('Uit die titel komt geen bruikbare slug. Geef er een mee met --slug.');
  process.exit(1);
}

/*
 * Het tijdstip van nu, in Belgische tijd, als 2026-09-14T21:05:00+02:00.
 *
 * **Met tijdstip en niet alleen de datum** (Nutri, 19 september 2026): de feed
 * sorteert op dit veld, en zonder tijdstip staan alle posts van dezelfde dag op
 * middernacht. Dan besliste de bestandsnaam wie bovenaan kwam, en een nieuwe
 * post landde midden in de lijst. Met een tijdstip staat de nieuwste altijd
 * bovenaan. Schrijf je een post met de hand, neem dan dezelfde vorm over.
 */
const now = new Date();
const inBrussels = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Brussels',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
  timeZoneName: 'longOffset',
}).formatToParts(now);
const part = (type) => inBrussels.find((p) => p.type === type)?.value ?? '';
/* "GMT+02:00" wordt "+02:00"; in de winter geeft Intl "GMT+1", dus vullen we aan. */
const rawOffset = part('timeZoneName').replace('GMT', '') || '+00:00';
const offset = /^[+-]\d{2}:\d{2}$/.test(rawOffset)
  ? rawOffset
  : rawOffset.replace(/^([+-])(\d)$/, '$10$2:00').replace(/^([+-])(\d{2})$/, '$1$2:00');
const date = `${part('year')}-${part('month')}-${part('day')}T${part('hour')}:${part('minute')}:${part('second')}${offset}`;

const root = path.resolve(process.cwd(), 'src/content/news/en');
const file = path.join(root, `${slug}.md`);

try {
  await access(file);
  console.error(`Bestaat al: src/content/news/en/${slug}.md`);
  process.exit(1);
} catch {
  // Bestaat nog niet; dat is precies de bedoeling.
}

/*
 * De frontmatter staat er voluit in, ook de velden die leeg blijven, zodat
 * meteen zichtbaar is wat er ingevuld kan worden. `image` staat als
 * commentaar klaar met het juiste relatieve pad.
 */
const frontmatter = [
  '---',
  `title: ${quote(args.title)}`,
  'description: ""',
  `date: ${date}`,
  `category: ${args.category}`,
  'lang: en',
  '# Zet het beeld in src/assets/posts/ en haal deze twee regels uit commentaar.',
  `# image: ../../../assets/posts/${slug}.jpg`,
  '# imageAlt: ""',
  'source: ""',
  'sourceUrl: ""',
  'tags: []',
  '# featured: true zet deze post groot links op de homepage.',
  'featured: false',
  '# Zolang dit true is, wordt de post niet gebouwd en niet geïndexeerd.',
  'draft: true',
  '---',
  '',
  'Schrijf hier de post, in de stem van SCHRIJFSTIJL.md: geen ik, korte zinnen,',
  'een openingsalinea van ongeveer veertig woorden, de bron in de zin.',
  '',
].join('\n');

await mkdir(root, { recursive: true });
await writeFile(file, frontmatter, 'utf8');

console.log(`Aangemaakt: src/content/news/en/${slug}.md`);
console.log(`Pad op de site: /news/${slug}`);
console.log('Zet draft op false zodra hij klaar is, en schrijf dan de vijf vertalingen met manual: true.');
