---
title: "Build 70205 speeds up Macs, but not every Mac"
description: "Max and Pro chips run better on the new beta build, base chips run worse. A Blizzard developer found a swapped lighting setting, and the green or magenta tint is rarer but not gone."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: en
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Official key art of World of Warcraft: Forever with a Tauren, an Orc, a Blood Elf and a Human above a valley"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
---
Beta build 70205 of World of Warcraft: Forever runs faster on Macs with a Max or Pro chip. Base chips such as the M4 Air got slower, players report on the Blizzard forums. A Blizzard developer calls that unexpected.

The reports come from a thread about Mac graphics bugs that a player opened on 18 September. Its first post, by the owner of a Mac Studio with an M4 Max, now lists 26 numbered faults and is updated for every build. The thread has drawn almost 500 replies, from an M1 Pro up to an M6.

## Faster on Max and Pro, slower on base chips

"Next week's build should have some major performance improvements," wrote Rommax, a WoW developer, in the thread on 2 October. Build 70205 went out the same night, ahead of schedule.

Max and Pro chips got better on it, according to the thread. On a Mac Studio with an M5 Max, the machine wowforever.be plays the beta on, 70205 also runs noticeably smoother than the build before. Base chips went the other way: an M4 Air, a base M5 and a base M6 mini lost a lot of frames. Rommax calls that "certainly unexpected" and says Blizzard will look into it next week.

Warnings in the log file `gx.log` about `mtl_1_1` and an unknown GPU family are no cause, Rommax adds. That is an old name for the only set of Metal shaders the game has.

## A swapped setting costs frames

Secondary Lighting runs at High whatever the menu says, a player found. Rommax confirmed it in the code on 3 October:

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

Until a fix arrives, the thread advises setting Secondary Lighting to High after every login, applying it and then setting it back. The bug is not limited to Macs: two Windows players have it too.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Play the video. invurse on YouTube, 4 minutes.</span>
    </span>
  </button>
</figure>

In this video from 23 September, an earlier build, Secondary Lighting at High stutters badly in Stormwind and Fair runs smoothly.

## The tint is rarer, not gone

The green or magenta tint over the world shows up much less on 70205, but five players still report it. Blizzard cannot reproduce it, Rommax wrote: not on an M1 Ultra, not on a 2019 Mac Pro and not at QA. He asks for the location, the server time, the GPU and the macOS version with every report.

Two crashes during rain no longer occur on 70205, and another player sees a shadow fault fixed. Four new faults were added on 4 October, among them rain falling through a roof and canals in Stormwind without waves. Shadows that vanish at a fixed distance from the camera remain, a player confirmed in Kharanos that evening.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Play the video. invurse on YouTube, 2 minutes.</span>
    </span>
  </button>
</figure>

A crash inside the Metal driver only shows up on macOS 12 and 13, according to Rommax. Upgrading to macOS 14 or later may prevent it.

## Settings that trip the fewest faults

The first post keeps a list of settings that cause the fewest problems on 70205. It is a workaround, not a fix, and no setting stops the tint.

| Setting | Value |
|---|---|
| **Shadow Quality** | Good or higher |
| **Secondary Lighting** | High |
| **Compatibility Settings** | All four on |
| **Render Scale** | 100% |
| **Everything else** | 10, the maximum |

Build 69977 already [fixed a kernel panic and banding on Macs](/news/a-new-beta-build-fixes-mac-and-controller-issues/) in September. Which fixes the next build brings for base chips, Blizzard does not say.
