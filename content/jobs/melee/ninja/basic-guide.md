---
title: Ninja Basic Guide
card_header_image: /img/jobs/nin/basic.png
authors:
  - jackal
patch: "6.10"
lastmod: 2022-03-20T03:55:05.969Z
changelog:
  - date: 2021-10-29T03:08:27.069Z
    message: Created page
  - date: 2022-03-20T03:55:08.156Z
    message: Updated for Endwalker
  - date: 2022-05-27T17:56:53.705Z
    message: "Updated guide to 6.10. "
---
If you have any questions, feel free to ask in the #nin_questions channel.

## Overview

Ninja is a fast-paced yet flexible job with a high focus on a powerful burst every one and two minutes. It is unique from other jobs with its utilization of Ninjutsus, a combo-like system allowing a Ninja to form a multitude of ranged attacks. We have a personal buff every minute (Trick Attack) where we emphasize landing all of our biggest attacks within 15.77s.  

If you want a melee job with the most flexibility for disengagements and has a fast-paced burst phase and relaxing filler phase, then Ninja might just be the job for you!

**Resources**

⦿ [Video Demo](https://youtu.be/J_sEsvLXBYo): 6:30m fight demonstration following something similar to the rotation planner.

⦿ [Rotation Planner](https://bit.ly/364UOqG) for an visualization of a 6-minute rotation or the ability to spreadsheet any rotation.

⦿ [XIVAnalysis](https://xivanalysis.com/) is good for checking general mistakes and an improved timeline of a fight. \
**\
⦿ [Gear Planner](http://bit.ly/Gear-Planner) simulates predicted DPS based off gear, great for creating a set.**

## Core Concepts

**⦿**Huton grants us with a 15% reduction in auto-attack delay and skill-speed. This is one of the first gauges we get, and it is crucial for us to maintain this gauge with the use of Armor Crush when the gauge is 30s or below. Use of Armor Crush above 30s will result in waste of Huton gauge, which should be avoided. To start using Huton, we will cast Huton prepull. Huraijin is only ever used if our Huton drops on accident, on death, or through a long downtime segment.   

![](/img/jobs/nin/image24.png)

**⦿** Ninki is the second gauge we receive, and allows us to accumulate resources for use of Bhavacakra, Hellfrog Medium or Bunshin. Below is a table listing every ability and their Ninki amount. Bunshin will also add +5 Ninki to any GCD that consumes a stack of Bunshin. 

Furthermore, we ought to avoid ever overcapping on Ninki, even if we must burn gauge right before Trick Attack. Overcapped Ninki is potential oGCD loss, which is a far larger loss than the gain of getting more Bhavacakras under Trick. 

![](/img/jobs/nin/image25.png)

| +5 Ninki                                                                                                            | +10 Ninki          | +15 Ninki                 | +40 Ninki | +50 Ninki |
| ------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------- | --------- | --------- |
| Spinning Edge, Gust Slash, Death Blossom, Hakke Mujinsatsu, Fleeting Raiju, Forked Raiju, Throwing Dagger, Huraijin | Phantom Kamaitachi | Aeolian Edge, Armor Crush | Mug       | Meisui    |

⦿ Trick Attack is our single-target personal buff that increases damage by 10% you do to the target for 15.77 seconds every minute. Our goal is to utilize our own Trick Attack and fit as many high potency abilities as we can before it ends. 

At a glance, we want to fit Hyosho Ranyru, x2 Raitons, Ten-Chi-Jin, Dream Within a Dream, x2 Fleeting/Forked Raijus, Meisui, and as many Bhavacakras as we can weave. 

**⦿** Mug is our new raid buff that afflicts the target with a vulnerability debuff that increases damage taken by 5% for everyone hitting the target every 2-minutes. This provides a ton of utility for the group and should **NOT** be used selfishly after the opener. We use it 4.5s in the opener to allow earlier execution of Bunshin, but Mug should be delayed 1 GCD at 2m for better alignment with other raid buffs. Then used strictly off cooldown thereafter.

**⦿** Ninjutsus are unique abilities that we formulate with the Mudras: Ten, Chi and Jin. Refer to this [cheat sheet](https://media.discordapp.net/attachments/919447066168668171/920093248360439818/MUDRA_GUIDE_ew.png?width=704&height=545) for all the different mudra combinations.

**⦿** Kassatsu is an oGCD that grants an additional Ninjutsu and converts certain Ninjutsu combinations into much more powerful Ninjutsus. The buff lasts 15 seconds, so weaving this within the Trick Attack window is generally unnecessary. Kassatsu transforms Hyoton into Hyosho, and Katon into Goka Mekkyaku. 

## Openers

You may use **either** opener, but if you are unsure you can use the 3rd GCD Trick, as this helps avoid drift and gives the option to begin your Trick Attack burst sooner rather than a GCD later if needed

### Standard 3rd GCD Opener

![](/img/jobs/nin/ninopener.png)

⦿ It is important for the Suiton prepull to start being prepared at -6s on the countdown and used at -1s. This will not early pull the boss and will allow future Mudras to come off cooldown sooner.\
⦿ Late weave Trick Attack as much as possible without clipping.\
**⦿** Mug should be held a GCD after the opener (at next usage) then used strictly off cooldown after.

### 4rd GCD Alternate Opener

![](/img/jobs/nin/4th-gcd.png)

⦿ This version uses Trick Attack at 4th GCD instead of the standard 3rd. Susceptible to Trick drifting a GCD later in a full uptime fight, which could separate Trick from Mug by 2 GCDs, unless Mug was also held an additional GCD (at most, 1 GCD separation between Trick and Mug is desired).\
⦿ Exits the opener only slightly higher than 3rd GCD Trick, however under full uptime performs nearly the same. ⦿ Hold Mug a GCD after the opener (next usage) then strictly off cooldown after. This will align it with other 20s and 15s buffs.\
⦿ It is important for the Suiton prepull to start being prepared at -6s on the countdown and used at -1s. This will not early pull the boss and will allow future Mudras to come off cooldown sooner

## Basic Rotation

### Filler

Outside of a Trick Attack window, we will fill out most of our rotation with use of Spinning Edge -> Gust Slash -> Aeolian Edge. This is known as our **filler** and it allows us to burn time and continue doing damage until our next burst window. We will also be building plenty of Ninki in this time, and should burn any Ninki before we overcap. 

While normally we will be using Aeolian Edge as our standard combo finisher, we should switch to **Armor Crush** when any of the following is met:

* Our Huton gauge is somewhere below 30s.
* We need to cap Huton gauge to pull us through a long downtime segment. It would be better to overcap on Huton than drop it and be forced to use Huraijin on the reopener. 
* We are at the flank of the boss and are unable to go to the rear or don’t have True North available. Even if we overcap gauge, an Armor Crush with positional bonus is better than an Aeolian Edge without positional bonus.

**Note:** Huraijin shouldn’t be part of our rotation, and isn’t the optimal GCD to use to maintain our Huton gauge. We will only use Huraijin in situations where our Huton drops, such as on accident, death or through a long downtime segment.

### Ninki Maintenance

Throughout our rotation we will be building resources and spending Ninki as needed. Optimally, it is best if we pool our Ninki as high as possible **without** overcapping for our Trick Attack window, then dump as much Bhavacakras as weave space provides. Generally this will look to be between one to four Bhavacakras per Trick window.

| Ability         | Usage                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Bunshin         | Use on cooldown, don't hold for Trick Attack unless it is towards the end of the fight, and holding it won't cost you a usage. |
| Bhavacakra      | When there's only one or two targets. Only use on three targets if Bhavacakra is buffed by Meisui.                             |
| Hellfrog Medium | When there's three or more targets, even if Trick Attack is active.                                                            |

&nbsp;

### Ninjutsus

**[Cheat sheet](https://media.discordapp.net/attachments/919447066168668171/920093248360439818/MUDRA_GUIDE_ew.png?width=704&height=545)**

It is important for a Ninja to understand and confidently know each Ninjutsu combination, as our rotation demands excessive use of Ten, Chi and Jin to formulate some of our strongest GCDs. With a 20s cooldown on our mudras, we expect to get 3 natural Ninjutsus a minute. One Ninjutsu will be used on **Suiton** when Trick Attack is 20s or less on cooldown, as we need the Suiton buff to use Trick. The other two should be used ideally within Trick Attack as **Raitons**. 

**Kassatsu** provides us with an additional Ninjutsu every minute and should be used as Hyosho Ranyru on one to two targets, or as Goka Mekkyaku when there are 3+ targets. 

The only time we should **not use** Raiton within Trick Attack is when one of the following is met:

1. We must disconnect from the boss, and do not have Phantom Kamaitachi nor have the option to use Suiton to prepare Trick Attack. Using Raton to disconnect and keep our GCD rolling is far better than using Throwing Dagger, even if that means one less Raiton + Raiju in Trick Attack. 
2. We need to prevent mudra **overcap** by using a Ninjutsu. If Trick is used strictly off cooldown, we won’t ever have this issue, and two Raitons will naturally be within Trick with little to no overcap. However, a common occurrence is if we ever **hold** Trick Attack, normally for a mechanic. Any time we hold Trick Attack, we will overcap Mudra stacks if attempting to fit both Raitons within Trick. Therefore, one Raiton must be used outside of Trick Attack to prevent overcap. 

**Overcapping** should be avoided when it comes to our mudra stacks. This happens when our mudra ever stacks to x2. Any time spent with overcapped mudra is time that pushes our mudra cooldown backwards into our rotation timeline. Doing so can make fitting two Raitons into Trick difficult or even cost us an entire use of a Raiton by the end of the fight. 

Holding Trick and downtime are common causes for mudra overcap. Most of the time, it is best to use Raiton  to avoid overcap even if that means 1 less Raiton within Trick. 

### Multi-Target

⦿ **Doton** does 80p per tick (every 3s), with one additional tick happening the moment you drop the Doton. That’s a total of 7 ticks for 560p. At level 90, use Doton on x3 targets when they remain in it for the full duration.\
⦿ **Katon** should only be used on 3+ targets, and ideally when Doton is placed to be able to proc Hollow Nozuchi. \
⦿ **Goka Mekkyaku** is much like Katon and should only be used on 3+ targets, and ideally within Doton. \
⦿ **Death Blossom & Hakke** can be used on a group of mobs of 3+ targets and ideally within Doton.⦿ **Hellfrog Medium** should also be used on a group of mobs of 3+ targets with the exception when the Meisui buff is active. When Meisui is active, use Hellfrog over Bhavacakra on 4+ targets.

## **Trick Attack and Mug Burst**

One of the most important steps to learning Ninja and playing optimally is understanding and getting confidence with execution of our Trick Attack windows. Given that Trick is 15.77s long, we will be cramming a large array of abilities in a short period of time. 

We have two versions of our Trick Attack burst, the odd (1m, 3m, 5m…) windows and even (2m, 4m, 6m…) windows. 

### Odd Trick

This is a window that happens every odd minute or is better identified by its absence of 2-minute cooldowns. This window is easier to execute than the Even Window, for there are a lot less abilities we will cram within the window. 

We should try to fit x1 Hyosho, x2 Raitons, x2 Raijus, Dream Within A Dream, and as many Bhavacakras as we have available. Any extra time we have, we will use our standard 1-2-3 combos.

If Bunshin was used 45s within an odd Trick window, and Phantom Kamaitachi was NOT used to disengage from the boss, we should also have x1 Phantom Kamaitachi within an odd window. 

#### **Examples:**

**[Infographic](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9078c445-96b1-45cc-87ea-5ed775a0a033/df0x5wf-e741c245-8ba6-4a65-bf82-6f3da7873152.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwNzhjNDQ1LTk2YjEtNDVjYy04N2VhLTVlZDc3NWEwYTAzM1wvZGYweDV3Zi1lNzQxYzI0NS04YmE2LTRhNjUtYmY4Mi02ZjNkYTc4NzMxNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.faU_p7GnOz_m_vxS5V8XW4tPnGSvcg6ugTRBwYukFf4)**

This example uses Spinning Edge first, allowing us to sooner use Dream Within A Dream to mitigate drift. As we will have standard GCDs within Trick in odd windows regardless, it does not matter if we start the window off with a GCD:

![](/img/jobs/nin/odd_1.png)

This next example starts off with Hyosho and uses Dream Within A Dream right after, but otherwise is extremely similar to the above: 

![](/img/jobs/nin/odd_2.png)

This final example is when we want to drift Phantom Kamaitachi into the odd window. This can be placed anywhere as long as it is used before the buff falls off:

![](/img/jobs/nin/odd_3.png)

### Even Trick + Mug

This is a window that occurs every even minute or is a window that has all our 2-minute cooldowns available. The Even window is much like our Odd Trick, but is stronger for we will be also bursting within Mug and have Ten-Chi-Jin available to us. 

As Mug is 20.50s long and Trick is 15.77s long, it is best that Mug is used before Trick to catch the entire duration. If Mug is used within Trick, we risk severe drifting of one or both oGCDs.

We should try to fit x1 Hyosho, x2 Raitons, x2 Raijus, Dream Within A Dream, Ten-Chi-Jin, Meisui, 2-3 Bhavacakras within Trick Attack. Optionally, Phantom Kamaitachi may be in a 2m window, but is situational (more explained below).

Meanwhile, the allowance for Mug is x1 Trick Attack, x1 Hyosho, x2 Raitons, 3 Raijus + 1-2 additional GCDs, Dream Within A Dream, Ten-Chi-Jin, Meisui, 2-3 Bhavacakras. If Mug is used as an early weave, you will only catch 1 additional GCD. If used as a mid to late weave, you will catch 2 additional GCDs. As Mug is a raid buff, it shouldn’t be used selfishly, so never purposely late weave and drift this oGCD (beyond alignment reasons).\
**\
So how do we handle Phantom Kamaitachi?** 

Easy, no thought answer: Just use it within even Trick every time if it was not used for a disengagement, except if Bunshin is active.

**Situational answer** (that nobody asked for): 

⦿ If Bunshin is active, never use Phantom Kamaitachi in an even Trick & save for Mug instead. \
⦿ Note that Ninki generation, under very edge case situations, may throw these rules out the window.

1. If Mug + Trick are woven together: Use Phantom in Trick Attack. As Mug is an early weave, you will catch 3 Raijus + Phantom Kamaitachi.
2. If Mug is 1 GCD before Trick AND an early-mid weave: Use Phantom Kamaitachi as the GCD between Mug and Trick. If you attempt to use it in Trick, you will push a Raiju out of Mug, which is worse.
3. If Mug is 1 GCD before Trick AND a late weave: Use Phantom Kamaitachi within Trick. 

#### **Examples:** 

**Note**: There are plenty of ways to execute an even/2m Trick window, as long as the optimal amount of abilities are within the window. Below are some examples demonstrating the order I recommend. 

**\[Red bar = Trick ends, Orange bar = Mug ends]**

In this example, Trick & Mug are 1 GCD separated. Phantom Kamaitachi is used between Trick and Mug as Mug is an early weave. Thus, Mug ends after the 3rd Raiju. Trick window fits 3 Bhavas as we enter on 100 Ninki. Bunshin is **NOT** active here.

![](/img/jobs/nin/5.png)

This one, Mug and Trick are woven together. I have placed Phantom Kamaitachi within Trick, as Mug will catch x3 Raijus + Phantom Kamaitachi without issue.

![](/img/jobs/nin/1.png)

An example where Mug is a late weave, meaning the allowance is x3 Raijus + 2 extra GCDs. In this case, it’s better to use PK within Trick, and finish Mug on a Raiju.

![](/img/jobs/nin/3.png)

Another late woven Mug, but this time it’s like our 6m window with Bunshin active. Phantom Kamaitachi is used right after Trick Attack. Mug still catches 3 Raijus, PK and an additional GCD. We have entered Trick at 80 Ninki here for 3 Bhavas.

![](/img/jobs/nin/2.png)

## Miscellaneous

### Downtime

Handling downtime is rather simple on Ninja. Our filler rotation being flexible means that there is very little for us to do in terms of preparing for a segment where the boss is untargetable. Unless the downtime happens right before or during Trick, Ninja does well in handling downtime because our cooldowns will continue to tick down. This is why we do so well in fights with downtime; examples include E6S, E11S and E12S Phase Two. 

**Notes:**

* If we are to overcap mudra during downtime, use a Ninjutsu before the boss goes untargetable to avoid overcapping. 
* Since preparing a Ninjutsu takes time (One to two seconds), we can prepare a Ninjutsu during downtime and promptly use it when the boss is targetable again. Such as, if Trick is to be ready within 20s, we can Suiton or otherwise possibly use Raiton. By doing this, we may gain a GCD in the post-downtime phase. 

Some fights (P2S notably) may have downtime that happens mid-Trick. Your options are to use Trick before or after the downtime segment. The decision comes down to two factors:

1. Will holding lose you a usage by the end of the fight?
2. Will you remain aligned with the party for the rest of the fight if you held or did not hold?

Unfortunately the decision may not always be clear. Trick remaining aligned is crucial, but losing an entire usage of your cooldowns is also a huge loss. Ideally you remain aligned and don’t lose a usage of cooldowns, or you remain aligned and have used Trick pre-downtime to gain a usage by the end. 

### Reopeners

//TODO; 2m reopeners should look very similar to a 2m window. Generally start Trick either 2nd-3rd GCD. 

### Holding Trick

There may be situations where we may have to hold Trick Attack, along with our cooldowns, due to a mechanic, alignment, or a boss phasing. For the most part, we will try to keep Trick Attack strictly off cooldown to maximize our cooldown usages - especially if we do not know when we will be killing the boss. 

However, there are plenty of cases where we can’t or should not use Trick off cooldown. Such as a downtime phase that would cut our burst off prematurely, or if holding otherwise wouldn’t result in us losing a Trick Attack and its cooldowns later in the fight. 

If you choose to hold Trick Attack, it is important to know that doing so will overcap your Mudra stacks if an additional Ninjutsu (aside from Suiton) is not used outside of Trick Attack. Even if using a Raiton outside of Trick means 1 less Raiton + Raiju outside of Trick for the rest of the fight, overcapping is the potential loss of 1 Raiton + Raiju. 

## Improvement

### Keep Your GCD Rolling

An important note for all job classes, it is crucial that a player always keeps their GCD rolling to maximize their damage. To put simply, if you’re able to press a Global Cooldown (GCD) and aren’t, then you’re not keeping your GCD rolling. Every moment your GCD is not rolling is damage that you’re losing out on by the end of the fight. Hitting something is usually better than hitting nothing at all.\

As melee, we may need to disconnect from the boss. While we have a ranged GCD - Throwing Dagger - we still should try to avoid it. If the disconnect happens 45s after Bunshin, we simply adjust where we use Phantom Kamaitachi. The disengagement priority can be found in the Boss Disengagement section below. \

Positionals follow the same logic. It is better to use a GCD without hitting the positional requirement than it is to clip and hit a GCD with the positional requirement. Or if you’re at the flank of the boss, and need to hit Aeolian Edge next, simply using Armor Crush and overcapping your Huton is better than missing the Aeolian Edge positional.

### Use Your Cooldowns

A common mistake amongst new Ninjas is severely drifting oGCDs such as Trick Attack, Bunshin, Dream Within A Dream, etc. Unless you know that drifting or moving a cooldown won’t cost you a use or are expecting a certain killtime, then don’t do it. Due to the high-burst nature of the job, we’re reliant on our oGCDs and fitting damage into burst. Drifting your cooldowns may force you to lose a use, or have your damage fall out of Trick Attack and/or other raid buffs. Every lost use of a cooldown or burst ability drifted out of buffs causes a significant loss to your personal damage.

### What if my cooldowns become misaligned from Trick?

This can often happen when a boss has downtime, and our one minute cooldowns become desynced from our two minute cooldowns. This can cause Ten-Chi-Jin, for example, to come off cooldown outside of a Trick Window. 

Unless you know your killtime, it is better to use a misaligned ability on cooldown, even if that forces the ability permanently out of Trick. The loss of losing a cooldown (especially one like Ten-Chi-Jin) far outweighs the potential gain of realigning it back with Trick Attack. 

### Overcapping Resources

Like most jobs, Ninja’s damage primarily comes from its cooldowns and its resources. Overcapping is the idea of losing value within a gauge, a timer, or even stacked cooldowns - due to capping it to its max value.

1. Never overcap on Ninki, our resource gauge. Always use Bhavacakra to burn Ninki before hitting this point, even if it’s before Trick Attack.
2. Overcapping Huton loses time on your Huton timer, which will force the player to potentially use Armor Crush more than they need to. Since Armor Crush does less than Aeolian Edge, overcapping is potential damage loss.
3. Don’t overcap on Mudra stacks. Stacking to two mudra stacks is potential Raiton loss, which is a damage loss.
4. Don’t overcap on Raiju Ready stacks, as our maximum is three.

### Boss Disengagement

As one of the most flexible melee in terms of disconnecting from the boss, Ninja has a wide array of options to pick from to keep their GCD rolling. Below is a simple priority list to follow to handle your disconnect:

1. If Trick is to be off cooldown in 20s, use Suiton to disengage. 
2. If the disengage is within 45s after using Bunshin, save Phantom Kamaitachi to keep your GCD rolling. 
3. Use Raiton, even if that means one Raiton less in Trick. 
4. Throwing Dagger

### FAQ

**⦿ Why does our BiS not follow the stat priority?**

Because of stat tiering, and how it works together with our rotation, our rotation sim brought this exact combination of materia out to be a higher average dps value than fully going with our stat priority. If you want to know more about the math behind stats and stat tiering, go to the sub stats tier list up above by the spreadsheets. 

**⦿ How much ping do I need to double-weave?**

The threshold is around ~40ms.

**⦿ Should I always weave Trick late?**

Only purposely weave Trick late in the opener. Anywhere else, use off cooldown as much as possible. Ideally, you do not drift this more than 2s for a 6-7m fight.  

**⦿ Should I save Bunshin for Trick, or use it on cooldown?**

Use on cooldown.

**⦿ Should I be using Forked Raiju or Fleeting Raiju?**

Both Forked Raiju and Fleeting Raiju have an identical potency of 560. Forked Raiju is a gapcloser, whereas Fleeting Raiju is a standard melee gcd which allows it freedom of movement. Realistically you should always be using Fleeting Raiju, however if you need to use a gapcloser then use Forked Raiju. Tldr; use whatever you want.

**⦿ Does Kassatsu %damage affect Hyosho and Goka?**

Yes it does.