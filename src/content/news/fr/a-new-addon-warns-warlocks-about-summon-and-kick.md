---
title: "Un addon avertit les Warlocks du summon-and-kick"
description: "The Summoners Union compte vos Ritual of Summoning et vous laisse signaler un chef qui vous exclut dans les 20 minutes après une invocation. Les autres utilisateurs sont alors prévenus quand ce joueur les invite. Il marche dans WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: fr
manual: true
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "Un Troll Warlock qui lance un sort avec un feu vert et violet dans les deux mains, à côté d’un Imp, dans une salle rouge et violette avec des os et des crânes suspendus"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Tous les Warlocks connaissent ça. Dix minutes à la meeting stone, des Soul Shards brûlés pour <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a>, et dès que le dernier joueur arrive, vous êtes exclu du groupe. The Summoners Union, un nouvel addon d’OrganicCarrots, tient la liste des chefs qui font ça et vous prévient quand ils vous invitent à nouveau. Il marche dans World of Warcraft: Forever.

## Comment il marche

1. **Il compte vos invocations.** Chaque Ritual of Summoning que vous terminez en groupe est compté. Vous êtes exclu du groupe, ou le groupe est dissous, dans les 20 minutes après votre dernière invocation ? L’addon demande alors si vous voulez signaler le chef, ou le chef et sa guilde. Partir de vous-même ne compte jamais, et rien n’est signalé sans votre clic.
2. **Il vous prévient.** Une alerte de raid apparaît quand un joueur signalé vous invite ou rejoint votre groupe, avec son bilan : par exemple signalé 6 fois par 4 utilisateurs. Les invitations des joueurs signalés peuvent être refusées pour vous. C’est désactivé par défaut.
3. **Il marque les joueurs.** Un joueur signalé reçoit une ligne rouge dans son infobulle. Vous seul la voyez.
4. **Il partage la liste.** Les nouveaux signalements partent en messages d’addon cachés vers les autres utilisateurs de votre guilde et de votre groupe. Un canal caché pour tous les utilisateurs de votre royaume est en option : `/su share channel on`.

Les autres classes peuvent aussi signaler un joueur, avec `/su flag` ou un clic droit sur un portrait ou un cadre de groupe. Chaque signalement indique la classe de son auteur, pour distinguer un Warlock exclu de quelqu’un qui signale à la main.

## Contre les faux signalements

- Un signalement n’est partagé que si vous étiez en groupe avec ce joueur, ou avec un membre de cette guilde, ces 7 derniers jours. Sinon il reste une note privée.
- Quiconque fait plus de 10 nouveaux signalements en un jour est ignoré.
- Les signalements des autres ne vous préviennent que quand deux sources différentes signalent le même joueur. Ça se règle avec `/su set threshold`.
- `/su distrust <nom>` ignore tout ce qu’un utilisateur signale ou transmet.
- Les signalements des autres ne comptent plus après 180 jours.

L’addon n’affiche jamais de nom dans un canal public, ne chuchote jamais à un joueur signalé et n’exclut ni ne signale personne. Personne n’apprend qu’il a été signalé.

## Commandes

| Commande | Ce qu’elle fait |
|---|---|
| **/su** | Ouvre la liste |
| **/su options** | Ouvre les options |
| **/su flag** | Signale un joueur, votre cible si vous ne donnez pas de nom |
| **/su flagguild** | Signale une guilde |
| **/su check** | Cherche un joueur |
| **/su test** | Montre la question après une exclusion, sans signaler personne |

L’addon est gratuit sur [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) et marche aussi dans Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic et le WoW moderne. Le code est ouvert sur GitHub. Plus sur la classe dans notre [guide du Warlock](/fr/classes/warlock/).
