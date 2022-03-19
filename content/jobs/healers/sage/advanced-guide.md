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

There is a detailed sheet of Phlegma timings available
[here](https://docs.google.com/spreadsheets/d/1q3ZU_fY2fUYxpp-hfOUaxgIuUUs9HcYKXHxyR9BgkPM/edit#gid=0).

The short version is that assuming your party is using buffs immediately when they come off cooldown, the six-minute cycle
looks like this:

| Time | # of Phlegma to Use |
|------|---------------------|
| 0:00 | 2                   |
| 1:00 | 1                   |
| 2:00 | 2                   |
| 3:00 | 1                   |
| 4:00 | 1                   |
| 5:00 | 1                   |

The cycle repeats every six minutes.

If you do not have one-minute buffs, then you have more freedom to use Phlegma for movement. As long as you're still getting the correct number of uses in two-minute windows, and you aren't overcapping, you have more freedom over the uses that would have otherwise been in the one-minute windows.



**Two disclaimers:**

- As with all buffs and cooldowns, you may be able to shift some timings around if you have a consistent killtime.
- That is, if you can delay a use for buff windows without losing a use, it is optimal to do so.



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
