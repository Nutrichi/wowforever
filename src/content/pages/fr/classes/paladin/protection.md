---
title: "Guide du Protection Paladin pour WoW Forever"
metaTitle: "WoW Forever Protection Paladin : builds, rotation et stats"
description: "Le Protection Paladin dans WoW Forever : le nouveau Seal of Fury et Templar's Bulwark, six builds pour le niveau 60, la rotation, les cooldowns, les sceaux, les stats et les races."
short: "Protection Paladin"
updated: 2026-11-22
lang: fr
manual: true
faq:
  - q: "Le Protection Paladin est-il bon dans WoW Forever ?"
    a: "Oui. Seal of Fury donne enfin une provocation au Paladin, Shieldsworn et Iron Creed réduisent les dégâts, et aucun tank ne gère mieux les dégâts magiques. Ses points faibles sont la menace au début d’un pull et le mana dans les longs combats."
  - q: "Quel est le meilleur build de talents pour un Protection Paladin ?"
    a: "Le build standard, 0/35/16 : loin en Protection pour Holy Shield, Reckoning, Iron Creed et Shieldsworn, et Retribution pour Pursuit of Justice. Pour les donjons, 0/32/19 échange Anticipation contre Guardian's Favor et Vindication."
  - q: "Le Protection Paladin a-t-il maintenant une provocation ?"
    a: "Oui. Judgement avec Seal of Fury actif inflige des dégâts du Sacré et provoque la cible pendant 4 secondes. Swift Judgement vous donne un deuxième Judgement qui ne partage pas son temps de recharge."
  - q: "De quelles stats a besoin un Protection Paladin ?"
    a: "D’abord l’Endurance, puis la puissance des sorts pour la menace, le toucher en mêlée jusqu’à 8 %, la Défense jusqu’à 440 et l’Armure. La puissance des sorts est votre principale stat de menace, car Righteous Fury ne renforce que les dégâts du Sacré."
  - q: "Quelle race choisir pour un Protection Paladin ?"
    a: "Dwarf côté Alliance, pour 1 % de toucher et Stoneform ; Human vaut à peu près autant. Les Paladins de la Horde sont toujours Undead, avec Touch of the Grave et Will of the Forsaken."
sources:
  - name: "Wowhead, Protection Paladin guides"
    url: "https://www.wowhead.com/forever/guide/classes/paladin/protection/overview-pve-tank"
  - name: "Wowhead, talent builds"
    url: "https://www.wowhead.com/forever/guide/classes/paladin/protection/talent-builds-pve-tank"
---
Le Protection Paladin de WoW Forever est le tank avec un bouclier, une barre de mana et des dégâts du Sacré. Pendant des années, il manquait une chose à la spécialisation pour être bienvenue en raid : une provocation. Forever règle cela avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20423"><img class="wf-wh__icon" src="/wh/spell_holy_retributionaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Fury</a>, et les arbres de talents ajoutent de la réduction de dégâts et de l’aide pour le mana. Ce guide couvre les changements, six builds pour le niveau 60, la rotation, les cooldowns, les sceaux, les stats et les races.

| | |
|---|---|
| Rôle | Tank, le plus fort contre les dégâts magiques |
| Build standard | 0/35/16 |
| Talents clés | Holy Shield, Reckoning, Iron Creed, Shieldsworn, Templar's Bulwark, Pursuit of Justice |
| Points forts | Dégâts magiques, jusqu’à quatre cibles, améliorations pour le groupe |
| Points faibles | Menace au début, mana dans les longs combats, coups écrasants |
| Équipement | [Liste BiS pré-raid](/fr/bis/forever/preraid/paladin-protection/) |
| Leveling | [Guide de leveling du Paladin](/fr/classes/paladin/leveling/), [build de leveling du Paladin](/fr/leveling/paladin/) |

## Ce qui change pour le tank

- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20423"><img class="wf-wh__icon" src="/wh/spell_holy_retributionaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Fury</a>** est nouveau. Vos attaques en mêlée infligent des dégâts du Sacré en plus, et avec un bouclier chaque coup vous donne un bouclier d’absorption égal à la moitié de ces dégâts. Judgement avec ce sceau actif inflige des dégâts du Sacré et **provoque** la cible pendant 4 secondes.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311015"><img class="wf-wh__icon" src="/wh/ability_paladin_shieldofthetemplar.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Templar's Bulwark</a>** est votre seul cooldown défensif : un bouclier d’absorption égal à 100 % de votre vie maximale pendant 8 secondes. Il applique Forbearance, donc pas de Divine Shield juste après.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1310994"><img class="wf-wh__icon" src="/wh/ability_paladin_judgementred.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swift Judgement</a>** est un deuxième Judgement avec un temps de recharge de 1 minute, qu’il ne partage pas avec Judgement. Utilisez-le pour plus de menace à l’ouverture, pour garder la menace dans une bulle, ou comme provocation de secours.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17143"><img class="wf-wh__icon" src="/wh/ability_thunderbolt.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Strike</a>** est une frappe instantanée qui fait désormais partie de chaque rotation. Avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1328544"><img class="wf-wh__icon" src="/wh/spell_holy_greaterblessingofsanctuary.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Shieldsworn</a>, son temps de recharge est réduit de 4 secondes, elle frappe avec votre bouclier, déclenche Holy Shield et Shield Specialization sans consommer leurs charges et vous permet de bloquer les sorts pendant 6 secondes. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311034"><img class="wf-wh__icon" src="/wh/spell_holy_improvedresistanceauras.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Iron Creed</a> ajoute 30 % de menace et 6 % de dégâts subis en moins pendant 6 secondes tant que Righteous Fury est actif, vous pouvez donc le garder en permanence.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20923"><img class="wf-wh__icon" src="/wh/spell_holy_innerfire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Consecration</a>** est plus faible sur les gros groupes : peu de dégâts à tout le monde, des dégâts en plus aux 4 premiers ennemis qui y entrent. Vos dégâts de zone marchent maintenant comme ceux d’un guerrier ou d’un druide.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20468"><img class="wf-wh__icon" src="/wh/spell_holy_sealoffury.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Improved Righteous Fury</a>** réduit maintenant tous les dégâts subis de 9 % tant que Righteous Fury est actif, au lieu d’augmenter la menace. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20096"><img class="wf-wh__icon" src="/wh/spell_magic_lesserinvisibilty.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Anticipation</a> donne 20 de Défense au lieu de 10, <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20148"><img class="wf-wh__icon" src="/wh/inv_shield_06.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Shield Specialization</a> rend du mana sur les blocages, et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20177"><img class="wf-wh__icon" src="/wh/spell_holy_blessingofstrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Reckoning</a> peut aussi se déclencher sur un blocage.

## Points forts et points faibles

| Points forts | Points faibles |
|---|---|
| Le meilleur tank contre les dégâts magiques | Faible menace au début, sauf en allant dans l’arbre Holy |
| Tanke jusqu’à quatre cibles avec Consecration et Retribution Aura | Le mana peut manquer, même quand vous n’êtes pas frappé |
| Bénédictions, Cleanse et Blessing of Protection pour le groupe | Peu d’outils pour sortir les critiques et les coups écrasants de la table |
| Divine Shield plus une provocation : tanker un boss en étant immunisé | Aucun cooldown qui réduit les dégâts d’un pourcentage |

## Les builds pour le niveau 60

Six builds, chacun avec les 51 points de talent du niveau 60. Menace et survie forment une échelle : la plupart des builds sont au milieu, quelques-uns penchent d’un côté. Chaque build s’ouvre dans notre calculateur de talents.

### Build standard, 0/35/16

Votre build par défaut en raid. Il prend tous les talents défensifs forts de Protection, Holy Shield, Reckoning, Iron Creed et Shieldsworn, plus <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311087"><img class="wf-wh__icon" src="/wh/inv_sword_08.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Sacred Arbiter</a> et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=26022"><img class="wf-wh__icon" src="/wh/spell_holy_persuitofjustice.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Pursuit of Justice</a> en Retribution. Pursuit of Justice libère vos bottes pour n’importe quel enchantement et donne quand même plus de vitesse que Minor Speed. [Ouvrir le build standard dans le calculateur de talents](/fr/talents/paladin/?t=-05302102313501531-50233000201).

Il laisse de côté deux points de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20143"><img class="wf-wh__icon" src="/wh/spell_holy_devotion.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Toughness</a> : avant le cap de Défense, Toughness et Anticipation réduisent les dégâts à peu près autant, et Anticipation les lisse davantage. Sacred Arbiter garde vos affaiblissements de Judgement actifs ; vous n’en avez besoin que si votre raid a un Holy Paladin et aucun Retribution Paladin.

### Build de donjon, 0/32/19

Presque le même, mais sans Anticipation : la Défense compte moins contre les monstres de donjon. Les points vont dans <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20174"><img class="wf-wh__icon" src="/wh/spell_holy_sealofprotection.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Guardian's Favor</a> et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=9452"><img class="wf-wh__icon" src="/wh/spell_holy_vindication.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Vindication</a>. Le gain sur le build standard est faible, donc ne payez pas de respé si vous l’avez déjà. [Ouvrir le build de donjon](/fr/talents/paladin/?t=-05322102313001531-50233300201).

### Build Shockprot, 23/28/0

Plus de menace sur une cible. Vous allez dans Holy pour <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311606"><img class="wf-wh__icon" src="/wh/spell_holy_searinglight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Shock</a>, <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1310905"><img class="wf-wh__icon" src="/wh/spell_holy_innerfire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Consecrated Ground</a> (10 % de dégâts du Sacré en plus), <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1310904"><img class="wf-wh__icon" src="/wh/spell_holy_mindsooth.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Divine Precision</a> et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1237268"><img class="wf-wh__icon" src="/wh/spell_holy_devineaegis.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Conduit</a>, le talent le plus économe en mana du jeu. Vous perdez un peu de défense, gardez-le donc pour les combats qui demandent de la menace. [Ouvrir le build Shockprot](/fr/talents/paladin/?t=05025211220021-0530210221310152).

### Build Retprot, 0/21/30

Un peu plus défensif que Shockprot, avec 5 points dans <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20060"><img class="wf-wh__icon" src="/wh/ability_parry.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Deflection</a> et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=9452"><img class="wf-wh__icon" src="/wh/spell_holy_vindication.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Vindication</a>, et fort sur plusieurs cibles grâce à <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311084"><img class="wf-wh__icon" src="/wh/ability_paladin_enlightenedjudgements.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Champion of the Light</a> et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20049"><img class="wf-wh__icon" src="/wh/ability_racial_avatar.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Vengeance</a>. Il profite bien de l’Intelligence. [Ouvrir le build Retprot](/fr/talents/paladin/?t=-05302102213101-5223330120100035).

### Build offensif de tank secondaire, 23/0/28

Aucun talent de Protection : Holy pour Holy Shock, Retribution pour Vengeance et Champion of the Light. Seul Deflection est défensif. Utilisez-le comme deuxième tank qui fait surtout des dégâts, ou dans les combats où les dégâts ne se bloquent pas de toute façon. Vous pouvez même passer à une arme à deux mains quand le combat n’a plus besoin d’un deuxième tank. [Ouvrir le build de tank secondaire](/fr/talents/paladin/?t=05025211220021--5523300120100033).

### Build PvP, 23/28/0

Un Shockadin qui soigne aussi. Étourdissez avec Hammer of Justice, puis Consecration, Divine Favor, Holy Shock plus Judgement, et Holy Strike plus Swift Judgement plus Judgement. Avec Templar's Bulwark, Sacred Duty et Guardian's Favor, vous pouvez lancer un sort à Forbearance sur vous-même chaque minute. [Ouvrir le build PvP](/fr/talents/paladin/?t=50325210020021-503221300130215).

## Rotation

Protection est un tank lent et posé. Environ 30 % de vos dégâts sur une cible viennent de la mêlée avec Seal of Fury ; le reste vient de Consecration, Holy Shield et Holy Strike, chacun dès qu’il est prêt si votre mana le permet. Avant le pull, activez Righteous Fury et Retribution Aura. Ouvrez avec l’affaiblissement de sceau qui vous est attribué, comme Judgement of Wisdom, sauf si la cible meurt en 20 à 30 secondes.

**Une cible**
1. Gardez <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20163"><img class="wf-wh__icon" src="/wh/spell_holy_retributionaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Fury</a> actif pendant que vous tankez.
2. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20271"><img class="wf-wh__icon" src="/wh/spell_holy_righteousfury.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Judgement</a> dès qu’il est prêt : il est hors du temps de recharge global.
3. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=26573"><img class="wf-wh__icon" src="/wh/spell_holy_innerfire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Consecration</a>, si votre mana le permet.
4. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20930"><img class="wf-wh__icon" src="/wh/spell_holy_searinglight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Shock</a>, si vous l’avez.
5. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20928"><img class="wf-wh__icon" src="/wh/spell_holy_blessingofprotection.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Shield</a>.
6. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=10333"><img class="wf-wh__icon" src="/wh/classicon_paladin.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Strike</a>. Essayez de placer deux Holy Strikes dans une fenêtre de Holy Shield.
7. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=879"><img class="wf-wh__icon" src="/wh/spell_holy_excorcism_02.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Exorcism</a> sur les morts-vivants ou les démons.
8. <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=24239"><img class="wf-wh__icon" src="/wh/ability_thunderclap.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hammer of Wrath</a> quand vous tankez une seule cible ou aucune.

**Plusieurs cibles.** Pareil, mais sur les morts-vivants ou les démons <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=10318"><img class="wf-wh__icon" src="/wh/spell_holy_excorcism.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Holy Wrath</a> vient juste après Consecration, et Holy Shield passe avant Holy Shock.

**Ouverture.** Votre sceau et Holy Shield avant le pull, Judgement, Seal of Fury, Judgement plus Swift Judgement, Holy Strike, Exorcism sur les morts-vivants ou les démons, puis Consecration. Avec le build Shockprot, ajoutez Divine Favor avant le pull et Consecration plus Holy Shock avant Holy Strike.

## Sceaux et Judgements

Vous gérez les sceaux et leurs Judgements pour tout le groupe. Changez de sceau selon le combat, et voyez avec les autres Paladins qui garde quel affaiblissement.

| Sceau | À chaque coup | Judgement |
|---|---|---|
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20423"><img class="wf-wh__icon" src="/wh/spell_holy_retributionaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Fury</a> | Dégâts du Sacré et un bouclier d’absorption | Dégâts et une provocation de 4 secondes |
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20357"><img class="wf-wh__icon" src="/wh/spell_holy_righteousnessaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Wisdom</a> | Mana | Tous ceux qui frappent la cible gagnent du mana |
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20349"><img class="wf-wh__icon" src="/wh/spell_holy_healingaura.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Light</a> | Vie | Tous ceux qui frappent la cible gagnent de la vie |
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20308"><img class="wf-wh__icon" src="/wh/spell_holy_holysmite.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of the Crusader</a> | Attaques plus rapides, plus de puissance d’attaque, coups plus faibles | La cible subit plus de dégâts du Sacré |
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20164"><img class="wf-wh__icon" src="/wh/spell_holy_sealofwrath.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Justice</a> | Une chance d’étourdir | La cible ne peut pas fuir |
| <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20293"><img class="wf-wh__icon" src="/wh/ability_thunderbolt.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Seal of Righteousness</a> | Dégâts du Sacré | Dégâts |

## Cooldowns et utilité

- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1311015"><img class="wf-wh__icon" src="/wh/ability_paladin_shieldofthetemplar.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Templar's Bulwark</a>** : votre réponse à Shield Wall. Un bouclier d’absorption de toute votre vie pendant 8 secondes, 5 minutes de recharge, 4 minutes avec Sacred Duty.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=10310"><img class="wf-wh__icon" src="/wh/spell_holy_layonhands.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Lay on Hands</a>** : soigne vous ou un allié de toute votre vie et consomme tout votre mana. Dans Forever, le temps de recharge passe à 20 minutes au lieu d’une heure.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1020"><img class="wf-wh__icon" src="/wh/spell_holy_divineintervention.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Divine Shield</a>** : 12 secondes d’immunité, avec 50 % de dégâts infligés en moins. Les monstres vous ignorent, mais vous gardez votre menace. Judgement avec Seal of Fury provoque 4 secondes, plus Swift Judgement pour 4 de plus : vous pouvez donc tanker un boss en étant immunisé. La bulle retire aussi les affaiblissements ; gardez une macro /cancelaura prête.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=10278"><img class="wf-wh__icon" src="/wh/spell_holy_sealofprotection.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Blessing of Protection</a>** : 10 secondes d’immunité aux dégâts physiques sur un allié, qui ne peut pas attaquer en mêlée pendant ce temps. Parfait pour un mage ou un démoniste qui a pris l’aggro avec ses dégâts de zone.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=4987"><img class="wf-wh__icon" src="/wh/spell_holy_renew.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Cleanse</a>** : une dissipation puissante. Avec une macro de survol, vous l’utilisez facilement en tankant.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1044"><img class="wf-wh__icon" src="/wh/spell_holy_sealofvalor.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Blessing of Freedom</a>** et Blessing of Protection servent dans certains moments ; remettez ensuite votre bénédiction habituelle. Les bénédictions durent maintenant une heure.

## Stats et équipement

Menace et survie forment une échelle, commencez donc équilibré. L’ordre équilibré :

1. Endurance
2. Puissance des sorts, votre principale stat de menace : Righteous Fury ne renforce que les dégâts du Sacré
3. Toucher en mêlée jusqu’à 8 %
4. Défense jusqu’à 440, le point où un boss ne peut plus vous infliger de critique
5. Armure
6. Expertise jusqu’à 6,5 %, le cap doux
7. Agilité et chances de blocage
8. Défense au-delà de 440, parade et esquive
9. Critique, toucher des sorts jusqu’à 17 %, expertise jusqu’à 14 %
10. Hâte, Force et Intelligence

Pour un tank plus défensif, placez la Défense et l’Armure avant la puissance des sorts et le toucher. Pour plus de menace, placez la puissance des sorts, le toucher, l’expertise et le critique avant l’Endurance. En gros, 1 % de toucher avant le cap en mêlée vaut environ 21 de puissance des sorts, 1 % d’expertise avant le cap doux environ 15 et 1 % de critique environ 12.

**Precision** donne 3 % de toucher en mêlée et pour les sorts. Dans le build Shockprot, ne prenez que 2 points sur 3 dans Divine Precision, sinon vous dépassez.

**Les chances de blocage** comptent plus qu’il n’y paraît : Holy Shield et Shield Specialization se déclenchent sur un blocage, et un coup bloqué ne peut être ni critique ni écrasant. Choisissez l’équipement sur l’objet entier, pas sur l’allure qu’un objet de tank est censé avoir : la [liste BiS pré-raid](/fr/bis/forever/preraid/paladin-protection/) donne les pièces.

**Enchantements et consommables.** Endurance sur le torse, le bouclier et les bottes, puissance des sorts avec les kits d’armure (Mystic Rugged Armor Kit au niveau 50) et Enchant Necklace - Spell Power. Wizard Oil, Arcane Elixirs et la nourriture à puissance des sorts donnent de la menace ; la nourriture donne aussi 5 % d’expérience en plus sur les monstres tués pendant le leveling. Les pointes de bouclier de la forge infligent des dégâts à chaque blocage.

## Races et métiers

| Faction | Race | Pourquoi |
|---|---|---|
| Alliance | Dwarf | 1 % de toucher, Stoneform retire saignements et poisons, plus de dégâts contre les bêtes |
| Alliance | Human | 1 % de critique et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1259718"><img class="wf-wh__icon" src="/wh/spell_shadow_charm.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Will to Survive</a> |
| Horde | Undead | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1260189"><img class="wf-wh__icon" src="/wh/spell_shadow_fingerofdeath.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Touch of the Grave</a> draine jusqu’à 5 % de vie, <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=7744"><img class="wf-wh__icon" src="/wh/spell_shadow_raisedead.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Will of the Forsaken</a>, et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20577"><img class="wf-wh__icon" src="/wh/ability_racial_cannibalize.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Cannibalize</a> rend maintenant aussi du mana |

Undead est le seul Paladin de la Horde. Côté Alliance, la différence est faible.

**Métiers.** Blacksmithing fabrique pendant le leveling de la plaque et des mailles avec de la puissance des sorts, ainsi que des pointes de bouclier. Engineering apporte le plus au niveau 60. Mining garde Blacksmithing et Engineering bon marché, et dans Forever vous pouvez fondre de 1 à 300. Enchanting a le <a class="wf-wh wf-q3" href="https://www.wowhead.com/forever/item=249442"><img class="wf-wh__icon" src="/wh/inv_relics_libramofhope.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Libram of Invocation</a>.
