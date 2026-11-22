---
title: "Restoration Druid: de healgids voor WoW Forever"
metaTitle: "Restoration Druid in WoW Forever: build, talenten, macro's en FAQ"
description: "De Restoration Druid in WoW Forever: wat er verandert voor de healer, sterktes en zwaktes, de standaardbuild 11/0/40, Dual Specialization, nuttige macro's, unit frames en de meest gestelde vragen."
short: "Restoration Druid"
updated: 2026-11-22
lang: nl
manual: true
faq:
  - q: "Wat is de beste talentbuild voor een Restoration Druid in WoW Forever?"
    a: "De meeste Restoration Druids spelen 11 punten in Balance, 0 in Feral Combat en 40 in Restoration, met Improved Regrowth en Wild Growth. De punten in Balance dienen vooral voor Nature's Splendor."
  - q: "Verbruikt Swiftmend nog de HoT?"
    a: "Nee. In WoW Forever verbruikt Swiftmend de Rejuvenation of Regrowth niet meer. Hij heeft wel je eigen Rejuvenation of Regrowth op het doelwit nodig: Wild Growth of de HoT van een andere Druid telt niet."
  - q: "Is Healing Touch nog de moeite?"
    a: "Ja, maar minder dan in Classic. De straf op lagere ranks en een sterkere Regrowth maken het minder centraal, en Tranquil Spirit is geen sterk talent meer."
  - q: "Welk ras is het beste voor een Restoration Druid?"
    a: "High Order Skyborne bij de Alliance, voor 2% haste en Read Leyline voor mana, of Night Elf voor Elune's Light voor zware schade. Bij de Horde Windshaper Skyborne, voor 2% haste en Skysight."
  - q: "Welke beroepen passen bij een Restoration Druid?"
    a: "Tijdens het levelen Skinning met Leatherworking, of twee verzamelberoepen. Op level 60 lijkt Engineering sterk voor de raid, en Enchanting heeft toegang tot relics die binden bij oprapen."
  - q: "Kan een Restoration Druid Magic of Disease dispellen?"
    a: "Nee. De Druid heeft geen dispel voor Magic of Disease, een van de zwaktes van de spec."
  - q: "Wat zijn de statprioriteit en de BiS-lijst?"
    a: "Healing power zodra je genoeg Intellect en Stamina hebt, dan Spirit of mana per 5 seconden als je mana opraakt, en critical strike chance als laatste. De pre-raid BiS-lijst staat op onze BiS-pagina."
  - q: "Krijgt een Restoration Druid een raidplaats?"
    a: "Elke raid wil healers, en de Restoration Druid heeft een sterke, brede kit. De spec brengt een raid minder dan de andere twee Druid-specs, maar is een sterke keuze tegen veel soorten schade."
  - q: "Moet een Restoration Druid schade doen?"
    a: "In rustige momenten wel. De sterkere Wrath, de gratis Omen of Clarity en Judgement of Wisdom maken goedkope schadespells de moeite om tussendoor te casten."
sources:
  - name: "Wowhead, enchants and consumables"
    url: "https://www.wowhead.com/forever/guide/classes/druid/restoration/enchants-consumables-pve-healer"
  - name: "Mobalytics"
    url: "https://mobalytics.gg/wow-forever/classes/restoration-druid-guide-progress"
---
De Restoration Druid in WoW Forever blijft een healer die de schade voor is, met HoTs op veel spelers tegelijk. Nieuwe middelen laten de spec ook reageren: Wild Growth, een Swiftmend die de HoT laat staan en een gratis Omen of Clarity. Deze gids behandelt de wijzigingen, de standaardbuild, macro's en de meest gestelde vragen.

| | |
|---|---|
| Rol | Healer, het sterkst in raidhealing |
| Standaardbuild | 11 Balance, 0 Feral Combat, 40 Restoration |
| Kerntalenten | Improved Regrowth, Wild Growth |
| Sterk in | Raidhealing, mobiliteit, utility |
| Zwak in | Geen dispel voor Magic of Disease, geen shields |
| Stats en BiS | [Pre-raid BiS-lijst](/nl/bis/forever/preraid/druid-restoration/) |

## Wat er verandert voor de healer

- **Omen of Clarity is basis** en kan nu ook procken op spells, ongeveer twee keer per minuut. De proc maakt de volgende spell gratis, dus hij loont het meest op een dure heal.
- **Wild Growth** is het nieuwe sluitstuk van de boom: een sterke heal op de hele party van het doelwit. Sinds 11 november kun je hem niet meer al lopend casten, maar hij haalt dubbel zoveel uit je spell power, [meer in onze post](/nl/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> verbruikt** de HoT die hij gebruikt niet meer. Hij werkt alleen op een doelwit met je eigen Rejuvenation of Regrowth: Wild Growth of de HoT van een andere Druid telt niet.
- **HoTs kunnen critten.** De extra critkans van Improved Regrowth telt waarschijnlijk ook voor het HoT-deel van <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Dat komt uit de gegevens van het spel en was op de beta niet te testen.
- **HoTs van meerdere Druids stapelen** op één doelwit. Een bug verhindert dat in sommige gevallen nog.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** stapelt zijn armorverlaging niet meer met <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> van Warlocks.
- **Manakosten** zijn aangepast, en Regrowth healt veel meer dan vroeger.
- **Feral Swiftness en <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** werken nu ook binnen.
- **Van vorm wisselen** zit minder in de weg. Verschillende items, abilities en acties werken nu in een vorm, en veel acties die vroeger mislukten, halen je nu vanzelf uit je vorm.

## Sterktes en zwaktes

| Sterk | Zwak |
|---|---|
| Zeer sterke raidhealing | Concurreert voor raidplaatsen met de andere Druid-specs |
| Sterke burstheals op één doelwit | Geen externe schadebeperking of shields |
| Een brede waaier aan utility | Mana vraagt actief beheer |
| Veel totale healing | Raidhealing heeft tijd nodig om op gang te komen |
| De beste mobiliteit van alle healers | Geen dispel voor Magic of Disease |
| Raiddebuffs | |

## Builds voor level 60

Drie builds, elk met de 51 talentpunten van level 60: een voor raids en dungeons, een om te levelen en een voor PvP. Elke build opent in onze talentcalculator.

### Raid- en dungeonbuild, 11/0/40

11 punten in Balance en 40 in Restoration, voor dungeons en raids. [Open de build in de talentcalculator](/nl/talents/druid/?t=05302001--5553005123113051).

| Talent | Punten |
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

Met 21 punten in Balance voor Improved Wrath, Moonglow en Insect Swarm laat deze raidbuild je meer schade doen in rustige momenten (21/0/30). [Open hem in de talentcalculator](/nl/talents/druid/?t=5530203110001--055300510311105).

Voor dungeons laat een build met Feral Combat je wisselen naar cat of bear als het healen rustig is, of als de tank sneuvelt (0/32/19). [Open hem in de talentcalculator](/nl/talents/druid/?t=-55000032023012125001-05530011031).

De 11 punten in Balance komen tot Nature's Splendor, met Genesis voor je HoTs en Nature's Majesty voor critical strike chance. In Restoration gaan de punten naar healing en mana in plaats van naar Cat Form. Zet meer punten in Tranquil Spirit als Healing Touch en Tranquility een groot deel van je mana opeten; Improved Tranquility is een alternatief voor een kortere cooldown en minder threat. Verschuif punten in plaats van ze erbij te zetten, en hou Wild Growth en Living Spirit, het talent ervoor.

### Levelbuild, 9/32/10

De levelbuild neemt eerst de talenten die je helpen om alleen te doden. [Open hem in de talentcalculator](/nl/talents/druid/?t=050022-55200002123012125001-055). De [levelbuild voor de Druid](/nl/leveling/druid/) geeft het talent voor elk level. Heal je vooral dungeons tijdens het levelen? Dan werkt een healerroute: 0/0/21 op level 30, met Heart of the Wild, Naturalist, Bloom op 20, Gift of Nature, Swiftmend op 25, Reflection en Nature's Swiftness op 30. Alleen questen gaat sneller als Feral.

### PvP-build, 16/11/24

De PvP-build ruilt schade in voor controle en overleven. [Open de PvP-build in de talentcalculator](/nl/talents/druid/?t=500222311-052021001-555330010011).

## Healen op level 60

**Spellranks.** Op level 60 gebruik je Healing Touch rank 10, Rejuvenation rank 10, Regrowth rank 9 en Wild Growth rank 3. Hou Healing Touch rank 8 voor een kleinere heal en Rejuvenation rank 9 voor lichte schade. Rank 1 Rejuvenation is goedkoop bij lichte schade en zet nog steeds Bloom in gang als hij afloopt, maar neem een hogere rank als het doelwit die nodig heeft.

**Wild Growth** heeft 3 seconden cast, 2,5 seconden met Naturalist 5/5, en heelt de party van je doelwit over 7 seconden, met de sterkste ticks aan het begin. Begin de cast zodat hij landt als de schade binnenkomt, en kies de party die het nodig heeft: hij zoekt niet zelf de meest gewonde spelers in de raid. Met Nature's Swiftness is hij instant.

**Stats.** Eerst genoeg Intellect en Stamina, dan healing power. Raak je mana op, dan is Spirit of mana per 5 seconden meer waard dan wat extra healing; met Reflection en Living Spirit voedt Spirit ook Bloom. Critical strike chance komt daarna: HoTs kunnen critten in Forever, maar een crit is een bonus, geen plan. De [pre-raid BiS-lijst](/nl/bis/forever/preraid/druid-restoration/) toont naar welke items je toewerkt.

**Idols.** Mystic Mushroom, een bind on pickup Enchanting-craft op skill 130, geeft 5% Spirit, goed voor mana en Bloom. Idol of Synthesis van Pix Xizzix verkort de cooldown van Swiftmend per HoT van jou op het doelwit, handig op een tank die je bedekt houdt. Zodra de raids opengaan, haalt Idol of Swiftness 3 seconden van de cooldown van Swiftmend; daarvoor heb je Malleable Essence of Nature uit de raids nodig.

## Enchants en consumables

De beste enchant per slot. Zet ze op gear die je een tijd houdt; tijdens het levelen volstaan de goedkopere versies van dezelfde enchant.

| Slot | Beste |
|---|---|
| **Tweehandig wapen** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248636"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant 2H Weapon - Mighty Healing Power</a> |
| **Eenhandig wapen** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=22750"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Healing Power</a> |
| **Off-hand** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1219579"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Off-Hand - Wisdom</a> |
| **Nek** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1249058"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Necklace - Healing Power</a> |
| **Borst** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Handen** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Benen** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Voeten** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |

## Dual Specialization en andere builds

Met Dual Specialization en Wild Growth als sterk sluitstuk zullen de oude hybride builds voor Restoration nauwelijks nog gespeeld worden. Eén uitzondering ligt voor de hand: een build die een paar sterke punten in Feral Combat laat vallen om Insect Swarm in Balance te halen, op 16 punten. Insect Swarm blijft naar verwachting een sterke debuff op bazen.

De wijziging aan <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> maakt een groot verschil voor de waarde van dat talent, voor Restoration en voor Balance. De meeste punten in Restoration liggen vast: wie ze weglaat, verliest meer dan de punten elders opbrengen. Andere builds kunnen in alle content werken, dus een build die bij een specifieke behoefte past, is een geldige keuze.

## Macro's

Sommige voorwaarden in macro's werkten op de beta niet zoals verwacht. De moderne client doet ook veel zonder macro's of addons: mouseover casting, click casting en het verplaatsen van interface-elementen staan in de spelinstellingen.

**Mouseover.** Cast de spell op de vriendelijke, levende unit onder de muis, anders op het vriendelijke doelwit, anders op jezelf. Haal `nodead` weg als je hem voor <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> of Revive gebruikt.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Noodheal.** Stopt wat je doet en cast een directe Healing Touch met <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. Door een bug op de beta moest je er soms meer dan één keer op drukken. Sinds 10 november maakt Nature's Swiftness ook Wild Growth instant, [meer in onze post](/nl/news/racial-vendor-mounts-become-bind-on-pickup/).

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**Eén knop voor utility.** Rebirth op een dode bondgenoot in gevecht, Revive op een dode bondgenoot buiten gevecht, en <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> op een levende bondgenoot.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Spells op de grond.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> op de cursor, of een item zoals de Advanced Target Dummy aan je eigen voeten.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Vormen.** Een macro kan iets alleen in een bepaalde vorm doen, met `[form:N]`:

| Voorwaarde | Vorm |
|---|---|
| **form:0** | Casterform |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Unit frames en de Cooldown Manager

De standaard unit frames zijn minder aan te passen dan spelers van oudere versies van het spel gewend zijn. Sommige addons voegen filters toe voor buffs en debuffs, wat veel helpt voor een class die met HoTs healt. EllesmereUI is de toegankelijkste en meest aanpasbare addon voor unit frames. Voor party- en raidframes werkt Grid2 goed: toon eerst leven, bereik en de debuffs die je kunt weghalen, en dan je eigen HoTs.

De ingebouwde Cooldown Manager vervangt een centrale groep WeakAuras, en addons kunnen hem een eigen uiterlijk geven. Op de beta werd hij stap voor stap uitgerold. Meer in de [post over de Cooldown Manager](/nl/news/cooldown-manager-arrives-in-forever-from-midnight/).
