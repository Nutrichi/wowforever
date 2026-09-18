/*
 * De rekenmachine in de browser: klikken, tellen en het adres bijhouden.
 *
 * Dezelfde regels als de app (`Services/TalentBuild.swift` en
 * `LegacyBuild.swift` daar), want een build die hier klopt en daar niet zou het
 * delen waardeloos maken:
 *
 *  1. Een vast aantal punten in totaal, uit `data-total`.
 *  2. Een rij gaat open bij vijf punten per rij eronder, uit `data-needs`. De
 *     Legacy-boom zet die op nul en heeft dus geen drempel.
 *  3. Een pijl vraagt de bron vol, uit `data-requires`.
 *  4. Terugnemen mag alleen als de build daarna nog klopt.
 *
 * Klikken gaat omhoog tot vol en daarna omlaag tot nul, precies als in de app.
 * Zo is een misklik met één klik ongedaan en hoef je geen tweede gebaar te
 * kennen.
 *
 * Het adres wordt bijgewerkt met `replaceState`, dus er komt geen regel bij in
 * de geschiedenis van de browser: twintig klikken zouden anders twintig keer
 * terug betekenen.
 */

/** Eén vakje in een boom. Geen `Node`: zo heet een type van de browser al. */
type Vak = {
  el: HTMLButtonElement;
  id: string;
  index: number;
  max: number;
  needs: number;
  requires: string;
  rank: number;
  rankEl: HTMLElement | null;
};

type Tree = {
  id: string;
  el: HTMLElement;
  nodes: Vak[];
  spentEl: HTMLElement | null;
  arrows: SVGGElement[];
};

const root = document.querySelector<HTMLElement>('[data-calc]');
if (root) start(root);

function start(root: HTMLElement) {
  const soort = root.dataset.calc ?? 'talents';
  const total = Number(root.dataset.total ?? '51');
  const param = soort === 'legacy' ? 'l' : 't';

  const trees: Tree[] = Array.from(root.querySelectorAll<HTMLElement>('[data-tree]')).map((el) => ({
    id: el.dataset.tree ?? '',
    el,
    spentEl: el.querySelector<HTMLElement>('[data-tree-spent]'),
    arrows: Array.from(el.querySelectorAll<SVGGElement>('[data-arrow-from]')),
    nodes: Array.from(el.querySelectorAll<HTMLButtonElement>('.wf-node')).map((node) => ({
      el: node,
      id: node.dataset.node ?? '',
      index: Number(node.dataset.index ?? '0'),
      max: Number(node.dataset.max ?? '1'),
      needs: Number(node.dataset.needs ?? '0'),
      requires: node.dataset.requires ?? '',
      rank: Number(node.dataset.rank ?? '0'),
      rankEl: node.querySelector<HTMLElement>('[data-node-rank]'),
    })).sort((a, b) => a.index - b.index),
  }));

  /* Welke vakjes bij een klik omlaag gaan. Zie de uitleg bovenaan. */
  const omlaag = new Set<string>();

  const spentIn = (tree: Tree) => tree.nodes.reduce((som, n) => som + n.rank, 0);
  const totalSpent = () => trees.reduce((som, tree) => som + spentIn(tree), 0);
  const nodeById = (tree: Tree, id: string) => tree.nodes.find((n) => n.id === id);

  const prereqMet = (tree: Tree, node: Vak): boolean => {
    if (!node.requires) return true;
    const bron = nodeById(tree, node.requires);
    return !bron || bron.rank >= bron.max;
  };

  const canAdd = (tree: Tree, node: Vak): boolean =>
    !node.el.disabled
    && totalSpent() < total
    && node.rank < node.max
    && spentIn(tree) >= node.needs
    && prereqMet(tree, node);

  /* Terugnemen mag als de boom daarna nog klopt: elk vakje met punten moet nog
     aan zijn drempel en aan zijn pijl voldoen. Dezelfde hele controle als in de
     app, en niet een lijstje gevallen dat iets vergeet. */
  const canRemove = (tree: Tree, node: Vak): boolean => {
    if (node.rank <= 0) return false;
    node.rank -= 1;
    const inTree = spentIn(tree);
    const klopt = tree.nodes.every((n) => n.rank === 0 || (inTree >= n.needs && prereqMet(tree, n)));
    node.rank += 1;
    return klopt;
  };

  function klik(tree: Tree, node: Vak) {
    if (omlaag.has(node.id)) {
      if (canRemove(tree, node)) {
        node.rank -= 1;
        if (node.rank === 0) omlaag.delete(node.id);
      } else {
        omlaag.delete(node.id);
        if (canAdd(tree, node)) node.rank += 1;
      }
    } else if (canAdd(tree, node)) {
      node.rank += 1;
      if (node.rank >= node.max) omlaag.add(node.id);
    } else if (node.rank > 0) {
      /* Vol, of er is geen punt meer over: dan is omlaag het enige dat een klik
         nog kan betekenen. */
      omlaag.add(node.id);
      if (canRemove(tree, node)) {
        node.rank -= 1;
        if (node.rank === 0) omlaag.delete(node.id);
      }
    }
    teken();
  }

  function teken() {
    const spent = totalSpent();

    for (const tree of trees) {
      const inTree = spentIn(tree);
      if (tree.spentEl) tree.spentEl.textContent = String(inTree);

      for (const node of tree.nodes) {
        const open = inTree >= node.needs;
        const mag = canAdd(tree, node);
        node.el.dataset.rank = String(node.rank);
        node.el.classList.toggle('is-filled', node.rank > 0 && node.rank >= node.max);
        node.el.classList.toggle('is-started', node.rank > 0 && node.rank < node.max);
        node.el.classList.toggle('is-locked', !open || (!mag && node.rank === 0));
        if (node.rankEl) node.rankEl.textContent = `${node.rank}/${node.max}`;
      }

      for (const arrow of tree.arrows) {
        const bron = nodeById(tree, arrow.dataset.arrowFrom ?? '');
        arrow.classList.toggle('is-open', !!bron && bron.rank >= bron.max);
      }
    }

    const spentEl = root.querySelector<HTMLElement>('[data-spent]');
    if (spentEl) spentEl.textContent = String(spent);

    /* Het laagste level waarop deze build kan bestaan: het eerste punt komt op
       level 10 en er komt er een per level. Alleen bij de talenten. */
    const levelWrap = root.querySelector<HTMLElement>('[data-level-wrap]');
    const levelEl = root.querySelector<HTMLElement>('[data-level]');
    if (levelWrap && levelEl) {
      levelWrap.hidden = spent === 0;
      levelEl.textContent = spent === 0 ? '' : String(spent + 9);
    }

    adres();
  }

  function code(): string {
    return trees
      .map((tree) => tree.nodes.map((n) => n.rank).join('').replace(/0+$/, ''))
      .join('-');
  }

  function adres() {
    const url = new URL(window.location.href);
    const waarde = code().replace(/-+$/, '');
    if (waarde) url.searchParams.set(param, waarde);
    else url.searchParams.delete(param);
    /* replaceState en niet pushState: anders kost elke klik een stap terug. */
    window.history.replaceState(null, '', url);
  }

  /* De build uit het adres overnemen. De pagina is gebouwd met wat er bij het
     bouwen in stond, en dat is niets; in de browser staat hij er wel. */
  function lees() {
    const waarde = new URL(window.location.href).searchParams.get(param) ?? '';
    const groepen = waarde.split('-');
    trees.forEach((tree, i) => {
      const cijfers = (groepen[i] ?? '').replace(/[^0-9]/g, '');
      tree.nodes.forEach((node, j) => {
        const uit = Number(cijfers[j] ?? '0');
        node.rank = Number.isFinite(uit) ? Math.min(Math.max(0, uit), node.max) : 0;
      });
    });

    /* Wat het adres vraagt maar de regels niet toelaten, valt eruit. Een link
       van iemand met een oudere versie van de data mag geen onmogelijke build
       tonen. */
    for (const tree of trees) {
      let veranderd = true;
      while (veranderd) {
        veranderd = false;
        const inTree = spentIn(tree);
        for (const node of tree.nodes) {
          if (node.rank > 0 && (inTree < node.needs || !prereqMet(tree, node))) {
            node.rank = 0;
            veranderd = true;
          }
        }
      }
    }
    let over = totalSpent() - total;
    if (over > 0) {
      for (const tree of [...trees].reverse()) {
        for (const node of [...tree.nodes].reverse()) {
          while (over > 0 && node.rank > 0) { node.rank -= 1; over -= 1; }
        }
      }
    }
  }

  /* De tooltip binnen het scherm houden. De plaats komt uit de CSS: naast het
     vakje, of eronder op een telefoon. Maar of daar plaats voor is hangt af van
     waar de boom op het scherm staat, en dat weet alleen de browser. Dus meten
     zodra hij getoond wordt, en het verschil als verschuiving teruggeven. */
  function schuif(el: HTMLElement) {
    const tip = el.querySelector<HTMLElement>('.wf-tip');
    if (!tip) return;
    const marge = 8;
    tip.style.setProperty('--wf-tip-dx', '0px');
    tip.style.display = 'block';
    const r = tip.getBoundingClientRect();
    tip.style.display = '';
    const dx = r.left < marge ? marge - r.left
      : r.right > window.innerWidth - marge ? window.innerWidth - marge - r.right
      : 0;
    tip.style.setProperty('--wf-tip-dx', `${Math.round(dx)}px`);
  }

  for (const tree of trees) {
    for (const node of tree.nodes) {
      node.el.addEventListener('pointerenter', () => schuif(node.el));
      node.el.addEventListener('focus', () => schuif(node.el));
      node.el.addEventListener('click', () => klik(tree, node));
      /* Rechtsklikken haalt er een af, zoals elke calculator die er is. */
      node.el.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (canRemove(tree, node)) { node.rank -= 1; teken(); }
      });
    }
    const reset = tree.el.querySelector<HTMLButtonElement>('[data-tree-reset]');
    reset?.addEventListener('click', () => {
      for (const node of tree.nodes) { node.rank = 0; omlaag.delete(node.id); }
      teken();
    });
  }

  root.querySelector<HTMLButtonElement>('[data-reset-all]')?.addEventListener('click', () => {
    for (const tree of trees) for (const node of tree.nodes) node.rank = 0;
    omlaag.clear();
    teken();
  });

  const copy = root.querySelector<HTMLButtonElement>('[data-copy]');
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const oud = copy.textContent;
      copy.textContent = copy.dataset.copied ?? 'Copied';
      window.setTimeout(() => { copy.textContent = oud; }, 1600);
    } catch {
      /* Zonder toestemming voor het klembord gebeurt er niets; het adres staat
         in de balk en is met de hand te kopiëren. */
    }
  });

  lees();
  teken();
}
