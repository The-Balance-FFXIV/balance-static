---
layout: qna
patch: "7.4"
lastmod: 2026-01-02T07:20:33.691Z
qna:
  - question: How much skill speed is required to play Dragoon?
    answer: Due to the amount of our damage that is tied to oGCDs with cooldowns
      unaffected by skill speed and the cooldown drift that occurs to these
      oGCDs when our GCD doesn't line up cleanly, DRG wants to stay at it's base
      2.50 GCD speed as much as possible.
  - question: What abilities can I double weave? And is it bad to use the increased
      Recast Time on Action Change?
    answer: >-
      Besides Stardiver, all of our actions can be double weaved on a good
      connection (<150ms ping). Certain abilities (High Jump, Dragonfire Dive &
      Winged Glide) have a slightly longer than normal animation lock which can
      make double weaving these actions slightly more difficult.


      Using the increased recast time setting will cause the follow-up action to not be usable for 1.0s. This adds 0.4s to a Geirskogul > Nastrond weave, for our jumps it adds 0.2s and for Stardiver it doesn't add any since the animation lock already exceeds this time.


      It is possible but very rare that this delay will cause any problems, the most likely scenario is a tight High Jump > Mirage Dive weave in a fight with downtime. Skill speed rotations may also encounter problems from this setting since timings are often more strict.


      Use whichever settings are most comfortable for you above all.
  - question: How difficult is it to play Dragoon?
    answer: Dragoon is fundamentally punishing but very simple once mastered. The
      job resolves around continuing your alternating 5 GCD combo loops and
      pressing most of your oGCDs exactly as they come up.
  - question: When should I use LB3?
    answer: >-
      LB3 should be used when needed above all, when you have flexibility
      however;

      Make sure you are not delaying your High Jump or other oGCD cooldowns by using it.

      Aim to use the LB3 after your Chaotic Spring combo and repeat the same combo after your LB3.
  - question: How do we use Wyrmwind Thrust?
    answer: For every executed Raiden Thrust we obtain 1 Firstminds' Focus stack, 2
      of these stacks can be used to execute Wyrmwind Thrust. Since there is no
      restriction on when you have to use this ability until your next stack is
      obtained, you can freely delay it for the 12s~ window to fit into your
      buff window or use it to cleave.
  - question: How do we use Life Surge?
    answer: >-
      Life Surge should be used on our highest potency weaponskill while
      avoiding overcap, this will usually result in using 1 charge during our
      60s burst window and 2 charges during our 120s burst window.


      The priority of which weaponskills should be buffed by Life Surge is as follows:


      1. Heavens' Thrust / Drakesbane under any of ourh personal buffs.

      2. Lance Barrage / Chaotic Spring / Fang and Claw / Wheeling Thrust under **all three of our personal buffs**

      3. Heavens' Thrust / Drakesbane outside of buffs.
  - question: How do I deal with the movement lock on High Jump?
    answer: >-
      Upon using High Jump your character will be stopped in place for a short
      amount of time. The movement lock on High Jump can be entirely nullified
      by making your character jump with the spacebar or other control methods
      slightly before using the jump.


      This does not work on other jumps as they actually move your character.
authors:
  - Balance-DRG-Staff
changelog:
  - date: 2021-10-29T02:57:06.403Z
    message: Created page
  - date: 2022-01-14T12:52:20.784Z
    message: Updated for Endwalker.
  - date: 2022-09-21T17:12:09.451Z
    message: Editorial changes and updates
  - date: 2023-01-14T17:23:10.219Z
    message: Updated Dragon Sight Priority graphic
  - date: 2023-05-29T14:00:30.558Z
    message: Updated patch - no changes
title: Frequent Questions
tags:
  - Dragoon
  - faq
---
# Frequently Asked Questions

Type `!faq drg` in #bot_spam for a full list of commands to answer other common questions!

> *How does Raiden Thrust work?*

Raiden Thrust is an upgraded True Thrust. It combos into both Disembowel and Vorpal Thrust and replaces True Thrust on your bar when it’s ready. You activate it by successfully landing the positional on the fifth hit of your combo (Fang and Claw or Wheeling Thrust following Wheeling Thrust or Fang and Claw, respectively). If you fail, you get to press True Thrust and hear a laugh track play in the background.

The bot command `!faq drgpositionals` will show you how to set up triggers to track when you land or miss your positionals, if that interests you at all. It can be helpful in testing to make sure you’re landing them or just tracking them during an encounter.

> *Should I modify my buff Lance Charge - Dragon Sight - Battle Litany timings to accommodate my needy raid members?*

Short answer is no. You should -- in general -- always be pressing all three of your buff actions (and every other damage-dealing action) as close to on cooldown as possible. Within the opener, you can shuffle the order of the buffs a little, so long as everything is active before the first Chaos Thrust lands.

The **only** exception to this rule is a situation where you are running with a **static, consistent team** and have a specific kill time in mind. In this sort of coordinated environment (**and only in this case**) it can be prudent to shift your buff times to line up with allies for net gains to raid dps. This is a very niche case and most of the time should not be taken into consideration.

> *Who should I tether with Dragon Sight?"*

In a pug group, prioritize whoever will actually be close to you when it’s Dragon Sight time. Delaying GCDs hunting down your Bard because they asked for tether, but live in Narnia will cause more issues than it solves. If someone specifically asks for it, just tell them they need to be close to you when it’s time.

In a static group, on initial pulls of the fight while learning, prioritize in the same way as a pug group. After you have a few pulls, filter a series of FFLogs parses from your group through <https://tethercalc.herokuapp.com/> to get specific answers for each tether for your particular group on that particular fight.

There is no hard-and-fast rule of who to tether, but Summoner tends to be low on the totem pole, because the tether does not affect any pets.

> *Is it okay to hold High Jump, Spineshatter Dive, or Dragonfire Dive for raid buffs? Personal buffs?"*

In general, **no**. You should be pressing everything as soon as it comes up.

However, if you know your target kill time and are certain that the delays will **not** cost a use on the fight, then it is perfectly acceptable to do so. Just be aware that delaying is **never** worth it if you end up with 1 fewer cast on the encounter because of it, *especially* in the case of High Jump and Mirage Dive.

> *Should I delay my first Life of the Dragon? How?*

After the opener, you are technically able to enter Life 30 seconds later. If you do so, you'll land three Nastrond and Stardiver with no buffs on them. This is done by pressing your second Mirage Dive before your second Geirskogul. If, however, you hold the Mirage Dive until after the Geirskogul, you'll essentially skip that Life cycle and delay it another 30 seconds. Doing this is considered "delaying" your Life cycle.

**Do note that you never delay a Life cycle by delaying your cast of Geirskogul - you should *always* be pressing it when it's ready, outside of very specific, encounter-related reasons.**

In general, **yes**, you want to delay the first cycle. Doing so pushes it back to around 60 seconds after the opener, which also puts it around 20 seconds before your second Lance Charge, allowing one Nastrond and Stardiver to both land under that buff. When you exit that Life, you'll also have two more eyes to enter *again*, allowing another Nastrond under that Lance Charge, followed by potentially the next two Nastrond and your Stardiver under the following Dragon Sight.

All of this is tasty and positive, assuming your delayed first Life (or the subsequent double life) doesn't run into issues with fight phasing. If someone says you should be doing "early" life for a given fight (like in E3S), it simply means you should enter (Mirage Dive - Geirskogul) instead of skipping on your second Geirskogul.

[This video](https://www.youtube.com/watch?v=yhXwh1Fb92c) demonstrates what the first Life cycle should look like, when you delay it.

> *How do I make sure every Stardiver has a buff?*

Every time you come up on Geirskogul at the same time as you come up on your second Eye from Mirage Dive, you can make the choice to activate it or delay it. You can make this choice by following this handy flowchart, based on the time remaining on your two primary buff actions, Lance Charge and Dragon Sight:

If Lance Charge and Dragon Sight >23s and at least one <57s: Geirskogul - Mirage Dive (delay)\
\
Otherwise: Mirage Dive - Geirskogul (enter)

Following this general outline will allow you to maximize the number of Nastrond and Stardiver that you land under buffs (Lance Charge / Dragon Sight / Battle Litany) throughout an encounter. We don't need to look at Battle Litany timings up above, since it should always coincide with every other Lance Charge. If it somehow de-syncs, prioritize Lance Charge and Dragon Sight over Battle Litany.

> *Should I double up Chaos Thrust on two targets? What about 3?*

The short answer is yes - -if you have two targets that will both be active for >30 seconds, you want to alternate targets, maintaining Chaos Thrust on both:\
\
Raiden Thrust - Disembowel - Chaos Thrust - Wheeling Thrust - Fang and Claw - Raiden Thrust - Disembowel - Chaos Thrust - Wheeling Thrust - Fang and Claw

If any Life Surge comes up in these scenarios, just use it on a Fang and Claw that has a positional hit, as it has no effect on the damage-over-time effect of Chaos Thrust. This rotation has approximately a 3% gain over the usual rotation if you have two targets to spread Chaos Thrust on.

When extending to three targets, if they're all within range, you actually want to swap to your AoE rotation (Doom Spike / Sonic Thrust / Coerthan Torment), since that's something around a 25% damage gain over spreading Chaos Thrust around, even without Disembowel's buff being active for the AoE, while counting it for the Chaos Thrust spreading.

> *Should I use Disembowel when using my AoE Combo Doom Spike Sonic Thrust Coerthan Torment?*

**Yes.**\
You can often get the True Thrust - Disembowel off while the tank gathers the enemies and then skip the Chaos Thrust and go right into Doom Spike - Sonic Thrust - Coerthan Torment once they're settled. Even barring that, we deal a shitload of AoE damage constantly. The loss of potency in those two GCDs is *almost always* made up for in the following 30 seconds.

In order for your Disembowel to be worth the two gcds it costs to cast it, you do need a certain amount of off-gcd potency over the following 30 seconds! That amount is modeled by the following formula:

```
1600 - 6100/n
where n is the number of targets.
```

At three targets, it is **always** a net gain to use it.\
The formula constantly increases as n gets larger, and by 15 targets , you need less than 1200 potency per target in off-gcd actions (Geirskogul - Dragonfire Dive - Nastrond - Stardiver) in the next 30s for those 2 gcds to be worth hitting.\
\
**Geirskogul** is 300 potency per target.  \
**Dragonfire Dive** is 380 potency per target.  \
**Nastrond** is 400 potency per target.  \
**Stardiver** is 420 potency per target (600 to the initial target).  \
1200 is very easy to reach in 30s or less.  

The above-linked guide goes more in-depth about this, including a full table to show the formula's derivation. 

tl;dr: **Yes. Always, always, always use Disembowel before your AoE.**
