---
title: "Restoration Druid: the healing guide for WoW Forever"
metaTitle: "Restoration Druid in WoW Forever: build, talents, macros and FAQ"
description: "The Restoration Druid in WoW Forever: what changes for the healer, strengths and weaknesses, the standard 11/0/40 build, Dual Specialization, useful macros, unit frames and the most asked questions."
short: "Restoration Druid"
updated: 2026-11-22
lang: en
faq:
  - q: "What is the best talent build for a Restoration Druid in WoW Forever?"
    a: "Most Restoration Druids run 11 points in Balance, 0 in Feral Combat and 40 in Restoration, with Improved Regrowth and Wild Growth. The points in Balance mainly serve Nature's Splendor."
  - q: "Does Swiftmend still consume the HoT?"
    a: "No. In WoW Forever Swiftmend no longer consumes the Rejuvenation or Regrowth it uses. It does need your own Rejuvenation or Regrowth on the target: Wild Growth or the HoT of another Druid does not count."
  - q: "Is Healing Touch still worth casting?"
    a: "Yes, but less than in Classic. Downranking penalties and a stronger Regrowth make it less central, and Tranquil Spirit is no longer a strong talent."
  - q: "Which race is best for a Restoration Druid?"
    a: "High Order Skyborne for the Alliance, for 2% haste and Read Leyline for mana, or Night Elf for Elune's Light before heavy damage. On the Horde side, Windshaper Skyborne for 2% haste and Skysight."
  - q: "Which professions suit a Restoration Druid?"
    a: "While levelling, Skinning with Leatherworking or two gathering professions. At level 60 Engineering looks strong for raid utility, and Enchanting has access to relics that bind on pickup."
  - q: "Can a Restoration Druid dispel Magic or Disease?"
    a: "No. The Druid has no Magic or Disease dispel, which is one of the weaknesses of the spec."
  - q: "What are the stat priority and the BiS list?"
    a: "Healing power once you have enough Intellect and Stamina, then Spirit or mana per 5 seconds when your mana runs out, and critical strike chance last. The pre-raid BiS list is on our BiS page."
  - q: "Does a Restoration Druid get a raid spot?"
    a: "Every raid wants healers, and the Restoration Druid has a strong and broad kit. The spec brings less to a raid than the other two Druid specs, but is a strong choice against many kinds of damage."
  - q: "Should a Restoration Druid deal damage?"
    a: "In quiet moments, yes. The stronger Wrath, the free Omen of Clarity and Judgement of Wisdom make cheap damage spells worth weaving in."
sources:
  - name: "Wowhead, enchants and consumables"
    url: "https://www.wowhead.com/forever/guide/classes/druid/restoration/enchants-consumables-pve-healer"
  - name: "Mobalytics"
    url: "https://mobalytics.gg/wow-forever/classes/restoration-druid-guide-progress"
---
The Restoration Druid in WoW Forever is still a healer who works ahead of the damage, with HoTs on many players at once. New tools let the spec react as well: Wild Growth, a Swiftmend that keeps the HoT and a free Omen of Clarity. This guide covers the changes, the standard build, macros and the most asked questions.

| | |
|---|---|
| Role | Healer, strongest in raid healing |
| Standard build | 11 Balance, 0 Feral Combat, 40 Restoration |
| Key talents | Improved Regrowth, Wild Growth |
| Strength | Raid healing, mobility, utility |
| Weakness | No Magic or Disease dispel, no shields |
| Stats and BiS | [Pre-raid BiS list](/bis/forever/preraid/druid-restoration/) |

## What changes for the healer

- **Omen of Clarity is baseline** and can now proc on spell casts, about twice per minute. The proc makes the next spell free, so it pays off most on an expensive heal.
- **Wild Growth** is the new capstone of the tree: a strong area heal on the party of the target. Since 11 November you can no longer cast it while moving, but it gets twice as much from your spell power, [more in our post](/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> no longer consumes** the HoT it uses. It only works on a target with your own Rejuvenation or Regrowth: Wild Growth or the HoT of another Druid does not count.
- **HoTs can crit.** The extra crit chance of Improved Regrowth probably also counts for the HoT part of <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. That comes from the game data and could not be tested on the beta.
- **HoTs of several Druids stack** on one target. A bug still prevents that in some cases.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** no longer stacks its armor reduction with <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> from Warlocks.
- **Mana costs** have changed, and Regrowth heals a lot more than before.
- **Feral Swiftness and <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** now work indoors.
- **Shapeshifting** gets in the way less. Several items, abilities and actions now work in form, and many that used to fail in form now cancel it automatically.

## Strengths and weaknesses

| Strengths | Weaknesses |
|---|---|
| Very strong raid healing | Competes for raid spots with the other Druid specs |
| Strong burst healing on one target | No external damage reduction or shields |
| A wide range of utility | Mana needs active management |
| A lot of total healing | Raid healing takes time to ramp up |
| The best mobility of any healer | No Magic or Disease dispel |
| Raid debuffs | |

## Builds for level 60

Three builds, each with the 51 talent points of level 60: one for raids and dungeons, one for leveling and one for PvP. Every build opens in our talent calculator.

### Raid and dungeon build, 11/0/40

11 points in Balance and 40 in Restoration, for dungeons and raids. [Open the build in the talent calculator](/talents/druid/?t=05302001--5553005123113051).

| Talent | Points |
|---|---|
| **Genesis** | 5/5 |
| **Moonglow** | 3/3 |
| **Nature's Majesty** | 2/2 |
| **Nature's Splendor** | 1/1 |
| **Nature's Focus** | 5/5 |
| **Heart of the Wild** | 5/5 |
| **Naturalist** | 5/5 |
| **Reflection** | 3/3 |
| **Gift of Nature** | 5/5 |
| **Bloom** | 1/1 |
| **Tranquil Spirit** | 2/5 |
| **Improved Rejuvenation** | 3/3 |
| **Swiftmend** | 1/1 |
| **Nature's Swiftness** | 1/1 |
| **Living Spirit** | 3/3 |
| **Improved Regrowth** | 5/5 |
| **Wild Growth** | 1/1 |

With 21 points in Balance for Improved Wrath, Moonglow and Insect Swarm, this raid build lets you deal more damage in quiet moments (21/0/30). [Open it in the talent calculator](/talents/druid/?t=5530203110001--055300510311105).

For dungeons, a build with Feral Combat lets you switch to cat or bear when the healing is calm, or when the tank goes down (0/32/19). [Open it in the talent calculator](/talents/druid/?t=-55000032023012125001-05530011031).

The 11 points in Balance reach Nature's Splendor, with Genesis for your HoTs and Nature's Majesty for critical strike chance. In Restoration the points go to healing and mana instead of Cat Form. Put more points in Tranquil Spirit when Healing Touch and Tranquility eat a large part of your mana; Improved Tranquility is an alternative for a shorter cooldown and less threat. Move points around instead of adding them, and keep Wild Growth and Living Spirit, the talent before it.

### Leveling build, 9/32/10

The leveling build takes the talents that help you kill alone first. [Open it in the talent calculator](/talents/druid/?t=050022-55200002123012125001-055). The [Druid level build](/leveling/druid/) gives the talent for every level. Do you mostly heal dungeons while you level? Then a healer route works: 0/0/21 at level 30, with Heart of the Wild, Naturalist, Bloom at 20, Gift of Nature, Swiftmend at 25, Reflection and Nature's Swiftness at 30. Questing alone goes faster as Feral.

### PvP build, 16/11/24

The PvP build trades damage for control and survival. [Open the PvP build in the talent calculator](/talents/druid/?t=500222311-052021001-555330010011).

## Healing at level 60

**Spell ranks.** At level 60 you use Healing Touch rank 10, Rejuvenation rank 10, Regrowth rank 9 and Wild Growth rank 3. Keep Healing Touch rank 8 for a smaller heal and Rejuvenation rank 9 for light damage. Rank 1 Rejuvenation is cheap on light damage and still triggers Bloom when it runs out, but use a higher rank when the target needs it.

**Wild Growth** takes 3 seconds to cast, 2.5 seconds with Naturalist 5/5, and heals the party of your target over 7 seconds, with the strongest ticks at the start. Start the cast so it lands as the damage comes in, and pick the party that needs it: it does not look for the most injured players in the raid. With Nature's Swiftness it is instant.

**Stats.** First enough Intellect and Stamina, then healing power. When you run out of mana, Spirit or mana per 5 seconds is worth more than a bit more healing; with Reflection and Living Spirit, Spirit also feeds Bloom. Critical strike chance comes after that: HoTs can crit in Forever, but a crit is a bonus, not a plan. The [pre-raid BiS list](/bis/forever/preraid/druid-restoration/) shows which items to aim for.

**Idols.** Mystic Mushroom, a bind on pickup Enchanting craft at skill 130, gives 5% Spirit, good for mana and Bloom. Idol of Synthesis from Pix Xizzix shortens the cooldown of Swiftmend for each of your HoTs on the target, handy on a tank you keep covered. Once the raids open, Idol of Swiftness takes 3 seconds off the cooldown of Swiftmend; it needs Malleable Essence of Nature from the raids.

## Enchants and consumables

The best enchant per slot. Put them on gear you will keep for a while; while you level, the cheaper versions of the same enchant do fine.

| Slot | Best |
|---|---|
| **2H Weapon** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248636"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant 2H Weapon - Mighty Healing Power</a> |
| **1H Weapon** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=22750"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Healing Power</a> |
| **Off-Hand** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1219579"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Off-Hand - Wisdom</a> |
| **Neck** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1249058"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Necklace - Healing Power</a> |
| **Chest** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Hands** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Legs** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Boots** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |

## Dual Specialization and other builds

With Dual Specialization and Wild Growth as a strong capstone, the old hybrid builds for Restoration will hardly be played. One exception is likely: a build that drops a few strong points in Feral Combat to reach Insect Swarm in Balance, at 16 points. Insect Swarm is expected to stay a strong debuff on bosses.

The change to <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> makes a big difference to the value of that talent, for Restoration and for Balance alike. Most of the points in Restoration are fixed: leaving them out costs more than the points gain elsewhere. Other builds can still work in all content, so a build that suits a specific need is a valid choice.

## Macros

Some macro conditions did not work as expected on the beta. The modern client also does a lot without macros or addons: mouseover casting, click casting and moving interface elements are in the game settings.

**Mouseover.** Casts the spell on the friendly, living unit under the mouse, otherwise on the friendly target, otherwise on yourself. Remove `nodead` when you use it for <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> or Revive.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Emergency heal.** Stops what you are doing and casts an instant Healing Touch with <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. Because of a bug on the beta, it could need more than one press. Since 10 November, Nature's Swiftness also makes Wild Growth instant, [more in our post](/news/racial-vendor-mounts-become-bind-on-pickup/).

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**One button for utility.** Rebirth on a dead ally in combat, Revive on a dead ally out of combat, and <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> on a living ally.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Spells on the ground.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> at the cursor, or an item such as the Advanced Target Dummy at your own feet.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Forms.** A macro can do something only in a certain form, with `[form:N]`:

| Condition | Form |
|---|---|
| **form:0** | Caster form |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Unit frames and the Cooldown Manager

The default unit frames can be adjusted less than players of older versions of the game are used to. Some addons add filters for buffs and debuffs, which helps a lot for a class that heals with HoTs. EllesmereUI is the most approachable and flexible addon for unit frames. For party and raid frames, Grid2 works well: show health, range and the debuffs you can remove first, then your own HoTs.

The built-in Cooldown Manager replaces a central group of WeakAuras, and addons can restyle it. On the beta it was rolled out step by step. More in the [post about the Cooldown Manager](/news/cooldown-manager-arrives-in-forever-from-midnight/).
