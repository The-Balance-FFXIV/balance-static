---
title: Intermediate Guide
card_header_image: /img/jobs/vpr/large-file-viper-1.png
authors:
  - ToraelValdis
patch: "7.4"
lastmod: 2025-12-17T16:22:16.354Z
changelog:
  - date: 2024-06-20T05:44:33.192Z
    message: Guide added to website
  - date: 2024-08-01T22:43:49.297Z
    message: Updated for patch 7.05
  - date: 2024-08-09T21:04:22.341Z
    message: "Added optimal pot windows to Medicated section. "
  - date: 2024-08-18T18:50:12.444Z
    message: Added Triple Reawaken information
  - date: 2025-07-18T21:59:28.393Z
    message: "Edited medicated section to include a stronger pot window and a
      description of when to use what. "
  - date: 2025-08-05T04:04:28.058Z
    message: Bumped supported patch number to 7.3.
  - date: 2025-12-17T16:22:10.293Z
    message: Updated to Patch 7.4
---
# Introduction

Special thanks to Akashi, Jackal, Azazel, Azrael, Stella, and Rhy whose work religiously theorycrafting this job made this guide possible. 

***This guide assumes that the player has a firm grasp of the concepts presented in the [VPR Basic Guide](https://www.thebalanceffxiv.com/jobs/melee/viper/basic-guide/). If this doesn’t apply to you, give that guide a read before returning here.*** This guide will be focused on more Intermediate level concepts of VPR, such as burst window optimization with party buffs, planning for downtime, and other rotation optimization.  

Everything discussed in this guide was tested using [Jackal’s VPR Rotation Planner](https://bit.ly/3VtZvkL), which can be found here with a sample rotation.

# Viper Intermediate Rotation

# 1. Playing Into Party Buffs

While it is possible to purely follow the priority system mentioned in the basic guide, which would involve sending Reawakens essentially as soon as they are available, this comes at a significant loss of potency inside party buffs. By pressing Serpent’s Ire on cooldown and then subsequently using the Reawaken from it, at least one partial Reawaken window will be inside party buffs. However, with a small bit of planning, it is possible to send one full and one partial Reawaken inside party buffs, which is a sizable potency gain. 

In a full uptime scenario, Viper generates enough Offerings to use one Reawaken per minute. Serpent’s Ire also grants one free Reawaken, meaning that Viper will have enough gauge to do three Reawakens every two minutes. The two minute time frame is used because party buffs are on a 120s cooldown timer. Viper also generates an average of 10 more Offerings than it spends every two minutes, which means that it will have one extra Reawaken to use between six and eight minutes. However, this is the only extra Reawaken possible as a fight would need to be a full uptime fight much longer than any that has ever been released.

The simplest way to manage these Reawakens and still put maximum potency into party buffs is to save at least 50 Offerings for when Serpent’s Ire is available and use both the free Reawakening from Ready to Reawaken and the Reawakening from the 50 gauge. Therefore, since Viper only generates enough gauge for three Reawakens in a two minute span (including the free Reawaken from Ire), only one Reawaken should be used outside of party buffs. The table below demonstrates the general timings for when each Reawaken will be used. Times given are a general estimate, and not to be taken literally. Note the extra Reawaken at 7:00 due to our surplus of gauge.

| Time  | Number of Reawakens |
| ----- | ------------------- |
| 0:00  | 1                   |
| 1:00  | 1                   |
| 2:00  | 2                   |
| 3:00  | 1                   |
| 4:00  | 2                   |
| 5:00  | 1                   |
| 6:00  | 2                   |
| 7:00  | 2                   |
| 8:00  | 2                   |
| 9:00  | 1                   |
| 10:00 | 2                   |

## 1.1 Two Minute Burst Windows

There are two primary sequences that we can use to put two Reawakens into party buffs, henceforth referred to as Double Reawaken windows. To set up each window, it is assumed that four Rattling Coils and three twinblade combos have been used between each burst window. (Please note that the 6-8 min section only uses two Rattling Coils, and the 8-10 min section uses six as a direct result of having an extra Reawaken at around 7:00. This is discussed more later in this guide.) The 7.05 changes make it so that we do not have to worry about our timers as much going into this, as Noxious Gnash has been removed, and the Venom combo finisher buffs have been extended from 40 to 60 seconds. This means that our only considerations for setting up our burst is to ensure that our Hunter's Instinct and Swiftscaled buffs will not fall off during the burst. We also need to take care that if we are in an active combo, we do not break the combo by doing too many things between the combo GCDs.  

The simplest way to set up your dual wield combo for an upcoming two minute burst window is to use Serpents Ire as a timer. Around 10s left on Ire’s cooldown, you should start to use only dual wield combos. From there, follow the burst windows below. The main concerns we have for whether or not we can do a Vicewinder combo before/immediately after the Double Reawaken window are whether we are in an active combo, as doing so makes it extremely tight to continue the combo without it expiring, and the GCD alignment as a result. Doing Vicewinder leading into the two Reawakens means that Ire will need to be triple weave, which is not possible for many players. As such, the easiest and most consistent way is to follow the rules of ~10 seconds before Ire, only use Dual Wield combos, and continue an active combo before starting the next twinblade combo.

Please note that for the sake of simplicity, standard buff alignment is considered as most buffs being active at 6.5 seconds and used on cooldown from there. **There are slight variations in the real time that buffs are used based on job, and there is also buff propagation that may make buffs apply slightly earlier/later. You can and should adjust based on your party's buff timings!**

There are two primary variations of our burst that we will use for most situations:

* **Standard Double Reawaken**

  * This Double Reawaken variant is the standard burst window for putting maximum potency in party buffs. It uses a GCD between Ire and Reawaken, and is performed by using Serpent’s Ire on cooldown, then using the next dual wield combo GCD, then immediately using two full Reawakens back to back. This delays the entire burst sequence by one GCD relative to Ire, without delaying Ire to do so. This allows for maximum potency in party buffs, assuming standard buff alignment. 
  * This sequence should almost always be done during standard gameplay. 
  * This sequence assumes that buffs have been properly taken care of and will not fall off during the sequence.
  * It is possible to fit an Uncoiled Fury after the second Ouroboros to potentially catch any later buffs, however care must be taken that this will not cause Hunter's Instinct or Swiftscaled to fall off. 
  * **Party buffs shown are an estimate.**

![](/img/jobs/vpr/viperstandarddoublereawakenv3.png)

<br>

* **Immediate Double Reawaken**

  * This Double Reawaken variant starts the first Reawaken immediately after Ire, and uses no fillers between Reawakens. Serpent’s Ire is used off cooldown, directly followed by the first Reawaken of this window. After completing the first Reawaken, immediately enter and complete the second Reawaken. 
  * This window can be used as a means of getting more potency out before the end of a fight or before the end of phase. However, it should not be used regularly as the party buff contribution of this window is lower.
  * This sequence assumes that buffs were properly taken care of and will not fall off during the sequence.
  * **Party buffs shown are an estimate.**

![](/img/jobs/vpr/viperimmediatedoublereawakenv2.png)

# 2. Planning For Downtime

Melee downtime occurs when mechanics force the player out of melee range for a period of time longer than what they are able to roll their GCD through, or when there are no targets available to cast abilities on. For the purposes of this guide, it is assumed that melee greed for the uptime is not possible, and a disconnect is truly the only possibility.

## 2.1 Disconnect Planning

Viper generates four Rattling Coils every two minutes. Three are generated from twinblade combo starts, and one from Serpent’s Ire. Given that Uncoiled Fury and its follow up oGCDs can be used from range, this makes Rattling Coils a powerful disconnect tool. Uncoiled Fury also has a longer GCD recast of 3.5s base (2.97s with 15% haste buff active) which makes it ideal for disconnects as the player has more time to be away from the target without the GCD clock stopping. With some planning, Rattling Coils can also be held and pooled for longer disconnect segments. If there is a mechanic that forces six seconds of melee downtime, VPR can hold two Uncoiled Furies and completely cover that mechanic. However, being out of melee range does mean losing auto attacks, so the player should still try to get back into melee range as soon as possible. 

Due to the extreme flexibility of when Rattling Coils are used, Vipers should almost never need to use Writhing Snap. Planning to use Rattling Coils instead will result in a direct potency gain. To directly compare Rattling Coil and Writhing Snap, we need to first convert both into potency per second, since they have different GCD times. Uncoiled Fury and its two follow up oGCDs are 1020 potency in 2.97s, where Writhing Snap is 200 potency in 2.12 seconds. This translates to a potency per second (PPS) of 343.43PPS for Rattling Coil and 94.34PPS for Writhing Snap. This is a drastic difference, and Writhing Snap should be avoided when possible. However, if no Rattling Coils are available for whatever reason, it is still better to Writhing Snap than to do nothing! 

## 2.2 Disconnect Planning During Burst Windows

One possible situation that we may find ourselves in with the coming Dawntrail raids is having a forced disconnect during a two minute burst window. Viper has a flexible use, 2.97s GCD disengage tool in Uncoiled Fury (UF). UF allows us to keep our GCD rolling from range, but we still lose auto attacks while not in melee range. This, however, is significantly less of a loss than doing nothing. With having a 60 second timer on the combo finisher buff and Honed Steel/Reavers buffs, and 40 second timer on the haste buff haste damage buffs, we can safely use UF in the middle of our burst without dropping any buffs. However, using UF during a Standard Double Reawaken means that the final Ouroboros will fall out of buffs. There is a simple solution for this: we instead do an Immediate Double Reawaken and continue our active combo after the second Ouroboros. Please be aware that if you do have an active combo going into this, you have about two seconds to continue/finish the combo after the second Ouroboros before the combo expires. You should be able to refresh the combo finisher buff with about four seconds to spare. The exact placement of the UF within the burst window doesn't really matter, as it will be handled the same way no matter where it ends up being needed. 

If the forced disconnect will be more than one GCD, two UFs in our burst sequence makes it impossible to actually do a Double Reawakening. In this case, use a single Reawaken under party buffs, using two UFs where necessary. Refresh your buffs as needed following this, then spend what would have been your second Reawaken outside of buffs. This situation is absolutely terrible for raid buffs, but again is better than doing nothing during the disconnect. It may be possible to fit two partial Reawakens in a way that nets more Reawaken actions in buffs without dropping buff/debuff uptime or the combo finisher buff, but it will take specific planning based on the fight and which specific burst window it occurs in.

## 2.3 Untargetable Downtime Preparation

While the exact specifics of what should be done around untargetable downtime will need to be resolved with spreadsheeting and planning, there are some general rules that can be followed leading up to these downtime periods.

1. Spend twinblade combo stacks before downtime to ensure there is no overcap during the downtime. If the downtime is less than 40 seconds, then ensure one stack will be available at the end of the downtime (either via holding a stack or planning for one to come back during the downtime).
2. Spend Rattling Coil stacks as necessary before the downtime to avoid overcapping if Serpent’s Ire or a twinblade combo would be used immediately following.
3. Be mindful of party buffs. If there is a party buff window immediately following the downtime, ensure that at least 50 Offerings will be ready to perform a Double Reawaken window during party buffs. 

# 3. Manipulating Positionals

There are two ways that we can manipulate our positionals as needed. We will refer to this as “direct manipulation” and “timing manipulation.” Positional manipulation may be useful if a fight has mechanics that don’t allow, say for example, rear positionals for a specific point in time, but allow flanks every time. While it is easy enough to just say cover it with True North, you may want to optimize and manipulate positionals in the case that you do not have access to True North at that time. Optimizing positionals is incredibly important at higher levels of gameplay.

## 3.1 Direct Manipulation

Given that there are positionals on the second and third twinblade hits, as well as the combo finisher of each dual wield combo, we have some choice in the overall flow of positionals throughout the fight. We can directly choose which positional we want first each twinblade combo, as there is no buff that carries over from combo to combo. Assuming we don’t need to select a twinblade combo order based on our Hunter’s Instinct and Swiftscaled buffs, we can choose the positional that we are going to be able to hit. Dual wield combo is less flexible if following the standard opener since we start the fight with Reaving/Steel Fangs -> Swiftskin’s Sting. This locks our first positional of the fight to be a rear. 

## 3.2 Timing Manipulation

We can manipulate the exact timing that we would execute our positionals by spending Rattling Coil to delay the positional 2.97s. For this to work, however, we must ensure that doing so does not drop any of our buffs. This technique can be useful for when the order of the positionals changing would not ensure hitting them, but delaying them for a couple seconds would. 

# 4. Dead Zoning

Dead Zoning is a term that means pooling gauge outside of two minute party buffs for a specific purpose, instead of spending it. In Viper’s case, deadzoning means to avoid spending Serpent Offerings outside of the two that get put into party buffs. There are several reasons why a Viper might do this. For one, there could be a downtime section that, if the extra Reawaken was used, would prevent generation of 50 Offerings leading into a party buff window. Pooling the gauge could allow for the Viper to Double Reawaken where they otherwise wouldn’t be able to. When to Dead Zone will be a specific optimization that needs to be planned for each fight to determine the best course of action. *Special attention must be taken when attempting Dead Zoning. VPR is resource positive, which means that Dead Zoning in full uptime will result in overcapping Offering gauge.*

# 5. Medicated (Potion/Gemdraught) Usage

## 5.1 Potion Timings

In Dawntrail, the new potions are called Gemdraught of Dexterity. Like all pots before them, Gemdraughts come with a grade number, with the higher the number equating to a stronger damage buff. I.e. Grade 2 Gemdraughts are stronger than Grade 1 Gemdraughts. For simplicity, Medicated will be referred to as “pot” or “pot buff.” Pot timings are another fight-by-fight specific optimization, but there are some fundamental rules for when to use a pot. 

1. Kill time determines how many pots you will get, and therefore when you use the pot. 
2. More uses of a pot is almost always better than losing a use to align pots with party buffs. *There are exceptions to this.* 
3. Pots should be used where they gain the most potency for your job. They do not have to be used at the exact same time as everyone else as they are only a personal buff.

Using these rules can plan our pot uses for a full uptime fight based on the following:

* A fight lasting between 6:30-7:00 will use a pot in the opener and a pot at 6:00 minutes.
* A fight lasting between 7:00 and 8:00 will use a pot at 2:00 and 7:00. 

  * With Viper getting an extra Reawaken at 7 mins, this allows us to do pots at 2:00 and 7:00 if the fight allows for it, since we will get two Reawakens under the pot each time. This is stronger than an opener and 6:00 pot since the opener has less potency in the pot buff. 
* A fight lasting between 8:30-9:00 will use a pot at 2:00 minutes and 8:00 minutes.
* A fight lasting between 9:30-10:00 will get 3 uses of pot if used exactly on cooldown at the opener, 4:30, and 9:00.
* A fight lasting between 10:30-12:00 can use a pot in the opener, a pot at 5:00, and a final pot at 10:00.
* A fight lasting more than 12:00 can use a pot at the opener, 6:00, and 12:00. 

There is some gray area where a partial pot use might still outweigh doing an earlier pot. For example, it may still be worth it to do 0, 4:30, 9:00 pots with a 9:20 kill time. However, if you have a fight dying consistently at 8:15 for example, then 2:00 and 7:00 pots would be better than 2:00 and 8:00. Use your best judgement based on expected kill times. As a general rule, what gets more pots/more total pot duration in the fight is often the better option. If your expected kill time is within a gray area where one option or another could be better, use the spreadsheet linked at the beginning of this guide to build the rotation and compare each option. 

Historically, there has never been a fight without downtime that is longer than about 12:00 minutes, so planning past that point is not necessary. This is a general overview, and does not take into account fight specific optimizations where the group shifts their party buffs instead of using them on cooldown. *Fight specific optimizations take precedence but need to be properly planned out to avoid losses.*

## 5.2 Example and Optimal Potion Windows

Exactly what should be put into the pot buff will also depend on when it is used. An even minute pot should at minimum contain two full Reawaken sequences, and should also contain one Uncoiled Fury and its follow up oGCDs if possible without dropping personal buffs. If potting at an even minute burst window, most often the pot will be used after the GCD before Reawaken is used. If this GCD is not a combo finisher, late weave the pot to potentially buff more potency at the end of the buff's duration. If this GCD is a combo finisher, pot in the first weave slot to get Death Rattle in the pot. An example of this would be: 

![](/img/jobs/vpr/vprevenpotexample.png)

**Please note the exact combo GCDs shown are an example, and it will not always line up with these exact GCDs!**

It is possible to optimize even more potency into the pot, but it requires significantly more setup than the above usage. There are two options to achieve this, the first is significantly more flexible and easier than the second, and has only 230 less raw potency under the pot buff than the second option. This translates to a difference of about 18 raw potency less gained from the easier option. 

The easier option requires combo neutrality going into it, meaning there is no active combo. This sequence cannot be done if there is an active combo, as the combo will break if the sequence is performed, or it will require continuing the combo in the middle of the sequence. Both options are lower potency than simply fitting in the bare minimum shown above! To perform this sequence, at about 5-6 seconds left on Serpent's Ire cooldown, start a Vicewinder combo. This may require holding a Vicewinder charge that had come off cooldown within the last 40 seconds if a charge would not naturally be available here. From there, follow this sequence:

![](/img/jobs/vpr/vprmoreoptimalpot.png)

Note: Triple weaving after Swiftskin's Coil is possible without clipping on low ping. If triple weaving is not possible for you, you can delay the Serpent's Ire to after the first Reawaken. Do note that your Serpent's Ire is now 1 GCD later if you do this, and it may be necessary to switch from Standard Double Reawaken to Immediate Double Reawaken to keep raid buff alignment for the rest of the fight. 

The second-most optimal pot usage requires an extremely tight setup, and a single mistake will lose far more than the gain from the pot. This option should only be used if it lines up perfectly to do so. This option can only be performed if the GCD pressed at 11-12 seconds before Serpent's Ire is off cooldown is a combo starter. Furthermore, this sequence requires holding a Vicewinder charge so that two Vicewinders may be used during the sequence. Finally, you must have exactly one Rattling Coil stored going into this sequence. If a fight requires the usage of Uncoiled Fury for uptime, then this window becomes much less likely to be viable as the potency gain from using UF for uptime significantly outweighs the potency gain of putting it into pot buff. Any deviations from these conditions will automatically result in the sequence failing, and become a potency loss! Do note that this sequence can also be performed outside of Serpent's Ire windows if you are able to fulfill the correct conditions while hitting 100 gauge before the first Reawaken.

To perform this sequence: 

1. At 11-12 seconds before Serpent's Ire is off cooldown, start a dual wield combo.  
2. Take note of which Sting GCD will be used next.
3. Start a Vicewinder combo after the dual wield combo starter. 
4. If Hunter's Sting is the next Sting GCD, use Hunter's Coil first. If Swiftskin's Sting is the next Sting GCD, use Swiftskin's Coil first. *Failing to do this will cause the sequence to fail!* 
5. Finish the Vicewinder combo.  
6. Use the appropriate Sting GCD.
7. Serpent's Ire should now be ready, and should be used here. 
8. Finish the dual wield combo and pot in the first weave slot, then use Death Rattle. 
9. Perform two Reawaken sequences back to back.
10. Spend three Uncoiled Furies and their follow up oGCDs. 
11. Start another Vicewinder combo.
12. If the first Vicewinder combo started with Hunter's Coil, start this combo with Swiftskin's Coil. If the first started with Swiftskin's Coil, start with Hunter's Coil instead. *Failure to do so will result in personal buffs dropping, making the sequence a potency loss overall.*

To visualize, the sequence looks like this:

![](/img/jobs/vpr/vpr3ufpot.png)

Remember that the dual wield combo GCDs could be their opposite options as well, depending on where this window is and how it lines up (i.e. Steel Fangs could be Reaving Fangs instead, Hunter's Sting could be Swiftskin's Sting, and the Flank finisher could be a Rear finisher instead).

Finally, the most optimal pot window we can perform puts 40 additional potency into our pot buff vs. the Triple UF Pot window. While the setup for this window is not as strict as the Triple UF Pot, there are still considerations for whether or not this pot window can be used. In full uptime. this window can happen naturally at the 2:00 mark, but requires a triple weave of Serpent's Ire plus the two follow up oGCDs from Hunter's/Swiftskin's Coil. This sequence can also be performed at ~7:00 using the extra odd Reawaken we naturally generate from gauge positivity, if the fight allows for a 7:00 pot. 

This window is possible at 2.12, 2.11, and 2.10, but is extremely tight at 2.12. Any clipping at 2.12 will result in both dropping the final Uncoiled Fury from the potion, as well as pushing the final Ouroboros out of party buffs, resulting in losing potency compared to other potential pot windows. At 2.11 and 2.10, the timing is less strict and a small clip will not have the same consequences. It is also more likely to land the final Ouroboros in party buffs, even if some buffs are slightly early. 

To perform this window:

1. Ensure you have at most 2 Rattling Coils. Having 3 will result in an overcap. If this window will be used with Serpent's Ire, have at most 1 Rattling Coil stack. 2 or more will result in an overcap. 
2. If performing this sequence at without Serpent's Ire, ensure you have 80 gauge before the first Vicewinder. 
3. Perform the first two combo actions of the standard dual wield combo (i.e. Steel Fangs -> Hunter's Sting).
4. Start a Vicewinder combo immediately after the second combo action of the dual wield combo. 
5. Weave your potion as late as possible immediately following Vicewinder. 
6. Finish the Vicewinder combo. If you are doing this sequence as part of the 2:00 window, Serpent's Ire will be triple weaved after the second Coil GCD. 
7. Finish the dual wield combo and follow it up with Death Rattle. 
8. Perform two full Reawaken sequences back to back.
9. Use Uncoiled Fury after the second Ouroboros.

To visualize, the sequence looks like this:

![](/img/jobs/vpr/viper-strongest-pot-window.webp)

Please note that the combo finisher can be any of the four finishers, and Flanksbane Fang was only used here as an example. If this was being done at 2:00, Serpent's Ire would be triple weaved after the Swiftskin's Coil in the above visual. 

## 5.3 Choosing Which Pot Window to Use

Exactly which pot window will be used is strongly based on the context of the fight in which it is being considered for. A 2:00 pot is not possible or optimal in some fights because it would prevent a second pot usage, for example, which might make our most optimal pot window impossible to pull off correctly. The Triple UF Pot and most optimal pot window require strict combo states, meaning exactly what part of the dual wield combo you are on at a specific time, to be able to set up properly. This means that determining which pot window to use will come down to spreadsheeting the fight and comparing to see what comes out the best. There are non-standard techniques that can be used to force specific alignments for these pot windows, but they again strongly depend on fight specifics. The upcoming Advanced Guide will have more information about these non-standard techniques when it is finished. 

# 6. Triple Ouroboros in Pot Buff

The changes to Viper in patch 7.05 allow for more flexibility in rotational optimization with the removal of one restrictive timer and the extension of another. This left us with only two 40 second timers: Swiftscaled and Hunter's Instinct. Our remaining timers are 60 seconds long, and therefore aren't going to be a concern. This change is very important for the possibility of the fabled Triple Reawaken, because before 7.05 you would at minimum drop two buffs, making it instantly a significant potency loss to attempt. Now however, Triple is not only possible, but a potency gain. Remember that because party buffs are only 20 seconds, Triple is only a personal pot optimization, and does not put extra potency into party buffs. 

There is a very important reason why this is possible even though mathematically the sequence takes slightly longer than 40 seconds, so you'd expect your 40 second buffs to expire. However, when you apply Hunter's Instinct or Swiftscaled, the timer is applied as soon as you press the button, but pauses until the damage application. This effectively makes the timer actually 40s + application delay. There is a chart at the end of this guide with application delays for all Viper abilities for reference. This makes Hunter's Instinct applied by Hunter's Coil last about 40.98 seconds, and Swiftscaled from Swiftskin's Coil last about 41.47 second. This is important because we will be using Hunter's and Swiftskin's Coils to refresh our buffs at the start of the sequence. 

Before we get into how Triple Reawaken is performed, some disclaimers need to be made. First, this is virtually always going to require spreadsheeting to determine if it is actually worth it to use in a real fight. Depending on how the sequence lines up based on the fight, this sequence could be misaligned from raid buffs and put slightly less potency into them than a Standard Double Reawaken. Second, depending on when this window is attempted in the fight, its very likely that Serpent's Ire will need to be delayed to make the sequence work. This has the potential for issues later depending on fight specifics, especially quicker kill times that would potentially cause a lost reawaken from the delayed use. Third, this window is extremely tight to pull off correctly, and a single mistake will lose more potency than you would have gained. Finally, this sequence is a gain on any GCD speed, but is less of a gain on 2.11 and 2.12. 2.10 and faster will be able to retain the Hunter's Instinct buff through the entire sequence, but 2.11 and 2.12 will drop the buff right before refreshing it, losing a bit of potency. However, it is still a net gain on all speeds.

With these out of the way, the rules for how to perform a Triple Reawaken under pot are as follows: 

1. Spreadsheet based on fight specifics to ensure it is worth it!
2. Dual wield combo finisher must have been the last dual wield GCD used before starting this sequence.
3. Two Vicewinder charges will be used during the sequence. Ensure one will be available each time it is needed. Holding a charge from earlier in the fight may be required for this.
4. Must have zero stacks of Rattling Coils before starting the sequence. Failure to do so will result in overcapping. Overcapping may be acceptable if there would not be enough time to get the final Uncoiled Fury casts anyway (see point 1!). 

   * It is possible to use an Uncoiled Fury immediately after the first Vicewinder in the sequence, but it **must** be done before using either of the two Coil GCDs, or buffs are guaranteed to drop. 
5. Must have a minimum of 90 Serpent Offerings before starting the sequence. Overcapping gauge to have the appropriate amount is only acceptable if it will not cause a lost use of Reawaken (see point 1!).
6. Ire can be triple weaved after the second Coil GCD of the first Vicewinder combo at low ping if it will not result in a clip. If it would clip, Ire must be delayed until after the first Ouroboros.
7. Pot may be weaved as late as possible without clipping to guarantee the final Ouroboros is buffed, however there should be enough time to catch the Ouroboros even without doing this. 
8. Hunter's Coil and Swiftskin's Coil must be used in the same order for both Vicewinder combos. Swapping the order for the second set will guarantee dropped buffs.
9. Dual wield combo buffs will be close to falling off at the end of this sequence. Ensure they do not fall off by doing another dual wield combo before spending all banked Uncoiled Fury stacks. 

![](/img/jobs/vpr/vpr3rapot.png)

If performed correctly, this sequence should result in a net gain of about 134 potency at 2.10 and faster, and 72 potency at 2.11 and 2.12 (due to Hunter's Instinct dropping just before the second Hunter's Coil cast, losing 62 potency) over the strongest non-Triple option, the Three Uncoiled Fury pot. 

# 7. Viper 10 Minute Rotation Overview

Assuming full uptime, we can use the information above to have a general idea of the flow of the rotation over 10 mins while putting as much potency into party buffs as possible. We can reliably force a Standard Burst window with no issues following the standard rules discussed above until 6 minutes. Because VPR is a gauge positive job, we are able to use two Reawakens between the 6 and 8 minute burst window without compromising our ability to Double Reawaken at those windows. However, to compensate for this, we cannot use 4 Rattling Coils between 6 and 8 minutes, as they do not generate gauge. In order to have gauge for the 8 mins buffs, we spend only two of our four Rattling Coils between 6 and 8 minutes. This means we will cap at three Rattling Coils at the 8 min burst when we use Serpent’s Ire. 

Since we are capped, we must spend at least one Rattling Coil before starting the next twinblade combo. The easiest way to do this is to use it right after finishing the current dual wield combo that is active during the burst. Follow the standard rotation priorities and spend all Rattling Coils before starting the Double Reawakening window at 10 mins. Be sure to only use dual wield combos within ten seconds of Serpent’s Ire coming off cooldown. From here, due to the alignment changes caused by the extra Reawaken between 6 and 8 mins, we need to do an Immediate Double Reawaken to stay aligned with party buffs. Doing a Standard Burst here is technically possible, but if party buffs have not drifted at all, the final Ouroboros will only have a 0.4s leeway for catching party buffs before they expire. This makes our 10 minute overview of the rotation look something like this:

All values include the Opener and Double Reawakening sequences.
Dual wield combo count includes only finishers done within that time frame. Combos started in one time frame but finished in another are counted in the time frame in which they are finished.

| Time        | 2min Burst Window Type | Reawakens | Twinblade Combos | Rattling Coils | Dual Wield Finishers |
| ----------- | ---------------------- | --------- | ---------------- | -------------- | -------------------- |
| 0:00-1:59   | Standard               | 2         | 4                | 5              | 8                    |
| 2:00-3:59   | Standard               | 3         | 3                | 4              | 8                    |
| 4:00-5:59   | Standard               | 3         | 3                | 4              | 9                    |
| 6:00-7:59   | Standard               | 4         | 3                | 2              | 7                    |
| 8:00-9:59   | Standard               | 3         | 3                | 6              | 7                    |
| 10:00-10:59 | Immediate              | 2         | 2                | 2              | 3                    |

The 10 minute burst can be a Standard Burst depending on party buffs' natural drift, 
but Immediate is safer for getting the second Ouroboros into buffs.

We care very little for the specific placement of Reawakens, twinblade combos, Rattling Coils, and dual wield combos outside of Double Reawaken as long as we keep our debuffs and buffs active, avoid dropping the combo finisher buff, and avoid overcapping Rattling Coils, twinblade stacks, and Offering gauge. Feel free to move things around as needed as long as these conditions are met. 

# 8. Buffless Party Compositions

With the addition of VPR, it is now possible to have an eight-player party with no party buffs. This comp would consist of any two tanks, SGE, WHM, SAM, VPR, MCH, and BLM. With this comp, there is no need to optimize the rotation around feeding potency into party buffs. Instead, ensure that the basic rules of the job are followed. Put extra potency, if possible, into your own potion windows.

# 9. 2.48/2.10 GCD Rotation Adjustments

For ease, GCD speeds will be referred to by the speed of the dual wield combo at specific skill speeds. Listing the speed for all five different GCD speeds each time would be overkill. With that in mind, 2.5/2.12 means that we have no skill speed, and our dual wield combo GCDs are 2.5 without haste and 2.12 with. 

Everything in this guide up to now assumes that we are using a GCD speed of 2.5/2.12. However, given the previous trends of Ninja being given a skill speed ring during several savage tiers, the possibility of having a 2.48/2.10 BiS is very high. Furthermore, at the time of writing this guide, our gearing options put us at a 2.48/2.10 GCD. Which specific GCD will be preferred will largely depend on the gearing options available for that savage tier. For the most part, the 2.48/2.10 rotation is identical to the standard GCD of 2.5/2.12. However there are a couple of adjustments that can be made. 

The first adjustment provides slightly better alignment with Serpent's Ire at the first even minute burst. To do this, at the 2:00 burst window, a single UF must be held (this means we will be at two stacks of Rattling Coils after pressing Serpent's Ire). This allows us to enter the Standard Double Reawaken window by doing Hindsting Strike (or Hindsbane Fang depending on which of the two was selected first in the opener) -> Serpent's Ire -> Death Rattle -> Reaving/Steel Fangs -> Reawaken. The UF that was held can be freely spent as normally between the 2:00 and 4:00 windows. 

The second adjustment is optional and may be a significant gain at kill times that are too fast to get the extra Reawaken that would normal occur around the 7 minute mark. This adjustment shifts around Uncoiled Furies in order to get the extra Reawaken before the 6 minute burst window. To perform this, use two Reawakens between the 4 and 6 minute bursts. To get enough gauge to be able to Double Reawaken at 6:00 still, we need to hold two UFs through the burst (i.e. we will have three Rattling Coils after pressing Ire). We must also add an extra GCD between pressing Serpent's Ire and Reawaken. This has a high potential to push the second Ouroboros out of party buffs. If this gains an extra Reawaken before the boss dies, however, this gain significantly outweighs the loss of Ouroboros in buffs. 

# 10. Viper Application Delays

All skills in FFXIV have a delay between when the ability is executed and when the effect is actually applied. This is called application delay. Please note that FFXIV operates on a snapshot system. Instant cast abilities snapshot when the cooldown clock starts spinning. This makes it possible for a buff to be applied to an ability when the snapshot happens, but expires before the damage actually lands. In this case, because the buff was present for the snapshot, the ability is still buffed when the damage actually applies. 

Below you can find a table of VPR abilities and their application delays. 

![](/img/jobs/vpr/vpr-application-delay-1-.png)
