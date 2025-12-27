---
title: Basic Guide
card_header_image: /img/jobs/sch/basic.png
authors:
  - tealjaker
  - potato
patch: "7.4 "
lastmod: 2025-12-27T17:56:26.978Z
changelog:
  - date: 2021-10-26T21:53:11.912Z
    message: Article Created.
  - date: 2022-04-11T23:55:59.352Z
    message: Updated for Endwalker.
  - date: 2023-01-19T16:45:02.074Z
    message: Patch update 6.3
  - date: 2024-07-27T21:04:36.816Z
    message: Updated for Dawntrail
---
This guide is intended for players who are looking to play Scholar in level 100 trials and raids. For information about playing Scholar while leveling, please see our Leveling Guide.

For a breakdown of what each skill does see the Skills Overview.

For Opener information see Openers. 

# Quick Glossary

* SCH: Scholar
* CD (Cooldown): The time it takes before you’re able to cast an action again.
* GCD (Global Cooldown): Spells that share the same base recast time. On SCH, these are mostly spells with about 2.5s recast time, plus Resurrection. 
* Instant (Instant Cast): GCD Spells that do not have a cast bar.
* oGCD (Off Global Cooldown): Abilities that don’t share the 2.5s base recast time and therefore can be used while GCD spells are on cooldown.
* Weaving: Using oGCDs in between GCDs. To avoid delaying your GCD, you can safely weave 2 oGCDs after an instant cast GCD, or one oGCD after your casted damaging GCD.
* HoT (Heal over Time): Actions that heal the target over a period of time. These actions heal for their listed potency once every three seconds.
* Regen: Another word for HoT
* DoT (Damage over Time): Actions that damage the target over a period of time. These actions deal damage for their listed potency once every three seconds.
* AoE (Area of Effect): Actions that affect every target in a specified area. AoE heals heal all allies in a circle around their source. AoE damage abilities affect all enemies in an area specified by the ability; enemies can perform AoE attacks too.
* AF (Aetherflow): The level 45 SCH ability. The resource stacks it grants and the abilities that cost Aetherflow are often called “AF stacks” and “AF abilities”.
* HP (Health Points): Your life. Don’t let this hit zero.
* MP (Mana Points): The resource that allows you to cast spells. Also don’t let this hit zero.

# Job Gauges

## Aetherflow Gauge

![](/img/jobs/sch/afgauge.png "Aetherflow Gauge")

The Aetherflow Gauge displays your current Aetherflow stacks, with a maximum of three AF stacks held at once. This gauge will first be displayed upon unlocking Aetherflow at level 45. Using Aetherflow or Dissipation will fully fill your Aetherflow Gauge, so avoid using these when you still have stacks remaining. These stacks can be used either on AF healing abilities or Energy Drain. The abilities which consume Aetherflow will be noted in the sections below, and usage of Aetherflow stacks will be expanded upon later in the guide.

## Faerie Gauge

![](/img/jobs/sch/faeriegauge.png "Faerie Gauge")

![](/img/jobs/sch/seraphgauge.png "Seraph Faerie Gauge")

The Faerie Gauge displays your current amount of Fae Aether. It will first be displayed upon unlocking the Aetherpact ability at level 70, and Fae Aether is solely used to fuel this ability. Aetherpact initiates the fairy ability Fey Union, which consumes ten Fae Aether per tick, and Fae Aether is accumulated whenever an AF ability is executed while the fairy is on the field (whether by consuming an AF stack or through the usage of Recitation). Upon unlocking Summon Seraph at level 80, the Faerie Gauge will also display the amount of time Seraph will remain on the field while she is active.

# How to Play Scholar

Scholar is an oGCD focused healer which works together with their pet fairy to keep the party healthy. As a shield healer, Scholar has access to many powerful mitigative abilities that can help the party to survive attacks that would otherwise kill them from full hp, but these mitigative abilities can also be used to just reduce the healing burden inflicted by less lethal attacks as well. Playing SCH well requires you to use to the correct tool for the job as you will have a wide variety of abilities to choose from when dealing with incoming damage. It is highly encouraged that as you get into more challenging content that you begin mapping out your cooldowns so you can maximize effective usage of your abilities. 

# Movement Options

The most important thing you can do to contribute as a healer is maintain your casting uptime. Always Be Casting is the mantra for every job in this game, and as a caster our biggest hurdle to this is often forced movement. As a Scholar you have several methods to deal with forced movements. Remember that each of these methods can be paired with Sprint or Expedient to increase the amount of movement each grants you. 

## Slidecasting and Prepositioning

As a Scholar, our main DPS spell is Broil. Broil has a 1.5s cast time meaning you have a \~1s window after each Broil where you aren’t casting and can move freely. On top of this though, you can also freely move during the last \~0.5s of each Broil cast without canceling the cast. This ~0.5s is referred to as the slidecast window. Your slidecast window is dependent on ping, so it won’t be exactly the same for every person, but it’s important that you learn when your slidecast window is to allow yourself the greatest possible amount of movement freedom. One thing that can be helpful for learning your slidecast window is adding an emote to your hotbar. When the emote lights up during your cast, you’re in the slidecast window and free to move. 

While you’ll have to move for many mechanics in most fights, most movements don’t need to be accomplished in a very short period of time. Using slidecasting, as well as some of the other methods that will be mentioned below, you can preposition for these mechanics rather than losing DPS by responding reactively to them. Remember that fight mechanics happen in a set order, and while there is randomness involved in some of them, you should always be prepared for where you’re going to have to be, or what movements you might have to make.

## Natural Biolysis Refreshes

Every 30s you will use Biolysis to refresh the duration of your DoT on the boss. Biolysis is an instant cast GCD meaning that you can freely move during it with no restrictions. It’s important to use these free movement windows as well as you can, to preposition for mechanics or for free movement during mechanics when your Bio refresh naturally lines up with it.

## Swiftcast

Swiftcast makes the next casted spell an instant cast spell instead. Paired with Broil, it allows you to freely move for an entire GCD. This is a vital tool for high movement mechanics that can’t be dealt with or are difficult to deal with using slidecasting or natural bio refreshes. However, Swiftcast is sometimes better saved for a possible usage of Resurrection, especially during prog. Ensure that you weigh the benefits of Swiftcast against the costs of not having it for a future Resurrection.

## Ruin II

Ruin II is a somewhat unique spell among healers. It’s an instant cast spell with no restrictions on its usage, but it deals ~25% less damage than Broil IV. This is your last resort to deal with forced movement, but it’s still a very important tool for maintaining your uptime before you have a fight optimized. During prog, Ruin II makes maintaining uptime easiest for Scholar amongst the healers, but it’s important not to still try to limit its usage when you can. Maintaining cast uptime is always the most important part of your DPS contribution, but replacing Ruin IIs with Broil IVs is just after it in importance.

## Seraphism

While Seraphism is active our GCD shields are replaced with Manifestation and Accession which are instant cast. While this does technically free up movement, remember that casting a GCD heal is no better than doing nothing dps wise. Only consider this a movement gain if you were going to GCD heal already, this is effectively the same as using a Swiftcast Adloquium or Concitation. 

# Healing Efficiently

Scholar has the most stratified healing priority of the healers, though there is still some flexibility to it. Your general healing priority should be Free Healing > Aetherflow Healing > GCD Healing. You can think of each of these categories in terms of how much damage potency they cost you. Free Healing = -0p  > AF Healing = -100p (Energy Drain) > GCD Healing = -310p (Broil IV). There will be instances however where an action in a lower priority category will deal with a mechanic better than higher priority actions. This can happen when you want to save a specific CD or resources for a later mechanic, or because providing mitigation such as a Sacred Soil or a Deployed Adloquium will allow your party to survive a mechanic or make a mechanic significantly easier to deal with. It’s important to coordinate all of your healing and mitigation tools with your party and cohealer, so that both you and your cohealer can heal efficiently. 

# Gearing and Stats

You can find current endgame Savage and Ultimate sets in the Gearing section of the Scholar landing page. Before endgame, it will generally be best to always use the highest item level gear you can obtain. Scholar’s stat and melding priority is as follows: Weapon Damage > Mind > Crit > DH = Det
