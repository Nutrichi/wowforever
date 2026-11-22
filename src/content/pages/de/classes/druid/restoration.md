---
title: "Restoration Druid: der Heilguide für WoW Forever"
metaTitle: "Restoration Druid in WoW Forever: Build, Talente, Makros und FAQ"
description: "Der Restoration Druid in WoW Forever: was sich für den Heiler ändert, Stärken und Schwächen, der Standardbuild 11/0/40, Dual Specialization, nützliche Makros, Unit Frames und die häufigsten Fragen."
short: "Restoration Druid"
updated: 2026-11-22
lang: de
manual: true
faq:
  - q: "Was ist der beste Talentbuild für einen Restoration Druid in WoW Forever?"
    a: "Die meisten Restoration Druids spielen 11 Punkte in Balance, 0 in Feral Combat und 40 in Restoration, mit Improved Regrowth und Wild Growth. Die Punkte in Balance dienen vor allem Nature's Splendor."
  - q: "Verbraucht Swiftmend noch den HoT?"
    a: "Nein. In WoW Forever verbraucht Swiftmend das Rejuvenation oder Regrowth nicht mehr. Es braucht aber dein eigenes Rejuvenation oder Regrowth auf dem Ziel: Wild Growth oder der HoT eines anderen Druiden zählt nicht."
  - q: "Lohnt sich Healing Touch noch?"
    a: "Ja, aber weniger als in Classic. Die Strafe auf niedrigere Ränge und ein stärkeres Regrowth machen es weniger zentral, und Tranquil Spirit ist kein starkes Talent mehr."
  - q: "Welches Volk ist das beste für einen Restoration Druid?"
    a: "Das ist noch nicht bekannt. Jedes Druidenvolk hat einem Heiler etwas zu bieten."
  - q: "Welche Berufe passen zu einem Restoration Druid?"
    a: "Beim Leveln Skinning mit Leatherworking oder zwei Sammelberufe. Auf Level 60 wirkt Engineering stark für den Raid, und Enchanting hat Zugang zu Relikten, die beim Aufheben gebunden werden."
  - q: "Kann ein Restoration Druid Magie oder Krankheiten bannen?"
    a: "Nein. Der Druide hat keinen Bann für Magie oder Krankheiten, eine der Schwächen der Spezialisierung."
  - q: "Was sind die Wertepriorität und die BiS-Liste?"
    a: "Heilkraft, sobald du genug Intelligenz und Ausdauer hast, dann Willenskraft oder Mana alle 5 Sekunden, wenn dir das Mana ausgeht, und kritische Trefferchance zuletzt. Die Pre-Raid-BiS-Liste steht auf unserer BiS-Seite."
  - q: "Bekommt ein Restoration Druid einen Raidplatz?"
    a: "Jeder Raid will Heiler, und der Restoration Druid hat ein starkes, breites Kit. Die Spezialisierung bringt einem Raid weniger als die anderen beiden Druiden-Spezialisierungen, ist aber gegen viele Schadensarten eine starke Wahl."
  - q: "Soll ein Restoration Druid Schaden machen?"
    a: "In ruhigen Momenten ja. Das stärkere Wrath, das kostenlose Omen of Clarity und Judgement of Wisdom machen es lohnend, günstige Schadenszauber einzustreuen."
sources:
  - name: "Mobalytics"
    url: "https://mobalytics.gg/wow-forever/classes/restoration-druid-guide-progress"
---
Der Restoration Druid in WoW Forever bleibt ein Heiler, der dem Schaden zuvorkommt, mit HoTs auf vielen Spielern gleichzeitig. Neue Werkzeuge lassen die Spezialisierung auch reagieren: Wild Growth, ein Swiftmend, das den HoT stehen lässt, und ein kostenloses Omen of Clarity. Dieser Guide behandelt die Änderungen, den Standardbuild, Makros und die häufigsten Fragen.

| | |
|---|---|
| Rolle | Heiler, am stärksten in der Raidheilung |
| Standardbuild | 11 Balance, 0 Feral Combat, 40 Restoration |
| Kerntalente | Improved Regrowth, Wild Growth |
| Stärken | Raidheilung, Mobilität, Utility |
| Schwächen | Kein Bann für Magie oder Krankheiten, keine Schilde |
| Werte und BiS | [Pre-Raid-BiS-Liste](/de/bis/forever/preraid/druid-restoration/) |

## Was sich für den Heiler ändert

- **Omen of Clarity ist Grundausstattung** und kann jetzt bei Zaubern auslösen, etwa zweimal pro Minute. Der Proc macht den nächsten Zauber kostenlos, er lohnt sich also am meisten bei einer teuren Heilung.
- **Wild Growth** ist das neue Abschlusstalent des Baums: eine starke Heilung auf die ganze Gruppe des Ziels. Seit dem 11. November geht er nicht mehr in der Bewegung, zieht aber doppelt so viel aus deiner Zaubermacht, [mehr in unserem Beitrag](/de/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> verbraucht** den HoT, den es nutzt, nicht mehr. Es wirkt nur auf ein Ziel mit deinem eigenen Rejuvenation oder Regrowth: Wild Growth oder der HoT eines anderen Druiden zählt nicht.
- **HoTs können kritisch treffen.** Die zusätzliche kritische Chance von Improved Regrowth gilt wahrscheinlich auch für den HoT-Teil von <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Das stammt aus den Spieldaten und ließ sich auf der Beta nicht testen.
- **HoTs mehrerer Druiden stapeln** auf einem Ziel. Ein Bug verhindert das in manchen Fällen noch.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** stapelt seine Rüstungssenkung nicht mehr mit <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> der Warlocks.
- **Die Manakosten** wurden angepasst, und Regrowth heilt deutlich mehr als früher.
- **Feral Swiftness und <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** wirken jetzt auch in Innenräumen.
- **Gestaltwandel** stört weniger. Mehrere Gegenstände, Fähigkeiten und Aktionen funktionieren jetzt in Gestalt, und viele Aktionen, die früher scheiterten, holen euch jetzt automatisch aus der Gestalt.

## Stärken und Schwächen

| Stärken | Schwächen |
|---|---|
| Sehr starke Raidheilung | Konkurriert mit den anderen Druiden-Spezialisierungen um Raidplätze |
| Starke Burstheilung auf ein Ziel | Keine externe Schadensreduktion und keine Schilde |
| Eine breite Auswahl an Utility | Mana braucht aktives Management |
| Viel Gesamtheilung | Raidheilung braucht Zeit, um anzulaufen |
| Die beste Mobilität aller Heiler | Kein Bann für Magie oder Krankheiten |
| Raid-Debuffs | |

## Builds für Level 60

Drei Builds, jeder mit den 51 Talentpunkten von Level 60: einer für Raids und Dungeons, einer zum Leveln und einer für PvP. Jeder Build öffnet sich in unserem Talentrechner.

### Raid- und Dungeon-Build, 11/0/40

11 Punkte in Balance und 40 in Restoration, für Dungeons und Raids. [Öffne den Build im Talentrechner](/de/talents/druid/?t=05302001--5553005123113051).

| Talent | Punkte |
|---|---|
| **Genesis** | 5/5 |
| **Moonglow** | 3/3 |
| **Nature's Majesty** | 2/2 |
| **Nature's Splendor** | 1/1 |
| **Nature's Focus** | 5/5 |
| **Heart of the Wild** | 5/5 |
| **Naturalist** | 5/5 |
| **Reflection** | 3/3 |
| **Gift of Nature** | 5/5 |
| **Bloom** | 1/1 |
| **Tranquil Spirit** | 2/5 |
| **Improved Rejuvenation** | 3/3 |
| **Swiftmend** | 1/1 |
| **Nature's Swiftness** | 1/1 |
| **Living Spirit** | 3/3 |
| **Improved Regrowth** | 5/5 |
| **Wild Growth** | 1/1 |

Die 11 Punkte in Balance reichen bis Nature's Splendor, mit Genesis für deine HoTs und Nature's Majesty für kritische Trefferchance. In Restoration gehen die Punkte in Heilung und Mana statt in Cat Form. Steck mehr Punkte in Tranquil Spirit, wenn Healing Touch und Tranquility einen großen Teil deines Manas fressen; Improved Tranquility ist eine Alternative für eine kürzere Abklingzeit und weniger Bedrohung. Verschieb Punkte, statt sie dazuzunehmen, und behalte Wild Growth und Living Spirit, das Talent davor.

### Leveling-Build, 9/32/10

Der Leveling-Build nimmt zuerst die Talente, die beim Töten allein helfen. [Im Talentrechner öffnen](/de/talents/druid/?t=050022-55200002123012125001-055). Der [Level-Build für den Druid](/de/leveling/druid/) gibt das Talent für jedes Level. Heilst du beim Leveln vor allem Dungeons? Dann passt eine Heiler-Route: 0/0/21 auf Level 30, mit Heart of the Wild, Naturalist, Bloom auf 20, Gift of Nature, Swiftmend auf 25, Reflection und Nature's Swiftness auf 30. Allein questen geht als Feral schneller.

### PvP-Build, 16/11/24

Der PvP-Build tauscht Schaden gegen Kontrolle und Überleben. [PvP-Build im Talentrechner öffnen](/de/talents/druid/?t=500222311-052021001-555330010011).

## Heilen auf Level 60

**Zauberränge.** Auf Level 60 nutzt du Healing Touch Rang 10, Rejuvenation Rang 10, Regrowth Rang 9 und Wild Growth Rang 3. Behalte Healing Touch Rang 8 für eine kleinere Heilung und Rejuvenation Rang 9 für leichten Schaden. Rejuvenation Rang 1 ist bei leichtem Schaden billig und löst beim Auslaufen trotzdem Bloom aus, aber nimm einen höheren Rang, wenn das Ziel ihn braucht.

**Wild Growth** hat 3 Sekunden Zauberzeit, 2,5 Sekunden mit Naturalist 5/5, und heilt die Gruppe deines Ziels über 7 Sekunden, mit den stärksten Ticks am Anfang. Beginne den Zauber so, dass er landet, wenn der Schaden kommt, und wähle die Gruppe, die es braucht: Er sucht nicht selbst die am stärksten verletzten Spieler im Raid. Mit Nature's Swiftness ist er sofort.

**Werte.** Zuerst genug Intelligenz und Ausdauer, dann Heilkraft. Geht dir das Mana aus, sind Willenskraft oder Mana alle 5 Sekunden mehr wert als etwas mehr Heilung; mit Reflection und Living Spirit stärkt Willenskraft auch Bloom. Kritische Trefferchance kommt danach: HoTs können in Forever kritisch treffen, aber ein Krit ist ein Bonus, kein Plan. Die [Pre-Raid-BiS-Liste](/de/bis/forever/preraid/druid-restoration/) zeigt, auf welche Items du hinarbeitest.

**Götzen.** Mystic Mushroom, ein beim Aufheben gebundenes Enchanting-Rezept auf Fertigkeit 130, gibt 5 % Willenskraft, gut für Mana und Bloom. Idol of Synthesis von Pix Xizzix verkürzt die Abklingzeit von Swiftmend für jeden deiner HoTs auf dem Ziel, praktisch auf einem Tank, den du abdeckst. Sobald die Raids öffnen, nimmt Idol of Swiftness 3 Sekunden von der Abklingzeit von Swiftmend; dafür brauchst du Malleable Essence of Nature aus den Raids.

## Dual Specialization und andere Builds

Mit Dual Specialization und Wild Growth als starkem Abschlusstalent werden die alten Hybridbuilds für Restoration kaum noch gespielt werden. Eine Ausnahme ist wahrscheinlich: ein Build, der ein paar starke Punkte in Feral Combat aufgibt, um Insect Swarm in Balance zu erreichen, bei 16 Punkten. Insect Swarm dürfte ein starker Debuff auf Bossen bleiben.

Die Änderung an <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> verändert den Wert dieses Talents stark, für Restoration wie für Balance. Die meisten Punkte in Restoration stehen fest: Wer sie weglässt, verliert mehr, als die Punkte anderswo bringen. Andere Builds können trotzdem in allen Inhalten funktionieren, und ein Build für einen bestimmten Zweck ist eine gültige Wahl.

## Makros

Manche Makrobedingungen funktionierten auf der Beta nicht wie erwartet. Der moderne Client kann auch viel ohne Makros oder Addons: Mouseover-Zauber, Klick-Zauber und das Verschieben von Interface-Elementen stehen in den Spieleinstellungen.

**Mouseover.** Wirkt den Zauber auf die verbündete, lebende Einheit unter der Maus, sonst auf das verbündete Ziel, sonst auf euch selbst. Entfernt `nodead`, wenn ihr es für <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> oder Revive nutzt.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Notheilung.** Bricht ab, was ihr gerade tut, und wirkt ein sofortiges Healing Touch mit <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. Wegen eines Bugs auf der Beta brauchte es manchmal mehr als einen Druck. Seit dem 10. November macht Nature's Swiftness auch Wild Growth sofort, [mehr in unserem Beitrag](/de/news/racial-vendor-mounts-become-bind-on-pickup/).

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**Ein Knopf für Utility.** Rebirth auf einen toten Verbündeten im Kampf, Revive auf einen toten Verbündeten außerhalb des Kampfes und <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> auf einen lebenden Verbündeten.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Zauber auf den Boden.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> am Mauszeiger oder ein Gegenstand wie der Advanced Target Dummy zu euren Füßen.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Gestalten.** Ein Makro kann etwas nur in einer bestimmten Gestalt tun, mit `[form:N]`:

| Bedingung | Gestalt |
|---|---|
| **form:0** | Normale Gestalt |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Unit Frames und der Cooldown Manager

Die Standard-Unit-Frames lassen sich weniger anpassen, als Spieler älterer Versionen des Spiels gewohnt sind. Manche Addons ergänzen Filter für Buffs und Debuffs, was einer Klasse, die mit HoTs heilt, sehr hilft. EllesmereUI ist das zugänglichste und anpassbarste Addon für Unit Frames. Für Gruppen- und Raidframes eignet sich Grid2: Zeig zuerst Leben, Reichweite und die Debuffs, die du entfernen kannst, dann deine eigenen HoTs.

Der eingebaute Cooldown Manager ersetzt eine zentrale Gruppe von WeakAuras, und Addons können sein Aussehen ändern. Auf der Beta wurde er schrittweise eingeführt. Mehr im [Beitrag über den Cooldown Manager](/de/news/cooldown-manager-arrives-in-forever-from-midnight/).
