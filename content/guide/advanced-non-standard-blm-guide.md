---
title: 6.x Advanced Non-Standard BLM Guide
---
Written by Reina Kousaka of Leviathan 

*Last updated: Feb 13  2022*

<h1>Prologue </h1>

*“To make it short, they don't teach or research "potency per second" in universities.” - DiaStarvy*

Hello. I am Reina, a caster player, and I am standing on the shoulders of giants. This document aims to provide a comprehensive guide on advanced non-standard playstyle (also known as the AI rotation). There is the assumption you know all of the basics of BLM, including abbreviations and fundamentals. If not, refer to the [6.X Black Mage guide](https://docs.google.com/document/d/1QqYuVTEqaLvLTd9QHOv9Hsj5iyz8PpdFHHih-89Y4-8) before proceeding here. 

**The standard rotation is more than sufficient to play at a high level of black mage.** If you are looking to generally improve, use the standard rotation and work on the fundamentals such as achieving extremely high uptime, oGCD usage, slidecasting, and positioning. The optimizations listed here are meant for players with a great understanding of the fundamentals of BLM’s playstyle and rotation, and are already familiar with executing the rotation well in fights. Furthermore, non-standard is not required to do well in any high end content. <span style="text-decoration:underline;">**Once again, non-standard is not the solution to low dps, and instead, work on your fundamentals.**</span> If you can maintain a substantially high uptime on BLM and are interested in learning alternative and potentially challenging BLM rotations, then I welcome you to read on. 

This document is written in three sections such that you do not need the knowledge of later sections to utilize the former ones. You do not need to know everything about non-standard to utilize it, and you can choose the level of optimization you want to learn in this document. Undoubtedly, as time goes on, more BLM optimizations will be discovered. This document will aim to include any new discoveries prior to every major patch. Please see the Changelog section for reference. If you have any questions or comments, feel free to contact me on Discord at Reina#0001. Finally, I want to thank the Black Mage theorycrafters on [The Balance Discord](https://discord.com/invite/thebalanceffxiv) for providing the theories, structures of thought and mathematical calculations necessary for creating this document. 

# Basics

<h2>General Idea</h2>

The idea behind the optimizations in non-standard lines is the elimination of weak spells, F3, B3, and B4 which lower the average potency per second (PPS) of the rotation. We do this by utilizing Transpose with F3s in AF1 in place of weak UI3 F3s, resulting in a potency gain. In addition, we also use Transpose to transition from AF to UI, which eliminates the need to cast weak B3s. Due to this, B4 no longer yields a Paradox, so it is often skipped as well. 

These concepts allow the overall PPS of the non-standard gameplay to increase compared to the standard rotation. While accomplishing this, it exhausts much more resources than is needed in the Standard rotation and also often reduces the rotational time. As a result, the fire phase is usually very tight and requires prolonged periods of stillness, which make this rotation much more prone to errors.

**From sims and calculations of non-standard when compared to pure standard (no AF1 F3P), we have estimated a gain of 0.7% to a bit higher than 2%.** The 0.7% floor comes from AF1 F3P Standard’s gain, and the comparison is lowered by ~0.7% if we are comparing to that instead. There is no single exact number to the how much gain non-standard can bring, and is instead dependent on the fight as well as the player’s incorporation of effective lines. Furthermore, the benefits of non-standard are a matter of great diminishing returns. It is relatively easy to obtain, as an example, an 1% gain through non-standard optimizations. Obtaining the next 0.5% requires a drastic step up in effort and difficulty, with a further 0.5% being exponentially more difficult. 

The bracketed letter and number is an index to the [BLM lines comparison sheet](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E), where you can find the math behind everything as well as more lines that were not chosen to be discussed here. For example, \[N0] refers to the Normal rotation tab, ID 0.

<h2>Base Rotation</h2>

<h3>Standard rotation \[N0]</h3>

![](https://lh5.googleusercontent.com/r1rI7v3hIomw2fIqTGsLLnuL1dqnoRzK_kFRUJENIn1GstPv1eMsPmzWW4Ozy21fVtnQ0Q2QuYssLrBxt9AvIZwIaEZ-kzDhlU3JsruvefV4gUMnIYS9wdG8lKUyWCzFcE0YUWbr)A reminder of what is referred to as the Standard rotation. B3 + B4 with 2 MP ticks into a long fire

<h3>AF1 F3P Standard \[N6]</h3>

![](https://lh5.googleusercontent.com/8xBUE5bMuMBVjIbqMHoiCRbf74AUtonL1AJno2srFii0TFzL_nULEstX-eHv_xweehVlfJs4ZBGvzU3g_8ZqSv_JzBx5xJXY3s_ejH4ZAb_u33N7UbhFKqEGCQo7-XhS0XGnGom1)

**Instead of spending the F3P during the line it is proc’d, it can be saved and used in conjunction with Transpose to buff its potency in AF1. The white space represents an instant filler gcd. By itself with the F3P, this line is a 3% gain in a vacuum. However, we must also consider the previous line that yielded the F3P, as well as its potential to repeat itself. Consistently using F3P this way results in about a 0.9% damage increase (more details in the next section) of fire and ice spells over multiple lines. This is highly recommended to players first starting to optimize, as it is a relatively easy optimization for a decent dps increase. Note that due to receiving the stacks of Astral Fire at the beginning of the GCD instead of the end, at lower SpS, there is no longer the option to fit 4 F4s between the F3 and AF Paradox, and any filler spells become exceedly tight if possible at all. This increases the execution difficulty of the standard line.**

<h2>Higher level BLM Concepts</h2>

<h3>MP and Lucid ticks</h3>

Our MP regens for 600 per tick out of combat and 200 per tick during combat, with each tick happening every 3 seconds. While in Umbral Ice, we gain an additional MP of 3000, 4500, and 6000 MP from the UI1, UI2, and UI3 bonuses respectively. In total, we can expect 3200, 4700, or 6200 MP per tick while in UI. On the other hand, Lucid ticks provide 550 MP per tick. In the overworld, each Lucid tick happens exactly halfway between two MP ticks. However, while in an instance, this timer will constantly drift, and it will become random when a Lucid tick occurs. 

Both MP and Lucid ticks can be tracked via triggers. You can download a [MP tick trigger here](https://github.com/marconsou/mp-tick-bar), with other triggers available elsewhere. Having a tick trigger makes tracking MP ticks considerably easier and is recommended for anyone serious about high end BLM optimizations. In addition, some optimizations listed in later sections are only possible with MP tick triggers.

Early MP ticks

Understanding how MP ticks interact with our rotation will become increasingly important as we dive deeper into non-standard lines. In many cases, if we get the right MP tick, often in the form of an early tick, we can conserve one filler resource. For example, in the AF1 F3P Standard line above, if an MP tick happens right after we enter UI, we know that the next tick will happen sometime during or after the B4 cast, granting us full MP. With this, we can safely skip one filler. 

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image3.png "image_tooltip")

<h3>The BLM rotation and lines</h3>

A line is a sequence of casts with specific characteristics that ends after a fire phase. A rotation refers to a line or lines that can feasibly loop and repeat itself. This is why only the standard line is typically referred to as a rotation, while other lines are more strictly referred to as lines. Combinations of non-standard lines are collectively referred to as non-standard playstyle. 

When calculating and comparing relative potencies of lines, only the fire and ice spells are considered and the potencies of Xeno and Thunder spells are excluded. Thus, any damage gains and losses listed in this document only refer to comparison with other fire and ice spells, and do not reflect the gain or loss of the whole rotation. Overall, fire and ice spells account for approximately 75% of our total damage, which means the gains and losses of non-standard lines in the overall rotation are only about 75% of what is listed here. In the AF1 F3P Standard line shown above, the ~0.9% increase would translate to about a 0.7% overall increase in damage. 

<h3>Fight and BLM specific strategies </h3>

All of the optimizations listed here require you to stand still as much as possible, and sometimes have control over mechanics’ resolution. Thus, it would be easier to execute these optimizations in a static environment with cooperative teammates. Conversely, The standard rotation gains more prevalence in pugs. Strategizing around fight mechanics and timelines to reduce movement and instant cast usage is a key part of BLM optimizations’ effectiveness and must not be ignored. 

To get started, you can check the BLM raid guide (Coming soon. For now, check the Balance Discord’s BLM encounter channels). There are many more optimizations with strategies that can be done than what is written here. As a generic tip, for every instant spent on a mechanic, think about how to eliminate its need. And for every movement required, think about how it can either be eliminated or done effectively. Be proactive when creating your own alterations of strats to conserve resources. 

<h3>Caster tax </h3>

Caster tax is on average an additional 0.1+2/fps seconds to the listed cast time of a hard casted spell due to animation lock at the end of the spell. In this document, we will take 0.1s as the caster tax. While not unique to this job, BLM is the job affected the most by caster tax. This means a hard casted Fire 4 is in fact 2.9 seconds and not the 2.8 seconds shown. Caster tax is mitigated with instant cast spells which have their animation lock while the GCD is inactive. 

<h3>Strong and weak spells </h3>

Not all BLM spells are equal; there is a large discrepancy in damage between the strong spells and weak ones. When considering a spell’s potency, not only should we look at the spell’s potency, we must also consider its cast time (including the caster tax) and potency per second. 

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image4.png "image_tooltip")

Thunder is not listed above as it is a DoT. When a T3P’s DoT is able to run for its full duration, it becomes a high potency spell in our arsenal. 

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image5.png "image_tooltip")

<h3>Completing fire phases </h3>

The ice phase provides MP and/or Umbral Hearts, crucial resources that enable the strong fire spells at the cost of casting much weaker spells. To fully utilize this cost, we want to complete as much of the fire phase as possible before the boss dies or phases and finish the Despair cast. This could mean either cutting the fire phase short and only cast 5 F4s before the Despair, or planning ahead and choosing a shorter line.

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image6.png "image_tooltip")

Finishing the Despair cast by cutting a F4.

There are not many effective short B3 lines. You may opt to do a 4xF4 Transpose instead of a full standard line to finish the fire phase. More details on this line later. 

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image7.png "image_tooltip")

In addition to the Despair cast, we also want to utilize an instant cast as our last hitting spell. This instant could be a Xeno, F3P, or even a UI Paradox. 

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image8.png "image_tooltip")

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image9.png "image_tooltip")

If no instant is available, clipping Transpose into Paradox can be optimal. 

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image10.png "image_tooltip")

If the boss phases with at least ~16 seconds of actionable downtime, then the UI Paradox after Despair should be used. We can then regain the Paradox by using Umbral Souls to obtain 3 stacks of UI and UHs, swap to AF via Transpose, swap back to UI and regain the UI stacks with Umbral Soul. 

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image11.png "image_tooltip")

Damage application and ghosting 

Almost every damage ability in this game has a delay between when the ability is cast and when the damage is applied. This delay varies due to animation and other factors. When damage fails to land caused by the target being dead or invulnerable, this is known as “ghosting”. It is possible to see the damage number on screen while still having it ghost. Be sure to check logs to know for certain whether your damage has landed or not. When planning your last hit on the boss, it is important to keep in mind the amount of time between your spell’s cast and when damage lands. Below is a chart of approximately how long it takes for each spell’s damage to apply. 

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image12.png "image_tooltip")

<h3>Advanced Manafont usage</h3>

From the potency comparison chart prior, we can see that the PPS of F4 and Despair are very similar. In situations where Manafont delays cannot be afforded, it can be used to grant two additional F4s to a fire phase instead of being used after Despair for a F4 and a Despair. While this is less ideal than obtaining a Despair from Manafont, it is still much more preferred than losing a use. Beware of MP values and AF timer restrictions when executing this principle. 

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image13.png "image_tooltip")

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image14.png "image_tooltip")

Example usages of Manafont for two F4s in Standard. 

<h2>Introduction to Transpose Lines </h2>

From the potency comparison chart above, we can see that B3 and F3 are very weak spells when casted from UI3 or AF3 of the opposite element. Thus, instead of using a weak spell to swap elements, we look to use another tool: Transpose. When using Transpose to swap to Umbral Ice, typically we do not cast B3 as the purpose is to skip it. This means we lack the requirement to obtain the AF Paradox since we need 3 Umbral Ice stacks, which in turn also reduces B4’s effectiveness. This results in one less Paradox in the line as well as shorter fire and ice phases. In addition, due to a more limited AF phase to finish the maximum number of fire casts, Transpose lines have a higher execution requirement. 

In most situations, Transpose to UI should be weaved in the first weave slot to allow the maximum amount of time for MP to regenerate. It should also be weaved after an instant, as clipping the Transpose will almost certainly invalidate any gain from a Transpose line and instead become a loss.

<h3>4xF4 Transpose \\[N33]</h3>

To cast 4xF4 and Despair, a minimum of 7200 MP is needed. This can be obtained from 1 UI1 and 1 UI2 MP tick. The slow casting F3 gives ample time to obtain the 2 ticks needed. 

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image15.png "image_tooltip")

While a weak B3 and B4 are skipped, the slow casting UI2 F3 is still abysmal. Compared to standard, this line is a 0.3% gain. However, it should be compared to AF1 F3P Standard instead, as the latter already has a gain of 0.9% with additional flexibility. In general, it is recommended to do AF1 F3P Standard over 4xF4 Single Transpose. 

<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image16.png "image_tooltip")

The instant cast can be an instant Despair. Swift and Triple can be used to facilitate casts during the fire phase. These principles apply to all Transpose lines.

5xF4 Transpose \[N36]

<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image17.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image17.png "image_tooltip")

Same principle as 4xF4 Transpose, but with higher SpS for an additional F4 in the fire phase. 2 UI2 ticks or 3 UI1 ticks are required. This line is a 1.9% PPS increase compared to standard. Beware of how MP ticks interact with increased SpS under LL. 

<h3>3xF4 Transpose F3P \\[N101]</h3>

To alleviate the weak slow casting F3, one method is to use a F3P generated from the previous fire phase in its place, which eliminates the F3’s long cast time and improves the line’s effectiveness. This has been made viable from F3P’s change to 30 seconds in Endwalker. However, as we are transitioning to AF with an instant, we can only fit in 3 F4s without high SpS. In addition, we must also consider the standard line with its probability that produced the F3P. With these considerations, this line in conjunction with standard yields a 0.55% gain, which is still less than AF1 F3P Standard. 

<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image18.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image18.png "image_tooltip")

The middle filler can be used to hardcast refresh Thunder, as the first and last fillers need to be instants. This principle of hardcast Thunder being used as a filler can be applied to all fillers with the correct MP tick that does not require weaving. 

<p id="gdcalert19" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image19.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert20">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image19.png "image_tooltip")

In practice, we want to take advantage of Double Transpose for an even stronger line, and would only use this line should an abysmally timed MP tick occur. Double Transpose lines are discussed shortly below. 

<h3>Instant B3 with Transpose \\[I3]</h3>

Should a situation call for B3 to be instant casted, Transpose can be used to increase its potency. 1 MP tick is required before B3 is cast. Instant casting B3 this way is equal to instant casting a F4 in terms of overall gain to the line’s PPS. B3 has an MP cost in UI1 and UI2, so beware of MP generation when executing this transition. Transpose should be weaved first to increase the chance of obtaining a MP tick.

<p id="gdcalert20" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image20.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert21">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image20.png "image_tooltip")

<h2>Double Transpose</h2>

Although using an instant F3 increases the effectiveness of Transpose lines, a F3 under UI2 is still very undesirable. To circumvent this, we can use a second Transpose during UI to change back to AF and increase the fire spell’s potency. The first Transpose should be weaved asap after the first instant, and the second Transpose will be off cooldown around mid to late weave of the third gcd. 

<p id="gdcalert21" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image21.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert22">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image21.png "image_tooltip")

The advent of Paradox in Endwalker has vastly increased the viability of Double Transpose lines. Not only is Paradox an extra filler during Transpose lines, its purpose as a filler in standard also means other instants can be stored and utilized to enable strong lines. Scathes in this image represent instant GCDs. 

When executing Double Transpose off its cooldown, a mere 5 seconds window is not enough to guarantee two MP ticks, and there is a 33% chance of failing to obtain two MP ticks. To guarantee that necessary ticks are obtained, an extra filler may be needed. Alternatively, MP tick triggers can play a crucial role in ensuring the correct ticks happen with minimum instant resources. 

<h3>3xF4 Double Transpose F3P \\[N111]</h3>

<p id="gdcalert22" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image22.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert23">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image22.png "image_tooltip")

An incredibly strong line that has eliminated almost all weaknesses in the rotation. This line, along with the next line, are the reasons why F3Ps are extremely powerful as they enable these lines. This line is the ideal go-to line for spending F3P. Furthermore, a fundamental goal of non-standard playstyle has been amended with the goal of enabling strong F3P lines. 

4xF4 Double Transpose F3P \[N112]

<p id="gdcalert23" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image23.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert24">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image23.png "image_tooltip")

Additional F4 granted by higher SpS.  If Triple is not used, finishing 4xF4 and Despair after F3P requires at least 2.24 gcd, realistically faster for leniency. Not only is the PPS of this line higher from the extra F4, its extra cast also means more time is spent in this strong line. 

5xF4 Double Transpose F3P \[N113]

<p id="gdcalert24" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image24.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert25">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image24.png "image_tooltip")

Another F4 can be obtained when LL and Triple are combined. LL must be used before or during the F3 weave. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency. 

Standard + 3xF4 Double Transpose F3P \[N76]

<p id="gdcalert25" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image25.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert26">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image25.png "image_tooltip")

Combining Standard with 3xF4 Double Transpose F3P forms the new backbone of our rotational foundation. Sharpcast can be used to ensure the F3P and is a gain over Sharping Thunder when doing so. With only the natural F3P proc rate considered and without Sharpcast, this line is a 1.5% gain over pure Standard. 

<h2>Advanced AoE Lines </h2>

These AoE rotations follow the same principles as single target Transpose lines. High Blizzard 2 and High Fire 2 when swapping elements, as well as Freeze, are all weak spells and skipping them can result in a gain. Importantly, as these AoE lines are shorter, they overcome one key weakness of the standard AoE rotation, which is its length and lack of flexibility when aiming to finish the rotation. If an early tick occurs, a filler can be skipped from each of the following lines. Same as the standard AoE rotation, these lines are only better than the single target rotation at 3 targets or above. 

<h3>Single Flare Standard \\[A2]</h3>

<p id="gdcalert26" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image26.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert27">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image26.png "image_tooltip")

An extended standard aoe rotation that utilizes HF2’s higher PPS than Flare at above 6 targets. This becomes higher than normal double Flares at 4 targets and above, around 0.5% greater, and becomes ~3% greater at a much higher enemy count. If Triplecast is available to instant cast Flares, then the line with both Flares should generally be used. 

<h3>Double Transpose with Freeze \\[A5]</h3>

<p id="gdcalert27" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image27.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert28">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image27.png "image_tooltip")

Skips both weak HB2 and HF2. This line is a 6.6% to 8% gain over Standard, depending on the number of mobs (all % gains or losses in this section are calculated between 3 and 12 mobs), with diminishing effectiveness as mob count increases. The high number of fillers required makes this line less useful than the following lines.

2xHF2 Transpose with Freeze \[A7]

<p id="gdcalert28" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image28.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert29">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image28.png "image_tooltip")

Same line as A5 but only one Transpose is used. The other Transpose is replaced by an UI1 HF2. This line is about 4.5% to 5% better than Standard. 

2xHF2 Transpose \[A10]

<p id="gdcalert29" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image29.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert30">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image29.png "image_tooltip")
A very short Transpose line that also skips the Freeze. 2 UI1 ticks are required. This line is about 3.6% better than Standard. 

3xHF2 Transpose \[A11]

<p id="gdcalert30" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image30.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert31">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image30.png "image_tooltip")

Same concept as 2xHF2 Transpose, but with more MP allowing for an extra HF2. The extra MP can be obtained from a Lucid tick, or from an early or extra UI1 tick. This line is 6.7% to 8.2% better than Standard, with higher effectiveness on more targets. With only 2 filler resources needed, this line is very cost effective and is the go-to Transpose AoE line in most situations if Lucid is available.

4xHF2 Transpose \[A12]

<p id="gdcalert31" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image31.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert32">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image31.png "image_tooltip")

With an additional UI1 tick, another HF2 is enabled. Requires 3 UI1 ticks + 1 Lucid tick, or 4 UI1 ticks. This is one of the strongest AoE lines, with a gain of 8.5% to 11.2%, with increasing effectiveness against a higher mob count. However, the requirement of 3 fillers and Lucid is not always available, thus making its usage situational. 

2xHF2 Double Transpose \[A16]

<p id="gdcalert32" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image32.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert33">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image32.png "image_tooltip")

The extreme case of a Transpose AoE line where Freeze and both weak HF2 and HB2 are all skipped. While the short line boasts an impressive 13.5% gain, the excessive amount of resources makes it costly.

AF1 HF2 Double Flare reopener \[A18]

<p id="gdcalert33" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image33.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert34">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image33.png "image_tooltip")

Extending on the idea of 2xHF2 Double Transpose, the amount of instant resources needed can be done during downtime, such as before arriving at the next mob pack in dungeons. Instead of starting in UI3 with a weak HF2, we can instead start in AF1 with a stronger fire spell. This gives us about a 3.5% gain. This line is applicable for 3-5 targets. 

AF1 HF2 Single Flare reopener \[A19]

<p id="gdcalert34" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image34.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert35">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image34.png "image_tooltip")

Same concept as AF1 HF2 Double Flare, but with more targets in mind. At a higher number of targets, HF2 becomes more effective with its lack of damage falloff. This line becomes better than A18 at 6 targets or more.

<h2 id="intermediate">Intermediate</h2>

<h2>F3P Concepts</h2>

F3P producer and F3P consumer lines

Lines can be categorized into whether they are able to produce a F3P, or consume a F3P. Examples of F3P producers include Standard and Double Paradox, and F3P consumers include all of the F3P Transpose lines previously discussed. Some lines neither produce nor consume a F3P, and some lines can produce as well as consume F3Ps. Another way to conceptualize this is to treat lines as F3P plus, F3P neutral, or F3P minus. Some of the strongest lines are F3P minus lines: these lines consume a F3P and must be paired with a F3P plus line in order to be looped. 

This concept has several applications. For one, it is less ideal to end a phase or fight on a F3P producing line, as that F3P that could be used to enable a strong line is now wasted. In addition, this also plays a factor in line lengths. Imagine two F3P producing lines with the same PPS but have different lengths. The shorter line would then be stronger as it can enable F3P lines more frequently. Finally, when evaluating a line’s strength, its capability of producing a F3P must also be considered. 

Evaluating F3P lines

When looking at F3P lines on their own, they seem to have ridiculously high PPS. While this is true, it doesn’t paint the whole picture of their strength. Keep in mind that F3P lines are F3P consumers. In order to obtain a F3P line, we must first go through a F3P plus line, and F3P lines should be evaluated alongside F3P producing lines. Within the F3P line, we can either rely on the natural proc rate, or use a Sharpcast. Whichever option we choose, there are additional costs associated with F3P lines that reduce their effectiveness. It is important to consider the management of these resources when evaluating if the gain in DPS is worth it. 

Variation as a result of F3P lines

Unlike the singular GCD of a F3P, F3P lines are done across a sequence of casts. This means whether a F3P procs or not can vary the rotation by some 10-20 seconds. This is a huge variance when aiming to align with mechanics and phases, and manipulating this variance can be challenging. For this reason, it may be preferred to choose a line without such variation, such as Sharpcasting a Standard line, over relying on the proc chance of a F3P producing line such as Double Paradox. 

<h2>Double Paradox</h2>

<p id="gdcalert35" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image35.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert36">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image35.png "image_tooltip")

Paradox has the unique property of being unaffected by AF and UI multipliers while giving a AF/UI stack. With Transpose, we can use Paradox to obtain AF2 without losing any value. We can then continue the fire phase in various ways. 

<h3>Double Paradox 4xF4 \\[N15]</h3>

<p id="gdcalert36" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image36.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert37">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image36.png "image_tooltip")

From AF2 after Paradox, a F1 is used to obtain AF3. 2 F4s are sacrificed to trade an AF2 F1 in place of a weak UI3 F3. Overall, this line is about 0.6% lower in PPS compared to standard. However, this does not paint the whole picture. Recall that F3Ps are highly potent and enable strong lines. Compared to Standard’s mere 40% chance of proccing a F3P, this line has a 64% chance of proccing a F3P. The F3P can then be used in F3P lines. With the consideration of F3P lines, this results in an overall higher gain from this line than Standard. 

The strength of Double Paradox comes from its prospect of producing a F3P. If the first Paradox yields a F3P and we intend on using the F3P for a F3P line, then the F1’s chance of proccing F3P is ignored. Variations of other F3P usage are discussed below. Due to the large amount of hardcasts in the fire phase without filler space after the F1, this line requires a long period of stillness, which often makes it less effective than Standard.

4xF4 Double Paradox + 3xF4 Double Transpose F3P \[N82]

<p id="gdcalert37" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image37.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert38">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image37.png "image_tooltip")

Compared to the average gain of 1.6% when Standard is combined with 3xF4 Double Transpose F3P, Double Paradox 4xF4 yields a 2.0% gain when combined with this F3P line. 

<h3>Double Paradox AF2 F4 variation \\[N16.1]</h3>

<p id="gdcalert38" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image38.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert39">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image38.png "image_tooltip")

Uses F1’s refresh to enable 1 more F4 under AF2. The AF2 F4 makes it very slightly higher in PPS at a longer line length. As the gain of Double Paradox is from the high proc rate for strong F3Ps, when F3P lines are considered, this line is overall slightly lower with the AF2 F4 compared to Double Paradox without it.

4xF4 Double Paradox F3P F4 variation \[N17]

<p id="gdcalert39" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image39.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert40">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image39.png "image_tooltip")

Another use of the F3P is to grant an extra F4. This line by itself is about 0.2% stronger than standard, but also weaker when F3P lines are factored. 

5xF4 Double Paradox \[N19]

<p id="gdcalert40" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image40.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert41">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image40.png "image_tooltip")

Gaining an additional F4 under LL while still keeping the high F3P proc rate. This line is 0.6% stronger than Standard and is preferred over Standard during LL. 

<h3>AF1 Paradox reopener \\[N129]</h3>

<p id="gdcalert41" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image41.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert42">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image41.png "image_tooltip")

The concept of Double Paradox can be extended to reopeners. Instead of starting in UI3 and casting a weak F3, we can instead start in AF1 and reach AF3 with Paradox and F1. 

<p id="gdcalert42" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image42.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert43">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image42.png "image_tooltip")

If the UI Paradox is available (reminder that during long actionable downtime, obtaining the UI Paradox is guaranteed) , we can use it before Transposing to AF. 

<p id="gdcalert43" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image43.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert44">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image43.png "image_tooltip")

Sharp and Triple can be used to upgrade the AF2 F1 to an AF2 F3P while still keeping 4 F4s. Note that it might be better to save the F3P for a F3P line afterwards. 

<p id="gdcalert44" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image44.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert45">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image44.png "image_tooltip")

With LL and Triple, we can acquire an additional F4 for 5xF4. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency.

<h2>Transpose Instant F3</h2>

In addition to using F3P with Transpose, we can also utilize Swift and Triple to instant cast the F3. Doing so has the opportunity cost of not using them on F4 or Despair, but does not require a F3P producing line to yield an instant F3. In the comparisons below, Swift and Triple usage are compared to a Standard line where they are used on Despair and F4s.

<h3>4xF4 Transpose Instant F3 \\\[I7]</h3>

<p id="gdcalert45" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image45.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert46">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image45.png "image_tooltip")

Requires 1 UI1 tick + 1 UI2 tick, which can be easily obtained. SpS is needed for 4xF4 after instant F3, which can be done by using Triple in place of Swift. This line is about 1.2% gain compared to Standard. 

<p id="gdcalert46" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image46.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert47">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image46.png "image_tooltip")

Another variation of the line where Despair is instant cast. Again, SpS is required for the 4xF4.

5xF4 Transpose Instant F3 \[I10]

<p id="gdcalert47" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image47.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert48">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image47.png "image_tooltip")

Another F4 can be obtained when LL and Triple are combined. LL must be used before the F3 cast, or used during the F3 cast with an additional instant from Swift.. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency. This line yields a gain of about 2.7%. 

3xF4 Transpose Instant F3 \[I5]

<p id="gdcalert48" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image48.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert49">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image48.png "image_tooltip")

Same principle as the 4xF4 line, but with only 3 F4s. This is a loss compared to using the Swift on a Despair in Standard, about 0.9% lower. However, it is a line with a short length and can be considered if a short fire phase is desired. 

<h3>3xF4 Double Transpose Instant F3 \\[I14]</h3>

<p id="gdcalert49" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image49.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert50">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image49.png "image_tooltip")

3 UI1 ticks or 2 UI2 + 1 Lucid ticks are required. This is a powerful line with a hefty resource cost, and is the go-to line when aiming for instant F3 with Transpose. Compared to Swift Despair in Standard, this line yields about a 4.2% gain. This is another tool in our arsenal to utilize instant casts for an increase in damage. 

2xF4 Double Transpose Instant F3 \[I15]

<p id="gdcalert50" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image50.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert51">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image50.png "image_tooltip")

Double Transpose with instant F3 is so strong that a fewer F4 is still a sizable gain. Only 1 UI1 tick and 1 UI2 tick with a Lucid tick are required. This line also has a higher chance of skipping a filler, making it rather cost effective. Compared to Standard, this is higher by ~2.3%. 

<h2>Openers with Transpose </h2>

With our newfound knowledge of Transpose lines, we can append our opener and create a stronger opener. These variations of openers all require standing still during the Transpose line, and will not be applicable to all scenarios. Furthermore, the following only shows a few examples of Transpose variations of openers. There are more possibilities than what’s shown and they may be more optimal depending on the fight.

F3 Opener Single Transpose variation

<p id="gdcalert51" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image51.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert52">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image51.png "image_tooltip")

A straightforward F3 opener followed by 4xF4 with instant F3. 

F3 Opener Single Transpose variation, double weave version

<p id="gdcalert52" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image52.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert53">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image52.png "image_tooltip")

Same as above, but with double weaving under LL to allow certain abilities on cooldown sooner. Only do this if you can double weave under LL without clip.

F3 Opener Double Transpose variation 

<p id="gdcalert53" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image53.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert54">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image53.png "image_tooltip")

One of the most potent openers by utilizing the strong Double Transpose Instant F3 line. As 3xF4 Double Transpose Instant F3 requires 3 UI1 ticks or 2 UI2 ticks + 1 Lucid tick, obtaining the necessary ticks under LL is not guaranteed and this opener has a certain fail rate. This means this opener requires a MP tick trigger as well as being able to pull in order to be consistent, or to be done conditionally with 4xF4 Transpose as backup should a bad MP tick occur. 

F3 Opener Single Transpose 5xF4 variation 

<p id="gdcalert54" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image54.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert55">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image54.png "image_tooltip")

Slightly stronger than 4xF4 Transpose instant F3. Xeno can be used during UI to catch raid buffs. 

B3 Opener Double Transpose F3P variation 

<p id="gdcalert55" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image55.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert56">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image55.png "image_tooltip")

A long opener that utilizes the strong Double Transpose F3P line. It is about equal in strength compared to the 4xF4 Transpose with instant F3 variation, but aligns worse with buffs and requires a much longer period of stillness. This opener can be useful for alignment reasons. In addition, it is worth noting that opening with B3 and B4 only serves the purpose of enabling a Double Transpose F3P line, and any B3 openers without the F3P line are otherwise worse than F3 openers. 

<h2>Additional Double Transpose Lines</h2>

<h3>3xF4 Double Transpose F3 \\[N41]</h3>

<p id="gdcalert56" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image56.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert57">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image56.png "image_tooltip")

Same principle as 3xF4 Double Transpose Instant F3, except without the instant and with a slow casting F3. Even though the F3 is slow, this line still proves to be potent, about a 3.4% gain over Standard. One filler can be used during the fire phase.

2xF4 Double Transpose F3 \[N42]

<p id="gdcalert57" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image57.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert58">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image57.png "image_tooltip")

Same concept as 3xF4 but without Lucid. ~1.5% increase over Standard. 

<h3>Double Transpose Paradox </h3>

<p id="gdcalert58" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image58.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert59">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image58.png "image_tooltip")

Double Transpose AF1 lines specifically refers to a Double Transpose line that arrives at AF1, and then uses Paradox and/or F1 to reach AF3. The concept is similar to Double Paradox lines, but with an additional Transpose to skip both ice spells. In Double Transpose Paradox, the UI Paradox is conserved and used in AF instead. Double Transpose Paradox will also be relevant during micro downtimes, discussed in a later section. 

<h3>4xF4 Double Transpose Paradox with B4 \\[N69]</h3>

<p id="gdcalert59" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image59.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert60">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image59.png "image_tooltip")

B4 can be used in place of a filler while also providing a longer fire phase. 3 UI1 ticks are required. This line is surprisingly potent as it shares the principles of Double Paradox but skips the weak B3 cast. This line yields a 3.4% gain and provides a high F3P proc rate at the same time.

4xF4 Double Transpose Paradox with B4, AF2 F4 variation \[N69.69]

<p id="gdcalert60" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image60.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert61">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image60.png "image_tooltip")

9600 MP is required upon returning to AF. Uses F1’s refresh to enable 1 more F4 under AF2. This line is about 0.2% lower in PPS compared to N69, but 1 GCD longer. 

3xF4 Double Transpose Paradox with B4 \[N70]

<p id="gdcalert61" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image61.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert62">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image61.png "image_tooltip")

Same line as N69 but with one less F4. 3 UI1 ticks or 2 UI1 ticks and 2 Lucid ticks are needed. Compared to the 4xF4 variant, this line has a much higher chance of skipping a filler. The fire phase also offers an extra cast. ~2.0% stronger than Standard. 

5xF4 Double Transpose Paradox with B4 \[N71]

<p id="gdcalert62" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image62.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert63">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image62.png "image_tooltip")

Another stronger variant of the line, enabled by Ley Lines. ~4.4% gain over standard. At least 9600 MP is required upon entering AF. 

<h3>4xF4 Double Transpose F3P with F1 \\[N116]</h3>

<p id="gdcalert63" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image63.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert64">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image63.png "image_tooltip")

Uses F1 to refresh when Triple is unavailable to enable 4 F4s in AF. A fair bit weaker than previous shorter Double Transpose F3P lines, but provides the ability to produce a F3P. 

<h3>6xF4 Double Transpose F3P with B4 \\[N119]</h3>

<p id="gdcalert64" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image64.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert65">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image64.png "image_tooltip")

Another powerful Double Transpose F3P line. 2 UI2 ticks and 1 Lucid tick are required. While this line is also not as potent as 3xF4 Double Transpose F3P, its length and its ability to produce a F3P brings it closer in strength. 

6xF4 Double Transpose F3P with B4, AF Paradox variation \[120]

<p id="gdcalert65" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image65.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert66">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image65.png "image_tooltip")

Requires 9600 MP when reentering AF. An upgrade from N119 by eliminating the F1 with the UI Paradox. This is one of the strongest F3P lines but with a hefty resource cost.

<h2>Notes on Thunder</h2>

The ideal Thunder refresh in non-standard is the same as it is in standard: as the dot falls off. However, compared to standard, non-standard lines are generally much shorter in length and have stricter filler applications. This causes Thunder usage to diverge during non-standard gameplay where we cannot always refresh Thunder when the dot is about to fall off. Every 30 seconds of overwritten dot with T3P is equal to replacing a spell with a 400 potency T3P. If a T3 is used instead of T3P, then this becomes a lot less than 400 potency. This results in a devaluation of lines if dot ticks are cut short, and it is also true for the standard rotation. 

Generally during non-standard, you should aim to avoid cutting the dot short by more than 5-10 seconds with a proc, and avoid cutting the dot short at all with a hardcast. Sharpcast adds some degree of leniency with regards to cutting ticks short. In addition, dropping the dot for more than 1 tick should also be avoided. The exact gains and losses from Thunder use in non-standard is dependent on various factors. As a rule of thumb, the stronger the non-standard line, the more leniency you have with deviating from optimal Thunder usage. Sharpcast on Paradox or F1 is a gain if strong Double Transpose F3P lines are enabled when compared to using it on Thunder. 

<h2>Notes on Spell Speed</h2>

Unless specified, the lines in this document are tested at 1400 SpS, or 2.32 GCD. With a few exceptions which are also specified, all lines are doable at 2.32 GCD with the listed fillers without missing MP ticks. To perform the 4xF4 Despair after F3P with Triplecast, a hard minimum of 2.43 GCD is required, and a 2.37 GCD is required if only 2 stacks of Triple are used on F4s. See the Appendix section for more spell speed thresholds. More SpS should be added for leniency. Some lines might not be applicable at (much) higher spell speeds and additional fillers might be needed at extremely high spell speeds. The higher your spell speed, the less luck you will have with MP ticks. This principle also applies to Ley Lines. While LL can enable additional F4s in the fire phase, it also changes how MP ticks interact with fillers in UI. Thus, beware of MP ticks during UI when LL is active. Double Transpose lines also require an additional filler under LL as the faster GCD will be clipped by Transpose’s cooldown. 

In addition to MP ticks considerations, much of Black Mage’s resources function on a fixed timer that are not affected by spell speed. Additional spell speed will not increase the number of available fillers, Swifts/Triples, and Sharpcasts available. Furthermore, a faster spell speed will often require extra Thunder ticks to be cut short. As a general rule of thumb, the faster the spell speed, the noticeably less available and less effective some lines, especially short Double Transpose lines, will become. 

<h3>Standard rotation under Ley Lines</h3>

At a SpS of 2.3 GCD or faster, obtaining 2 UI3 ticks during ice phase with standard under Ley Lines is no longer guaranteed. At SpS BiS, there is about a 10-15% chance of missing the second MP tick, and an additional filler may be needed. 

<p id="gdcalert66" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image66.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert67">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image66.png "image_tooltip")

<h2>Comparing Fire/Ice Lines</h2>

[For calculations and details behind the math of everything in this document, see this sheet.](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/) When analyzing strengths and weaknesses of lines, there are numerous factors to be considered. 

PPS

The most straightforward factor. PPS has a direct effect on a line’s effectiveness. When comparing PPS, the percent of difference should be the metric over a raw number. When calculating PPS of lines, potencies of Thunder and Xeno are not included. As mentioned before, this creates a difference in the PPS and PPS comparisons of lines, versus the PPS of the overall rotation. 

Resources required 

Another important factor is the amount of resources each line requires. Resources come in the form of instant casts spent, F3Ps used, Sharpcasts available, and Swift/Triples used. There is a correlation between the amount of resources a line requires and its potency. Finding the optimal rotation has thus become a balancing act of using less potent lines that conserve resources, versus stronger lines that expend resources. 

A consistent resource expenditure when analyzing lines is essential. If more resources are spent, then a higher return should be expected. This is pivotal when looking at instant F3 lines, with Swift/Triple and F3P. It would be disingenuous to compare a line that has used Swiftcast to a line that does not use Swift. The effect of Swiftcast would skew the result in its favour.

Swift and Triple also have an unequal effect on each line’s PPS due to varying line lengths. The same reduction in cast time will increase a shorter line’s PPS more than it would on a longer line. As such, the PPS and relative potencies of lines with Swift and Triple should be adjusted to account for this effect. For this reason, a line with Swift might have a higher raw PPS but a lower relative PPS once Swift’s effect has been normalized. 

Likelihood of filler skips from correct MP ticks

Every line has a certain probability of allowing a filler skip from obtaining the right MP ticks. It is possible to calculate precisely how likely it is to skip a filler in each line. Using less resources increases effectiveness and thus a high chance of skipping a filler also increases a line’s effectiveness. 

Line Length

The length of each line is another crucial consideration for two reasons. Firstly, as discussed previously, one goal of utilizing different lines is to align with mechanics and phases. Finishing a full fire phase is always a priority. In addition, each line’s length also dictates their strength. Some lines may be very powerful, but expend a high amount of resources and only last a short amount of time. We are then forced to return to a relatively weaker line, such as Standard, for a larger portion of our rotation. Compare this to a similar line in terms of resources requirement that is slightly weaker, but at a longer length. This would mean we get to stay in this line for a prolonged period of time before needing to return to a weak line.

Time gained equivalent 

Time Gained Equivalent (TGE) is a more advanced metric of evaluating line strength. Each unit of TGE equates to gain in time as if we did the Standard rotation for that amount of time. For example, a TGE of 1.0 would mean the gain of the line is equal to one second of the Standard line. This number is given by the formula *relativePPS*  lineLength - lineLength*, and normalizes the line lengths by treating its gain in PPS as a gain in time. This allows comparison of lines with varying lengths and PPS. The concept of TGE can be extended by multiplying TGE by PPS of the Standard line, which converts TGE into a potency equivalent: Potency Gained Equivalent or PGE. This is useful when conceptualizing a line’s overall return as a potency and has application in Thunder related comparisons. TGE and PGE should be treated as theoretical ideas for evaluating lines rather than a deterministic calculation. 

Flexibility

The extent of optimization is fundamentally limited by fight mechanics. In order to line up with mechs, some degree of flexibility may be required in the lines we choose. An easy way to determine a line’s flexibility is its number of available filler spots during its AF phase. For Standard, there are two available filler spots, one on each side of the Paradox refresh. The majority of non-standard lines offer no flexibility, which contributes to their difficulty in execution. 

<h2>Choosing Fire/Ice Lines</h2>

When choosing which line to use, there are a number of factors to consider. 

Mechanics

The most important and most straightforward consideration. If motion is required, then lines that require stillness are unavailable. This can also come in the form of needing to use an instant for weaving. This factor can sometimes favour non-standard lines, as many Double Transpose lines utilize multiple instant cast spells during UI, which are valuable as movement tools. 

Example: during a phase with a high movement requirement, instead of using F3P for a Double Transpose line, it is instead used to prolong the fire phase to allow extra fillers for handling mechanics. 

PPS

Another straightforward consideration. We want to aim to choose lines that provide the highest overall potency over the same amount of time. 

Example: during AoE, using 3xHF2 Transpose over 2xHF2 Transpose with Freeze for its higher PPS with the same amount of instant fillers. 

Available resources

The amount of resources also dictate which lines are available. Keeping track of instants, Swift/Triple, Sharpcast, and Fire and Thunder procs is key in deciding the optimal line. Be mindful of resources that may be needed to handle mechanics. 

Example: using Double Transpose with instant F3 with an available T3P, 2 Xenos, and Swiftcast. 

Phase and buff alignment 

Although BLM’s damage is relatively consistent, small gains can be made by aligning properly with buff windows. In addition, lines should be chosen if their fire phase can be completed before the boss phases. 

Example: choosing a shorter line before buff window arrives so that the start of the next fire phase aligns with buffs.

Thunder refresh 

If choosing a line would result in a long period of dropped Thunder, it is likely better to choose a different line with a well timed Thunder refresh. 

Example: entering a standard line to refresh T3 instead of cutting Thunder dot ticks short for a non-standard line. 

MP ticks

Having a correct tick often means conserving instant resources. This may impact the chosen line as spending less resources returns a higher effectiveness. In more advanced cases where MP ticks are aimed to be accurately aligned, interaction between lines and tick alignment also become much more important. 

Example: choosing a different line over 3xF4 Double Transpose due to its tighter tick timing when 1 filler is skipped.

The decision of which line to enter is extremely situational as it is more dependent on mechanics, alignments, procs, and resources, rather than a simple potency comparison

<h2 id="advanced">Advanced</h2>

<p>Certain section requires the \\\[MP tick trigger](https://docs.google.com/document/d/1vsI2r4064VHJ8WuhItXB7ilbdjEJ26GphZSsjWiyDDU/) 

<h2>Opener Sequence</h2>

Earlier, we explored the possibility of combining non-standard lines into our opener for longer and stronger openers. With the ability to track MP ticks as well as being able to do the countdown, we have far more control over the beginning of each fight. We can eliminate unnecessary fillers during UI and create stronger openers. A prolonged opener phase also eliminates some variance and provides consistency to what we aim to do.

Example opener sequence

<p id="gdcalert67" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image67.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert68">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image67.png "image_tooltip")

Sharpcast at -18 seconds. 1:53 in length, 2.32 GCD. The last 3xF4 Double Transpose can be dropped depending on the fight. <https://xivanalysis.com/fflogs/dLHzYwmQ3pgk4RAx/10/1> 

It’s possible for opener sequences to be much longer than what is shown. The limitation to how long a dummy opener sequence can be planned comes from the variance in T3 and F3 procs. The exact tick timing and optimal sequence not only depends on the fight’s mechanics and timeline, but also on the individual player’s spell speed and ping. It’s up to you to figure out what is possible and optimal.

Example Endwalker 1st extreme trial phase 1 + adds (spoiler alert)

<https://xivanalysis.com/fflogs/kPMvgNx1tHa3XdKf/2/1> 

Unfortunately I updated this sequence late into my ex runs and didn’t have a run with it. This will be replaced by Pandaemonium sequences. No MP tick trigger was used when making this sequence. With a MP trigger, undoubtedly a better sequence can be made. 

Sequence branching

When planning an opener sequence, whether a proc occurs or not can alter our planned sequence. Similarly, randomness in mechanics may also force a deviance. To factor these random elements, we must either plan our sequence in such a way that the variance is eliminated, or plan multiple branches within the sequence should any deviances occur. 

<h2>Utilizing Micro Downtime</h2>

A micro downtime refers to any actionable downtime where 2-3 Umbral Souls cannot be completed, or unactionable downtime where MP is still regenerated without dropping Enochian. Examples include short downtimes in E6S, Basic and Intermediate Relativities in E12S, and forced march mechanics. Commonly, a Sharp’d Paradox is used to prolong the fire phase, or the player enters ice phase with B4 and other fillers prior to the downtime. While full uptime is kept with these strategies, they miss the potential of a gain. Instead, micro and frozen downtimes should be viewed as an opportunity for MP to regenerate, thus enabling stronger lines. Micro downtime is not the same as long periods of actionable downtime. 

We start by finishing the fire phase before the boss is untargetable. The simplest way to utilize micro downtimes is by Transposing after the Despair and let MP naturally regenerate instead of spending valuable filler instants. Ice Paradox can be used as the last hit and T3 can still be applied in these lines if needed. We can then Double Transpose into a variety of lines, using the MP we had received. 

<p id="gdcalert68" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image68.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert69">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image68.png "image_tooltip")

We can do better than this with Double Transpose Paradox lines. Simply conserve the UI Paradox and use it to obtain AF3. 

<p id="gdcalert69" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image69.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert70">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image69.png "image_tooltip")

The number of F4s is flexible, depending on the amount of MP received. 

<p id="gdcalert70" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image70.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert71">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image70.png "image_tooltip")

If Paradox procs, we can use the F3P and obtain an additional F4. Alternatively, Sharpcast can be used to ensure the proc. There are more variations of lines possible, depending on the MP and UH available and the exact scenario. Other Transpose lines can also be considered with this principle.

<h2>Advanced BLM Concepts</h2>

<h3>Approaches to non-standard playstyle </h3>

There are two approaches to non-standard: spreadsheeting and improvising. In Shadowbringers, the length of a Thunder’s proc in relation to the length of the dot was a major contributor to deviations of non-standard sequences. With Thunder changes in Endwalker as well as the additional Sharpcast charge, Thunder refreshes are now highly predictable. By limiting F3P variations with Sharpcasts and having exact control over the occurrences of MP ticks, we can plan out and “spreadsheet” a sequence of casts up to the length of an entire fight. A predictable and exact sequence allows careful calculations to be made for enabling the optimal line with precise timings. Contrast this to a more reactionary “improvisation” playstyle (also known as freestyling), where prior planning plays a much smaller role and decisions are instead made in real time. Certain fights, mechanics, and lines may have many variations where planning is undesired and spontaneous decision making is more effective. Double Paradox is a prime example of a line that would benefit from a flexible sequence over a fixed one. In addition, any fight with a variable killtime phase cannot be precisely spreadsheeted due to uncertainty in MP tick occurrences and other factors. Examples of such fights include Ultimates and any fight with an adds phase. Both methods of non-standard have different merits and elements of difficulty, and players should aim to become familiar with both styles. 

<h3>Shifting of early Thunder refreshes</h3>

When consecutive Thunder refreshes have their ticks cut short, the sum of total ticks cut short should be examined over each individual refresh. If a refresh is cut short by 10 seconds and the following refresh is cut short by 5 seconds, the consideration is the total 15 seconds of shortened dot. In effect, this is the same as cutting one refresh short by 15 seconds and the other by 0 seconds. This principle allows for better Thunder alignment. For example, if a Thunder is refreshed under buffs, then it is better to let that Thunder run for a longer duration.

This principle has a critical application in refreshes dependent on natural proc rates. In the following sequence, the second and third Thunder refreshes have their dots cut short by 5 seconds each. The first Thunder is Sharped and the second Thunder is not. This results in a guaranteed proc for the second Thunder and natural proc rate for third. Since the second Thunder’s proc is certain and unchanged by the length of the dot, it should be refreshed early to enable the maximum amount of ticks for the third Thunder and increase its chance of generating a proc.

<p id="gdcalert71" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image71.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert72">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image71.png "image_tooltip")

<h3>Buff alignment </h3>

While BLM’s damage output is relatively consistent, non-standard provides us with the tools to better align with buff phases. Below a chart of comparative potencies using AF3 F4 as a base. While fitting in stronger spells such as Xenoglossy and T3P are a gain, avoiding weak spells emerge as a higher priority. An instant should also be utilized as the last spell to snapshot buffs before they expire. 

<p id="gdcalert72" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image72.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert73">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image72.png "image_tooltip")

<h3>Lucid methods</h3>

Majority of lines utilizing Lucid Dream only require 1 tick from Lucid, with some lines requiring 2 ticks. This means as long as Lucid’s buff remains in UI for that amount of time, the application of Lucid Dream is flexible. 

<p id="gdcalert73" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image73.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert74">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image73.png "image_tooltip")

At certain spell speeds, Lucid’s duration is able to grant the MP regen utility for two consecutive lines. 

<p id="gdcalert74" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image74.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert75">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image74.png "image_tooltip")

<h3>Weaving under fast F3/B3 </h3>

While fast F3 and B3 are considered a valid weave slot, it should be noted that there is typically a 0.1 to 0.2 second of clip. With the advent of Paradox in Endwalker and Sharpcast being 30 seconds, we have more instants for weaving with a more lenient oGCD usage requirement. If possible, it is preferred to weave elsewhere over fast F3 and B3. While it is a very small amount of time saved and is only worthy of consideration at the top end of optimization, over the course of a full uptime fight, the accumulated clip could mean the difference between ghosting the last GCD or not. 

<h3>Optimizing the last Sharpcast </h3>

Suppose the boss dies at t-0 second. Then ideally, the last Thunder refresh would have happened at t-30 seconds. This creates a problem: there is not enough time for an effective use for the Sharpcast that occurs between t-30 and t-0. For most players where a precise kill time is not guaranteed, using the Sharp to ensure a T3P is available for kill time variance likely has a higher importance. However, if the kill time is optimized with precise GCD planning, then using the last Sharpcast for a F3P line may result in a gain. For this purpose, ideally the F3P producing line is a shorter line, such as N116, due to the time constraint from Sharpcast’s cooldown and the kill time. 

Double Transpose F3P Despair \[N115.1]

<p id="gdcalert75" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image75.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert76">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image75.png "image_tooltip")

This must be a Double Transpose to be a gain. One or more F4s could be cast before the Despair.

<p id="gdcalert76" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image76.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert77">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image76.png "image_tooltip")

Example Triple Transpose finisher. 

<h2>Tracking Filler Skips with Triggers</h2>

Earlier, we mentioned UI fillers can be skipped if an early tick happens. Extending on this concept, based on when the next MP tick will happen in relation to our rotation, we can calculate precisely whether we can skip a filler or not. To do this, we need a point of reference in our rotation. This point of reference of the ticker can be “when B3 starts casting” or “when the first instant is cast”, etc. We can use these calculations and calculate the probability of a filler skip in each line. An example can be seen in this [MP tick tracker](https://github.com/marconsou/mp-tick-bar), with the start of F3’s cast marked on the bar while still yielding the required MP tick.

Cast confirmation, a key mechanic of the game, does not happen at the end of the cast, but rather ~0.5 seconds before the cast is done. This is the same as the slidecast window. This means B3 and F3 will transition to the opposite element not at the end of their casts, but about 0.5 seconds before. 

Tracking MP ticks is highly SpS and ping dependent. You should do calculations for your own set and test their consistency. The key takeaway of this section is that it is possible to spontaneously know precisely whether or not a filler skip is possible.

Likelihood of filler skip in each line

Extending on the principle of tracking filler skips, we can also calculate how likely it is for the right MP ticks to occur in each line and allow potential filler skips. In the [lines comparison sheet](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/edit?usp=sharing), the probabilities of filler skips in some common lines are listed. This is yet another element to determining a line’s strength, as a higher chance of skipping a filler means less resource is required to execute the line. 

<h2>Additional Niche Lines</h2>

<h3>3xF4 Double Transpose Instant F3 with Clipped Triple \\[I27]</h3>

<p id="gdcalert77" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image77.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert78">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image77.png "image_tooltip")

In order to reduce the resource requirement of the strong 3xF4 Double Transpose line, we can create an instant by forcefully clipping Triplecast before Despair. This line still yields a 0.6% gain. 

<p id="gdcalert78" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image78.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert79">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image78.png "image_tooltip")

More productively, we can utilize the Triple clip to enable an extra F4 that would have been impossible without the clip. 

4xF4 Double Transpose w B4 \[N44]

<p id="gdcalert79" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image79.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert80">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image79.png "image_tooltip")

1 UI1 and 1 UI2 ticks are required. This line is about 0.9% stronger than Standard. It may be useful in a situation where 2 fillers are available and the appropriate line length is desired. 

4xF4 Double Transpose instant F3 w B4

<p id="gdcalert80" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image80.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert81">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image80.png "image_tooltip")

Instant F3 principles also apply. 

5xF4 Double Transpose w B4 \[N45]

<p id="gdcalert81" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image81.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert82">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image81.png "image_tooltip")

Additional F4 from Ley Lines. 3 UI1 ticks are required, or two UI2 ticks are required. 

5xF4 Transpose with HF2 \[N36.1]

<p id="gdcalert82" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image82.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert83">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image82.png "image_tooltip")

Very slightly worse than 5xF4 Transpose with slow F3, about 1.6% in gain compared to the aforementioned line’s 1.9%. However, HF2’s faster cast time enables any needed MP tick alignment. 

Double Transpose Paradox AF2 \[N51]

<p id="gdcalert83" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image83.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert84">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image83.png "image_tooltip")

In certain situations, it may be optimal to reach AF2 and stay in AF2 for the remainder of the fire phase. 

<p id="gdcalert84" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image84.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert85">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image84.png "image_tooltip")

F3P variations can occur. 

<h3>Double Transpose Despair \\[N46]</h3>

<p id="gdcalert85" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image85.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert86">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image85.png "image_tooltip")

A line with a notably short length at the cost of two fillers with a 2.4% gain over Standard. Its variations may come in handy when excess resources are available during a short amount of time. Note that even though we have MP for a F4, it is undesirable to cast it as the gain from this line is from the strong Paradox and AF1 Despair, and using an AF1 F4 would reduce its effectiveness.

Double Transpose Despair + Standard \[N47]

<p id="gdcalert86" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image86.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert87">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image86.png "image_tooltip")

This line can be attached to a Standard line with a B4 cast during Double Transpose Despair. 

Double Transpose Instant Despair \[I17]

<p id="gdcalert87" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image87.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert88">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image87.png "image_tooltip")

The Despair can be made instant to further increase its effectiveness.

<p id="gdcalert88" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image88.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert89">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image88.png "image_tooltip")

Example usage with Triplecast and Manafont. 

Double Transpose Paradox Despair \[N50]

<p id="gdcalert89" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image89.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert90">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image89.png "image_tooltip")

The Despair is further buffed by AF2 from the AF Paradox. This line can be useful with certain micro downtimes (discussed later), or during very specific phases. 

<h2>Suboptimal Lines</h2>

This section aims to explore non traditional lines that yield a loss. Should a situation force a nonoptimal section of the rotation, commonly during prog, they have the potential to help handle the situation and reduce further loss. In addition, understanding these lines helps keep thought processes calm and structured, allowing more focus on mechanics. Knowing to choose a line that is a 5% loss over one that would have been a 10% loss is still a gain. 

<h3>Standard with clip \\[N2]</h3>

<p id="gdcalert90" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image90.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert91">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image90.png "image_tooltip")

If a clip occurs, a 2.2% loss is resulted to the standard line. This also applies to any lost uptime with an amount of time similar to a clip. 

<h3>Standard with 1 less F4 \\[N4]</h3>

<p id="gdcalert91" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image91.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert92">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image91.png "image_tooltip")

~1.2% less than standard. It is preferable to finish the Despair with a F4 cut short than losing Enochian or not finishing the Despair. 

<h3>Standard with additional F1 \\[N5]</h3>

<p id="gdcalert92" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image92.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert93">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image92.png "image_tooltip")

About 3% worse than Standard. Generally it’s better to cut a F4 short than it is to extend the fire phase with a F1. 

<h3>4xF4 \\[N10]</h3>

<p id="gdcalert93" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image93.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert94">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image93.png "image_tooltip")

About 1.8% less than standard but is able to produce a F3P. The Paradox can be shifted to UI as a filler. 

<h3>5xF4 \\[N13]</h3>

<p id="gdcalert94" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image94.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert95">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image94.png "image_tooltip")

Requires Ley Lines or Triplecast at high SpS. Essentially the same in PPS as standard.

<h2> Appendix</h2>

<h2>Spellspeed Thresholds </h2>

The table below shows minimum spell speeds at which each sequence is possible. This table can also be found in the [Lines Comparison sheet.](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/edit#gid=1999363100) The values are tested at \~100 FPS and \~70 ping, out of instance. This table is meant to serve as a rough reference only and you should test specific sequences for yourself. Your results may vary based on latency and a number of other factors. In addition, for simplicity, SpS are in base 2.5 seconds cast, which could have differing cast times for other base spellspeeds. For example, a 2.46 seconds cast in 2.5 seconds base could mean either a 2.76 seconds cast or a 2.75 seconds cast in base 2.8 seconds. Lastly, you should aim for more spellspeed than what is listed for leniency and other factors.

* \= Instant cast

# \= Circle of Power buff falls off

LL = Ley Lines

<table>
  <tr>
   <td><strong>Casts</strong>
   </td>
   <td><strong>Min SpS req.</strong>
   </td>
  </tr>
  <tr>
   <td>Instant F3 4xF4
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>F3* F4 F4 F4 T3 Para
   </td>
   <td><p style="text-align: right">
2.36</p>

   </td>
  </tr>
  <tr>
   <td>F3* F4 F4 F4 T3P/Xeno Para
   </td>
   <td><p style="text-align: right">
2.38</p>

   </td>
  </tr>
  <tr>
   <td>F3* F4 F4 F4 F4 Para
   </td>
   <td><p style="text-align: right">
2.32</p>

   </td>
  </tr>
  <tr>
   <td>F3* F4 F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.24</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.31</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4* F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.37</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4\\\* F4\\\* F4 Desp
   </td>
   <td><p style="text-align: right">
>2.40</p>

   </td>
  </tr>
  <tr>
   <td>F3* F4 F4 F4 F4 T3P/Xeno Swift Desp
   </td>
   <td><p style="text-align: right">
WIP</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4 F4 F4 T3P/Xeno Swift Desp
   </td>
   <td><p style="text-align: right">
2.29</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4* F4 F4 T3P/Xeno Swift Desp
   </td>
   <td><p style="text-align: right">
2.36</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4 F4 F4 F4 Swift Desp\\\*
   </td>
   <td><p style="text-align: right">
>2.40</p>

   </td>
  </tr>
  <tr>
   <td>LL 5xF4 Instant F3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>LL F3\\\* F4\\\* F4\\\* F4\\\* F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.40</p>

   </td>
  </tr>
  <tr>
   <td>LL F3\\\* F4\\\* F4* F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.36</p>

   </td>
  </tr>
  <tr>
   <td>LL F3\\\* F4\\\* F4 F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.31</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* LL F4\\\* F4\\\* F4\\\* F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.36</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* LL F4\\\* F4\\\* F4 F4 Desp
   </td>
   <td><p style="text-align: right">
2.31</p>

   </td>
  </tr>
  <tr>
   <td>F3\\\* F4\\\* F4\\\* LL F4\\\* F4 F4 Desp
   </td>
   <td><p style="text-align: right">
WIP</p>

   </td>
  </tr>
  <tr>
   <td>LL F3\\\* F4 F4 F4 F4 F4 Swift Desp\\\*
   </td>
   <td><p style="text-align: right">
>2.40</p>

   </td>
  </tr>
  <tr>
   <td>LL 5xF4 with partial LL
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>LL F3 F4 F4 F4 F4 F4 # Desp
   </td>
   <td><p style="text-align: right">
2.38</p>

   </td>
  </tr>
  <tr>
   <td>LL F3 F4 F4 F4 F4 # F4 Desp
   </td>
   <td><p style="text-align: right">
2.33</p>

   </td>
  </tr>
  <tr>
   <td>LL F3 F4 F4 F4 # F4 F4 Desp
   </td>
   <td><p style="text-align: right">
WIP</p>

   </td>
  </tr>
  <tr>
   <td>2.40+
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Fast F3 F4 F4 F4 F4 Para
   </td>
   <td><p style="text-align: right">
Base</p>

   </td>
  </tr>
  <tr>
   <td>Fast F3 F4 F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
>2.40</p>

   </td>
  </tr>
  <tr>
   <td>LL F3 F4 F4 F4 F4 F4 Desp
   </td>
   <td><p style="text-align: right">
>2.40</p>

   </td>
  </tr>
</table>

<h2>Acknowledgements</h2>

Written by Reina Kousaka of team Abysm. You can find me on Discord @ Reina#0001

Lady Yuna’lesca for developing the simulation “Megumin” AI (origin of the name “AI rotation”) which paved the way of discovering many of these lines, and for his contributions to this document. [You can find Yuna’s AI here. ](https://drive.google.com/drive/u/0/folders/1lyO0FrNkLDVAYGFi2ILh4SUoC96_WGKz)

Fürst Blumier for the help with math, his general BLM inspirations to me and reviewing this document. 

DiaStarvy also for his help with math. We all wish that unis taught us PPS.

Black Mage players on The Balance: Xenitian, Sylvia Code, Nir Aaereitis, Keiji, Whats Rng, Eksu Plosion, Rika Vanih, and Tsutsumi Tsumi for their support and for reviewing this document. 

Caro Kann for his 5.x [document on non-standard rotation](https://docs.google.com/document/d/1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw), which also built a foundation for high end BLM theorycrafting.

Laqi Thish for the document format and building the foundation for BLM discussion and optimization. 

Shoutout to the Black Mage channels on the [Balance Discord](https://discord.gg/thebalanceffxiv) and every Black Mage player. 

<h2>Epilogue</h2>

My initial intention with my previous [Transpose lines document](https://docs.google.com/document/d/1PdDAqmjSHJzpD4xrA7SUGtgqaoFoRibSYAsxfyOw9-I/) was simply to create a compilation of Transpose lines as such a thing was absent. I did not anticipate being this deeply involved with Black Mage theorycrafting. However, as I dug through the different forms of rotations, I became intrigued with them and gradually discovered more things about them and about Black Mage. There is a sort of mathematical beauty in seeing an optimal BLM rotation with upgraded lines and perfect alignments of procs, ticks, and mechanics. The base or standard BLM rotation is extremely easy, but evidently, this is only the surface. Beneath the surface lies a hidden but vast arsenal of optimizations to increase BLM’s damage. Mastering the usage of this arsenal takes incredible skill, and it’s a great contrast to the simplistic nature of the base rotation. In an age where job complexity is reducing across the board, I am proud that Black Mage still has much to offer, and I am excited to see what players do to push its limits. 

<h2>Changelog</h2>

Late September 2021

* Drafted some sections and ideas

December 2021

* ROUGH draft done

January 11 2022

* Final draft done

January 21 2022

* First publishing

Jan 22-23 2022

* Minor edits and additions

Jan 25 2022

* Patch 6.08 updates 

Jan 27 2022

* Fixed a caster tax error with lines I14 and I15 

Feb 13 2022

* Added general expected gain of nonstandard in General Idea
* Added line A2 and updated IDs of AOE lines
* Added notes on spell speed and TGE
* Added lines N16.1, N120, N36.1, N69.69
* Moved lines N116 and N119 from Advanced to Intermediate 
* Added Spellspeed Thresholds 
* Added Advanced BLM Concepts
* Fixed an error with I27 and moved it to Additional Niche Lines section 
* Added Advanced Manafont usage

<p id="gdcalert95" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image95.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert96">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image95.png "image_tooltip")