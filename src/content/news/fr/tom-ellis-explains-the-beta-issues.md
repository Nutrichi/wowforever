---
title: "Tom Ellis explique ce qui a cassé le premier soir de bêta"
description: "Le Senior Game Producer reprend un par un les déconnexions, le loot lent et les redémarrages du 17 septembre, et ce que l'équipe a changé à chaque fois."
date: 2026-09-19T20:10:00+02:00
category: forever
lang: fr
manual: true
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "Un hunter en cape de fourrure se tient avec un ours au-dessus d'une vallée verte, tiré de la cinématique officielle de World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
La bêta de World of Warcraft: Forever a ouvert le 17 septembre avec des déconnexions, de longues files d'attente et de la latence sur chaque loot. Le Senior Game Producer Tom Ellis a publié un long message sur X pour expliquer ce qui n'a pas marché, résumé par Wowhead. C'est un regard rare sur la machinerie derrière une bêta.

## L'environnement est une installation de test

Ellis commence par le cadre. La bêta ne tourne pas sur une installation de production mais sur celle de la bêta et du PTR, bien moins puissante. Une bêta n'attire en général pas de gros chiffres, ce matériel n'a donc jamais été prévu pour cela.

## Les déconnexions

Les joueurs passaient la file d'attente de connexion puis étaient éjectés. Cette file est normale en soi : Battle.net limite le rythme des connexions pour se protéger.

Les déconnexions ont été les plus longues à expliquer, environ une demi-heure selon Ellis. Tous les services avaient l'air de s'ennuyer, processeur et mémoire à peine sollicités, côté jeu comme côté Battle.net. La cause était un système de mesure qui protège les services de Battle.net en cas de forte charge. La bêta utilise un seul royaume régional avec deux connexions, et cette petite installation qui poussait énormément de connexions a faussé le calcul de ce système. Passer ces deux connexions à huit a ouvert les vannes.

Ellis ajoute que l'équipe veut plus de journalisation et d'alertes quand ce système intervient, car personne ne l'avait vu se déclencher sans un problème de processeur évident à côté.

## Le loot lent

Ensuite, looter, accepter des quêtes et tout ce qui touche à la base de données prenait du temps. La base de données de l'environnement PTR répondait lentement.

Les ingénieurs base de données ont lancé à la main un analyze sur toutes les tables et mis en place des tâches pour continuer à le faire. La raison : certaines tables sont nouvelles et les tables existantes recevaient une quantité énorme d'insertions, avec des schémas de requêtes que personne n'avait vus, donc les statistiques vieillissaient vite. La vitesse est revenue immédiatement.

## Les redémarrages

Quelques heures plus tard, les world pools qui font tourner la simulation du jeu chauffaient côté processeur et arrivaient au bout de la mémoire. Les premières machines virtuelles ont été frappées par le tueur de mémoire et menaçaient d'emporter l'hyperviseur.

La cause : les maps vides n'étaient pas fermées correctement, donc processeur et mémoire continuaient de se remplir. Le correctif est passé vite en QA mais demandait des redémarrages pour s'appliquer, d'où l'éjection générale. L'équipe en a profité pour ajouter des worlds supplémentaires et un deuxième service régional.

Après cela, la bêta a tourné sans heurt, écrit Ellis, et les équipes Classic sont restées à l'affût de tout ce qui pourrait encore bloquer.
