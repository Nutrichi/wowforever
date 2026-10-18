/*
 * Beelden in een gids groot bekijken (Nutri, 18 oktober 2026: "Fix images inside posts to be
 * enlarged"). In posts deed PostImage.astro dat al sinds 21 september; gidsen, dungeons,
 * reputaties en tradeskills (SitePage) hadden het niet. Zelfde gedrag: een <dialog> met het
 * beeld op volle grootte, sluiten met Escape, een klik of de knop rechtsboven. De stijl staat
 * in guides.css. Een beeld zonder alt is versiering en een beeld in een link blijft een link.
 */
const CLOSE: Record<string, string> = {
  en: 'Close', nl: 'Sluiten', fr: 'Fermer', es: 'Cerrar', it: 'Chiudi', de: 'Schließen',
};

const shots = [...document.querySelectorAll<HTMLImageElement>('.wf-gprose img[alt]:not([alt=""])')]
  .filter((shot) => !shot.closest('a'));

if (shots.length) {
  const lang = document.documentElement.lang.slice(0, 2);
  const dialog = document.createElement('dialog');
  dialog.className = 'wf-lightbox';
  dialog.innerHTML = `
    <button type="button" class="wf-lightbox__close" aria-label="${CLOSE[lang] ?? CLOSE.en}">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" aria-hidden="true" focusable="false">
        <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
      </svg>
    </button>
    <img class="wf-lightbox__img" alt="" />`;
  document.body.append(dialog);
  const img = dialog.querySelector('img')!;
  const close = dialog.querySelector('button')!;

  const show = (shot: HTMLImageElement) => {
    const src = shot.currentSrc || shot.src;
    if (img.src !== src) img.src = src;
    img.alt = shot.alt;
    dialog.showModal();
  };

  for (const shot of shots) {
    shot.classList.add('is-zoomable');
    shot.setAttribute('role', 'button');
    shot.tabIndex = 0;
    shot.addEventListener('click', () => show(shot));
    shot.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      show(shot);
    });
  }

  dialog.addEventListener('click', (event) => {
    const target = event.target as Node;
    if (target === img || target === dialog || close.contains(target)) dialog.close();
  });
}
