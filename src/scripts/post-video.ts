/*
 * Een video of een Reddit-post in een nieuwspost, pas na een klik.
 *
 * Zolang de lezer niet zelf op de knop drukt, gaat er geen enkel verzoek naar
 * YouTube of Reddit: geen speler, geen cookie, geen extra gewicht in de eerste
 * weergave. Dat is dezelfde afspraak als bij Clips en Streams
 * (PROJECT_SPEC.md §5.3), en daarom ook hier de privacyvriendelijke variant
 * van de speler.
 *
 * De knop staat in de Markdown van de post zelf, per taal, zodat het opschrift
 * meevertaalt zonder dat er een label in dit script hard komt te staan
 * (PROJECT_SPEC.md §8).
 */

/** Het blok vervangen door de speler zelf. */
const open = (figure: HTMLElement, frame: HTMLIFrameElement) => {
  const title = figure.querySelector('.wf-embed__title')?.textContent?.trim();
  if (title) frame.title = title;
  frame.allowFullscreen = true;
  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  figure.replaceChildren(frame);
};

const playVideo = (figure: HTMLElement) => {
  const id = figure.dataset.wfVideo;
  // Al open: een tweede klik mag de speler niet opnieuw opbouwen.
  if (!id || figure.querySelector('iframe')) return;

  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
  frame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  open(figure, frame);
};

/*
 * Een Reddit-post. Het pad staat als `r/<sub>/comments/<id>/<slug>` in de
 * Markdown, want de volle URL hoort in de zin eronder te staan en niet twee
 * keer in het blok. Reddit weigert het kader zonder verwijzer, dus die blijft
 * `strict-origin-when-cross-origin`: dan gaat de herkomst mee, het pad niet.
 */
const playReddit = (figure: HTMLElement) => {
  const path = figure.dataset.wfReddit;
  if (!path || figure.querySelector('iframe')) return;

  /*
   * Reddit kent alleen 'dark' en 'light', dus het thema van de site mee. Nacht
   * is hier de standaard: staat er geen keuze, dan beslist het systeem, en
   * alleen een systeem dat uitdrukkelijk om licht vraagt, krijgt licht.
   */
  const theme = document.documentElement.dataset.theme;
  const dark = theme === 'night'
    || (theme !== 'day' && !window.matchMedia('(prefers-color-scheme: light)').matches);

  const frame = document.createElement('iframe');
  frame.src = `https://embed.reddit.com/${path.replace(/^\/+/, '')}/?embed=true&theme=${dark ? 'dark' : 'light'}`;
  open(figure, frame);
};

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const figure = event.target.closest<HTMLElement>('[data-wf-video], [data-wf-reddit]');
  if (!figure) return;
  // Cmd- of Ctrl-klik op de bronlink eronder blijft een gewone link.
  if (event.target.closest('a')) return;
  if (figure.dataset.wfReddit) playReddit(figure);
  else playVideo(figure);
});

/*
 * Reddit meet zijn eigen hoogte en meldt die. Zonder dat bericht houdt het
 * blok de hoogte uit de stijl, die op een video van 16 op 9 plus de kop en de
 * voet van Reddit gerekend is; een post met een langere tekst zou daarin
 * schuiven. Alles wat niet van embed.reddit.com komt, telt niet.
 */
window.addEventListener('message', (event) => {
  let host = '';
  try { host = new URL(event.origin).hostname; } catch { return; }
  if (host !== 'embed.reddit.com') return;

  const data = event.data as { height?: unknown; data?: { height?: unknown } } | null;
  const height = Number(data?.data?.height ?? data?.height);
  if (!Number.isFinite(height) || height < 200 || height > 4000) return;

  for (const frame of document.querySelectorAll('iframe')) {
    if (frame.contentWindow !== event.source) continue;
    const figure = frame.closest<HTMLElement>('[data-wf-reddit]');
    if (figure) {
      figure.style.height = `${height}px`;
      figure.style.paddingBottom = '0';
    }
    return;
  }
});
