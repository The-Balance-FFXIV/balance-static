---
title: Dark Knight Openers
authors:
  - Balance-DRK-Staff
  - silaqui-amakiir
  - athunin
patch: "5.5"
lastmod: 2021-10-27T17:35:05.040Z
changelog:
  - date: 2021-10-27T17:35:21.786Z
    message: Added
---
# Dark Knight Openers and Rotation

# Openers
DRK has a several different options for openers, not all of which are listed here.
Fight timings and party composition can both affect which opener is best, based on when you can keep uptime on the boss and when raid buffs are used.
Fight-specific opener information can be found in #drk_encounter and #drk_questions (often in the pins).
This section will list some **General-purpose** DRK openers which work relatively well in most situations.
 
Tanks currently use Grade 4 Tinctures of Strength
<br>*(Strength also affects tank magic potency, including healing)*



Goals for DRK openers include:

- Get Living Shadow out ASAP; the long spawn animation means any delays will push some hits out of raid buffs
- Get buffs like Blood Weapon and Delirium, and damaging abilities like Carve and Spit and Salted Earth on cooldown early
- Use as many big hits and spend as much mana as possible inside potion and raid buff windows (which typically come up around the fourth or fifth GCD)

Opener notes:

- Blood Weapon is used prepull to ensure that Living Shadow is used as soon as possible. Any later and a hit will get pushed out of raid buffs.
- The prepull TBN is used to prevent MP overcap from the first Hard Slash under Blood Weapon, since if it breaks it refunds the MP cost in the form of a free Edge of Shadow.
  - If the prepull TBN will not break, then simply omit it and overcap 600-800 MP before your first Edge of Shadow
- Try to avoid pulling with Unmend, as doing so will delay Living Shadow. If you need to start with aggro, consider having your co-tank pull with stance on and use Provoke after your opener.

## 4th GCD Delirium Opener
Best raid buff alignment and a good default choice
> Text version: Prepull The Blackest Night > Prepull Blood Weapon just before pull > Hard Slash + Edge of Shadow > Syphon Strike + Potion > Souleater + Living Shadow + Plunge > Hard Slash + Salted Earth + Delirium > Bloodspiller + Edge of Shadow + Carve and Spit > Bloodspiller + Edge of Shadow + Plunge > Bloodspiller + Edge of Shadow + Abyssal Drain > Bloodspiller + Edge of Shadow > Bloodspiller > Syphon Strike > Souleater

![4th GCD](https://cdn.discordapp.com/attachments/872701089873530890/872701612257333278/drk4thgcd.png)




## 3rd GCD Delirium Opener
Useful if a fight benefits from a slightly earlier Delirium due to downtime or phasing.


![3rd GCD](https://cdn.discordapp.com/attachments/872701089873530890/872701687889002536/drk3rdgcdversion3.png)

## Single Weave Opener
 

Use only if your ping prevents you from double weaving without clipping (delaying your next GCD), and you have exhausted options such as VPNs (!faq vpn in bot_spam).

![Single Weave](https://cdn.discordapp.com/attachments/872701089873530890/872701819292373052/drksingleweave.png)

--- 


# Rotation
 
Dark Knight’s rotation is deceptively simple, and follows these simple principles:
- Avoid overcapping on MP or blood by using Edge of Shadow and Bloodspiller, respectively.
- Use other damaging oGCDs (such as Abyssal Drain, Salted Earth, Blood Weapon, and Delirium) on cooldown.
    - Your second Blood Weapon (around 1:00) can (and should) be delayed by ~3 GCDs to avoid overcapping mana/blood before raidbuffs.
- fill your remaining GCDs with the Souleater combo (Hard Slash -> Syphon Strike -> Souleater)

## Using Blood Weapon and Delirium

Blood Weapon and Delirium should be weaved at least two-thirds of the way into the GCD roll in order to cover five GCDs.

Both should be used as they come up, without being held for extended periods of time (i.e. both in the opener, BW at \~1:00, Delirium at \~1:30, BW at ~2:00, etc).

The second Blood Weapon in the fight can (and should) be delayed by ~3 GCDs to avoid overcapping Blood and MP before raid buffs.

Because spells (e.g. Unleash) have a longer recast time than weaponskills due to skill speed, it can be much harder to get five GCDs in Blood Weapon while using AoE. Try to save Blood Gauge for Blood Weapon so that two to three Blood Gauge spending GCDs (Bloodspiller/Quietus) can be used during Blood Weapon for the shorter recast. For example, with 100 Blood, use Blood Weapon after Unleash and then use Quietus, Quietus, Stalwart Soul, Quietus, Unleash.

## Pooling Resources for Raid Buffs

Edge of Shadow and Bloodspiller can be delayed without loss, as long as MP and Blood do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come in multiples of 60 seconds.

Dark Knight generates around 12000 MP per minute, from a combination of Blood Weapon, Syphon Strike, Carve and Spit, Delirium, and natural MP regen ticks. Since MP caps at 10000, we delay the first (and only the first) Blood Weapon after the opener in full uptime to prevent overcapping before raid buffs come out, allowing four Edge of Shadow to naturally fall in every 1-minute raid buff window.

Similarly, try to use three Blood Gauge spenders (i.e. Living Shadow, Bloodspiller) during every 1-minute raid buff window.

--- 

# Situational Openers

## No-prepull The Blackest Night Opener

If a fight does low enough damage that your prepull The Blackest Night (TBN) won't break, consider using this opener, which loses 600-800 MP to overcapping before the first Edge of Shadow is used. Other ways of avoiding prepull TBN exist, but this one is simple and has fairly minimal loss.


![No Prepull TBN](https://cdn.discordapp.com/attachments/583964695266983944/875122872488718426/no-prepull-5.x.png)

## Unmend Opener

This opener should only be used if you need precise positioning on a boss early into the fight and can't do that with a standard (facepull) opener, as it delays Living Shadow out of raid buffs, as well as delaying your MP generation.
<br>Consider having the other tank pull instead, then Provoke from them if needed.
![Unmend](https://cdn.discordapp.com/attachments/583964695266983944/875130705905078313/unmend-5.x.png)


--- 
 
# FAQ


> *Why is The Blackest Night (TBN) used pre-pull in the opener?*

This prevents overcapping MP from having Blood Weapon  on Hard Slash and from a possible natural MP tick.
 
> *How do I spend my MP?*

As a general rule, never overcap MP, and consider holding on to 3k MP so that you can use The Blackest Night (TBN) if needed.

If you have raid buffs and are optimizing, you should plan to use all of your Edge of Shadow (EoS) casts under buffs, and in particular, to put more EoS casts where buffs are stronger. This often means using five EoS under even-minute (0, 2, 4, ...) buffs, and three under odd-minute buffs.
 
> *Should I always pair Blood Weapon and Delirium?*

No. You should be using both abilities as they come up unless downtime will cause you to lose several GCDs in them (or other unusual circumstances).  They will come up together every 3 minutes in full uptime (and can overlap when that happens, as long as they are not weaved between the same pair of GCDs).
 
> *At how many targets do I use my Area of Effect (AoE) skills?*

- At any number of targets, use Living Shadow when possible.
- At 2+ targets:
  - Replace Edge of Shadow with Flood of Shadow
  - Replace Souleater combo with Stalwart Soul combo
- At 3+ targets:
  - Replace Bloodspiller with Quietus