---
title: "Tom Ellis erklärt, was am ersten Beta-Abend schieflief"
description: "Der Senior Game Producer geht die Disconnects, das langsame Looten und die Neustarts vom 17. September einzeln durch und sagt, was das Team jeweils geändert hat."
date: 2026-09-19
category: forever
lang: de
manual: true
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "Ein Hunter im Fellmantel steht mit einem Bären über einem grünen Tal, aus dem offiziellen Cinematic von World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
Die Beta von World of Warcraft: Forever ging am 17. September mit Disconnects, langen Warteschlangen und Verzögerung bei jedem Loot auf. Senior Game Producer Tom Ellis schrieb auf X einen langen Beitrag darüber, was schiefging, zusammengefasst von Wowhead. Es ist ein seltener Blick auf die Maschinerie hinter einer Beta.

## Die Umgebung ist ein Testaufbau

Ellis beginnt beim Rahmen. Die Beta läuft nicht auf einem Produktionsaufbau, sondern auf dem Beta- und PTR-Aufbau, und der ist deutlich schwächer. Eine Beta zieht meist keine großen Zahlen, diese Hardware wurde also nie dafür gebaut.

## Die Disconnects

Spieler kamen durch die Login-Warteschlange und flogen danach raus. Diese Warteschlange selbst ist normal: Battle.net begrenzt das Tempo der Logins, um sich zu schützen.

Die Disconnects brauchten am längsten zur Erklärung, laut Ellis etwa eine halbe Stunde. Jeder Dienst wirkte gelangweilt, Prozessor und Speicher kaum belastet, auf der Spielseite wie auf der Seite von Battle.net. Die Ursache war ein Messsystem, das die Dienste von Battle.net bei hoher Last schützt. Die Beta nutzt ein einziges regionales Realm mit zwei Verbindungen, und dieser kleine Aufbau, der sehr viele Logins durchdrückte, brachte die Rechnung dieses Systems durcheinander. Diese zwei Verbindungen auf acht zu skalieren öffnete die Tore.

Ellis ergänzt, das Team wolle mehr Logging und Meldungen dafür, wenn dieses System eingreift, denn niemand hatte es je ohne ein offensichtliches Prozessorproblem daneben anspringen sehen.

## Das langsame Looten

Danach dauerten Looten, Quests annehmen und alles, was die Datenbank berührt, lange. Die Datenbank der PTR-Umgebung antwortete langsam.

Die Datenbank-Engineers ließen von Hand ein Analyze über alle Tabellen laufen und richteten Jobs ein, um das weiter zu tun. Der Grund: einige Tabellen sind neu, und bestehende Tabellen bekamen eine enorme Menge an Inserts mit Abfragemustern, die niemand vorher gesehen hatte, die Statistiken veralteten also schnell. Die Geschwindigkeit war sofort wieder in Ordnung.

## Die Neustarts

Ein paar Stunden später liefen die World-Pools, die die Spielsimulation tragen, heiß auf dem Prozessor und fast voll beim Speicher. Die ersten virtuellen Maschinen traf der Out-of-Memory-Killer und drohte, den Hypervisor mitzureißen.

Die Ursache: leere Maps wurden nicht sauber beendet, Prozessor und Speicher liefen also weiter voll. Die Lösung kam schnell durch die QA, brauchte aber Neustarts, um zu greifen, und deshalb flogen alle raus. Das Team nutzte den Moment, um zusätzliche Worlds und einen zweiten regionalen Dienst dazuzustellen.

Danach lief die Beta rund, schreibt Ellis, und die Classic-Teams wachten weiter über alles, was noch blockieren könnte.
