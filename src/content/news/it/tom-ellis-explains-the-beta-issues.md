---
title: "Tom Ellis spiega cosa si è rotto la prima sera di beta"
description: "Il Senior Game Producer ripercorre una per una le disconnessioni, il loot lento e i riavvii del 17 settembre, e cosa ha cambiato il team ogni volta."
date: 2026-09-19
category: forever
lang: it
manual: true
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "Un hunter con mantello di pelliccia accanto a un orso sopra una valle verde, dal filmato ufficiale di World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
La beta di World of Warcraft: Forever è partita il 17 settembre con disconnessioni, code lunghe e ritardo a ogni loot. Il Senior Game Producer Tom Ellis ha scritto su X un lungo messaggio su cosa è andato storto, riassunto da Wowhead. È uno sguardo raro sulla macchina dietro una beta.

## L'ambiente è un banco di prova

Ellis parte dal quadro. La beta non gira su un ambiente di produzione ma su quello di beta e PTR, molto meno potente. Una beta di solito non attira numeri grandi, quindi quell'hardware non è mai stato costruito per questo.

## Le disconnessioni

I giocatori superavano la coda di accesso e poi venivano buttati fuori. Quella coda di per sé è normale: Battle.net limita il ritmo degli accessi per proteggersi.

Le disconnessioni sono state le più lunghe da spiegare, circa mezz'ora secondo Ellis. Tutti i servizi sembravano annoiati, con processore e memoria appena usati, sia dal lato del gioco sia da quello di Battle.net. La causa si è rivelata un sistema di misura che protegge i servizi di Battle.net sotto carico pesante. La beta usa un solo reame regionale con due connessioni, e quel piccolo impianto che spingeva moltissimi accessi ha falsato il calcolo di quel sistema. Portare quelle due connessioni a otto ha aperto le porte.

Ellis aggiunge che il team vuole più registrazione e più avvisi per quando quel sistema interviene, perché nessuno lo aveva mai visto scattare senza un evidente problema di processore accanto.

## Il loot lento

Poi lootare, accettare missioni e tutto ciò che tocca il database richiedeva tempo. Il database dell'ambiente PTR rispondeva lentamente.

Gli ingegneri del database hanno lanciato a mano un analyze su tutte le tabelle e impostato lavori per continuare a farlo. Il motivo: alcune tabelle sono nuove e quelle esistenti ricevevano una quantità enorme di inserimenti, con schemi di query che nessuno aveva visto, quindi le statistiche invecchiavano in fretta. La velocità è tornata subito.

## I riavvii

Qualche ora dopo, i world pool che fanno girare la simulazione di gioco scaldavano sul processore ed erano quasi senza memoria. Le prime macchine virtuali sono state colpite dall'out of memory killer e rischiavano di trascinarsi dietro l'hypervisor.

La causa: le mappe vuote non venivano chiuse correttamente, quindi processore e memoria continuavano a riempirsi. La correzione è passata in fretta dalla QA ma serviva un riavvio per applicarla, ed è per questo che sono usciti tutti. Il team ne ha approfittato per aggiungere altri world e un secondo servizio regionale.

Da lì in poi la beta è andata liscia, scrive Ellis, e i team Classic sono rimasti a controllare qualunque cosa bloccasse.
