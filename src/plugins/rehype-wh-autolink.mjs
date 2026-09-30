/*
 * Wowhead-links bij het bouwen (Nutri, 29 september 2026: "Go over every single
 * page and check if it needs links to wowhead. I think in the tradeskills there
 * is a lot of them").
 *
 * Een naam uit src/data/wh-autolinks.json (items en spells, per Wowhead-tak,
 * gemaakt door tools/whlinks/auto/ in het privé-repo en elk ID nagekeken bij
 * Wowhead) wordt in de HTML van een Markdown-pagina een link met ons eigen
 * icoon, de kwaliteitskleur en de tooltip van Wowhead, net als de links uit
 * tools/whlinks. De tekst zelf blijft schoon en een nieuwe pagina krijgt de
 * links vanzelf.
 *
 * De tak volgt de pagina: een era-gids de tak van zijn era, een levelroute die
 * van zijn uitbreiding, gidsen, reputaties, de hub en posts over Forever de tak
 * forever. Posts in Classic of Blizzard slaan we over (welke era, staat niet
 * vast), net als de vergelijkingen.
 *
 * In een tabelcel krijgt elke naam een link, in de lopende tekst alleen de
 * eerste keer per pagina. Nooit in een bestaande link, een kop, een tabelkop,
 * code of een insluiting. Alleen de hele naam, met woordgrenzen.
 */
import fs from 'node:fs';

const dict = JSON.parse(fs.readFileSync(new URL('../data/wh-autolinks.json', import.meta.url), 'utf8'));
const ERA = { classic: 'classic', tbc: 'tbc', wotlk: 'wotlk', cata: 'cata', mop: 'mop-classic' };
const ROUTES = { '1-60': 'classic', '60-70': 'tbc', '70-80': 'wotlk', '80-85': 'cata', '85-90': 'mop-classic' };
const SKIP = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th', 'code', 'pre', 'figure', 'button', 'script', 'style']);

function branchFor(path, frontmatter) {
  const m = path.split('/src/content/')[1];
  if (!m) return null;
  const [col, , third, fourth] = m.replace(/\.md$/, '').split('/');
  if (col === 'tradeskills' || col === 'classes') return ERA[third] ?? null;
  if (col === 'reputations') return 'forever';
  if (col === 'pages') {
    if (third === 'routes') return fourth ? ROUTES[fourth] ?? null : null;
    if (third === 'compare') return null;
    return 'forever';
  }
  if (col === 'news') return frontmatter?.category === 'forever' ? 'forever' : null;
  return null;
}

const cache = new Map();
/* Een classgids krijgt er ook de losse abilities en talenten bij (Charge, Execute), uit "_class:<tak>". */
function matcher(branch, withClass = false) {
  const cacheKey = withClass ? `${branch}+class` : branch;
  if (cache.has(cacheKey)) return cache.get(cacheKey);
  const all = { ...(dict[branch] ?? {}), ...(withClass ? dict[`_class:${branch}`] ?? {} : {}) };
  const names = Object.keys(all).sort((a, b) => b.length - a.length);
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "['’]");
  const re = names.length ? new RegExp(`(?<![\\p{L}\\p{N}'’-])(${names.map(esc).join('|')})(?![\\p{L}\\p{N}'’-])`, 'gu') : null;
  const byKey = new Map(names.map((n) => [n.replace(/’/g, "'"), all[n]]));
  const value = { re, byKey };
  cache.set(cacheKey, value);
  return value;
}

function link(branch, name, entry) {
  const type = entry.t === 'i' ? 'item' : 'spell';
  const cls = entry.t === 'i' ? `wf-wh wf-q${entry.q ?? 1}` : 'wf-wh wf-spell';
  const children = [];
  if (entry.icon) {
    children.push({ type: 'element', tagName: 'img', properties: { className: ['wf-wh__icon'], src: `/wh/${entry.icon}.jpg`, alt: '', width: 18, height: 18, loading: 'lazy', decoding: 'async' }, children: [] });
  }
  children.push({ type: 'text', value: name });
  return { type: 'element', tagName: 'a', properties: { className: cls.split(' '), href: `https://www.wowhead.com/${branch}/${type}=${entry.id}` }, children };
}

/*
 * Een plugin voor Sätteri, de Markdown-verwerker van Astro (hastPlugins). De
 * fabriek krijgt per document het bestand; zonder tak doet hij niets.
 */
export default function whAutolink(fctx) {
  const path = fctx.fileURL ? decodeURIComponent(fctx.fileURL.pathname) : '';
  let frontmatter = fctx.data?.astro?.frontmatter;
  if (!frontmatter && path.includes('/src/content/news/')) {
    try {
      const raw = fs.readFileSync(path, 'utf8');
      frontmatter = { category: raw.match(/^category:\s*(\w+)/m)?.[1] };
    } catch { frontmatter = {}; }
  }
  const branch = branchFor(path, frontmatter);
  // Bestaande Markdown-links naar een item of spell op Wowhead: icoon en kleur erbij.
  const upgrade = {
    filter: ['a'],
    visit(node, ctx) {
      const href = String(node.properties?.href ?? '');
      /*
       * Een link naar een eigen pagina met de tooltip van Wowhead (30 september 2026, de
       * tabel met pets): `[Naam](/guides/pets/x/ "wh:item=284664:q2:inv_misc_food_54")`.
       * Icoon en kwaliteitskleur zoals een Wowhead-link, maar de klik blijft op de site.
       */
      const own = String(node.properties?.title ?? '').match(/^wh:(item|spell)=(\d+):q(\d):([a-z0-9_]+)$/);
      if (own && href.startsWith('/')) {
        ctx.setProperty(node, 'title', undefined);
        ctx.setProperty(node, 'className', own[1] === 'item' ? ['wf-wh', `wf-q${own[3]}`] : ['wf-wh', 'wf-spell']);
        ctx.setProperty(node, 'dataWowhead', `${own[1]}=${own[2]}&domain=forever`);
        ctx.prependChild(node, { type: 'element', tagName: 'img', properties: { className: ['wf-wh__icon'], src: `/wh/${own[4]}.jpg`, alt: '', width: 18, height: 18, loading: 'lazy', decoding: 'async' }, children: [] });
        return;
      }
      const m = href.match(/^https:\/\/www\.wowhead\.com\/(classic|tbc|wotlk|cata|mop-classic|forever)\/(?:[a-z]{2}\/)?(item|spell)=(\d+)/);
      if (!m) return;
      const cls = node.properties?.className;
      if (Array.isArray(cls) && cls.includes('wf-wh')) return;
      const entry = dict._ids?.[m[1]]?.[`${m[2][0]}:${m[3]}`];
      if (!entry) return;
      ctx.setProperty(node, 'className', m[2] === 'item' ? ['wf-wh', `wf-q${entry.q ?? 1}`] : ['wf-wh', 'wf-spell']);
      if (entry.icon) ctx.prependChild(node, { type: 'element', tagName: 'img', properties: { className: ['wf-wh__icon'], src: `/wh/${entry.icon}.jpg`, alt: '', width: 18, height: 18, loading: 'lazy', decoding: 'async' }, children: [] });
    },
  };
  if (!branch || !dict[branch]) return { name: 'wh-autolink', element: upgrade };
  const { re, byKey } = matcher(branch, path.includes('/src/content/classes/'));
  if (!re) return { name: 'wh-autolink', element: upgrade };
  const seen = new Set();
  // In een classgids is een naam die zowel item als spell is bijna altijd de ability of het talent.
  const preferSpell = path.includes('/src/content/classes/');

  return {
    name: 'wh-autolink',
    element: upgrade,
    text(node, ctx) {
      // Waar staat deze tekst? Niet in een link, kop, tabelkop, code of insluiting.
      let inCell = false;
      for (let p = ctx.parent(node); p && p.type === 'element'; p = ctx.parent(p)) {
        if (SKIP.has(p.tagName)) return;
        const cls = p.properties?.className;
        if (Array.isArray(cls) && cls.some((c) => String(c).startsWith('wf-embed'))) return;
        if (p.tagName === 'td') inCell = true;
      }
      /*
       * Ook niet binnen een link uit inline HTML (30 september 2026): de links van
       * tools/whlinks staan als `<a ...><img ...>Naam</a>` in de Markdown, en dan zijn
       * de tags losse raw-knopen naast de tekst, geen ouder ervan. Zonder deze telling
       * kwam er een tweede link in de eerste, op zestig pagina's.
       */
      const parent = ctx.parent(node);
      if (parent?.children) {
        let open = 0;
        for (const sibling of parent.children) {
          // De knopen zijn kopieën, dus vergelijken op soort en tekst, niet op identiteit.
          if (sibling === node || (sibling.type === 'text' && sibling.value === node.value)) break;
          if (sibling.type === 'raw' && typeof sibling.value === 'string') {
            open += (sibling.value.match(/<a[\s>]/g) ?? []).length - (sibling.value.match(/<\/a>/g) ?? []).length;
          }
        }
        if (open > 0) {
          // Die naam is hier al een link: telt als eerste vermelding in de lopende tekst.
          re.lastIndex = 0;
          for (const m of node.value.matchAll(re)) seen.add(m[1].replace(/’/g, "'"));
          return;
        }
      }
      const text = node.value;
      const out = [];
      let last = 0;
      re.lastIndex = 0;
      for (const m of text.matchAll(re)) {
        const name = m[1];
        const key = name.replace(/’/g, "'");
        let entry = byKey.get(key);
        if (!entry) continue;
        if (entry.alt && preferSpell && entry.t === 'i' && entry.alt.t === 's') entry = entry.alt;
        else if (entry.alt && !preferSpell && entry.t === 's' && entry.alt.t === 'i') entry = entry.alt;
        if (!inCell && seen.has(key)) continue;
        seen.add(key);
        if (m.index > last) out.push({ type: 'text', value: text.slice(last, m.index) });
        out.push(link(branch, name, entry));
        last = m.index + name.length;
      }
      if (!out.length) return;
      if (last < text.length) out.push({ type: 'text', value: text.slice(last) });
      ctx.replaceNode(node, out);
    },
  };
}
