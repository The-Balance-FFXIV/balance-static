---
title: Warrior Advanced Guide
card_header_image: /img/jobs/war/advanced.png
authors:
  - Balance-WAR-Staff
  - Mox-Xinmagar
patch: "6.11"
lastmod: 2022-04-29T22:05:58.255Z
changelog:
  - date: 2021-11-15T18:36:27.000Z
    message: Created page
  - date: 2022-02-26T19:56:29.271Z
    message: Updated for Endwalker
  - date: 2022-02-26T22:10:48.870Z
    message: Minor formatting fixes
  - date: 2022-03-06T12:38:53.619Z
    message: Added an image to the Nascent Chaos carrying section. Filled some text
      in Potion sections.
  - date: 2022-04-29T22:06:02.454Z
    message: Patch number update
---
## The Optimization

Warrior Optimization focuses on manipulating the Surging Tempest buff refreshes, and “Carrying buffs” such as Nascent Chaos and Primal Rend Ready.  
There’s also the case of pushing out “3 IC Pot” windows and “2 IC Tricks”, but also disrespecting various mechanics by zeroing out the damage, or canceling a knockback with our Onslaught. Also, if you want a high percentile in FFLogs, you're at the mercy of a good kill time. Bosses dying right after an entire Inner Release + resource burn window? That's a nice percentile.

### Surging Tempest 

Using Storm’s Eye or Mythril Tempest in a combo grants us 30 seconds of the Surging Tempest, buffing all of our damage by 10%. This buff can be stacked up to 60s, giving us some breathing room for various optimization reasons.



While Warriors often aim to refresh the buff between seven and 15 seconds, there are moments when it’s desirable to refresh right after the buff hits 30 seconds. These moments include Fight Downtime, and manipulating our gauge in a very minor way. For example, using Storm’s Eye combo twice in a row grants us 40 gauge, but also risks overcapping the buff itself.  
 
In the situation that we would have 50 gauge, or use Infuriate, the total sum of gauge would be at 90.  

This lets us push Fell Cleave / Inner Chaos further:

* Heavy Swing (90g)  
* Maim (100g)  
* Fell Cleave / Inner Chaos (50g) 


For comparison, using Storm’s Eye and Storm’s Path combo grants us 50 gauge. 
This would change the situation above slightly, as we would hit 100 gauge earlier, forcing us to use Fell Cleave or Inner Chaos.


Some fights also favor stacking up 30+ seconds of Surging Tempest right before any downtime occurs. This would let us skip getting the buff back up once the boss reappears, giving us the option of using Inner Release right off the bat.The gauge gained from Storm’s Path is quickly outvalued by being able to use Inner Release faster, making it possible to gain an extra use before the fight ends, or before yet another downtime.
  

Or you know, having our burst right inside the party buffs, instead of being delayed by the GCDs you’d use to put up the Surging Tempest.

### Carrying Buffs

_This works best with a very slow GCD, and the images shown here are taken from runs with a 2.50 GCD. Your mileage may vary._

With Inner Release'd Fell Cleaves being less impactful than Primal Rend and Inner Chaos, it may sometimes be worth it to carry these big hitters into a later moment.

Using Inner Release unlocks Primal Rend for 30 seconds. If the fight favors using Inner Release early, but Party buffs are coming up later, you may want to carry that Rend into the buffs. A moment like this would be when the fight makes us use Prepull IR openers, but the party buffs still came up at the usual time.

Emptying the Beast Gauge and using Infuriate puts us anywhere between 50 and 90 beast gauge. This lets us carry Inner Chaos into a slightly later moment, when party buffs would be up.  
Be mindful about the gauge, as you don't want to overcap unless you know what you're doing, in which case why are you reading this?

Regarding Inner Chaos and Infuriate, it is possible to hit the following rotational milestones:

* Infuriate has one stack, and ~15 seconds until the second stack
* We have 100 gauge
* Even-minute buffs are coming up

These milestones would let us empty our beast gauge, hit Infuriate, and carry it until party buffs.
* Empty the gauge (0g), Infuriate hits close to 0s
* Hit Infuriate (50g - 90g), Inner Chaos is unlocked
* Gather more gauge with Storm’s Path, or refresh the Tempest buff
* Keep gathering gauge while carrying the Inner Chaos
* Make sure to take advantage of Heavy Swing not giving any gauge
* Spend the Inner Chaos, hopefully inside Party buffs

Congratulations, you just carried Inner Chaos for multiple GCDs

As for how this would look like in FFLogs, here's a handy image.  
To replicate this view, go to [Character > Buffs > Drop-down menu: Nascent Chaos](https://www.fflogs.com/reports/Gya7HRZ69QpDdrxm#fight=1&type=auras&source=1&ability=1001897)
![Carried Inner Chaos](https://cdn.discordapp.com/attachments/937834268950925433/950005284972142642/unknown.png)

### Potions

Warriors have a couple of tricks up their sleeve when it comes to potions. Three is more than two, but there are things to consider. For example, never use NQ potions as they have a lesser effect and a longer recast time, and in a normal scenario our Inner Release starts only after 00:10'ish.  


Depending on the kill time and fight downtimes, Warriors aim for the following Potions:

#### Three Potion Windows:

If the fight lasts for well over nine minutes, we opt for a three potion fight. Note that the potion lasts for 30 seconds, and if the kill time is right on 09:05, the third potion was nearly useless.

** Prepull Window: **
* -00:02 Potion
* 00:00 Pull
* 04:30 Potion
* 09:00 Potion

** Standard Window: **
* 00:00 Pull
* 00:05 Potion
* 04:35 Potion
* 09:05 Potion

#### Two Potion Windows:

What if the fight lasts for less than nine minutes plus some odd seconds? We go for two impactful potions.  
With most of the party buffs being ready in six minute cycles, most parties aim to sync everything for that specific "6-min window". This means that we're deliberately delaying our second potion all the way until the six minute mark of the fight.



** Prepull into Six Min: **
* -00:02 Potion
* 00:00 Pull
* 06:00 Potion

** Standard into Six Min: **
* 00:00 Pull
* 00:05 Potion
* 06:00 Potion

The two potion windows can be extended to three potion windows by using the third one at 10:30 or 11:00.

Note:
Talk with your party regarding your potion timings. Some jobs and fights favor different timings.

### 3 IC Potions

This section requires more research.

### 2 IC Trick Attacks

This section requires more research.  

[FFLogs parse for the image below](https://xivanalysis.com/fflogs/vLgXHM7wyjZYNAPd/16/193) 

![alt_text](https://cdn.discordapp.com/attachments/937834268950925433/947119620618338385/unknown.png "2IC Tricks")

## Disrespecting mechanics

Since the beginning of FFXIV, the game has worked on simple boolean logic checks.

* Player One took damage? 
* Give them a debuff / deal a follow-up action.  
  
Not all fights work like this, but a good handful of them do. This lets us disrespect some mechanics that would force us to disengage from the boss.

The main check that the game uses is “Loss of Health”, or “Mechanic’s Damage Done was >0”. This means that mitigating a hit by 100% often works wonders, and results in dodging debuffs and knockbacks.  

Shame that Warriors don’t have Superbolide or Hallowed Ground. So what are our options then? Shields.

Shake It Off and Bloodwhetting both offer shields to Warriors. If we were to mitigate a hit enough so that it only scratched our shields, we would “Zero Out” the entire mechanic, and most likely any debuffs that come from it. Endwalker’s first raid tier, Pandaemonium, comes with a fight that lets us do just that. There have been similar opportunities before, but we’ll use a more relevant example here.  
  

Towards the midway point of the fight, the entire party gets to handle a mechanic where everybody has to sit tight inside a tiny safe square, while also managing a Stack Hit, and two Knockback Hits. The two Knockback Hits are always on a Tank, and a DPS. The usual way to handle this is to have the entire party right next to the boss, while the DPS player hides in the corner of the arena, and the tank hides in another corner of the safe area.

Not being in the safe area means getting hit by the Cataract mechanic, which gives a Damage Down debuff if the player takes damage from it.  _If the player takes damage from it…_



### Zero Out the P2S Cataract

Doing the math for NOT taking any damage from Cataract, with the following assumptions:

* Cataract hits for 42000 damage
* Warrior has 80000 Max HP
* All cooldowns are available

Cataract hits for 42000

* Rampart mitigates the hit to 33600
* Vengeance mitigates that to 23520
* Bloodwhetting mitigates it even further, to 19051

WAR has 80000 HP

* WAR uses Thrill, increasing their Max HP (80000 x 1.20 = 96000 HP)
* Shake it Off gives a Shield of 16320 (15% +2% of Max HP)

Bloodwhetting gives us a ~5k Shield

* Total shield increases to a Shield of 21320 (16320 + 5000)

Moment of Hit

* Cataract (3 CD) reduced to 19051 damage
* Shake it Off (Thrill'd) gives a Shield of 16320
* Bloodwhetting’s shield increases the total Shields to a total of 21320

Leftovers


* (Shield - Damage) must be >0 to avoid the debuff:
* = 21320 - 19051
* = 2269

You just spent four CDs to disrespect a mechanic, gaining a GCD or two. On the other hand, you didn't risk wiping the raid for uptime. _Now take the following Tank Buster solo with Holmgang, because you have nothing else available._



This is something that is actually used in weekly re-clears and speedruns, as it leaves more room for the rest of the party while also letting us stay in and hit the boss. 
Just don’t get hit by two Cataracts.

### Knockback Cancels

There's not much to this tech; Use Onslaught whenever you're pushed back, while out of the target's hitbox. The knockback cancel works when Onslaught changes your character's direction of movement. The most satisfying thing is to cancel the knockback on the first "frame".

![Shar's Warrior imagery](https://cdn.discordapp.com/attachments/937834268950925433/947158285683937330/unknown.png)

## Wanted: Party Buffs

Warriors are kind of picky eaters when it comes to party buffs and debuffs. We don’t care much for the Critical Rate% buffs such as Chain Stratagem or Battle Litany, or Direct Hit Rate % buffs such as <bard songs, dancer things>, because a good chunk of our kit already has 100% Direct Crit rate.

Inner Chaos? 100% Direct Crit.  
Primal Rend? 100% Direct Crit.  
Inner Release’d Fell Cleaves? 100% Direct Crit.  



### Nice buffs for Warriors are Damage Increase% 
Buffs that give flat dmg% increase are great.  


* Brotherhood (MNK)
* Arcane Circle (RPR)
* Divination (AST)
* Radiant Finale (BRD)
* Mage’s Ballad (BRD)
* Technical Step (DNC)
* Embolden (RDM)
* Searing Light (SMN)
* *Dragon Sight (DRG)
* *Arcana Cards (AST)
* *Standard Finish (DNC)

_*Asterisk buffs are often given to DPS players, but there are times when someone feels like buffing the little Warrior._




### Nice debuffs-on-boss for Warriors are also Damage Increase % 
Debuffs that cause the target to take more damage are great.

* Trick Attack (NIN)


### Nice-but-not-as-nice buffs and debuffs 
These would be the Crit Rate% and Direct Hit Rate % changes.

* Battle Litany (DRG)
* Chain Stratagem (SCH)
* Army’s Paeon (BRD)
* Wanderer’s Minuet (BRD)


*It’s not worth it to list them all here, since a good handful of our kit does not get anything out of these.*  






