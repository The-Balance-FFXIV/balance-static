---
title: Dark Knight Openers
authors:
  - Balance-DRK-Staff
  - silaqui-amakiir
  - athunin
patch: "6.5"
lastmod: 2024-01-25T08:36:34.887Z
changelog:
  - date: 2021-10-27T17:35:21.786Z
    message: Added
  - date: 2022-01-02T22:59:40.775Z
    message: Updated for 6.01. Non-standard opener images are still placeholders.
  - date: 2022-09-19T08:31:01.249Z
    message: Updated for 6.21.
  - date: 2023-01-18T23:05:24.499Z
    message: Opener update, bump to 6.3
  - date: 2024-01-25T08:36:30.623Z
    message: Small opener update, mostly to highlight final edge in potion window)
---
# Dark Knight Openers and Rotation

# Dark Knight Openers

DRK has several different options for openers, not all of which are listed here.
Fight timings and party composition can both affect which opener is best, based on when you can keep uptime on the boss and when raid buffs are used.
Fight-specific opener information can be found in #drk_encounter and #drk_questions (often in the pins).
This section will list some **General-purpose** DRK openers which work relatively well in most situations.

Tanks currently use Grade 7 Tinctures of Strength.
<br>*(Strength also affects tank magic potency, including healing)*

Goals for DRK openers include:

* Get Living Shadow out as early as possible; its long spawn animation means that any delays will push some hits out of raid buffs.
* Get buffs like Blood Weapon and Delirium, and damaging abilities like Carve and Spit and Salted Earth on cooldown early.
* Use as many big hits and spend as much MP as possible inside potion and raid buff windows (which typically come up around the third or fourth GCD).

Opener notes:

* Blood Weapon is used pre-pull to ensure that Living Shadow is used as soon as possible. Any later and a hit will get pushed out of raid buffs.
* The pre-pull TBN is used to prevent MP overcap from the first Hard Slash under Blood Weapon, since if it breaks it refunds the MP cost in the form of a free Edge of Shadow.

  * If the pre-pull TBN will not break, leave it out and overcap 600-800 MP before your first Edge of Shadow. This is generally a smaller loss than delaying Living Shadow.
* Try to avoid pulling with Unmend, as doing so will delay Living Shadow. If you need to start with aggro, either pull with Provoke or consider having your co-tank pull with stance on and use Provoke after your opener.

## Standard Opener

Best raid buff alignment and a good default choice.\
The Edge of Shadow near the end of the opener is intended to fit in the potion window, but not most raid buffs.\
Note: The potion can be moved to after the second GCD (Syphon Strike) for a minor loss if this is more comfortable or aligns better with a fight's mitigation timings (e.g. if the sixth edge of shadow cannot be fit into a prepull potion window without losing a key use of The Blackest Night)

> Text version: Prepull Blood Weapon (-4) > Prepull The Blackest Night (-3) > Prepull Potion (-2) > Provoke (if pulling) > Hard Slash + Edge of Shadow + Delirium > Syphon Strike > Souleater + Living Shadow > Hard Slash Salted Earth + Edge of Shadow > Bloodspiller + Shadowbringer + Edge of Shadow  > Bloodspiller Carve and Spit + Plunge > Bloodspiller + Shadowbringer + Edge of Shadow > Syphon Strike + Salt and Darkness + Edge of Shadow **\>** Salt and Darkness + Edge of Shadow > Souleater+ Plunge > Hard Slash > Syphon Strike + Edge of Shadow > Souleater > Bloodspiller

![Standard Dark Knight Opener](/img/jobs/drk/opengraphic2.png "Standard")

## Early Delirium Opener

Useful if a fight benefits from a slightly earlier Delirium due to downtime or phasing

> Text version: Pre-pull Delirium > Pre-pull The Blackest Night > Pre-pull Blood Weapon just before pull > Hard Slash + Edge of Shadow > Syphon Strike + Potion > Souleater + Living Shadow + Salted Earth > Bloodspiller + Shadowbringer + Edge of Shadow > Bloodspiller + Carve and Spit + Plunge > Bloodspiller + Shadowbringer + Edge of Shadow > Hard Slash + Salt and Darkness + Edge of Shadow > Syphon Strike + Plunge + Edge of Shadow

![Early Delirium Opener](/img/jobs/drk/drk-opener-6.4-early-del.png "Early Delirium")

- - -

# Rotation

Dark Knight’s rotation is deceptively simple, and follows these simple principles:

For GCDs:

* Use Bloodspiller under raid buffs or to prevent overcapping on Blood Gauge.
* Use the Souleater combo (Hard Slash -> Syphon Strike -> Souleater) to fill remaining GCDs.

For oGCDs:

* Use Edge of Shadow under raid buffs or to prevent overcapping on MP.
* Hold both charges of Shadowbringer for two-minute raid buffs.
* Hold two charges of Plunge for two-minute raid buffs, unless it can be used to maintain better uptime --- gaining even an autoattack is generally a better use of Plunge than saving it for buffs.
* Use other damaging or buffing oGCDs (such as Salted Earth, Carve and Spit, Blood Weapon, and Delirium) on cooldown.

  * Your second Blood Weapon (around 1:00) can (and should) be delayed until two GCDs after Delirium is used. This means using Delirum -> two combo GCDs -> Blood Weapon -> one combo GCD -> start spending Delirium stacks. This delay allows you to avoid overcapping on MP and Blood Gauge before raid buffs come up.

## Using Blood Weapon and Delirium

Since you cannot spend Blood Gauge with Bloodspiller/Quietus during Delirium, there is a risk of overcapping on Blood Gauge while both Delirium and Blood Weapon are active. This can be avoided (with common alignment of Blood Weapon and Delirium) by ensuring that you are below 50 Blood Gauge when pressing Blood Weapon (if Blood Weapon is before Delirium) or Delirium (if Delirium is before Blood Weapon). Note that if Living Shadow is coming up, you may want to go into Blood Weapon/Delirium at higher Blood Gauge, knowing that you can use Living Shadow to avoid overcapping.

## Pooling Resources for Raid Buffs

Edge of Shadow and Bloodspiller can be delayed without loss, as long as MP and Blood Gauge do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come in multiples of 60 seconds.

Dark Knight generates around 12000 MP per minute, from a combination of Blood Weapon, Syphon Strike, Carve and Spit, Delirium, and natural MP regen ticks. Since MP caps at 10000, we delay the first (and only the first) Blood Weapon after the opener in full uptime to prevent overcapping before raid buffs come out, allowing four Edge of Shadow to naturally fall in every 2-minute raid buff window.

By using The Blackest Night (TBN) outside of buffs, it is possible to use the resulting Dark Arts, 9000+ MP, and the MP from Blood Weapon to get five Edge of Shadow (EoS) under raid buffs. Since Dark Knight only generates 12000 MP per minute, this fifth EoS is effectively being delayed from the previous minute. This then makes it possible to spend five EoS during the stronger even-minute buffs (0m, 2m, 4m, ...) and only three during the odd minutes, plus a TBN somewhere in the odd minutes to store a Dark Arts for the even-minute buffs.

Similarly, try to use three Blood Gauge spenders (i.e. Living Shadow, Bloodspiller) in addition to your free Delirium Bloodspillers during every 2-minute raid buff window.