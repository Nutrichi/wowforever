/*
 * Een video in een nieuwspost, pas na een klik.
 *
 * Zolang de lezer niet zelf op de knop drukt, gaat er geen enkel verzoek naar
 * YouTube: geen speler, geen cookie, geen extra gewicht in de eerste weergave.
 * Dat is dezelfde afspraak als bij Clips en Streams (PROJECT_SPEC.md §5.3),
 * en daarom ook hier de privacyvriendelijke variant van de speler.
 *
 * De knop staat in de Markdown van de post zelf, per taal, zodat het opschrift
 * meevertaalt zonder dat er een label in dit script hard komt te staan
 * (PROJECT_SPEC.md §8).
 */

const play = (figure: HTMLElement) => {
  const id = figure.dataset.wfVideo;
  // Al open: een tweede klik mag de speler niet opnieuw opbouwen.
  if (!id || figure.querySelector('iframe')) return;

  const title = figure.querySelector('.wf-embed__title')?.textContent?.trim();

  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
  if (title) frame.title = title;
  frame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

  figure.replaceChildren(frame);
};

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const figure = event.target.closest<HTMLElement>('[data-wf-video]');
  if (!figure) return;
  // Cmd- of Ctrl-klik op de bronlink eronder blijft een gewone link.
  if (event.target.closest('a')) return;
  play(figure);
});
