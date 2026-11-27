---
title: "A new addon warns Warlocks about summon-and-kick"
description: "The Summoners Union counts your Ritual of Summoning casts and lets you flag a leader who kicks you within 20 minutes of a summon. Other users then get a warning when that player invites them. It works in WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: en
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "A Troll Warlock casting with green and purple fire in both hands, next to an Imp, in a red and purple hall with hanging bones and skulls"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Every Warlock knows it. Ten minutes at the meeting stone, Soul Shards burned on <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a>, and the moment the last player arrives, you are removed from the group. The Summoners Union, a new addon by OrganicCarrots, keeps a list of the leaders who do that and warns you the next time they invite you. It works in World of Warcraft: Forever.

## How it works

1. **It counts your summons.** Every Ritual of Summoning you finish in a group is counted. Are you removed from that group, or is it disbanded, within 20 minutes of your last summon? Then the addon asks whether you want to flag the leader, or the leader and their guild. Leaving on your own never counts, and nothing is flagged without your click.
2. **It warns you.** A raid warning shows when a flagged player invites you or joins your group, with the record: for example flagged 6 times by 4 users. You can have invites from flagged players declined for you. That is off by default.
3. **It marks players.** A flagged player gets a red line on their tooltip. Only you see it.
4. **It shares the list.** New flags go as hidden addon messages to other users in your guild and your group. A hidden channel for every user on your realm is optional: `/su share channel on`.

Other classes can flag a player too, with `/su flag` or a right-click on a portrait or a party frame. Every report shows the class of the player who filed it, so you can tell a kicked Warlock from someone flagging by hand.

## Against false reports

- A flag is only shared if you were in a group with that player, or with a member of that guild, in the last 7 days. Anything else stays a private note.
- Anyone who files more than 10 new reports in one day is ignored.
- Reports from others only warn you once two different sources flag the same player. Change that with `/su set threshold`.
- `/su distrust <name>` ignores everything one user reports or passes on.
- Reports from others stop counting after 180 days.

The addon never posts names in public chat, never whispers a flagged player and never kicks or reports anyone. Nobody is told they were flagged.

## Commands

| Command | What it does |
|---|---|
| **/su** | Opens the list |
| **/su options** | Opens the options |
| **/su flag** | Flags a player, your target if you give no name |
| **/su flagguild** | Flags a guild |
| **/su check** | Looks up a player |
| **/su test** | Shows the prompt after a kick, without flagging anyone |

The addon is free on [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) and also works in Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic and modern WoW. The code is open on GitHub. More about the class in our [Warlock guide](/classes/warlock/).
