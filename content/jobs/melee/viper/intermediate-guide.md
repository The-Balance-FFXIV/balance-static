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

## 2.1.1 Two Minute Burst Windows

There are three primary sequences that we can use to put two Reawakens into party buffs, henceforth referred to as Double Reawaken windows. To set up each window, it is assumed that four Rattling Coils and three twinblade combos have been used between each burst window. (Please note that the 6-8 min section only uses two Rattling Coils, and the 8-10 min section uses six as a direct result of having an extra Reawaken at around 7:00. This is discussed more later in this guide.) Furthermore, at least 30 seconds of Noxious Gnash is required to complete these windows without the debuff falling off. It is recommended to use Dread Fang to start your final dual wield combo before entering Reawaken. 

The simplest way to set up your dual wield combo for an upcoming two minute burst window is to use Serpents Ire as a timer. Around 15s left on Ire’s cooldown, you should start a dual wield combo. After completing that combo, start another combo with Dread Fangs. This will ensure that there is enough time on Noxious Gnash to last through the burst window. These combos need to be dual wield combos, and not twinblade combos, in order to maintain the combo finisher buff through the burst window. Twinblade combo instead would cause it to fall off, or in some permutations where it doesn't fall off, delay the second Ouroboros out of party buffs. If this is not enough, start the previous combo with Dread Fangs as well. From there, follow the burst windows below.

There are three primary variations of our burst that we will use for most situations:

1. **Standard Double Reawaken**

   * This Double Reawaken variant is the standard burst window for putting maximum potency in party buffs. It uses a GCD between Ire and Reawaken, and is performed by using Serpent’s Ire on cooldown, then using the next dual wield combo GCD, then immediately using two full Reawakens back to back. This delays the entire burst sequence by one GCD, without delaying Ire to do so. This allows for an extra Reawaken ability in party buffs. 
   * This sequence should almost always be done during standard gameplay. 
   * It also assumes that the most recent combo finisher was completed after the most recent twinblade combo. Attempting to do this window without meeting this condition will result in the combo finisher buff dropping.
   * ![](/img/jobs/vpr/standarddoublev1.png)
2. **Finisher-Split Double Reawaken**

   * This Double Reawaken can only be executed if there is an active dual wield combo chain, and the next GCD in the chain is any of the four combo finishers. A buffed combo finisher plus Death Rattle has equal potency to a Generation plus Legacy from the Reawaken window. This window is performed by using Serpent’s Ire on cooldown, and following it immediately with the first Reawaken. After using Ouroboros, use the active combo finisher and Death Rattle, then immediately enter Reawaken again. 
   * Finisher-Split Double Reawaken delays the second Reawaken by one GCD. This window should only be used as a last resort if the combo finisher buff would fall off before the end of the second Reawaken. It is best to avoid this window if possible by managing twinblade and dual wield combos properly, but is an option if this is not possible for whatever reason. 
   * ![](/img/jobs/vpr/finishersplitdoublev1.png)
3. **Immediate Double Reawaken**

   *