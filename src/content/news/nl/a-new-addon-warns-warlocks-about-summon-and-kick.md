---
title: "Addon waarschuwt Warlocks voor summon-en-kick"
description: "The Summoners Union telt je Ritual of Summoning en laat je een leider markeren die je binnen 20 minuten na een summon uit de groep zet. Andere gebruikers krijgen dan een waarschuwing als die speler hen uitnodigt. Werkt in WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: nl
manual: true
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "Een Troll Warlock die met groen en paars vuur in beide handen cast, naast een Imp, in een rood-paarse zaal met hangende botten en schedels"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Elke Warlock kent het. Tien minuten bij de meeting stone, Soul Shards verbrand aan <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a>, en zodra de laatste speler er is, lig je uit de groep. The Summoners Union, een nieuwe addon van OrganicCarrots, houdt een lijst bij van de leiders die dat doen en waarschuwt je als ze je opnieuw uitnodigen. Hij werkt in World of Warcraft: Forever.

## Zo werkt het

1. **Hij telt je summons.** Elke Ritual of Summoning die je in een groep afmaakt, telt. Word je uit die groep gezet, of valt de groep uit elkaar, binnen 20 minuten na je laatste summon? Dan vraagt de addon of je de leider wilt markeren, of de leider en zijn guild. Zelf vertrekken telt nooit, en zonder jouw klik wordt niemand gemarkeerd.
2. **Hij waarschuwt je.** Een raid warning verschijnt als een gemarkeerde speler je uitnodigt of in je groep komt, met de stand: bijvoorbeeld 6 keer gemarkeerd door 4 gebruikers. Uitnodigingen van gemarkeerde spelers kunnen vanzelf geweigerd worden. Dat staat standaard uit.
3. **Hij markeert spelers.** Een gemarkeerde speler krijgt een rode regel in zijn tooltip. Alleen jij ziet die.
4. **Hij deelt de lijst.** Nieuwe markeringen gaan als verborgen addonberichten naar andere gebruikers in je guild en je groep. Een verborgen kanaal voor elke gebruiker op je realm is optioneel: `/su share channel on`.

Ook andere classes kunnen een speler markeren, met `/su flag` of een rechtsklik op een portret of een partyframe. Bij elke melding staat de class van wie ze deed, zodat je een gekickte Warlock onderscheidt van iemand die met de hand markeert.

## Tegen valse meldingen

- Een markering wordt alleen gedeeld als je de voorbije 7 dagen in een groep zat met die speler, of met een lid van die guild. De rest blijft een privénotitie.
- Wie meer dan 10 nieuwe meldingen op een dag doet, wordt genegeerd.
- Meldingen van anderen waarschuwen je pas als twee verschillende bronnen dezelfde speler markeren. Dat pas je aan met `/su set threshold`.
- `/su distrust <naam>` negeert alles wat één gebruiker meldt of doorgeeft.
- Meldingen van anderen tellen na 180 dagen niet meer.

De addon zet nooit namen in een openbaar kanaal, fluistert nooit naar een gemarkeerde speler en kickt of rapporteert niemand. Niemand hoort dat hij gemarkeerd werd.

## Commando's

| Commando | Wat het doet |
|---|---|
| **/su** | Opent de lijst |
| **/su options** | Opent de opties |
| **/su flag** | Markeert een speler, je target als je geen naam geeft |
| **/su flagguild** | Markeert een guild |
| **/su check** | Zoekt een speler op |
| **/su test** | Toont de vraag na een kick, zonder iemand te markeren |

De addon is gratis op [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) en werkt ook in Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic en modern WoW. De code staat open op GitHub. Meer over de class in onze [Warlock-gids](/nl/classes/warlock/).
