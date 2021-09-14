---
title: FAQ
---
# Frequently Asked Questions


Type `!faq drg` in #bot_spam for a full list of commands to answer other common questions!




> *How does Raiden Thrust work?*

Raiden Thrust is an upgraded True Thrust. It combos into both Disembowel and Vorpal Thrust and replaces True Thrust on your bar when it’s ready. You activate it by successfully landing the positional on the fifth hit of your combo (Fang and Claw or Wheeling Thrust following Wheeling Thrust or Fang and Claw, respectively). If you fail, you get to press True Thrust and hear a laugh track play in the background.


The bot command `!faq drgpositionals` will show you how to set up triggers to track when you land or miss your positionals, if that interests you at all. It can be helpful in testing to make sure you’re landing them or just tracking them during an encounter.




> *Should I modify my buff Lance Charge - Dragon Sight - Battle Litany timings to accommodate my needy raid members?*

Short answer is no. You should - in general - always be pressing all three of your buff actions (and every other damage-dealing action) as close to on cooldown as possible. Within the opener, you can shuffle the order of the buffs a little, so long as everything is active before the first Chaos Thrust lands.


The **only** exception to this rule is a situation where you are running with a **static, consistent team** and have a specific kill time in mind. In this sort of coordinated environment (**and only in this case**) it can be prudent to shift your buff times to line up with allies for net gains to raid dps. This is a very niche case and most of the time should not be taken into consideration.




> *Who should I tether with Dragon Sight?"*


In a pug group, prioritize whoever will actually be close to you when it’s Dragon Sight time. Delaying GCDs hunting down your Bard because they asked for tether but live in Narnia will cause more issues than it solves. If someone specifically asks for it, just tell them they need to be close to you when it’s time.

In a static group, on initial pulls of the fight while learning, prioritize in the same way as a pug group. After you have a few pulls, filter a series of fflogs parses from your group through <https://tethercalc.herokuapp.com/> to get specific answers for each tether for your particular group on that particular fight.

There is no hard-and-fast rule of who to tether, but Summoner tends to be low on the totem pole, because the tether does not affect any pets.




> *Is it okay to hold High Jump, Spineshatter Dive, or Dragonfire Dive for raid buffs? Personal buffs?"*

In general, **no**. You should be pressing everything as soon as it comes up.

However, if you know your target kill time and are certain that the delays will **not** cost a use on the fight, then it is perfectly acceptable to do so. Just be aware that delaying is **never** worth it if you end up with 1 fewer cast on the encounter because of it, *especially* in the case of High Jump and Mirage Dive.




> *Should I delay my first Life of the Dragon? How?*

After the opener, you are technically able to enter Life 30 seconds later. If you do so, you'll land 3 Nastrond and Stardiver with no buffs on them. This is done by pressing your second Mirage Dive before your second Geirskogul. If, however, you hold the Mirage Dive until after the Geirskogul, you'll essentially skip that Life cycle and delay it another 30 seconds. Doing this is considered "delaying" your Life cycle.


**Do note that you never delay a Life cycle by delaying your cast of Geirskogul - you should *always* be pressing it when it's ready, outside of very specific, encounter-related reasons.**


In general, **yes**, you want to delay the first cycle. Doing so pushes it back to around 60 seconds after the opener, which also puts it around 20 seconds before your second Lance Charge, allowing 1 Nastrond and Stardiver to both land under that buff. When you exit that Life, you'll also have 2 more eyes to enter *again*, allowing another Nastrond under that Lance Charge, followed by potentially the next 2 Nastrond and your Stardiver under the following Dragon Sight.


All of this is tasty and positive, assuming your delayed first Life (or the subsequent double life) doesn't run into issues with fight phasing. If someone says you should be doing "early" life for a given fight (like in E3S), it simply means you should enter (Mirage Dive - Geirskogul) instead of skipping on your second Geirskogul.

[This video](https://www.youtube.com/watch?v=yhXwh1Fb92c) demonstrates what the first Life cycle should look like, when you delay it.




> *How do I make sure every Stardiver has a buff?*

Every time you come up on Geirskogul at the same time as you come up on your second Eye from Mirage Dive, you can make the choice to activate it or delay it. You can make this choice by following this handy flowchart, based on the time remaining on your two primary buff actions, Lance Charge and Dragon Sight:


If Lance Charge < 18s remaining: Mirage DiveGeirskogul (enter)  
else, if Lance Charge > 23s: Geirskogul - Mirage Dive (delay)  
else, if Dragon Sight < 18s: Mirage Dive - Geirskogul (enter)  
else, if Dragon Sight > 23s: Geirskogul - Mirage Dive (delay)  
else: Mirage Dive - Geirskogul (enter)  


Following this general outline will allow you to maximize the number of Nastrond and Stardiver that you land under buffs (Lance Charge / Dragon Sight / Battle Litany) throughout an encounter. We don't need to look at Battle Litany timings up above, since it should always coincide with every other Lance Charge. If it somehow de-syncs, prioritize Lance Charge and Dragon Sight over Battle Litany.




> *Should I double up Chaos Thrust on two targets? What about 3?*

The short answer is yes - if you have two targets that will both be active for >30 seconds, you want to alternate targets, maintaining Chaos Thrust on both:  
Raiden Thrust - Disembowel - Chaos Thrust - Wheeling Thrust - Fang and Claw - Raiden Thrust - Disembowel - Chaos Thrust - Wheeling Thrust - Fang and Claw


If any Life Surge comes up in these scenarios, just use it on a Fang and Claw that has a positional hit, as it has no effect on the damage-over-time effect of Chaos Thrust. This rotation has approximately a 3% gain over the usual rotation if you have two targets to spread Chaos Thrust on.


When extending to 3 targets, if they're all within range, you actually want to swap to your AoE rotation (Doom Spike / Sonic Thrust / Coerthan Torment), since that's something around a 25% damage gain over spreading Chaos Thrust around, even without Disembowel's buff being active for the AoE, while counting it for the Chaos Thrust spreading.




> *Should I use Disembowel when using my AoE Combo Doom Spike Sonic Thrust Coerthan Torment?*

**Yes.**  
You can often get the True Thrust - Disembowel off while the tank gathers the enemies and then skip the Chaos Thrust and go right into Doom Spike - Sonic Thrust - Coerthan Torment once they're settled. Even barring that, we deal a shitload of AoE damage constantly. The loss of potency in those 2 GCDs is *almost always* made up for in the following 30 seconds.

In order for your Disembowel to be worth the two gcds it costs to cast it, you do need a certain amount of off-gcd potency over the following 30 seconds! That amount is modeled by the following formula:
```
1600 - 6100/n
where n is the number of targets.
```
At 3 targets, it is **always** a net gain to use it.  
The formula constantly increases as n gets larger, and by 15 targets , you need less than 1200 potency per target in off-gcd actions (Geirskogul - Dragonfire Dive - Nastrond - Stardiver) in the next 30s for those 2 gcds to be worth hitting.  
**Geirskogul** is 300 potency per target.  
**Dragonfire Dive** is 380 potency per target.  
**Nastrond** is 400 potency per target.  
**Stardiver** is 420 potency per target (600 to the initial target).  
1200 is very easy to reach in 30s or less.  

The above-linked guide goes more in-depth about this, including a full table to show the formula's derivation. 

tl;dr: **Yes. Always, always, always use Disembowel before your AoE.**

