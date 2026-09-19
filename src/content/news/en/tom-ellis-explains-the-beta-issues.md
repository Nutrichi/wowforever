---
title: "Tom Ellis explains what broke on the beta's first night"
description: "The Senior Game Producer walks through the disconnects, the slow looting and the restarts of 17 September, and what the team changed each time."
date: 2026-09-19
category: forever
lang: en
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "A hunter in a fur cloak stands with a bear above a green valley, from the official cinematic of World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
The beta of World of Warcraft: Forever opened on 17 September with disconnects, long queues and lag on every loot. Senior Game Producer Tom Ellis wrote a long post on X about what went wrong, summarised by Wowhead. It is a rare look at the machinery behind a beta.

## The environment is a test stack

Ellis starts with the frame. The beta does not run on a production stack but on the beta and PTR stack, and that one is far less powerful. A beta usually does not draw large numbers, so the hardware was never built for this.

## The disconnects

Players got through the login queue and were then thrown out. That queue itself is normal: Battle.net limits the rate of logins to protect itself.

The disconnects took the longest to explain, about half an hour according to Ellis. Every service looked bored, with CPU and memory barely used, on both the game side and the Battle.net side. The cause turned out to be a metering system that protects the Battle.net services under heavy load. The beta uses a single regional realm with two connections, and that small setup pushing a lot of logins threw off the calculation that system makes. Scaling those two connections to eight opened the gates.

Ellis adds that the team wants more logging and alerts for when that system steps in, because nobody had seen it trigger without an obvious CPU problem alongside it.

## The slow looting

After that, looting, accepting quests and everything else that touches the database took a long time. The database of the PTR environment was slow to answer.

The database engineers ran a manual analyze over all tables and set up jobs to keep doing that. The reason: some tables are new and existing tables were taking a huge number of inserts with query patterns nobody had seen before, so the statistics went stale quickly. Performance cleared up straight away.

## The restarts

A few hours in, the world pools that run the game simulation ran hot on CPU and almost out of memory. The first virtual machines were hit by the out of memory killer and threatened to take the hypervisor with them.

The cause: empty maps were not being shut down properly, so CPU and memory kept filling up. The fix passed QA quickly but needed restarts to take effect, which is why everyone was kicked off. The team used the moment to add extra worlds and a second regional service.

After that the beta ran smoothly, Ellis writes, and the Classic teams stayed on watch for anything blocking.
