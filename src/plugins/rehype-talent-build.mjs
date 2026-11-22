/*
 * A talent build as a picture, inside the guide (Nutri, 22 November 2026: every spec guide gets
 * "the talent build, a visual of it and also a link to the talent calculator").
 *
 * Every paragraph on a class page (`content/pages/<lang>/classes/...`) that links to the talent
 * calculator (`/talents/<class>/?t=<code>`) gets a figure right after it: the three trees of that
 * class, with the icon of every talent and the points in it, on the same tree art as the
 * calculator. The whole figure links to the calculator too, so a tap on the trees opens the build.
 *
 * Read only and without JavaScript: the build comes from the code in the link, the talents from
 * src/data/talents.json, so the picture can never drift from the calculator.
 */
import { readFileSync } from 'node:fs';

const DATA = JSON.parse(readFileSync(new URL('../data/talents.json', import.meta.url), 'utf8'));
const CLASSES = Object.fromEntries(DATA.classes.map((c) => [c.id, c]));
const LINK = /^(?:\/[a-z]{2})?\/talents\/([a-z]+)\/\?t=([0-9-]+)$/;

const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Same rules as decodeBuild in src/lib/talents.ts. */
function decode(code, klass) {
  const groups = code.split('-');
  return klass.trees.map((tree, i) => {
    const digits = (groups[i] ?? '').replace(/[^0-9]/g, '');
    return tree.talents.map((t, j) => Math.min(Math.max(0, Number(digits[j] ?? '0')), t.maxRank));
  });
}

function findLink(node) {
  if (node?.type !== 'element') return null;
  if (node.tagName === 'a' && typeof node.properties?.href === 'string') {
    const m = node.properties.href.match(LINK);
    if (m) return { href: node.properties.href, cls: m[1], code: m[2] };
  }
  for (const kid of node.children ?? []) {
    const found = findLink(kid);
    if (found) return found;
  }
  return null;
}

function figure({ href, cls, code }) {
  const klass = CLASSES[cls];
  if (!klass) return null;
  const ranks = decode(code, klass);
  const spent = ranks.map((r) => r.reduce((a, b) => a + b, 0));
  const trees = klass.trees.map((tree, i) => {
    const rows = tree.talents.reduce((m, t) => Math.max(m, t.row), 1);
    const nodes = tree.talents.map((t, j) => {
      const n = ranks[i][j];
      const state = n === 0 ? 'is-off' : n === t.maxRank ? 'is-max' : 'is-on';
      const img = t.icon ? `<img src="/icons/${esc(t.icon)}.jpg" alt="" width="32" height="32" loading="lazy" decoding="async">` : '';
      return `<span class="wf-build__node ${state}" style="grid-row:${t.row};grid-column:${t.col}" title="${esc(`${t.name} ${n}/${t.maxRank}`)}">${img}${n > 0 ? `<b>${n}</b>` : ''}</span>`;
    }).join('');
    return `<span class="wf-build__tree ${spent[i] ? 'has-points' : 'is-empty'}" style="--wf-build-art:url('/trees/treebg_${esc(cls)}_${esc(tree.id)}.jpg')">`
      + `<span class="wf-build__head"><span class="wf-build__name">${esc(tree.name)}</span><span class="wf-build__spent">${spent[i]}</span></span>`
      + `<span class="wf-build__grid" style="--rows:${rows}">${nodes}</span></span>`;
  }).join('');
  const label = `${klass.name} ${spent.join('/')}`;
  return `<figure class="wf-build"><a class="wf-build__link" href="${esc(href)}" aria-label="${esc(label)}"><span class="wf-build__trees">${trees}</span></a></figure>`;
}

export default function talentBuild(fctx) {
  const path = fctx.fileURL ? decodeURIComponent(fctx.fileURL.pathname) : '';
  const enabled = /\/content\/pages\/[a-z]{2}\/classes\//.test(path);
  return {
    name: 'wf-talent-build',
    after(root, ctx) {
      if (!enabled || !root.children) return;
      const seen = new Set();
      for (const node of [...root.children]) {
        if (node?.type !== 'element' || node.tagName !== 'p') continue;
        const link = findLink(node);
        if (!link || seen.has(link.code)) continue;
        const html = figure(link);
        if (!html) continue;
        seen.add(link.code);
        ctx.insertAfter(node, { type: 'raw', value: html });
      }
    },
  };
}
