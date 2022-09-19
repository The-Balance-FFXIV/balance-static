---
title: Paladin FAQ
layout: qna
patch: "6.21"
lastmod: 2022-09-19T01:47:16.817Z
changelog:
  - date: 2021-10-27T17:20:21.199Z
    message: Added
  - date: 2022-01-10T00:28:59.426Z
    message: Updated for Endwalker
  - date: 2022-09-19T01:36:03.154Z
    message: Updated for 6.2
qna:
  - question: Should I use the fast GCD or slow GCD rotation?
    answer: Use the rotation that matches your GCD recast. Slow GCDs are better on a
      dummy while fast GCDs may be more familiar to long-time Paladin players.
      For encounter-specific rotation suggestions, check the Balance discord.
  - question: How much Skill Speed do I need?
    answer: Paladin has never had strict skill speed requirements to maintain a
      standard rotation. With recent changes, Paladin can operate at any GCD
      speed, with a different rotation loop for slow (2.46 or slower) and fast
      (2.45 or faster) GCDs. See the above and the Basics Guide for more
      information.
  - question: Can I use Fight or Flight after Riot Blade to make it easier to fit
      both Goring Blades? (Fast GCD Rotation)
    answer: >-
      Fitting both Goring Blades into each standard FoF window is a high
      priority, but sacrificing a buffed GCD on a regular basis to make this
      easier is not a good practice outside of progression, and is only
      necessary if encounter mechanics force a major disengagement during Fight
      or Flight. 10 GCD FoF windows are weaker and can also restrict the usage
      of tinctures (and oGCDs, later in the fight).


      Instead, ensure your FoF timing is precise (always in the second half of the GCD cycle, not immediately after the previous GCD) and you aren't double-weaving during FoF with high latency (>100 ms). As long as you keep the GCD rolling, fitting 11 GCDs into FoF with proper timing is possible at GCD recast speeds as slow as 2.45 - 2.48, depending on latency and player consistency.
  - question: Should I save oGCDs for Fight or Flight?
    answer: >-
      Following the opener, every physical oGCD will naturally line up with
      Fight or Flight if kept on cooldown (but Intervene should usually be
      stacked and used twice in each FoF window). If downtime misaligns an oGCD
      with FoF, consider whether delaying the oGCD will cost a usage before the
      end of the phase. *Maximizing oGCD usages is almost always more important
      than fitting them into buffs.*


      For optimization, line up Circle of Scorn and Expiacion with multi-target opportunities whenever possible, and prioritize keeping uptime with Intervene during movement-heavy mechanics.
  - question: Why is Requiescat used early during Fight or Flight?
    answer: By making use of its 30 second duration, the 400 potency Requiescat oGCD
      can be used midway through FoF to catch party buffs. This has a side
      effect of also potentially gaining a Requiescat usage at an unknown kill
      time, as this may be repeated in every standard FoF window in full uptime.
      Note that spells are not used until FoF ends under normal circumstances.
  - question: Should I always use all 3 stacks of Sword Oath?
    answer: >-
      For the fast GCD loop: during Fight or Flight windows in full uptime, all
      3 Atonements should be used. However, only 2 out of 3 unbuffed Atonements
      need to be used per loop to line up FoF properly. The third unbuffed Sword
      Oath stack may be dropped without loss in many cases. Dropping an unbuffed
      Atonement is recommended when unfamiliar with encounter timings, or for an
      unknown kill time, to minimize long term rotational drift.


      (Note that a fourth Atonement should *NOT* be held for FoF in full uptime at level 90, due to potency and DoT timing changes compared to level 80.)
  - question: I lost uptime/made a mistake. How can I recover the rotation as
      efficiently as possible?
    answer: >-
      Paladin's rotation is deceptively easy to recover. As a general rule, the
      rotation can be fully reset by each Requiescat window as long as Fight or
      Flight and Requiescat don't drift apart (even if they must be used
      sub-optimally). Losses cannot be reversed, but ensuring personal buff
      windows do not desync from each other will prevent problems from
      compounding for the rest of the encounter.


      For unexpected single-GCD losses, the solution is simple: drop an Atonement so FoF and Requiescat don't get delayed. If the loss occurs during the FoF window, dropping an Atonement will also ensure that the next Goring Blade is still buffed by FoF. This Atonement can even be replaced with an instant cast Holy Spirit if Requiescat is active during FoF, as with a standard loop, but this will force the loop to be ~61 seconds long unless the Atonement is still used after FoF.


      For multiple-GCD losses (broken combos or long disengagements), the solution is to drop a Goring Blade combo at some point before the next Requiescat, because 3 Atonement/Holy Spirit usages are worth more than a full Goring Blade combo, if 3 GCDs must be sacrificed to prevent buff delays. Alternatively, dropping multiple Atonements with standard Goring Blade timing still works, but is less efficient.
authors:
  - nikroulah
---
> *Why is Circle of Scorn used immediately in the opener?*   

 Circle of Scorn is used before Fight or Flight in most openers and kept on cooldown in most phases for two reasons:

* Its short cooldown (25 seconds) is equal to the duration of Fight or Flight, meaning one CoS usage should always occur during FoF regardless of their respective timings, given full uptime.
* Its high DoT uptime (~60%) means that any delays are likely to cost ticks at the end of the phase, resulting in a potency loss overall.

Circle of Scorn should only be delayed in an optimized setting to line up with buffs and/or for an extra usage in tinctures if it is guaranteed to not lose ticks.

> *Can I use Fight or Flight after Riot Blade to make it easier to fit both Goring Blades?*

Fitting both Goring Blades into each standard FoF window is a high priority, but sacrificing a buffed GCD on a regular basis to make this easier is not a good practice outside of progression, and is only necessary if encounter mechanics force a major disengagement during Fight or Flight. 10 GCD FoF windows are weaker and also limit the optimizations you can do with your rotation, such as fitting four Atonements into FoF (bot_spam !faq pld4atone).

Instead, ensure your FoF timing is precise (always in the second half of the GCD cycle, not immediately after the previous GCD) and you aren't double-weaving during FoF with high latency (>100 ms). As long as you keep the GCD rolling, fitting 11 GCDs into FoF with proper timing is always possible at recommended skill speeds, regardless of latency.

> *Should I save oGCDs for Fight or Flight?*

Following a standard opener, every physical oGCD will naturally line up with Fight or Flight if kept on cooldown (but Intervene should usually be stacked and used twice in each FoF window). If downtime misaligns an oGCD with FoF, consider whether delaying the oGCD will cost a usage before the end of the phase. Maximizing oGCD usages is almost always more important than fitting them into buffs.

For optimization, line up Circle of Scorn with multi-target opportunities whenever possible, use Spirits Within earlier in the opener if necessary to avoid lining it up with incoming burst damage, and prioritize keeping uptime with Intervene during movement-heavy mechanics.

> *Should I keep Goring Blade up at all times?*

Goring Blade should be applied every eight or nine GCDs in a full-uptime situation to maximize the potency of each usage. However, if downtime will occur immediately after Royal Authority (and cause Atonement usages to be lost), it is usually preferable to skip the previous Goring Blade and use Royal Authority earlier instead, because three Atonements are worth more than a Goring Blade combo.

Whenever downtime is involved, case-by-case adjustments to the rotation are recommended to avoid using inefficient Goring Blade combos which would prevent the use of Atonement (if Royal Authority must also be used) or Holy Spirit (if Requiescat is available).

> *I lost uptime/made a mistake. How can I recover the rotation as efficiently as possible?*

Paladin's rotation is deceptively easy to recover. As a general rule, the rotation can be fully reset by each Requiescat window as long as Fight or Flight and Requiescat don't drift apart (even if they must be used sub-optimally). Losses cannot be reversed, but ensuring personal buff windows do not desync from each other will prevent problems from compounding for the rest of the encounter.

**Atone:** For unexpected single-GCD losses, the solution is simple: drop an Atonement so FoF and Requiescat don't get delayed. If the loss occurs during the FoF window, dropping an Atonement will also ensure that the next Goring Blade is still buffed by FoF. The leftover Atonement should then replace a Holy Spirit during the Requiescat window, if possible, due to its higher potency and shorter recast time.

**Goring:** For multiple-GCD losses (broken combos or long disengagements), the solution is to drop a Goring Blade combo at some point before the next Requiescat, because three Atonement/Holy Spirit usages are worth more than a full Goring Blade combo, if three GCDs must be sacrificed to prevent buff delays. Alternatively, dropping multiple Atonements (or forcing multiple Atonements into Requiescat) with standard Goring Blade timing still works, but is less efficient.

> *Why can't I fit 11 GCDs in Fight or Flight?*

The single most likely reason is that you aren't weaving Fight or Flight late into the GCD. As long as you are weaving FoF late and keeping the GCD rolling during FoF, 11 GCDs in FoF should be virtually guaranteed. With high latency (100+ ms), multiple double weaves during FoF can cause the 11th GCD to be pushed out of FoF.

> *I'm disengaging from the boss, should I use Shield Lob?*

No. If Shield Lob would be mid-combo, do not Shield Lob unless you would be away from the boss for so long that your combo would drop anyways (~6 GCDs), and even then, it is often preferable to rework your rotation so that Requiescat lines up with the disengage. Sometimes a hardcast Holy Spirit can replace an Atonement for short disengages.

> *When should I use Cover?*

Aside from cases where it would save someone from lethal damage, Cover is rarely used. It can be used in optimization settings to give party members more uptime—for example, by covering a knockback that would otherwise require your White Mage or Scholar to burn an instant-cast in order to weave Surecast.

> *Should I be using Clemency to help my healers?*

No. More often than not, your healers are in control of your HP, and can sometimes intentionally be letting your HP drop lower to get more value out of actions like Benediction and Essential Dignity, which become more powerful the lower the target's HP. Using Clemency can thus often be wasting a GCD and MP for essentially nothing. In a dungeon setting, as long as you are correctly cycling through and using your personal mitigation, your healer should have little trouble keeping you alive without Clemency.

> *How do Cover, Divine Veil, and Passage of Arms work?*

![](https://xiv.sleepyshiba.com/pld/assets/skill-cover.png)  
Covered damage calculations ignore the target completely, and are instead based on your own stats, shields, buffs, debuffs, and cooldowns as if you were the original target, with the exception of Hallowed Ground; Hallowed Ground has no effect on covered damage, but you are still immune to personal damage received by regular means while Hallowed Ground is active.

Any debuffs or knockbacks that would have been inflicted on the covered target are often applied on you instead (if the attack hits the entire raid, whether you get two debuffs/knockbacks or one overwrites the other is entirely up to the mercy of the devs). Some things go through cover, and there is no hard and fast rule to determine what goes through cover. As a general rule, enrage-type damage will go through Cover.

![](https://xiv.sleepyshiba.com/pld/assets/skill-divineveil.png)   
Upon using Divine Veil, you get a buff that has no effect unless you receive a GCD heal within the next 30 seconds. All healing spells with an on-hit potency and fairy Embrace will proc Divine Veil, but oGCD healing abilities will not.

Upon receiving a GCD heal, the initial buff on you is removed and all other party members within a 15y radius get a shield equal to 10% of your maximum HP for 30 seconds. This shield stacks with all other shields and will not be removed by additional healing, despite the misleading tooltip.

Divine Veil does not affect the Paladin directly in any way.

![](https://xiv.sleepyshiba.com/pld/assets/skill-passageofarms.png)  
Upon using Passage of Arms, you get a buff that blocks all incoming attacks (similar to Sheltron). This buff ends instantly when you stop channeling the ability. Attacking, moving, or using another ability will interrupt the channel. Most of the time, this part of the ability can be ignored; there is little reason to use Passage instead of Sheltron, and can require tricky timing to cover the desired damage while maintaining GCD uptime.

All other party members in an 8y cone behind you get a buff that reduces their damage taken by 15% for five seconds. This buff is applied even if the ability isn't channeled, but its hidden five second duration is refreshed whenever the server regen tick occurs while channeling (every three seconds on an independent background timer).

Passage of Arms can be channeled for up to 18 seconds if necessary, granting 20 to 23 seconds of party mitigation, depending on the alignment of the regen tick timer.

Passage of Arms snapshots your position and facing when its effects are applied, regardless of the client animation, which can make it appear to miss the party if you are moving or turning upon use (buffs will be displayed correctly on affected party members).