---
title: "Layering addons stop working with the next hotfix"
description: "A hotfix for World of Warcraft: Forever hides the realm ID in the data of creatures and objects. Addons such as LayerSwap can then no longer see or pick a layer."
date: 2026-11-21T12:44:00+01:00
category: forever
lang: en
image: ../../../assets/posts/2026-10-04-wow-forever-players-queue-for-a-quest-in-a-cave.jpg
imageAlt: "A long line of players waits in a cave tunnel for a quest mob, with the chat bubble hey don't cut in line please, a screenshot from World of Warcraft"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/layer-swap-and-other-targeted-layering-addons-will-be-disabled-soon-in-wow-383943"
tags: ["forever"]
featured: false
draft: false
---
Addons that show or switch your layer will stop working in World of Warcraft: Forever. A coming hotfix, 1.60.1, hides the realm ID in the data of creatures, pets, vehicles and objects. Blizzard says so in its notes for addon authors. When the hotfix goes live, is not known.

## What changes

Every creature and object in the game has an ID, a GUID. Until now that ID showed which server and which layer it belonged to. Addons such as LayerSwap read it to tell you your layer and to move you to another one. After the hotfix, the realm ID, the server ID and the spawn ID are all hidden.

> The realm ID in creature, vehicle, pet and game object GUIDs is now obfuscated along with the server ID and spawn ID.
>
> This will also apply to Forever in an upcoming 1.60.1 hotfix.

The change comes from patch 12.1.7 of Midnight, in the sixth PTR build. Players on the forums expect the hotfix with the weekly maintenance on 24 November. Blizzard has not confirmed a date.

## Why players care

Layering splits a realm into copies of the world, so that zones do not overflow. With an addon, players hopped to a quieter layer to tag a rare or a quest mob, or to escape a fight on a PvP realm. Some forum posts call that abuse. Others ask for more layers with fewer players each, so that quests in busy zones stay doable. Whether the layers themselves change, Blizzard does not say.

How a group moves you to a layer is in [our post about Refresh Now](/news/press-refresh-now-to-see-your-new-group/).

## Invite links in chat

A second change comes to Forever in a later patch. Invite links to a community or guild in chat must use the standard link, with the real name of the club or guild. Messages with a custom or disguised link text are rejected.
