/*
 * Beelden naar media.wowforever.be (Nutri, 10 november 2026: "I would put all
 * images in a separate repo at media.wowforever.be").
 *
 * Draait na `astro build` en vóór Pagefind, en alleen als MEDIA_URL gezet is
 * (de workflow doet dat; lokaal en in tst blijft alles zoals het was).
 *
 * 1. Elk beeld in dist (webp, jpg, png, gif, avif) verhuist naar MEDIA_OUT,
 *    met hetzelfde pad. Uitzondering: dist/assets en de bestanden in de wortel
 *    (favicon, logo's, deelbeeld), die blijven op de hoofdsite.
 * 2. In elke HTML-, XML-, JSON-, JS- en CSS-pagina wordt elke verwijzing naar
 *    zo'n beeld een volle URL op MEDIA_URL, ook als ze al met
 *    https://wowforever.be begon (og:image, JSON-LD, feeds, de API van de app).
 * 3. Scripts die een icoonpad zelf samenstellen (`/wh/${naam}.jpg`) krijgen de
 *    map vooraan als volle URL.
 * 4. Controle: blijft er ergens een verwijzing naar een verhuisd beeld op de
 *    hoofdsite staan, dan stopt de build. Liever geen deploy dan kapotte beelden.
 *
 * Daarna schrijft het `manifest.txt` (pad en sha1 per beeld) in MEDIA_OUT;
 * scripts/push-media.sh vergelijkt dat met de live media-site.
 */
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const MEDIA = process.env.MEDIA_URL?.replace(/\/$/, '');
if (!MEDIA) {
  console.log('split-media: geen MEDIA_URL, beelden blijven op de hoofdsite');
  process.exit(0);
}
const DIST = process.env.MEDIA_DIST ?? 'dist';
const OUT = process.env.MEDIA_OUT ?? 'media-out';
const SITE = 'https://wowforever.be';

const IMAGE = /\.(webp|jpe?g|png|gif|avif)$/i;
const TEXT = /\.(html|xml|json|js|mjs|css|txt|webmanifest)$/i;
const KEEP = (rel) => !rel.includes('/') || rel.startsWith('assets/');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(DIST);
const rel = (p) => relative(DIST, p).split(sep).join('/');

/* 1. beelden verhuizen */
const moved = new Set();
const manifest = [];
for (const p of files) {
  const r = rel(p);
  if (!IMAGE.test(r) || KEEP(r)) continue;
  const target = join(OUT, r);
  mkdirSync(dirname(target), { recursive: true });
  manifest.push(`${r} ${createHash('sha1').update(readFileSync(p)).digest('hex')}`);
  renameSync(p, target);
  moved.add(r);
}
/*
 * Alleen mappen waar na het verhuizen niets meer van overblijft (wh, icons):
 * daar mag een script het pad zelf samenstellen. /guides/ is ook een paginapad,
 * dat blijft dus buiten schot.
 */
const leftover = new Set(files.map(rel).filter((r) => !moved.has(r)).map((r) => r.split('/')[0]));
const folders = [...new Set([...moved].map((r) => r.split('/')[0]))].filter((f) => f !== '_astro' && !leftover.has(f));

/* 2 en 3. verwijzingen herschrijven */
const PATH = /(?:https?:\/\/(?:www\.)?wowforever\.be)?\/((?:[\w.-]+\/)*[\w.%~-]+\.(?:webp|jpe?g|png|gif|avif))(?![\w/])/gi;
const PREFIX = new RegExp(`([\`"'(])/(${folders.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})/`, 'g');
let rewritten = 0;
let left = [];
for (const p of files) {
  if (!TEXT.test(p)) continue;
  const before = readFileSync(p, 'utf8');
  let after = before.replace(PATH, (m, r) => {
    let key = r;
    try { key = decodeURIComponent(r); } catch {}
    return moved.has(key) || moved.has(r) ? `${MEDIA}/${r}` : m;
  });
  if (/\.(m?js|css)$/i.test(p) && folders.length) after = after.replace(PREFIX, (m, q, f) => `${q}${MEDIA}/${f}/`);
  if (after !== before) {
    writeFileSync(p, after);
    rewritten++;
  }
  /* 4. controle: geen relatieve of hoofdsite-verwijzing naar een verhuisd beeld meer */
  for (const m of after.split(`${MEDIA}/`).join('\u0000').matchAll(PATH)) {
    if (moved.has(m[1])) left.push(`${rel(p)}: ${m[0]}`);
  }
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'manifest.txt'), manifest.sort().join('\n') + '\n');
console.log(`split-media: ${moved.size} beelden naar ${OUT}, ${rewritten} bestanden herschreven, mappen ${folders.join(', ')}`);
if (left.length) {
  console.error(`split-media: ${left.length} verwijzingen wijzen nog naar de hoofdsite, bv.\n  ${left.slice(0, 10).join('\n  ')}`);
  process.exit(1);
}
