---
title: Intermediate Guide
authors:
  - Balance-RPR-Staff
  - ellunavi
patch: "7.4"
lastmod: 2025-12-17T05:33:43.392Z
changelog:
  - date: 2024-07-02T21:55:37.160Z
    message: Created article.
  - date: 2024-07-04T19:28:43.660Z
    message: Updated for 2nd GCD AC.
  - date: 2024-07-21T02:37:55.531Z
    message: Updated Burst Window.
  - date: 2025-03-24T21:33:40.298Z
    message: Updated to Patch 7.2.
  - date: 2025-09-16T20:54:30.847Z
    message: Updated for 7.3
  - date: 2025-12-17T05:33:45.201Z
    message: Updated to Patch 7.4.
---
# Introduction

Welcome to Reaper Intermediate Guide! The objective of this guide is to tackle some of the more slightly complicated part of Reaper. This guide will cover the following topics:

* Standard Two-Minute Burst Window
* Variant Two-Minute Burst Windows
* Uptime Optimization

## Two Minute Burst Windows

Optimizing your two minute burst window to better play into buffs is what really set you apart as a Reaper. An optimized Double Enshroud Window is putting around 2000 more potency into raid buffs than an optimized Single Enshroud one. Reaper has a lot of options for burst windows that are better discussed in the Advanced Guide. Below is the safest option for your two minute burst window, that will work best in most situations. 

![](/img/jobs/rpr/reaper-standard-double-enshroud7.3.png "Reaper Standard Burst")



With the 7.3 change to Enshroud's cooldown (from 15s to 5s), our burst window changes slightly as we no longer need two Shadow of Deaths in the first enshroud. Therefore, we have several considerations that must be taken into account to perform this new window correctly, so follow the bulleted list below to ensure the sequence is correct. 

* You *must* enter the first enshroud with ~30s on Death's Design or you will drop the debuff before the end of the sequence.

  * An easy way to do this is to Shadow of Death once when Arcane Circle has 60 seconds left on its cooldown, then Shadow of Death twice when Arcane Circle has 30 seconds left on its cooldown. The single Shadow of Death during the Double Enshroud will naturally fill in the remaining 30 seconds needed each 2 min cycle.
* When Arcane Circle hits 6s left on its cooldown, do one more non-Enshroud GCD, then use Enshroud.
* If using a potion during this window, use the potion in the weave slot before Arcane Circle.

  * At 4 mins onward, use Arcane Circle before using the potion.
*  Arcane Circle should be used when the GCD clock is *halfway* finished, rather than as a late weave. 
* If you will have an active combo during the Double Enshroud, at least one of the two Non Enshroud GCDs before the first Enshroud must be a combo GCD or combo will break.
* If Slice or Waxing Slice was one of the last two GCDs before the first Enshroud, continue the combo after Perfectio, else skip Continue Combo and use the next thing in the priority below.
* After Perfectio use the following priority:

  1. Continue Combo 
  2. If you have 50 Soul Gauge and Gluttony is ready, use Gluttony immediately.
  3. If you do not have 50 Soul Gauge, or Gluttony is not ready, use Soul Slice then Gluttony. 
* Perfectio can and should be held if needed as a ranged GCD to cover melee downtime.

  * If Perfectio is held, skip it in the sequence and immediately continue with the above post-Perfectio prio.

### Different Two Minute Bursts

Reaper has more than one potential burst window, but the variant being used needs to be carefully considered. More of the how and when to use them will be covered in the Advanced Guide, but just know that their gains are typically sub .2% of our DPS.

#### Combo Entry Point

One of the neat things about Dawntrail Reaper is that Perfectio fills in a role that used to be occupied by a 19th combo GCD. This means we will do 18 combo GCDs between each burst sequence. In full-uptime scenarios, you will most likely always enter your burst on the same combo point. The caveat here is that every Harpe and Harvest Moon will shift this combo window by one GCD. So there are cases, like a 2 ranged GCD filler rotation, where our burst window will enter combo neutral.

#### The 9th Hour (Minute)

In a full uptime scenario, the 10 minute burst will not function anymore due to gauge negativity. This can happen at the 8th minute as well if you lose a single GCD before then. It is recommended, when this happens, to just bank the Enshroud at the 9th minute (7th minute if you would mess up the 8th minute). This is called "Deadzoning" and usually reserved for advanced purposes, but it is overall a net gain for us to do it in these windows. Do note, that dying with this gauge is way more of a loss than dying without the gauge. If the fight is tough and you think that you may perish before reaching the burst window it is recommended to not hold the gauge.

#### Single Enshroud Burst

In Endwalker, Single Enshroud was significantly weaker than our Double Enshroud burst. In Dawntrail, it is now a lot closer. With Gluttony being a much stronger GCD with its two 820p follow up attacks, we now need to take more consideration of losing a use. The best way to prevent losing that use is to utilize a Single Enshroud windows. 

Single Enshrouds are somewhat more complicated than Doubles because of the Enshroud that could or could not precede them. General rule of thumb is to not enter Enshroud if Gluttony <13s on its cooldown. At the 6th minute mark in a full uptime fight we actually run into an interesting situation where the above window will need to have the Soul Slice after the AC. It is better to view the whole single enshroud phases by clicking [here](https://docs.google.com/spreadsheets/d/1qIE7mfMSVKtAUxAHEbG0llNawygWcujYwUR8wKIkE5M/edit?usp=sharing). 

### Uptime Optimization

Reaper received a major change in Dawntrail, that being that Harvest Moon and Harpe now generate 10 Soul. Reaper also received a new action in their rotation that generates no Soul -- Perfectio. Because of this the risk of not having enough gauge intensifies, meaning that with enough wasted downtime the burst window at even 8 minutes could be in jeopardy. One of the challenges will be for RPR to utilize their ranged tools to maintain uptime for not only more damage but also to ensure that their rotation later down the line doesn't suffer.

* **Harvest Moon** is your first line of uptime defense. You only get one in any encounter where the boss doesn't leave the arena for 5s or more and using it to maintain uptime is crucial. It is an instant cast and is 800p, meaning that using it at any point in the fight will always be a gain;
* **Perfectio** is your second line of uptime defense and arguable the most complicated piece. In standard burst sequences, Perfectio can be brought outside of the burst for potential uptime gains within 30s of the final Communio. By using Perfectio instead of Harpe, you more-or-less secure a combo action which will net you anywhere from 132-330p;
* **Enhanced Harpe** is another great option just because its instant cast and will allow for more mobility. You get this from simply using Hell's Ingress or Hell's Regress which are both great tools for maintaining uptime;
* **Hardcast Harpe** is the final option. Sometimes the teleport skills go too far, or the downtime is extended and we will have to utilize a hardcasted Harpe. This isn't too terribly difficult with its short cast time.

#### Perfectio Ranged Flex

Perfectio's availability can be stretched out to nearly a minute after Plentiful Harvests or almost 90s after Arcane Circle has been used. This does require some planning to utilize, but we do have the ability to utilizing windows such as the one in the spreadsheet below to not sacrifice too much damage in our burst window and also allowing us uptime pretty far into the future. This may be a non-standard optimization or it could be a niche tool for certain encounters, but I believe understanding how good Perfectio as a ranged tool is will be a differential when it comes to skill expression. You can view an example of this theory here.

<https://docs.google.com/spreadsheets/d/16zo0BorEt3UMv2hXjTFNcyKQjooRW1jwXp7eGAc7BiY/edit?usp=sharing>