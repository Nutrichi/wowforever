---
title: "Build 70205 maakt Macs sneller, maar niet elke Mac"
description: "Max- en Pro-chips draaien beter op de nieuwe betabuild, basischips slechter. Een ontwikkelaar van Blizzard vond een verwisselde lichtinstelling, en de groene of magenta tint is zeldzamer maar niet weg."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: nl
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Officiële key art van World of Warcraft: Forever met een Tauren, een Orc, een Blood Elf en een Human boven een vallei"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
manual: true
---
Betabuild 70205 van World of Warcraft: Forever draait sneller op Macs met een Max- of Pro-chip. Basischips zoals de M4 Air werden trager, melden spelers op de forums van Blizzard. Een ontwikkelaar van Blizzard noemt dat onverwacht.

De meldingen komen uit een thread over grafische bugs op de Mac die een speler op 18 september opende. De eerste post, van de eigenaar van een Mac Studio met een M4 Max, telt nu 26 genummerde fouten en wordt bij elke build bijgewerkt. De thread kreeg bijna 500 reacties, van een M1 Pro tot een M6.

## Sneller op Max en Pro, trager op basischips

"De build van volgende week zou een paar grote verbeteringen in prestaties moeten brengen," schreef Rommax, een ontwikkelaar van WoW, op 2 oktober in de thread. Build 70205 kwam dezelfde nacht al uit, eerder dan gepland.

Max- en Pro-chips gingen erop vooruit, volgens de thread. Op een Mac Studio met een M5 Max, de machine waarop wowforever.be de beta speelt, loopt 70205 ook merkbaar vlotter dan de build ervoor. Basischips gingen de andere kant op: een M4 Air, een gewone M5 en een gewone M6 mini verloren veel frames. Rommax noemt dat "zeker onverwacht" en zegt dat Blizzard het volgende week bekijkt.

Meldingen in het logbestand `gx.log` over `mtl_1_1` en een onbekende GPU-familie zijn geen oorzaak, voegt Rommax toe. Dat is een oude naam voor de enige set Metal-shaders die het spel heeft.

## Een verwisselde instelling kost frames

Secondary Lighting draait op High, wat het menu ook zegt, ontdekte een speler. Rommax bevestigde het op 3 oktober in de code:

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

Tot er een fix komt, raadt de thread aan om Secondary Lighting na elke login op High te zetten, toe te passen en daarna terug te zetten. De bug is niet beperkt tot Macs: twee spelers op Windows hebben hem ook.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Speel de video af. invurse op YouTube, 4 minuten.</span>
    </span>
  </button>
</figure>

In deze video van 23 september, op een eerdere build, hapert Secondary Lighting op High zwaar in Stormwind en loopt Fair vlot.

## De tint is zeldzamer, niet weg

De groene of magenta tint over de wereld duikt op 70205 veel minder op, maar vijf spelers melden hem nog. Blizzard kan hem niet nabootsen, schreef Rommax: niet op een M1 Ultra, niet op een Mac Pro uit 2019 en niet bij QA. Hij vraagt bij elke melding de plaats, de servertijd, de GPU en de versie van macOS.

Twee crashes tijdens regen komen op 70205 niet meer voor, en een andere speler ziet een schaduwfout verholpen. Op 4 oktober kwamen er vier nieuwe fouten bij, onder meer regen die door een dak valt en kanalen in Stormwind zonder golven. Schaduwen die op een vaste afstand van de camera verdwijnen, blijven, bevestigde een speler die avond in Kharanos.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Speel de video af. invurse op YouTube, 2 minuten.</span>
    </span>
  </button>
</figure>

Een crash in de Metal-driver komt alleen voor op macOS 12 en 13, volgens Rommax. Een upgrade naar macOS 14 of later kan hem voorkomen.

## Instellingen met de minste fouten

De eerste post houdt een lijst bij van instellingen die op 70205 de minste problemen geven. Het is een omweg, geen fix, en geen enkele instelling houdt de tint tegen.

| Instelling | Waarde |
|---|---|
| **Shadow Quality** | Good of hoger |
| **Secondary Lighting** | High |
| **Compatibility Settings** | Alle vier aan |
| **Render Scale** | 100% |
| **Al de rest** | 10, het maximum |

Build 69977 [loste in september al een kernel panic en strepen op Macs op](/nl/news/a-new-beta-build-fixes-mac-and-controller-issues/). Welke fixes de volgende build voor basischips brengt, zegt Blizzard niet.
