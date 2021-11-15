---
title: Red Mage Basic Guide
card_header_image: /img/jobs/rdm/rdm-basic-guide-1-.jpg
authors:
  - Balance-RDM-Staff
patch: "5.58"
lastmod: 2021-10-26T01:24:21.310Z
changelog:
  - date: 2021-10-26T01:24:41.469Z
    message: Created page
---

## Overview

The bare minimum to playing Red Mage is simply building your Mana to 80|80 and then unleashing your melee combo with a powerful finisher.  The core rotation of the job has not changed very much since its inception in Stormblood, and if you are already familiar with the fundamentals of the job you may wish to focus on the 5.x changes and additions to the job section of the guide. 

At its base, Red Mage has a fairly straightforward rotation, making it a very attractive pick for new players.  However, Red Mage has a surprising amount of hidden depth when it comes to optimization and an awful lot of thought is involved when trying to play at a high level.  This guide will show that there is definitely much more to optimizing Red Mage than your basic ABCs.

The overall aim of this guide is to offer generally applicable principles for good play - as such, there will be rare scenarios where the optimal solution runs contrary to what the guide says. **We will not be covering edge cases, rather, you are welcome to discuss specific scenarios in #rdm_optimization.**

## Major Changes and Additions in 5.x

This section assumes you are familiar with Red Mage in Stormblood and will only highlight significant changes between Stormblood and Shadowbringers. Skip over this section if you are brand new to the job as everything will be covered in greater detail in the guide.

### Role Actions

All casters now only have access to four role actions, and they are automatically available without needing to slot them from your actions menu. 

Lucid Dreaming had its cooldown halved from 120s to 60s while suffering a potency nerf to its MP regen. It no longer has any effect on your enmity. 

Surecast now has a greatly increased cooldown, from 30s to 120s, meaning that you will no longer be able to nullify all knockbacks in old content. 

Swiftcast and Addle are unchanged.

### Enchanted Reprise

Enchanted Reprise is a 300 potency ranged mana spender that costs 5|5. It functions primarily as a semi on-demand movement tool with a couple of caveats, filling a previously missing niche in our kit.

### Scorch

An extension of our melee combo, Scorch simultaneously makes the melee combo more potent and punishes players more for causing major mana disparity with our white/black finishers. As Scorch has an instant cast time, it also functions as a minor buff to Red Mage mobility by extending our window of instants with the melee combo. Scorch cannot be assigned to the hotbar as a skill, and instead automatically replaces the Jolt II button when activation conditions are fulfilled.

### Acceleration

Acceleration is now a 20s buff with three stacks, each stack being consumed to guarantee a proc from your next Verthunder, Veraero, Verholy or Verflare. It completely eliminates the worst case scenario opener with zero procs which may force an additional set of spells before we can Manafication into melee combo. However, it introduces some new complications in general rotational usage, as you may not always be able to consume all three stacks of the buff before the timer runs out.

### Engagement

Engagement is essentially a weaker alternative to Displacement that doesn’t move you and has a shorter animation lock, allowing it to be double weaved normally. It shares a recast timer with Displacement and is meant to be used when Displacement’s backflip is too risky to execute during a fight. 

### Impact

Impact is now a **5s cast AoE spell, upgraded from Scatter** and therefore no longer part of the single target rotation. As a result, casting Jolt II will no longer proc Impactful, and you may find yourself casting Jolt II a bit more often in Shadowbringers. However, Jolt II’s potency has been boosted to compensate for the loss of Impactful. 

### AoE rotation

Our AoE rotation has changed significantly with the introduction of Veraero II and Verthunder II, as well as changes to Scatter and Impact’s cast time. Contrary to our single target rotation, Veraero II and Verthunder II are our short cast time spells meant to be hardcasted to proc Dualcast, while Scatter (later upgraded to Impact) have a base cast time of five seconds and should be Dualcasted/Swiftcasted. 

Enchanted Moulinet had its mana cost reduced to 20|20, allowing us to chain five of them with a full mana gauge (7x if using Manafication in between). 

## Balancing your Mana

Taken from https://na.finalfantasyxiv.com/jobguide/redmage/

The Balance Gauge displays the current amount of Black Mana and White Mana a Red Mage has accumulated. Black Mana is accumulated by casting Verfire, Verthunder, Verthunder II and Verflare, while White Mana is accumulated by casting Verstone, Veraero, Veraero II and Verholy. Jolt (II), Scatter, Impact and Scorch will generate both Black and White Mana.

![ManaBalanced](/img/jobs/casters/redmage/Mana_Balanced.png)

If the gap between Black and White Mana accumulation grows too large, the crystal at the top of the gauge will change color, and it will become more difficult to accumulate the lesser of the two.  This happens when the gap is at 31 Mana and more.  With that in mind, you’re going to want to try and keep your Mana as close to each other as possible.


![ManaBlack](/img/jobs/casters/redmage/Mana_Black.png)
![ManaWhite](/img/jobs/casters/redmage/Mana_White.png)


Your general rotation is very simple. If you have any procs (Verstone, or Verfire), hardcast them and then Dualcast the Mana you have less of (Veraero for White Mana and Verthunder for Black Mana). Do NOT Dualcast a Mana if you already have a proc for that Mana (don’t use Verstone -> Verthunder if you already have Verfire, don’t use Verfire -> Veraero if you already have Verstone). It is okay to Dualcast a higher Mana in this way so long as the distance between the two Manas does not exceed 30 and cause you go to unbalanced. When you run out of procs, use Jolt II. Once you have 80|80 Mana (80 White Mana and 80 Black Mana) you can then perform your melee combo. Finish your melee combo with a finisher that correlates with the Mana you have less of (Verholy when White Mana is lower and Verflare when Black Mana is lower), then use Scorch right after.

## Red Mage Damage Types

Red Mage has an interesting mixture of magical and physical damage in its kit. Of note, **all spells, as well as enchanted versions of our GCD weaponskills (melee combo, Reprise, Moulinet) deal magical damage** and are thus affected by our own Embolden and Manafication. 

**All of our damaging oGCDs (Fleche, Contre Sixte, Corps-a-Corps, Displacement, Engagement) as well as un-enchanted GCD weaponskills deal physical piercing damage** and are buffed by another Red Mage’s Embolden.  The damage still scales off of INT, so they will still be buffed by Tinctures of Intelligence.

## Red Mage Cheat Sheet (TL;DR)

The following is a list of rules and priorities that every Red Mage should follow.  The reasoning for each rule is explained throughout the guide, but for those that just want to know the hows and whats without the whys or just a refresher, here is what to do:

* **Managing Mana and Procs:**

  * Don’t Dualcast Veraero if you already have Verstone (with exceptions).
  * Don’t Dualcast Verthunder if you already have Verfire (with exceptions).
  * If both Verstone/fire procs are up, alternate between Verstone -> Veraero and Verfire -> Verthunder until one of the procs falls off.
  * Use Swiftcast to fish for additional procs.
  * Don’t imbalance your Mana (31+ difference) when fishing for procs.
  * **When to fish for a proc:**

    * If you are below 80|80 Mana and ran out of both Verstone and Verfire procs, fish for a proc.
    * If you are below 60|60 Mana and only have a single Verstone proc OR a Verfire proc, fish for the other proc.
    * If you are between 60|60 and 80|80 Mana and only have a Verstone proc OR a Verfire proc, do NOT fish for the other proc with swiftcast or acceleration.
  * Whenever there is downtime cast Vercure so that you may start with a Dualcasted spell as soon as the boss is targetable. Do this regardless of what procs you have available. When proccing Dualcast in this manner, be aware that **Sprint, potions, and food will ‘consume’ your Dualcast proc.** Take care to not accidentally drop your prepped Dualcast.
* **Acceleration Usage:**

  * Don’t forget Acceleration works on finishers!
  * If you are between 60|60 and 80|80 Mana and have both a Verstone proc AND a Verfire proc, do NOT use Acceleration. 
  * Do not use Acceleration right before entering a melee combo, as you will not have enough time to consume more than one stack of it. You may safely press Acceleration after using Enchanted Zwerchhau (or Enchanted Riposte if you are going into your melee combo with Swiftcast off cooldown and with no procs). The exception is if you are using Acceleration to guarantee a finisher proc, then you may safely press Acceleration the GCD before entering your melee combo.
  * Acceleration can generally be used on cooldown so long as you can get at least two useful procs from it. 
* **When above 80|80 Mana and Acceleration is on cooldown, fix your mana/procs:**

  * If you have a proc of your lower Mana, use it before going into your melee combo (i.e. 84|82 with Verfire proc, use Verfire -> Veraero to become 95|91 before going into melee combo and get another 100% Verfire from Verflare).
  * If you have both procs, dump the proc of your lower mana before going into your melee combo (i.e. 80|85 with both procs, use Verstone -> Verthunder to become 89|96 before going into melee combo and get another 100% Verstone from Verholy).
* **Don’t use Manafication when under 40|40**

  * As Manafication applies a magical damage buff now, you want to go into your melee combo right away to make sure the buff lasts until your hardest hitting spell, Scorch.
* **Embolden Usage:**

  * Best used in the opener at 5th GCD *or* 3rd GCD depending on your comp.
  * Line it up with Trick Attack or other raid buffs throughout the rest of the fight, regardless of how it lines up with your melee combo. You should *not* line up Embolden with Manafication at the cost of misaligning with raid buffs, but you may delay Manafication for specific cycles to set up a buff aligned double melee window.
* **Double Melee and Potion Usage:**

  * A double melee combo is when you build up to 95|95+ mana with Manafication available, execute a melee combo, build up to 40|40+ again and use Manafication into a second melee combo. The window for these two combos fits into the 30s duration of a potion and thus is often the best time to use one. 
  * Double melee combos can come about naturally as a result of phase timings in an encounter (it is quite typical for reopeners to be double melee combos), or as a result of purposely delaying a specific Manafication usage in favor of building up mana.

# Damage oGCD Usage

Your priority for oGCDs will be as follows:

**Fleche > Contre Sixte > Engagement/Displacement (if aiming for 4x uses per Manafication cycle) Corps-a-corps > Displacement (if aiming for 3x uses per Manafication cycle)**

**The first and most important thing you need to know about using oGCDs is to NEVER use them between your hardcast and your Dualcast.**  Hardcasted spells (Jolt II, Verstone, and Verfire) have a 2s cast while the GCD is 2.5s (assuming no spell speed).  This 0.5s gap between your hardcast and your Dualcast is NOT ENOUGH to use an oGCD without clipping your GCD.  All oGCDs tend to have an approximately  ~0.7s animation lock.  Using an oGCD after a hardcast would lock you out of your GCD for a minimum of 0.2s which will result in a DPS loss.  Realistically, it will always be more than a 0.2s lockout considering the time lost from taking your ping and latency into account.

**You CAN single weave any oGCD other than Displacement in your melee combo.**  The recast is 1.5s for Enchanted Riposte and Enchanted Zwerchhau.  All GCDs also have an animation lock of \~0.7s.  So using an oGCD \~0.7s after an Enchanted Riposte and then being animation locked for another \~0.7s will still free you up in time to use Enchanted Zwerchhau on the GCD (\~0.7s + \~0.7s = \~1.4s, less than 1.5s).  It’s a very tight window and you are likely to very slightly clip without perfect ping, but it is still a gain to do so.  Enchanted Redoublement has a 2.2s recast, meaning you can still double weave any oGCD other than Displacement (\~0.7s + \~0.7s + \~0.7s = \~2.1s, less than 2.2s). **Double weaving after Enchanted Redoublement is just as tight a window as single weaving after Enchanted Riposte and Enchanted Zwerchhau.**

**Displacement has a significantly longer animation lock than any other oGCD and CANNOT be double weaved with any other oGCD without clipping your GCD.** It also CANNOT be single weaved after Enchanted Riposte and Enchanted Zwerchhau (even if your back is against a wall and you stay in melee range, you will still clip) but it CAN be single weaved after Enchanted Redoublement.  

Engagement shares a recast timer with Displacement. What this means is that using either Engagement or **Displacement will put both skills on cooldown**, so you will have to choose to use only one of them every 35s. Manafication will reset both of their cooldown timers. Here are the main differences between them that will factor into whether you’ll choose one over the other:

| Engagement                                | Displacement                                                   |
| ----------------------------------------- | -------------------------------------------------------------- |
| 150 potency                               | 200 potency                                                    |
| **CAN** be double weaved without clipping | **CANNOT** be double weaved without clipping                   |
| Keeps your character in place             | Flings your character back 15 yalms from where you were facing |

Essentially, Engagement is an alternative to Displacement that trades potency for safety. **You will generally be leaning heavily on Engagement during prog** when heal timings and mechanics are unfamiliar, as Displacement runs the real risk of missing critical healing, mispositioning for the next mechanic or simply stylish death via falling. Note that displacement’s backflip direction is based on **your character’s facing towards the center of your target’s hitbox.** This can result in some surprising backflips on targets with gigantic hitboxes.

Even after prog, you may opt for 100% Engagement usage as four Engagements between Manafication cycles are equal to three Displacements in terms of potency, which is generally how many Displacements we expect to get between Manafication cycles. Four Displacements may be possible with delayed Manafication cycles, but is generally considered an overly-ambitious choice due to there being fewer windows to use Displacement vs Engagement. Instead, a more practical optimization involves replacing one (or more) of the four Engagements with Displacements. 

### Enchanted Reprise

Enchanted Reprise is a **ranged magic weaponskill** that deals 300 potency at the cost of 5|5 mana. It is not part of our enchanted melee combo. Its major purpose in our rotation is to serve as a **GCD uptime maintenance tool** – to keep the GCD rolling when casting is impractical. It can be used during continuous movement heavy sections that Dualcast windows (and Swiftcast) may not be enough to cover, or to replace an otherwise cancelled cast right before a boss becomes untargetable. 

In terms of potency per second it is close to regular casting, but the mana cost to it can lead to delayed melee combos depending on the situation. That’s why in general, it is best used as a **substitute or emergency tool** – valuable for keeping uptime during progression, but once comfortable with a fight, we aim to use it as little as possible unless mechanics force it. 

Other than movement, there are other niche situations where Enchanted Reprise can be used, such as mitigating OGCD drift, or getting more weave slots if too many cooldowns come up at once. But this type of use is reserved more for advanced play and involves a lot of fight-specific considerations. 

Note that in full uptime situations we generate enough excess mana in between Manafication usages that we can afford to use two Enchanted Reprises per cycle without delaying our Manafication timings. 

Unenchanted Reprise is a **melee** weaponskill that does physical damage, and should never be used.

## Manafication Usage

Manafication’s function in Red Mage’s rotation is twofold: a mana generation tool and a magical damage buff. As Manafication applies a 5% magical damage buff for the next 10s, it is imperative that you go into melee combo right away so the buff covers the entirety of your combo, including Scorch. If you’re having trouble landing Scorch under Manafication’s buff, whether due to ping or other issues, you can try to mitigate the issue by weaving Manafication in the second oGCD slot to give yourself a little bit of leeway.

**Do not use Manafication under 40|40 mana.** In a full uptime situation that should generally not happen without deaths or multiple Verraises, but in the event that Manafication comes up while below 40|40 mana, hold onto it until you have enough mana to go into melee immediately after Manafication.  

**You can use Manafication above 50|50 mana, even if it means losing a guaranteed proc and overcapping a small amount of mana.** Note that you gain the same amount of mana whether you use Manafication at 40|40 or 60|60, so you should prioritize keeping Manafication on cooldown instead of fixating too much on the small amount of mana overcap. The correct solution becomes more nuanced when Manafication comes off cooldown at higher mana levels like 70|70, and requires a case-by-case inspection on whether that scenario can be avoided with better rotational uptime, or something that can be utilized to build towards a double melee pot window. 

Generally, after following the opener, you should keep Manafication on cooldown as strictly as possible, ignoring that you may overcap mana when you hit it. Corps-a-corps can be used three times between casts, and held for a cumulative 30 seconds. Displacement/Engagement can be used four times between casts if you can avoid holding it for a cumulative five seconds, but failing this, do not stress, and instead welcome the extra 35 seconds that you can hold the casts without losing a use. 4 Engagements = 3 Displacements in terms of potency, so consider what is more likely for you to execute, and where you can get an extra Displacement if you try for four. Due to the way it aligns with your melee combos, you are unlikely to get more than one additional Displacement by this method.

**You may opt to intentionally delay Manafication for specific cycles in your rotation if it does not cause you to lose an entire melee combo.** Usually this is done to create a double melee window under potions and buffs. As Manafication doesn’t line up naturally with major buff windows when used on cooldown, setting up a double melee window can involve delaying Manafication by 20s or more for a given cycle.

## Managing your procs

The core of Red Mage optimization revolves around hardcasting Jolt II as little as possible.  You have two spells that replace Jolt II but can only be used when under the effect of procs: Verstone and Verfire. Using Verholy/flare at the end of your melee combo and Dualcasting Veraero/thunder are your primary ways to fish for Verstone/fire procs, but there are a few more ways to fish for these procs.

### Swiftcast Usage

Use Swiftcast to instantly cast Veraero/Thunder. Red Mage is fairly limited in instants, so **your primary use of Swiftcast will be holding it for when you have to move for mechanics that don’t line up well with your Dualcast in order to maintain uptime.** Otherwise, Swiftcast will always be a net DPS gain no matter how you use it due to how much stronger Veraero/thunder is, but you’re mostly going to want to **use Swiftcast to extend movement windows,** meaning you likely won’t be using it exactly on cooldown. 

The drawback to this is that with every Swiftcast use, your Dualcast and hardcast windows are swapped, causing oGCDs to drift as they may now come off cooldown during a hardcast window. While this may not always be an issue, it can lead to lost usages for fights with short phases.  

### Efficiently fishing for procs when below 80|80

* Whenever there is downtime cast Vercure so that you may start with a Dualcasted spell as soon as the boss is targetable.
* Don’t imbalance your Mana when fishing for procs.
* Don’t Dualcast Veraero if you already have Verstone (except when fixing procs before going into melee).
* Don’t Dualcast Verthunder if you already have Verfire (except when fixing procs before going into melee).
* If both Verstone/fire procs are up, alternate between Verstone->Veraero and Verfire -> Verthunder until one of the procs falls off.
* If you are below 80|80 Mana and ran out of both Verstone and Verfire procs, fish for a proc.
* If you are below 60|60 Mana and only have a single Verstone proc OR a Verfire proc, fish for the other proc.
* If you are between 60|60 and 80|80 Mana and only have a Verstone proc OR a Verfire proc, do NOT fish for the other proc with swiftcast or acceleration.
* If you are between 60|60 and 80|80 Mana and have both a Verstone proc AND a Verfire proc, do NOT use Acceleration.

The reason why we do not want to fish for procs if we already have one or don’t use Acceleration if we already have both when between 60|60 and 80|80 Mana is because we do not want to go over 80|80 Mana with both Verstone and Verfire procs.  Going into the melee combo with 2 procs will cause one of our procs to be overwritten by the 100% proc chance from Verholy or Verflare, thus negating the proc we just gained.  Of course, if we get really lucky with proc RNG this can happen regardless, but we should make a conscious effort to avoid this situation as much as we can.

### Handling procs when above 80|80

#### Having Either Verstone OR Verfire

If you have a Verstone proc while White Mana is higher, or a Verfire proc while Black Mana is higher, go ahead and dive right into the melee combo and get your second proc from Verholy/flare.  However if you have a Verstone proc while White Mana is lower, a Verfire proc while Black Mana is lower, or either proc while White and Black Mana are equal, then use the proc and Dualcast the opposite Mana before going into the melee combo.  By freeing up the proc space of the lower Mana you are ensuring a proc gain from the 100% proc chance from Verholy/flare.  This can be referred to as “fixing” your Mana before going into the melee combo.

#### Having Both Verstone AND Verfire

If you have both Verstone and Verfire procs while above 80|80 Mana, you will want to “dump” one of your procs. To dump a proc, use the proc for which you have lower Mana of, and then Dualcast the Mana you have higher of. The proc chance from your Dualcasted spell will be wasted (dumped), but you can now pick up another proc from your Verholy/flare after the melee combo.

#### Having Neither Verstone NOR Verfire

Most of the time if you have neither Verstone nor Verfire procs and are above 80|80 Mana you can go right into your melee combo and gain a proc from your finisher.  However if your White and Black Mana values are equal, you are NOT guaranteed a proc from Verholy/flare.  If you have Acceleration, you can go into melee right away and use Acceleration to guarantee a proc from your finisher. If you don’t, you will want to uneven your Mana before going into the melee combo, either by swiftcasting Verthunder/aero, or doing a Jolt II -> Verthunder/aero pair. However, if you cannot afford to delay your melee combo by a GCD without the boss dying, or due to mechanics, go into melee right away and forfeit the guaranteed proc.

#### Acceleration Usage on Finishers

Sometimes your Mana is too high and you are unable to fix your Mana without wasting some of it. For example, you have 98 White Mana and 90 Black Mana and have a Verfire proc. You can avoid having to waste anything if you have Acceleration up. Use Acceleration and guarantee a finisher proc from the higher mana. There are some rules with how Verholy/flare interact with Acceleration.

* If you have equal White and Black Mana and use either finisher, Acceleration will be consumed and guarantee a proc from whichever finisher you use.
* If you have more White Mana than Black Mana and use Verholy, Acceleration will be consumed and guarantee a proc from Verholy, and vice versa with higher Black Mana and using Verflare.
* If you have less White Mana than Black Mana and use Verholy, Acceleration is NOT consumed. You can then use Verstone->Verthunder and get a Verfire proc from your Acceleration.

This is a pretty nifty trick that every Red Mage should utilize. Just make sure that your White and Black Mana are no more than nine Mana apart if you’re going to force a proc of the higher Mana with Acceleration, otherwise you will go Unbalanced. **You go Unbalanced once your White and Black Mana are MORE than 30 apart.** Exactly 30 apart is still okay.  This means that even if your two Mana are equal when forcing a proc from Verholy/flare with Acceleration, you can still comfortably use that proc without going Unbalanced, since 21 from the finisher and then nine from the proc will leave you at exactly 30.

## Potion Usage and Double Melee Windows

Fleche has a 25s cooldown, meaning you can fit it twice inside a 30 second potion.  We do this in the opener, but it is also a good idea to try and do this with potions mid-fight so long as you are not holding on to Fleche for more than ten seconds.  The best use of a pot window is getting two Fleches and two melee combos + finishers inside it.  In order to get two melee combos inside your pot window, you’re going to need Manafication up and build up to 95|95+ Mana before using your pot.  This will allow you to get to the 40|40+ range and use Manafication to get another melee combo off before your pot falls off.  Ideally, the first Melee combo will also be aligned with raid buff windows (which includes your own Embolden) to maximize potency gain from your pot.

## Embolden Usage

Your own melee combo will not align particularly well with Embolden unless you are intentionally delaying Manafication for a given cycle, but you will want to use Embolden on cooldown to line up with raid buffs such as Trick Attack, Technical Finish, Divination, etc. In order to ensure everything lines up well, coordinate with your raid members on what point of the fight you want to all simultaneously use your buffs. In the opener, certain jobs prefer 3rd GCD Embolden, while others might prefer 5th GCD. We offer both options in the opener section.

## AoE Rotation

4+ Targets: Use Veraero II/Vethunder II, followed by Impact, while weaving your direct damage oGCDs in as necessary (ideally target the highest health or most threatening mobs of the pack). If you have Manafication or Embolden ready or coming off cooldown soon, endeavor to maximize value for these abilities, if you think the pack will last long enough.

In the case of Manafication, you will want to build up 50|50 or greater gauge before using it, to get a full five Moulinets under the buff, and ideally Swiftcast Impact at the end. For Embolden, try to build up to 100|100, for a similar reason. If you have both, you can build to 90|90 or more before using Embolden, Moulinet twice, Manafication, then Moulinet five more times followed by Swiftcast Impact.

If you are going for maximum efficiency, do not sit on Embolden or Manafication overlong just to set up this burst. Your party will benefit from more Embolden casts throughout the fight or dungeon, and you will benefit from more Manafication casts.

Three Targets: When facing three targets, Moulinet’s value consideration changes enough that rather than use it whenever it is ready, you should hold it until you are near to capping your gauge (above 90|90), and only use it to keep from overcapping, or if you have buffs such as Embolden or Manafication up.

Two Targets: Against two targets, Jolt II is minorly more powerful than using your shortcast AoEs. Alternate between Jolt II and Impact (consuming any Verstone and Verfire procs you started with if available) and use melee combo when at sufficient mana levels. 

## Openers

**What do the numbered notations in the opener names mean?**

The first number listed in the names for each opener refers to the GCD we use Embolden on, and the second refers to the GCD we start melee combo on. For example, a 5-10 opener will have Embolden in the oGCD window after the 5th GCD, and the melee combo will start on the 10th GCD.

**Why are there two different timings for Embolden?**

Due to Battle Litany, Chain Stratagem, and Technical Step historically being used earlier, and the changing of Trick Attack timings due to its rebalancing, most party compositions will benefit more from an earlier Embolden, allowing more of the party’s burst to fit within new buff windows. Using Embolden on the 3rd GCD is the standard now, but certain jobs may prefer 5th GCD Embolden.

Jobs that prefer 3rd GCD Embolden: GNB, WAR, NIN, DRG, MCH, DNC*
Jobs that prefer 5th GCD Embolden: PLD, DRK, SAM, MNK, BRD, RDM

\*For comps including dancer, consider switching Fleche and Embolden oGCD positions in the opener for an earlier Embolden timing to catch Technical Finish damage.

**What if I have procs or 50|50+ mana before Manafication in the openers?**

Ignore the procs and potential mana overcap and press Manafication at the specified oGCD slot. Starting the melee combo at a specific GCD is far more important than wasting a proc/a small amount of mana in the opener.

**What about Swiftcast?**
Using Swiftcast in the opener may not always be the correct play due to the effect it has on your GCD alignment by swapping your dualcast and hardcast windows. Depending on the fight, it may lead to poor alignment with mechanics early on in the fight, or in cases of short phasing, loss of oGCD usages due to abilities coming off cooldown in the middle of a hardcast window. We have opted to exclude Swiftcast from general purpose openers, instead leaving the first usage of swift as an encounter specific decision. 

Note that even in fights where an opener Swiftcast is the correct choice, Swiftcast should be held until after the second Fleche for x-8 openers in order to get two Fleches under potion.

**What about Displacement after the melee combo?**
The openers are designed to set up for a 4x Engagement cycle, which allows 1-2 of those Engagements to be replaced with Displacement during optimization. If you’re not comfortable with aiming for 4x Engagement cycles and instead would prefer 3x Displacement, forego the post Manafication Engagement use in the openers and instead replace it with a Displacement following Enchanted Redoublement.

### x-8 Openers

* These openers take advantage of Acceleration’s changes to guarantee us an earlier melee combo, whereas before we had to rely on proc luck.
* Gets more of the opener melee combo under buffs.
* Due to the lack of weaving windows for this opener, it requires using Engagement over Displacement, accepting the potency loss in order to gain potency from other places.

![Opener3-8](/img/jobs/casters/redmage/Opener_3-8.png)
![Opener5-8](/img/jobs/casters/redmage/Opener_5-8.png)


### x-10 Openers

* These openers are modified versions of the 5.x standard opener, maximizing mana generation and cooldown usage. 
* The extra mana generated due to an extra Dualcast pair being doubled by Manafication allows for more uses of Reprise per cycle, as well as accelerating your mana generation towards the second combo.

![Opener3-10](/img/jobs/casters/redmage/Opener_3-10.png)
![Opener5-10](/img/jobs/casters/redmage/Opener_5-10.png)

### Addle Openers

All Eden’s Verse savage fights start with a heavy magical raidwide during our opener, and you may be asked by your healers to Addle it. In which case, use one of the modified 3-10 or 5-10 openers below that delays your initial Corps-a-Corps usage in favor of fitting Addle. This is especially crucial when progging E8S at low iLvls, as the opening Absolute Zero hits for around 140k unmitigated on physical DPS. 

![Opener3-10Addle](/img/jobs/casters/redmage/Opener_3-10_Addle.png)
![Opener5-10Addle](/img/jobs/casters/redmage/Opener_5-10_Addle.png)