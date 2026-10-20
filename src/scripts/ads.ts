/*
 * Laadt AdSense alleen op een pagina met een echte plek (config/ads.ts, AdSlot).
 * In dev en zolang de advertenties uit staan, staat er geen <ins> en gebeurt er niets.
 * De toestemming regelt de CMP van Google (Privacy en berichten) via hetzelfde script.
 */
import { ads } from '../config/ads';

declare global { interface Window { adsbygoogle?: unknown[] } }

const slots = Array.from(document.querySelectorAll<HTMLElement>('ins.adsbygoogle:not([data-adsbygoogle-status])'));
if (ads.enabled && slots.length) {
  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.client}`;
  document.head.appendChild(s);
  window.adsbygoogle = window.adsbygoogle || [];
  for (let i = 0; i < slots.length; i++) window.adsbygoogle.push({});
}
