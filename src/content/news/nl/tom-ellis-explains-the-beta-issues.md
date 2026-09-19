---
title: "Tom Ellis legt uit wat er misliep op de eerste beta-avond"
description: "De Senior Game Producer loopt de disconnects, het trage looten en de herstarts van 17 september één voor één af, en vertelt wat het team telkens veranderde."
date: 2026-09-19
category: forever
lang: nl
manual: true
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "Een hunter in een bontmantel staat met een beer boven een groene vallei, uit de officiële cinematic van World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
De beta van World of Warcraft: Forever ging op 17 september open met disconnects, lange wachtrijen en vertraging bij elke loot. Senior Game Producer Tom Ellis schreef op X een lange post over wat er misging, samengevat door Wowhead. Het is een zeldzame blik op de machinerie achter een beta.

## De omgeving is een testopstelling

Ellis begint bij het kader. De beta draait niet op een productieopstelling maar op de beta- en PTR-opstelling, en die is een stuk minder krachtig. Een beta trekt meestal geen grote aantallen, dus die hardware is daar nooit voor gebouwd.

## De disconnects

Spelers raakten door de inlogwachtrij en vlogen er daarna uit. Die wachtrij zelf is normaal: Battle.net beperkt het tempo van de logins om zichzelf te beschermen.

De disconnects kostten de meeste tijd om te verklaren, ongeveer een half uur volgens Ellis. Elke dienst zag er verveeld uit, met processor en geheugen nauwelijks belast, zowel aan de spelkant als aan de kant van Battle.net. De oorzaak bleek een meetsysteem dat de diensten van Battle.net beschermt bij zware belasting. De beta gebruikt één regionale realm met twee verbindingen, en die kleine opstelling die veel logins doorduwde, gooide de berekening van dat systeem in de war. Die twee verbindingen naar acht schalen zette de poorten open.

Ellis voegt eraan toe dat het team meer logging en meldingen wil voor wanneer dat systeem ingrijpt, want niemand had het ooit zien aanslaan zonder dat er ook een duidelijk processorprobleem bij was.

## Het trage looten

Daarna duurden looten, quests aannemen en alles wat de database raakt lang. De database van de PTR-omgeving antwoordde traag.

De database-engineers draaiden met de hand een analyze over alle tabellen en zetten taken op om dat te blijven doen. De reden: sommige tabellen zijn nieuw en bestaande tabellen kregen een enorme hoeveelheid inserts, met zoekpatronen die niemand eerder zag, dus de statistieken verouderden snel. De snelheid was meteen weer in orde.

## De herstarts

Een paar uur later liepen de worldpools die de spelsimulatie draaien warm op de processor en bijna vol qua geheugen. De eerste virtuele machines werden geraakt door de out-of-memory killer en dreigden de hypervisor mee te nemen.

De oorzaak: lege maps werden niet goed afgesloten, dus processor en geheugen bleven vollopen. De oplossing raakte snel door QA maar had herstarts nodig om te werken, en daarom vloog iedereen eruit. Het team gebruikte dat moment om extra worlds bij te zetten en een tweede regionale dienst.

Daarna liep de beta vlot, schrijft Ellis, en bleven de Classic-teams waken over alles wat nog zou blokkeren.
