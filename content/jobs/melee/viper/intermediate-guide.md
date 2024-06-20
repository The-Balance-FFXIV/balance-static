---
title: Viper Intermediate Guide
authors:
  - ToraelValdis
  - Balance-VPR-Staff
patch: "7.0"
lastmod: 2024-06-20T05:44:05.272Z
changelog:
  - date: 2024-06-20T05:44:33.192Z
    message: Guide added to website
---
# 1. Introduction

Special thanks to Akashi, Jackal, Azazel, Azrael, Stella, and Rhy whose work religiously theorycrafting this job made this guide possible. 

***This guide assumes that the player has a firm grasp of the concepts presented in the VPR Basic Guide. If this doesn’t apply to you, give that guide a read before returning here.*** This guide will be focused on more Intermediate level concepts of VPR, such as burst window optimization with party buffs, planning for downtime, and other rotation optimization.  

Everything discussed in this guide was tested using [Jackal’s VPR Rotation Planner](https://bit.ly/3VtZvkL), which can be found here with a sample rotation.

# 2. Viper Intermediate Rotation

## 2.1 Playing Into Party Buffs

While it is possible to purely follow the priority system mentioned in the basic guide, which would involve sending Reawakens essentially as soon as they are available, this comes at a significant loss of potency inside party buffs. By pressing Serpent’s Ire on cooldown and then subsequently using the Reawaken from it, at least one partial Reawaken window will be inside party buffs. However, with a small bit of planning, it is possible to send one full and one partial Reawaken inside party buffs, which is a sizable potency gain. 

In a full uptime scenario, Viper generates enough Offerings to use one Reawaken per minute. Serpent’s Ire also grants one free Reawaken, meaning that Viper will have enough gauge to do three Reawakens every two minutes. The two minute time frame is used because party buffs are on a 120s cooldown timer. Viper also generates an average of 10 more Offerings than it spends every two minutes, which means that it will have one extra Reawaken to use between six and eight minutes. However, this is the only extra Reawaken possible as a fight would need to be a full uptime fight much longer than any that has ever been released.

The simplest way to manage these Reawakens and still put maximum potency into party buffs is to save at least 50 Offerings for when Sepent’s Ire is available and use both the free Reawakening from Ready to Reawaken and the Reawakening from the 50 gauge. Therefore, since Viper only generates enough gauge for three Reawakens in a two minute span (including the free Reawaken from Ire), only one Reawaken should be used outside of party buffs. The table below demonstrates the general timings for when each Reawaken will be used. Times given are a general estimate, and not to be taken literally. Note the extra Reawaken at 7:00 due to our surplus of gauge.

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

### 2.1.1 Two Minute Burst Windows

There are three primary sequences that we can use to put two Reawakens into party buffs, henceforth referred to as Double Reawaken windows. To set up each window, it is assumed that four Rattling Coils and three twinblade combos have been used between each burst window. (Please note that the 6-8 min section only uses two Rattling Coils, and the 8-10 min section uses six as a direct result of having an extra Reawaken at around 7:00. This is discussed more later in this guide.) Furthermore, at least 30 seconds of Noxious Gnash is required to complete these windows without the debuff falling off. It is recommended to use Dread Fang to start your final dual wield combo before entering Reawaken. 

The simplest way to set up your dual wield combo for an upcoming two minute burst window is to use Serpents Ire as a timer. Around 15s left on Ire’s cooldown, you should start a dual wield combo. After completing that combo, start another combo with Dread Fangs. This will ensure that there is enough time on Noxious Gnash to last through the burst window. These combos need to be dual wield combos, and not twinblade combos, in order to maintain the combo finisher buff through the burst window. Twinblade combo instead would cause it to fall off, or in some permutations where it doesn't fall off, delay the second Ouroboros out of party buffs. If this is not enough, start the previous combo with Dread Fangs as well. From there, follow the burst windows below.

There are three primary variations of our burst that we will use for most situations:

* **Standard Double Reawaken**

  * This Double Reawaken variant is the standard burst window for putting maximum potency in party buffs. It uses a GCD between Ire and Reawaken, and is performed by using Serpent’s Ire on cooldown, then using the next dual wield combo GCD, then immediately using two full Reawakens back to back. This delays the entire burst sequence by one GCD, without delaying Ire to do so. This allows for an extra Reawaken ability in party buffs. 
  * This sequence should almost always be done during standard gameplay. 
  * It also assumes that the most recent combo finisher was completed after the most recent twinblade combo. Attempting to do this window without meeting this condition will result in the combo finisher buff dropping.

![](/img/jobs/vpr/standarddoublev1.png)

* **Finisher-Split Double Reawaken**

  * This Double Reawaken can only be executed if there is an active dual wield combo chain, and the next GCD in the chain is any of the four combo finishers. A buffed combo finisher plus Death Rattle has equal potency to a Generation plus Legacy from the Reawaken window. This window is performed by using Serpent’s Ire on cooldown, and following it immediately with the first Reawaken. After using Ouroboros, use the active combo finisher and Death Rattle, then immediately enter Reawaken again. 
  * Finisher-Split Double Reawaken delays the second Reawaken by one GCD. This window should only be used as a last resort if the combo finisher buff would fall off before the end of the second Reawaken. It is best to avoid this window if possible by managing twinblade and dual wield combos properly, but is an option if this is not possible for whatever reason. 

![](/img/jobs/vpr/immediatedoublev1.png)

* **Immediate Double Reawaken**

  * This Double Reawaken variant starts the first Reawaken immediately after Ire, and uses no fillers between Reawakens. Serpent’s Ire is used off cooldown, directly followed by the first Reawaken of this window. After completing the first Reawaken, immediately enter and complete the second Reawaken. 
  * This window can be used as a means of getting more potency out before the end of a fight or before the end of phase. However, it should not be used regularly as the party buff contribution of this window is lower.
  * This sequence assumes that the most recent combo finisher was completed after the most recent twinblade combo. Attempting to do this window without meeting this condition will result in the combo finisher buff dropping.

![](/img/jobs/vpr/immediatedoublev1.png)

## 2.2 Planning For Downtime

Melee downtime occurs when mechanics force the player out of melee range for a period of time longer than what they are able to roll their GCD through, or when there are no targets available to cast abilities on. For the purposes of this guide, it is assumed that melee greed for the uptime is not possible, and a disconnect is truly the only possibility.

### 2.2.1 Disconnect Planning

Viper generates four Rattling Coils every two minutes. Three are generated from twinblade combo starts, and one from Serpent’s Ire. Given that Uncoiled Fury and its follow up oGCDs can be used from range, this makes Rattling Coils a powerful disconnect tool. Uncoiled Fury also has a longer GCD recast of 3.5s base (2.97s with 15% haste buff active) which makes it ideal for disconnects as the player has more time to be away from the target without the GCD clock stopping. With some planning, Rattling Coils can also be held and pooled for longer disconnect segments. If there is a mechanic that forces 6 seconds of melee downtime, VPR can hold two Uncoiled Furies and completely cover that mechanic. However, being out of melee range does mean losing auto attacks, so the player should still try to get back into melee range as soon as possible. 

Due to the extreme flexibility of when Rattling Coils are used, Vipers should almost never need to use Writhing Snap. Planning to use Rattling Coils instead will result in a direct potency gain. To directly compare Rattling Coil and Writhing Snap, we need to first convert both into potency per second, since they have different GCD times. Uncoiled Fury and its two follow up oGCDs are 900 potency in 2.97s, where Writhing Snap is 200 potency in 2.12 seconds. This translates to a potency per second (PPS) of 303.03PPS for Rattling Coil and 94.34PPS for Writhing Snap. This is a drastic difference, and Writhing Snap should be avoided when possible. However, if no Rattling Coils are available for whatever reason, it is still better to Writhing Snap than to do nothing! 

### 2.2.2 Disconnect Planning During Burst Windows

One possible situation that we may find ourselves in with the coming Dawntrail raids is having a forced disconnect during a two minute burst window. Because of how tight our timers already are even before adding in one Uncoiled Fury (UF), it is important to plan for this accordingly. There are several possibilities for what to do for this sequence, and all of them push an Ouroboros out of buffs. It is important to understand that while this will be an overall potency loss under party buffs, it is better than having no damage during the disconnect. 

Scenario #1: The disconnect will be for a maximum of one GCD. The natural sequence leading into burst is standard with the GCD between Ire and Reawakening being a combo finisher. In this situation, a single UF during the burst sequence will make it so there is not enough time to refresh the combo finisher buff before it expires. This is because we need to do an entire dual wield combo before refreshing the buff. The combo finisher before the first reawaken itself is 2.12s, two reawakens are 22.44s, UF is 2.97s, and two more combo GCDs is another 4.24s. This puts us at 31.77s between applying the buff, and the earliest we would be able to refresh it. Remember that the combo finisher buff only lasts for 30s. Therefore, the adjustment that we can make is to force a modified Finisher-Split Double Reawaken by starting Reawaken 1 immediately after Ire and finishing our active combo after the first Ouroboros. Do note that in this situation, it does not matter where the UF is in the first or the second Reawaken, or even between them, only that there is a total of one UF in the entire sequence. After the second Ouroboros, immediately enter the twinblade combo. Choose Hunter’s Coil or Swiftskin’s coil based on if your Hunter’s Instinct or your Swiftscaled buff has a lower duration remaining, refreshing the lower duration first. Below is a visual, made by Akashi, of how this would be executed. **These combo GCDs are used as an example and are not always the same for every burst!**

![](/img/jobs/vpr/scenario1placeholder.png)

Scenario #2: The disconnect will be for a maximum of one GCD. The natural sequence leading into burst is standard with the GCD between Ire and Reawaken being a middle combo GCD. This situation has the same restrictions as the first scenario. Doing a Double Reawaken with a UF in the middle of the sequence without refreshing the combo finisher buff. We can follow pretty much the same rules as the first scenario, except we cannot force Reawaken immediately after Ire since that would require using both the middle combo GCD and the finisher somewhere in the sequence. The first option would be to put both GCDs between Reawakens, but that will push out even more potency from party buffs. The second option would be to do the middle GCD between, and the finisher after the second Ouroboros, but this also leads to dropping the finisher buff. Therefore, with these things in mind, we simply force another modified Finisher-Split Double Reawaken. Just like in the first scenario, it doesn't matter where UF is used in the sequence. We will still use our active combo finisher plus Death Rattle between Ouroboros 1 and Reawaken 2, and follow up Ouroboros 2 with a twinblade combo. Just like scenario 1, make sure to use the appropriate second twinblade GCD to refresh your lowest buff first to avoid it falling off. Below is a visual, made by Akashi, for how this would be executed. **These combo GCDs are used as an example and are not always the same for every burst!**

![](/img/jobs/vpr/scenario2placeholder.png)

Scenario #3: The disconnect will be for a maximum of one GCD. The natural sequence leading into burst is standard, with the GCD between Ire and Reawaken being a combo starter. This is possibly the worst possibility for this to occur in, as the possible solutions for this involve starting the first Reawaken one GCD before Ire is ready, and still forcing a combo finisher between Reawaken sequences, or forcing two GCDs between Ire and Reawaken by performing both the first and second GCD of the combo before entering the first Reawaken and then finishing the combo after the first Ouroboros. This significantly changes the number of Reawaken GCDs in party buffs, equating to a more sizable party buff contribution loss than the other two options. It is still required to use the combo finisher between Ouroboros 1 and Reawaken 2, or the combo finisher buff will expire. This sequence should also be followed up with a twinblade combo, using whichever GCD first that will apply the buff with the lowest duration remaining. Please note that only the second solution discussed for this situation is possible in a full uptime fight, as there is not enough gauge available to do the Reawaken before Ire without significantly overcapping gauge beforehand, which is also a significant loss. Below is a visual, made by Akashi, of how this would be executed. **These combo GCDs are used as an example and are not always the same for every burst!**

![](/img/jobs/vpr/scenario3placeholder.png)

Situation #4: The forced disconnect will be more than one GCD. In this situation we no longer care about the specifics of the natural burst as two UFs in our burst sequence makes it impossible to actually do a Double Reawakening. In this case, use a single Reawaken under party buffs, using two UFs where necessary. Refresh your buffs as needed following this, then spend what would have been your second Reawaken outside of buffs. This situation is absolutely terrible for raid buffs, but again is better than doing nothing during the disconnect. It may be possible to fit two partial Reawakens in a way that nets more Reawaken actions in buffs without dropping buff/debuff uptime or the combo finisher buff, but it will take specific planning based on the fight and which specific burst window it occurs in.

### 2.2.3 Untargetable Downtime Preparation

While the exact specifics of what should be done around untargetable downtime will need to be resolved with spreadsheeting and planning, there are some general rules that can be followed leading up to these downtime periods.

1. Avoid wasting potency to extend the duration of Noxious Gnash through the downtime, unless doing so nets a potency gain (this needs to be spreadsheeted!).
2. Spend twinblade combo stacks before downtime to ensure there is no overcap during the downtime. If the downtime is less than 40 seconds, then ensure one stack will be available at the end of the downtime (either via holding a stack or planning for one to come back during the downtime).
3. Spend Rattling Coil stacks as necessary before the downtime to avoid overcapping if Serpent’s Ire or a twinblade combo would be used immediately following.
4. Be mindful of party buffs. If there is a party buff window immediately following the downtime, ensure that at least 50 Offerings will be ready to perform a Double Reawaken window during party buffs. 

## 2.3 Manipulating Positionals

There are two ways that we can manipulate our positionals as needed. We will refer to this as “direct manipulation” and “timing manipulation.” Positional manipulation may be useful if a fight has mechanics that don’t allow, say for example, rear positionals for a specific point in time, but allow flanks every time. While it is easy enough to just say cover it with True North, you may want to optimize and manipulate positionals in the case that you do not have access to True North at that time. Optimizing positionals is incredibly important at higher levels of gameplay.

### 2.3.1 Direct Manipulation

Given that there are positionals on the second and third twinblade hits, as well as the combo finisher of each dual wield combo, we have some choice in the overall flow of positionals throughout the fight. We can directly choose which positional we want first each twinblade combo, as there is no buff that carries over from combo to combo. Assuming we don’t need to select a twinblade combo order based on our Hunter’s Instinct and Swiftscaled buffs, we can choose the positional that we are going to be able to hit. Dual wield combo is less flexible if following the standard opener since we start the fight with Dread Fangs -> Swiftskin’s Sting. This locks our first positional of the fight to be a rear. 

### 2.3.2 Timing Manipulation

We can manipulate the exact timing that we would execute our positionals by spending Rattling Coil to delay the positional 2.97s. For this to work, however, we must ensure that doing so does not drop any of our buffs. This technique can be useful for when the order of the positionals changing would not ensure hitting them, but delaying them for a couple seconds would. 

## 2.4 Dead Zoning

Dead Zoning is a term that means pooling gauge outside of two minute party buffs for a specific purpose, instead of spending it. In Viper’s case, deadzoning means to avoid spending Serpent Offerings outside of the two that get put into party buffs. There are several reasons why a Viper might do this. For one, there could be a downtime section that, if the extra Reawaken was used, would prevent generation of 50 Offerings leading into a party buff window. Pooling the gauge could allow for the Viper to Double Reawaken where they otherwise wouldn’t be able to. When to Dead Zone will be a specific optimization that needs to be planned for each fight to determine the best course of action. *Special attention must be taken when attempting Dead Zoning. VPR is resource positive, which means that Dead Zoning in full uptime will result in overcapping Offering gauge.*

## 2.5 Medicated (Potion/Tincture) Usage

For simplicity, Medicated will be referred to as “pot” or “pot buff.” Pot timings are another fight-by-fight specific optimization, but there are some fundamental rules for when to use a pot. 

1. Kill time determines how many pots you will get, and therefore when you use the pot. 
2. More uses of a pot is almost always better than losing a use to align pots with party buffs. *There are exceptions to this.* 
3. Pots should be used where they gain the most potency for your job. They do not have to be used at the exact same time as everyone else as they are only a personal buff.

Using these rules can plan our pot uses for a full uptime fight based on the following:

* A fight lasting less than 8 minutes, but more than 6:30 will use a pot in the opener and a pot at 6 minutes.
* A fight lasting less than 9 mins but more than 8:30 will use a pot at 2 minutes and 8 minutes.
* A fight lasting more than 9:30 but less than 10:00 will get 3 uses of pot if used exactly on cooldown at the opener, 4:30, and 9:00.
* A fight lasting more than 10:30 but less than 12:00 can use a pot in the opener, a pot at 5:00, and a final pot at 10:00.
* A fight lasting more than 12:00 can use a pot at the opener, 6:00, and 12:00. 

Historically, there has never been a fight without downtime that is longer than about 12 minutes, so planning past that point is not necessary. This is a general overview, and does not take into account fight specific optimizations where the group shifts their party buffs instead of using them on cooldown. Additionally, exactly what should be put into pots that are not part of two minute windows will be something that will depend on the specific fight. *Fight specific optimizations take precedence but need to be properly planned out to avoid losses.*

**At the moment, we believe that the optimal place to pot when entering two minute windows is the GCD before Serpent’s Ire will be used.**

## 2.6 Viper 10 Minute Rotation Overview

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

## 2.7 Triple Ouroboros in Pot Buff

Given the length of pot buff and the seeming flexibility of Reawaken, it is natural to want to fit three Ouroboros under a pot. However, after much testing, we believe that it is currently not possible to do so without dropping some combination of Hunter’s Instinct, Swiftscaled, Noxious Gnash, and the combo finisher buff or from dropping a Generation GCD plus Legacy oGCD from one Reawaken. While technically possible to fit three Ouroboros under the pot, the losses from dropping the aforementioned buffs or Generation plus Legacy result in a potency loss that outweighs the gains from the extra pot potency. It is possible that some sequence will be found in the future, especially if there will be a fight with downtime that somehow aligns everything to allow for it. Furthermore, it is possible for a potential triple at the end of the fight if the fight would end before dropping combos/buffs becomes an issue. ***This is extremely fight-specific and will need spreadsheeting to see if it is actually a gain!*** For now however, in full uptime this will always equate to a net potency loss. 

## 2.8 Buffless Party Compositions

With the addition of VPR, it is now possible to have an eight-player party with no party buffs. This comp would consist of any two tanks, SGE, WHM, SAM, VPR, MCH, and BLM. With this comp, there is no need to optimize the rotation around feeding potency into party buffs. Instead, ensure that the basic rules of the job are followed. Put extra potency, if possible, into your own potion windows, *but remember that trying to fit three Ouroboros in pot is still going to be a loss overall as it guarantees dropping the combo finisher buff or personal haste/damage buffs and target debuff.*