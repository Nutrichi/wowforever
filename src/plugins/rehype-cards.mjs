/*
 * Cards for every Markdown page and post (Nutri, 18 November 2026: "everything with text behind
 * has some kind of a neat box", and then "Do this for all pages").
 *
 * After the other plugins have run, the top-level content is cut at every H2. Each part becomes
 *   <section class="wf-card"><header class="wf-card__head"><h2/></header><div class="wf-card__body">…</div></section>
 * and the text before the first H2 becomes a card without a title bar. Doing it here, at compile
 * time, keeps images, tooltips and heading ids exactly as they were; only the wrapping is new.
 */

const isH2 = (node) => node?.type === 'element' && node.tagName === 'h2';
const isBlank = (node) => node?.type === 'text' && !node.value.trim();

export default function cards() {
  return {
    name: 'wf-cards',
    after(root, ctx) {
      const kids = [...(root.children ?? [])];
      if (!kids.some((node) => !isBlank(node))) return;

      // Groups: [intro], [h2, ...], [h2, ...]
      const groups = [];
      let current = { head: null, body: [] };
      for (const node of kids) {
        if (isH2(node)) {
          if (current.head || current.body.some((n) => !isBlank(n))) groups.push(current);
          current = { head: node, body: [] };
        } else {
          current.body.push(node);
        }
      }
      if (current.head || current.body.some((n) => !isBlank(n))) groups.push(current);

      // Open and close tags as raw nodes around the existing nodes: they are written out as they are,
      // so the content itself is never copied or rebuilt.
      const raw = (value) => ({ type: 'raw', value });
      for (const group of groups) {
        const body = group.body.filter((n) => !isBlank(n));
        if (group.head) {
          ctx.insertBefore(group.head, raw('<section class="wf-card"><header class="wf-card__head">'));
          ctx.insertAfter(group.head, raw('</header><div class="wf-card__body">'));
        } else {
          ctx.insertBefore(body[0], raw('<section class="wf-card"><div class="wf-card__body">'));
        }
        const last = body.length ? body[body.length - 1] : null;
        if (last) ctx.insertAfter(last, raw('</div></section>'));
        else ctx.insertAfter(group.head, raw('</div></section>'));
      }
    },
  };
}
