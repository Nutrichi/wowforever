---
title: "Ein Addon warnt Warlocks vor Summon-and-Kick"
description: "The Summoners Union zählt deine Ritual of Summoning und lässt dich einen Anführer markieren, der dich binnen 20 Minuten nach einer Beschwörung rauswirft. Andere Nutzer werden gewarnt, wenn dieser Spieler sie einlädt. Läuft in WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: de
manual: true
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "Ein Troll Warlock, der mit grünem und violettem Feuer in beiden Händen zaubert, neben einem Imp, in einer rot-violetten Halle mit hängenden Knochen und Schädeln"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Jeder Warlock kennt es. Zehn Minuten am Meeting Stone, Soul Shards für <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a> verbrannt, und sobald der letzte Spieler da ist, fliegst du aus der Gruppe. The Summoners Union, ein neues Addon von OrganicCarrots, führt eine Liste der Anführer, die das tun, und warnt dich, wenn sie dich wieder einladen. Es läuft in World of Warcraft: Forever.

## So funktioniert es

1. **Es zählt deine Beschwörungen.** Jedes Ritual of Summoning, das du in einer Gruppe beendest, wird gezählt. Wirst du binnen 20 Minuten nach deiner letzten Beschwörung aus der Gruppe geworfen, oder löst sie sich auf? Dann fragt das Addon, ob du den Anführer markieren willst, oder den Anführer und seine Gilde. Selbst gehen zählt nie, und ohne deinen Klick wird niemand markiert.
2. **Es warnt dich.** Eine Schlachtzugswarnung erscheint, wenn ein markierter Spieler dich einlädt oder deiner Gruppe beitritt, mit seiner Bilanz: etwa 6-mal markiert von 4 Nutzern. Einladungen markierter Spieler können automatisch abgelehnt werden. Das ist standardmäßig aus.
3. **Es markiert Spieler.** Ein markierter Spieler bekommt eine rote Zeile im Tooltip. Nur du siehst sie.
4. **Es teilt die Liste.** Neue Markierungen gehen als versteckte Addon-Nachrichten an andere Nutzer in deiner Gilde und deiner Gruppe. Ein versteckter Kanal für alle Nutzer auf deinem Realm ist optional: `/su share channel on`.

Auch andere Klassen können einen Spieler markieren, mit `/su flag` oder einem Rechtsklick auf ein Porträt oder einen Gruppenrahmen. Jede Meldung zeigt die Klasse dessen, der sie abgab, damit du einen rausgeworfenen Warlock von jemandem unterscheidest, der von Hand markiert.

## Gegen falsche Meldungen

- Eine Markierung wird nur geteilt, wenn du in den letzten 7 Tagen mit diesem Spieler, oder mit einem Mitglied dieser Gilde, in einer Gruppe warst. Alles andere bleibt eine private Notiz.
- Wer mehr als 10 neue Meldungen an einem Tag abgibt, wird ignoriert.
- Meldungen anderer warnen dich erst, wenn zwei verschiedene Quellen denselben Spieler markieren. Das änderst du mit `/su set threshold`.
- `/su distrust <Name>` ignoriert alles, was ein Nutzer meldet oder weitergibt.
- Meldungen anderer zählen nach 180 Tagen nicht mehr.

Das Addon schreibt nie Namen in einen öffentlichen Kanal, flüstert nie einen markierten Spieler an und wirft oder meldet niemanden. Niemand erfährt, dass er markiert wurde.

## Befehle

| Befehl | Was er tut |
|---|---|
| **/su** | Öffnet die Liste |
| **/su options** | Öffnet die Optionen |
| **/su flag** | Markiert einen Spieler, dein Ziel, wenn du keinen Namen angibst |
| **/su flagguild** | Markiert eine Gilde |
| **/su check** | Sucht einen Spieler |
| **/su test** | Zeigt die Frage nach einem Rauswurf, ohne jemanden zu markieren |

Das Addon ist kostenlos auf [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) und läuft auch in Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic und im modernen WoW. Der Code liegt offen auf GitHub. Mehr zur Klasse in unserem [Warlock-Guide](/de/classes/warlock/).
