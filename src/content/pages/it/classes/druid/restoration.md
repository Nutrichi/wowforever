---
title: "Restoration Druid: la guida alle cure per WoW Forever"
metaTitle: "Restoration Druid in WoW Forever: build, talenti, macro e FAQ"
description: "Il Restoration Druid in WoW Forever: cosa cambia per il guaritore, punti di forza e debolezze, la build standard 11/0/40, la Dual Specialization, macro utili, i riquadri delle unità e le domande più frequenti."
short: "Restoration Druid"
updated: 2026-11-26
lang: it
manual: true
faq:
  - q: "Qual è la migliore build di talenti per un Restoration Druid in WoW Forever?"
    a: "La maggior parte dei Restoration Druid gioca 11 punti in Balance, 0 in Feral Combat e 40 in Restoration, con Improved Regrowth e Wild Growth. I punti in Balance servono soprattutto per Nature's Splendor."
  - q: "Swiftmend consuma ancora l'HoT?"
    a: "No. In WoW Forever Swiftmend non consuma più il Rejuvenation o il Regrowth che usa. Serve però il tuo Rejuvenation o Regrowth sul bersaglio: Wild Growth o l'HoT di un altro Druid non conta."
  - q: "Healing Touch vale ancora la pena?"
    a: "Sì, ma meno che in Classic. La penalità sui rank inferiori e un Regrowth più forte lo rendono meno centrale, e Tranquil Spirit non è più un talento forte."
  - q: "Qual è la razza migliore per un Restoration Druid?"
    a: "High Order Skyborne per l'Alleanza, per il 2% di celerità e Read Leyline per il mana, o Night Elf per Elune's Light prima dei danni forti. Per l'Orda, Windshaper Skyborne, per il 2% di celerità e Skysight."
  - q: "Quali professioni si adattano a un Restoration Druid?"
    a: "Durante il livellamento Skinning con Leatherworking, oppure due professioni di raccolta. Al livello 60 Engineering sembra forte per il raid, ed Enchanting dà accesso a reliquie vincolate alla raccolta."
  - q: "Un Restoration Druid può dissipare Magia o Malattie?"
    a: "No. Il Druid non ha una dissipazione di Magia né di Malattie, uno dei punti deboli della specializzazione."
  - q: "Qual è la priorità delle statistiche e la lista BiS?"
    a: "Potere curativo quando hai abbastanza Intelletto e Tempra, poi Spirito o mana ogni 5 secondi quando resti senza mana, e probabilità di critico per ultima. La lista BiS pre-raid è sulla nostra pagina BiS."
  - q: "Un Restoration Druid trova posto nel raid?"
    a: "Ogni raid vuole guaritori, e il Restoration Druid ha un kit forte e ampio. La specializzazione porta a un raid meno delle altre due di Druid, ma è una scelta forte contro molti tipi di danni."
  - q: "Un Restoration Druid deve fare danni?"
    a: "Nei momenti tranquilli, sì. Il Wrath più forte, l'Omen of Clarity gratuito e Judgement of Wisdom rendono utile inserire incantesimi di danno economici tra una cura e l'altra."
sources:
  - name: "Wowhead, enchants and consumables"
    url: "https://www.wowhead.com/forever/guide/classes/druid/restoration/enchants-consumables-pve-healer"
  - name: "Mobalytics"
    url: "https://mobalytics.gg/wow-forever/classes/restoration-druid-guide-progress"
---
Il Restoration Druid di WoW Forever resta un guaritore che anticipa i danni, con HoT su molti giocatori alla volta. Nuovi strumenti gli permettono anche di reagire: Wild Growth, uno Swiftmend che lascia l'HoT e un Omen of Clarity gratuito. Questa guida copre i cambiamenti, la build standard, le macro e le domande più frequenti.

| | |
|---|---|
| Ruolo | Guaritore, più forte nelle cure del raid |
| Build standard | 11 Balance, 0 Feral Combat, 40 Restoration |
| Talenti chiave | Improved Regrowth, Wild Growth |
| Punti forti | Cure del raid, mobilità, utilità |
| Punti deboli | Nessuna dissipazione di Magia o Malattie, nessuno scudo |
| Stats e BiS | [Lista BiS pre-raid](/it/bis/forever/preraid/druid-restoration/) |

## Cosa cambia per il guaritore

- **Omen of Clarity è di base** e ora può attivarsi con gli incantesimi, circa due volte al minuto. Il proc rende gratuito l'incantesimo successivo, quindi rende di più su una cura costosa.
- **Wild Growth** è il nuovo talento finale dell'albero: una cura potente su tutto il gruppo del bersaglio. Dall'11 novembre non si lancia più in movimento, ma ricava il doppio dal tuo potere magico, [di più nella nostra notizia](/it/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> non consuma più** l'HoT che usa. Funziona solo su un bersaglio con il tuo Rejuvenation o Regrowth: Wild Growth o l'HoT di un altro Druid non conta.
- **Gli HoT possono fare critico.** Il critico extra di Improved Regrowth probabilmente vale anche per la parte HoT di <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Viene dai dati del gioco e non si poteva testare sulla beta.
- **Gli HoT di più Druid si sommano** sullo stesso bersaglio. Un bug lo impedisce ancora in alcuni casi.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** non somma più la sua riduzione di armatura con <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> dei Warlock.
- **I costi in mana** sono cambiati, e Regrowth cura molto più di prima.
- **Feral Swiftness e <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** ora funzionano al chiuso.
- **Cambiare forma** dà meno fastidio. Diversi oggetti, abilità e azioni ora funzionano in forma, e molte azioni che prima fallivano ti fanno uscire dalla forma da sole.

## Punti di forza e debolezze

| Punti di forza | Debolezze |
|---|---|
| Cure del raid molto forti | Compete per i posti nel raid con le altre specializzazioni di Druid |
| Forti cure rapide su un bersaglio | Nessuna riduzione dei danni esterna né scudi |
| Un'ampia gamma di utilità | Il mana richiede una gestione attiva |
| Molte cure totali | Le cure del raid richiedono tempo per partire |
| La mobilità migliore di tutti i guaritori | Nessuna dissipazione di Magia o Malattie |
| Debuff del raid | |

## Build per il livello 60

Tre build, ognuna con i 51 punti talento del livello 60: una per raid e dungeon, una per livellare e una per il PvP. Ogni build si apre nel nostro calcolatore di talenti.

### Build da raid e dungeon, 11/0/40

11 punti in Balance e 40 in Restoration, per dungeon e raid. [Apri la build nel calcolatore di talenti](/it/talents/druid/?t=05302001--5553005123113051).

| Talent | Punti |
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

Con 21 punti in Balance per Improved Wrath, Moonglow e Insect Swarm, questa build da raid fa più danni nei momenti tranquilli (21/0/30). [Aprila nel calcolatore di talenti](/it/talents/druid/?t=5530203110001--055300510311105).

Per i dungeon, una build con Feral Combat ti fa passare a felino o orso quando le cure sono tranquille, o se cade il tank (0/32/19). [Aprila nel calcolatore di talenti](/it/talents/druid/?t=-55000032023012125001-05530011031).

Gli 11 punti in Balance arrivano a Nature's Splendor, con Genesis per i tuoi HoT e Nature's Majesty per il critico. In Restoration i punti vanno a cure e mana invece che a Cat Form. Metti più punti in Tranquil Spirit quando Healing Touch e Tranquility si mangiano gran parte del tuo mana; Improved Tranquility è un'alternativa per un cooldown più corto e meno minaccia. Sposta i punti invece di aggiungerli, e tieni Wild Growth e Living Spirit, il talento prima.

### Build per livellare, 9/32/10

La build per livellare prende prima i talenti che aiutano a uccidere da soli. [Aprila nel calcolatore di talenti](/it/talents/druid/?t=050022-55200002123012125001-055). La [build di leveling del Druid](/it/leveling/druid/) dà il talento per ogni livello. Curi soprattutto dungeon mentre livelli? Allora funziona una rotta da guaritore: 0/0/21 al livello 30, con Heart of the Wild, Naturalist, Bloom al 20, Gift of Nature, Swiftmend al 25, Reflection e Nature's Swiftness al 30. Fare missioni da solo è più veloce da Feral.

### Build PvP, 16/11/24

La build PvP scambia danni con controllo e sopravvivenza. [Apri la build PvP nel calcolatore di talenti](/it/talents/druid/?t=500222311-052021001-555330010011).

## Curare al livello 60

**Gradi degli incantesimi.** Al livello 60 usi Healing Touch grado 10, Rejuvenation grado 10, Regrowth grado 9 e Wild Growth grado 3. Tieni Healing Touch grado 8 per una cura più piccola e Rejuvenation grado 9 per danni leggeri. Rejuvenation grado 1 costa poco sui danni leggeri e attiva comunque Bloom quando finisce, ma usa un grado più alto se il bersaglio ne ha bisogno.

**Wild Growth** si lancia in 3 secondi, 2,5 secondi con Naturalist 5/5, e cura il gruppo del bersaglio per 7 secondi, con i tick più forti all'inizio. Inizia il lancio perché arrivi con i danni, e scegli il gruppo che ne ha bisogno: non cerca da solo i giocatori più feriti del raid. Con Nature's Swiftness è istantaneo.

**Statistiche.** Prima abbastanza Intelletto e Tempra, poi potere curativo. Se resti senza mana, Spirito o mana ogni 5 secondi vale più di un po' di cura in più; con Reflection e Living Spirit lo Spirito alimenta anche Bloom. Il critico viene dopo: gli HoT possono fare critico in Forever, ma un critico è un bonus, non un piano. La [lista BiS pre-raid](/it/bis/forever/preraid/druid-restoration/) mostra gli oggetti a cui puntare.

**Idoli.** Mystic Mushroom, una creazione di Enchanting vincolata alla raccolta con abilità 130, dà il 5% di Spirito, buono per il mana e Bloom. Idol of Synthesis di Pix Xizzix riduce il cooldown di Swiftmend per ogni tuo HoT sul bersaglio, utile su un tank che tieni coperto. Quando apriranno i raid, Idol of Swiftness toglierà 3 secondi al cooldown di Swiftmend; serve la Malleable Essence of Nature dei raid.

## Incantamenti e consumabili

Il miglior incantamento per slot. Mettili sull’equipaggiamento che terrai per un po’; mentre livelli, le versioni più economiche dello stesso incantamento bastano.

| Slot | Scelta migliore |
|---|---|
| **Arma a due mani** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248757"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Insight</a> |
| **Arma a una mano** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248757"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Insight</a> |
| **Mano secondaria** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1219578"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Off-Hand - Excellent Spirit</a> |
| **Testa** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=15406"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Lesser Arcane Amalgamation</a> |
| **Collo** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1249058"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Necklace - Healing Power</a> |
| **Mantello** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20014"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Cloak - Greater Resistance</a> |
| **Torso** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20025"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Chest - Greater Stats</a> |
| **Mani** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Gambe** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=15406"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Lesser Arcane Amalgamation</a> |
| **Piedi** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1328948"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Boots - Speed</a> |

<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248757"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Insight</a> è l’incantamento più forte per Restoration. L’effetto scatta spesso e aggiunge in media circa il 20% alla tua Spirit, e cura più perfino di <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248636"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant 2H Weapon - Mighty Healing Power</a> su un’arma a due mani.

| Tipo | Scelta migliore |
|---|---|
| **Pozione** | <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=287968"><img class="wf-wh__icon" src="/wh/inv_potion_70.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Minor Mana Potion</a> fino a <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=13444"><img class="wf-wh__icon" src="/wh/inv_potion_76.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Major Mana Potion</a> |
| **Elisir** | <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=250331"><img class="wf-wh__icon" src="/wh/inv_potion_128.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Lesser Cleric's Elixir</a> fino a <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=250333"><img class="wf-wh__icon" src="/wh/inv_potion_150.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Greater Cleric's Elixir</a> |
| **Buff dell’arma** | <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=20745"><img class="wf-wh__icon" src="/wh/inv_potion_98.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Minor Mana Oil</a> fino a <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=20748"><img class="wf-wh__icon" src="/wh/inv_potion_100.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Brilliant Mana Oil</a>, <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=20744"><img class="wf-wh__icon" src="/wh/inv_poison_mindnumbing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Minor Wizard Oil</a> fino a <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=20749"><img class="wf-wh__icon" src="/wh/inv_potion_105.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Brilliant Wizard Oil</a> |
| **Cibo** | <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=249865"><img class="wf-wh__icon" src="/wh/inv_drink_15.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Peace Tea</a> fino a <a class="wf-wh wf-q1" href="https://www.wowhead.com/forever/item=249870"><img class="wf-wh__icon" src="/wh/inv_drink_15.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Sage's Tea</a> |

## Dual Specialization e altre build

Con la Dual Specialization e Wild Growth come talento finale forte, le vecchie build ibride di Restoration saranno giocate poco. C'è un'eccezione probabile: una build che rinuncia ad alcuni punti forti in Feral Combat per arrivare a Insect Swarm in Balance, a 16 punti. Insect Swarm dovrebbe restare un debuff forte sui boss.

La modifica a <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> cambia molto il valore di quel talento, sia per Restoration sia per Balance. La maggior parte dei punti in Restoration è fissa: toglierli costa più di quanto quei punti rendano altrove. Altre build possono comunque funzionare in tutti i contenuti, e una build adatta a un'esigenza precisa è una scelta valida.

## Macro

Alcune condizioni delle macro non funzionavano come previsto sulla beta. Il client moderno fa anche molto senza macro né addon: il lancio al passaggio del mouse, il lancio con clic e lo spostamento degli elementi dell'interfaccia sono nelle impostazioni di gioco.

**Mouseover.** Lancia l'incantesimo sull'unità alleata viva sotto il mouse, altrimenti sul bersaglio alleato, altrimenti su di te. Togli `nodead` se la usi per <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> o Revive.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Cura d'emergenza.** Interrompe ciò che stai facendo e lancia un Healing Touch istantaneo con <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. Per un bug sulla beta, poteva servire premere più di una volta. Dal 10 novembre Nature's Swiftness rende istantaneo anche Wild Growth, [di più nel nostro articolo](/it/news/racial-vendor-mounts-become-bind-on-pickup/).

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**Un pulsante per l'utilità.** Rebirth su un alleato morto in combattimento, Revive su un alleato morto fuori combattimento e <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> su un alleato vivo.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Incantesimi a terra.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> sul cursore, o un oggetto come l'Advanced Target Dummy ai tuoi piedi.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Forme.** Una macro può agire solo in una certa forma, con `[form:N]`:

| Condizione | Forma |
|---|---|
| **form:0** | Forma normale |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Riquadri delle unità e Cooldown Manager

I riquadri delle unità di base si personalizzano meno di quanto siano abituati i giocatori delle versioni precedenti del gioco. Alcuni addon aggiungono filtri per buff e debuff, molto utili per una classe che cura con gli HoT. EllesmereUI è l'addon per i riquadri delle unità più accessibile e personalizzabile. Per i riquadri di gruppo e raid, Grid2 va bene: mostra prima vita, portata e i malus che puoi togliere, poi i tuoi HoT.

Il Cooldown Manager integrato sostituisce un gruppo centrale di WeakAuras, e gli addon possono cambiarne l'aspetto. Sulla beta è stato distribuito poco alla volta. Altro nell'[articolo sul Cooldown Manager](/it/news/cooldown-manager-arrives-in-forever-from-midnight/).
