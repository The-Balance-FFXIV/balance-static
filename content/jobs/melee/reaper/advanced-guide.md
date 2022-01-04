---
title: Reaper Advanced Guide
card_header_image: /img/jobs/rpr/screenshot_5-edit.jpg
authors:
  - ellunavi
patch: "6.05"
lastmod: 2022-01-04T09:05:00.212Z
changelog:
  - date: 2021-11-27T12:55:28.038Z
    message: Added
  - date: 2022-01-04T20:36:20.903Z
    message: Removed Dancer Dilemna section, due to no longer being required.
---
## Reaper Advanced Rotational Theory

### Author: Ellunavi Sevald

### Contributors: Dook Prime, Torael Valdis, Rin Karigani, Laille Ormesaing, Shalfu Nyan. Special thanks to Moth Kira and Jackal for the infographs!

- - -

## rDPS vs. aDPS and Reaper

I wanted to start this guide off with talking about the FFLogs metrics and how they relate to Reaper, as well as how they can and should be used to measure performance. Currently, as it stands, FFLogs has three main metrics it measures DPS with:

* **rDPS** - Short for raid damage per second. This represents the damage you deal to an enemy over time, but it will subtract damage gained from external buffs and add damage you give through your buffs. So, if you deal 105 damage, but 5% of that was from Trick Attack, then only 100 of that damage will count towards your parse. Alternatively, if the ninja did 103 damage, but 3% of that was from your Arcane Circle, then three DPS of that damage will count towards your parse.
* **nDPS** - Short for neutral DPS. This represents the damage that you did but removes any assistance from raid buffs. It currently has very limited uses for Reaper and should rarely be used as a metric for any sort of measurement.
* **aDPS** - Short for adjusted damage per second, this will factor in all the damage you do, but subtract specific single target buffs like Dragon Sight, Standard Step, Devilment and Astrologian cards.

- - -

## Theorycrafting vs. Practice

This is an important piece to talk about before you dive too deep into this document. There are always two parts to theorycrafting: the crafting of the actual theory and testing the theory by putting it into live play. Thanks to the release of Endwalker, we can now actually test and play Reaper. That being said, not every scenario or situation can immediately be tested. As of re-writing this section we do not have Savage raids or Ultimates so some of these concepts may not work within whatever limitations the fights put on us. Lastly, as we discover new theories they will be listed here but I will try to notate them as “not tested” if required. The aim of this guide is to maximize Reaper’s potential without using any third party tools, so optimizations that require their use will be left out. 

- - -

## Reaper Resource Management

I believe it to be important that our first topic we discuss is about how a Reaper generates its resources. You should have a good understanding of all the resources we are gathering between Soul, Reavers, Shroud, Lemure Orbs and Void Orbs, but let’s talk about how much we generate, and in what time frame. At a 2.5 GCD, the following is the ability breakdown and resource generation of a level 90 Reaper over 123 seconds:

* Four Shadow of Deaths
* 20 Combo abilities (Slice, Waxing Slice, Infernal Slice).  +200 Soul Gauge
* Four Soul Slices.  +200 Soul Gauge
* Ten Gibbet or Gallows.  +100 Shroud

  * Four casts provided by two Gluttony (-100 Soul Gauge)
  * Six casts provided by Blood Stalk variants ( -300 Soul Gauge)
* One Plentiful Harvest. +50 Shroud Gauge
* Three Enshroud phases. -150 Shroud Gauge

  * 12 Void Reapings and 12 Cross Reapings
  * 12 Lemure Slices
  * Three Communios

In total, there are 39 GCDs outside of Enshroud, which will take 97.5 seconds, and three Enshroud phases, which will take a total of 25.5 seconds. This totals the rotation to 123 seconds at a 2.5 GCD, lowering by .39 seconds with each GCD tier.

Obviously, there is a major issue with Reaper taking 123 seconds to be net neutral, which is the fact that raid buffs happen every 120s.  So, what is the solution? How do we mold our rotation to fit into a 120s rotation? The answer is that we cut a combo ability from the two minute timeline, which aligns us better with raid buffs at 120.5 seconds. Unfortunately, this cuts out 10 important Soul from our rotation, which is crucial to perform our ideal rotation. When we start the fight, we have an additional Soul Slice charged, which will replace a single combo GCD, netting us a total of 40 Soul (+50 for the Soul Slice, -10 for the replaced combo). 

In short, we start the fight with 40 additional Soul and in order to align with raid buffs, we lose 10 Soul every two minutes, meaning we will start drifting from raid buff windows at the ten minute window because we will have to start doing a 123 second rotation. In a vacuum, this isn’t a big deal. However, when dealing with fight mechanics, each disconnect will cost us 10 Soul, which will lower that timer by two minutes.

- - -

## Harvest Moon

Before we get too deep into this theory document, I wanted to address a few abilities specifically and talk about their limitations and uses; the first being Harvest Moon. This ability is extremely unique, and we have already received a few questions about why it isn’t in the opener or where it should be used in the opener. Harvest Moon is an instant cast, 25 yalm range/five yalm radius AoE ability, which is 600 potency, which makes it our third strongest-hitting attack in our kit. That said, it comes with some huge caveats:

* The ability can only be used with the Soul Sow buff, which can be applied instantly out of combat, but takes five seconds to re-apply in combat. The Soul Sow buff lasts indefinitely. 
* The ability does not generate any Soul. As we learned above, this would push us out of raid buff alignment at the eight minute mark, instead of the ten minute mark.
* In order to use it in the opener to capture raid buffs, it pushes Gluttony back one oGCD and is ultimately replacing a 520 potency attack under buffs.

This begs the question, so when is it best to use Harvest Moon? 

* Its most optimal use will be in multi-target situations. The ability has a 50% falloff, therefore will be hitting for (600+(300\*(n-1)))\*1.1, where n is the number of enemies hit and 1.1 is the damage gained from Death’s Design. This is a net gain of 330 potency if it hits only one additional target, which will always beat out anything it would gain in buffs.
* The second most optimal time, which will most likely be how we use it the most, will be for a disengage window. Whenever we have to disengage from a target for more than one GCD, we will need to use either Harpe or Harvest Moon. Harvest Moon is a gain of 330 potency over Harpe, which is a giant potency gain, and the chances of us never having to use a disengage tool in a fight are low. 
* Another use for Harvest Moon is to manipulate the timing before or during Shroud phases to allow for smoother burst windows. Objectively, we benefit from entering burst windows with no combo running, allowing us to use Soul Slice in most cases and to more quickly add damage to our windows. It can also be used to extend the time we are in Shroud, which would allow us to Shroud back-to-back if necessary. 
* Lastly, we could use it for buff windows, but this comes with its own set of problems. The Reaper burst window is selfish, and pretty demanding on which abilities need to be placed where. So, its usage needs to be thoroughly examined and mapped.

![](/img/jobs/rpr/ffxiv_12212021_125816_970.png)

- - -

## Gluttony

This ability lives up to its namesake, as it is indeed a glutton. Just like it consumes 50 Soul Gauge and two GCD slots, it will now consume half a page of text and about one minute of your life (probably 30 minutes of mine). Gluttony is a very selfish skill; it has a 60 second cooldown, consumes 50 Soul Gauge and will require your next two GCDs to be Reaver spenders. We ideally want to use it on cooldown, which means every 60 seconds you are locked into Gluttony’s jaws for about five seconds. 

The time required to execute these abilities isn’t its only gluttonous trait though; the 60 second cooldown is a pretty rough thing for a job sitting on a 123 second rotation. Due to our awkward Enshroud phases, we will almost never be able to use Gluttony at the same time, and it will end up drifting little by little. Lastly, it costs a steep 50 Soul Gauge, which given our deficient 120.5 second rotation and busy burst phase, can sometimes be hard to obtain at the right time. 

Because of all of these traits, you will often find that Gluttony may drift. Due to its relatively late position in the opener and two minute burst window, it will most likely drift out of some pretty powerful raid buffs. This will ultimately be a pain that we will have to accept as we strive for the best burst windows and timings.

- - -

## The Openers

We can finally start talking about the nitty-gritty of Reaper, what makes it tick and how we can make it tock. The opener is one of our weakest bursts, but it is also when we are the most flexible. Optimizing our opener around the raid buffs we have available is crucial for maximizing our damage. 

Note: The Sequence of Gibbet / Gallows and Void / Cross Reaping are not a requirement and can be swapped around as long as you alternate them. Some fights may recommend that you open with one or the other first for better positional alignment later on.

### **Fast Enshroud Opener**

![](/img/jobs/rpr/rpr_enshroud_opener.png)

* Soul Sow Pre-pull
* Harpe at two seconds on the countdown
* Shadow of Death > Arcane Circle
* Soul Slice >> Middle weave Potion (If you can’t at 2 minutes)
* Soul Slice
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio > Gluttony
* Gibbet
* Gallows >> Unveiled Gibbet
* Gibbet

Description:

Let’s break apart this opener and discuss and explain a few things:

* Where is the potion? 

  * Optimally, we would prefer not to use a potion in the opener but we will have to based on certain fight timings or mechanics. I will go more into the potion windows below.
  * If you need to use a potion, you can use either 3s on pre-pull or weave it late after the first Soul Slice.

    * Alternatively if you are able to double weave Arcane Circle and Potion without clipping your GCD it is optimal to Shadow of Death twice at the start of the rotation and Arcane Circle + Potion after the second Shadow of Death. This will trade a Shadow of Death in potion for an Infernal Slice.
* Why is Gluttony so late?

  * Moving it late means it captures more buffs at their tail end. Using it early may have us using it before buffs; using it later will get it and its Reaver spenders into more buffs.
  * Whenever we get to our two minute burst window, it would be pushed to this position either way.
* Where is Harvest Moon? 

  * Harvest Moon would only replace a 520 potency ability in this opener and would ultimately shift Gluttony further down the timeline, potentially pushing it more quickly out of buff windows. Harvest Moon will have a better space in a future buff window, or for a disengage.
* Plentiful Harvest is really tight. 

  * At 2.47 GCD the Plentiful Harvest will clip slightly. If your ping is bad it will always clip. If you are playing into raid buffs and looking to maximize aDPS, a slight clip of .3s or less is still an overall gain. If you feel like you are clipping enough, you can use the Early Gluttony opener below to execute Plentiful Harvest without clipping.
* Why am I starting with Harpe?

  * Harpe has a 1.3s cast time and a small damage delay time. You can start casting Harpe at 2s and have it go off around the time a fight starts. The remaining 1.1-.1.2s- seconds will cover the fact that you have to run (or Ingress) to the boss in order to start meleeing. It is essentially free damage that should never be overlooked.
* Why would I use this opener?

  * Fast Enshroud should capture more potency into raid buffs, providing you with the highest aDPS potential within the opening sequence of the fight. This opener also assumes you are doing a Double or Triple Shroud burst sequence at the two minute mark and every two minutes after (See Double Shroud Window Section). If you need to maintain Gluttony’s cooldown then you will have to use the Early Gluttony opener, which is listed next.

### Early Gluttony Opener

![](/img/jobs/rpr/early_gluttony.png)

* Prepull Soul Sow
* Potion @ 3s on countdown if you can’t use potion at two/ minute mark
* Harpe at 2s on countdown
* Shadow of Death >> Arcane Circle
* Soul Slice > Gluttony
* Gibbet
* Gallows
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping> Lemure’s Slice
* Communio
* Soul Slice > Unveiled Gibbet
* Gibbet

Description:

Let’s break apart this opener and discuss and explain a few things:

* Where is the potion? 

  * Optimally, we would prefer not to use a potion in the opener but we will have to based on certain fight timings or mechanics. I will go more into the potion windows below.
  * If you need to use a potion, you can use either 3s on pre-pull or weave it late after the first Gibbet/Gallows.
* Why is Arcane Circle so Early?

  * The main advantage of the first GCD Arcane Circle is that we don’t clip Plentiful Harvest. If you are able to, without clipping Plentiful Harvest, you can position the Arcane Circle after the first Soul Slice for a minor DPS gain.
* Where is Harvest Moon? 

  * Harvest Moon would only replace a 520 potency ability in this opener and would ultimately shift Gluttony further down the timeline, potentially pushing it more quickly out of buff windows. Harvest Moon will have a better space in a future buff window, or for a disengage.
* Why am I starting with Harpe?

  * Harpe has a 1.3s cast time and a small damage delay time. You can start casting Harpe at 2s and have it go off around the time a fight starts. The remaining 1.1-.1.2s- seconds will cover the fact that you have to run (or Ingress) to the boss in order to start meleeing. It is essentially free damage that should never be overlooked.
* Why would I use this opener? There are actually three main reasons you would consider using this opener:

  * Better Gluttony alignment. Because it uses Gluttony so early it could net you an extra or more favorable use. Endwalkers first two EX trials both see unique cases of this. Such as the first trial allowing you to secure an Extra Harvest Moon in the first or the second EX who jumps at around the time Gluttony comes off CD.
  * Prevent Plentiful Harvest from clipping. This is your best option to ensure that you can Plentiful Harvest with no clip at higher skillspeed or ping. 
  * * When using this opener you have a few options for the two minute burst window. If you still need to maintain Gluttony on cooldown you can do a Shroud > Gluttony > Shroud burst window which is detailed below in the Gluttony Split section below. 
    * You can also enter into a Double or Triple Enshroud window, this will push back Gluttony to the later time slot but this may be useful if later on in a fight if the aim was to get Gluttony earlier in a phase. You enter this burst sequence at any two minute marker of the fight.

- - -

## **Double Enshroud Window**

Every two minutes, we will be entering our burst. We currently have two types of burst windows that we can do on the two minute mark. The first, and overall best, will be the Double Shroud window. Normally, doing two Enshrouds back to back, or within one GCD of each other, is impossible because of the 15 second cooldown timer of Enshroud. We can, however, extend the time we are in Shroud by using the few GCDs we have available during the buff that do not interact with the buff itself. Shadow of Death, Harvest Moon and Harpe are all available to be used while we are in Enshroud and out of those three, one of them is critical to how we play the job -- Shadow of Death. Of course, we don’t want to overcap our Death’s Design timers, so the goal here is to enter Enshroud with only a few seconds left on the Death’s Design debuff. Here is the breakdown of what the ideal Double Enshroud window looks like:

![](/img/jobs/rpr/double_communio.png)

Sequence:

* Begin when you have less than 9s on Arcane Circle CD.

  * Death’s Design should only have 5-6 seconds left at this point.
  * If you opened with a first oGCD Arcane Circle, the first two minute burst should be at 6s on Arcane Circle CD.
* Do whatever combo action you are on. Whatever you click here will change the ending of this sequence. 
* Enshroud (Immediately after GCD)
* Void Reaping
* Shadow of Death >> Middle Weave Potion
* Cross Reaping
* Shadow of Death > Arcane Circle on CD
* Void Reaping > Lemure’s Slice
* Cross Reaping > Lemure’s Slice
* Communio
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio >> Priority System

  * If no combo, 50 Soul and Gluttony on CD use Gluttony and do Gibbet / Gallows.
  * If no combo, < 50 Soul then use Soul Slice into Gluttony and do Gibbet / Gallows.
  * If in combo then use the combo action. After combo if you are sub-50 Soul you will have to soul slice then Gluttony, otherwise Gluttony after combo and do Gibbet / Gallows.
* Finish spending Soul Slices and Soul after this sequence to maximize potion.

Description:

* The ideal time to enter Enshroud is after a GCD where your Arcane Circle recast is below nine seconds. The GCD you hit before you enter Enshroud is important because it will impact how the end of this rotation looks. 

  * You ideally want Arcane Circle to happen around XX5 on the clock. If you opened with a first oGCD Arcane Circle then you will want to push it back during your first two minute window. You can do this by simply entering the first Double Enshroud a GCD later.
* If you are looking to potion during this window, you ideally want your first Shroud GCD to be the unbuffed version of either Void or Cross Reaping. Your second GCD will be Shadow of Death, and this is where you will want to weave your potion. After that, you will want to use the other Void or Cross Reaping ability.

  * The order of these first three GCDs only really matter when you are trying to min/max your potion timing. Almost all double Shroud windows can follow this pattern and be fine, but some timelines or mappings may require you to Shadow of Death on the first GCD to maintain the Death’s Design debuff.
* Your fourth GCD in this Shroud window should be Shadow of Death, and you will want to weave an Arcane Circle in between this period.

  * It’s possible to rework this rotation and weave Arcane Circle in between the Reaping skill, but the timer is a lot more strict which could lead to unnecessary drift. (You will see an example of this when we discuss using Harvest Moon in this window).
* After your second Communio, you have a few potential paths based on your current situation:

  * If you are not in a combo, have 50 Soul, and Gluttony is off cooldown, use it after the Communio and follow up with Gibbet/Gallows.
  * If you are not in a combo, don’t have 50 Soul, or Gluttony is on cooldown, then use a Soul Slice as long as it won’t overcap you, and proceed with Gluttony into Gibbet/Gallows.
  * If you are in a combo, then you must use a combo ability here in order to maintain it. The window is tight, so don’t hesitate. Following that combo, if you have 50 Soul, then execute Gluttony, otherwise you will have to Soul Slice here, followed by Gluttony.

    * This can potentially drift your Gluttony further than it naturally drifts -- that is okay.

### **Double Enshroud, Harvest Moon Variant**

![](/img/jobs/rpr/harvest_moon_adjustment.png)

Sequence:

* Begin when you have less than 9s on Arcane Circle CD.

  * Death’s Design should only have 36 seconds left at this point.

    * Unlike the previous burst you will want to Shadow of Death once before the burst.
  * If you opened with a first oGCD Arcane Circle, the first two minute burst should be at 6s on Arcane Circle CD.
* Do whatever combo action you are on. Whatever you click here will change the ending of this sequence. 
* Enshroud (Immediately after GCD)
* Void Reaping
* Cross Reaping
* Shadow of Death >> Middle Weave Potion
* Void Reaping > Arcane Circle
* Cross Reaping > Lemure’s Slice
* Harvest Moon > Lemure’s Slice
* Communio
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio >> Priority System

  * If no combo, 50 Soul and Gluttony off CD use Gluttony and do Gibbet / Gallows.
  * If no combo, < 50 Soul then use Soul Slice into Gluttony and do Gibbet / Gallows.
  * If in combo then use the combo action. After combo if you are sub-50 Soul you will have to Soul Slice then Gluttony, otherwise Gluttony after combo and do Gibbet / Gallows.
* Finish spending Soul Slices and Soul after this sequence to maximize potion.

Description:

* The ideal time to enter Enshroud is after a GCD where your Arcane Circle recast is below nine seconds. The GCD you hit before you enter Enshroud is important because it will impact how the end of this rotation looks.

  * You ideally want Arcane Circle to happen around XX5 on the clock. If you opened with a first oGCD Arcane Circle then you will want to push it back during your first two minute window. You can do this by simply entering the first Double Enshroud a GCD later.
* Your first two GCDs in this sequence should be two Reaping abilities and your third should be Shadow of Death followed by a late weave potion. This will be key to squeezing out as much potency as you can with a potion.
* Your fourth GCD will be a reaping ability and this will be where you want to squeeze Arcane Circle into.
* After your second Communio, you have a few potential paths based on your current situation:

  * If you are not in a combo, have 50 Soul, and Gluttony is off cooldown, use it after the Communio and follow up with Gibbet/Gallows
  * If you are not in a combo, don’t have 50 Soul, or Gluttony is on cooldown, then use a Soul Slice as long as it won’t overcap you, and proceed with Gluttony into Gibbet/Gallows
  * If you are in a combo, then you must use a combo ability here in order to maintain it. The window is tight, so don’t hesitate. Following that combo, if you have 50 Soul, then execute Gluttony, otherwise you will have to Soul Slice here, followed by Gluttony.

We won’t always have to use Harvest Moon for movement, as it is likely that there will be a few bosses where we can maintain full uptime on a boss and will want to use Harvest Moon for damage. As of right now, this is the best spot we have found for it. Due to how restrictive our burst is and how the trade to fit Harvest Moon in the opener is small, replacing a 300 potency GCD under potion is going to be its best damage gain.

This optimization requires you to insert a Shadow of Death sometime before you enter your Double Shroud window, and it will create a very tight Arcane Circle weave window. If pulled off successfully, you will land a Harvest Moon on the enemy with most raid buffs in play, the exceptions being Trick Attack and Dancer buffs. 

#### Double Shroud Variant - Single SoD

![Image](/img/jobs/rpr/double_enshroud_single_extension.png)

Sequence:

* Arcane Circle should have 6s or less left on its CD.

  * This should be 4s if you opened with a first oGCD Arcane Circle and this is your first double shroud window.
* Potion the GCD before you enshroud
* Any Combo GCD > Enshroud
* Void Reaping
* Cross Reaping
* Shadow of Death > Arcane Circle
* Void Reaping > Lemure’s Slice
* Cross Reaping > Lemure’s Slice
* Communio
* Finish Combo OR Soul Slice if not in combo
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio >> Priority System

  * If no combo, 50 Soul and Gluttony off CD use Gluttony and do Gibbet / Gallows.
  * If no combo, < 50 Soul then use Soul Slice into Gluttony and do Gibbet / Gallows.
  * If in combo then use the combo action. After combo if you are sub 50 soul you will have to Soul Slice then Gluttony, otherwise Gluttony after combo and do Gibbet / Gallows.
* Finish spending Soul Slices and Soul after this sequence to maximize potion.

Description:

There will be cases where you will be unable to Shadow of Death twice during Shroud and Harvest Moon either isn’t available, or will need to be used later. It could be an untimely boss jump, weird re-opener, or a forced buff hold period. The goal for these situations is to at least extend the first Lemure phase by one Shadow of Death, so entering Shroud with sub-30s on Death’s Design is optimal. The position of the Shadow of Death is variable, but ideally you want to use it right before you will use Arcane Circle. This variation is the weakest of our burst options, since your last Communio can miss a good chunk of raid buffs. 

Sometimes, if the fight allows it, it may be better to just correct your Death’s Design timer and go for a default double Shroud window. This can be accomplished at the cost of only 10 Soul, which means fights that end with 40 or less Soul can do this without worrying about punishment. 

## Triple Shroud Window

![](/img/jobs/rpr/triple_enshroud_window.png)

Sequence:

* Should have 100 Shroud
* Less than 9 seconds left on Arcane Circle CD

  * If you used first oGCD Arcane Circle opener then this should be 6 seconds if this is your first two minute burst window
* Infernal Slice (You have to be combo neutral otherwise this doesn’t work) > Enshroud
* Shadow of Death
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping > Arcane Circle
* Shadow of Death >> Middle weave Potion
* Cross Reaping > Lemure’s Slice
* Communio
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio > Gluttony
* Gibbet
* Gallows
* Soul Slice > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio > Unveiled Gibbet
* Gibbet

Description:

Triple Shroud Windows are a tool that we have available in our kit. Using the above mapping, we can fit three Communios into a single potion. This is an option that we explored quite a bit, and at the moment, our current findings are as follows:

* The setup is extremely restrictive. You must enter the triple Shroud window combo neutral, otherwise you throw away any potency you gain from either overcapping Soul Slice or dropping combo.
* You have to skip your second Enshroud window to have enough Shroud to perform this.
* The potion timing is extremely tight and with high ping could miss the last Communio. 
* At 2.49, with full uptime, this can happen naturally if the fight allows it.

The triple Shroud window is near-peak optimization for Reaper, requiring specific restrictions and mapping. The overall DPS gains are very minor and it can be quite risky to pool a lot of resources for so long, making a death extremely punishing. At 2.49 this will line up perfectly in a full uptime scenario so if it's something you are looking to attempt you should certainly try but keep in mind the risks and difficulty when attempting it. If, for whatever reason, you attempt the Triple Shroud Window and you cannot enter combo neutral, then do the Double Enshroud and dump your extra Enshroud somewhere later in the fight.

![](/img/jobs/rpr/edgy-reaper-1.png)

- - -

## The Two Minute Potion

Historically, FFXIV players have opted to use potions for the opening burst, for a lot of good reasons. A potion in the opener is sure to catch all raid buffs, will most likely not be interrupted by boss mechanics and ensures that you can get a second or third potion if available. Furthermore, it was almost always optimal. Endwalker is coming to shatter that reality a bit, and it isn’t just for Reaper, but for other jobs as well. The two minute potion option is incredibly potent for Reaper, netting an additional 2000+ potency under potion if you are able to use it at the two minute mark.

This isn’t without risk. Due to the potion's cooldown, there is a small window where an opener potion would be better. Fights with a duration of between five to 6.5 minutes and between 9.5 to 11 minutes will always favor an opener potion because you can get a second or third respectively. There is also a chance that the boss may jump during the two minute potion window, which would overall lower its potency.

Below you can see the effect of a potion used in the opener at six minutes vs. a potion used at two minutes, and then at 6:30. This chart shows us two things: losing a potion usage is never optimal and, if possible, the two minute potion is our best bet.

![](/img/jobs/rpr/opener_two_minute_potion.png)

- - -

## Odd Minute Enshroud

Reaper generates three shrouds every two minutes but only two can really be used in the 2-minute burst window. This leaves the an extra Shroud that can be used for a few things

### Trick Enshroud

If you are playing with a Ninja you can use the extra Enshroud into the odd minute trick windows. This will be a pretty significant gain to your adps and your ninjs rdps. 

There are two ways to track Trick Attack timing without asking your Ninja every 20 seconds. The first will be your Gluttony cooldown timer. Trick’s end will roughly align when Gluttony comes off the cooldown. If your Gluttony has about 15 seconds left on its cooldown, then it is safe to assume that Trick is coming up. The next best way to tell is using your Shadow of Death timing. Assuming you aren’t overcapping, it will be a few GCDs after the timer goes below 30s between burst windows. You can almost always use Shadow of Death before Trick Attack to bring your timer closer to 60 and then enter Enshroud a bit afterwards. This Enshroud window doesn’t have any special mechanics, and can be executed like normal.

### Astrologian Cards

An Astrologian can draw a fresh card every 30s and just like us they usually have an extra one that can be dropped outside of the main burst windows. Because our Enshroud window is flexible, you can plan out its usage to be paired with a potential Astrologian card. This card will usually happen at the 60 second window but its recommended you coordinate with your Astrologian and other raid members as you have a very flexible burst.

### Ranged Utility

Lastly you can use this Enshroud for some unique utility optimization. Because Communio has a range of 25y you can plan an Enshroud windows around disconnect windows. Because Enshroud gcds have a 1.5s recast you will have to use a Shadow of Death to more comfortable move out of range. A good example of this is in the first Endwalker Extreme trial. You can see Emiya Bolir perform this trick in this video: https://www.twitch.tv/videos/1231915656.

Be warned that when doing it this way, you want to not over Shadow of Death and you also need to be able to perform all of your Reaping GCDs otherwise this is a loss over just using Harpe for the disconnect.

- - -

## The Filler Period

While there isn’t much optimization or advanced theorycrafting here, I wanted to provide a little insight into what our filler windows look like:

![](/img/jobs/rpr/even_to_odd_filler.png)

* After opener Enshroud and Double Enshroud phases
* 10 Filler GCDs  (Combo actions are preferred)
* 2 Soul Slices
* 2 Shadow of Deaths, do not overwrite above 60 seconds
* 1 Gluttony, 3 Blood Stalk Variants
* 5 Gibbet / Gallows

![Image](/img/jobs/rpr/odd_to_even_filler.png)

* After Single Enshroud (Odd Minute) Windows
* 8 Filler GCDS (Combo actions are preferred)
* 2 Soul Slices
* One Shadow of Death, do not overwrite above 60 seconds
* 1 Gluttony, 3 Blood Stalk Variants
* 5 Gibbet / Gallows

Understanding how these work is crucial to understanding the next part of this document. These filler windows assume you are Enshrouding every minute and twice every two minutes, and that the filler count begins after the Communio. 

- - -

### “Dead Zone” Mapping

Now, let’s talk about the most boring part of Reaper optimization, a phase that I am calling the “Dead Zone” because of how lifeless it may feel. As we already discussed, in order to adapt to the 120s buff cycle, the Reaper has to remove one GCD from its 123 second rotation. This means that every 120s, the Reaper loses about 10 Soul. This isn’t super problematic in terms of Enshrouding on time, as we won’t have to delay Enshroud until around the ten minute mark. It is, however, problematic when it comes to our best friend, Gluttony.

As we discussed during the Double Shroud windows, there are three factors that will cause Gluttony to drift: entering double Shroud with a combo, ending double Shroud without enough Soul, and Gluttony naturally drifting due to its 60 second cooldown and the 120.5s rotation that Reaper has. Ultimately, we can only really control one of those factors without losing any potency, and that is how much Soul we have when exiting our second Shroud.

The concept of Dead Zoning is pooling our resources during the first minute of the encounter. After your first Enshroud, your filler period will end up looking like this:

![Image](/img/jobs/rpr/dead_zone_filler.png)

* After Opener Enshroud
* 24 Filler GCDs (Combo actions preferred)
* Three Soul Slices, careful not to overcap soul
* Three Shadow of Deaths
* 2 Gluttonys, 5 Blood Stalk Variants
* 9 Gibbet / Gallows

By doing this we do a few things:

1. Ensure we have enough Soul every time we enter a double Shroud window to execute Gluttony at the end.
2. Create an insurance policy, in the event we have to disconnect or the boss jumps at odd times. 

![](/img/jobs/rpr/soul_chart.png)

Above you can see how, on average, we have enough Shroud and Soul to execute our burst at any time when we pool for the first minute. You will ultimately be holding onto a lot of resources all the time and the issue of overcapping becomes a potential problem if you aren’t paying attention.

![](/img/jobs/rpr/regular_vs_dead_zone.png)

Above you can see the benefits of Dead Zoning. This was simulated using a party composition containing a Ninja, Red Mage and Dancer in order to show the effect it has on our aDPS. Despite missing out on a Shroud during a Trick at the one minute mark, Dead Zoning pulls ahead when the resources are dumped at around the 9:00 minute mark. This resource dump can happen anytime after the 5:30 minute mark, and the pooling strategy will end better, as more Gluttonys fit into more raid buffs. Below, you can see the effect that Dead Zoning has on minimizing Gluttony’s drift.

![](/img/jobs/rpr/dzgluttonydrift.png)

Dead Zoning comes with some disadvantages though, which are important to talk about:

* You are holding onto a lot of resources all the time. This makes an untimely death a bigger hit on your DPS than just using your resources as needed.
* Overcapping is a real monster that you have to worry about.

Ultimately, we aren’t sure what will be better for content until we have the content, but Dead Zoning could definitely be a tactic we use in optimization. Due to its high risk factor though, we recommend not doing it during prog, as a death could lead to a lot more potency lost.

- - -

## The 2.5 \[2.49] (2.48) Global Cooldown

On initial observation, Reaper is a builder and spender class, but has most of its “builders” tied to strictly-timed abilities such as Gluttony, Soul Slice and Plentiful Harvest. Our combo actions will only supply about 30% of the resources needed for our burst. This gives the initial impression that a higher GCD will lead to higher results. Alternatively we could examine the 123 second neutral rotation and attempt to perform that in 120s where there is no perfect fit. A 2.42 GCD will bring the Reaper to that neutral state, but is a relatively low skill speed and will have a pretty big impact on our other stats. Furthermore, Reaper operates just fine in fights that last less than ten minutes.

At a 2.5s GCD, Arcane circle drifts .5s each rotation and Gluttony drifts anywhere from 1-2 seconds every two minutes. The goal with higher SkS tiers was to try and minimize this. We examined four different tiers, those being 2.5, 2.49, 2.48 and 2.47. Below, you can find a graph displaying our findings.

![](https://lh4.googleusercontent.com/W_q6GzJ6Sbu9HXKWO0aagP0kLJm4YRPAw7wwCfVIyAPg1RBQB4eDTLjfeOqPbjwB6R00px_L6zuocURZdEPFObn9bKjCOe4vVyUqH4XhTFSyRYHrl2O-A4avw76uqNVVJzbaHct6 "Chart")![](/img/jobs/rpr/arcanedrift.png "Chart")

All of these rotations assumed full uptime, except for one disconnect at around three minutes, in which Harvest Moon was used. 

As we can tell, in terms of drifting management, a 2.48 GCD offers us the least risk, with 2.49 not being too far behind. 2.49 is only a single skill speed meld, while 2.48 will require some investment.  As of 6.05 and the new raid gear, the natural 2.5s GCD set is really strong and hits stat tiers really well. It is currently ahead of a single meld 2.49 set by a slight margin. While we know that 2.49 aligns better with raid buffs, the gain vs. loss of the two sets will have to be compared.

- - -

## Gluttony Split Shroud

If you use the Early Gluttony opener to maintain Gluttony’s cooldown, you will also need to alter your burst window in order to maintain its cooldown. This burst window is objectively weaker but comes with the upside of extra Gluttony usages depending on the fight's phasing or kill time. This Burst window doesn’t come without its own set of issues though and at some point you will want to play Reaper with a priority system. 

* Slot Consistency: As we discussed before, Gluttony will just naturally drift and there isn’t much we can do to control it other than play at higher SkS values. Since our rotation will never be exactly 120s, it will constantly be pressed at a different time in relation to our global cooldown, eventually pushing it to an entirely different time.
* Soul Generation: At some point, we simply will be unable to accumulate the Soul needed to perform a Double Shroud window with Gluttony in the middle. Ultimately, this changes our burst window and will eventually put us into playing more “ad hoc” (ad hoc meaning where we just play off of a priority system rather than trying to map out our burst).
* Combo GCD is extremely tight: When executed perfectly the last combo has less than a second remaining. 

Currently this burst window only works at the two minute mark of the fight. Gluttony’s unruly oGCD Timer makes it difficult to pull off and maintain a reasonable window with Arcane Circle. It is recommended to either switch to a standard Double Shroud window at four minutes or play using a Priority system afterwards.

Below is an example of what a two minute burst could look like while trying to keep Gluttony on CD:

![Image](/img/jobs/rpr/shroud_gluttony_shroud.png)

Sequence:

* Do Shadow of Death before your combo weapon skill
* < 6 seconds left on Arcane Circle CD
* Any Combo GCD >> Enshroud
* Void Reaping
* Shadow of Death >> Middle weave potion
* Cross Reaping >> Arcane Circle
* Void Reaping > Lemure’s Slice
* Cross Reaping > Lemure’s Slice
* Communio > Gluttony
* Gibbet
* Gallows
* Plentiful Harvest > Enshroud
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Void Reaping
* Cross Reaping > Lemure’s Slice
* Communio
* Combo GCD or Soul Slice if not in combo

  * The combo will be tight, so with high ping you may miss it.
* Soul Slice if previously had to use combo
* After Soul Slice use Blood Stalk Variant + Gibbet/Gallows

Shadow of Death is not a necessary filler here but still recommended, as long as you don’t overcap. You will want one if you are potion weaving. If you are unable to maintain your combo, due to high ping or other factors it is recommended that you simply play a priority rotation instead. 

Ultimately, if you are playing Reaper as a priority system and putting less effort into optimizing your Burst, the Early Gluttony opener may be the safer bet. It will ultimately lose out on rDPS when fitting potency into raid buffs, but it will always guarantee that your Gluttony will be used on cooldown. If you are looking to optimize, be very familiar with this opener and burst phase, as the chance of it being best for a fight is likely.

- - -

## Reaper as a Priority System

The most casual and consistent way to play Reaper is to play it as if it has a priority system. This playstyle will ultimately cost you a minor chunk of aDPS, but will have similar rDPS results. The difference between playing on a priority system vs playing by rules is about a 2% aDPS difference in a powerful raid buff party. This may also prove a suitable way to play Reaper if you do not know the fight’s mechanics and want to focus on learning.

The priority for playing Reaper in such a manner is the following:

1. Use Arcane Circle and Gluttony on cooldown.
2. Use Harvest Moon if you are out of melee range for one GCD.
3. Use Harpe if you are out of melee range for one GCD.
4. Use Plentiful Harvest IF it is about to fall off or you would lose a usage.
5. Use Gibbet, Gallows or Guillotine if you have any amount of Reaver stacks.
6. Use Waxing Slice,  Infernal Slice, or Nightmare Scythe if your combo is going to fall off.

   * Remember that combos last 30s in Endwalker!
7. Maintain Death’s Design on all targets that will take damage.
8. Use Soul Slice if you have 50 or less Soul Gauge.
9. Use Plentiful Harvest if you have 50 or less Shroud Gauge
10. Enter Enshroud if you have 50 Shroud and Gluttony has a cooldown greater than ten seconds.
11. Use a Blood Stalk variant if you have 50 Soul and Gluttony isn’t about to come of cooldown
12. Use a Combo action such as Slice, Waxing Slice, Infernal Slice, Spinning Scythe or Nightmare Scythe as filler.

![](/img/jobs/rpr/ffxiv_22122021_150141_799.png)

- - -

## Assigning Values to Soul and Shroud

This section will provide some insight on how we are valuing the Shroud and Soul Gauges. This will get a bit technical, but will also make several assumptions. The only way that we can effectively view these gauges is in a vacuum where we assume every 10 Gauge will be spent. 

Because both Soul and Shroud have GCD values tied to their resource usage, we need to establish what GCDs they are effectively “replacing”. The safest assumption will be our combo GCDs, so we need to establish an average there, which is 380 potency. 

The first goal was to get a value for Shroud -- the bottom of the totem pole. 50 Shroud is the equivalent of one single Enshroud Window. An Enshroud window is 3,420 potency over 8.5 seconds. Unfortunately, 8.5 seconds isn’t really relatable to a 2.5s GCD, which is how we generate most of our resources. We can relate this by doing the following:

* 3,420 / 8.5 * 2.5 = 1005 potency per GCD

We then take that 1005 potency per GCD and figure how much it differs from our average GCD value, which is 380 potency. This gives 50 Shroud, a potency gain of 625, or 125 for 10 Shroud.

From here, we can examine the Soul Gauge. Soul Gauge has two parts. The first is the 400 potency Blood Stalk variant that we get, and the second is the 520 potency Gibbet / Gallows that follows. 520 potency is 140 potency over our normal GCD. Lastly, these GCDs give us 10 Shroud, which has a value of 125. The value of 50 Soul is then 400 + 140 + 125, or 665, which is 133 for 10 Soul. 

From this, we have concluded the following:

* 10 Soul = 133 Potency
* 10 Shroud = 125 Potency
* Adjusted average combo action = 380+133, 513 potency.

The applications for this value are limited, but it will assist us in performing napkin math in a vacuum. You can find an example of its usage in the next section.

- - -

## Assigning Value to Gluttony

While it may not be super important to assign a potency value to Gluttony, it could potentially be useful for scenarios or quickly napkin-mathing situations. The best way to look at a Gluttony isn’t by itself, but as a replacement for a Bloodstalk variant. They both share the same cost but Blood Stalks are always available while Gluttony has a minute long cooldown. The differences are the following:

* +100 Potency
* +1 Reaver GCD

  * Compare combo GCD vs Reaver GCD

    * Combo GCD = 513 potency on average (see above)
    * Reaver GCD = 520 + 125 Potency
    * +132 Potency on average in a vacuum

With these assumptions, the actual value of Gluttony is 232 potency. 

- - -

## Two Target Prioritization

Another scenario we examined was how to effectively handle two targets when a burst window is coming up. Gluttony, Plentiful Harvest and Communio all have some powerful cleave effect but our AoE rotation really only functions at three targets, so how do we get the most potency from two targets?

There are three situations here:

1. Shadow of Death the main target, use a combo action and execute our burst.
2. Shadow of Death both targets and execute our Burst.
3. Whorl of Death both targets, use a combo action and execute our burst.

Since we have worked out the value of an average combo GCD, we can work this out. First, let's establish the splash values on the three aforementioned abilities:

* Gluttony : 375
* Plentiful Harvest : 320
* Communio: 400
* Total: 1095

Now, let's break apart each situation and their potency gain.

1. 300 (Shadow of Death) + 513 (Combo Action) + 1095 (Splash damage) = 1908
2. 300 (Shadow of Death) + 300 (Shadow of Death) + 1095 (Splash damage) * 1.1 (Death's Design on splash target) + 133 (10 Extra Soul)  = 1937.5
3. 100 \* 2 (Whorl of Death, two targets) + 513 (Combo Action) + 1095 (Splash damage) \* 1.1 +133 (10 Extra Soul)  = 2050.5

From this evaluation, we can see that situation #3 offers us the best result, as long as that extra combo action turns into potency later on down the line.

![](/img/jobs/rpr/2021-12-07_00-02-00-559_almastudio_colorpop.png)

- - -

## Disconnect Mapping

Disconnecting will not be super exciting for Reaper. We have one Harvest Moon we can use in between each phase, and one Instant Harpe every 20 seconds from Egress. Outside of that, we will have to slidecast, which isn’t always possible. 

It is important to remember that you don’t have to immediately use Ingress/Egress and go for the instant Harpe immediately. A good example is Shiva’s Icelit Dragonsong. Here, melees will have to disconnect for upward of four GCDs, and will have to move quite a bit during one of those GCDs. What you can do here is hardcast two Harpes, before having the move to dodge your puddles, where you can Harvest Moon and then Ingress and instant cast Harpe to maintain uptime.

Plentiful Harvest and Guillotine also have some large ranges, and may also be used for disconnect optimization depending on the fight. This will require planning, otherwise you will lose a lot of potency. 

Lastly you can also use the odd-minute Enshroud to plan your disconnects. See the Odd Minute Enshroud section above for more information.

- - -

## Limit Break Three

Nothing super special here. Limit Break Three will cost us about three GCDs, or roughly around 1539 potency (assuming that Soul could have been turned into something). Early-combat LB3 will be pretty rough on Reaper, and will most likely mean skipping or delaying a Shroud window. Ideally, you want to LB3 towards the end of combat, after your last Enshroud window.

- - -

## Reaper Damage Delay

Below is the damage delay for all of the Reaper weaponskills, abilities and spells. Big thanks to Shalfu Nyan for putting this together. This information is incredibly useful because it will help determine when an ability will fall into raid buffs or when you may risk ghosting a weaponskill. For example, if a boss is about to jump you want to try and avoid using Soul Slice, Plentiful Harvest or Harvest Moon as they take a long time to register damage and may end up being ghosted.

![](/img/jobs/rpr/damagedelayrpr.png)