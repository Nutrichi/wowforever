---
title: "La build 70205 velocizza i Mac, ma non tutti"
description: "I chip Max e Pro girano meglio con la nuova build della beta, i chip base peggio. Uno sviluppatore di Blizzard ha trovato un'impostazione di illuminazione invertita, e la tinta verde o magenta è più rara ma non è sparita."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: it
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Illustrazione ufficiale di World of Warcraft: Forever con un Tauren, un Orc, un Blood Elf e un Human sopra una valle"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
manual: true
---
La build 70205 della beta di World of Warcraft: Forever gira più veloce sui Mac con chip Max o Pro. I chip base come quello del M4 Air sono diventati più lenti, segnalano i giocatori sui forum di Blizzard. Uno sviluppatore di Blizzard lo definisce inatteso.

Le segnalazioni vengono da una discussione sui bug grafici su Mac aperta da un giocatore il 18 settembre. Il primo messaggio, del proprietario di un Mac Studio con M4 Max, elenca ora 26 difetti numerati e viene aggiornato a ogni build. La discussione conta quasi 500 risposte, da un M1 Pro fino a un M6.

## Più veloce su Max e Pro, più lento sui chip base

«La build della prossima settimana dovrebbe portare grandi miglioramenti delle prestazioni», ha scritto Rommax, sviluppatore di WoW, nella discussione il 2 ottobre. La build 70205 è uscita la notte stessa, in anticipo.

I chip Max e Pro ci hanno guadagnato, secondo la discussione. Su un Mac Studio con M5 Max, la macchina su cui wowforever.be gioca la beta, la 70205 gira anche nettamente più fluida della build precedente. I chip base sono andati nella direzione opposta: un M4 Air, un M5 base e un M6 mini base hanno perso molti fotogrammi. Rommax lo definisce «decisamente inatteso» e dice che Blizzard lo esaminerà la prossima settimana.

I messaggi nel file `gx.log` su `mtl_1_1` e su una famiglia di GPU sconosciuta non sono la causa, aggiunge Rommax. È un vecchio nome per l'unico set di shader Metal del gioco.

## Un'impostazione invertita costa fotogrammi

Secondary Lighting gira su High qualunque cosa dica il menu, ha scoperto un giocatore. Rommax lo ha confermato nel codice il 3 ottobre:

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

In attesa di una correzione, la discussione consiglia di mettere Secondary Lighting su High dopo ogni accesso, applicare e poi tornare al valore voluto. Il bug non riguarda solo i Mac: ce l'hanno anche due giocatori su Windows.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Avvia il video. invurse su YouTube, 4 minuti.</span>
    </span>
  </button>
</figure>

In questo video del 23 settembre, su una build precedente, Secondary Lighting su High scatta pesantemente a Stormwind mentre Fair resta fluido.

## La tinta è più rara, non sparita

La tinta verde o magenta sul mondo compare molto meno sulla 70205, ma cinque giocatori la segnalano ancora. Blizzard non riesce a riprodurla, ha scritto Rommax: né su un M1 Ultra, né su un Mac Pro del 2019, né al QA. Chiede per ogni segnalazione il luogo, l'ora del server, la GPU e la versione di macOS.

Due crash durante la pioggia non si verificano più sulla 70205, e un altro giocatore vede risolto un difetto delle ombre. Il 4 ottobre si sono aggiunti quattro nuovi difetti, tra cui pioggia che attraversa un tetto e canali di Stormwind senza onde. Le ombre che spariscono a una distanza fissa dalla telecamera restano, ha confermato quella sera un giocatore a Kharanos.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Avvia il video. invurse su YouTube, 2 minuti.</span>
    </span>
  </button>
</figure>

Un crash nel driver Metal si verifica solo su macOS 12 e 13, secondo Rommax. Aggiornare a macOS 14 o successivo può evitarlo.

## Le impostazioni con meno difetti

Il primo messaggio tiene un elenco delle impostazioni che danno meno problemi sulla 70205. È un ripiego, non una soluzione, e nessuna impostazione ferma la tinta.

| Impostazione | Valore |
|---|---|
| **Shadow Quality** | Good o superiore |
| **Secondary Lighting** | High |
| **Compatibility Settings** | Tutte e quattro attive |
| **Render Scale** | 100% |
| **Tutto il resto** | 10, il massimo |

La build 69977 aveva già [corretto un kernel panic e delle bande sui Mac](/it/news/a-new-beta-build-fixes-mac-and-controller-issues/) a settembre. Quali correzioni porterà la prossima build ai chip base, Blizzard non lo dice.
