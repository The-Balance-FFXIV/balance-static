---
title: The Epic of Alexander (Ultimate) RDM Guide
card_header_image: /img/rdm-fight-tips.jpg
authors:
  - cyclopsdragon
  - lemoncobra
  - nmemories
  - Balance-RDM-Staff
patch: "7.31"
lastmod: 2025-09-26T16:57:23.956Z
changelog:
  - date: 2024-01-25T14:10:53.134Z
    message: Created page
---
# Introduction

Due to damage scaling in Endwalker and the potential for using fully synced gear, DPS checks in The Epic of Alexander are, on the whole, not extremely tight. Your primary concern for DPS will be the Trio Enrage at the end of Alexander Prime, but with fully synced gear options, phase DPS checks are fairly lenient.

At level 80, you can fit two full melee combos under Embolden, and this should be your goal whenever possible. There can be some variance in phase kill timings, but if your Manafication is aligned with your buffs, you should always be able to get double a melee combo under each Embolden after the opener.

Strictly speaking, it is a slight gain to use Embolden after Enchanted Riposte, then use a Swift/Accel long GCD after the second Scorch. This is the ideal combo, but depending on your instant usage and oGCD alignment, it may not be possible at a given buff window for you. You should aim to do it whenever possible, but it is not an expectation.

Please note that any points made under “Further Optimization” sections should be ignored unless you have already cleared and are very comfortable with the fight, as these are small optimizations not meant for your first time learning the fight.

For brevity's sake, please refer to the abbreviations of boss names and phases below:

* LL or P1: Living Liquid
* BJ/CC or P2: Brute Justice/Cruise Chaser
* AP or P3: Alexander Prime
* PA or P4: Perfect Alexander

## Gearing and Relic Stat Allocation

If you're bringing a Shadowbringers relic into this fight, the maximum stat value for your weapon at this fight's item level sync is 184. You should allocate as much Crit as possible while not going above the highest stat breakpoint you can hit, then allocate the rest into Det and DH according to your gearset, wasting as few substats as possible.

Your ideal GCD speed for this fight is 2.50, as phasing and boss untargetability mean that you won't really feel the 0.2s of oGCD drift from each melee combo. However, if you are using synced gear or simply want a slightly faster speed, any speed from 2.50 to 2.48 is perfectly fine. If you want to play at 2.49, use gear with no SpS and allocate ten points from the ShB relic into Spell Speed. If you don’t have the ShB relic, simply pick a weapon with Crit and either Det or DH, at iLVL 595 or above.

In terms of gear, any gear pieces at iLVL 595 and above will sync down to cap both substats. You can construct a completely functional gear set by picking pieces with Crit as one of the two substats and Det/DH as the other substat, roughly balancing the two. You can see a sample gearset using the ShB relic below:

![Weapon: Blade's Temperance - 153 DH, 180 Crit, 135 Det. Head: Augmented Credendum. Chest: Augmented Credendum. Hands: Ascension. Legs: Ascension. Feet: Augmented Credendum. Ears: Ascension. Neck: Asphodelos. Wrist: Ascension. Ring 1: Ascension. Ring 2: Purgatory. Food: Baked Eggplant.](/img/rdmtea1.png "Example RDM TEA Gearset")

Additionally, the Intelligence gained from potions caps at Grade 6 Tinctures. However, substats gained from food do not cap yet, so you should use the best food available to you.

It is also possible to trade out accessories for iLVL 470 Edengrace or Augmented Deepshadow accessories, and head/hands/feet for iLVL 475 Shadowless or iLVL 470 Edengrace or Augmented Deepshadow pieces, for very small DPS gains, at a slight HP cost if the piece you use is iLVL 470. The pieces you would choose to do this will depend on gear itemization, prioritizing pieces with Crit and avoiding pieces with Spell Speed. However, the itemization, desired melds, and relic stat distribution change whenever new food is added, and the Shadowless and (to a lesser extent) Edengrace pieces can be more of a hassle to get. As such, a “maximum theoretical damage” set will not be tracked here.

## Embolden Usage

Unless your group is skipping dolls in P1, buffs will always be used in the opener and the BJ/CC reopener, as well as three times in PA. However, in the middle, there are two general schools of thought when it comes to buff usage, which are generally seen as prog-safe versus clear-ready. You should make sure everyone is on the same page before committing to one of these two timelines. There are advantages and detriments to each alignment.

Note that this guide will not cover doll skip timings and optimizations, and is more for general progression or party finder-friendly optimization.

### Clear-ready option

The clear-ready option is to use buffs off cooldown as much as possible, buffing at Gavel in BJ/CC, then on cooldown after Inception in AP, then partway into Trio Enrage in AP. 

Advantages to buffing off cooldown:

* Gains one additional use of buffs
* A second set of buffs are used when both BJ and CC are able to be cleaved, leading to improved damage

### Prog-safe option

The prog-safe option is to hold buffs at Gavel, instead using them after Timestop in AP, then at the start of Trio Enrage.

Advantages to holding buffs:

* For groups which struggle to handle Trio Enrage before the party is killed by J-Waves, this option provides faster damage to take BJ and CC out quicker
* You are not required to hold damage during AP enrage in order to have buffs available for the PA reopener

Ultimately, in a static you should decide based on the needs of the group, but in PF you should follow what others are doing.

## Manafication Usage

How you decide to use Manafication will depend on your group's buff alignment, your group’s killtimes, and your rotational preference.

### Aligning Manafication with raid buffs

In general, aligning Manafication with raid buffs is the default because it is much easier to execute, is less sensitive to killtimes, and the fight currently has lenient DPS checks. The guide will be written assuming this approach as the default.

### Rushing Manafication

That said, from an optimization perspective, there can still be an overall damage gain to rushing Manafication. Generally, you lose damage in P2 due to being de-synced with buffs (more so if using the split BJ/CC strategy as you will miss out on two combo finishers doing cleave damage), but gain an additional Manafication usage in P3, and the net damage gained from a full additional combo’s worth of mana will usually outweigh that to an extent.

However, the main challenge of rushing Manafication is how things change depending on P1 and P2 killtimes, with a risk of major overcapping (hence nullifying the benefits). In general, when rushing Manafication, it should re-align with raid buffs in P3, and you should be able to avoid overcap. However, if your P1 and P2 killtimes are too fast, you will end up with Manafication coming off cooldown when the boss is untargetable during Inception, resulting in significant overcap.

Too fast is generally defined as **killing LL before the Protean 2 set of mechanics resolves, and killing BJ/CC around or before Double Rocket Punch**. In this scenario, it is not worth rushing Manafication.

As of Dawntrail, you will need to be able to activate Manafication and spend the three melee hits before Living Liquid dies. You may need to adjust your opener to place Manafication earlier in order to accomplish this. Thankfully, with the changes to potion animation lock, you can easily weave Manafication in the potion weave window.

### Manafic rush timings

If your killtimes are not too fast, your Manafication uses should fall at these times for P1-P3:

* P1: Opener
* P1: After second Hand of Parting
* P2: After enumerations/Before Water 2/Lightning 2
* P3: Post-Timestop/Before Inception
* P3: After Inception/Pre-Wormhole
* P3: Trio Enrage (likely towards the end of buffs)

Your Manafication will re-align with 2-minute raid buffs at either **P3: Pre-Wormhole** (if your P1/P2 killtimes are slow enough, close to the final mechanics of each phase), or **P3: Trio Enrage** (if your P1/P2 killtimes are “medium” speed, i.e. when the bosses are being pulled back together after Protean 2 in P1 and around or before Super Jump in P2).

Once you reach the final phase, you are now free to use Manafication aligned with your 2-minute buff window with no loss of uses. Depending on killtime, you should be casting Scorch between 22 to 23 times across the fight.

### Recommended normal combo timings to avoid overcap

Given that Red Mage desires to minimize the drift of their oGCDs and to not accidentally overcap when attempting to rush Manafication, there are advantageous times in which you can spend your gauge via normal melee combos. It is encouraged to use melee combos in certain places during P1 through P3 to prevent overcap on your gauge and keep your abilities rolling. Some suggested ranges for these specific phases are as followed:

* P1: Use an extra combo in LL (three instead of two) any time before Protean 2 finishes resolving to avoid overcap from the Manafication that is used at the end of this phase.
* P2: Enter into your initial 2-minute opener with one melee combo instead of a double combo. Use an additional combo anytime between the end of enumerations and before the resolution of Water 2/Lightning 2. Ideally, you want to leave P2 with around 40|40 mana.
* P3: Use an additional combo after Timestop and before Inception. It is possible to enter Inception with around 40|40 mana. There is room to spend another melee combo after generating enough mana with a Dualcast proc during downtime and up to casted 6 GCDs.

## Potion Timings

Potions should be aligned with **your first (P1 opener) and third (Gavel in P2 or after Timestop in P3, depending on your group) buff windows**, then used twice off cooldown in PA. Ideally, both potions in PA will be synced with buffs; however, if buffs are not ready at the start of PA, do not delay your potion, as faster PA killtimes will result in a loss of potion duration if your first potion is delayed. Note that Timestop is the latest you can use a potion without losing a potion use in PA, so it is not viable to use a potion after Inception instead of at Gavel.

If your group is doing Gavel buffs and your BJCC kill time is fast enough that they would die before your potion runs out, it can be beneficial to delay your second potion to Timestop, despite having it be desynced from buffs, to get the full duration of the potion on AP.

Similarly to level 90, you should aim to maximize potion value by doing three melee combos. At level 80, melee combos are only \~10.2s long (compared to \~12.7s at level 90) so you can fit three full combos under the potion. Additionally, due to phasing and boss untargetability, you should play around with pushing your uses of your damaging oGCDs around if this would allow you to get additional uses under a potion without losing a use. In an ideal scenario, you should get two uses each of Fleche, Corps-a-Corps (CaC), and Engagement per potion, as well as one use of Contre Sixte (C6).

## Vercure Usage

As with other fights in the game, Vercure can be used during downtime in-between phases and during downtime mechanics (Limit Cut, Timestop, Inception, Wormhole, and both Fate Calibrations). This can help with quick raising when needed, or to prepare a Dualcast for when the boss becomes targetable again, which gives you earlier weaves in your reopener and can reduce your Jolt II/Verstone/Verfire usage throughout the fight. In addition to this, in phases where the boss isn’t targetable and heavy raid damage is going out, Vercure can be used to assist your healers with healing wherever it may be needed.

Additionally, preparing a Dualcast during any downtime mechanic can allow you the opportunity to instantly raise a teammate who fails a mechanic, allowing potential recovery. This should be taken advantage of in all downtime mechanics, but keep in mind that if you want to have a prepared instant for the end of downtime, you will need to make sure that it won’t run out just before the boss becomes targetable again. You can do this by spending it on a Vercure with enough time to prepare it again.

## AoE for Mana Generation and Holding DPS

There are two spots in TEA where it is common for Red Mages to use AoE spells to generate mana and/or hold DPS, and a third situational one.

1. The first common spot is during Inception, as the True Heart can be attacked for resource generation, but is immune to all damage.
2. The second is after killing both BJ and CC during Trio Enrage, as groups that are using buffs off cooldown may want to wait until buffs have about 70 seconds left on their cooldowns to kill AP (which generally happens when the cast bar of Divine Judgement reaches the end of the “m”), to both open PA with buffs and gain resources for the reopener. For both of these instances, the suggested approach is to only cast Veraero II/Verthunder II, as these spells do noticeably less damage in single target scenarios but generate the most mana out of our regular GCDs (7 of white/black).
3. The third and situational use of AoE to generate mana is at the end of BJCC, if the second boss to die is in the middle of a mechanic when it dies (for example, if BJ dies during the Super Jump cast, it will stay active until after Apocalyptic Ray, giving you additional time to hit it). This cannot be depended on to happen every run, but you should take advantage of it when you can.

# Phase One: Living Liquid

The suggested opener for this phase delays your melee combo in order to land your two finishers after Liquid Hand appears. In most cases, it is not ideal to hold Contre Sixte to cleave both bosses, as you risk losing a use at the end of the phase, which deals equal damage and deals slightly less damage to LL, instead spreading the damage more evenly with Hand. However, if your kill time is fast enough that you would lose this use anyway, you can delay C6 until after your first finisher. This opener also sets up your Dualcast alignment to be able to easily do most of the rest of the phase's movements with only Dualcasts.

![5 seconds prepull Veraero. Verthunder, weave potion. Jolt 2 or proc. Veraero or Verthunder, weave Embolden and Swiftcast. Veraero or Verthunder, weave Fleche and Contre Sixte. Jolt 2 or proc. Veraero or Verthunder, weave Manafication and Corps-a-Corps. Enchanted Riposte, weave Engagement. Enchanted Zwerchhau, weave Corps-a-Corps. Enchanted Redoublement, weave Engagement. Verflare or Verholy. Scorch. Proc. Verthunder, Veraero, or Impact. Jolt 2 or proc. Verthunder, Veraero, or Impact, weave Fleche.](/img/rdmtea2.png "The Epic of Alexander Recommended Opener")

Note that your two instant GCDs after the melee combo can be Veraero/Verthunder or Impact depending on whether they would hit both Liquid and Hand. It is fairly rare to have tanks that will have the bosses together for both of these casts and should not be expected, so you should adjust based on the group. Given that most strategies involve splitting the bosses to bait Hand of Parting, it is more likely that you will get a cleave on the second Dualcast than the first.

Fleche comes off cooldown right as dolls appear, so you can choose between putting Fleche into Hand, or instead hitting your doll with it if you need to feed early. As noted in the opener image, you may find that you need to push it back one weave window to target your doll in time. If you do the recommended opener as written without pushing C6 back, it will come off cooldown two Dualcasts after your doll appears. You should switch targets to cleave Liquid/Hand, then resume targeting your doll.

Your doll has roughly 42.7k HP. Without Fleche, it will take an average of 5-6 GCDs to damage it below 25%; however, a double crit direct hit Dualcast has the potential to deal roughly 11k per hit, so in order to play safe, when your doll is below 45%, you should instead use your instant cast to cleave the bosses with Impact, then check your doll's HP before starting another Dualcast or moving to feed. Having a keybind to target your last target is invaluable in this phase.

Additionally, as you are the only magic DPS without a personal shield, you should ensure that you move slightly towards the middle after you pick up your doll and pull it outwards, as missing a heal can sometimes be fatal for you.

## Two Target Phases

Jolt II/Verstone/Verfire into Impact is optimal on two targets, and so should be used as our main filler spell combo whenever the bosses are pulled together. You should be actively checking the HP of both bosses (focus targeting Liquid is very helpful for this) and advising your party on if help is needed with balance, either via voice communications or in-game “target this enemy” markers.

## Protean Baits

The first set of Protean baits is the only movement in the phase that does not naturally align with our Dualcast window after using the recommended opener. To avoid overcapping, we need to do two melee combos in LL: one in the opener, and a second normal combo mid-way through the phase. This normal combo is best used during Protean 1 for movement.

To handle Protean 1 movement, you can use a combination of **your melee combo, Swift, and Accel**. At the earliest, you should start your melee combo by using a Swift/Accel GCD to shift your alignment into starting the combo three GCDs before the baited Proteans are telegraphed; this sets you up to Dualcast through the movement, then use Swift/Accel again to realign. At the latest, you should start your melee combo at the moment that the baited Proteans are telegraphed, sidestep the Proteans to dodge, then disconnect from the boss after Enchanted Redoublement. Even doing this latest timing, you have plenty of time to resolve this movement without the use of CaC or Displacement.

Be careful with your use of CaC after finishing your Protean movement, as using CaC as it comes off cooldown before Cascade can result in you eating a tether tank buster.

## Instant Usage

It is recommended to use both Swift and Accel at first Protean baits regardless of when you use your melee combo, as there is nowhere else in the phase where you might need them for movement. Using them here will give you more leeway on how to handle this movement.

Using Acceleration on Impact gains 100 potency over a normal Impact, and so every chance you get to use Acceleration on Impact is a good use.

## Addle Usage

In general, all mitigation should be a group discussion that takes party composition and healer preferences into consideration. So, while the advice for these Addle sections can be considered recommendations based on good value (e.g. total damage reduced) and Party Finder norms, it is still advisable to be flexible to your group’s requirements.

The most valuable time to use Addle during this phase is for the Splashes after the first Proteans, as it is rarely necessary on the opening Cascade due to pre-pull shields, and doll damage comes from the dolls. You will need to switch targeting to LL to place this Addle. Try to use it after the second Splash in order to catch the Cascade at the end.

Another potential use is during Protean 1 or Protean 2, if your group’s healing and mitigation in Splashes and Cascade is comfortable without your Addle there.

## Further Optimization

There is an alternate opener that assumes a GCD speed of 2.50. However, this opener uses both Swiftcast and Acceleration, and as such also offsets your Dualcast window for the entire phase, which changes the movement requirements for this phase.

![5 seconds prepull Veraero. Verthunder, weave Corps-a-Corps and Contre Sixte. Jolt 2 or proc. Veraero or Verthunder, weave Embolden and potion. Jolt 2 or proc. Veraero or Verthunder, weave Fleche and Swiftcast. Veraero or Verthunder, weave Manafication and Engagement. Enchanted Riposte, weave Corps-a-Corps. Enchanted Zwerchhau, weave Engagement. Enchanted Redoublement. Verflare or Verholy. Scorch. Proc. Verthunder, Veraero, or Impact. Jolt 2 or proc. Verthunder, Veraero, or Impact, weave Acceleration. Impact, weave Fleche and Contre Sixte.](/img/rdmtea3.png "The Epic of Alexander Pot Double Weave Opener")

The primary differences in movement arise during Protean 1 and Protean 2. If Acceleration and Swiftcast are utilized in the initial pot window for P1, the rotation can be aligned to the mechanics in a manner that where baits go out as you can keep your GCD rolling freely.

Protean 1 can be resolved and reacted to easily by either casting your GCDs or doing an additional melee combo between feeding dolls and the start of the mechanic. Since your melee combo is ten seconds long, with a GCD speed of 2.50, Protean 1 can be resolved by simply slidecasting out after the initial baits from Living Liquid, then slidecasting to your Protean Wave bait spot after the initial puddle drops.

Unlike Protean 1, the second protean will not be aligned to your GCD rolling if one instant cast is not used between the opener and Protean 2. One of Swiftcast or Acceleration should be used in order for the initial Protean baits to come out as your GCD rolls. As you go out, you can either use an instant Impact as you reach your Liquid Rage followed by a Dualcast pair, or begin with the Dualcast pair and then use an instant Impact as you move back in after the second set of baits.

# Phase Two: Brute Justice/Cruise Chaser

Depending on your LL kill time, you may enter this phase with anywhere from around 70|70 to 80|80 mana. Thus, you should open with a double melee combo using Manafication.

The recommended opener is to skip preparing a Dualcast and instead open immediately with your single-target melee combo, performing two melee combos and an Accelerated Impact. Depending on how quickly the tanks pull the bosses apart, you may be able to Swiftcast another Impact to cleave both bosses. If your group doesn’t allow for this, you can instead Swiftcast a Veraero/Verthunder. This Swiftcast doesn’t need to be immediate, but ultimately, you want to use both of your instant casts here for ideal Dualcast alignment for the rest of the phase.

You should perform your re-opener on Cruise Chaser and encourage your group to do the same (with the exception of Reaper, as it is an overall loss for Reaper to reopen on CC). This not only makes HP balancing easier, but also helps to account for the couple of scenarios where we are forced to perform our melee combo on BJ, further skewing the damage.

It can be highly beneficial to keep Dualcast active during Limit Cut whenever possible, in order to catch an emergency raise. Because you are opening the phase with a melee combo, you don’t need to worry about having Dualcast active when the bosses become targetable.

Your oGCD usage here will depend on your party's composition and buff timing, as well as your LL kill time, but in any case, two of your first three weaves should be Fleche and C6, to get their cooldowns rolling as soon as possible while prepping them for the next weave window. Many parties will buff as early as possible in this reopener to have as much time as possible cleaving both bosses while buffed: if this is the case, you can first weave Embolden, then Fleche, followed by C6 and Manafication, then begin dumping your stored CaC/Engagement charges. 

Note that with this buff timing, some groups that buff Gavel will choose to delay second buffs by two GCDs to once again better align buffs with the time where the bosses are able to be cleaved.

However, if you have a Dancer who is pre-stepping Standard Step during LC, or your group simply chooses to buff at the third GCD, you should weave Fleche and C6 first, then weave Manafication and Embolden after Redoublement, using your CaC/Engagement charges afterwards. Your first melee combo will not be under buffs, but if you delay it, your second set of finishers will not cleave both bosses, which is a greater loss.

## Movement and Nisi Passing

By doing the above reopener, your Dualcast alignment will be very convenient for the movement of the rest of the phase. You will be able to move immediately upon being hit by Compressed Water stacks to avoid being hit by the residual geyser, and you can move immediately after Photon for your first Nisi pass, then after enumerations resolve for your second Nisi pass.

## Melee Uptime

### Melee combo timings

There aren't any instances in this phase where a melee combo is extremely helpful for movement, as most of your movement is in short bursts. Therefore, your melee combo usage should be based around when you need to use them to avoid overcapping, and when you can actually be in melee range of a boss, as the nature of Nisis and geysers requires you to stand away from the bosses for much of the phase. Arguably the most convenient time to use a melee combo to avoid overcap is before or after the first Water/Lightning resolution, as for both debuffs, you will be passing by a boss to get to and from your destination, and saving it for much longer can risk overcapping. If you are first Lightning, you will need to perform this melee combo on BJ.

In Gavel, you may also have trouble initiating a melee combo depending on your Nisi and the placement of the bosses. Try to use your positioning to encourage the group to squeeze a bit tighter in the BPOG lineup to ensure that you can initiate a melee combo, but be wary of other players' movements to ensure that you don't cause a wipe by doing so. If you are far to the east in the lineup, you will be forced to initiate melee combos on BJ until Gavel resolves, so continue communicating the bosses’ HP differences if it looks like one is close to death.

### Corps-a-Corps and Engagement usage

CaC and Engagement are a bit trickier, as you will be spending most of the fight away from CC, and you will often have a melee standing between yourself and BJ. Ensure that you use all of your pooled charges during your melee combo after the reopener, then keep an eye on BJ to find opportunities where you can dump charges without overcapping. The most convenient times to do this are after second pass or after third pass, whichever one corresponds with the DPS not having the Nisi debuffs, so that you can dump your charges without risking a Nisi death. It is also possible to use CaC and Engagement on CC around third pass if you need to pass to OT, but just ensure that you don’t pass too early if you do this.

## Plasma Shield/Instant Usage

Due to us having cast times, you will want to target BJ as soon as you see CC start casting Plasma Shield to avoid dropping uptime when CC becomes invulnerable. Prepare a Dualcast on BJ, then switch to Plasma Shield for the second cast of the pair. You can then use Swiftcast and Acceleration to get a chance at an additional hit on the Plasma Shield without risking having your cast interrupted by its death.

## Addle Usage

If you used Addle on Splashes in LL, you will not be able to Addle the first Whirlwind in BJCC. With this in mind, the recommended usage of Addle is on the Water stacks, with the third one potentially being more valuable due to melees potentially missing the stack if positioning is off.

Note that you will need to switch targets to BJ in order to Addle this damage, and it should be applied at least three seconds before the debuffs fall off to ensure that it snapshots the damage. Alternatively, you can Addle CC for the second Whirlwind instead, directly after Plasma Shield.

## Resource Management

You will likely be approaching Gavel with close to max mana, and as such it is possible to overcap before the best place to use your melee combo for damage. However, this is a fine place to overcap, as the damage gained from cleaving both bosses with your finishers is enough to make up for the mana that you're losing. Note that if you are doing Timestop buffs instead of Gavel buffs, you can use Manafication after your second melee combo before your second set of finishers, then hold a third melee combo for Timestop if desired.

If the bosses reach 0.1% HP in the middle of an uninterruptable mechanic such as BJ’s Super Jump > Apocalyptic Ray combo, you can use AoE to build up mana before the phase transition.

## Further Optimization

If buffing during Gavel, it is possible to hold your second instant cast after Plasma Shield to optimize a double melee combo at Gavel by dropping Riposte from your Embolden in favour of an instant cast GCD at the end, resulting in a slightly stronger buff window. You should only do this if the resulting oGCD drift doesn’t cause a lost use of any oGCDs.

# Phase Three: Alexander Prime

Before Timestop, you should prepare an instant cast, either by using Dualcast during the cast or, if you are using a potion, by using Acceleration, as the potion will consume your prepared Dualcast. If you are using a potion at Timestop, you should use it after the cast bar ends, as soon as you see AP's wings start to move, as there are less than 30 seconds of targetable time before Inception, and using it here will catch all of your damage under the buff.

Ideally, you want two instants, three Dualcast pairs, and a single melee combo. Your priority for this short damage phase should be as follows:

* (If buffing at Timestop) Weave Embolden immediately after your instant GCD
* Use Fleche as early as possible to ensure two uses
* Use melee combos as they become available to enter Inception with less than 50|50 mana
* Use any available charges of CaC/Engagement to minimize overcap during Inception
* Use a Swift/Accel Veraero/Verthunder before the boss becomes untargetable to maximize damage, as there is only enough time for 12 normal GCDs

## Building Mana with AoE

During Inception, there is a period of eight GCDs where you can safely build up mana on the invulnerable True Heart, meaning that you can gain 56 mana by Dualcasting Veraero II and Verthunder II. Make sure you are standing far enough away that the Tetrashatters do not kill you before you start attempting to cast, as you will be out of range until the Tetrashatters resolve. With the standard marker set, it is safe to stand a step or two outside of the A/C marker, on the side closest to the wall.

## Post-Inception

You should prepare a Dualcast while waiting for Cruise Chaser cleaves to resolve, open with Veraero/Verthunder, then use two melee combos during this window. If you are buffing here, you should buff in your first weave window for buffs to come back as early as possible during Trio Enrage. You should also use Manafication as early as possible without overcapping, particularly if you are not buffing here so that it comes back as early as possible during Trio Enrage.

Aside from these considerations, your priority here should be the same as post-Timestop, with the exception that you can get an additional GCD here, so you should use both Swiftcast and Acceleration.

## Wormhole

It can be nice to use Vercure during Wormhole to ensure that healing before the stack goes well; however, strictly speaking, it is optional, and you should prioritize resolving the mechanic first and foremost. You can, however, prepare a Dualcast in order to use Verraise if someone dies during the mechanic. This is particularly useful if you are assigned a number from three to six, as you can move middle after the third dash and raise in the middle.

Prepare a Dualcast during the stack telegraph, weave Fleche and C6 in your first weave window, then Dualcast normally until Trio Enrage.

If you are rushing Manafication, it is likely that you will need a melee combo before the next buff window to avoid overcapping, especially if doing the Gavel buff pattern. You should try to save it for Trio Enrage if possible, but if you are coming out of Wormhole with more than 65|65, it is likely that you will need to use it here instead. You have another 13 GCDs here, so starting the melee combo after 11 GCDs will at least allow you to carry the finishers to Trio Enrage.

## Addle Usage

The most common and arguably most valuable Addle usage in this phase is on the Mega Holy raidwides after Wormhole. Some groups may request for Addle during JWaves instead, around when CC dies. If in a double caster composition, these two will be the expected uses. Technically speaking, you can also Addle the first tankbuster for free, but most tanks will use their invulnerability on this buster, rendering this pointless.

For mitigating Mega Holies, you should weave Addle late in your second weave window, either as the second weave of a double weave, or two thirds of the way through your weave window, to ensure that you catch both raidwides.

## Trio Enrage

You should aim to perform two melee combos right after using Embolden, regardless of your buff alignment. If doing the clear-ready buff timing, you’ll be buffing around three Dualcasts (six GCDs) after the Trio Enrage begins. If double comboing at this time will cause overcap, use the first combo prior to buffs and only do a single combo under buffs instead. This is because it is important to ensure you have gauge before PA.

Once both BJ and CC are down, your group may choose to intentionally lower their DPS in order to build resources, and in the case of groups using buffs off cooldown, this may also be necessary if you want to have buffs at the start of PA, as there are roughly 70 seconds between when the boss goes untargetable and when you regain control. Ideally, you want to have at least 81|81 going into the phase transition, assuming that you will have buffs at the start.

## Further Optimization

If you are assigned the crystal AoEs during Inception, you can take a spot towards the middle of the arena, sprint before it drops, then Dualcast on the heart the moment it spawns before running out to the safe spot for 14 additional mana. The heavy debuff from the orb puddles makes this unsafe to perform as a tether player.

# Phase Four: Perfect Alexander

As soon as you regain control in this phase, use your first potion and begin a melee combo. If Embolden is available, weave it as soon as possible, then C6, and then Fleche. You can delay Fleche in this manner because no matter when you weave it, it will not come off cooldown before Final Word forced movement occurs; this delayed use will still ensure that it is available as soon as you regain control, letting you send it immediately after an instant GCD if you get Stillness first.

If you are buffing immediately, aim for a triple melee combo. If you get Stillness first, your last GCD before stopping should be your second Verfinisher, whereas if you get Motion first, you should be able to finish your third melee combo, then hold your finishers until after Stillness.

If your buffs are not off cooldown at the start of the phase, your group may want to delay them until after Final Word forced march resolves (and Stillness, if it is second), but some groups will opt to still use them off cooldown. You do not want to delay your potion for buffs, as the boss may die partway into your second potion if you do. In the case of delaying until after Final Word, assuming your mana is not full, you can Dualcast once after your potion, start a melee combo, then weave Swift after Scorch. From here on, if Stillness is first, follow this sequence:

* Perform your prepared instant cast after Scorch, then respect Stillness
* Cast Verstone/Verfire after Stillness resolves, but before forced march resolves
* Use your Dualcast after Final Word to weave Accel
* Use your Accel to weave Embolden and potentially Manafication if needed

If Motion is first, follow this sequence:

* Weave Accel after your Swift GCD and cast a second instant
* Cast Verfire/Verstone to prepare a Dualcast before forced march
* Wait for Stillness to resolve, then use your prepared Dualcast to weave Embolden and potentially Manafication if needed

Regardless of what combination you get, you should be able to get two full melee combos under buffs in this manner, assuming you have the mana for it. If you enter the phase with less than roughly 130 total mana, you will only be able to get one full melee combo under buffs in this scenario, unless you do no melee combos under potion.

## Instant Usage

Swift and Accel can more or less be used off cooldown in this phase, or to prevent oGCD drift if needed. You may benefit from using them for Optical Sight movement, but it's not necessary. However, for the sake of safety, you may want to hold them after Fate Calibration Beta to be used for the first Almighty Judgement, as you will likely be tasked with using Addle for the subsequent Irresistible Grace stack.

## Melee Combo Usage

There aren't any mechanics in this phase where melee combos are particularly helpful for movement, aside from Almighty Judgement, but the first can be handled by instants and the second is during the second pot, where you are comboing anyway. Therefore, you should use as many combos as possible during buffs, and use them outside of buffs only to avoid overcap.

## Addle Usage

Your best uses of Addle in this phase are to cover both hits of Optical Sight at the start (use Addle around 2/3 of the cast, though it is more lenient than Megaholy from P3), and one of two Irresistible Grace stacks at the end. Covering the first tank buster instead of Optical Sight is also an option if your group requires it, but mitigating the second or third tank buster is not recommended, as they will lock you out of mitigating either of the Irresistible Grace stacks (which are much stricter mitigation checks).

For the Irresistible Grace stacks, the caster tends to be expected to Addle the first stack in Party Finder, but you should double check with your group which stack they want you to Addle.

## Fate Calibrations

As per usual, you will want to prepare a Dualcast using Vercure at the end of these downtime segments. If Fate Calibration Alpha gives you Stillness second, ensure that you prepare your Dualcast after it resolves. Additionally, it can be specifically helpful to use Vercure in Fate Calibration Beta, after you move to the wall and take your Super Jump or Shared Sentence, as healers may be quite spread out after the forced movement.

## Second Potion

Your second potion should be used as close to off cooldown as your weave window will allow; if you used your first potion before your first GCD, it will come off cooldown a bit before the second Almighty Judgement cast. This means that if you used buffs in your opener, your third uses of Embolden and Manafication should be delayed until after using the potion. Aim to get a triple melee combo under these buffs, using Embolden after the first melee combo. If a triple melee combo is not possible, Dualcast once after potting, weave Embolden, and do a double melee combo.

Congratulations on becoming a Perfect Legend!

## Further Optimization

Ordained Stillness is a mechanic that must be respected. However, its timing can be played around for the pot window as a limit for how many GCDs to use prior to resolving the mechanic. By knowing the exact number of GCDs you can use and still resolve Stillness, you maximize the total potency in this pot. With taking advantage of the enemy list and examining the castbar for Ordained Stillness, this pot window can be executed consistently with all other factors considered. One last important consideration is the use of mashing escape (or O/B on controller). Ordained Stillness checks for damage that is queued or registered near the end of its cast, and as such, auto-attacks can kill you. Using escape to untarget the boss to resolve Stillness is the best practice for this fight as a whole.

When discussing uptime in the context of resolving Final Word, it is predicated on the randomly chosen sequence of Stillness and Motion. Since Final Word randomly chooses Ordained Stillness or Ordained Motion first, this section describes the two separate timelines for this pot window predicated on Stillness first and Stillness second. This section assumes a GCD of 2.50 and having the ability to weave pots, as well as soft clipping your pot after Zwerchhau instead of using it instantly. While some drift is baked into the start of this pot window, it is critically vital to minimize all drift possible with low ping to yield the highest possible potency gains. Even respecting Stillness in the face of higher ping, potency can still be gained. However, since potions cannot be queued, your potion use timing may not be consistent, and you need to be careful to observe how large your soft clip is. In a Stillness-first scenario, if you observe it as being much larger than expected, it may be wise to forgo using Scorch before Stillness to avoid dying.

### Ordained Stillness first

For when Perfect Alexander casts Stillness first, you can execute two full melee combos before Stillness goes off, immediately detargeting the boss after Scorch. Since there is still uptime between Ordained Stillness and forced march, you can then get the initial Riposte, Zwerchhau, and Redoublement after Perfect Alexander finishes casting Ordained Stillness, before downtime occurs from the forced march. It is critically important to not react a moment sooner, as Ordained Stillness checks for abilities, weaponskills, and spells that were queued in during the end of the cast. For a visual timeline of this rotation with the mechanics, see below for an example image for Stillness first pot: 

![Soft clip potion after Enchanted Zwerchhau. Enchanted Redoublement, weave Fleche and Contre Sixte. Verholy or Verflare, weave Corps-a-Corps and Engagement. Scorch, weave Corps-a-Corps and Engagement. Enchanted Riposte. Enchanted Zwerchhau. Enchanted Redoublement, weave Manafication. Verholy or Verflare. Scorch, Ordained Stillness occurs here. Enchanted Riposte. Enchanted Zwerchhau. Enchanted Redoublement. Verholy or Verflare, weave Fleche. Scorch.](/img/rdmtea4.png "Stillness Uptime: Stillness First")

Clip: <https://www.youtube.com/watch?v=x-FVFE2QvIU>

### Ordained Motion first

If Ordained Stillness comes second, then you can get Verflare/Verholy and Fleche before Stillness resolves. It is important to mash escape, or press O/B on controller, to disable auto attacks and not accidentally hit when Stillness resolves. See the below diagram for the potion sequence for Stillness second:

![Soft clip potion after Enchanted Zwerchhau. Enchanted Redoublement, weave Fleche and Contre Sixte. Verholy or Verflare, weave Corps-a-Corps and Engagement. Scorch, weave Corps-a-Corps and Engagement. Enchanted Riposte. Enchanted Zwerchhau. Enchanted Redoublement, weave Manafication. Verholy or Verflare. Scorch. Enchanted Riposte. Enchanted Zwerchhau. Enchanted Redoublement, forced march occurs here. Verholy or Verflare, weave Fleche, Ordained Stillness occurs here.](/img/rdmtea5.png "Stillness Uptime: Motion first")

Clip: <https://www.youtube.com/watch?v=9WOD2sSqHZo>

On the subject of optimizing potions, if either Acceleration or Swiftcast has less than 30 seconds left at your second potion window and you have a clean triple melee combo under potion, it is also possible to soft clip a potion after your first Riposte, then use an instant cast to catch the end of the potion window, similar to optimizing an Embolden window. Assuming full uptime and minimal ping, you shouldn’t lose a GCD from this soft clip if you go to enrage and take the caster-standard sixth jail.

- - -

# Clear PoVs

Draid Kylian, with specific concessions made to account for having higher DPS than expected: <https://www.youtube.com/watch?v=1ojyevVK5Og> 

Accompanying log: <https://www.fflogs.com/reports/WB7MxrHpVaLCgZyR#fight=22&type=damage-done>

# Credits

RDM team of Mentors and Helpfuls at [The Balance](https://discord.gg/thebalanceffxiv)