---
title: Dark Knight Openers
authors:
  - Balance-DRK-Staff
  - silaqui-amakiir
  - athunin
  - violet-stardust
patch: "7.2"
lastmod: 2025-05-18T20:04:57.560Z
changelog:
  - date: 2024-07-28T09:27:40.592Z
    message: Updates for 7.0
  - date: 2025-04-14T21:53:34.790Z
    message: Minor modification to standard opener, pushing first Edge of Shadow
      earlier.
  - date: 2025-05-18T20:04:45.514Z
    message: Minor updates to reflect hotfixed Shadowstride application delay.
---
# Dark Knight Openers and Rotation

# Dark Knight Openers

DRK is a flexible class, and so specific encounters may benefit from alternate openers.
Encounter-specific opener information may be found in the [drk_encounter channel of the Balance discord](https://discord.com/channels/277897135515762698/1264618936297848926), or on fight-specific guides, where applicable.

This section will list general-purpose DRK openers, which will work well for most situations, and provide an overview of how openers are chosen. For more nuance, understanding, and detail about why some encounters might prefer a different opener, you may also want to read the [opener variation section in the advanced guide](/jobs/tanks/dark-knight/advanced-guide/#opener-variations).

## Opener Design Goals
* Use as many big hits and spend as much MP as possible inside potion and raid buff windows (which typically come up around the third or fourth GCD). This means that most skills will be delayed until this point.
* Get **Living Shadow** out early enough that its attacks fully fit into buffs. Its long spawn animation and the fact that it updates with buffs in real time means that it is best used before buffs come out, unlike skills that apply damage immediately.
* Use an Edge of Shadow to apply Darkside as early as possible.
* Avoid overcapping on MP.


Tanks currently use **Grade 3 Gemdraughts of Strength**.
<br>Note that Strength affects both physical and magical skills for tanks.

## Standard Opener

![7.2 Standard Dark Knight Opener](/img/drk_opener_7_2.png "Standard")

> Text version: <br/>
> Prepull **The Blackest Night** (-3) <br/> 
> **Unmend** (-1), Potion, **Edge of Shadow**, <br/> 
> **Hard Slash** + **Living Shadow**, <br/>
> **Syphon Strike**, <br/>
> **Souleater** + **Delirium**, <br/>
> **Disesteem** + **Salted Earth** + **Edge of Shadow**, <br/>
> Scarlet Delirium + Shadowbringer + **Edge of Shadow**, <br/>
> **Comeuppance** + **Carve and Spit** + **Edge of Shadow**, <br/>
> **Torcleaver** + **Shadowbringer** + **Edge of Shadow**, <br/>
> **Bloodspiller** + **Salt and Darkness**

### Opener notes
* **Unmend** is used to delay the opener slightly to account for raid buff application time. Use it whether or not you are pulling.
* Early use of **Disesteem** (before the **Torcleaver** combo) avoids some minor MP overcap.

### Optional Modifications
* If the prepull TBN will not break, it can be left out for a small MP loss. This does not change the rest of the opener substantially, although the last **Edge of Shadow** may get pushed further back.
* **Shadowstride** can be used to pull instead of **Unmend**, and pulling with **Hard Slash** is also viable if the boss starts in melee range, but each of these options requires adding an extra **Hard Slash** before **Disesteem** to ensure that the burst fits into late-applied buffs. However, if you are the pulling tank, this can make positioning harder. There is more detail on this opener and its benefits and potential drawbacks in [a section in the advanced guide.](/jobs/tanks/dark-knight/advanced-guide/#opening-with-shadowstride)
* If you cannot fit the **Edge of Shadow** before **Hard Slash** without clipping due to, for example, the boss being far away, move it to after **Hard Slash**. I.e., **Unmend** -> Potion -> **Hard Slash** -> **Edge of Shadow** -> **Living Shadow**.

- - -

# Rotation

## Single-Target Rotation

Dark Knight’s rotation follows a simple priority system after the opener.
Burst windows after the opener will look much the same as the opener, except that not all bursts will have Salted Earth.

For GCDs:
* Use **Disesteem** and the **Torcleaver** combo (**Scarlet Delirium**, **Comeuppance**, **Torcleaver**) when under buffs.
* Use **Bloodspiller** under raid buffs, or to prevent overcapping on blood.
* Use the **Souleater** Combo (**Hard Slash**, **Syphon Strike**, **Souleater**) otherwise.

For oGCDs:
* Use Edge of Shadow under raid buffs, or to prevent overcapping on MP.
* Hold both charges of Shadowbringer for 2-minute buffs.
* Use all other damaging/damage-buffing oGCDs (**Salted Earth**, **Delirium**, **Carve and Spit**, etc) on cooldown.

## AoE (Multi-Target Rotation)

At levels 94 and higher, DRK switches to using its AoE rotation for **3 or more targets**. Below level 94, the **Stalwart Soul** combo is a slight gain over the **Souleater** combo on 2 or more targets, but other skills are unchanged.
The AoE rotation is another simple priority system, replacing each single-target ability with its AoE counterpart.

For GCDs:
* Replace the **Torcleaver** combo with Impalement
* Replace **Bloodspiller** with Quietus
* Replace **Souleater** combo GCDs with **Stalwart Soul** combo GCDs (**Unleash**, **Stalwart Soul**)

For oGCDs:
* Replace **Edge of Shadow** with **Flood of Shadow**
* Replace **Carve and Spit** with **Abyssal Drain**


## Pooling Resources for Raid Buffs

**Edge of Shadow** and **Bloodspiller** can be delayed without loss, as long as MP and Blood Gauge do not overcap. Dark Knight is thus uniquely able to pool a massive amount of potency for use during party raid buff windows, which typically come every 2 minutes.

Dark Knight generates around 10800 MP per minute, from a combination of **Syphon Strike**, **Carve and Spit**, **Delirium**, and natural MP regen ticks (which grant 200 MP every three seconds in combat, or 600 MP every three seconds if out of combat).
This translates to 3.6 MP spenders per minute, or 7.2 spenders per 2 minutes.
Since at least 2 **Edge/Flood of Shadow** are needed in the odd minutes to maintain Darkside, this leaves at most 5.2 spenders for every even minute, when buffs come out.
Even going into burst at full MP and using the MP generated from **Carve and Spit** and Delirium, however, we do not reach 15000 MP.

To reach 5 **Edge/Flood of Shadow** in buffs, we use **The Blackest Night (TBN)** earlier, outside of buffs, in order to store a Dark Arts, essentially banking 3000 MP for later.
With a stored Dark Arts from the previous minute, 9000+ MP, and the MP from Delirium and **Carve and Spit**, 5 **Edge/Flood of Shadow** within buffs are possible.

This means that damage-optimal MP spending is as follows:
* 5 **Edge of Shadow** in each buff window (except the opener, where one Edge of Shadow is used outside of buffs to get Darkside).
* Three MP spenders in odd minutes, where the last one is **The Blackest Night**, with the Dark Arts from this being held into the next buff window.

Note that the first two MP spenders in odd minutes can freely be **The Blackest Night (TBN)** as well, with their Dark Arts then being used before the next TBN.
Similarly, TBN can be used during buffs without losing damage as long as the Dark Arts it generates can be spent on **Edge/Flood of Shadow** before the buff window ends.

Similarly, though more simply, entering buffs (when Delirium is pressed) with 70 or less Blood Gauge will ensure that you do not overcap on Blood Gauge.
This allows for using 1-2 **Bloodspillers** during every 2-minute raid buff window, and it is best to have the Blood Gauge as high as possible (up to 70) when entering Delirium.

## Rotation Video

{{< youtube -qDvEZQU9dQ >}}