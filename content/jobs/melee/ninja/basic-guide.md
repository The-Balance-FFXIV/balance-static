---
title: Basic Guide
card_header_image: /img/jobs/nin/basic.png
authors:
  - jackal
  - Balance-NIN-Staff
patch: "7.05"
lastmod: 2024-08-11T04:26:07.459Z
changelog:
  - date: 2021-10-29T03:08:27.069Z
    message: Created page
  - date: 2022-03-20T03:55:08.156Z
    message: Updated for Endwalker
  - date: 2022-05-27T17:56:53.705Z
    message: "Updated guide to 6.10. "
  - date: 2022-07-15T18:21:56.384Z
    message: Unchanged, updated for 6.18 to parity other NIN changes
  - date: 2022-09-20T06:32:43.850Z
    message: Updated for 6.2 (no changes)
  - date: 2023-03-01T11:03:53.786Z
    message: Updated opener graphics for 6.3
  - date: 2023-05-25T20:42:23.204Z
    message: Updated to 6.4 (no changes)
  - date: 2024-08-11T04:25:56.095Z
    message: Updated for Dawntrail.
---
<style>

.pb {
    color: #c92664;
}

a { 
  font-weight: bold;
}

code {
  background: black !important;
}

tbody tr:nth-child(odd) {
    background-color: #0d1117;
}

tbody tr:nth-child(even) {
    background-color: #161b22;
}

th {
    background-color: #0e1114 !important;
}



table {
  background: black;
    display: block;
    max-width: fit-content;
    margin: 0 auto;
    border: 2px solid #2a2a2a;
    border-collapse: collapse;
    width: 100%;
}
</style>
<div>
<div>
  <div>
Ninja is a fast-paced yet flexible job with a high focus on a powerful burst every one and two minutes. It is unique from other jobs with its utilization of Ninjutsus, a combo-like system allowing a Ninja to form a multitude of ranged attacks. We have a personal buff every minute (Kunai's Bane) where we emphasize landing all of our biggest attacks within 16.25s, and a raid buff (Dokumori) every 2-minutes that lasts 21s.<br><br>

If you want a melee job with the most flexibility for disengagements and has a fast-paced burst phase and relaxing filler phase, then Ninja might just be the job for you!

This guide assumes you are <b class="pb">level 100</b> and wish to learn the job for
<b class="pb">savage</b> or <b class="pb">ultimate</b> raiding, even if completely fresh!

Other topics such as handling downtime and mult-targets is included. As such, this is a comprehensive guide.

If you're looking for <b class="pb">Advanced Optimizations</b> such as Extended Standard or JP, check the advanced guide on this site.

## Resources

⦿ [Video Demo](https://www.youtube.com/watch?v=JNdx90pYgAE&t)

⦿ [Rotation Planner](https://bit.ly/45JLVNL): Includes a visualization of a 6-minute rotation, but primarily allows anyone to create a rotation with calculated values.

⦿ [XIVAnalysis](https://xivanalysis.com/) is good for checking general mistakes and viewing a timeline.

⦿ [XIVGear](https://xivgear.app/) is useful for creating gearsets for any job

# Core Concepts


⦿ <b class="pb">Ninki</b> is one of two gauges, and allows us to accumulate resources for use of <b>Bhavacakra</b>, <b >Hellfrog Medium</b> or <b>Bunshin</b>.

Furthermore, we ought to avoid ever overcapping on Ninki, even if we must burn gauge right before Trick Attack. Overcapped Ninki is potential oGCD loss, which is a far larger loss than the gain of getting more Bhavacakras under Trick.

Additionally, any GCDs that consume <b class="pb">Bunshin</b> will gain an additional +5 Ninki.



<div style="text-align: center;">
<img src="https://www.thebalanceffxiv.com/img/jobs/nin/image25.png" style="width: 300px"/>
</div><br>



<table>
  <thead>
    <tr>
      <th>+5</th>
      <th>+10</th>
      <th>+15</th>
      <th>+40</th>
      <th>+50</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <img src="https://lds-img.finalfantasyxiv.com/d/657b568d32fd379339d365704c75ee7ca7e0cbd9.png" style="width:40px"/>
      <img src="https://lds-img.finalfantasyxiv.com/d/3b3414364511f0fa913d25a989b88668c6152a90.png" style="width:40px"/>
      <img src="https://lds-img.finalfantasyxiv.com/d/d40b78dd5c99076b25086882f27de295f8a609af.png" style="width:40px"/><br>
      <img src="https://lds-img.finalfantasyxiv.com/d/86e59c1bd3dedee2a6b68d3321da04c68a3acb52.png" style="width:40px"/>
      <img src="https://lds-img.finalfantasyxiv.com/d/e874766b966c4e6a786b58a35d76d3c0bd25b973.png" style="width:40px"/>
      <img src="https://lds-img.finalfantasyxiv.com/d/aaf631010c04fc9685247fe855060f640dff89f7.png" style="width:40px"/><br>
      <img src="https://lds-img.finalfantasyxiv.com/d/9ab20d782e03641292336da9b2453f426435a3b0.png" style="width:40px"/>
      </td>
      <td>
      <img src="https://lds-img.finalfantasyxiv.com/d/45a5ef76e62a78c0c0fcf1feeefb4b992ab82346.png" style="width:40px"/>
      </td>
      <td>
      <img src="https://lds-img.finalfantasyxiv.com/d/e68ade763da71adb1e8401db79a08e1df6f4d9e1.png" style="width:40px"/>
      <img src="https://lds-img.finalfantasyxiv.com/d/f8e49f627d8f6e16b91b2192b322812f09c40475.png" style="width:40px"/><br>
      </td>
      <td>
      <img src="https://lds-img.finalfantasyxiv.com/d/751e11fc60c05f5ac427b522211ae510ef845f6c.png" style="width:40px"/>
      </td>
                  <td>
      <img src="https://lds-img.finalfantasyxiv.com/d/9c7d1c58eb10c5d105f1ee98a21f84a031d26518.png" style="width:40px"/>
      </td>
    </tr>
  </tbody>
</table><br>

⦿ <b class="pb">Kazematoi</b> is our second gauge and forces a similar playstyle to our former Huton gauge. We fill this gauge with <b >Armor Crush</b> and spend this gauge with <b>Aeolian Edge</b>. Each consumed stack grants +100 potency to Aeolian Edge, making the normally 440p skill be 540p.

<b >Armor Crush</b> gains 2 Kazematoi to a maximum of 5 and <b>Aeolian Edge</b> spends 1 Kazematoi. It is important to note that we should never overcap Kazematoi, as this is a flat DPS loss.

<div style="text-align: center;">
<img src="https://lds-img.finalfantasyxiv.com/promo/h/X/4N08Eemw-qqy87gkDKHtHfULpg.png"  style="width: 200px"/>
</div>

⦿ <b class="pb">Ninjutsus</b> are unique abilities that we formulate with the mudras: Ten, Chi and Jin. Refer to this [cheat Sheet](https://imgur.com/a/veFvPGp) for all the different mudra combinations.

⦿ <b class="pb">Kunai's Bane</b> is an AOE targeted personal buff that increases damage by 10% you do to the afflicted targets for 16.25 seconds every minute. Our goal is to utilize Kunai's Bane and fit as many high potency abilities as we can before it ends.

⦿ <b class="pb">Dokumori</b> is our raid-buff that afflicts the target with a vulnerability debuff that increases damage taken by 5% for everyone hitting the target every 2-minutes for 21.0s. We ought to couple this closely with <b >Kunai's Bane</b> to maximize our damage output.

⦿ <b class="pb">Pet Potency:</b> Bunshin is our only pet and anything that Bunshin executes will use 'pet potency' instead of potency listed on our tooltip. Yes, the tooltip isn't real.

This is because pets don't benefit from <b>party bonus</b> and have a <b>lower job-modifier</b>. To put simply, pets do less damage.

```
Pet potency is roughly x0.92 of their listed tooltip.
- Phantom Kamaitachi is 552 potency
- Single-Target bunshin hits are 147 potency.
```

# Standard Openers


<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/standard4th.png" style="max-width:800px" />
</div>
<br>


- Suiton prepull preparation should be at -6.0 seconds and cast approximately -0.90 seconds on the timer. This will shorten our cooldown on mudra and ensure we can get x2 Raiton under Kunai's Bane after the opener
- Ideally drift Dokumori 1 GCD post opener, to allow for better alignment with all other raid buffs. We use it so early in the opener due to Bunshin.
- Can catch the last Raiju (Extended Standard) with very late woven Kunai's Bane. More in the Advanced Guide.
<br>


<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/standard3rd.png" style="max-width:800px" />
</div>
<br>

- Similar to the above with Suiton and drifting Dokomori.
- This uses Kunai's Bane a GCD earlier, but is a slightly weaker opener.
- This opener is preferable on 2.10 GCD due to inherit drift on that speed.
<br>

<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/3rdGCDDoku.png" style="max-width:800px" />
</div>
<br>

- Similar to 4th GCD Standard except Dokumori is much better aligned with other raid buffs in the party.
- Main difference is Bunshin is 1GCD later throughout the fight and is a slightly weaker opener.
<br

# Standard Rotation



## Filler & Kazematoi

Outside of our Kunai's Bane & Dokumori burst windows, our filler is straight-forward. A majority of it will be using our combo route <b class="pb" >Spinning Edge</b> → <b class="pb">Gust Slash</b> → <b class="pb">Aeolian Edge</b> / <b class="pb">Armor Crush</b>, and allows us to continue doing damage until our next burst window.

We should only use <b>Aeolian Edge</b> when our Kazematoi Gauge has at least 1 kazematoi. Otherwise, we ought to use <b>Armor Crush</b> to build. It is also important to build enough gauge so that we use <b>Aeolian Edge</b> in Kunai's Bane and Dokumori instead of <b>Armor Crush</b>.

## Positionals

<b>Aeolian Edge</b> is a <b class="pb">rear</b> positional while <b>Armor Crush</b> is a <b class="pb">flank</b> positional. Since we have flexibility on how we build/spend kazematoi, we should line our usage up so it's convenient to hit a rear or flank positional.

## Ninki

Throughout our rotation we will be building resources and spending <b class="pb">Ninki</b> as needed. Optimally, it is best if we pool our Ninki as high as possible without overcapping for our Kunai's Bane window, then dump as many spenders as weave space provides. Generally this will look to be between 1 to 3 Bhavacakras/Zesho Meppo per Kunai window.

<table>
  <thead>
    <tr>
      <th>Ability</th>
      <th>Icon</th>
      <th>Potency</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bunshin</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/0469d406babef3b172ba2a567f748b6ff8e11860.png" style="width:40px"/></td>
            <td>N/A</td>
      <td>Use on cooldown. Don’t hold for Kunai's Bane unless holding it won’t cost you a usage.</td>
    </tr>
    <tr>
      <td>Bhavacakra</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/7fa8283b30b9ac35aada60984cbfaf01d3268c95.png" style="width:40px"/></td>
            <td>380 or 530</td>
      <td>When there are 1 - 2 targets. Only use on 3 targets if Meisui is active.</td>
    </tr>
    <tr>
      <td>Zesho Meppo</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/55604bbe9cf720982be6e0ef74e9bf002d939935.png"  style="width:40px"/></td>
      <td>550 or 700</td>
      <td>When there is only 1 target, else Deathfrog Medium.</td>
    </tr>
        <tr>
      <td>Hellfrog Medium</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/c802df3d7abd5e50889d1cc5e97cf64eb1610afa.png" style="width:40px"/></td>
      <td>160/target</td>
      <td>When there are 3+ targets.</td>
    </tr>
        <tr>
      <td>Deathfrog Medium</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/cb1fc6f802ae442daa8ead243f4f9f49bf9525f4.png" style="width:40px"/></td>
      <td>300/target</td>
      <td>When there are 2+ targets.</td>
    </tr>
  </tbody>
</table><br>

## Ninjutsus

[Cheat Sheet](https://imgur.com/a/veFvPGp): Easy to view guide for all Ninjutsu combinations. Remember, only the <b>last</b> mudra matters for what ninjutsu gets created.

It is important for a Ninja to understand and confidently know each Ninjutsu combination, as our rotation demands excessive use of <b>Ten</b>, <b>Chi</b> and <b>Jin</b> to formulate some of our strongest GCDs. With a 20 second cooldown on our mudras, we expect to get <b class="pb">3 natural Ninjutsus per minute</b>.

- One ninjutsu will be used on <b>Suiton</b> or <b>Huton</b> to prepare Kunai's Bane.
- The other two will be used on <b>Raiton</b>, <b>Katon</b>, or <b>Doton</b>.

<b>Kassatsu</b> provides us with an additional Ninjutsu every minute and should be used as Hyosho Ranruu or Goka Mekkyaku. This means a total of 4 Ninjustus will be cast per minute.

<table>
  <thead>
    <tr>
      <th>Ability</th>
      <th>Icon</th>
      <th>Potency</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>Suiton</td>
      <td><img src="https://lds-img.finalfantasyxiv.com/d/fd706ad1980d3382fd9c64ffec7a0374d549d5cc.png" style="width:40px"/></td>
      <td>540p</td>
      <td>Use with 1 - 2 targets.</td>
    </tr>
        <tr>
      <td>Huton</td>
      <td><img src="https://lds-img.finalfantasyxiv.com/d/52e16f75932d2dc542606dccf6b9a8ffdef35b5d.png" style="width:40px"/></td>
      <td>240p / target</td>
      <td>Use over Suiton with 3+ targets.</td>
    </tr>
    <tr>
      <td>Raiton</td>
      <td><img src="https://lds-img.finalfantasyxiv.com/d/1c5d9c8d2301016f0d1d7412cc5100a7e41de735.png" style="width:40px" alt="raiton"/></td>
      <td>740p</td>
      <td>Use with 1 - 2 targets.</td>
    </tr>
    <tr>
      <td>Katon</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/c13292e99775bf7b834e9bf44eae59cdf977dc8c.png" style="width:40px"/></td>
      <td>350p / target</td>
      <td>Use over Raiton with 2+ targets if Doton is active. Else, 3+ targets. </td>
    </tr>
    <tr>
      <td>Doton</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/c4807f81a654f2b25cca49c1f61e9b3bc7df62d6.png" style="width:40px" /></td>
      <td>80p / tick per target, for 7 ticks. 560p / target full duration.</td>
      <td>Targets afflicted with Doton for the full duration will endure 560p (or 80p per tick). Use on 2+ targets if targets remain in it for the full duration. An additional 50p (Hollow Nozuchi) is added per target upon use of Hakke Mujinsatsu, Katon, Goka Mekkyaku and Phantom Kamaitachi.</td>
    </tr>
        <tr>
      <td>Hyosho Ranryu</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/a700c6a595b5f5ee272b5a3452f680497df8fabe.png"  style="width:40px"/></td>
      <td>1,690p (with Kassatsu).</td>
      <td>Use with 1 - 2 targets.</td>
    </tr>
        <tr>
      <td>Goka Mekkyaku</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/289a0bd6679306c587cb3bcf2f90a1ed6bfb1897.png" style="width:40px"/></td>
      <td>780p / target (with Kassatsu).</td>
      <td>Use with 3+ targets.</td>
    </tr>
  </tbody>
</table><br>

## Multi-Target Overview

<table>
  <thead>
    <tr>
      <th>Ability</th>
      <th>Icon</th>
      <th>Potency</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
        <tr>
      <td>Huton</td>
      <td><img src="https://lds-img.finalfantasyxiv.com/d/52e16f75932d2dc542606dccf6b9a8ffdef35b5d.png" style="width:40px"/></td>
      <td>240p / target</td>
      <td>Use over Suiton with 3+ targets.</td>
    </tr>
    <tr>
      <td>Katon</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/c13292e99775bf7b834e9bf44eae59cdf977dc8c.png" style="width:40px" alt="katon"/></td>
      <td>350p / target</td>
      <td>Use over Raiton with 2+ targets if Doton is active. Else, 3+ targets. </td>
    </tr>
    <tr>
      <td>Doton</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/c4807f81a654f2b25cca49c1f61e9b3bc7df62d6.png" style="width:40px" alt="doton"/></td>
      <td>80p / tick per target, for 7 ticks. 560p / target full duration.</td>
      <td>Targets afflicted with Doton for the full duration will endure 560p (or 80p per tick). Use on 2+ targets if targets remain in it for the full duration. An additional 50p is added per target upon use of Hakke Mujinsatsu, Katon, Goka Mekkyaku and Phantom Kamaitachi.</td>
    </tr>
        <tr>
      <td>Goka Mekkyaku</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/289a0bd6679306c587cb3bcf2f90a1ed6bfb1897.png" style="width:40px"/></td>
      <td>780p / target (with Kassatsu)</td>
      <td>Use over Hyosho with 3+ targets.</td>
    </tr>
            <tr>
      <td>Death Blossom & Hakke</td>
            <td><img src="https://lds-img.finalfantasyxiv.com/d/d40b78dd5c99076b25086882f27de295f8a609af.png" style="width:40px"/><br>
            <img src="https://lds-img.finalfantasyxiv.com/d/86e59c1bd3dedee2a6b68d3321da04c68a3acb52.png" style="width:40px"/></td>
      <td>100p / target & 130p / target respectively</td>
      <td>Use if 4+ targets. If Doton active, use if 3+ targets.</td>
    </tr>
  </tbody>
</table><br>

# Standard Burst Windows


Since Ninja's damage is primarily focused on our burst windows, and less on our filler, it is important to be confident with the execution of our Kunai's Bane and Dokumori burst windows.

Our burst can be split into two types: <b class="pb">Odd Windows</b> (1m,3m,5m...) and <b class="pb">Even Windows</b> (0m,2m,4m...). Our even windows will have our 2-minute cooldowns while our odd windows will not.

## Odd Window

This is a window that happens every <b class="pb">odd minute</b> or is better identified by its absence of 2-minute cooldowns. This window is easier to execute than the Even Window, for there are a lot less abilities we will cram within the window.

We ought to try to fit in:

x1 <b>Hyosho</b>, x2 <b>Raiton</b>, x2 <b>Raiju</b>, x1 <b>Dream Within A Dream</b>  and as many <b>Bhavacakras</b> as we have available. An extra 2 GCDs will also make it into this window.

Additionally, we should prioritize <b>Aeolian Edge</b> over <b>Armor Crush</b> by ensuring we have enough Kazematoi gauge going into Kunai's Bane.

If Bunshin was used 45s within an odd Kunai's Bane, and <b>Phantom Kamaitachi</b> was NOT used to disengage from the boss, we should also have x1 Phantom Kamaitachi within an odd window.


### Examples

<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/oddEx1.png" style="max-width:800px" />
</div><br>

- Example of a fairly standard odd window, where we have Phantom Kamaitachi available. 
- Bunshin isn't active in this window.


<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/oddEx2.png" style="max-width:800px" />
</div><br>

- In this example, Bunshin is active and we opted to push Phantom Kamaitachi after Kunai's Bane to allow Aeolian + Bunshin to fit in instead (687p > 552p).


<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/oddEx3.png" style="max-width:800px" />
</div><br>

- Very similar to the above, but our first non-Raiju GCD choices are between Aeolian or Phantom Kamaitachi. In this case, we put Phantom Kamaitachi first to get Aeolian into the window.

<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/oddEx4.png" style="max-width:800px" />
</div><br>

- Similar to the first example, but we used a GCD as the first thing in Kunai's Bane. This method could help alleviate Dream Within A Dream drift.


## Even Window

This is a window that occurs every even minute or is a window that has all our 2-minute cooldowns available. The Even window is much like our Odd Trick, but is stronger for we will be also bursting within <b class="pb">Dokumori</b> and have all our other 2-minute cooldowns.

- <b class="pb">Kunai's Bane</b> should have: x1 <b>Hyosho</b>, x2 <b>Raiton</b>, x2 <b>Raiju</b>, x1 <b>Ten-Chi-Jin</b>, x1 <b>Tenri Jindo</b>, x1 <b>Zesho Meppo</b>, and as many <b>Bhavacakras</b> as we have available.

It's better to swap out x1 Raiju for Aeolian Edge or Phantom Kamaitachi if the additional ninki gain gains a Bhavacakra in our burst. <b>Example</b>: our opener.

<b>Phantom Kamaitachi</b> often won't be in this window. As it is <b class="pb">pet potency</b> and is less than our Raijus. Additionally, it's less potency than Aeolian & Armor Crush when Bunshin is active, as Bunshin does <b>NOT</b> apply to Phantom Kamaitachi.

- <b class="pb">Dokumori</b> should have: x1 <b>Kunai's Bane</b>, everything listed in Kunai's Bane above, and:
  - If Doku woven early: +2 GCD
  - If Doku woven mid or late: +3 GCDs

That means you should <b>always</b> fit in x3 Raijus into Dokumori. And 1-2 addional GCDs based on how Dokumori was weaved.

There is an <b class="pb">additional optimization</b> regarding 2-minute windows where Kunai's Bane is late woven to catch +1 GCD. It's a bit tight and therefore can be found here: [Further Optimization](https://maplespyder.github.io/NIN-Guide/2024/07/04/nin-advanced-optimization.html)

### Examples

<div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/evenEx1.png" style="max-width:800px" />
</div>
<br>
- In the above example, Dokumori is an early weave and therefore catches 4 GCDs.

<br><div style="text-align: center;">
<img src="https://maplespyder.github.io/NIN-Guide/assets/images/evenEx2.png" style="max-width:800px" />
</div>

- Similar to the first example but Dokumori is late weave and therefore catches 5 GCDs.

# Miscellaneous

## Boss Disengagement

Ninja is considered the most flexible melee in terms of disconnecting from the boss. As every Ninjutsu is ranged and Phantom Kamaitachi isn't necessary for our burst window. Below is a simple priority:

- If Kunai's Bane is less than 22s on the timer, starting preparing Suiton (takes 2.5s to cast Suiton).
- If the disengage is within 45s after Bunshin, use Phantom Kamaitachi.
- Use Raiton, even if that one less Raiton in Kunai's Bane.
- Throwing Dagger.

If the boss disengage is <b>during</b> burst, it's somewhat annoying due to our melee weaves. But with clever planning, you can keep 100% uptime on a boss.

Note that our auto attacks are melee, so try to stay on the boss whenever possible.

## Downtime

Downtime == Boss untargetable.

Unlike certain melee, NIN handles downtime easily. Not just rotationally, but for our damage as well. The more a NIN can burst in uptime segments, the better. For us, the only thing to keep in mind is:

- If downtime is long enough that our mudras may overcap, spend all available mudras before downtime begins.
- Prepare a ninjutsu during downtime and right before the boss is targetable. That way we aren't wasting time preparing a ninjutsu when the boss is targetable. This can yield an additional GCD by the end of the fight.



</div>
