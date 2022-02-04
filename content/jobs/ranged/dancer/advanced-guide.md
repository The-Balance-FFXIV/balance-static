---
title: Dancer Advanced Guide
card_header_image: /img/jobs/dnc/advanced.png
authors:
  - Balance-DNC-Staff
patch: "6.08"
lastmod: 2022-02-04T00:03:08.245Z
changelog:
  - date: 2021-11-15T21:14:20.824Z
    message: Added page
  - date: 2022-02-04T00:03:10.192Z
    message: Updated with Io's guide.
---
<!-- Output copied to clipboard! -->

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 6

Conversion time: 2.302 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Thu Feb 03 2022 16:00:20 GMT-0800 (PST)
* Source doc: Copy of DNC - Raiding Primer
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 6.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>


**DNC - Raiding Primer**

**An Overview of Fundamentals**

by Io Whitespirit (Faerie)



**FOREWORD**

One of the biggest requests I have had is a more concise document on what people “need to know” before jumping into more difficult content. This is not meant to be a replacement for a general guide to Dancer; please see Ringabel’s extensive write-up instead, which will be linked at the end of the document in the appendix. 

This guide will be broken down into three sections: Basics, Intermediate, and Advanced. I am hopeful that even some of the more experienced players may learn something new from this document.

Let’s get to it!

- io




# **BASICS**

This section will focus on elements that **should be understood** prior to jumping into more difficult content. 


### Weaving

There are already plenty of guides on _weaving_, and for good reason–a poor understanding of how and when to weave will likely yield a mediocre performance. A great resource is the commonly linked Balance weaving infographic, seen here: &lt;[click here](https://media.discordapp.net/attachments/598630005999796233/600432765250568262/GCD_v._3.png)>

Make sure you understand which of your abilities are GCDs, and which are oGCDs. A full discussion looking at every ability in our toolkit is beyond the scope of this guide.

For Dancers, as we do not need to worry about cast bars, our GCDs will look something like this (assuming a minimum skill speed set):



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


This means that after each GCD you use, after a forced animation lock of around ~0.7s, you will have the ability to weave two abilities before you can recast your next GCD. These will generally be Fans, but can include a large variety of other oGCD abilities. These will also, with some exceptions, usually have animation locks of ~0.7s. The biggest exception to this rule are potions, which have a lock of ~1.2s.

Of note, initiating and finishing Dances (Standard Step, Standard Finish, Technical Step, Technical Finish, and now Tillana) has a recast timer of 1.5s instead of 2.5s, meaning you will only have the ability to weave in **one** oGCD during any of these abilities without clipping. This is more relevant for the Finishes and Tillana as most abilities are locked mid-dance.

Please make sure you understand this concept well before proceeding, as this is pivotal to the entire foundation of FFXIV’s battle system.




### Opener - Level 90



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


_Click &lt;[here](https://i.imgur.com/AvOuHDs.png)> for a higher resolution version._

Barring kill time shenanigans and some very niche cases, this opener is good for more or less all level 90 fights. Post patch 6.05, Tillana and Starfall Dance can be interchanged.

A Technical first opener exists but is not worth using except in extremely niche cases. Likewise, the use of Devilment before starting Technical Step is not recommended.


### Rotation Basics

The backbone of Dancer gameplay is conceptually fairly straightforward:



1. Technical window (discussed a few subsections below) every **two minutes**
    1. Devilment and Flourish used around the same time
2. Flourish every **one minute**
3. Outside of the above, every 30-32 seconds:
    2. **25 seconds **of GCDs (or 27+ seconds if using a 2.47s set)
    3. **5 seconds **of Standard Step

When the only thing available to do is press single target GCDs, use Reverse Cascade and Fountainfall procs immediately as they come up. This is to avoid the possibility of having both Reverse Cascade and Fountainfall procs available when Flourish becomes ready.


### GCD Procs

GCD procs (Reverse Cascade, Fountainfall, and the AoE counterparts) last 30 seconds and generally should never be overwritten. For example, if you have a combo’d Fountain ready as well as Fountainfall ready, you would use the Fountainfall first to avoid the possibility that using Fountain might overwrite your pre-existing Fountainfall proc.

A combo’d Fountain will also last 30 seconds. Although an effort should be used not to lose it now that the duration has been increased from Shadowbringers, it is sometimes dropped during Technical Step if there are too many other abilities to be used.


### Priority System

The core of Dancer’s gameplay is based on RNG and dependent on GCD procs, Esprit generation, and Fans. As such, when multiple abilities are ready, understanding the priority system is important for optimizing damage.

<span style="text-decoration:underline;">General Single Target  Priority List (in descending order)</span>

1.    Starfall Dance if about to expire

2.    Fountainfall if about to expire

3.    Reverse Cascade if about to expire

4.    Saber Dance if >= 85 Esprit

5.    Fountainfall if Fountain combo ready

6.    Fountain combo if about to expire

7.    Tillana

8.    Saber Dance if >= 50 Esprit and under Technical Finish

9.    Standard Step

10.    Fountainfall

11.    Reverse Cascade

12.    Fountain combo

13.    Cascade

An AoE priority list also exists, but as this is mostly irrelevant for Savage and Ultimate, it will be skipped in this guide.


### Drifting

The definition of “drifting” refers to having a cooldown up and ready to use but, for one reason or another, delaying its use. Generally speaking, unless intentional, this is frowned upon. For key abilities such as Technical Step and Devilment, forgetting to use them on cooldown every two minutes will tend to “drift” these abilities out of other players’ raid buffs and bursts–a big no-no. A section on avoiding drift on Flourish will be in the Intermediate section of this guide.


### Technical Window

A Technical Window refers to the 20.5 seconds after Technical Finish is executed, during which Esprit generation is substantially increased for each other player affected by the Technical buff. This is your big damage window and where you should be dumping your resources.

However, please note: the range of Technical Finish is not global, and is limited to 15 yalms. This means that depending on the ongoing mechanics, your positioning needs to be precise enough in order to hit all 7 other players.

This also means that during fights in which Technical comes up but people are spread out, it may need to be intentionally drifted back a determined number of GCDs to a point where people are clustered enough to be affected by the raid buff.


### Pooling

“Pooling” refers to saving resources for Technical windows. This most commonly refers to saving 3-4 feathers so that they can be rapidly weaved in between GCDs while under the influence of Technical Step.

This is also where understanding weaving is important. Of the following two images, only one is executed correctly:



1. 

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")

2. 

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


Both are from real logs. **<span style="text-decoration:underline;">THE TOP IMAGE IS NOT WHAT WE MEAN BY POOLING AND IS NOT WHAT YOU SHOULD DO DUE TO INCORRECT WEAVING</span>**. The bottom image is more correct, with pooled feathers slowly being dumped between GCDs.


### Potions/Tinctures

Couple of things to note about potions–as an item, they are unqueueable (the button to use a potion will **not** be processed if you press the button even slightly early, unlike your usual combat actions), have an animation lock of approximately 1.2s, and cannot be macroed. At high quality, they have a cooldown of 4 minutes 30 seconds. As such, its use will usually occupy the entirety of a double weave window. General recommendation for second potion usage outside of the opener is to delay its use until the next burst, and to use it the GCD before starting the next Technical Step (GCD → potion → start Technical Step) as this will cover the entirety of the Technical window.

Dancers are a _dexterity _class, and thus they will look to use the highest grade dexterity potion/tincture available. The proper use of potions will net you just over 1% bonus damage in a fight. This may not seem like a lot, but it is not uncommon for parties to wipe on sub-1% enrages that would have been clearable if players had been using potions.

Recommendations for fight-specific potion timings will be in the respective encounter guide.


### Food/Materia

Using food while raiding and having melded materia in all guaranteed meld slots is more or less an expectation in fights of Savage difficulty and above. See our BiS lists for recommended food; most of the time, this will be the highest item level food that matches Dancer’s substat priorities.


# **INTERMEDIATE**

This section will focus on elements that you should likely know about but tend to have smaller impacts on your gameplay.


### Managing Flourish Drift

Drifting Flourish is no longer as large of a detriment as it was in Shadowbringers, as the number of GCD procs has been halved, and the duration allotted to using them has increased from 20 seconds to 30 seconds. However, an effort should still be made for off-minute Flourishes to be used without drifting.

Cut from my infographic in Shadowbringers, please see the below image as reference:



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


The concept is simple: If you are out of procs to use the GCD before Flourish is to be used (and as a result, want to avoid making more procs), use Saber Dance as a potential buffer to completely avoid proc generation.


### Downtime

Downtime is a Dancer’s best friend. Where possible, try to prep Dances during downtime, as it is a gain of around 2 GCDs. More specific details on downtime preparation for a given fight will be in the fight’s encounter guide.




### Double-Weaving Fans


#### FD1-FD1

Double-weaving two FD1s is doable at lower ping. This can be useful given the lack of weave slots in your Technical window. However, as FD1 has a cooldown of 1 second, the double weave is quite tight. Also, you need to be fast enough to recognize the lack of FD3 proc before pressing the second FD1.

As a result, this double weave may not be worth using if you cannot do it routinely without clipping.


#### FD1-FD3

Double-weaving FD1 into FD3 is doable at low to intermediate ping. Your ping needs to be low enough for your game to receive information that the FD3 proc has occurred.

If you do not plan on routinely using double FD1 weaves and find yourself using this double-weave, consider button-mashing FD3 after using FD1. There is no harm if you do not gain the FD3 proc.


#### FD3-FD1

This double weave is recommended for players with higher ping, but is obviously usable by lower ping players as well. As you do not need to wait for information re: whether or not FD1 has created an FD3 proc, it will reduce the potential for clipping at higher latencies.


### Partner Priority and Partner Swapping

A partner priority list will not be discussed in this guide as balance patches and updates will often change the ranking order. Please visit the Balance for the most up-to-date priority list, or use Partnercalc when released. Top choices at time of writing are SAM, RPR, and MNK.

For higher end optimization, partner swapping refers to switching your dance partner mid-fight. The most common reason for this is a death of the currently partnered player, but for more optimized groups this may also be to catch a DPS player’s burst.

Partner swapping is generally executed over one to two GCDs, and comes at a cost if your partner has not died; once Closed Position has been dropped, your partner will immediately lose their Esprit generation and 5% damage buffs. Below is an image quantifying the total duration a player’s Standard Step buff is dropped if a partner swap is executed over a single GCD:



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


Much like FD1 double-weaves, a partner swap can be executed over a single GCD without clipping; however, as dropping Closed position has an intrinsic 1 second cooldown, it will once again be somewhat tight to execute for players with high ping. Swapping over two GCDs is a very small loss over one GCD and is advisable if it prevents you from clipping.

There are two ways of partner swapping:



1. Drop Closed Position and select your partner immediately after using a GCD
2. Drop Closed Position and partner a player by using a macro

The benefits of using a macro include not having to deselect the boss, which may or may not delay auto-attacks. However, the downside of using a macro is that it can be easy to clip your GCD, as macros cannot be queued. **The most important thing to avoid in a proper partner swap is clipping**.

An example of a Partner swap macro:

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/ac "Closed Position" &lt;6>

/micon "Closed Position"

This will target the sixth player on your party list. The repeated entries are deliberate and are used as an attempt to imperfectly simulate queuing with the macro.

<span style="text-decoration:underline;">Partnercalc</span> (made by Hint, one of the mentors and admins of the Balance) can quantify player damage under a given Standard Step window. It is still being actively worked on for Endwalker, but for players looking to routinely partner swap for optimization runs, this tool is likely your best bet for objective data. A link will be included in this document when it’s done.

As for shenanigans with Tillana swaps after a Technical window is done, the potential exists, but not enough data exists to justify it at this point in time.




# **ADVANCED**

This last section is very niche, and is more for experienced players who are interested in small gains and theorycrafting. This guide will not be delving deeply into each topic. If you want to know more, stop by the Balance and feel free to ask in #dnc_questions.

**<span style="text-decoration:underline;">Damage Delay</span>**

The short summary of this is that there is a lag time between when you cast an ability, and when the damage actually registers. When reviewing a log on fflogs, this is seen as the difference between “&lt;Player Name> prepares &lt;x>” and “&lt;Player Name> &lt;x>”.

For Dancer, Standard Finish has a damage delay of approximately 0.65 seconds. However, popping Standard Finish within range of the boss will immediately start your auto-attacks, which have a damage delay of approximately 0.5-0.55 seconds.

**In short, you should actually be using Standard Finish at -0.5s on the countdown timer**.

**<span style="text-decoration:underline;">Ghosting</span>**

Related to damage delay, ghosting refers to using an ability on a target which then becomes invulnerable within ~0.5s. The ability will go off, any resources or procs used will be consumed, but the damage will not go through. Care should be made to avoid burning resources such as Saber Dance if there is a chance that the damage might ghost.

**<span style="text-decoration:underline;">Buff Propagation</span>**

The use of most raid buffs has an associated buff propagation. Players who are closer have the buff applied to them first, and as a result, the buff wears off on them first as well. This has a “ripple” effect depending on how close players were relative to each other. **Technical Finish is unique in that the buff is instantly applied to everyone**, but the **falloff still has a ripple effect**. This means that on use, Technical Step will have a 20.5s duration on the closest target (yourself) with a gain of 0.13s on each subsequent player affected. The player furthest away from you will have a total Technical Step buff duration that is closer to ~21.5s.

**<span style="text-decoration:underline;">Positionals</span>**

This is probably the least favourite discovery made while theorycrafting this expansion. Technical Step’s buff propagation does not just include allies; it also includes enemies. As a result, using Technical Finish while standing on an enemy’s hitbox will apply the damage on them first, and ripple the Technical buff on to yourself second (increasing the buff duration on yourself to 20.63s). This can be important for getting your last GCD under the Technical buff, especially once you include FPS tax (also not discussed in this document). Suffice to say, the combination of some of these factors is why a 2.49s set is recommended for this expansion.


# **FINAL WORDS**

That’s all! As always, please DM me at io#4617 if there are any questions, suggestions, or feedback. Feel free to also stop by the Dancer channels in the Balance.

As always, I’d like to thank the other mentors and helpfuls at the Balance for their support, and for their help with this document and testing.

- io


# **USEFUL RESOURCES**

See below regarding some helpful resources:



1. **The Balance Discord**: [https://discord.com/invite/thebalanceffxiv](https://discord.com/invite/thebalanceffxiv)
    1. Guides, BiS lists, etc. can be found in #dnc_resources and #dnc_encounter.
    2. Dancer specific questions and discussions can be asked in #dnc_questions or #dnc_encounter; just make sure to grab the Dancer role.
2. **Ringabel’s extensive DNC guide**: [https://bit.ly/DNCGuideEW](https://bit.ly/DNCGuideEW)
    3. For a more in depth look on the class, including details that were omitted in this guide for the sake of brevity.
3. **XIV Analysis**: [https://xivanalysis.com/](https://xivanalysis.com/)
    4. A helpful site in which players can upload logs and have their gameplay analyzed in order to make adjustments and improvements.
4. **Partnercalc**: (coming soon)
    5. A site by Hint which analyzes each Standard Step window in a given log and determines which players were best to partner. Damage breakdowns are included.