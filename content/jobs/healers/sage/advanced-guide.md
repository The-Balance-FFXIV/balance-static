---
title: Sage Advanced Guide
card_header_image: /img/jobs/sge/sgeadvanced.png
authors:
  - wynn
patch: "6.08"
lastmod: 2022-03-15T06:04:53.382Z
changelog:
  - date: 2022-01-24T07:05:05.826Z
    message: Created page
---
# Advanced SGE Guide

Sage being relatively straightforward means that there's not all that much for an "advanced" guide to cover. I'll  try to cover some of the areas that aren't covered in the basic guide. 



## Phlegma Timings

With the rework of Trick Attack in 6.1, it is no longer necessary to worry about odd-minute buff windows, as they no longer exist. Rather, any Phlegma that wouldn't be used in a two-minute buff window becomes free movement.


Phlegma timings would ideally look like this, on a repeating six-minute cycle:

| Time | # of Phlegma to Use |
|------|---------------------|
| 0:00 | 2                   |
| Free | 1                   |
| 2:00 | 2                   |
| Free | 1                   |
| 4:00 | 1                   |
| Free | 1                   |






As with all buffs and cooldowns, you may be able to shift some timings around if you have a consistent killtime. That is, if you can delay a use for buff windows without losing a use, it is optimal to do so.



## Movement Priority

Let's talk about how to handle movement. Sage is unique here because unlike Ruin II or Rapture skills, your free movement abilities are either damage neutral (Toxikon) or damage positive (Phlegma). However, the basics of healer movement still apply, namely:

- Slidecasting will be by far your most common way of moving while casting. Being able to move for over 60% of each GCD is usually enough.
- Your natural DoT refresh is free movement.
- You should make use of prepositioning whenever possible.



With this in mind, let's look at the priorities:

First, we have free movement options:

1. If your DoT is expiring anyway, refreshing it gives a GCD of free movement.
2. Phlegma, if you were in a burst window anyway, or were going to lose a usage to a boss going untargetable (for example, before adds in P3S).
4. Slidecasting on normal hardcast GCDs - this will be your most frequently used option

After that, your options look something like this. These are in no particular order - you will need to plan these out.
Any plan is fine as long as it is covered by these:

- Icarus
- Swiftcast + Dosis (or Swift + Pneuma) - only safe if in an optimized run where raises won't be needed.
- Toxikon - be sure to plan out, since you know exactly how many charges you will have

Finally, as a last resort, you have several options that are suboptimal, but still better than casting nothing:

- Dyskrasia - range is not huge, so this only works if near the boss
- Refresh DoT early - on top of hurting your damage output, this will throw off DoT timings for the rest of the fight.
