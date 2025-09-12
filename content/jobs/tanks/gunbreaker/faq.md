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
  - question: What GCD should I play?
    answer: >-
      Empirically, 2.50 tends to deal the most damage by a marginal (less than
      1%) amount in an average, full-uptime encounter.

      - Faster speeds will occasionally win in specific boss fights due to the cooldown reduction permitting fight-specific cooldown usage that 2.50 cannot perform.

      - A common reason players choose to play faster than 2.50 (especially in prog) is because faster speeds are more forgiving due to their cooldown reduction and additional GCD space within **No Mercy**.
  - question: How difficult is Gunbreaker to learn?
    answer: >-
      Between the four tanks, Gunbreaker is the most challenging to optimize due
      to the fact that it is the only tank that has hard GCD-based cooldowns
      that have to work around specific fights. Its rotation is composed of
      three relatively basic fundamentals, and the rotation does not
      significantly change with GCD speed adjustments.

      - All four tanks share common fundamentals so if you have experience playing one, then Gunbreaker will not be that hard to pick up.

      - If you are new to tanking or the game in general, Gunbreaker is not significantly difficult to learn. The nuance lies primarily in optimizing.

      - As a general rule of thumb, most jobs in this game currently share some builder-spender philosophy surrounding a 60 or 120 second buff and follow principles that are similar to Gunbreaker.
  - question: Are there ping requirements, and can i single weave?
    answer: >-
      Gunbreaker normally double-weaves and occasionally needs specific usage
      timing of **No Mercy** to ensure that you get 9 GCDs within the buff
      period of **No Mercy**.

      - Most GCD speeds do not have any real ping requirement, but 2.45 needs you to be below ~50ms because **No Mercy** will be a "perfect" late weave every other usage.

      - Double weaving is generally expected to occur, but single-weaving is possible without damage loss (as long as the full burst window is completed).
  - question: Is it worth it to hold No Mercy to secure better GCDs in No Mercy when
      I don't have Bloodfest?
    answer: >-
      No, because it loses potential future uses and places you outside of your
      party buffs, losing more than you gain by delaying on average.


      In a fight with no defined endpoint (infinite), every GCD that you hold **No Mercy** ends up losing a fractional amount of a future burst phase depending on GCD speed.

      - This loses more average DPS than the buffed GCD gains, unless you already know how the fight timeline plays out and you have determined that you do not lose cooldown usages from delaying. 

      - Even if you have confirme that you do not lose cooldown usages, you must check if you are losing net DPS from the fact that you will push GCDs out of party raid buffs by delaying your burst phase.
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


      This means that the actual activation delay between pressing the button and becoming impervious is half of your ping, because that's the time it took to send that action request to the server.


      With that in mind, it should be effectively impossible to die after you've cast the action, but you can still die as you wait for the buff to activate on the server's end to damage that was already prepared and applied to you at that moment.
  - question: What does Tenacity do, and why do tanks tend to minimize its use?
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
  - Balance-GNB-Staff
---
