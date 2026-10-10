/*
 * De levelbuild in de browser (AFSPRAKEN.md §19 van de app): een level kiezen met de
 * schuifbalk of met min en plus, de extra punten van Talented meetellen, en de bomen
 * en de lijst laten meelopen.
 *
 * De rekenregel is die van src/lib/leveling.ts en van de app: op level L met T extra
 * punten staan er L - 9 + T punten, uit de fase die op dat level geldt. De bomen worden
 * gekleurd zoals in de talentcalculator (talent-calc.ts), maar klikken op een vakje
 * doet hier niets: dit is een build om te volgen, niet om te maken.
 *
 * Het adres draagt de keuze (`?level=24&talented=2`), bijgewerkt met `replaceState`.
 */

type Phase = { from: number; order: string[] };
type Config = {
  phases: Phase[];
  maxLevel: number;
  maxTalented: number;
  trees: { id: string; talents: string[] }[];
  calc: string;
};

const MIN_LEVEL = 10;
const root = document.querySelector<HTMLElement>('[data-leveling]');
if (root) start(root);

function start(root: HTMLElement) {
  const config = JSON.parse(root.dataset.leveling ?? '{}') as Config;
  const params = new URLSearchParams(location.search);
  const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
  let level = clamp(Number(params.get('level') ?? config.maxLevel) || config.maxLevel, MIN_LEVEL, config.maxLevel);
  let talented = clamp(Number(params.get('talented') ?? 0) || 0, 0, config.maxTalented);

  const trees = Array.from(root.querySelectorAll<HTMLElement>('[data-tree]')).map((el) => ({
    el,
    id: el.dataset.tree ?? '',
    spentEl: el.querySelector<HTMLElement>('[data-tree-spent]'),
    arrows: Array.from(el.querySelectorAll<SVGGElement>('[data-arrow-from]')),
    nodes: Array.from(el.querySelectorAll<HTMLButtonElement>('.wf-node')).map((node) => ({
      el: node,
      id: node.dataset.node ?? '',
      max: Number(node.dataset.max ?? '1'),
      needs: Number(node.dataset.needs ?? '0'),
      requires: node.dataset.requires ?? '',
      rankEl: node.querySelector<HTMLElement>('[data-node-rank]'),
    })),
  }));
  const rows = Array.from(root.querySelectorAll<HTMLButtonElement>('.wf-levelrow'));

  function phaseAt(at: number): number {
    let index = 0;
    config.phases.forEach((phase, i) => { if (phase.from <= at) index = i; });
    return index;
  }

  function draw() {
    const p = phaseAt(level);
    const order = config.phases[p].order;
    const count = clamp(level - 9 + talented, 0, order.length);
    const taken = new Map<string, number>();
    for (const key of order.slice(0, count)) taken.set(key, (taken.get(key) ?? 0) + 1);
    const current = count > 0 ? order[count - 1] : '';

    for (const tree of trees) {
      let spent = 0;
      const rank = (id: string) => taken.get(`${tree.id}/${id}`) ?? 0;
      for (const node of tree.nodes) spent += rank(node.id);
      if (tree.spentEl) tree.spentEl.textContent = String(spent);
      for (const node of tree.nodes) {
        const r = rank(node.id);
        const source = tree.nodes.find((n) => n.id === node.requires);
        const blocked = !!source && rank(source.id) < source.max;
        node.el.dataset.rank = String(r);
        node.el.classList.toggle('is-filled', r > 0 && r >= node.max);
        node.el.classList.toggle('is-started', r > 0 && r < node.max);
        node.el.classList.toggle('is-locked', r === 0 && (spent < node.needs || blocked));
        node.el.classList.toggle('is-current', `${tree.id}/${node.id}` === current);
        if (node.rankEl) node.rankEl.textContent = `${r}/${node.max}`;
      }
      for (const arrow of tree.arrows) {
        const source = tree.nodes.find((n) => n.id === arrow.dataset.arrowFrom);
        arrow.classList.toggle('is-open', !!source && rank(source.id) >= source.max);
      }
    }

    /* De lijst: het level van elk punt hangt af van Talented; de regel van nu licht op. */
    for (const row of rows) {
      const phase = Number(row.closest<HTMLElement>('[data-phase]')?.dataset.phase ?? '0');
      const point = Number(row.dataset.point ?? '0');
      const at = Math.max(config.phases[phase].from, MIN_LEVEL + point - 1 - talented);
      const levelEl = row.querySelector<HTMLElement>('[data-row-level]');
      if (levelEl) levelEl.textContent = String(at);
      row.dataset.level = String(at);
      row.classList.toggle('is-current', phase === p && point === count);
      row.classList.toggle('is-done', phase === p && point < count);
    }

    root.querySelector<HTMLElement>('[data-spent]')!.textContent = String(count);
    for (const [name, value] of [['level', level], ['talented', talented]] as const) {
      const range = root.querySelector<HTMLInputElement>(`[data-range="${name}"]`);
      const out = root.querySelector<HTMLElement>(`[data-value="${name}"]`);
      if (range) range.value = String(value);
      if (out) out.textContent = String(value);
    }

    /* De volledige build van nu in de talentcalculator (AFSPRAKEN.md §15 van de app). */
    const code = config.trees
      .map((tree) => tree.talents.map((id) => taken.get(`${tree.id}/${id}`) ?? 0).join('').replace(/0+$/, ''))
      .join('-').replace(/-+$/, '');
    const open = root.querySelector<HTMLAnchorElement>('[data-open-calc]');
    if (open) open.href = code ? `${config.calc}?t=${code}` : config.calc;

    const url = new URL(location.href);
    url.searchParams.set('level', String(level));
    if (talented) url.searchParams.set('talented', String(talented)); else url.searchParams.delete('talented');
    history.replaceState(null, '', url);
  }

  for (const button of root.querySelectorAll<HTMLButtonElement>('[data-step]')) {
    button.addEventListener('click', () => {
      const by = Number(button.dataset.by ?? '0');
      if (button.dataset.step === 'level') level = clamp(level + by, MIN_LEVEL, config.maxLevel);
      else talented = clamp(talented + by, 0, config.maxTalented);
      draw();
    });
  }
  root.querySelector<HTMLInputElement>('[data-range="level"]')?.addEventListener('input', (event) => {
    level = Number((event.target as HTMLInputElement).value); draw();
  });
  root.querySelector<HTMLInputElement>('[data-range="talented"]')?.addEventListener('input', (event) => {
    talented = Number((event.target as HTMLInputElement).value); draw();
  });
  for (const row of rows) {
    row.addEventListener('click', () => {
      level = clamp(Number(row.dataset.level ?? level), MIN_LEVEL, config.maxLevel);
      const phase = Number(row.closest<HTMLElement>('[data-phase]')?.dataset.phase ?? '0');
      /* Een punt van een vroegere fase: naar het laatste level van die fase. */
      const next = config.phases[phase + 1];
      if (next && level >= next.from) level = next.from - 1;
      draw();
    });
  }

  /* De tooltip binnen het scherm houden, zoals in de talentcalculator. */
  for (const tree of trees) {
    for (const node of tree.nodes) {
      const place = () => {
        const tip = node.el.querySelector<HTMLElement>('.wf-tip');
        if (!tip) return;
        tip.style.setProperty('--wf-tip-dx', '0px');
        tip.style.display = 'block';
        const r = tip.getBoundingClientRect();
        tip.style.display = '';
        const dx = r.left < 8 ? 8 - r.left : r.right > window.innerWidth - 8 ? window.innerWidth - 8 - r.right : 0;
        tip.style.setProperty('--wf-tip-dx', `${Math.round(dx)}px`);
      };
      node.el.addEventListener('pointerenter', place);
      node.el.addEventListener('focus', place);
    }
  }

  const copy = root.querySelector<HTMLButtonElement>('[data-copy]');
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      const before = copy.textContent;
      copy.textContent = copy.dataset.copied ?? 'Copied';
      setTimeout(() => { copy.textContent = before; }, 1600);
    } catch { /* geen klembord: niets doen */ }
  });

  draw();
}
