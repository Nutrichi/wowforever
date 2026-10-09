---
title: "Restoration Druid : le guide de soin pour WoW Forever"
metaTitle: "Restoration Druid dans WoW Forever : build, talents, macros et FAQ"
description: "Le Restoration Druid dans WoW Forever : ce qui change pour le soigneur, forces et faiblesses, le build standard 11/7/33, la Dual Specialization, des macros utiles, les cadres d'unité et les questions les plus fréquentes."
short: "Restoration Druid"
updated: 2026-10-09
lang: fr
manual: true
faq:
  - q: "Quel est le meilleur build de talents pour un Restoration Druid dans WoW Forever ?"
    a: "La plupart des Restoration Druids jouent 11 points en Balance, 7 en Feral Combat et 33 en Restoration, avec Gift of the Earthmother, Improved Regrowth et Wild Growth. Les points en Balance servent surtout à Nature's Splendor."
  - q: "Swiftmend consomme-t-il encore le HoT ?"
    a: "Non. Dans WoW Forever, Swiftmend ne consomme plus le Rejuvenation ou le Regrowth qu'il utilise. Il fonctionne aussi sur le HoT d'un autre Druid : avec plusieurs HoTs sur la cible, il utilise toujours celui qui a la plus grande puissance de soin, peu importe qui l'a lancé."
  - q: "Healing Touch vaut-il encore la peine ?"
    a: "Oui, mais moins que dans Classic. La pénalité sur les rangs inférieurs et un Regrowth plus fort le rendent moins central, et Tranquil Spirit n'est plus un talent fort."
  - q: "Quelle race est la meilleure pour un Restoration Druid ?"
    a: "On ne le sait pas encore. Chaque race de Druid a quelque chose à offrir à un soigneur."
  - q: "Quels métiers conviennent à un Restoration Druid ?"
    a: "Pendant la montée en niveau, Skinning avec Leatherworking, ou deux métiers de récolte. Au niveau 60, Engineering semble fort pour le raid, et Enchanting donne accès à des reliques liées quand ramassées."
  - q: "Un Restoration Druid peut-il dissiper la Magie ou les Maladies ?"
    a: "Non. Le Druid n'a pas de dissipation de Magie ni de Maladie, une des faiblesses de la spécialisation."
  - q: "Quelle priorité de stats et quelle liste BiS ?"
    a: "Ces informations arriveront après le lancement du 4 novembre."
  - q: "Un Restoration Druid a-t-il sa place en raid ?"
    a: "Tous les raids veulent des soigneurs, et le Restoration Druid a un kit fort et varié. La spécialisation apporte moins à un raid que les deux autres spécialisations de Druid, mais reste un choix fort contre de nombreux types de dégâts."
  - q: "Un Restoration Druid doit-il faire des dégâts ?"
    a: "Dans les moments calmes, oui. Le Wrath plus fort, l'Omen of Clarity gratuit et Judgement of Wisdom rendent les sorts de dégâts bon marché intéressants à glisser entre les soins."
---
Le Restoration Druid de WoW Forever reste un soigneur qui anticipe les dégâts, avec des HoTs sur de nombreux joueurs à la fois. De nouveaux outils lui permettent aussi de réagir : Wild Growth, un Swiftmend qui laisse le HoT en place et un Omen of Clarity gratuit. Ce guide couvre les changements, le build standard, les macros et les questions les plus fréquentes.

| | |
|---|---|
| Rôle | Soigneur, surtout fort en soin de raid |
| Build standard | 11 Balance, 7 Feral Combat, 33 Restoration |
| Talents clés | Gift of the Earthmother, Improved Regrowth, Wild Growth |
| Points forts | Soin de raid, mobilité, utilitaires |
| Points faibles | Pas de dissipation de Magie ni de Maladie, pas de boucliers |
| Stats et BiS | Inconnus avant le lancement |

## Ce qui change pour le soigneur

- **Omen of Clarity est de base** et peut désormais se déclencher sur les sorts, environ deux fois par minute. Le proc rend le sort suivant gratuit : il rapporte le plus sur un soin coûteux.
- **Wild Growth** est le nouveau talent final de l'arbre : un soin puissant sur tout le groupe de la cible.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> ne consomme plus** le HoT qu'il utilise.
- **Les HoTs peuvent faire des critiques.** Le bonus de critique d'Improved Regrowth s'applique probablement aussi à la partie HoT de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Cela vient des données du jeu et ne peut pas encore être testé sur la bêta.
- **Les HoTs de plusieurs Druids se cumulent** sur une même cible. Un bug l'empêche encore dans certains cas.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** ne cumule plus sa réduction d'armure avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> des Warlocks.
- **Les coûts en mana** ont changé, et Regrowth soigne bien plus qu'avant.
- **Feral Swiftness et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** fonctionnent désormais en intérieur.
- **Les changements de forme** gênent moins. Plusieurs objets, techniques et actions fonctionnent maintenant en forme, et beaucoup d'actions qui échouaient en forme vous en font sortir automatiquement.

## Forces et faiblesses

| Forces | Faiblesses |
|---|---|
| Soin de raid très fort | En concurrence avec les autres spécialisations de Druid pour une place en raid |
| Soin explosif fort sur une cible | Pas de réduction de dégâts externe ni de boucliers |
| Un large éventail d'utilitaires | Le mana demande une gestion active |
| Beaucoup de soin total | Le soin de raid met du temps à monter en puissance |
| La meilleure mobilité de tous les soigneurs | Pas de dissipation de Magie ni de Maladie |
| Des affaiblissements de raid | |

## Le build standard

La plupart des Restoration Druids joueront un build très proche de celui-ci dans presque toutes les situations, selon un sondage auprès des joueurs de la spécialisation. Ouvrez-le dans le [calculateur de talents](/fr/talents/druid/?t=05102201-052-5050035103113051) : 11 points en Balance, 7 en Feral Combat et 33 en Restoration, soit 51 points pour le niveau 60.

![Les arbres de talents du Druid avec 11 points en Balance, 7 en Feral Combat et 33 en Restoration, le build standard d'un Restoration Druid, dans le calculateur de talents de wowforever.be](../../../../assets/posts/2026-10-09-wow-forever-restoration-druid-build.jpg)

| Arbre | Talents |
|---|---|
| **Restoration (33)** | Nature's Focus 5, Naturalist 5, Reflection 3, Gift of Nature 5, Gift of the Earthmother 1, Improved Rejuvenation 3, Swiftmend 1, Nature's Swiftness 1, Living Spirit 3, Improved Regrowth 5, Wild Growth 1 |
| **Balance (11)** | Genesis 5, Moonglow 1, Nature's Majesty 2, Nature's Reach 2, Nature's Splendor 1 |
| **Feral Combat (7)** | Heart of the Wild 5, Feral Swiftness 2 |

**Gift of the Earthmother** est le premier talent palier de Restoration, à 11 points. Il réduit le temps de recharge global de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=774"><img class="wf-wh__icon" src="/wh/spell_nature_rejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rejuvenation</a>, Wild Growth et Swiftmend de 0,5 seconde. Un Druid peut ainsi couvrir tout un raid de HoTs, le style de soin où la spécialisation a toujours excellé.

**Improved Regrowth** est désormais l'un des talents les plus rentables par point.

**<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=24968"><img class="wf-wh__icon" src="/wh/spell_holy_elunesgrace.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Tranquil Spirit</a>** a perdu de la valeur en même temps que <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=5185"><img class="wf-wh__icon" src="/wh/spell_nature_healingtouch.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Healing Touch</a> : le Regrowth plus fort et la pénalité sur les rangs inférieurs rendent Healing Touch moins attrayant. **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17123"><img class="wf-wh__icon" src="/wh/spell_nature_tranquility.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Improved Tranquility</a>** est un petit bonus pour un bouton déjà faible, et sera peu utilisé.

**Balance** se remplit librement. L'essentiel est Nature's Splendor au onzième point, qui prolonge Moonfire, Rejuvenation et Regrowth. Certains joueurs prennent les améliorations de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=5176"><img class="wf-wh__icon" src="/wh/spell_nature_abolishmagic.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Wrath</a> avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16845"><img class="wf-wh__icon" src="/wh/spell_nature_sentinal.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Moonglow</a>, pour plus de dégâts et plus de chances d'obtenir Omen of Clarity.

## Dual Specialization et autres builds

Avec la Dual Specialization et Wild Growth comme talent final puissant, les anciens builds hybrides de Restoration seront peu joués. Une exception est probable : un build qui sacrifie quelques bons points en Feral Combat pour atteindre Insect Swarm en Balance, à 16 points. Insect Swarm devrait rester un affaiblissement fort sur les boss.

Le changement de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> modifie fortement la valeur de ce talent, pour Restoration comme pour Balance. La plupart des points en Restoration sont incontournables : les retirer coûte plus que ce que ces points rapportent ailleurs. D'autres builds peuvent tout de même fonctionner dans tout le contenu, et un build adapté à un besoin précis reste un choix valable.

## Macros

Certaines conditions de macro ne fonctionnent pas encore comme prévu sur la bêta. Le client moderne fait aussi beaucoup sans macros ni addons : le lancement au survol, le lancement au clic et le déplacement des éléments d'interface se trouvent dans les options du jeu.

**Survol.** Lance le sort sur l'unité alliée vivante sous la souris, sinon sur la cible alliée, sinon sur vous. Retirez `nodead` pour l'utiliser avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> ou Revive.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Soin d'urgence.** Interrompt ce que vous faites et lance un Healing Touch instantané avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. À cause d'un bug sur la bêta, il faut parfois appuyer plusieurs fois pour l'instant.

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**Un bouton pour les utilitaires.** Rebirth sur un allié mort en combat, Revive sur un allié mort hors combat, et <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> sur un allié vivant.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Sorts au sol.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> sur le curseur, ou un objet comme l'Advanced Target Dummy à vos pieds.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Formes.** Une macro peut n'agir que dans une forme donnée, avec `[form:N]` :

| Condition | Forme |
|---|---|
| **form:0** | Forme humanoïde |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Cadres d'unité et Cooldown Manager

Les cadres d'unité de base se personnalisent moins que ce dont les joueurs des anciennes versions du jeu ont l'habitude. Certains addons ajoutent des filtres pour les buffs et débuffs, très utiles pour une classe qui soigne avec des HoTs. EllesmereUI est l'addon de cadres d'unité le plus accessible et le plus personnalisable.

Le Cooldown Manager intégré remplace un groupe central de WeakAuras, et des addons peuvent en changer l'apparence. Sur la bêta, il est encore déployé petit à petit. Plus de détails dans l'[article sur le Cooldown Manager](/fr/news/cooldown-manager-arrives-in-forever-from-midnight/).
