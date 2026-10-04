---
title: "Build 70205 macht Macs schneller, aber nicht jeden"
description: "Max- und Pro-Chips laufen mit dem neuen Beta-Build besser, Basischips schlechter. Ein Entwickler von Blizzard fand eine vertauschte Lichteinstellung, und die grüne oder magentafarbene Tönung ist seltener, aber nicht weg."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: de
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Offizielles Artwork von World of Warcraft: Forever mit einem Tauren, einem Orc, einem Blood Elf und einem Human über einem Tal"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
manual: true
---
Beta-Build 70205 von World of Warcraft: Forever läuft auf Macs mit Max- oder Pro-Chip schneller. Basischips wie im M4 Air wurden langsamer, berichten Spieler in den Foren von Blizzard. Ein Entwickler von Blizzard nennt das unerwartet.

Die Berichte stammen aus einem Thread über Grafikfehler auf dem Mac, den ein Spieler am 18. September eröffnete. Sein erster Beitrag, vom Besitzer eines Mac Studio mit M4 Max, listet inzwischen 26 nummerierte Fehler und wird bei jedem Build aktualisiert. Der Thread hat fast 500 Antworten, von einem M1 Pro bis zu einem M6.

## Schneller auf Max und Pro, langsamer auf Basischips

„Der Build nächste Woche sollte einige große Leistungsverbesserungen bringen“, schrieb Rommax, ein Entwickler von WoW, am 2. Oktober im Thread. Build 70205 kam noch in derselben Nacht, früher als geplant.

Max- und Pro-Chips legten damit zu, laut dem Thread. Auf einem Mac Studio mit M5 Max, dem Rechner, auf dem wowforever.be die Beta spielt, läuft 70205 ebenfalls spürbar flüssiger als der Build davor. Basischips gingen den anderen Weg: ein M4 Air, ein einfacher M5 und ein einfacher M6 mini verloren viele Bilder pro Sekunde. Rommax nennt das „definitiv unerwartet“ und sagt, Blizzard schaue es sich nächste Woche an.

Meldungen in der Logdatei `gx.log` über `mtl_1_1` und eine unbekannte GPU-Familie sind keine Ursache, ergänzt Rommax. Das ist ein alter Name für den einzigen Satz Metal-Shader des Spiels.

## Eine vertauschte Einstellung kostet Bilder

Secondary Lighting läuft auf High, egal was das Menü anzeigt, fand ein Spieler heraus. Rommax bestätigte es am 3. Oktober im Code:

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

Bis ein Fix kommt, rät der Thread, Secondary Lighting nach jedem Login auf High zu stellen, zu übernehmen und dann zurückzustellen. Der Fehler betrifft nicht nur Macs: Zwei Spieler unter Windows haben ihn auch.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Das Video abspielen. invurse auf YouTube, 4 Minuten.</span>
    </span>
  </button>
</figure>

In diesem Video vom 23. September, auf einem früheren Build, ruckelt Secondary Lighting auf High in Stormwind stark, während Fair flüssig läuft.

## Die Tönung ist seltener, nicht weg

Die grüne oder magentafarbene Tönung über der Welt taucht auf 70205 viel seltener auf, aber fünf Spieler melden sie noch. Blizzard kann sie nicht nachstellen, schrieb Rommax: nicht auf einem M1 Ultra, nicht auf einem Mac Pro von 2019 und nicht in der QA. Er bittet bei jeder Meldung um Ort, Serverzeit, GPU und macOS-Version.

Zwei Abstürze bei Regen treten auf 70205 nicht mehr auf, und ein anderer Spieler sieht einen Schattenfehler behoben. Am 4. Oktober kamen vier neue Fehler hinzu, darunter Regen, der durch ein Dach fällt, und Kanäle in Stormwind ohne Wellen. Schatten, die in festem Abstand zur Kamera verschwinden, bleiben, bestätigte ein Spieler an dem Abend in Kharanos.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Das Video abspielen. invurse auf YouTube, 2 Minuten.</span>
    </span>
  </button>
</figure>

Ein Absturz im Metal-Treiber tritt nur unter macOS 12 und 13 auf, laut Rommax. Ein Upgrade auf macOS 14 oder neuer kann ihn verhindern.

## Einstellungen mit den wenigsten Fehlern

Der erste Beitrag führt eine Liste der Einstellungen, die auf 70205 die wenigsten Probleme machen. Das ist ein Behelf, kein Fix, und keine Einstellung verhindert die Tönung.

| Einstellung | Wert |
|---|---|
| **Shadow Quality** | Good oder höher |
| **Secondary Lighting** | High |
| **Compatibility Settings** | Alle vier an |
| **Render Scale** | 100 % |
| **Alles andere** | 10, das Maximum |

Build 69977 hatte im September schon [eine Kernel Panic und Streifen auf Macs behoben](/de/news/a-new-beta-build-fixes-mac-and-controller-issues/). Welche Fixes der nächste Build für Basischips bringt, sagt Blizzard nicht.
