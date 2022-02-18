---
title: 6.x Advanced Non-Standard BLM Guide
---
*Written by Reina Kousaka of Leviathan* 

*Last updated: Feb 13 2022*

# Prologue 

*“To make it short, they don't teach or research "potency per second" in universities.” - DiaStarvy*

Hello. I am Reina, a caster player, and I am standing on the shoulders of giants. This document aims to provide a comprehensive guide on advanced non-standard playstyle (also known as the AI rotation). There is the assumption you know all of the basics of BLM, including abbreviations and fundamentals. If not, refer to the [6.X Black Mage guide](https://www.thebalanceffxiv.com/jobs/casters/black-mage/basic-guide/) before proceeding here. 

**The standard rotation is more than sufficient to play at a high level of black mage.** If you are looking to generally improve, use the standard rotation and work on the fundamentals such as achieving extremely high uptime, oGCD usage, slidecasting, and positioning. The optimizations listed here are meant for players with a great understanding of the fundamentals of BLM’s playstyle and rotation, and are already familiar with executing the rotation well in fights. Furthermore, non-standard is not required to do well in any high end content. **<span style="text-decoration:underline;">Once again, non-standard is not the solution to low dps, and instead, work on your fundamentals.</span>** If you can maintain a substantially high uptime on BLM and are interested in learning alternative and potentially challenging BLM rotations, then I welcome you to read on. 

This document is written in three sections such that you do not need the knowledge of later sections to utilize the former ones. You do not need to know everything about non-standard to utilize it, and you can choose the level of optimization you want to learn in this document. Undoubtedly, as time goes on, more BLM optimizations will be discovered. This document will aim to include any new discoveries prior to every major patch. Please see the Changelog section for reference. If you have any questions or comments, feel free to contact me on Discord at Reina#0001. Finally, I want to thank the Black Mage theorycrafters on [The Balance Discord](https://discord.com/invite/thebalanceffxiv) for providing the theories, structures of thought and mathematical calculations necessary for creating this document. 

# Basics

## General Idea

The idea behind the optimizations in non-standard lines is the elimination of weak spells, F3, B3, and B4 which lower the average potency per second (PPS) of the rotation. We do this by utilizing Transpose with F3s in AF1 in place of weak UI3 F3s, resulting in a potency gain. In addition, we also use Transpose to transition from AF to UI, which eliminates the need to cast weak B3s. Due to this, B4 no longer yields a Paradox, so it is often skipped as well. 

These concepts allow the overall PPS of the non-standard gameplay to increase compared to the standard rotation. While accomplishing this, it exhausts much more resources than is needed in the Standard rotation and also often reduces the rotational time. As a result, the fire phase is usually very tight and requires prolonged periods of stillness, which make this playstyle much more prone to errors.

**From sims and calculations of non-standard when compared to pure standard (no AF1 F3P), we have estimated a gain of 0.7% to a bit higher than 2%.** The 0.7% floor comes from AF1 F3P Standard’s gain, and the comparison is lowered by ~0.7% if we are comparing to that instead. There is no single exact number to the how much gain non-standard can bring, and is instead dependent on the fight as well as the player’s incorporation of effective lines. Furthermore, the benefits of non-standard are a matter of great diminishing returns. It is relatively easy to obtain, as an example, an 1% gain through non-standard optimizations. Obtaining the next 0.5% requires a drastic step up in effort and difficulty, with a further 0.5% being exponentially more difficult. 

The bracketed letter and number below are an index to the [BLM lines comparison sheet](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E), where you can find the math behind everything as well as more lines that were not chosen to be discussed here. For example, \[N0] refers to the Normal rotation tab, ID 0.

## Base Rotation

### Standard rotation \[N0]

![](https://lh3.googleusercontent.com/0jf9ym-WuKv4IDUO8-L3tMA4P0arFpHlG4r1-BbrSgiqzvZehFcTSwz4qNZuU4DGkjf8u_7pJ2niB1P1GY7ei-8Sxom3bFoDd17_H7P3mxm1JY8aJE7LzRjSXXu6UInHnTczaoXU)A reminder of what is referred to as the Standard rotation. B3 + B4 with 2 MP ticks into a long fire phase with Paradox refresh. 

### AF1 F3P Standard \[N6]

![](https://lh6.googleusercontent.com/wzGQU0qaPecgaeVWNhfk2jVDwRyedtAnEPNjUiZlkkTe51Zt8UgkuS5d4TrcTqsH_EBPAKtwOEXDrr77TReTIgJxgBzqiC_Dp9LyPDrE-IDlVdhRmOuh5VMRFf9_IxNckbFSp5Th)

Instead of spending the F3P during the line it is proc’d, it can be saved and used in conjunction with Transpose to buff its potency in AF1. **The white space represents an instant filler GCD.** By itself with the F3P, this line is a 3% gain in a vacuum. However, we must also consider the previous line that yielded the F3P, as well as its potential to repeat itself. Consistently using F3P this way results in about a 0.9% damage increase (more details in the next section) of fire and ice spells over multiple lines. This is highly recommended to players first starting to optimize, as it is a relatively easy optimization for a decent DPS increase. Note that due to receiving the stacks of Astral Fire at the beginning of the GCD instead of the end, at lower SpS, there is no longer the option to fit four F4s between the F3 and AF Paradox, and any filler spells become exceedly tight if possible at all. This increases the execution difficulty of the standard line.

## Higher level BLM Concepts

### MP and Lucid ticks

Our MP regens for 600 per tick out of combat and 200 per tick during combat, with each tick happening every three seconds. While in Umbral Ice, we gain an additional MP of 3000, 4500, and 6000 MP from the UI1, UI2, and UI3 bonuses respectively. In total, we can expect 3200, 4700, or 6200 MP per tick while in UI. On the other hand, Lucid ticks provide 550 MP per tick. In the overworld, each Lucid tick happens exactly halfway between two MP ticks. However, while in an instance, this timer will constantly drift, and it will become random when a Lucid tick occurs. 

Both MP and Lucid ticks can be tracked via triggers. You can download a [MP tick trigger here](https://github.com/marconsou/mp-tick-bar), with other triggers available elsewhere. Having a tick trigger makes tracking MP ticks considerably easier and is recommended for anyone serious about high end BLM optimizations. In addition, some optimizations listed in later sections are only possible with MP tick triggers.

**Early MP ticks**

Understanding how MP ticks interact with our rotation will become increasingly important as we dive deeper into non-standard lines. In many cases, if we get the right MP tick, often in the form of an early tick, we can conserve one filler resource. **Such filler skips will prove to be crucial in reducing the cost of non-standard lines.** For example, in the AF1 F3P Standard line above, if an MP tick happens right after we enter UI, we know that the next tick will happen sometime during or after the B4 cast, granting us full MP. With this, we can safely skip one filler. 

![](https://lh4.googleusercontent.com/YCkBro8qbPjFbIHmtexoQvatFGVbbdaalbDBtMhq-lkM4qfbPATrvnPoPSv3SAMBsNH0x0X_qctiLLCRF1CxCdXtCGYFo65oGbloYaNhEUfindXTDt3uLe1IMaF4rA1KgcooK04U)

### The BLM rotation and lines

A line is a sequence of casts with specific characteristics that ends after a fire phase. A rotation refers to a line or lines that can feasibly loop and repeat itself. This is why only the standard line is typically referred to as a rotation, while other lines are more strictly referred to as lines. Combinations of non-standard lines are collectively referred to as non-standard playstyle. 

When calculating and comparing relative potencies of lines, only the fire and ice spells are considered and the potencies of Xeno and Thunder spells are excluded. **Thus, any damage gains and losses listed in this document only refer to comparison with other fire and ice spells, and do not reflect the gain or loss of the whole rotation.** Overall, fire and ice spells account for approximately 75% of our total damage, which means the gains and losses of non-standard lines in the overall rotation are only about 75% of what is listed here. In the AF1 F3P Standard line shown above, the ~0.9% increase would translate to about a 0.7% overall increase in damage. 

### Fight and BLM specific strategies 

All of the optimizations listed here require you to stand still as much as possible, and sometimes have control over mechanics’ resolution. Thus, it would be easier to execute these optimizations in a static environment with cooperative teammates. Conversely, The standard rotation gains more prevalence in pugs. Strategizing around fight mechanics and timelines to reduce movement and instant cast usage is a key part of BLM optimizations’ effectiveness and must not be ignored. 

To get started, you can check the BLM raid guide (Coming soon. For now, check the Balance Discord’s BLM encounter channels). There are many more optimizations with strategies that can be done than what is written here. As a generic tip, for every instant spent on a mechanic, think about how to eliminate its need. And for every movement required, think about how it can either be eliminated or done effectively. Be proactive when creating your own alterations of strats to conserve resources. 

### Caster tax 

Caster tax is on average an additional 0.1+2/FPS seconds to the listed cast time of a hard casted spell due to animation lock at the end of the spell. In this document, we will take 0.1s as the caster tax. While not unique to this job, BLM is the job affected the most by caster tax. This means a hard casted Fire IV is in fact 2.9 seconds and not the 2.8 seconds shown. Caster tax is mitigated with instant cast spells which have their animation lock while the GCD is inactive. 

### Strong and weak spells 

Not all BLM spells are equal; there is a large discrepancy in damage between the strong spells and weak ones. When considering a spell’s potency, not only should we look at the spell’s potency, we must also consider its cast time (including the caster tax) and potency per second. 

![](https://lh3.googleusercontent.com/J0yghC18unnqQmSEvytORNv3YxZ8e5MLxF8Lkfw1DMkpr8jDPqBhyp61_zaKuhSEOh7OeqMc1VCuUFRqBy-4-hVbeWJSI3oiMS7keqvmlwSFFK8YJ8Q_74xKF3G8u336TynVAkeX)

Thunder is not listed above as it is a DoT. When a T3P’s DoT is able to run for its full duration, it becomes a high potency spell in our arsenal. Note that Thunder also receives additional potency scaling from spell speed. 

![](https://lh4.googleusercontent.com/OjdLlefjYkkAyyToaqBhQvPCMjd2FkJs_80GsYSAx9ZE4FTGvuG91QD2yB9H3w0NnDia2swPw4ONn1hjKoI-_FdZYYskB7bgQLlSG2E0DITQutneh0sgJhVIFX5fZ0Xr5HWWmK9z)

### Completing fire phases 

The ice phase provides MP and/or Umbral Hearts, crucial resources that enable the strong fire spells at the cost of casting much weaker spells. To fully utilize this cost, we want to complete as much of the fire phase as possible before the boss dies or phases and finish the Despair cast. This could mean either cutting the fire phase short and only cast five F4s before the Despair, or planning ahead and choosing a shorter line.

![](https://lh5.googleusercontent.com/Yq4DgxnvWo_t0q4zK3WgyeFO0XURh25mL7Kg2AGtBLzK-I3TN_t3_ULTPa_PSYIbyVWyYHZIhV-r7lERes17PpEmj9UXz7rQ098PANxRvICfBVxJhboePcm1lQsUOOXfxTVxmwtT)

Finishing the Despair cast by cutting a F4.

There are not many effective short B3 lines. You may opt to do a 4xF4 Transpose instead of a full standard line to finish the fire phase. More details on this line later. 

![](https://lh4.googleusercontent.com/VjoR_2CvVVhmAi_EVx5cEXWOlQ4igO_-a-AUW5G4WkF8C7hWAA96n5TX7J0sYBvFtPp4jXWYMKG47cUqaJBVM28Xup3Xmxf6E1cJt6B4atbIkj2uhXq-JhP9FivEZZi80NAO4EVR)

In addition to the Despair cast, we also want to utilize an instant cast as our last hitting spell. This instant could be a Xeno, F3P, or even a UI Paradox. 

![](https://lh6.googleusercontent.com/4sxO-BE8tDGDTuclPy4jozBqEU1yAZWBaTQGdCF3lFCTTYpyZybYrdbTFI3if9PJCnNOIvFR-fDWht0BmFKX4NH1fL24pjiQheBlEg85Zk7r8JL2fDxogK6aNiwOwXXs-mNfGjkK)

![](https://lh5.googleusercontent.com/DFYA4LEUIQa8fGXR8Jph6QXX_0O2n88trvho2Nory-YF7piyAFVWHYJZjunEU-HGtkJg_o6dhVs18x6yPXJdX3VVVO6EpkxtCAsGdS_fbjarSuXI3hEpx5nQLRur3eRW2u3Ek5FY)

If no instant is available, clipping Transpose into Paradox can be optimal. 

![](https://lh4.googleusercontent.com/zafQVdwFAZXzcrMwIKOGWyC5280ubspznmyRfQRXb6xw2jeK8K_s3trN-mfKGalYeCZNGDoBDVAYhmyQqESdcwgI143nkC_EUx6oTRf0QNqAokEgRGuZ-45_PprbB0RPx9P2L9vO)

If the boss phases with at least ~16 seconds of actionable downtime, then the UI Paradox after Despair should be used. We can then regain the Paradox by using Umbral Souls to obtain 3 stacks of UI and UHs, swap to AF via Transpose, swap back to UI and regain the UI stacks with Umbral Soul. 

![](https://lh6.googleusercontent.com/Do95ZdaW5A6PD9wIQ51YrrxSqj_lKoUfxNl5dTht8qu2SvdxHmjsaMtxcOjnUM3qbta5SxNeAL-mE57XiRC1IsFpayRJlqk7lqbQMAkQowZdb0dRb6F0FAFFQzILx0H04Vd5mzy3)

**Damage application and ghosting** 

Almost every damage ability in this game has a delay between when the ability is cast and when the damage is applied. This delay varies due to animation and other factors. When damage fails to land caused by the target being dead or invulnerable, this is known as “ghosting”. It is possible to see the damage number on screen while still having it ghost. Be sure to check logs to know for certain whether your damage has landed or not. When planning your last hit on the boss, it is important to keep in mind the amount of time between your spell’s cast and when damage lands. Below is a chart of approximately how long it takes for each spell’s damage to apply. 

![](https://lh4.googleusercontent.com/7Jdyzm1fcleuVsXMWG0ptQ9YAPp9P4nmTU1rYOVcR4QWBY8XRciBFNQWR_B8_C90nHbQmVnSLCn9tFKteNJcDNYHWC79NokwcAub5wy2EvbzYQNqKC7M2I3XtSXTtXyWOMkK3OG9)

### Advanced Manafont usage

From the potency comparison chart prior, we can see that the PPS of F4 and Despair are very similar. In situations where Manafont delays cannot be afforded, it can be used to grant two additional F4s to a fire phase instead of being used after Despair for a F4 and a Despair. While this is less ideal than obtaining a Despair from Manafont, it is still much more preferred than losing a use. Beware of MP values and AF timer restrictions when executing this principle. 

![](https://lh4.googleusercontent.com/0Sz2T0ZxWtX6Jriffw2vmMf-tgLaKpF-O8jM7jjDChiv8IL2_ChCtzcpmYRsCh6YWDyib0JTcawxrfNXsO5BewaBRq9uKpbvKpBMjcv015bnLWwImdmy7iJi5ZoCFL5h0qJxgz6m)

![](https://lh3.googleusercontent.com/x_u1BK9xorHvo-F4Ay-UADPN0TJ5V4iaxUPcljKQ3IWO3GcZ0Nzo_7iy0AP_UuVFj1gCP5aBD2Zi3MNwb2bso5bzF2G9wm7yjY-ffrjHY94dPBaTmJS0E8YJUY_J4eD7kiklc-jB)

Example usages of Manafont for two F4s in Standard. 

## Introduction to Transpose Lines 

From the potency comparison chart above, we can see that B3 and F3 are very weak spells when casted from UI3 or AF3 of the opposite element. Thus, instead of using a weak spell to swap elements, we look to use another tool: Transpose. When using Transpose to swap to Umbral Ice, typically we do not cast B3 as the purpose is to skip it. This means we lack the requirement to obtain the AF Paradox since we need 3 Umbral Ice stacks, which in turn also reduces B4’s effectiveness. This results in one less Paradox in the line as well as shorter fire and ice phases. In addition, due to a more limited AF phase to finish the maximum number of fire casts, Transpose lines have a higher execution requirement. 

In most situations, Transpose to UI should be weaved in the first weave slot to allow the maximum amount of time for MP to regenerate. It should also be weaved after an instant, as clipping the Transpose will almost certainly invalidate any gain from a Transpose line and instead become a loss.

### 4xF4 Transpose \[N33]

To cast 4xF4 and Despair, a minimum of 7200 MP is needed. This can be obtained from 1 UI1 and 1 UI2 MP tick. The slow casting F3 gives ample time to obtain the two ticks needed. 

![](https://lh6.googleusercontent.com/lZhqwERbTFAsAyc2Cv6cQ56lt4n0Mz0r6IZSVjL5JSmertd8-SvL6iGwkgNKUm95KXHql1gPtu4-Uxlolo-LtEWPDuL9t0bGIshIOTJCDCUGwIHYE5qaJEkSJWCH35B4r1F0HbnI)

While a weak B3 and B4 are skipped, the slow casting UI2 F3 is still abysmal. Compared to standard, this line is a 0.3% gain. However, it should be compared to AF1 F3P Standard instead, as the latter already has a gain of 0.9% with additional flexibility. **In general, it is recommended to do AF1 F3P Standard over 4xF4 Single Transpose.** 

**5xF4 Transpose \[N36]**

![](https://lh4.googleusercontent.com/CjjduoyCLZCZq8noY0o5rQiAf-WfMkqhSEvDqHRKUWXXxlBzdjtTxvLakEcyxVhpAz-WEmA93gSgkFICSRxBtKyqGKKO-cySSrnqrSkp0502SxKVw7lApE9amwzb8U_mQylidnHp)

Same principle as 4xF4 Transpose, but with higher SpS for an additional F4 in the fire phase. 2 UI2 ticks or 3 UI1 ticks are required. This line is a 1.9% PPS increase compared to standard. Beware of how MP ticks interact with increased SpS under LL. 

### 3xF4 Transpose F3P \[N101]

To alleviate the weak slow casting F3, one method is to use a F3P generated from the previous fire phase in its place, which eliminates the F3’s long cast time and improves the line’s effectiveness. This has been made viable from F3P’s change to 30 seconds in Endwalker. However, as we are transitioning to AF with an instant, we can only fit in three F4s without high SpS. In addition, we must also consider the standard line with its probability that produced the F3P. With these considerations, this line in conjunction with standard yields a 0.55% gain, which is still less than AF1 F3P Standard. 

![](https://lh5.googleusercontent.com/g7q8vGKJJSqsBzNu4On9kwIzvc99GXGXWnXXb8qxgypDKD-t_8I2hwzTCS5Rg38jCq30XgVdga68cmv3OLEO8DWz1vOIEdNbMvR-ytOOF0lbR877UqZJ7tJkIK-WtP8Vp2ye1s_V)

**In practice, we want to take advantage of Double Transpose for an even stronger line, and would only use this line should an abysmally timed MP tick occur. Double Transpose lines are discussed shortly below.** 

### Umbral Ice fillers

Unless specified, the blank white GCDs in this guide refer to T3P and Xenoglossy. During AOE, T4 and Foul can be used instead. Below is an example of a Double Transpose line with Xeno and T3P as fillers. If the correct MP tick occurs, the last Xeno should be skipped. 

![](https://lh4.googleusercontent.com/URBrFLniX_Oa42_CBdzJAdBs6tXlBOCrZse-cC8sORhHjsx_HtqPmK7-2ItROgocrjD-fvW5v1DTb4JcifdRbPZnyS9bEY2GAawMJnalk2zTMIdy2nH3rpptpHphoNLHPCIm-Gec)

Swift and Triple can be weaved to facilitate casts during the fire phase. When a Despair is instant cast, it can substitute as the first instant GCD into Umbral Ice. Example 4xF4 Transpose with Swift and Triplecast used. 

![](https://lh5.googleusercontent.com/dzvAh_Be6Zr66jdyvT_fPm_srgbBdjfE4HorJUCjdrslywZ9Kx609VfejVNFMAe1g9q0fHgAEJWKVQJOT2G_JlfyqV7SIIM9KGpk27vtjPCkRhsLUQdi0okpme6rUJpoNvPsC177)

In many Transpose lines, the middle filler can be used to hardcast refresh Thunder. One tick before the Thunder cast is needed as a hardcast Thunder has a cost of 400 MP. Beware of how this MP cost interacts with the MP requirement and generation of the line. There should be an instant cast before the hardcast Thunder for the first Transpose, and another instant after the hardcast Thunder if it is a Double Transpose. 

![](https://lh4.googleusercontent.com/xx396YELEYn6oxcOzXZzHoBLlANfFjUBhyY6j5gWJFJnxI_7Oap0UgY3A32hOlQ3t8Hk_SG31z3MEA00TPtTfcm5_1QOd5uUtgw8ga4I1dAyC-tND4HqaRFhh1Ab3hSsM2MGl6xf)

### Instant B3 with Transpose \[I3]

Should a situation call for B3 to be instant casted, Transpose can be used to increase its potency. One MP tick is required before B3 is cast. Instant casting B3 this way is equal to instant casting a F4 in terms of overall gain to the line’s PPS. B3 has an MP cost in UI1 and UI2, so beware of MP generation when executing this transition. Transpose should be weaved first to increase the chance of obtaining a MP tick.

![](https://lh3.googleusercontent.com/laKBY1gA9Klbe_E9L5u49gC2a2FrjbHayLbWzX4DHcTYy-r2O9Wdz9iCLo1OKUS8iEAtIom10oqFH4z1dteDH2y-USHjnZTOMAxFvo1zBxr9lxXixsjkPYSi5GtUKjEcMthg0vqE)

## Double Transpose

Although using an instant F3 increases the effectiveness of Transpose lines, a F3 under UI2 is still very undesirable. To circumvent this, we can use a second Transpose during UI to change back to AF and increase the fire spell’s potency. The first Transpose should be weaved asap after the first instant, and the second Transpose will be off cooldown around mid to late weave of the third gcd. 

![](https://lh4.googleusercontent.com/xz5erSJ1wMznUdG3ZNC-ZMo5iKzwBP5futpiY7PFTd1BdvjEXWmN-IoVWf-kKKwM36FkaVynfDPIuXz9kqbJEFeiIxlgd0XxKcwl4eqcwmsrGftiSJTkMKpjaf9-gGCwN30DMzMY)

The advent of Paradox in Endwalker has vastly increased the viability of Double Transpose lines. Not only is Paradox an extra filler during Transpose lines, its purpose as a filler in standard also means other instants can be stored and utilized to enable strong lines. Scathes in this image represent instant GCDs. 

When executing Double Transpose off its cooldown, a mere five second window is not enough to guarantee two MP ticks, and there is a 33% chance of failing to obtain two MP ticks. To guarantee that necessary ticks are obtained, an extra filler may be needed. Alternatively, MP tick triggers can play a crucial role in ensuring the correct ticks happen with minimum instant resources. 

### 3xF4 Double Transpose F3P \[N111]

![](https://lh3.googleusercontent.com/WaHHYj6ff9ovNKRMByKIviT5QwJyprodZVL9GgnsMasVQY2bPUS6J9X19rrKQ6NpKx69y4Tt6OT1YVH0jpbgtgNHz6IVS_aFTz8biX54I6O1bWVW5QmchfSmxCkm3eQ8UOOnILpj)

An incredibly strong line that has eliminated almost all weaknesses in the rotation. This line, along with N112, are the reasons why F3Ps are extremely powerful as they enable these lines. This line is the ideal go-to line for spending F3P. Furthermore, a fundamental goal of non-standard playstyle has been amended with the goal of enabling strong F3P lines. 

**4xF4 Double Transpose F3P \[N112]**

![](https://lh3.googleusercontent.com/wH-xCSw7d-Q4lvCa4R8sZvCCj0rosv3Yf9wcy2btNPQB1rt9bn4fNnDQ4Wd2ttFH1GZywpGKz_rOb7VDAAVqBlcqJHzPSCvWRR2Rn_V-8hLbIWRSi-Z4xmZNfJMne7LbAQY8zZzT)

Additional F4 granted by higher SpS.  If Triple is not used, finishing 4xF4 and Despair after F3P requires at least 2.24 GCD, realistically faster for leniency. Not only is the PPS of this line higher from the extra F4, its extra cast also means more time is spent in this strong line. 

**5xF4 Double Transpose F3P \[N113]**

![](https://lh3.googleusercontent.com/rPYZY79ICLFZ-qPc4HkCiGvMHKU9v_RF-DxqGSSOuh5Xu54ry1ZixRhLFRBp_yVYCvzZDL4PRbdKvr9vrhu0IBmOEzc3U3kxHxHWsGLaLOqyYX4Ok3E-Eob6PDUoLg1_QKEIgHzD)

Another F4 can be obtained when LL and Triple are combined. LL must be used before or during the F3 weave. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency. 

**Standard + 3xF4 Double Transpose F3P \[N76]**

![](https://lh5.googleusercontent.com/kOQQ5DIwPdAJMj3Y_RC32v3sa3MKnwoTMk-TTYVyUg9AEVQOqKR17NPx5iiveaMnNPYme1fegP31hgKusNkXXgcs8Z4qegNjQ4yGidAwudBaAHCNTdWhj_-N6hOengl3gnOfw4CX)

Combining Standard with 3xF4 Double Transpose F3P forms the new backbone of our rotational foundation. Sharpcast can be used to ensure the F3P and is a gain over Sharping Thunder when doing so. With only the natural F3P proc rate considered and without Sharpcast, this line is a 1.5% gain over pure Standard. 

## Advanced AoE Lines 

These AoE rotations follow the same principles as single target Transpose lines. High Blizzard II and High Fire II when swapping elements, as well as Freeze, are all weak spells and skipping them can result in a gain. Importantly, as these AoE lines are shorter, they overcome one key weakness of the standard AoE rotation, which is its length and lack of flexibility when aiming to finish the rotation. **If an early tick occurs, a filler can be skipped from each of the following lines.** Same as the standard AoE rotation, these lines are only better than the single target rotation at three targets or above. 

### Single Flare Standard \[A2]

![](https://lh5.googleusercontent.com/1VzdEvsd68Y3moqXrHCymvoo9wYZJHR-MaysJV1IIqdQD4-5-2XkAw_rtsX9-gqf3yC_Cysjbp-iBTQvmP-qJ1OO3LJvzubSOT6vIypL2NELVifCBLzlbYPstgGfZRCazDVoCEAY)

An extended standard aoe rotation that utilizes HF2’s higher PPS than Flare at above six targets. This becomes higher than normal double Flares at four targets and above, around 0.5% greater, and becomes ~3% greater at a much higher enemy count. If Triplecast is available to instant cast Flares, then the line with both Flares should generally be used. 

### Double Transpose with Freeze \[A5]

![](https://lh3.googleusercontent.com/6eQHkFF6q5D3dWCXskmNWjkFtI3CxPNFygB1Ml9eh77RxHMNaIaooPvz37TezsJvfrjbPbZZu4g_b9I--8I0089o5m61SnI0z_JYY5p3Qk1xv_pLSHiYDkAZaDTkQW4kqHJm_wUb)

Skips both weak HB2 and HF2. This line is a 6.6% to 8% gain over Standard, depending on the number of mobs (all % gains or losses in this section are calculated between 3 and 12 mobs), with diminishing effectiveness as mob count increases. The high number of fillers required makes this line less useful than the following lines.

**2xHF2 Transpose with Freeze \[A7]**

![](https://lh3.googleusercontent.com/U9OGE9mGCDmCoDU8_5Xilbin4vwCu3kEUURt8L9kgAtT1SzFEz_akcx-KyaQsP8iwUlcTZgiG12tkwf15RfvYPLj1Yue5Mom6gGXpqMiqKFhXHWnSu-476p6hAoen8DTl1hCsDU7)

Same line as A5 but only one Transpose is used. The other Transpose is replaced by an UI1 HF2. This line is about 4.5% to 5% better than Standard. 

### 2xHF2 Transpose \[A10]

![](https://lh4.googleusercontent.com/XM3JAcEaYPVZsdy4HNgJLKYQR4HvNKyn1kL_QiJwCpapHqzh55DCk-mWGl9zGfPA3qDSNv3naNxmRh0NqMON6zw9hH2qE3PmVjpF2ABNFf3cKdm3Kh1m-3NzuC86c3jZQ-uTYIYH)A very short Transpose line that also skips the Freeze. Two UI1 ticks are required. This line is about 3.6% better than Standard. 

**3xHF2 Transpose \[A11]**

![](https://lh6.googleusercontent.com/LHa1aR_AdHTeOt4RO-nKuuHuX9T4ZNqcb_sZx1IgR4ovUY1O_V0NX4uBdgAYZz09apzhz9_Hx3_D7dkr4NQhCImFSWXm5BNsSAHZGdoU4VHh4qyG7UeCkafFQICguszDFbCdDE1Z)

Same concept as 2xHF2 Transpose, but with more MP allowing for an extra HF2. The extra MP can be obtained from a Lucid tick, or from an early or extra UI1 tick. This line is 6.7% to 8.2% better than Standard, with higher effectiveness on more targets. With only two filler resources needed, this line is very cost effective and is the go-to Transpose AoE line in most situations if Lucid is available.

**4xHF2 Transpose \[A12]**

![](https://lh5.googleusercontent.com/KOQ4QlM2Sj-FzUetMp4L00FaXxJCteubSbHL9Zxbzy1H0QlwzLUHWv2lPeHvt-S0JaGLWRGiyWi6UL_UeqEqM7kDLNbD5Ju_ig-6xVg4UONbMLZEA7utOVDB60MQcrHrCSYb_EmB)

With an additional UI1 tick, another HF2 is enabled. Requires 3 UI1 ticks + 1 Lucid tick, or 4 UI1 ticks. This is one of the strongest AoE lines, with a gain of 8.5% to 11.2%, with increasing effectiveness against a higher mob count. However, the requirement of three fillers and Lucid is not always available, thus making its usage situational. 

### 2xHF2 Double Transpose \[A16]

![](https://lh6.googleusercontent.com/2Evx-9H4bK3lBvTc8ix0iWRQdXMAz6tAyS8gaB7kwr9pjvI5FqN8BVUTXJEQzj0RXWdNGj6YO2BhLaQ2YpUfLM6zQQgd7Tkj9bM8FfgdSdSitmbNxph5Pg-kU3-SC7Uqth32bHri)

The extreme case of a Transpose AoE line where Freeze and both weak HF2 and HB2 are all skipped. While the short line boasts an impressive 13.5% gain, the excessive amount of resources makes it costly.

**AF1 HF2 Double Flare reopener \[A18]**

![](https://lh5.googleusercontent.com/J_3plFl70ilYPHRWpiUJvpzndg0Gs5eRFlXtmL1lMn9IjfB5EzbcF2FYctvGq3RzszDWGy0z9_4xQ1NKZKxm69P5mcqI9i4a1CuwBT0ehPTFHAleaBZQQJktSunrt_PjcTObm2Ip)

Extending on the idea of 2xHF2 Double Transpose, the amount of instant resources needed can be done during downtime, such as before arriving at the next mob pack in dungeons. Instead of starting in UI3 with a weak HF2, we can instead start in AF1 with a stronger fire spell. This gives us about a 3.5% gain. This line is applicable for 3-5 targets. 

**AF1 HF2 Single Flare reopener \[A19]**

![](https://lh3.googleusercontent.com/aE0I1qvqQpn_sJ79sZNMLynkSN2eusINAWEU5nZsERNDXXDUYxp8R2_ttSXCKXZPDsojoucy-TtUESGDGrNKaD81l-SrTmTeyAqdIBF1CZ_oWlHA2lamnCgz5wmjswAdlv5XMg8R)

Same concept as AF1 HF2 Double Flare, but with more targets in mind. At a higher number of targets, HF2 becomes more effective with its lack of damage falloff. This line becomes better than A18 at six targets or more.

# Intermediate

## F3P Concepts

### F3P producer and F3P consumer lines

Lines can be categorized into whether they are able to produce a F3P, or consume a F3P. Examples of F3P producers include Standard and Double Paradox, and F3P consumers include all of the F3P Transpose lines previously discussed. Some lines neither produce nor consume a F3P, and some lines can produce as well as consume F3Ps. Another way to conceptualize this is to treat lines as F3P plus, F3P neutral, or F3P minus. Some of the strongest lines are F3P minus lines: these lines consume a F3P and must be paired with a F3P plus line in order to be looped. 

This concept has several applications. For one, it is less ideal to end a phase or fight on a F3P producing line, as that F3P that could be used to enable a strong line is now wasted. In addition, this also plays a factor in line lengths. Imagine two F3P producing lines with the same PPS but have different lengths. The shorter line would then be stronger as it can enable F3P lines more frequently. Finally, when evaluating a line’s strength, its capability of producing a F3P must also be considered. 

### Evaluating F3P lines

When looking at F3P lines on their own, they seem to have ridiculously high PPS. While this is true, it doesn’t paint the whole picture of their strength. Keep in mind that F3P lines are F3P consumers. In order to obtain a F3P line, we must first go through a F3P plus line, and F3P lines should be evaluated alongside F3P producing lines. Within the F3P line, we can either rely on the natural proc rate, or use a Sharpcast. Whichever option we choose, there are additional costs associated with F3P lines that reduce their effectiveness. It is important to consider the management of these resources when evaluating if the gain in DPS is worth it. 

### Variation as a result of F3P lines

Unlike the singular GCD of a F3P, F3P lines are done across a sequence of casts. This means whether a F3P procs or not can vary the rotation by some 10-20 seconds. This is a huge variance when aiming to align with mechanics and phases, and manipulating this variance can be challenging. For this reason, it may be preferred to choose a line without such variation, such as Sharpcasting a Standard line, over relying on the proc chance of a F3P producing line such as Double Paradox. 

## Double Paradox

![](https://lh3.googleusercontent.com/lH5xOpG2lJ4v7S57mFPIpgbZi40eHS4pm6Y-Tn5n7mccg5TGRe_HraUIRmudqwvfwzWX260cTL1DumrNFcfa9nlAO1ORJ96Yu8BJ5-xXE2Iw7OaZxCG8NShOFMojF7FlIZFu4Gh2)

Paradox has the unique property of being unaffected by AF and UI multipliers while giving a AF/UI stack. With Transpose, we can use Paradox to obtain AF2 without losing any value. We can then continue the fire phase in various ways. 

### Double Paradox 4xF4 \[N15]

![](https://lh3.googleusercontent.com/-4e_hP0zKrxreppJatMSfjXSeS2W7Tnin08NK_k4b-Mg42szqinYNdOGcWhV3pD2J-yBJLl7KSotfpAeQ_WSVoWIeYrSvo4LhPtmupAy2SVOymNrxrjugzEH0l_8dc4vTOQvY0oa)

From AF2 after Paradox, a F1 is used to obtain AF3. Two F4s are sacrificed to trade an AF2 F1 in place of a weak UI3 F3. Overall, this line is about 0.6% lower in PPS compared to standard. However, this does not paint the whole picture. Recall that F3Ps are highly potent and enable strong lines. Compared to Standard’s mere 40% chance of proccing a F3P, this line has a 64% chance of proccing a F3P. The F3P can then be used in F3P lines. With the consideration of F3P lines, this results in an overall higher gain from this line than Standard. 

The strength of Double Paradox comes from its prospect of producing a F3P. If the first Paradox yields a F3P and we intend on using the F3P for a F3P line, then the F1’s chance of proccing F3P is ignored. Variations of other F3P usage are discussed below. Due to the large amount of hardcasts in the fire phase without filler space after the F1, this line requires a long period of stillness, which often makes it less effective than Standard.

**4xF4 Double Paradox + 3xF4 Double Transpose F3P \[N82]**

![](https://lh5.googleusercontent.com/XzE6Dn-zorEuFk9ajIFK9AeMq6Mx-gs9GE3Uoplec6p7hzo_nXBlOxoq-wQY20pHQ0UjImiO2VUBAkpN7l1Op3SEwmGOz_GVLMO9zysgzeglJ_OPnpTXQwNwNf8F5qxXckTcadHm)

Compared to the average gain of 1.6% when Standard is combined with 3xF4 Double Transpose F3P, Double Paradox 4xF4 yields a 2.0% gain when combined with this F3P line. 

**Double Paradox AF2 F4 variation \[N16.1]**

![](https://lh4.googleusercontent.com/DCQaT2bnAZBv4qdq0FmPiQNV9YhJ6sXFbIOnmoLPYRTP_GKF8CkLaDcIR7-Zd_gJFKkK4uKvDpfOZC50BK1OvGi3XveZRQ6lmBX6GxHsPISogBDTDZXHe-raqFXwpf8KOCZ8_ct1)

Uses F1’s refresh to enable one more F4 under AF2. The AF2 F4 makes it very slightly higher in PPS at a longer line length. As the gain of Double Paradox is from the high proc rate for strong F3Ps, when F3P lines are considered, this line is overall slightly lower with the AF2 F4 compared to Double Paradox without it.

**4xF4 Double Paradox F3P F4 variation \[N17]**

![](https://lh4.googleusercontent.com/CAuw7Jl2WNBrHtikyCLdHVVmacQa3Cw77kGlNRn-2bP_vZ0FZQDyB6l45nmD8or3AKvTk43GJBh8uIuzbB3mXuDOc4O0xeuCqWm7Toe9gIlD1MXtOA7N3KcKDIlnuUB47Sk9rjbt)

Another use of the F3P is to grant an extra F4. This line by itself is about 0.2% stronger than standard, but also weaker when F3P lines are factored. 

**5xF4 Double Paradox \[N19]**

![](https://lh3.googleusercontent.com/5CmjTlx4kOSvheeYN59dNtDv0fQJZxWWmrM6c1Z-F5osehJaCK9sMKgpYCQHjPkWnaVp_OmHd1WECz7Dr_KVLhVWW83eVwKz2pQ1sQ0tGZQINIld716MLyB5Cxk8Bf0K_Qtq5GQ5)

Gaining an additional F4 under LL while still keeping the high F3P proc rate. This line is 0.6% stronger than Standard and is preferred over Standard during LL. 

### AF1 Paradox reopener \[N129]

![](https://lh4.googleusercontent.com/v8ahAwXg0D_sJF42_m_ZPgk9HaGA1Gj1shtPJgl3YVFXhZd97sQfW0XFf99bru4TzWXF6Kodp5-WiBjhi_yWgQfZFfSxlv37tqVccMaZWth4Cg0qEbycc7L-Q7meJOnv5d4M2iYl)

The concept of Double Paradox can be extended to reopeners. Instead of starting in UI3 and casting a weak F3, we can instead start in AF1 and reach AF3 with Paradox and F1. 

![](https://lh5.googleusercontent.com/qRooy1461c63KXr7I-JOYW06U-eS1s7wtEsbYTx155V27orER57erYSViE5cyQzvIe9ai6dikpx770dH3AI3IEMrhogsu6J-SFi99s2OP-q4fM11hQzOiWMvwv3fNJEgIV9Kmesy)

If the UI Paradox is available (reminder that during long actionable downtime, obtaining the UI Paradox is guaranteed), we can use it before Transposing to AF. 

![](https://lh5.googleusercontent.com/pQkagj2xm1rWrK9kknmrZjEla7udLyaacSr4C2I0FiMmR34Hl45N0H02Yp0vvFTn0jlpbWdnMEEQhAqKFjVvlAJ6RYytXw5nT6NbVSyv_AyqmSknwSGb0mncojesCRKe4ambGPjp)

Sharp and Triple can be used to upgrade the AF2 F1 to an AF2 F3P while still keeping four F4s. Note that it might be better to save the F3P for a F3P line afterwards. 

![](https://lh5.googleusercontent.com/MJ-FS12wrNT60KmCiidD_UdZhVpk8lTeHSW85vAelwx67_KyoTxK4gjoyeoORVkFeTuj--WNHRZ2fTBwKYspv6Tt9UUCHefi-SaLe6l4hiJhuMiT8Vw8KsVNEGRD1J_r0zVasug_)

With LL and Triple, we can acquire an additional F4 for 5xF4. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency.

## Transpose Instant F3

In addition to using F3P with Transpose, we can also utilize Swift and Triple to instant cast the F3. Doing so has the opportunity cost of not using them on F4 or Despair, but does not require a F3P producing line to yield an instant F3. In the comparisons below, Swift and Triple usage are compared to a Standard line where they are used on Despair and F4s.

### 4xF4 Transpose Instant F3 \[I7]

![](https://lh4.googleusercontent.com/WEOa0V7fZLEMNp51Nb4gT-D7iSN9PG0uQhxIZ6yka2kK5CSNGTIIQYwNdXBRvie_VOalAcN6JMzKSL9jQpFLUyRL0MzwCpR2LFFhsEEuDIviuKaY6SgSlZKUB6wiO_5FdRSGY_Ss)

Requires 1 UI1 tick + 1 UI2 tick, which can be easily obtained. SpS is needed for 4xF4 after instant F3, which can be done by using Triple in place of Swift. This line is about 1.2% gain compared to Standard. 

![](https://lh5.googleusercontent.com/c1dKITcQ-d-JmLm2UuO8b1P9ePininndh3mFVNJj-CwGL_my92jX8kF8ed1g6xu5mMmPuergCcPQROO3D7_0jU5WdVolZvwyl8RWJSc2DXwx_mwrDSl1EFfpce5wudZ2TPe4oukU)

Another variation of the line where Despair is instant cast. Again, SpS is required for the 4xF4.

**5xF4 Transpose Instant F3 \[I10]**

![](https://lh4.googleusercontent.com/2meY-J9dvSwm09THoefrO7-NqoWGwdz5bAjIJHTaoF9j3yTA6V1vaWvpjMFIr9YsdDRSMv7zK2SALckuWrViNMzxs4Qu7GWN_2hpWWLvGLde__YqdR1NBiEBltMmIG-CmX2rYjv3)

Another F4 can be obtained when LL and Triple are combined. LL must be used before the F3 cast, or used during the F3 cast with an additional instant from Swift.. A minimum of 2.36 GCD or 1117 SpS is required, with more SpS recommended for leniency. This line yields a gain of about 2.7%. 

**3xF4 Transpose Instant F3 \[I5]**

![](https://lh6.googleusercontent.com/Ct5vVIMaPweQIeQ9E8re-uGWgL96Uj_EdV1EGTt88ZIOyviqmgCr1GtXyzCr5gEfKWKnIpRbScGwvaznpUc3ExQlWyjzEngNJIeRprzF2OhusTe2mXZCaxqbF_Uq_dJgBmP_wr7B)

Same principle as the 4xF4 line, but with only 3 F4s. This is a loss compared to using the Swift on a Despair in Standard, about 0.9% lower. However, it is a line with a short length and can be considered if a short fire phase is desired. 

### 3xF4 Double Transpose Instant F3 \[I14]

![](https://lh5.googleusercontent.com/xaai96e6ix8ip43MX21pHrtu02qV4BWYo37j1e4-FzNedHovm5MLa-Lctd_YyJy7jKK3TGTB0fMTI8uS1uxIzZXO_2QUWkOIq-SeI2Q2jL3kh9BCJICYRfIfnXyzd8hmgsN_Jn95)

3 UI1 ticks or 2 UI2 + 1 Lucid ticks are required. This is a powerful line with a hefty resource cost, and is the go-to line when aiming for instant F3 with Transpose. Compared to Swift Despair in Standard, this line yields about a 4.2% gain. This is another tool in our arsenal to utilize instant casts for an increase in damage. 

**2xF4 Double Transpose Instant F3 \[I15]**

![](https://lh6.googleusercontent.com/OqrYLOgrf8W9MedXwMjblRCpw89381FhfmSJw4AYJyUCVLzcVhpaHRlPGo1uad-s9_Okn5iM3_lughIbvPmf2sMhUXwceH9s6wE8elITcTPBAnWWarBhZY-NpZGRIdysOJiy0GAN)

Double Transpose with instant F3 is so strong that a fewer F4 is still a sizable gain. Only 1 UI1 tick and 1 UI2 tick with a Lucid tick are required. This line also has a higher chance of skipping a filler, making it rather cost effective. Compared to Standard, this is higher by ~2.3%. 

## Openers with Transpose 

With our newfound knowledge of Transpose lines, we can append our opener and create a stronger opener. These variations of openers all require standing still during the Transpose line, and will not be applicable to all scenarios. Furthermore, the following only shows a few examples of Transpose variations of openers. There are more possibilities than what’s shown and they may be more optimal depending on the fight.

### F3 Opener Single Transpose variation

![](https://lh4.googleusercontent.com/jO3_qp9r0p_IGfMu4cchhwvum2J9LV8DCV7Sdd_PxLGPDFK0fWxn-CLD2AyxgOvsrEuufOxttqgVvXWfbg-ZyBbgSH39z8RTq8btC3WO53wzkpA2-lsk0qjaorYKn_MFDNyBOROE)

A straightforward F3 opener followed by 4xF4 with instant F3. 

**F3 Opener Single Transpose variation, double weave version**

![](https://lh3.googleusercontent.com/8aCRITl-FOAoiv3m2c9x0WQUmtlvoN2EsyQWCgHZkoEIPI7cfhUTQ1bwolyC84VvneZHfgWH1jZnUIf6jyUuzhMl4HOPTURwMe8UXuJw_Pwd5MiaLhPgWof_1Oq-To-StkeQqJoM)

Same as above, but with double weaving under LL to allow certain abilities on cooldown sooner. Only do this if you can double weave under LL without clip.

### F3 Opener Double Transpose variation 

![](https://lh6.googleusercontent.com/sHN5v2NGbXqbbjzim2D8_xtalj4C2m8D-xQY-niZLrd0ueBv4v1w9GdNFcwVZjRV79wqDUTf03FaYlh7vB5DMFbc83GbTv24KuvA5nbR_FNgw8sAYMKJ_rGDrOwBJoGKJGkBD0LL)

One of the most potent openers by utilizing the strong Double Transpose Instant F3 line. As 3xF4 Double Transpose Instant F3 requires 3 UI1 ticks or 2 UI2 ticks + 1 Lucid tick, obtaining the necessary ticks under LL is not guaranteed and this opener has a certain fail rate. This means this opener requires a MP tick trigger as well as being able to pull in order to be consistent, or to be done conditionally with 4xF4 Transpose as backup should a bad MP tick occur. 

### F3 Opener Single Transpose 5xF4 variation 

![](https://lh6.googleusercontent.com/6uds3g08o6zplRUrd0lu2c_SyVWFQu2XYE2i1ZkgWT1iR6kXWMwSV06SyCKbh5U1fBG9fB1IRLiqndPdkybQCQfCzSiBQTFa3hVCg4uvIH6sy-Qn3ykFcW5m1pApoTZZhfSHhdMR)

Slightly stronger than 4xF4 Transpose instant F3. Xeno can be used during UI to catch raid buffs. 

### B3 Opener Double Transpose F3P variation 

![](https://lh4.googleusercontent.com/KZ5oefyYSEC-dASY7WaYPyWEhxUI0SXpMzDJ7JtBSTGo8MuGoVGsRgs859NRECBnTZBWh3N9Fqfc94iLoa8FHC-wtr2lWlhtgLCtvSJUp7yI4aO6HO_8toixbFMKB2_WnYHGUeKD)

A long opener that utilizes the strong Double Transpose F3P line. It is about equal in strength compared to the 4xF4 Transpose with instant F3 variation, but aligns worse with buffs and requires a much longer period of stillness. This opener can be useful for alignment reasons. In addition, it is worth noting that opening with B3 and B4 only serves the purpose of enabling a Double Transpose F3P line, and any B3 openers without the F3P line are otherwise worse than F3 openers. 

## Additional Double Transpose Lines

### 3xF4 Double Transpose F3 \[N41]

![](https://lh4.googleusercontent.com/ubgArOIGTWk_TtWmy6JfEFmpqF-a_O3ME01y683C2IMh6IYaEN9l4u-lZofPAopUiCjh9P2av4r7dGTin-Cg2D6fSqY-TlF48P7kKTzz9xiIoYKUmP3dIRiRisFbz-SbOtfzDna5)

Same principle as 3xF4 Double Transpose Instant F3, except without the instant and with a slow casting F3. Even though the F3 is slow, this line still proves to be potent, about a 3.4% gain over Standard. One filler can be used during the fire phase.

**2xF4 Double Transpose F3 \[N42]**

![](https://lh3.googleusercontent.com/Gqts6ZEl7vDYKinD21fiZA7CejC9RLsUBkSo1xKgP34Gr8gj2hPMzPV-J_K-UdnP_9OWH3dsi7hGliw65biD29tPVEwKpsgVFmIX64Sp0bTGQXo-d-xCdcE8NgnZg3hS5nqlCc0a)

Same concept as 3xF4 but without Lucid. ~1.5% increase over Standard. 

### Double Transpose Paradox 

![](https://lh6.googleusercontent.com/om7NbZxRYAYSP0MhzTHv4fgujlORM6MfMjH_jCcN05UIYnKa4pxz3Fqsdb1m9mklgM_oe7kKc13-gePU8pkiayO3NNik0UYIsbKIOqdpGOSge-PyEASs1Ygg4XDKIrabZwGmAR4T)

Double Transpose AF1 lines specifically refers to a Double Transpose line that arrives at AF1, and then uses Paradox and/or F1 to reach AF3. The concept is similar to Double Paradox lines, but with an additional Transpose to skip both ice spells. In Double Transpose Paradox, the UI Paradox is conserved and used in AF instead. Double Transpose Paradox will also be relevant during micro downtimes, discussed in a later section. 

### 4xF4 Double Transpose Paradox with B4 \[N69]

![](https://lh4.googleusercontent.com/T4n6s032lBcETrX6R2fY_xoK_WlRw3bpAv6Zohb2AP3Wf1CCT30qAV0Qi22LT8LRDBD8jlx67-vbNnHHzTvwHr50nm9MLbU97HGgColeUS7gvratJZ2-wKn1cC8Xfx19Gy5S9p7h)

B4 can be used in place of a filler while also providing a longer fire phase. 3 UI1 ticks are required. This line is surprisingly potent as it shares the principles of Double Paradox but skips the weak B3 cast. This line yields a 3.4% gain and provides a high F3P proc rate at the same time.

**4xF4 Double Transpose Paradox with B4, AF2 F4 variation \[N69.69]**

![](https://lh5.googleusercontent.com/wHIhNeDwrPPGxWlYU2t9PZsQw994kd4naVBX031ioAd8RfRGdZFm5YEzVTnrqjE9haCTaM8vvk1dpbPkCJCOyCIiZqDuj9OkLo9V4YHbj2MI5YUHCcJQB1ywFRLUTsl6ve75dpV1)

9600 MP is required upon returning to AF. Uses F1’s refresh to enable one more F4 under AF2. This line is about 0.2% lower in PPS compared to N69, but one GCD longer. 

**3xF4 Double Transpose Paradox with B4 \[N70]**

![](https://lh5.googleusercontent.com/o6_nD-7TlspkGB9F3ifUTfd2ka-wT156Otf3ITWq2tp21Ow3dVqd019GlXXgw4E2Wnr3kxt4GyxrHFd7MRVyesmyUovoJZpo4pSZRoPRVyVdz9HrZjFzzLIuadvWBjWM3-HlP-vv)

Same line as N69 but with one less F4. 3 UI1 ticks or 2 UI1 ticks and 2 Lucid ticks are needed. Compared to the 4xF4 variant, this line has a much higher chance of skipping a filler. The fire phase also offers an extra cast. ~2.0% stronger than Standard. 

**5xF4 Double Transpose Paradox with B4 \[N71]**

![](https://lh3.googleusercontent.com/kKLVTRVDT_VUze3QDccYccDCob-i1Wbu_7vKOxUmOZnWbXMQPQbzXN-vwmXb23Exvx2Hv_U6AOleKrolDx0KiUMgXtlpXT1ZrFElFJe2WxwphmcpD-MpkoEytnO7FkrAdCE2q8iB)

Another stronger variant of the line, enabled by Ley Lines. ~4.4% gain over standard. At least 9600 MP is required upon entering AF. 

### 4xF4 Double Transpose F3P with F1 \[N116]

![](https://lh6.googleusercontent.com/-Fj06Dbv0ngwH56C8_LBdo8wH9ZR2AIN65G3gL_oADJjV8o5qWd6q2FKR-YlE41bTT95R0ondSVH2X5I9B62z0itxXNFFqaBwRvaB6U5OqjquASQNAhk6T5D8kQdra4DacejvEk8)

Uses F1 to refresh when Triple is unavailable to enable 4 F4s in AF. A fair bit weaker than previous shorter Double Transpose F3P lines, but provides the ability to produce a F3P. 

### 6xF4 Double Transpose F3P with B4 \[N119]

![](https://lh3.googleusercontent.com/Gu-aXoAwQYC8wFBHT6zQHUOh6UCvkSAW6IY1Bb4YDo5VEoV4qrW0zqTqw2ZISsffbxr-J0E1NK3ZkJsjRzg6DlxeYK2P_2hqPx7R1-xCgUMEFtK0plSrbg0OPwVf_9P41eT0t7Um)

Another powerful Double Transpose F3P line. 2 UI2 ticks and 1 Lucid tick are required. While this line is also not as potent as 3xF4 Double Transpose F3P, its length and its ability to produce a F3P brings it closer in strength. 

**6xF4 Double Transpose F3P with B4, AF Paradox variation \[120]**

![](https://lh3.googleusercontent.com/J3DT4r_Ww7whHO2Srf4mjr9HFJuSb_NwC7H4QKBN-DDU_NNY55rL2KCx41Gl6l5QKOkhTeVx0JS0i5FyDEZXIJQ5hAQtIkXpeUcZ9qUs4YPVUdqxNfyQz3gH8Yf8WExpT6CpzH-b)

Requires 9600 MP when reentering AF. An upgrade from N119 by eliminating the F1 with the UI Paradox. This is one of the strongest F3P lines but with a hefty resource cost.

## Notes on Thunder

The ideal Thunder refresh in non-standard is the same as it is in standard: as the dot falls off. However, compared to standard, non-standard lines are generally much shorter in length and have stricter filler applications. This causes Thunder usage to diverge during non-standard gameplay where we cannot always refresh Thunder when the dot is about to fall off. Every 30 seconds of overwritten dot with T3P is equal to replacing a spell with a 400 potency T3P. If a T3 is used instead of T3P, then this becomes a lot less than 400 potency. This results in a devaluation of lines if dot ticks are cut short, and it is also true for the standard rotation. 

Generally during non-standard, you should aim to avoid cutting the dot short by more than 5-10 seconds with a proc, and avoid cutting the dot short at all with a hardcast. Sharpcast adds some degree of leniency with regards to cutting ticks short. In addition, dropping the dot for more than 1 tick should also be avoided. The exact gains and losses from Thunder use in non-standard is dependent on various factors. As a rule of thumb, the stronger the non-standard line, the more leniency you have with deviating from optimal Thunder usage. Sharpcast on Paradox or F1 is a gain if strong Double Transpose F3P lines are enabled when compared to using it on Thunder. 

## Notes on Spell Speed

Unless specified, the lines in this document are tested at 1400 SpS, or 2.32 GCD. With a few exceptions which are also specified, all lines are doable at 2.32 GCD with the listed fillers without missing MP ticks. To perform the 4xF4 Despair after F3P with Triplecast, a hard minimum of 2.43 GCD is required, and a 2.37 GCD is required if only two stacks of Triple are used on F4s. See the Appendix section for more spell speed thresholds. More SpS should be added for leniency. Some lines might not be applicable at (much) higher spell speeds and additional fillers might be needed at extremely high spell speeds. The higher your spell speed, the less luck you will have with MP ticks. This principle also applies to Ley Lines. While LL can enable additional F4s in the fire phase, it also changes how MP ticks interact with fillers in UI. Thus, beware of MP ticks during UI when LL is active. Double Transpose lines also require an additional filler under LL as the faster GCD will be clipped by Transpose’s cooldown. 

In addition to MP ticks considerations, much of Black Mage’s resources function on a fixed timer that are not affected by spell speed. Additional spell speed will not increase the number of available fillers, Swifts/Triples, and Sharpcasts available. Furthermore, a faster spell speed will often require extra Thunder ticks to be cut short. As a general rule of thumb, the faster the spell speed, the noticeably less available and less effective some lines, especially short Double Transpose lines, will become. 

### Standard rotation under Ley Lines

At a SpS of 2.3 GCD or faster, obtaining 2 UI3 ticks during ice phase with standard under Ley Lines is no longer guaranteed. At SpS BiS, there is about a 10-15% chance of missing the second MP tick, and an additional filler may be needed. 

![](https://lh6.googleusercontent.com/j1IuonNVYJG5qrSJLnM8r_qjO0H3UNGpdND_EyYI9ThphYP7WWlYkILVj-zNJzvXIYeLIM9lJeYegJxXPijM_Eyt_hPr-422U6QbfwdLwGwAFvEn1GG4iauPycyAjJCHSOYaP4-v)

## Comparing Fire/Ice Lines

**[For calculations and details behind the math of everything in this document, see this sheet.](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/)** When analyzing strengths and weaknesses of lines, there are numerous factors to be considered. 

### PPS

The most straightforward factor. PPS has a direct effect on a line’s effectiveness. When comparing PPS, the percent of difference should be the metric over a raw number. When calculating PPS of lines, potencies of Thunder and Xeno are not included. As mentioned before, this creates a difference in the PPS and PPS comparisons of lines, versus the PPS of the overall rotation. 

### Resources required 

Another important factor is the amount of resources each line requires. Resources come in the form of instant casts spent, F3Ps used, Sharpcasts available, and Swift/Triples used. There is a correlation between the amount of resources a line requires and its potency. Finding the optimal rotation has thus become a balancing act of using less potent lines that conserve resources, versus stronger lines that expend resources. 

A consistent resource expenditure when analyzing lines is essential. If more resources are spent, then a higher return should be expected. This is pivotal when looking at instant F3 lines, with Swift/Triple and F3P. It would be disingenuous to compare a line that has used Swiftcast to a line that does not use Swift. The effect of Swiftcast would skew the result in its favor.

Swift and Triple also have an unequal effect on each line’s PPS due to varying line lengths. The same reduction in cast time will increase a shorter line’s PPS more than it would on a longer line. As such, the PPS and relative potencies of lines with Swift and Triple should be adjusted to account for this effect. For this reason, a line with Swift might have a higher raw PPS but a lower relative PPS once Swift’s effect has been normalized. 

**Likelihood of filler skips from correct MP ticks**

Every line has a certain probability of allowing a filler skip from obtaining the right MP ticks. It is possible to calculate precisely how likely it is to skip a filler in each line. Using less resources increases effectiveness and thus a high chance of skipping a filler also increases a line’s effectiveness. 

### Line Length

The length of each line is another crucial consideration for two reasons. Firstly, as discussed previously, one goal of utilizing different lines is to align with mechanics and phases. Finishing a full fire phase is always a priority. In addition, each line’s length also dictates their strength. Some lines may be very powerful, but expend a high amount of resources and only last a short amount of time. We are then forced to return to a relatively weaker line, such as Standard, for a larger portion of our rotation. Compare this to a similar line in terms of resources requirement that is slightly weaker, but at a longer length. This would mean we get to stay in this line for a prolonged period of time before needing to return to a weak line.

**Time Gained Equivalent** 

Time Gained Equivalent (TGE) is a more advanced metric of evaluating line strength. Each unit of TGE equates to gain in time as if we did the Standard rotation for that amount of time. For example, a TGE of 1.0 would mean the gain of the line is equal to one second of the Standard line. This number is given by the formula relativePPS * lineLength - lineLength, and normalizes the line lengths by treating its gain in PPS as a gain in time. This allows comparison of lines with varying lengths and PPS. The concept of TGE can be extended by multiplying TGE by PPS of the Standard line, which converts TGE into a potency equivalent: Potency Gained Equivalent or PGE. This is useful when conceptualizing a line’s overall return as a potency and has application in Thunder related comparisons. TGE and PGE should be treated as theoretical ideas for evaluating lines rather than a deterministic calculation. 

### Flexibility

The extent of optimization is fundamentally limited by fight mechanics. In order to line up with mechs, some degree of flexibility may be required in the lines we choose. An easy way to determine a line’s flexibility is its number of available filler spots during its AF phase. For Standard, there are two available filler spots, one on each side of the Paradox refresh. The majority of non-standard lines offer no flexibility, which contributes to their difficulty in execution. 

## Choosing Fire/Ice Lines

When choosing which line to use, there are a number of factors to consider. 

### Mechanics

The most important and most straightforward consideration. If motion is required, then lines that require stillness are unavailable. This can also come in the form of needing to use an instant for weaving. This factor can sometimes favour non-standard lines, as many Double Transpose lines utilize multiple instant cast spells during UI, which are valuable as movement tools. 

Example: during a phase with a high movement requirement, instead of using F3P for a Double Transpose line, it is instead used to prolong the fire phase to allow extra fillers for handling mechanics. 

### PPS

Another straightforward consideration. We want to aim to choose lines that provide the highest overall potency over the same amount of time. 

Example: during AoE, using 3xHF2 Transpose over 2xHF2 Transpose with Freeze for its higher PPS with the same amount of instant fillers. 

### Available resources

The amount of resources also dictate which lines are available. Keeping track of instants, Swift/Triple, Sharpcast, and Fire and Thunder procs is key in deciding the optimal line. Be mindful of resources that may be needed to handle mechanics. 

Example: using Double Transpose with instant F3 with an available T3P, 2 Xenos, and Swiftcast. 

### Phase and buff alignment 

Although BLM’s damage is relatively consistent, small gains can be made by aligning properly with buff windows. In addition, lines should be chosen if their fire phase can be completed before the boss phases. 

Example: choosing a shorter line before buff window arrives so that the start of the next fire phase aligns with buffs.

### Thunder refresh 

If choosing a line would result in a long period of dropped Thunder, it is likely better to choose a different line with a well timed Thunder refresh. 

Example: entering a standard line to refresh T3 instead of cutting Thunder DoT ticks short for a non-standard line. 

### MP ticks

Having a correct tick often means conserving instant resources. This may impact the chosen line as spending less resources returns a higher effectiveness. In more advanced cases where MP ticks are aimed to be accurately aligned, interaction between lines and tick alignment also become much more important. 

Example: choosing a different line over 3xF4 Double Transpose due to its tighter tick timing when one filler is skipped.

**The decision of which line to enter is extremely situational as it is more dependent on mechanics, alignments, procs, and resources, rather than a simple potency comparison**

# Advanced

#### Certain section requires the [MP tick trigger](https://docs.google.com/document/d/1vsI2r4064VHJ8WuhItXB7ilbdjEJ26GphZSsjWiyDDU/) 

## Opener Sequence

Earlier, we explored the possibility of combining non-standard lines into our opener for longer and stronger openers. With the ability to track MP ticks as well as being able to do the countdown, we have far more control over the beginning of each fight. We can eliminate unnecessary fillers during UI and create stronger openers. A prolonged opener phase also eliminates some variance and provides consistency to what we aim to do.

**Example opener sequence**

![](https://lh5.googleusercontent.com/Flgm1Gql72Vuj1_Jq5jgStZp0DQv0l9XVHvQiyd8oR8SkjnmWSrNDeBcvCCHvwquH9dvMQ0njiRixVUpFKrtRLCLAc_v5Wi3p1ZwyeW7VMrV3d8Qj34mq0dtPLZrNvLgp6Txaa-V)

Sharpcast at -18 seconds. 1:53 in length, 2.32 GCD. The last 3xF4 Double Transpose can be dropped depending on the fight. <https://xivanalysis.com/fflogs/dLHzYwmQ3pgk4RAx/10/1> 

It’s possible for opener sequences to be much longer than what is shown. The limitation to how long a dummy opener sequence can be planned comes from the variance in T3 and F3 procs. The exact tick timing and optimal sequence not only depends on the fight’s mechanics and timeline, but also on the individual player’s spell speed and ping. It’s up to you to figure out what is possible and optimal.

**Example Endwalker 1st extreme trial phase one + adds (spoiler alert)**

<https://xivanalysis.com/fflogs/kPMvgNx1tHa3XdKf/2/1> 

Unfortunately I updated this sequence late into my ex runs and didn’t have a run with it. This will be replaced by Pandaemonium sequences. No MP tick trigger was used when making this sequence. With an MP trigger, undoubtedly a better sequence can be made. 

### Sequence branching

When planning an opener sequence, whether a proc occurs or not can alter our planned sequence. Similarly, randomness in mechanics may also force a deviance. To factor these random elements, we must either plan our sequence in such a way that the variance is eliminated, or plan multiple branches within the sequence should any deviances occur. 

## Utilizing Micro Downtime

A micro downtime refers to any **actionable downtime where 2-3 Umbral Souls cannot be completed**, or unactionable downtime where MP is still regenerated without dropping Enochian. Examples include short downtimes in E6S, Basic and Intermediate Relativities in E12S, and forced march mechanics. Commonly, a Sharp’d Paradox is used to prolong the fire phase, or the player enters ice phase with B4 and other fillers prior to the downtime. While full uptime is kept with these strategies, they miss the potential of a gain. **Instead, micro and frozen downtimes should be viewed as an opportunity for MP to regenerate**, thus enabling stronger lines. Micro downtime is not the same as long periods of actionable downtime. 

We start by finishing the fire phase before the boss is untargetable. The simplest way to utilize micro downtimes is by Transposing after the Despair and let MP naturally regenerate instead of spending valuable filler instants. Ice Paradox can be used as the last hit and T3 can still be applied in these lines if needed. We can then Double Transpose into a variety of lines, using the MP we had received. 

![](https://lh3.googleusercontent.com/ztb2SwO3qoKujFmtYjvzc3cMH5WvaFaoi0x2yRbkvc4OLr12rq61sLRC_NBFVn_NuHcCNxt2tflibb618fN46nNwZ8N05VOkx7-_vvdKne1XK-yrc0Cy2AmCJVIOYHug9PiecVn1)

We can do better than this with Double Transpose Paradox lines. Simply conserve the UI Paradox and use it to obtain AF3. 

![](https://lh5.googleusercontent.com/CDFBHdmHWb3K97zZwDUM_a7DvzZ_9-WFP5E6o4CgH8ZWj2dND_esdLX4VBtTxOaM5YjqJr5jcg7u2NoJC-96gnIlIV7wyJ6-13ZSPkE7EvPn2IFxzJUMj4Kd0BrSbPjimkaS5_VD)

The number of F4s is flexible, depending on the amount of MP received. 

![](https://lh6.googleusercontent.com/txdGHRVDLaT6cbrd2wXFvkJB7JCCrXtDwgFW5GrGfhM47s48HvmYbhNgs1t_DNNpFc29w97DRE4cpXx7aLryTmx7O9UsSJwD4UktEj4S4SRQlxaLFVc0PrLNWeXoOguQev2mpkq_)

If Paradox procs, we can use the F3P and obtain an additional F4. Alternatively, Sharpcast can be used to ensure the proc. There are more variations of lines possible, depending on the MP and UH available and the exact scenario. Other Transpose lines can also be considered with this principle.

## Advanced BLM Concepts

### Approaches to non-standard playstyle 

There are two approaches to non-standard: spreadsheeting and improvising. In Shadowbringers, the length of a Thunder’s proc in relation to the length of the dot was a major contributor to deviations of non-standard sequences. With Thunder changes in Endwalker as well as the additional Sharpcast charge, Thunder refreshes are now highly predictable. By limiting F3P variations with Sharpcasts and having exact control over the occurrences of MP ticks, we can plan out and “spreadsheet” a sequence of casts up to the length of an entire fight. A predictable and exact sequence allows careful calculations to be made for enabling the optimal line with precise timings. Contrast this to a more reactionary “improvisation” playstyle (also known as freestyling), where prior planning plays a much smaller role and decisions are instead made in real time. Certain fights, mechanics, and lines may have many variations where planning is undesired and spontaneous decision making is more effective. Double Paradox is a prime example of a line that would benefit from a flexible sequence over a fixed one. In addition, any fight with a variable killtime phase cannot be precisely spreadsheeted due to uncertainty in MP tick occurrences and other factors. Examples of such fights include Ultimates and any fight with an adds phase. Both methods of non-standard have different merits and elements of difficulty, and players should aim to become familiar with both styles. 

### Shifting of early Thunder refreshes

When consecutive Thunder refreshes have their ticks cut short, the sum of total ticks cut short should be examined over each individual refresh. If a refresh is cut short by 10 seconds and the following refresh is cut short by five seconds, the consideration is the total 15 seconds of shortened dot. In effect, this is the same as cutting one refresh short by 15 seconds and the other by 0 seconds. This principle allows for better Thunder alignment. For example, if a Thunder is refreshed under buffs, then it is better to let that Thunder run for a longer duration.

This principle has a critical application in refreshes dependent on natural proc rates. In the following sequence, the second and third Thunder refreshes have their dots cut short by five seconds each. The first Thunder is Sharped and the second Thunder is not. This results in a guaranteed proc for the second Thunder and natural proc rate for third. Since the second Thunder’s proc is certain and unchanged by the length of the DoT, it should be refreshed early to enable the maximum amount of ticks for the third Thunder and increase its chance of generating a proc.

![](https://lh5.googleusercontent.com/XowwaFs4C1T6RVE5T_ZLZW-ZXdTYzWma2hMjKjO246cTS3rYoGFc6wdiJsyjOcTmzpP4rsgggEyVqh7lqdTz-M6vqgU-v8YEDw8WofLR9IA4SIZx3AkVCHuCq_vzUlGHs4c1MCSF)

### Buff alignment 

While BLM’s damage output is relatively consistent, non-standard provides us with the tools to better align with buff phases. Below a chart of comparative potencies using AF3 F4 as a base. While fitting in stronger spells such as Xenoglossy and T3P are a gain, avoiding weak spells emerge as a higher priority. An instant should also be utilized as the last spell to snapshot buffs before they expire. 

![](https://lh3.googleusercontent.com/DlWkPGPnTsyjSwo6YiwVQS0-B_k6UuhXRLs0rDk4OYkIsiJJnOx1Wc4zMo4zBLDB4pXNOdRFGqijq0D_PdmS_y1-HPB1T6x4KvVqKHJsCXFYUiC_XU1ufp7sSkfm0zKZ1JP_BXBP)

\*Thunder’s damage has additional scaling from spell speed.

### Lucid methods

Majority of lines utilizing Lucid Dream only require one tick from Lucid, with some lines requiring two ticks. This means as long as Lucid’s buff remains in UI for that amount of time, the application of Lucid Dream is flexible. 

![](https://lh4.googleusercontent.com/F4ypfWa13ElKfmqJPrZ9N74xulB_Jg7lgQR5VWo1HZFaJH-Dsn2MV1QNnoRJXArUwXxNcnrtbdDvBhqtaqcuM8STUClH9TZPqsGx4J0_4pYruPdQqJbfbZSijgW6RYUIDFjEEjaX)

At certain spell speeds, Lucid’s duration is able to grant the MP regen utility for two consecutive lines. 

![](https://lh5.googleusercontent.com/dhWanewvYveut_1dqiJVf9LroWx-WHsEdtSaMLzWAnB8iZIkZkTB0OpPzWRdHqSkr6Jd2W8mhEErqLldeENlxosiT4CRpaMeBZm8eRTRH84j7XtqvK2q76Qy21jYMIc8gZCajAgW)

### Weaving under fast F3/B3 

While fast F3 and B3 are considered a valid weave slot, it should be noted that there is typically a 0.1 to 0.2 second of clip. With the advent of Paradox in Endwalker and Sharpcast being 30 seconds, we have more instants for weaving with a more lenient oGCD usage requirement. If possible, it is preferred to weave elsewhere over fast F3 and B3. While it is a very small amount of time saved and is only worthy of consideration at the top end of optimization, over the course of a full uptime fight, the accumulated clip could mean the difference between ghosting the last GCD or not. 

### Optimizing the last Sharpcast 

Suppose the boss dies at t-0 second. Then ideally, the last Thunder refresh would have happened at t-30 seconds. This creates a problem: there is not enough time for an effective use for the Sharpcast that occurs between t-30 and t-0. For most players where a precise kill time is not guaranteed, using the Sharp to ensure a T3P is available for kill time variance likely has a higher importance. However, if the kill time is optimized with precise GCD planning, then using the last Sharpcast for a F3P line may result in a gain. For this purpose, ideally the F3P producing line is a shorter line, such as N116, due to the time constraint from Sharpcast’s cooldown to the kill. 

**Double Transpose F3P Despair \[N115.1]**

![](https://lh3.googleusercontent.com/8wRkFinVBLB5QQ5xtchl-ChjmHz-qP2P0adF-vYXZsWSiprNDZ2oho4o6tNTEDyA2zgbThV_Bl1vA7FBvQf2NFb8OyDr9boq448j8Zt1iDG_20y6eO3jy4sJJB4mqGNeSfhqBDIf)

This must be a Double Transpose to be a gain. One or more F4s can be cast before the Despair.

![](https://lh5.googleusercontent.com/WDv3YwjyKsSOa-x8VXt4aWV6rU6dUI3e88yGbLO8gZ780gw1JzSPECuT4SlLUzu-FD0h-jX_eEtT3jP6jmJxXrkzASZDKTFnXnqIJDpI-nYJR5j9jGZ4osM_YblVsJQ4PFJFolnt)

Example Triple Transpose finisher. 

## Tracking Filler Skips with Triggers

Earlier, we mentioned UI fillers can be skipped if an early tick happens. Extending on this concept, based on when the next MP tick will happen in relation to our rotation, we can calculate precisely whether we can skip a filler or not. To do this, we need a point of reference in our rotation. This point of reference of the ticker can be “when B3 starts casting” or “when the first instant is cast”, etc. We can use these calculations and calculate the probability of a filler skip in each line. An example can be seen in this [MP tick tracker](https://github.com/marconsou/mp-tick-bar), with the start of F3’s cast marked on the bar while still yielding the required MP tick.

Cast confirmation, a key mechanic of the game, does not happen at the end of the cast, but rather ~0.5 seconds before the cast is done. This is the same as the slidecast window. This means B3 and F3 will transition to the opposite element not at the end of their casts, but about 0.5 seconds before. 

Tracking MP ticks is highly SpS and ping dependent. You should do calculations for your own set and test their consistency. **The key takeaway of this section is that it is possible to spontaneously know precisely whether or not a filler skip is possible.**

### Likelihood of filler skip in each line

Extending on the principle of tracking filler skips, we can also calculate how likely it is for the right MP ticks to occur in each line and allow potential filler skips. In the [lines comparison sheet](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/edit?usp=sharing), the probabilities of filler skips in some common lines are listed. This is yet another element to determining a line’s strength, as a higher chance of skipping a filler means less resource is required to execute the line. 

## Additional Niche Lines

### 3xF4 Double Transpose Instant F3 with Clipped Triple \[I27]

![](https://lh4.googleusercontent.com/XQmdDgATJDVJyej0Myh6urBycmPujWcCiNYnrMebXCyvDI72RB4wqjZwP_l-lYS0G9DJAqHCiiYMBqH5JU0RYS0mln6_Cg2OF64BHQx7xutLUm0dQDzJWIo73hYRDZe7_1svzNvc)

In order to reduce the resource requirement of the strong 3xF4 Double Transpose line, we can create an instant by forcefully clipping Triplecast before Despair. This line still yields a 0.6% gain. 

![](https://lh3.googleusercontent.com/20rZrZwJGIX39fRFoJjA2Vklz7DvJZNhSpHB9HqFNc7t9oxAeOXisaJwVFiWOq0o6GPRX4vJMfJjTrerMpJYYhgQmyZeNDbmXof0UPQ1muTiSoCXsFoZyz908enRx46AVUs79Ofp)

More productively, we can utilize the Triple clip to enable an extra F4 that would have been impossible without the clip. 

### 4xF4 Double Transpose w B4 \[N44]

![](https://lh4.googleusercontent.com/CGXnVj9wbuqA30cLlAIUq9uqm0AL9oBAQqBa5HjixjDidDosk3slYZYJCmWy7heZNqrLGkHj15587IF4fogW1yYf99b4p5zdDdHp7WwKgcXaixz5Bz4KB1gyBkbouzTCj62u8KOE)

1 UI1 and 1 UI2 ticks are required. This line is about 0.9% stronger than Standard. It may be useful in a situation where two fillers are available and the appropriate line length is desired. 

**4xF4 Double Transpose instant F3 w B4**

![](https://lh6.googleusercontent.com/Dvjyt3a_N36_7LcaUmuIQrnDBYruh4oZRPU468U5i4PQ8sAvPOSSSGPmRJdzuI2J7W5GEnri2Aimz5ywmtdvlnZD4kj9ADG9ikvpXmhMEXeFvJRu2IMUyb27doLdBYNLvbfXN3wj)

Instant F3 principles also apply. 

**5xF4 Double Transpose w B4 \[N45]**

![](https://lh6.googleusercontent.com/AQKg_3JSZKJ4-9WsNs8kL74-3FNcgzEH6OtgBAtiZWpFT6tRkRP0x85wqenjhxx-nQKJCsuGovY2FzdGVt5uJFiWhpDrjq_HbOJgjKBzLPhrFtwWPNsZ6u5A3VOqvCYlyok4ssbK)

Additional F4 from Ley Lines. Three UI1 ticks are required, or two UI2 ticks are required. 

### 5xF4 Transpose with HF2 \[N36.1]

![](https://lh3.googleusercontent.com/eWulneHxyO5fhuM8r1k5dbmcfUjV00LBnk5KlpfQ2HunoDnDKbcZS6PaLp-vj4ck1hXzpvT1zJkW65rMiUZLww2ZjEnPuCQ41MJuTkWduMhOI8LrGqLMXrxbnRGvAw8FblU3ox0N)

Very slightly worse than 5xF4 Transpose with slow F3, about 1.6% in gain compared to the aforementioned line’s 1.9%. However, HF2’s faster cast time enables any needed MP tick alignment. 

### Double Transpose Paradox AF2 \[N51]

![](https://lh4.googleusercontent.com/xvCbxOn8dayt2o9SBVpJYCSMzGTmIaXEGMczWPAIPwe7UIgWuJWShNpQYtE_Jn3sjZBV5nX6Ywp6kLG2msEw6zpKcyCXn3XGMwb4SY9b2cT8sSGHPgFEQE97exRSbfDsVE-VLulk)

In certain situations, it may be optimal to reach AF2 and stay in AF2 for the remainder of the fire phase. 

![](https://lh3.googleusercontent.com/d4lLpjIv7MSoZyaHVfymzDf9GyAiq54kKZLwtJeGF_j03eUDbqqTt6eh9NEFXiSjTEQleDPs38pMrdiT53HIAFU6l4WmhJMGkn-tM4Hj6nIijlmvfQJbiFrZ7QHlnnsZLrMxKY3S)

F3P variations can occur. 

### Double Transpose Despair \[N46]

![](https://lh5.googleusercontent.com/wPx-eAmTtveg4MJNhmuoogdUT2veOd3PQJp5s1tLIOyEROHE9sSB4X7HMMS5YHsu__8Y-eSf4DymnFD6BmUQEtar3_Ti15z-PI-vuJg-yLgpB6YnI6R3B4Nx-7y3XcV9KBSYAFqo)

A line with a notably short length at the cost of two fillers with a 2.4% gain over Standard. Its variations may come in handy when excess resources are available during a short amount of time. Note that even though we have MP for a F4, it is undesirable to cast it as the gain from this line is from the strong Paradox and AF1 Despair, and using an AF1 F4 would reduce its effectiveness.

**Double Transpose Despair + Standard \[N47]**

![](https://lh3.googleusercontent.com/iZnKZOxyPybv86yZ9yI02S7TDsdg92PRs1yiVg0wGaXxVA_ytHwuiiUPKxO3zZMKnw9SNBspex5kRxwGy-lSHWmXAcnM-Ql67S31Pbvryu1VP6p2GfDVutiD2y42QGVPiSmtFaXf)

This line can be attached to a Standard line with a B4 cast during Double Transpose Despair. 

**Double Transpose Instant Despair \[I17]**

![](https://lh5.googleusercontent.com/qRVJW3bnCMSo_8rMrTAYaFlM017sI36WDSv28InKv4MqqSsdzVWqADJ3nDyVmjO0pqFPvDZUHR1UVoBdCmivJqilQ78V2tomZpNw7ZjiF9Jlo_f3vC8AFJNGv4fGhUPYVtK91e2s)

The Despair can be made instant to further increase its effectiveness.

![](https://lh6.googleusercontent.com/4XWJjMzCnLZzKpK59bk2mHvKdHg_6IgYdyHSJfEsmWN9H_u0LqyU5wcqKdM-NWquXnkb-I0c6x9aY7DyNh2VYlPL4t9zKyZS6SY33DEcr3FhEosksPwDJHdW7kJMAOBLYZk8j0Ex)

Example usage with Triplecast and Manafont. 

**Double Transpose Paradox Despair \[N50]**

![](https://lh3.googleusercontent.com/yx9CyGadPCb2Tvtut_sqZJ4zbppgO_cHea1al1BDktMhE30r1tl3arkEUx6YlZCPh0jQvp8QUKNHQ6NV3pnVXa5grnNBvn7dvAVZZH6VWsoyiOXzMiQ0TM3fqqwh9ihoh5hD1eSi)

The Despair is further buffed by AF2 from the AF Paradox. This line can be useful with certain micro downtimes (discussed later), or during very specific phases. 

## Suboptimal Lines

This section aims to explore non traditional lines that yield a loss. Should a situation force a nonoptimal section of the rotation, commonly during prog, they have the potential to help handle the situation and reduce further loss. In addition, understanding these lines helps keep thought processes calm and structured, allowing more focus on mechanics. Knowing to choose a line that is a 5% loss over one that would have been a 10% loss is still a gain. 

### Standard with clip \[N2]

![](https://lh6.googleusercontent.com/O6yuiK7BVTz8kHHwINf5JndnqS52WafCmYT1XhlEGPCfRk_cBQmVQNGqXzy_L146GBg3l4NNlAgcipVy4X0yFG0FId6goqTR8Yps1lp0bmX96-ifCyJDQHDoEzMxDlhYyiYQHCi6)

If a clip occurs, a 2.2% loss is resulted to the standard line. This also applies to any lost uptime with an amount of time similar to a clip. 

### Standard with 1 less F4 \[N4]

![](https://lh4.googleusercontent.com/x1gz50sjPJVhkXvn-yGhBrZkHNievUTDUH5lcU7DSxvEtbFxB5e21hfmLZDoFh-2MHmvDmIpkztc0gHtDq6kqNhBBq1s6uzPyUuEpJmx9YiCMeMwPkeuzjNgpZ1VR2DKJubrHZZR)

~1.2% less than standard. It is preferable to finish the Despair with a F4 cut short than losing Enochian or not finishing the Despair. 

### Standard with additional F1 \[N5]

![](https://lh5.googleusercontent.com/jZY8rfzvehO7AbkhgPDVeM6zGFVLm22Om4NwgW6GGMulTb7iEtZNvg7rFA9cdMVxb-fo26Jz1b1nq5-umYcgDLaeSUeGL2U7yOos4mWyKwaJASAB1hpXA9bgjoFIrLxaEX_Vj5lx)

About 3% worse than Standard. Generally it’s better to cut a F4 short than it is to extend the fire phase with a F1. 

### 4xF4 \[N10]

![](https://lh5.googleusercontent.com/fIH3myLwIap3TDQpJPOFqHh3rb77z5MtPfKEP6JciXb3prpYrX8FHTUJ9PHBVCuLJNYLMtvnab92TN9WRpEr_5WcMwMfjeVoMl99R5j-MsnBAsLrCWz3sVxtO5beqbKaq74SxL4s)

About 1.8% less than standard but is able to produce a F3P. The Paradox can be shifted to UI as a filler. 

**5xF4 \[N13]**

![](https://lh3.googleusercontent.com/b8YuRaVIoFoWAHzh31ZjRc3moot8d93RW-I1-S4OObqXeQaW1Lm6wPNE5SftksWJI0Nxa6xyzeOg4uXrpAMDTtKvyI0JWZaZFBatRmJAxebxhSFOFAdgMuwNx3StBjHasBT6YDY1)

Requires Ley Lines or Triplecast at high SpS. Essentially the same in PPS as standard.

#  Appendix

## Spellspeed Thresholds 

The table below shows minimum spell speeds at which each sequence is possible. This table can also be found in the [Lines Comparison sheet.](https://docs.google.com/spreadsheets/d/1K57e7zFoCuLDLX2kbCAlRBrJO6LS42ifz7e5DQEPn8E/edit#gid=1999363100) The values are tested at \~100 FPS and \~70 ping, out of instance. This table is meant to serve as a rough reference only and you should test specific sequences for yourself. Your results may vary based on latency and a number of other factors. In addition, for simplicity, SpS are in base 2.5 seconds cast, which could have differing cast times for other base spellspeeds. For example, a 2.46 seconds cast in 2.5 seconds base could mean either a 2.76 seconds cast or a 2.75 seconds cast in base 2.8 seconds. Lastly, you should aim for more spellspeed than what is listed for leniency and other factors.

\* = Instant cast

\# = Circle of Power buff falls off

LL = Ley Lines

## Acknowledgements

Written by Reina Kousaka of team Abysm. You can find me on Discord @ Reina#0001

Lady Yuna’lesca for developing the simulation “Megumin” AI (origin of the name “AI rotation”) which paved the way of discovering many of these lines, and for his contributions to this document. **[You can find Yuna’s AI here. ](https://drive.google.com/drive/u/0/folders/1lyO0FrNkLDVAYGFi2ILh4SUoC96_WGKz)**

Fürst Blumier for the help with math, his general BLM inspirations to me and reviewing this document. 

DiaStarvy also for his help with math. We all wish that unis taught us PPS.

Black Mage players on The Balance: Xenitian, Sylvia Code, Nir Aaereitis, Keiji, Whats Rng, Eksu Plosion, Rika Vanih, and Tsutsumi Tsumi for their support and for reviewing this document. 

Caro Kann for his 5.x [document on non-standard rotation](https://docs.google.com/document/d/1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw), which also built a foundation for high end BLM theorycrafting.

Laqi Thish for the document format and building the foundation for BLM discussion and optimization. 

**Shoutout to the Black Mage channels on the [Balance Discord](https://discord.gg/thebalanceffxiv) and every Black Mage player.** 

## Epilogue

My initial intention with my previous [Transpose lines document](https://docs.google.com/document/d/1PdDAqmjSHJzpD4xrA7SUGtgqaoFoRibSYAsxfyOw9-I/) was simply to create a compilation of Transpose lines as such a thing was absent. I did not anticipate being this deeply involved with Black Mage theorycrafting. However, as I dug through the different forms of rotations, I became intrigued with them and gradually discovered more things about them and about Black Mage. There is a sort of mathematical beauty in seeing an optimal BLM rotation with upgraded lines and perfect alignments of procs, ticks, and mechanics. The base or standard BLM rotation is extremely easy, but evidently, this is only the surface. Beneath the surface lies a hidden but vast arsenal of optimizations to increase BLM’s damage. Mastering the usage of this arsenal takes incredible skill, and it’s a great contrast to the simplistic nature of the base rotation. In an age where job complexity is reducing across the board, I am proud that Black Mage still has much to offer, and I am excited to see what players do to push its limits. 

## Changelog

Feb 14 2022

* First publishing

![](https://lh4.googleusercontent.com/2f2q2lDqfh5LZUVepF-QPPqNEGz23-NwXj3hrAzKb9JnV6CHsmDM892A6JFk6hXEZyMRFkEs7ksouTCwrGEfqEy0zOn0HgnT7f87X1Ixa__NSShPVIA-7IiFm5X62W74khe0oPEu)