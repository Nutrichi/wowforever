/*
 * FEATURED VIDEO en FEATURED STREAM (src/components/YoutubeFeature.astro).
 *
 * 1. Een stream-blok vraagt eerst aan de Edge Function `twitch-live` of Nutri
 *    nu live is op Twitch (sinds 10 oktober 2026; daarvoor `youtube-live`).
 *    Zo ja, dan zijn stream in de speler van Twitch. Zo nee, dan verdwijnt het
 *    blok (Nutri, 6 oktober 2026: geen andere streamer in de plaats).
 *    Twitch eist minstens 400 pixels breed en de domeinnaam als `parent`;
 *    is het blok smaller, dan opent het beeld Twitch in een nieuw tabblad,
 *    zoals in de lijst (src/scripts/feed-stage.ts).
 * 2. Elk blok speelt vanzelf en zonder geluid zodra het voor de helft in beeld
 *    is. Browsers laten alleen een stille video vanzelf starten.
 * 3. Een klik op het beeld voor het zover is, start de video met geluid: dan
 *    heeft de lezer er zelf om gevraagd.
 *
 * Met `prefers-reduced-motion` start er niets vanzelf; dan blijft het beeld
 * staan tot iemand klikt.
 */

type Choice = { id: string; title: string; channel: string; thumbnail: string };

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const youtubeUrl = (id: string, sound: boolean) =>
  `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({
    autoplay: '1',
    ...(sound ? {} : { mute: '1' }),
    rel: '0',
    playsinline: '1',
  })}`;

const twitchUrl = (channel: string, sound: boolean) =>
  `https://player.twitch.tv/?${new URLSearchParams({
    channel,
    parent: window.location.hostname,
    autoplay: 'true',
    muted: sound ? 'false' : 'true',
  })}`;

/** Past de speler van Twitch? Die wil minstens 400 bij 300 pixels. */
const twitchFits = (box: HTMLElement) => box.clientWidth >= 400 && box.clientHeight >= 225;

const mount = (section: HTMLElement, sound: boolean) => {
  const box = section.querySelector<HTMLElement>('[data-wf-yt-box]');
  const id = box?.dataset.id;
  if (!box || !id || box.querySelector('iframe')) return;
  const twitch = section.dataset.wfYt === 'stream';
  if (twitch && !twitchFits(box)) return;

  const frame = document.createElement('iframe');
  frame.src = twitch ? twitchUrl(id, sound) : youtubeUrl(id, sound);
  frame.title = section.querySelector('[data-wf-yt-title]')?.textContent?.trim() ?? '';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  // YouTube weigert een embed die niet zegt van welke site hij komt.
  frame.referrerPolicy = 'strict-origin-when-cross-origin';

  box.replaceChildren(frame);
  section.classList.add('is-playing');
};

/* Vanzelf starten, één keer, zodra het blok voor de helft in beeld is. */
const watcher = !reduced && 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, self) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        self.unobserve(entry.target);
        mount(entry.target as HTMLElement, false);
      }
    }, { threshold: 0.5 })
  : null;

const ready = (section: HTMLElement) => {
  section.classList.remove('is-pending');
  watcher?.observe(section);
};

/* Wat er in het stream-blok komt, invullen. */
const fill = (section: HTMLElement, choice: Choice, href: string) => {
  const box = section.querySelector<HTMLElement>('[data-wf-yt-box]');
  const poster = section.querySelector<HTMLAnchorElement>('[data-wf-yt-poster]');
  const title = section.querySelector<HTMLAnchorElement>('[data-wf-yt-title]');
  const meta = section.querySelector<HTMLElement>('[data-wf-yt-meta]');
  if (!box || !poster) return;

  box.dataset.id = choice.id;
  poster.href = href;
  // Het beeld van bij de build hoort mogelijk bij een vorige stream.
  poster.querySelector('[data-wf-yt-img]')?.remove();
  const img = document.createElement('img');
  img.src = choice.thumbnail;
  img.alt = '';
  img.referrerPolicy = 'no-referrer';
  img.dataset.wfYtImg = '';
  poster.prepend(img);

  if (title) {
    title.textContent = choice.title;
    title.href = href;
  }
  // Te smal voor de speler van Twitch: het beeld wordt een link naar Twitch.
  poster.target = '_blank';
  poster.rel = 'noopener';
  if (meta) meta.textContent = choice.channel;
};

const pickStream = async (section: HTMLElement) => {
  let live: Choice | null = null;
  const endpoint = section.dataset.endpoint;
  if (endpoint) {
    try {
      const response = await fetch(endpoint, { signal: AbortSignal.timeout(4_000) });
      const data = await response.json() as { live: { title: string; thumbnail: string } | null };
      const login = section.dataset.twitch;
      if (data.live && login) {
        // Twitch ververst het beeld om de paar minuten onder dezelfde URL.
        const thumbnail = `${data.live.thumbnail}?t=${Math.floor(Date.now() / 60_000)}`;
        live = { id: login, title: data.live.title, channel: 'Nutri', thumbnail };
      }
    } catch {
      // Geen antwoord: dan geen blok.
    }
  }

  const choice = live;
  if (!choice) {
    section.hidden = true;
    return;
  }

  fill(section, choice, `https://www.twitch.tv/${encodeURIComponent(choice.id)}`);
  section.hidden = false;
  ready(section);
};

for (const section of document.querySelectorAll<HTMLElement>('[data-wf-yt]')) {
  if (section.dataset.wfYt === 'stream') void pickStream(section);
  else ready(section);
}

/*
 * Een klik op het beeld speelt hier, met geluid. Cmd- of Ctrl-klik blijft een
 * gewone link naar YouTube of Twitch, en een stream in een te smal blok ook.
 */
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const poster = event.target.closest<HTMLAnchorElement>('[data-wf-yt-poster]');
  if (!poster) return;
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const section = poster.closest<HTMLElement>('[data-wf-yt]');
  if (!section || section.classList.contains('is-pending')) return;
  const box = section.querySelector<HTMLElement>('[data-wf-yt-box]');
  if (section.dataset.wfYt === 'stream' && (!box || !twitchFits(box))) return;
  event.preventDefault();
  watcher?.unobserve(section);
  mount(section, true);
});

// Een module, zodat de namen hier niet botsen met die in post-video.ts en feed-stage.ts.
export {};
