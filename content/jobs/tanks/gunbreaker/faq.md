---
title: Frequent Questions
layout: qna
patch: "7.3"
lastmod: 2025-08-05T20:52:18.543Z
changelog:
  - date: 2021-11-15T03:49:47.299Z
    message: Created
  - date: 2022-02-03T00:21:08.781Z
    message: Updated for Endwalker
  - date: 2022-04-02T20:41:57.590Z
    message: Added Endwalker relevant questions.
  - date: 2022-08-28T21:16:30.164Z
    message: Removed Bloodfest Question as no longer relevant
qna:
  - question: What did they change in 7.20?
    answer: >-
      Gunbreaker received a 0.88% buff to DPS, and also removed some
      interactions with Superbolide that they deemed to be "unintended
      behavior".

      - Superbolide no longer prevents your HP from dropping below 1, it now only grants the impervious effect that reduces damage taken to zero (similar to Hallowed Ground). 

      - It used to have an additional effect that prevented HP from going below 1 (similar to Holmgang), which could be useful if a damage event was calculated on the player but had not yet hit them, as activating Superbolide would protect against that damage and promptly save them from dying.
  - question: Should I ever use a different opener than the one listed?
    answer: >-
      Yes, absolutely. The reasoning behind general-purpose openers is to put
      yourself in the most flexible position so that you can adjust to the fight
      as needed without losing damage, and without leaving party buffs. They do
      not account for fight-specific characteristics such as multi-target
      scenarios, forced downtime, or special fight-specific damage buffs.


      As some general advice:

      -  Look at when your group casts their raid buffs and try to match theirs.
       - Open earlier than your group's raid buffs if you're losing cooldown usages due to downtime phases.
       - Do not drift **No Mercy** over the fight (without planning it) to continue matching party buff timing.
  - question: What GCD should I play?
    answer: >-
      Empirically, 2.50 tends to deal the most damage by a marginal (less than
      1%) amount in an average, full-uptime encounter.

      - Faster speeds will occasionally win in specific boss fights due to the cooldown reduction permitting fight-specific cooldown usage that 2.50 cannot perform.

      - A common reason players choose to play faster than 2.50 (especially in prog) is because faster speeds are more forgiving due to their cooldown reduction and additional GCD space within **No Mercy**.


      Some general advice for those of you just looking for an easy choice:

      - 2.50 is by and large the most popular speed due to it having zero ping requirements, good cooldown alignment, and usually best-in-class DPS.

      - 2.40 is the easiest speed to prog with due to it's weaponskill cooldown reduction and increased No Mercy flexibility, but has the tradeoff of generally being the lowest average DPS by ~1%.

      - 2.45 is a speed that contains ping restrictions and a couple of weaving nuances between **No Mercy** and innate **Blasting Zone** drift, but if you are comfortable with the job's fundamentals then this speed is comfortable to play on. It can be used occasionally for optimizing specific encounters to deal more damage than 2.50.


      If you choose to play a speed faster than 2.50, then you will want to read more about "reverse drift".
  - question: What is "reverse drift"?
    answer: >-
      Reverse drift is a term that was coined to express how skill speed makes
      GCD cooldowns come off cooldown faster than ability cooldowns like **No
      Mercy**, which gives the feeling that your cooldowns are drifting out of
      your burst phase because they come off cooldown at the same time as **No
      Mercy** (or earlier). This effect makes a useful tool for resetting any
      cooldown delay inside **No Mercy**, but can be unhelpful though to
      beginners because it may make you question whether to use the cooldown
      immediately outside of **No Mercy**, or to hold it (or worse, clip the GCD
      entirely.)


      If you happen to notice cooldowns that should be used within **No Mercy** coming off cooldown faster than **No Mercy** is, it's fine to just hold them back into their original spot and pretend like you aren't receiving the cooldown reduction, because the cooldown reduction becomes harmful until you start gaining enough usages (which takes a far, far lower GCD speed than anything we reach) to make it worth using them off cooldown outside of your buff.
  - question: What should I do if my GCD isn't exactly one of the listed speeds in
      the BIS list?
    answer: >-
      You can either meld SKS to reach one of them, or you can just leave it
      as-is and accept some innate drift to **No Mercy**.

      The degree of innate drift is machine dependent and will not exactly match these figures (reliant on ping and framerate), but in general:

      - 2.45 - 2.47 play the same, and **No Mercy** drift going slower than 2.45 increases from 0 by ~0.27s per tier.

      - 2.40 - 2.44 play the same, and **No Mercy** drift going slower than 2.40 increases from 0 by ~0.25s per tier.


      The drift to **No Mercy** may pull you out of raid buffs over time, but speeds close to 2.40 or 2.45 are typically safe for use in the majority of encounters without risk of loss, and can even be more optimal than the base speed (e.g. 2.40) due to fight alignment.
  - question: Is it worth it to hold No Mercy to secure better GCDs in No Mercy when
      I don't have Bloodfest?
    answer: >-
      No, because it loses potential future uses and places you outside of your
      party buffs, losing more than you gain by delaying on average.


      In a fight with no defined endpoint (infinite), every GCD that you hold **No Mercy** ends up losing a fractional amount of a future burst phase depending on GCD speed.

      - This loses more average DPS than the buffed GCD gains, unless you already know how the fight timeline plays out and you have determined that you do not lose cooldown usages from delaying. 

      - Even if you have confirme that you do not lose cooldown usages, you must check if you are losing net DPS from the fact that you will push GCDs out of party raid buffs by delaying your burst phase.
  - question: How ping reliant is Gunbreaker? Does it require double weaving?
    answer: >-
      Gunbreaker normally double-weaves and occasionally needs specific usage
      timing of **No Mercy** to ensure that you get 9 GCDs within the buff
      period of **No Mercy**.

      - Most GCD speeds do not have any real ping requirement, but 2.45 needs you to be below ~50ms because **No Mercy** will be a "perfect" late weave every other usage.

      - Double weaving is generally expected to occur, but single-weaving is possible without damage loss (as long as the full burst window is completed).
  - question: How do I recover my rotation if I make mistakes?
    answer: >-
      The best case solution depends on what the "mistake" actually was.
      Remember that the basic guide's priority order for your burst phase is not
      telling you to follow that as a list, it is a **priority**. If you can't
      do a step in that list, move to the next one. If you can do a higher
      priority step in that list next GCD, do that one.


      An example of a common mistake is delaying **Gnashing Fang** so that it comes off cooldown at the same position as **Double Down** in your burst phase. You can place Sonic Break in the place of where **Gnashing Fang** normally goes, and then move **Gnashing Fang** or **Double Down** to the place that **Sonic Break** would have gone if you had not made that mistake.


      It's fine to delay your burst window by a GCD if the delay would help re-sort your burst actions in the event that several cooldowns become severely misaligned from **No Mercy**. We *try* not to delay because it's an average DPS loss, but so is running a rotation that is pushing cooldowns out of **No Mercy**.
  - question: Can you die while casting Superbolide?
    answer: >-
      Superbolide (along with other tank invulnerability actions) were updated
      to apply immediately upon the server receiving your request to use the
      action.


      This means that the actual activation delay between pressing the button and becoming impervious is roughly half of your ping, because that's the time it took to send that action request to the server. Some time is needed for the server to actually process that request and have it become active on its end, but there's no way of knowing what that time is (you can assume it is negligible.)


      With that in mind, it should be impossible in effect to die after you've cast the action, but it is possible to die from damage that strikes you as you are waiting for the buff to activate.
  - question: What does Tenacity do and why is it generally not used heavily?
    answer: >-
      Tenacity has two effects that scale at different rates, with the first
      effect being a damage bonus that increases your damage by 0.1% per tier
      (similar to Determination), and the second effect being a mitigation bonus
      that decreases your damage taken by 0.1%.

      - The damage reduction scales relatively quickly, which can be valuable in situations where damage isn't required (which usually isn't the case, so we don't prioritize this since our mitigation will cover the fight with or without Tenacity).

      - The damage boost scales somewhat slowly, at a rate equal to 80% of the tiering rate of Determination. This means that you get less damage boost per stat point invested, albeit not by a great difference.


      Since every encounter can be covered by tank and healer mitigation tools without any Tenacity, there's no reason to sacrifice DPS for mitigation on best-in-slot sets (or progression sets) and potentially risk missing a DPS check that you could have made by having better stats on your gear.


      Please keep in mind that this is *not* a recommendation to avoid Tenacity altogether. Gear that contains Tenacity is still very viable in the event that no equivalent item level gear piece exists that contains both CRIT and DET.
authors:
  - azazael
  - krom
---
