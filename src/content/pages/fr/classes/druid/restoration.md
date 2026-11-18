---
title: "Restoration Druid : le guide de soin pour WoW Forever"
metaTitle: "Restoration Druid dans WoW Forever : build, talents, macros et FAQ"
description: "Le Restoration Druid dans WoW Forever : ce qui change pour le soigneur, forces et faiblesses, le build standard 11/0/40, la Dual Specialization, des macros utiles, les cadres d'unité et les questions les plus fréquentes."
short: "Restoration Druid"
updated: 2026-11-12
lang: fr
manual: true
faq:
  - q: "Quel est le meilleur build de talents pour un Restoration Druid dans WoW Forever ?"
    a: "La plupart des Restoration Druids jouent 11 points en Balance, 0 en Feral Combat et 40 en Restoration, avec Improved Regrowth et Wild Growth. Les points en Balance servent surtout à Nature's Splendor."
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
    a: "Pas encore. Les deux suivront dès que nous pourrons tester le niveau 60 dans le jeu live."
  - q: "Un Restoration Druid a-t-il sa place en raid ?"
    a: "Tous les raids veulent des soigneurs, et le Restoration Druid a un kit fort et varié. La spécialisation apporte moins à un raid que les deux autres spécialisations de Druid, mais reste un choix fort contre de nombreux types de dégâts."
  - q: "Un Restoration Druid doit-il faire des dégâts ?"
    a: "Dans les moments calmes, oui. Le Wrath plus fort, l'Omen of Clarity gratuit et Judgement of Wisdom rendent les sorts de dégâts bon marché intéressants à glisser entre les soins."
---
Le Restoration Druid de WoW Forever reste un soigneur qui anticipe les dégâts, avec des HoTs sur de nombreux joueurs à la fois. De nouveaux outils lui permettent aussi de réagir : Wild Growth, un Swiftmend qui laisse le HoT en place et un Omen of Clarity gratuit. Ce guide couvre les changements, le build standard, les macros et les questions les plus fréquentes.

| | |
|---|---|
| Rôle | Soigneur, surtout fort en soin de raid |
| Build standard | 11 Balance, 0 Feral Combat, 40 Restoration |
| Talents clés | Improved Regrowth, Wild Growth |
| Points forts | Soin de raid, mobilité, utilitaires |
| Points faibles | Pas de dissipation de Magie ni de Maladie, pas de boucliers |
| Stats et BiS | Pas encore connus |

## Ce qui change pour le soigneur

- **Omen of Clarity est de base** et peut désormais se déclencher sur les sorts, environ deux fois par minute. Le proc rend le sort suivant gratuit : il rapporte le plus sur un soin coûteux.
- **Wild Growth** est le nouveau talent final de l'arbre : un soin puissant sur tout le groupe de la cible. Depuis le 11 novembre, il ne se lance plus en mouvement, mais il profite deux fois plus de votre puissance des sorts, [plus dans notre article](/fr/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> ne consomme plus** le HoT qu'il utilise.
- **Les HoTs peuvent faire des critiques.** Le bonus de critique d'Improved Regrowth s'applique probablement aussi à la partie HoT de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Cela vient des données du jeu et ne pouvait pas être testé sur la bêta.
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

## Les builds pour le niveau 60

Trois builds, chacun avec les 51 points de talent du niveau 60 : un pour les raids et les donjons, un pour monter de niveau et un pour le PvP. Chaque build s’ouvre dans notre calculateur de talents.

### Build de raid, 21/0/30

21 points en Balance et 30 en Restoration. [Ouvrir le build de raid dans le calculateur de talents](/fr/talents/druid/?t=5530203110001--055300510311105).

Pour les donjons, une variante déplace quelques points : [ouvrir le build de donjon](/fr/talents/druid/?t=503222011550135--05530011001).

| Talent | Points |
|---|---|
| **Improved Wrath** | 5/5 |
| **Genesis** | 5/5 |
| **Moonglow** | 3/3 |
| **Nature's Majesty** | 2/2 |
| **Improved Entangling Roots** | 3/3 |
| **Nature's Splendor** | 1/1 |
| **Insect Swarm** | 1/1 |
| **Nature's Grace** | 1/1 |
| **Heart of the Wild** | 5/5 |
| **Naturalist** | 5/5 |
| **Reflection** | 3/3 |
| **Gift of Nature** | 5/5 |
| **Bloom** | 1/1 |
| **Improved Rejuvenation** | 3/3 |
| **Swiftmend** | 1/1 |
| **Nature's Swiftness** | 1/1 |
| **Living Spirit** | 1/3 |
| **Improved Regrowth** | 5/5 |

### Build de leveling, 9/32/10

Le build de leveling prend d’abord les talents qui aident à tuer seul. [L’ouvrir dans le calculateur de talents](/fr/talents/druid/?t=050022-55200002123012125001-055). Le [build de leveling du Druid](/fr/leveling/druid/) donne le talent de chaque niveau.

### Build PvP, 16/11/24

Le build PvP échange des dégâts contre du contrôle et de la survie. [Ouvrir le build PvP dans le calculateur de talents](/fr/talents/druid/?t=500222311-052021001-555330010011).

## Dual Specialization et autres builds

Avec la Dual Specialization et Wild Growth comme talent final puissant, les anciens builds hybrides de Restoration seront peu joués. Une exception est probable : un build qui sacrifie quelques bons points en Feral Combat pour atteindre Insect Swarm en Balance, à 16 points. Insect Swarm devrait rester un affaiblissement fort sur les boss.

Le changement de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> modifie fortement la valeur de ce talent, pour Restoration comme pour Balance. La plupart des points en Restoration sont incontournables : les retirer coûte plus que ce que ces points rapportent ailleurs. D'autres builds peuvent tout de même fonctionner dans tout le contenu, et un build adapté à un besoin précis reste un choix valable.

## Macros

Certaines conditions de macro ne fonctionnaient pas comme prévu sur la bêta. Le client moderne fait aussi beaucoup sans macros ni addons : le lancement au survol, le lancement au clic et le déplacement des éléments d'interface se trouvent dans les options du jeu.

**Survol.** Lance le sort sur l'unité alliée vivante sous la souris, sinon sur la cible alliée, sinon sur vous. Retirez `nodead` pour l'utiliser avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> ou Revive.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Soin d'urgence.** Interrompt ce que vous faites et lance un Healing Touch instantané avec <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. À cause d'un bug sur la bêta, il fallait parfois appuyer plusieurs fois. Depuis le 10 novembre, Nature's Swiftness rend aussi Wild Growth instantané, [plus de détails dans notre article](/fr/news/racial-vendor-mounts-become-bind-on-pickup/).

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

Le Cooldown Manager intégré remplace un groupe central de WeakAuras, et des addons peuvent en changer l'apparence. Sur la bêta, il a été déployé petit à petit. Plus de détails dans l'[article sur le Cooldown Manager](/fr/news/cooldown-manager-arrives-in-forever-from-midnight/).
