/*
 * De raidplanner in de browser (RaidPlanner.astro). De regels staan in
 * lib/raid.ts; hier alleen het tekenen, de knoppen en het adres.
 *
 * Verplaatsen werkt op twee manieren, zodat het op een telefoon net zo goed gaat
 * als met een muis: tik een speler aan en daarna een andere plek (twee spelers
 * wisselen), of sleep. Een spec uit de lijst gaat naar de aangetikte lege plek,
 * en anders naar de eerste lege plek.
 *
 * Het adres wordt bijgewerkt met `replaceState`, zoals bij de talentcalculator:
 * geen regel in de geschiedenis per klik.
 *
 * Namen (Nutri, 11 oktober 2026): het potlood naast de x maakt van de naam een invulveld;
 * Enter of wegklikken bewaart, Escape breekt af, leeg zet de spec terug. Een naam hoort bij
 * de speler en verhuist mee bij verplaatsen, verdelen en een andere raidgrootte, en staat
 * in de deellink (`&n=`, zie lib/raid.ts).
 */

import {
  type RaidResult, type Slot, NAME_MAX, analyzeRaid, autoArrange, cleanName, decodeNames, decodeRaid, encodeNames, encodeRaid,
  raidData, raidSpec,
} from '../lib/raid';

type Payload = { strings: Record<string, string>; roles: Record<string, string>; defaultSize: number };

const root = document.querySelector<HTMLElement>('[data-raid]');
const text = document.getElementById('wf-raid-text');
if (root && text) start(root, JSON.parse(text.textContent ?? '{}') as Payload);

function start(root: HTMLElement, payload: Payload) {
  const d = raidData;
  const s = (key: string, vars: Record<string, string | number> = {}) => {
    let out = payload.strings[key] ?? key;
    for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(String(v));
    return out;
  };
  const className = (id: string) => id.charAt(0).toUpperCase() + id.slice(1);
  const icon = (name: string) => `/wh/${name}.jpg`;

  const groupsEl = root.querySelector<HTMLElement>('[data-groups]')!;
  const notice = root.querySelector<HTMLElement>('[data-notice]')!;
  const autoBtn = root.querySelector<HTMLButtonElement>('[data-auto]')!;

  const query = new URLSearchParams(window.location.search);
  let slots: Slot[] = decodeRaid(query.get('r'));
  let names: string[] = decodeNames(query.get('n'), slots.length);
  let selected: number | null = null;
  let editing: number | null = null;
  let noticeTimer = 0;

  /* Alleen nog "de raid is vol", als zwevend bericht dat na drie seconden weggaat. */
  const say = (message: string) => {
    window.clearTimeout(noticeTimer);
    notice.textContent = message;
    notice.hidden = message === '';
    if (message) noticeTimer = window.setTimeout(() => say(''), 3200);
  };

  // De tip bij het toevoegen: tot de lezer op de x tikt, en daarna nooit meer.
  const tip = root.querySelector<HTMLElement>('[data-tip]');
  let tipClosed = false;
  try { tipClosed = window.localStorage.getItem('wf-raid-tip') === 'closed'; } catch { /* privévenster */ }
  if (tip) tip.hidden = tipClosed;
  root.querySelector('[data-tip-close]')?.addEventListener('click', () => {
    if (tip) tip.hidden = true;
    try { window.localStorage.setItem('wf-raid-tip', 'closed'); } catch { /* privévenster */ }
  });

  function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, content?: string): HTMLElementTagNameMap[K] {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function img(name: string, size: number, cls: string) {
    const node = el('img', cls);
    node.src = icon(name);
    node.alt = '';
    node.width = size;
    node.height = size;
    return node;
  }

  function drawGroups(result: RaidResult) {
    groupsEl.replaceChildren();
    for (let g = 0; g < slots.length / d.groupSize; g += 1) {
      const section = el('section', 'wf-rgroup');
      section.append(el('h2', 'wf-rgroup__title', s('group', { n: g + 1 })));
      const list = el('ol', 'wf-rgroup__slots');
      for (let k = 0; k < d.groupSize; k += 1) {
        const index = g * d.groupSize + k;
        const spec = slots[index];
        const li = el('li', spec ? 'wf-rslot' : 'wf-rslot wf-rslot--empty');
        if (selected === index) li.classList.add('is-selected');
        const body = el('button', 'wf-rslot__body');
        body.type = 'button';
        body.dataset.pick = String(index);
        if (spec) {
          li.dataset.class = spec.class;
          body.draggable = true;
          body.setAttribute('aria-pressed', selected === index ? 'true' : 'false');
          const label = names[index] ?? '';
          const shown = label || spec.name;
          const meta = label ? `${spec.name} ${className(spec.class)} · ${payload.roles[spec.id]}` : `${className(spec.class)} · ${payload.roles[spec.id]}`;
          const words = el('span', 'wf-rslot__text');
          words.append(el('span', 'wf-rslot__name', shown), el('span', 'wf-rslot__meta', meta));
          body.append(img(spec.icon, 28, 'wf-rslot__icon'), words);
          const edit = el('button', 'wf-rslot__edit');
          edit.type = 'button';
          edit.dataset.edit = String(index);
          edit.setAttribute('aria-label', s('rename', { name: shown }));
          edit.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-10.21a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
          const remove = el('button', 'wf-rslot__remove', '×');
          remove.type = 'button';
          remove.dataset.remove = String(index);
          remove.setAttribute('aria-label', s('remove', { name: shown }));
          if (editing === index) {
            const field = el('input', 'wf-rslot__input');
            field.type = 'text';
            field.maxLength = NAME_MAX;
            field.value = label;
            field.placeholder = spec.name;
            field.setAttribute('aria-label', s('rename', { name: shown }));
            field.dataset.field = String(index);
            const wrap = el('span', 'wf-rslot__body wf-rslot__body--edit');
            wrap.append(img(spec.icon, 28, 'wf-rslot__icon'), field);
            li.append(wrap, edit, remove);
          } else {
            li.append(body, edit, remove);
          }
        } else {
          body.append(el('span', 'wf-rslot__empty', s('emptySlot')));
          li.append(body);
        }
        list.append(li);
      }
      section.append(list);

      const group = result.groups[g];
      if (group && (group.covered.length || group.missing.length)) {
        const buffs = el('div', 'wf-rgroup__buffs');
        buffs.setAttribute('aria-label', s('groupBuffs'));
        const members = slots.slice(g * d.groupSize, (g + 1) * d.groupSize).filter(Boolean).length;
        for (const line of group.covered) {
          const chip = el('span', 'wf-rchip');
          const name = d.buffs[line.effect].name;
          chip.title = `${name}: ${s('coverage', { n: line.recipients, m: members })}`;
          chip.append(img(d.buffs[line.effect].icon, 20, 'wf-rchip__icon'), el('span', 'wf-rchip__count', `${line.recipients}/${members}`));
          buffs.append(chip);
        }
        for (const effect of group.missing) {
          const chip = el('span', 'wf-rchip is-missing');
          chip.title = `${s('missing')}: ${d.buffs[effect].name}`;
          chip.append(img(d.buffs[effect].icon, 20, 'wf-rchip__icon'), el('span', 'wf-rchip__count', s('missing')));
          buffs.append(chip);
        }
        section.append(buffs);
      }
      groupsEl.append(section);
    }
  }

  function drawPanel(result: RaidResult) {
    const idle = result.players === 0;
    root.querySelector<HTMLElement>('[data-empty]')!.hidden = !idle;
    for (const line of result.raid) {
      const li = root.querySelector<HTMLElement>(`[data-raid-buff="${line.id}"]`);
      if (!li) continue;
      li.dataset.status = idle ? 'na' : line.status;
      const meta = li.querySelector<HTMLElement>('[data-meta]')!;
      if (idle || line.status === 'na') meta.textContent = '';
      else if (line.busy) meta.textContent = s('oneTotem');
      else if (line.providers === 0) meta.textContent = s('nobody');
      else if (d.blessings.includes(line.id)) meta.textContent = s('coverage', { n: line.recipients, m: line.eligible });
      else meta.textContent = line.providers === 1 ? s('providerOne') : s('providerMany', { n: line.providers });
    }
    const note = root.querySelector<HTMLElement>('[data-blessings]')!;
    note.textContent = idle ? '' : result.paladins === 0 ? s('noPaladin')
      : result.paladins === 1 ? s('blessingsOne') : s('blessingsMany', { n: Math.min(result.paladins, d.blessings.length) });

    for (const entry of d.boss) {
      const li = root.querySelector<HTMLElement>(`[data-boss="${entry.id}"]`);
      if (!li) continue;
      const line = result.boss.find((b) => b.id === entry.id);
      li.dataset.status = !line ? 'na' : line.effect ? 'full' : 'none';
      const shown = line?.effect ?? entry.effects[0];
      li.querySelectorAll<HTMLImageElement>('[data-effect-icon]').forEach((node) => { node.hidden = node.dataset.effectIcon !== shown; });
      li.querySelectorAll<HTMLElement>('[data-effect-name]').forEach((node) => {
        node.classList.toggle('is-chosen', Boolean(line?.effect) && node.dataset.effectName === line?.effect);
      });
      const meta = li.querySelector<HTMLElement>('[data-meta]')!;
      meta.textContent = !line ? '' : !line.effect ? s('nobody')
        : line.providers === 1 ? s('providerOne') : s('providerMany', { n: line.providers });
    }
  }

  function render() {
    const result = analyzeRaid(slots);
    drawGroups(result);
    const field = root.querySelector<HTMLInputElement>('[data-field]');
    if (field) { field.focus(); field.select(); }
    drawPanel(result);
    root.querySelector('[data-count]')!.textContent = String(result.players);
    root.querySelector('[data-capacity]')!.textContent = String(slots.length);
    root.querySelectorAll<HTMLButtonElement>('[data-size]').forEach((b) => {
      b.setAttribute('aria-pressed', Number(b.dataset.size) === slots.length ? 'true' : 'false');
    });
    autoBtn.disabled = result.players < 2 || slots.length <= d.groupSize;

    const url = new URL(window.location.href);
    if (result.players === 0 && slots.length === payload.defaultSize) url.searchParams.delete('r');
    else url.searchParams.set('r', encodeRaid(slots));
    const named = encodeNames(names.map((n, i) => (slots[i] ? n : '')));
    if (named) url.searchParams.set('n', named);
    else url.searchParams.delete('n');
    window.history.replaceState(null, '', url);
  }

  function add(id: string, at?: number) {
    const spec = raidSpec(id);
    if (!spec) return;
    let index = at ?? (selected !== null && slots[selected] === null ? selected : slots.indexOf(null));
    if (index === undefined || index < 0 || slots[index] !== null) index = slots.indexOf(null);
    if (index < 0) { say(s('raidFull')); return; }
    slots[index] = spec;
    names[index] = '';
    selected = null;
    say('');
    render();
  }

  // De naam bewaren of afbreken; leeg zet de spec terug.
  function commit(save: boolean) {
    const field = root.querySelector<HTMLInputElement>('[data-field]');
    if (editing === null) return;
    if (save && field) names[editing] = cleanName(field.value);
    editing = null;
    render();
  }

  /*
   Verdelen kent alleen specs. Twee spelers met dezelfde spec zijn voor de buffs gelijk,
   dus de namen gaan in hun oude volgorde naar de plekken van die spec (zoals `Raid.swift`).
   */
  function arrange() {
    const sorted = autoArrange(slots);
    const used = new Set<number>();
    names = sorted.map((spec) => {
      if (!spec) return '';
      const from = slots.findIndex((old, i) => !used.has(i) && old?.id === spec.id);
      if (from < 0) return '';
      used.add(from);
      return names[from] ?? '';
    });
    slots = sorted;
  }

  function move(from: number, to: number) {
    if (from === to) return;
    [slots[from], slots[to]] = [slots[to], slots[from]];
    [names[from], names[to]] = [names[to], names[from]];
    selected = null;
    say('');
    render();
  }

  function resize(size: number) {
    if (size === slots.length) return;
    const next: Slot[] = Array(size).fill(null);
    const nextNames: string[] = Array(size).fill('');
    const rest: [Slot, string][] = [];
    slots.forEach((spec, i) => {
      if (i < size) { next[i] = spec; nextNames[i] = names[i] ?? ''; } else if (spec) rest.push([spec, names[i] ?? '']);
    });
    for (const [spec, label] of rest) {
      const free = next.indexOf(null);
      if (free >= 0) { next[free] = spec; nextNames[free] = label; }
    }
    slots = next;
    names = nextNames;
    editing = null;
    selected = null;
    say('');
    render();
  }

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-field]')) return;
    const editBtn = target.closest<HTMLElement>('[data-edit]');
    if (editBtn) {
      const i = Number(editBtn.dataset.edit);
      if (editing === i) { commit(true); return; }
      const open = root.querySelector<HTMLInputElement>('[data-field]');
      if (editing !== null && open) names[editing] = cleanName(open.value);
      editing = i;
      selected = null;
      render();
      return;
    }
    if (editing !== null) commit(true);
    const addBtn = target.closest<HTMLElement>('[data-add]');
    if (addBtn) { add(addBtn.dataset.add!); return; }
    const removeBtn = target.closest<HTMLElement>('[data-remove]');
    if (removeBtn) {
      const i = Number(removeBtn.dataset.remove);
      slots[i] = null;
      names[i] = '';
      if (selected === i) selected = null;
      if (editing === i) editing = null;
      render();
      return;
    }
    const pick = target.closest<HTMLElement>('[data-pick]');
    if (pick) {
      const i = Number(pick.dataset.pick);
      if (selected === null) {
        if (slots[i]) { selected = i; render(); }
        else { selected = i; render(); }
      } else if (selected === i) {
        selected = null; say(''); render();
      } else if (slots[selected] || slots[i]) {
        move(selected, i);
      } else {
        selected = i; render();
      }
      return;
    }
    const sizeBtn = target.closest<HTMLElement>('[data-size]');
    if (sizeBtn) { resize(Number(sizeBtn.dataset.size)); return; }
    if (target.closest('[data-auto]')) {
      arrange();
      selected = null;
      say('');
      render();
      return;
    }
    if (target.closest('[data-clear]')) {
      slots = Array(slots.length).fill(null);
      names = Array(slots.length).fill('');
      editing = null;
      selected = null;
      say('');
      render();
      return;
    }
    const copy = target.closest<HTMLButtonElement>('[data-copy]');
    if (copy) {
      navigator.clipboard?.writeText(window.location.href).then(() => {
        const old = copy.textContent;
        copy.textContent = copy.dataset.copied ?? 'Copied';
        window.setTimeout(() => { copy.textContent = old; }, 1600);
      }).catch(() => {});
    }
  });

  root.addEventListener('keydown', (event) => {
    if (!(event.target as HTMLElement).closest('[data-field]')) return;
    if (event.key === 'Enter') { event.preventDefault(); commit(true); }
    if (event.key === 'Escape') { event.preventDefault(); commit(false); }
  });
  root.addEventListener('focusout', (event) => {
    const field = (event.target as HTMLElement).closest('[data-field]');
    // Wegklikken bewaart; een klik op het potlood of de x regelt het zelf.
    const to = (event as FocusEvent).relatedTarget as HTMLElement | null;
    if (field && editing !== null && !to?.closest('[data-edit], [data-remove]')) commit(true);
  });

  // Slepen: een speler naar een andere plek, of een spec uit de lijst naar een plek.
  root.addEventListener('dragstart', (event) => {
    const target = event.target as HTMLElement;
    const pick = target.closest<HTMLElement>('[data-pick]');
    const spec = target.closest<HTMLElement>('[data-add]');
    const value = pick ? `slot:${pick.dataset.pick}` : spec ? `spec:${spec.dataset.add}` : '';
    if (!value || !event.dataTransfer) return;
    event.dataTransfer.setData('text/plain', value);
    event.dataTransfer.effectAllowed = 'move';
  });
  root.addEventListener('dragover', (event) => {
    const pick = (event.target as HTMLElement).closest<HTMLElement>('[data-pick]');
    if (!pick) return;
    event.preventDefault();
    root.querySelectorAll('.is-drop').forEach((n) => n.classList.remove('is-drop'));
    pick.parentElement?.classList.add('is-drop');
  });
  root.addEventListener('dragleave', (event) => {
    (event.target as HTMLElement).closest('.wf-rslot')?.classList.remove('is-drop');
  });
  root.addEventListener('drop', (event) => {
    const pick = (event.target as HTMLElement).closest<HTMLElement>('[data-pick]');
    root.querySelectorAll('.is-drop').forEach((n) => n.classList.remove('is-drop'));
    if (!pick || !event.dataTransfer) return;
    event.preventDefault();
    const to = Number(pick.dataset.pick);
    const [kind, value] = event.dataTransfer.getData('text/plain').split(':');
    if (kind === 'slot') move(Number(value), to);
    if (kind === 'spec') {
      if (slots[to] === null) add(value, to);
      else { slots[to] = raidSpec(value) ?? slots[to]; names[to] = ''; render(); }
    }
  });

  render();
}
