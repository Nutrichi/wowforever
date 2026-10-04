---
title: "Le build 70205 accélère les Mac, mais pas tous"
description: "Les puces Max et Pro tournent mieux sur le nouveau build de la bêta, les puces de base moins bien. Un développeur de Blizzard a trouvé un réglage d'éclairage inversé, et la teinte verte ou magenta est plus rare sans avoir disparu."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: fr
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Illustration officielle de World of Warcraft: Forever avec un Tauren, un Orc, un Blood Elf et un Human au-dessus d'une vallée"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
manual: true
---
Le build 70205 de la bêta de World of Warcraft: Forever tourne plus vite sur les Mac à puce Max ou Pro. Les puces de base comme le M4 Air ont ralenti, selon des joueurs sur les forums. Un développeur de Blizzard trouve cela inattendu.

Les signalements viennent d'un fil sur les bugs graphiques sur Mac, ouvert par un joueur le 18 septembre. Son premier message, du propriétaire d'un Mac Studio avec une M4 Max, recense désormais 26 défauts numérotés et est mis à jour à chaque build. Le fil compte près de 500 réponses, d'un M1 Pro jusqu'à un M6.

## Plus rapide sur Max et Pro, plus lent sur les puces de base

« Le build de la semaine prochaine devrait apporter de grosses améliorations de performances », a écrit Rommax, développeur de WoW, dans le fil le 2 octobre. Le build 70205 est sorti la nuit même, plus tôt que prévu.

Les puces Max et Pro y ont gagné, selon le fil. Sur un Mac Studio avec une M5 Max, la machine sur laquelle wowforever.be joue à la bêta, le 70205 tourne aussi nettement plus fluidement que le build précédent. Les puces de base ont suivi le chemin inverse : un M4 Air, un M5 de base et un M6 mini de base ont perdu beaucoup d'images par seconde. Rommax trouve cela « vraiment inattendu » et dit que Blizzard regardera la semaine prochaine.

Les messages du fichier `gx.log` sur `mtl_1_1` et une famille de GPU inconnue n'en sont pas la cause, ajoute Rommax. C'est un vieux nom pour le seul ensemble de shaders Metal du jeu.

## Un réglage inversé coûte des images

Secondary Lighting tourne en High quoi qu'affiche le menu, a découvert un joueur. Rommax l'a confirmé dans le code le 3 octobre :

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

En attendant un correctif, le fil conseille de passer Secondary Lighting en High après chaque connexion, d'appliquer, puis de revenir au réglage voulu. Le bug ne touche pas que les Mac : deux joueurs sur Windows l'ont aussi.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Lancez la vidéo. invurse sur YouTube, 4 minutes.</span>
    </span>
  </button>
</figure>

Dans cette vidéo du 23 septembre, sur un build antérieur, Secondary Lighting en High saccade fortement à Stormwind alors que Fair reste fluide.

## La teinte est plus rare, pas disparue

La teinte verte ou magenta sur le monde apparaît bien moins sur le 70205, mais cinq joueurs la signalent encore. Blizzard n'arrive pas à la reproduire, a écrit Rommax : ni sur une M1 Ultra, ni sur un Mac Pro de 2019, ni chez QA. Il demande pour chaque signalement le lieu, l'heure du serveur, le GPU et la version de macOS.

Deux plantages sous la pluie ne se produisent plus sur le 70205, et un autre joueur voit un défaut d'ombres corrigé. Quatre nouveaux défauts se sont ajoutés le 4 octobre, dont une pluie qui traverse un toit et des canaux de Stormwind sans vagues. Les ombres qui disparaissent à une distance fixe de la caméra persistent, a confirmé un joueur ce soir-là à Kharanos.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Lancez la vidéo. invurse sur YouTube, 2 minutes.</span>
    </span>
  </button>
</figure>

Un plantage dans le pilote Metal ne survient que sous macOS 12 et 13, selon Rommax. Passer à macOS 14 ou plus récent peut l'éviter.

## Les réglages qui déclenchent le moins de défauts

Le premier message tient une liste des réglages qui posent le moins de problèmes sur le 70205. C'est un contournement, pas un correctif, et aucun réglage n'empêche la teinte.

| Réglage | Valeur |
|---|---|
| **Shadow Quality** | Good ou plus |
| **Secondary Lighting** | High |
| **Compatibility Settings** | Les quatre activés |
| **Render Scale** | 100 % |
| **Tout le reste** | 10, le maximum |

Le build 69977 avait déjà [corrigé un kernel panic et des bandes sur Mac](/fr/news/a-new-beta-build-fixes-mac-and-controller-issues/) en septembre. Blizzard ne dit pas quels correctifs le prochain build apportera aux puces de base.
