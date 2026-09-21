/*
 * Een video of een Reddit-post in een nieuwspost.
 *
 * **Ze laden vanzelf** (Nutri, 21 september 2026: "Kan je die tussenstap van
 * op die knop te drukken niet gewoon weglaten?"). Tot 21 september stond er
 * een knop en ging er pas iets naar YouTube of Reddit na een klik. Die knop
 * staat nog altijd in de Markdown van de post, per taal, maar dient nu als
 * plaatshouder: hij vult het blok tot het kader er is, en een klik erop werkt
 * nog steeds als het script er om welke reden ook niet aan toe komt.
 *
 * **Wat dat kost, staat op /privacy/.** YouTube en Reddit krijgen het
 * IP-adres van elke lezer die zo'n post opent, ook als die niets afspeelt.
 * Clips en Streams blijven wel op een klik werken: daar staan tientallen
 * spelers op één pagina (PROJECT_SPEC.md §5.3, en Nutri besliste op
 * 18 september dat daar niets meer verandert).
 *
 * **Niet allemaal tegelijk.** Een kader laadt pas wanneer het in de buurt van
 * het scherm komt. De lezer merkt daar niets van, want dat gebeurt ruim voor
 * hij er is, en een post met twee Reddit-posts sleept zo geen twee volledige
 * Reddit-toepassingen mee in de eerste weergave.
 */

/*
 * Het blok vervangen door het kader zelf. Niet `open` genoemd: dit bestand
 * heeft geen import of export, dus het draait als gewoon script en daarin is
 * `open` al `window.open`.
 */
const mount = (figure: HTMLElement, frame: HTMLIFrameElement) => {
  const title = figure.querySelector('.wf-embed__title')?.textContent?.trim();
  if (title) frame.title = title;
  frame.allowFullscreen = true;
  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  figure.replaceChildren(frame);
};

const playVideo = (figure: HTMLElement) => {
  const id = figure.dataset.wfVideo;
  // Al open: een tweede oproep mag de speler niet opnieuw opbouwen.
  if (!id || figure.querySelector('iframe')) return;

  /*
   * Geen autoplay meer. Toen de lezer nog zelf op de knop drukte, was
   * meteen beginnen de bedoeling; nu het kader vanzelf komt, zou geluid uit
   * het niets komen. De lezer drukt op play in de speler zelf.
   */
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0`;
  frame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  mount(figure, frame);
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
   * Reddit kent alleen 'dark' en 'light', dus het thema van de site mee.
   * Nacht is hier de standaard: staat er geen keuze, dan beslist het systeem,
   * en alleen een systeem dat uitdrukkelijk om licht vraagt, krijgt licht.
   * Dit is ook de reden dat het kader hier gezet wordt en niet bij het bouwen:
   * op dat moment is het thema van de lezer nog niet bekend.
   */
  const theme = document.documentElement.dataset.theme;
  const dark = theme === 'night'
    || (theme !== 'day' && !window.matchMedia('(prefers-color-scheme: light)').matches);

  const frame = document.createElement('iframe');
  frame.src = `https://embed.reddit.com/${path.replace(/^\/+/, '')}/?embed=true&theme=${dark ? 'dark' : 'light'}`;
  mount(figure, frame);
};

const load = (figure: HTMLElement) => {
  if (figure.dataset.wfReddit) playReddit(figure);
  else playVideo(figure);
};

const embeds = () =>
  document.querySelectorAll<HTMLElement>('[data-wf-video], [data-wf-reddit]');

/*
 * Laden zodra het blok binnen 800 px van het scherm komt. Kan de browser geen
 * IntersectionObserver, dan laadt alles meteen: liever een zware pagina dan
 * een lege plek.
 */
if ('IntersectionObserver' in window) {
  const watcher = new IntersectionObserver((entries, self) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      self.unobserve(entry.target);
      load(entry.target as HTMLElement);
    }
  }, { rootMargin: '800px 0px' });

  for (const figure of embeds()) watcher.observe(figure);
} else {
  for (const figure of embeds()) load(figure);
}

/*
 * De knop blijft werken. Ze is nu een plaatshouder, maar als het laden nog
 * niet gebeurd is, brengt een klik het kader alsnog.
 */
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const figure = event.target.closest<HTMLElement>('[data-wf-video], [data-wf-reddit]');
  if (!figure) return;
  // Cmd- of Ctrl-klik op een link in het blok blijft een gewone link.
  if (event.target.closest('a')) return;
  load(figure);
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
