---
title: Advanced Non-Standard BLM Guide
---
Last updated: September 19, 2021

[Introduction](#Introduction)

[Basics](#Basics)

[Intermediate](#Intermediate)

[Advanced](#Advanced)

[Appendix](#Appendix)

## Introduction

- - -

Hello. I am Reina, a caster player, and I am standing on the shoulders of giants. This document aims to provide a comprehensive guide on **non-standard rotation** (also known as AI or Hypermeme rotation). There is the assumption you know all of the basics of BLM, including abbreviations and fundamentals. If not, refer to the [BLM Basic Guide](https://guides.xivresources.com/jobs/casters/black-mage/5-x-blm-guide/) before proceeding here. This guide will *not* bring you from 75% to 95% nor will it magically make you a good BLM player. If you are looking to generally improve, work on the fundamentals such as keeping your gcd rolling (ABC: Always Be Casting), ogcd usage, slidecasting, positioning, etc. **The optimizations listed here are meant for players with a great understanding of the fundamentals of BLM’s playstyle and rotation, and are already familiar with executing the rotation well in fights.** If you can maintain a **substantially high uptime** on BLM and are interested in learning alternative and potentially challenging BLM rotations, then I welcome you to read on. This document is written in 3 sections so you don’t need the knowledge of later sections to utilize the former ones. If you have any questions or comments, feel free to contact me on Discord at Reina#0001.

> “From sim numbers, we’ve expected about a 1.5% overall dps increase with non-standard lines in  Shadowbringers. This number is actually quite useless though, and it would be better taken to mean there’s statistical significance that being able to skip B4 and use Transpose is (slightly) better than always using B4 and not using Transpose. Actual dps gain could be higher or lower depending on player skill and the encounter.” - Yuna. 

Special thanks to **Caro Kann and Lady Yuna’lesca** for their [5.X BLM Hypermeme Rotation Guide](https://docs.google.com/document/d/1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw), which a large portion of this document is based on. As an aside, I highly recommend installing the [MP tick trigger](https://docs.google.com/document/d/1vsI2r4064VHJ8WuhItXB7ilbdjEJ26GphZSsjWiyDDU/edit) as it will make tracking MP ticks infinitely easier. In addition, some optimizations listed below are only possible with the MP tick trigger.

# <div align="center">Basics</div>

## General Idea

- - -

The idea behind the optimizations in non standard lines is the elimination of weak spells, B4, F1, and B3, which lower the average potency per second (PPS) of the rotation. We do this by skipping B4 wherever possible and reduce the number of F4s during the fire phase to eliminate the need to cast F1. In addition, we can use Transpose to transition into the ice phase rather than casting a weak B3. These allow the overall PPS of the rotation to increase compared to the standard rotation while also reducing the rotational time. As a result, the fire phase is usually very tight and requires prolonged periods of stillness, which make this rotation much more prone to errors. Thunder usages also diverge from the standard rotation as a result.

Aory made a great [introductory video guide](https://youtu.be/qN0-ciFRrF8) to non standard BLM play. Be sure to check it out! 

## Base Rotation

- - -

### Standard rotation*

![](https://lh6.googleusercontent.com/WUEPln4Kfz5E4hHqOffmuVGRXa7OBrQPYbSxWUfom7YW70t6vN14hqAxcKULIJi40EtQ-5IP4Qrx9RtToO5M0T1jSn04L7Ma3dHUq8ZKatWKK1k57FhPLCdb8fvzQ1Jk2Mu2iXn4=s0)

A reminder of what is referred to as the standard rotation. B3 + B4 with 2 MP ticks into a long fire phase with F1 refresh. **The white space represents filler GCD.** 

\*Rotation refers to a line or lines that can be looped, which is why the standard line can be referred to as a rotation by itself while other lines are strictly referred to as lines. Combinations of non-standard lines are collectively referred to as non-standard rotation.

### Base 4xF4 line

To complete 4 F4s in the fire phase, 2 UI3 ticks are required. A natural MP tick happens every 3 seconds. This is done with 1-2 fillers, represented by the white spaces, that are typically not B4 during UI to gain the needed MP ticks. Due to the need for fillers, Thunder is more strictly used in UI. This is higher in PPS than standard. 

![](https://lh3.googleusercontent.com/10ftF0hUR3KfouefPQyDn-fwj5-3TR-pc6497y0_X_3yj3M3XJEseYE7Q-1jjZ5uij5qG1qVdAB4UO6ipIdJGSNt-3rl_kvpK6aZCoJCxXKNBNT6sQqqZJWMVB-aK4BWdgp88AQP=s0)

If you don’t get an early MP tick, need to refresh Thunder and have Xeno ready, you can use both Xeno and T3 as fillers. The T3 can be a hardcast or a T3 proc (T3P), depending on how much of the dot is left. Overwriting \~4.5 seconds (Sharpcast increases this overwritten time to \~7 seconds) on the dot with a **hardcast** T3 is a loss compared to letting it completely fall off for the whole 4xF4 fire phase. T3P can be used more leniently. If Sharpcast is used for T3 in this line, the T3 should be cast as the last filler during UI if possible. 

![](https://lh6.googleusercontent.com/Iz1Ekg5fPsSnCU1IbCSsevqEjbahvJURuDIAazKzFk8Bjrwh_DaTcEa4UIuHklcInLH2bEdnZ_HZtOe447p70yAUJbLgpCmJ64j9XnnkV285nVADN2cJ-O-27dchvykBxyDzMsAP=s0)

If you get an early tick and need to refresh Thunder, you can skip Xeno and opt for this line. It is important to bank Xeno whenever possible. As a practical aside, it is recommended to continuously queue thunder casts as you finish casting B3, followed by a Xeno queue as the gcd finishes rolling in the event the mana tick doesn’t occur.

![](https://lh6.googleusercontent.com/dS6a2xlU3bxZnBgEATKrZLQ01su6LPEF89oTSSXlbf9HMLLXawHc5fqZ0onMHFqMo0Tf49UMRZrY5Vl_lDj43qzGO1Ggesn36VCQTloCjw3JuKOG6PemDK45R64HVk-foxONOZsO=s0)

If no early tick happens with a decent amount of on the dot left and no T3P is available, using both Xenos as fillers can be considered. If an early tick happens, one Xeno can be banked. 

**For all other scenarios with B3 in the general rotation, cast B4 and go into a standard line (or enter a 3xF4 line, discussed in later sections).** 

#### 5xF4

![](https://lh6.googleusercontent.com/xmkQG31cYpT_E8Iw-HzcPwtLL8oBEumJzfSbEuUavbgii89DYcfjNjow-cj8SaXFxk1eU-_BwQGkcSvkKu3lgArJkaw0tuLQm0RMenLYplaAfRlPs6o2ruxeQx8cvTad88D7DKnU=s0)

Same concept as 4xF4, but with higher spell speed (sps) granting us an additional F4 in the fire phase. This can be done via Ley Lines or with Triple + Swift at high sps. 

### Salvaging a bad 4xF4 line 

If you mistakenly enter a 4xF4 line due to a lack of familiarity with mechanics and require the use of instants during the fire phase, weave Swiftcast or Triplecast and complete the line. 

![](https://lh4.googleusercontent.com/Jv1_RQ1TV91gl_W6ew3FckWDuYJ86HP_0rexiyDI9e7mcWGQbAJUPhWOCIXmkkMnWZt8kPyh7ova6rvuIG1AsHpqrRiW8elXwbePdfpVqQLvv4CFqTppH4izm18kIdlK63I7n5pO=s0)

If neither Swift nor Triple are available, you can cast a F1 during the fire phase to prolong it such as below. 

![](https://lh3.googleusercontent.com/djpbExkrUkY-o2FcP-4rxWR0n7EcmIuWd4X6TU3y2d5wd8nH2KtXTV5lX_sjwXTKLerAVoIrX5TpCb8vkBZbhJDI106CY7QFxyp1ZU8UOM7reQWSJJQtYG7iIML2TNBMIE8880Xv=s0)

Alternatively, drop a F4 and cast 3xF4 instead. This is slightly worse than the former line. If T3P would fall off during AF, it’s generally preferable to drop a F4 than letting the T3 proc drop.

![](https://lh5.googleusercontent.com/O7kw49z840lr26Dq1nyDePwTbRel6s0NZcABOeoMMS-DYhQZeaj_sKLTNIam_3XooArQw3RNJ2JPInfsK643S0Xq-jHbn007Tr4UZZ8ViLuM0_8ZGvVnuI91r-zx38XW-QEVd6aM=s0)

The above 2 lines should only be used as a means to recover from a bad 4xF4 line. Both lines are slightly worse than standard and using them is a decent loss compared to 4xF4. If you have no instants during a bad 4xF4 line, clip the Triple/Swift and learn how you can avoid this next time.

### Base 3xF4 Transpose line

![](https://lh5.googleusercontent.com/FeHVzTc_OE-CfhxAEXb7CyEA2k6y1DVnkG2EsjTR-W3UrqytgUiYs4jIFv3n7MZs5QGVd8GWh6NmoExvXij6oaD5sZ3Z8c5BDlGUENOULRgmGsuhMZldMGCU7Qu_5zGmqgSLxCX5=s0)

To complete 3xF4 + Despair + slow F3, we need 6600 MP. Each UI1 MP tick provides 3200 MP and each Lucid Dreaming tick provides 500 MP. Thus, our goal in the Transposed ice phase is to obtain 2 natural ticks and 1 Lucid tick, which can be done as shown above. The slow casting F3 provides ample time for MP to regen. **The white spaces represent instant gcds.** This is the most commonly used and most important Transpose line. 

![](https://lh5.googleusercontent.com/_ms3f5WU7PjNqIPawRHLxbDy6icRXWsTbLMLtG9PEe7GhuGOU_6alsF4SrxIXtjTySjK9dzkmHj_akdBxyC4VeOxQ67tpKdWoWfVoTnNPZeJIDYd56DUs3q5emYNksjWi516LUKF=s0)

A slow F3 into 3xF4 provides some flexibility in the fire phase as it allows 1 filler GCD to be used should weaving or movement be needed. In addition, Lucid can be weaved in the second instant GCD as long as it provides the 1 Lucid tick needed. 

![](https://lh4.googleusercontent.com/Wqv9Gq4TYdGzAxaMxKV94en45QK0USxDCsx5dReSYVb9aQZGYcAfw8o0BlqA4lG8iVh-t5LhjdvljE4DafRD8Zf8litoo32O14dR6XG7XJ69mF0Y6dEX8rGncYkHp85eR-mDEBE-=s0)

The GCD before Transpose can be any instant GCD, including an instant Despair. Lucid can be weaved earlier in the line to free up weave space during UI or to prevent double weaving under LL. 

#### 4xF4 Transpose

![](https://lh6.googleusercontent.com/Z7rf588gP3ILJvabU_tjxOunJ9MlfdVNRlw9U7raAqhPH-Tbn94xbcxbIep67eXonW2bKbP0RZBAJS3c-AOLcfhq2igvbkGGxA7uimB5WYd43bUZju-nzME90tCEBjdyYcWXCcBz=s0)

An additional filler GCD can be used in the ice phase to allow an additional MP tick and grants us 4xF4 in the fire phase. 3 UI1 MP ticks are required for this line. Note that Lucid is not necessary in this line. This line is stronger than 3xF3 Transpose. 

### Putting it together

A portion of your rotation might look like this with the above lines combined. ![](https://lh6.googleusercontent.com/YDtRoGN_WB9pU7P8qqvb7hkY96rHaf1Y-wiiOP84vgt_RhYhTZZUcUjUqP533LNky58FsZksQM8FPDq0WWkC307xSLKr-PAcnYkFHJGWetoK3TVAVE_knB-khkxRRgf9ol1szT08=s0)

PPS wise, 3xF4 Transpose > 4xF4 > standard 

With tick tracking and very optimal play, we aim to further reduce the number of standard lines and instead cast as many 4xF4 and Transpose lines without B4 as possible. 

# <div align="center">Intermediate</div>

## 4xF4 variations 

- - -

### 3xF4 

![](https://lh6.googleusercontent.com/LJZVanX_bFYEEZBQ0qlZJMw9pD7v7YUL8o20WuphzW80GGQ9JjnPz6iTjSm6OdWL9vesF1i2NoKLIPqS8oTbiBrsRySwscxjbqznoZSVPhiEkb6EF34XoniBSm3qBEz4RQAUFIzI=s0)

A shortened fire phase with only 1 UI3 tick. This line is slightly lower in PPS compared to the standard line, about 0.5% lower. 

The shortness of this line makes its ice phases align much better with Thunder refreshes, and makes it a potential alternative to standard when UI fillers are absent. Due to its alignment with Thunder’s length, it’s easier for 3xF4 to enable non standard lines than it is with standard. **Consider using this line if it enables a 4xF4 line that would otherwise have been suboptimal with standard.** 

![](https://lh4.googleusercontent.com/BTnBWLWeSBwDy7TZ_2yHNfi9fBtGyn18g4eZImv6ghxMianpKF2fNb7--G9Z8DfxHrXpeN7w11mRcrI3Qdi5xgYU1Ny-53iIEkY-FVS6rMuEkJOQsZktldQ-7t2q9DFnWmz8ZvPx=s0)

The total length of 3xF4 followed by a 4xF4 is greater than 30 seconds. If we ignore the MP cost of hardcasted Thunders, 3xF4 followed by 4xF4 can theoretically be looped. 

### Instant B3 w Transpose

Should a situation call for B3 to be instant casted, Transpose can be used to increase its potency. 1 MP tick is required before B3 is cast. Instant casting B3 this way is equal to instant casting a F4 in terms of overall gain to the line’s PPS.

![](https://lh3.googleusercontent.com/ucG8LaVkx9DeQz-LierMExJeUHRS0_bUbXPVx5MvrWU9S1SDZEPpjrbBKM74IMqbEXjWyECpWNsWaJQ1DxYZKkdBqTIqplZEssvqmcnwuhAobpLegyBc10T4z-Xp_yNqOCwXqNC8=s0)

Beware of the MP generation when going for this.

Instant B3 w Transpose can be used to guarantee 2 ticks during UI to enable 4xF4. B3 and Xeno are interchangeable here depending on the first tick. Lucid is assumed unavailable here as it would likely be better to enter a Transpose line instead. 

![](https://lh5.googleusercontent.com/_YmbU_LlLy0ZsV_bLwAoxohm8gWB1NZQAmnXG1YoVOeVfMKRbV81sK3guXiBIozNr28DsxwXb9n3egDVbyoV00L0lX-9By8VW0Q-6drPpL4Xkz2p7PUB3yssmqigHXZjvHEqjUKX=s0)

### 4xF4 w F1

![](https://lh5.googleusercontent.com/P0JxdIFZ00nI6Zngs88p9b7k5gMSFfWz8bN7Kqz9m0rb9hhLbWnbo1juVUI1GncSimQdxyQyCzT6rmq8ILF_j-I5rz50AQj_QswZPlISkG7W2PWLfccvlY-qI7ApDGHf3ne3Q-wM=s0)

As discussed before, this line is useful when salvaging a bad 4xF4 line. However, being effectively the same in PPS as standard, this line has another useful feature: it is a line with a different length, which may make it useful for alignment during certain situations.

## 3xF4 Transpose variations 

- - -

### Base Transpose variations 

#### Dual 3xF4 Transpose 

![](https://lh4.googleusercontent.com/EtjRfMlaOvasvT7efTlAqaOGPJkKkRg_uzh74AlZ-D40TPQq49aKaAsCyo2qORDe8R3gSNVnDSELcASPs_7QwFE_e7R6Yumy1x1i936zJixdUupOzRFhX-NhQ0jVpuyZkmS9Nbji=s0)

Lucid’s duration lasts through a 3xF4 fire phase and can provide an additional tick to allow a consecutive 3xF4 Transpose line.

#### 5xF4 Transpose 

![](https://lh4.googleusercontent.com/gbNRdWiCnHFf2I90ZO0F-_QK2lK3nRQdH3K3GLacN7FlcRym66Tn5ueGq0DZa1qGxFG7Wi9alWW4uwRSCJ1b9FwFem3pQFF3dxYWHmNN2UP589qLy9Q4VnUTSD7jSqpid07O7Zwl=s0)

Same concept as 4xF4 Transpose, but with higher spell speed (sps) that grants us an additional F4 in the fire phase. This can be done via Ley Lines or with Triple + Swift at high spell speeds. 3 MP ticks are required and note the Lucid here is needed.

### Instant F3

The long cast time of the slow F3 can be a detriment to resolving mechanics. By instant casting the F3, this weakness is negated and results in a PPS gain over slow F3. **Transpose with instant cast F3, when compared to a slow F3 that would grant an additional tick and more time in AF for an extra F4, it is generally preferable to choose the line with the slow F3 provided that the instant cast is still used.** 

![](https://lh4.googleusercontent.com/SfuRK0cw2PILDOSXlYP4C0H66qnHSmhA_9xY_iaUG-8z5Ig6YxRNWxT7tHryPiN2yyQ19tX2BtslGjHQ3GTzlIX_IooCeleaepp-mkMaueyFCnM5c8ZLXj7C_c88dg50H1Vks3SH=s0)

2 MP ticks and 1 Lucid tick are still required. Note, since the instant F3 starts the AF timer earlier, at lower sps there is no longer the option of the 1 filler GCD during the fire phase with 3xF4. 

![](https://lh3.googleusercontent.com/pGlOSZ9Qipyzt4UTAM8T0TMq8lVl3LSfamiBlOxJ1cBVn2rOrP6VYxzDeXqFPWNpqKtkZG9hYFp3kjVZCNfv4iaeujLm5asVrQoxG8ubAiCKmV4B_YxAioN1TWJhqXgPubQDiMvF=s0)

Another possible sequence. Note that using both Polyglot stacks requires a good understanding of the fight. 

#### 3xF4 Transpose w Clipped Triple 

![](https://lh4.googleusercontent.com/2sjqHSwcg9Mh3WbnNb4iP-TaHhGQ7iVrrQ_UkDwFdFcz-ehzTJluuAq2vqSDxkhllBObs3TXosFKY3i9T6b1vhRQgApr5NKA0XGIuTFL7GecW_RQUDJuUwK7pYugAKpn2X8hE4sI=s0)

We can forcefully enter a Transpose line by clipping Triple. This line is about the same as a normal 3xF4 Transpose with slow F3 and without instant casts, with Triplecast and the clip’s effects considered. 0.7 seconds is assumed for the clip. Moreover, Transpose lines can lack weave slots for Triple and Swift, and this line acts as a way to mitigate this. 

This line can be used to enable a 5xF4 that would have otherwise been impossible. Note your spell speed when going for this line.

![](https://lh6.googleusercontent.com/IcRfmseO_rFrK1bMwhd8tsrWg4jqqqujLuVrvUvwVEvFgH3cNRh0T71g3pkNWur_6cYsuxu3fvyGAngJwFVoabPHuUrSGdXNV2LLPIy7X3XqeohzblOUFLgOBWd3VazZFXUg3QGW=s0)

### 2xF4 Transpose

Most of the above lines can be done without Lucid into a 2xF4 Transpose line. These lines are generally neutral in PPS to the standard rotation. While not necessarily a potency gain, the short length of these lines make them worthy of consideration when the boss will soon phase or die and a longer fire phase is unviable. 2 MP ticks are required.

![](https://lh4.googleusercontent.com/Lz-Boky6NzIK0zWRUvobLPpa0DGUi4suVWDgp_bjpQFd6myclzRAjMepo1ElbVruJt5mbDZeFSIazut7dhdX6zYZw46fyorLEuCt9SJP7iSyoLwVbvNgVQzFDwJ8SVcrL9cmQe57=s0)

![](https://lh6.googleusercontent.com/6swGEZvfWRBEoll2Yj49LEpmi4SA6ZNs7Y6jxbHESmNJi0HTgYM2hoehOlzMnrVp-EpHxy20aWTgfKuEfEFl94DxXrCEKjQGAlThMNrRyoghL7e67JcDltaPqLDJRz_OauhsQEfS=s0)

Instant F3 principles also apply.

## Early MP ticks and filler skips

- - -

If a MP tick occurs early during UI, one UI filler can be skipped. Skipping UI fillers is important to enabling future Transpose and No B4 lines. The exact timing of tracking early ticks is highly dependent on spell speed and you can calculate the timing of early ticks you need (covered in a later section). Again, be mindful of your spell speed (such as under LL) as it can change how many fillers are needed. A few examples are listed below. 

![](https://lh4.googleusercontent.com/8HJfQvovXZ9rnkr7goEAv4bLqo3fED-d3EFBuqDLn31XBgtLMJhKg2VhD14SgFNV1XeAMeUiumK_FOtuksymoAX5vzA3IlcgdvK7Sf6OE5zl50KyRx7_6C27gipItFYzZAtGMv6s=s0)

If a tick happens after Transpose and before the next GCD, the filler can be skipped to start the slow F3 cast. 

![](https://lh3.googleusercontent.com/9jd06PMU5UrjSIdak_ObBzISbSrxcn2AFLEN3SblQ3DP7_QQCg1bsUUefAt4nxudWWoPOmNcvYBMQn1ZoAroMMabOFfqHcjDTGpr7-LNZtuIk4Glp8dAYPtUq9u8lXHcyiBOh3JM=s0)

Same principle, but the tick requirement is stricter than the prior line and requires the tick to happen almost right after Transpose. Likely not applicable at high spell speed. 

![](https://lh3.googleusercontent.com/O15snPvYQvEE3BuLMoOpg2VQsZfK8VGNLtWxwvBwYI56iVpEvRuxrT6eXNV6fDGdwTeqCz6GqqBhXnKIzxhA7HHpHvUP0AW-fUJgtI6wOeoVNlgInRMEr7Y-bK4M3tjnIDFVizGH=s0)

No filler 3xF4. Requires just 1 tick between B3 and F3. 

## Notes on Thunder

- - -

You may have noticed all Thunder spells as UI fillers listed in Transpose lines above are procs. Due to the requirement of 400 MP for a T3 hardcast, we must obtain either a natural tick or a Lucid tick before hardcasting. While this is possible, it is inadvisable to do so without tracking the MP tick as the Lucid tick is not guaranteed. Some lines do generate enough MP for a hard Thunder refresh during UI to be used as a filler, such as lines that use 1 filler before the hardcasted Thunder. 

![](https://lh6.googleusercontent.com/ULXN4MmQfNFwE19Xe5BrCMtxwAqHuzazPOkenHUjB47pq-wJVAE8uzuHRkFULcmuFvTotLbfbX5WtE3giL4JwxWHFofQKL0pQMOhpL_hDsCe6iI9dQVwIRqrQ6Ml7AZr7g9WlW9e=s0)

Typically, hard Thunder refreshes are done in B3 lines such as below. 

![](https://lh6.googleusercontent.com/h9re6QB7Z2iF5TgGVH1tN9oG5-t2O3QAVVYfmURI76QiAA7HkUosqUMdexnMxPHXWHPbwDxsvVvw7LCYxtpLpiP_1pZ9qay_l9dRZc7f34SWsJkyYQ7AarYRlXpAkVhdHATBOL7p=s0)

In terms of overwriting the dot, it is better to drop the dot for a prolonged period of time than it is to overwrite it with a hard refresh. For reference, overwriting 1 tick (3 seconds) of the dot with a hardcast refresh is equal to dropping the dot for \~20 seconds. T3 procs can be used more liberally to enable certain lines as long as only a few ticks of the dot is being overwritten. Sharpcast increases the amount of time you can overwrite T3 by about \~3 seconds with a hardcast.

Sharpcast should be used on T3 whenever possible, as we never cast F1 ideally. If you end up doing a line with F1, it is preferable to use it in the “Sharp any” regime for the duration of the line, rather than force it onto F1 or T3. 

Thunder should be used as UI filler whenever possible. At ~2k sps, a Sharped T3P without additional procs will have its proc running out right after Despair in 4xF4. I advise you to check these lines for yourself as these sps thresholds are only an estimation and are subject to latency variations between players.

![](https://lh6.googleusercontent.com/mkDr50kTmXEyA306ndAn41QYqaO8lPh6980eYNsIEDR85trUgNIJvWPbUnMEKyno8CLth3R4EbuX9r2jMQL9y-L1iK1thClWtqoTU6ja1mO1ccotZV0Qi7NKNQvzSE1yF9fLT7Fq=s0)

Similarly, a Sharped T3P without additional procs in a 3xF4 Transpose line will also have its proc running out after Despair. (~1900 sps)

![](https://lh4.googleusercontent.com/ITVZSLLltQzh1xDp4SzKZeZf9tms7hAtmnu4bvm1jY1BNgIOzOZ8VlgkZknRpIhS6XWNwa_MKkou7Nv1fsYCLucyVnPc7HhQ-NuW1S-bhifJcW30uQ8obrE3PwDCoqkmMMylwPWZ=s0)

A Sharped T3 hardcast without additional procs will have its proc fall off after Despair in a 4xF4 Transpose line. (~1900 sps)

![](https://lh3.googleusercontent.com/M-U5c7lPFhPAwBgtpFASXUhag6aUEbSU6GivKuKujjODMaxbZPlUSzh9w3P6atiYgs9wM0rhTtNMwssH3MkeXmXcJ5wTTRz8_m_6PUeFOth-myhc0_yGa0L5YVTQUzibrBE3TThV=s0)

Even though the last T3P happens before UI, it can still serve its purpose as an instant cast filler. Use the T3P to enter a Transpose line or use Swift to instant cast a Transposed B3 for an additional tick. 

At higher sps, this T3P can be used as an UI filler after B3. For example: 

![](https://lh3.googleusercontent.com/6Kr-g8kPQWaFsbUwUfdBc5tHFZ_A1p8JDwIl7K1ki5cNMqCtm0huyE7zTsZBbAmJw7JCl2HQv9WC53Ixz_o1SP3F5LsJ89DGwrXQcFW_wViyHXZjt40cQOFu7vng4UK-I-auW6Vf=s0)

Using T3P as UI filler this way has different sps thresholds for different lines. In this example, ~2900 sps is required. 

At ~2.4k sps, a Sharped T3 hardcast without additional procs in a 4xF4 line will have its proc running out after B3, also making it a suitable UI filler. 

![](https://lh6.googleusercontent.com/6tMBhPAFCTJWDM2kbfNlVXx9rmDAfpAIomPe7YDAZTP0dMJuNJIk2BB-V4A-u4VjXk5YOSGIbYoSuJOs-ylySphzWxKxT6Qn0tzDoPkJXH6X6WkJ8bltYedZkLk8-H-qhpczE4f5=s0)

## Notes on Spell Speed

- - -

Unless specified, the lines in this document are tested at 2k sps. To perform the 4xF4 Despair line, a hard minimum of \~1450sps is virtually required and \~1800-1900 sps is required for 5xF4 with LL. Some lines might not be applicable at (much) higher spell speeds and additional fillers might be needed at extremely high spell speeds. The higher your spell speed, the less luck you will have with mana ticks, and the noticeably less available and less effective some lines, especially Transpose lines, will become. 

This principle also applies to Ley Lines. While LL can enable additional F4s in the fire phase, it also changes how MP ticks interact with fillers in UI. Thus, beware of MP ticks during UI when LL is active. 

![](https://lh4.googleusercontent.com/-lykootp8kXUdSlN_NGsXBy-PP5hE-fFdJIbl2V5nY9nsBgmF00-Pm3IR5chkmoIWrRrmyJz1MJX1wsiiPF8BS8PofmxLNKOWajOQHNtq5oV7mfhXj1Fcd-C8zEQ8yx5Mp2PoX2f=s0)

At high sps under LL, you may only obtain 1 tick even with 2 instant cast fillers. Be mindful of this and either substitute a filler with B4, or cast an additional filler. 

If you find yourself with a bad tick in a Transpose line during LL and won’t get a second MP tick, cast B4 to enter 4xF4 or 5xF4 with F1. These lines are neutral in PPS to the standard rotation and should only serve as an insurance against bad ticks under LL. If LL’s duration is long enough, it is preferable to cast 5xF4 without F1 instead in the fire phase. Casting B4 this way into 3xF4 is a loss. 

![](https://lh3.googleusercontent.com/alp43RyJtZUL3zPjiliR796vx2UvubR4hNg66StbZMRmBnE3yQFeTCk92xfovyBC0FmR9uCR0qaqsNz2c_rpqH5a2wOsTJVt9sGi2O27A0A17fT5yYjrHipT9Mec9LpJYWwa1dLP=s0)

![](https://lh3.googleusercontent.com/sam1wY6iZTgdP4EPlcSYWQIuIvNq9X7AplJIvLNIaOLig9eHebZJ2GP3C9Q9HDOYOphHyzAHVxEN6l7fUHvH6M8KFsBZx24_sJfS7m0hl0zLMpFsBuPCCwOVJCjPGR7fsdfefJmw=s0)

## Comparing Ice/Fire Lines

- - -

One question that may have crossed your mind by now is, “How do I choose between all of these options?” The goal of this section is not to give you clear cut rules to follow, but to convey some critical concepts that will help you reach a conclusion on your own.

[This spreadsheet details the PPS of various lines and their relativity to each other.](https://docs.google.com/spreadsheets/d/1IGxPxJmSZXqYFqQur5ORQ_RTrh3ylRNHzA-CXPZBsyE/) It also includes the math behind everything in this document. You can also find some other helpful comparisons pinned in the #blm_encounter channel in The Balance.

These PPS calculations are made under the following conditions:

1. UI filler damage is NOT included. This means T3/T3P/Xeno potencies as well as cast times are not included. This also means the gain/loss of a line in the overall rotation will be much lower relative to other lines than what is listed here.
2. A caster tax of 0.12 second is applied to all hardcasted spells that have a cast time >= the base recast time. 
3. Swiftcast and Triplecast are used on the longest spells when applicable (F3, Despair, etc). Swift and Triple have an unequal effect on each line’s PPS due to varying line lengths. As such, the PPS and relative potencies of lines with Swift and Triple have been adjusted to account for this effect. Lines utilizing them have potencies calculated relative to a standard line with Swift/Triple also used. For example, 3xF4 Transpose with instant F3 is compared to standard with instant Despair. 

**The decision of which line to enter is often situational as it is more dependent on mechanics, alignments, procs, and resources, rather than a simple potency comparison.**

## Fight specific strategies 

- - -

All of the optimizations listed here require as much stillness as possible, and sometimes control over mechanics resolution. Thus, it would be easier to execute these optimizations in a static environment with cooperative teammates. Conversely, The standard rotation gains more prevalence in pugs. Strategizing around fight mechanics and timelines to reduce movement and instant cast usage is a key part of BLM optimizations’ effectiveness and must not be ignored. 

To get started, you can check the [5.4 BLM raid guide](https://docs.google.com/document/d/1iUzV5tDCEquPvzwJcLp3XQM92T8EIfDNrh7PWYUj6nI). There are many more optimizations with strategies that can be done than what is written here. As a generic tip, for every instant spent on a mechanic, think about how to eliminate its need. And for every movement required, think about how it can either be eliminated or done effectively. Be proactive when creating your own alterations of strats to conserve resources. 

For fights with transitions and downtimes, aligning with boss jumps should also be a consideration. Ideally, we want to end on a completed fire phase with the last cast being an instant. As an example, the first line is preferred over the second line.

![](https://lh3.googleusercontent.com/yPAOVI3hrVWp7tZtK9GwVKrHrKgq-Sfu-QefoRvx1Uw5klZSCqzIW8Y-tmq_AvAiCZ9WICseo0DWGPfGuAa0EzIL9DSrQsYGBlz3x0zms5kK0whF7ygXbRJw101OZD0lQnUh38rV=s0)

![](https://lh4.googleusercontent.com/-GttJ8NmeuxFQNNt4MGoyJfcLj1hB1uzs0DYzTgsTz0JyyV-bUBwpxSaBN81R6LlgmJ1yCsETgnxtz4atxVFicjFgqU78aTreZW4MHYpV8efTZHNWdJOL2nm1BvC_88TXwGBNlBT=s0)

TLDR fight strats are very important and an integral part of BLM opti, and adjust lines accordingly before boss phases or dies

# <div align="center">Advanced</div>

### <div align="center">This section requires the [MP tick trigger](https://docs.google.com/document/d/1vsI2r4064VHJ8WuhItXB7ilbdjEJ26GphZSsjWiyDDU/)</div>

## Opener Sequence 

- - -

With the ability to track MP ticks as well as being able to do the countdown, we have far more control over the beginning of each fight. We can eliminate unnecessary fillers during UI and create stronger openers. A prolonged opener phase also eliminates some variance and provides consistency to what we aim to do.

#### Extended mod JP opener

![](https://lh5.googleusercontent.com/o2KRcp9b_8j9bAk09_l2m0iunYzBNQq1l3MxF_rgVn42ZBm2ZdAmb9eosuiIl0OqNw3xifgiYfM6hmJv9wwLKY9pCLrVIiLklqJU_jd8koxN5F8WY1yVEdO209TqJZnkSafuLXKn=s0)

Eliminating the need for B4 in the first UI by a guaranteed tick to allow the following 4xF4. 

#### Extended JP opener (~2k sps)

![](https://lh4.googleusercontent.com/ipNk-gWz14c7EskH3DZddhuH3b8aZShzfE_SPKNhZsK4mYO71AMXgwR9YwwUndsKwGuNGI4C4Sy6w2pfaZw2ivvC4br5F2PWizvZTEHu7Sg5pqd1b5itI6z9Mxe9CwXXTittU08E=s0)

Same principle. Even though Manafont is used to cast just a Despair, the total number of F4s is equal to the previous opener. 

#### 10xF4 opener 

![](https://lh6.googleusercontent.com/-dU81M_VlUFys2S4z4TB8DpqSsGhurm5zNnJ82Cba37BS5USQPDA6vTxADzDDogq2EH289Y3XWKGNE-gO1C6axygsMJPDvOGfQKF_C2nd_ITdnlamV0kQ79AlGEm1-ButbCxBAyr=s0)

Requires ~2.3k sps or higher. 

#### Dual Transpose opener

![](https://lh5.googleusercontent.com/GgcIcYmaONS_eW1L6UGapaRofPM0fjZy_77EqxxYRy-oQyNiUio_DnovlQl3pblkMVF7qeIHmv3vfRQlJBs1psA79nzxYyse5euDA7qK2DkjZ7t95rHx9Sig2F2RUOsOPzxNPgMN=s0)Less effective at higher sps and ping due to double weaving under LL. 

\---

Of course, we can do far better than just a single line after the opener. With precise MP tick timing, we can plan out a prolonged period of casts in the opener, as long as 1-2 minutes or even longer. 

#### Example mod JP opener dummy sequence

Sequence: <https://xivanalysis.com/fflogs/2rDpT3GHnBL14Pbm/2/1> 2066 sps, ~2:20 minutes. Note the last few fire lines rely on a late or no T3 proc from the 4th T3. 

#### Example E11S phase 1 sequence

Sequence: <https://xivanalysis.com/fflogs/BRDckdwWyzr3qYM2/18/1>  30 F4s + 9 Despairs, 2030 sps. 

The first Transpose and F3 can be timed to instant cast the F3 (or maybe a slow F3 into 4xF4), which is a slight gain over slow casting it. However, doing so would make aligning later ticks harder, which is why I opted for this. In the end, with a specific phase timing like E11S P1, the exact lines don’t matter as much as the overall number of casts within the same spell speed. Do note that this sequence also likely requires a static setting to accomplish. 

\---

It’s possible for opener sequences to be even longer than the couple I have shown. The limitation to how long a dummy opener sequence can be planned comes from the variance in T3 procs. The exact tick timing and sequence optimal not only depends on the fight’s mechanics and timeline, but also on the individual player’s spell speed and ping. It’s up to you to figure out what is possible and optimal.

### Opener sequence branching

When planning an opener sequence, sometimes the amount of time between T3 refreshes is longer than the T3P timer. If a tick happens early enough and no additional ticks happen, you may have to choose between dropping the proc or deviating into a sequence branch. Which one is preferable depends on the fight and on your goals. Similarly, randomness in mechanics may also force a deviance. To factor these random elements, you may want to plan different branches in the sequence in case they happen.

#### Example E11S phase 1 sequence branch (principle holds but sequence needs work)

Sequence: <https://xivanalysis.com/fflogs/2y8nrJPXK7p6AW9w/15/2> 

If a T3 procs within the first 2 ticks after the second T3P and no additional procs occur, it will run out before the expected ice phase. Anticipating this, we can branch into the above sequence instead. Note that this is merely an example, and not necessarily actually a gain in practice. When spreadsheeting the opening sequence, there may be multiple branches needed due to the varying occurrence of T3 procs.

Update: ironically I don’t remember what it was about this sequence that needed adjustment. Take it as a reference only, and the principle still holds true. 

## Tracking filler skips

- - -

Earlier, we mentioned UI fillers can be skipped if an early tick happens. Extending on this concept, based on when the next tick will happen in relation to our rotation, we can calculate precisely whether we can skip a filler or not. To do this, we need a point of reference in our rotation. This point of reference of the ticker can be “when B3 starts casting” or “when the first instant is cast”, etc. We can use these calculations and calculate the probability of a filler skip in each line. 

Cast confirmation, a key mechanic of the game, does not happen at the end of the cast, but rather ~0.5 seconds before the cast is done. This is the same as the slidecast window. This means B3 and F3 will transition to the opposite element not at the end of their casts, but 0.5 seconds before. 

Tracking MP ticks is highly sps and ping dependent. You should do calculations for your own set and test their consistency. [You can find a few examples of these calculations here.](https://docs.google.com/document/d/1ZIDcUAtCpTBIleuKGK1BebgLdcoEfBZQlvaeqaAQ_9k/edit?usp=sharing) I aimed to show the thought process with these examples and what I have done is not the only methodology. The key takeaway of this section is that it is possible to know precisely whether or not a filler skip is possible, as well as knowing the probability of filler skip in each line. 

## Utilizing Micro and Frozen Downtimes

- - -

A micro downtime refers to **any actionable downtime where 2-3 Umbral Souls cannot be completed.** Frozen downtime refers to unactionable downtimes where MP is still regenerated without dropping Enochian. Examples include short downtimes in E6S, Basic and Intermediate Relativities in E12S, and forced march mechanics. Commonly, a Sharp’d F1 is used to prolong the fire phase, or the player enters ice phase with B4 and other fillers prior to the downtime. While full uptime is kept with these strategies, they miss the potential of a gain. **Instead, micro and frozen downtimes should be viewed as an opportunity for MP to regenerate, thus enabling stronger lines.** 

We start by finishing the fire phase before the boss is untargetable. The simplest way to utilize micro downtimes is by ending with a B3 and let MP naturally regenerate instead of spending valuable filler instants. T3 can still be applied in these lines if needed. 

![](https://lh4.googleusercontent.com/GOU5ckuuz2rMoVqxFDjt6O2_XQ09GKchQ6WK7OrOX6o8Jjg7JopoVoq8IDDnhgLkLPs-3RZRBb8GX45GBIDpBraC5noiDT6gvsaoQjka3cJSHlvSVikwwhcN9CYdUZNrFA_Fmggs=s0)

We can do better than this with Transpose lines. Simply use Transpose and we basically get a free UI phase without spending any fillers. 

![](https://lh6.googleusercontent.com/Kb46Mw8il7_TjWTuW_7jjmQe1WPWjnNuHf_uqx1aE7AytZ_sElcXWdrI65PSRALkSU__URmhgyegEpIEUnqBcDn-oOBCcEWJlDViRKdpf1qz7vMzWEUT6RneZI574DVrmYJ7wuAb=s0)

The Xeno represents any last hitting instant cast, as ideally we want to finish on an instant. 

In scenarios where 2-3 Umbral Souls can be cast, the reopener should generally be a normal F3 into a 4-6 F4s fire phase. If casting 1-2 Umbral Souls would cause clipping, then it is likely better to do a UI1 or UI2 continuation line instead. 

### Double Transpose into F1

![](https://lh5.googleusercontent.com/fhGT06BYO6iXnq8svI6sXoahA3ByDiQanEQqVbf7D2pRQnTHO90M5MMksxFvuWVIhUEWUzY0S44vBkGzdu33gttxDuqoVfc77vBbGKtNGzNK9DLqVC6Hloq8RiGFeLisGkST7nFx=s0)

Requires 2 UI1 ticks and 2 Lucid ticks, or 3 UI1 ticks. The latter, 3 UI1 ticks, grants an additional F4 and thus an even stronger form of this line. An interesting line that is not so practical in the regular rotation. Around ~0.5% stronger than 4xF4 Transpose, the line this line would likely substitute. 

![](https://lh4.googleusercontent.com/3SA2Ksf2-namfQ0PcJn0n85NFN3C16yNExWILEZoHOBC9S-G78FeSV_UC1sboZM9hknBpBr3ix-oHHIdSuhNu7p51qrzG9T2ZIhvIo-vDSrl2752IhkQEokeEh7_zuolK3fD-OQX=s0)

If the first F1 yields a F3P, cast the F3P into 3xF4. This F3 proc is the reason why this line is worthy of consideration. Sharpcast can be used to ensure the proc. This F3P into 3-4 F4 casts is true for any variation of this line. 

### Transpose F1 continuation 

![](https://lh4.googleusercontent.com/jjFgRfcXv3uMRADL-tQ2ruTSIQZ79eOvDm1KRNf_4PiAA0aL2OkMO93mo4Vhe3_4CEYCQjg8rLEVp1d2kiwmJNBGbXu6Wr5ENnrH9FU7mUppzpzFXC0bOeRO8meMO3N-T2UBS4Vg=s0)

![](https://lh6.googleusercontent.com/eRef9RZZ_akfnYlhYmvPqwwWaWnuuXveIw3KAwCd_vCn7OdPdUz90zH13J92w5s2GJUbud5TovyrXaVMAqNfaFCuyxjgzqbrhz-PFK3b-igHDZm0h_UeCnnXH7SHHwCgzQz2db9S=s0)

Instead of using instants as fillers, we align the filler UI phase with micro downtimes to generate its needed MP. The more MP is generated, the more effective this line becomes. For example, if 1 Umbral Soul can be used or if 3 UI1 ticks can be obtained, we instead have the following line: 

![](https://lh6.googleusercontent.com/3DWsRDDjm3d-t7phzSAAcuGjcHXUXQgkwLw26zTQ4p9HTUcoce_c-N6kR7ROsLIosFvIwjGaqqAQWgYMqzCP8q0-P9tBXw12sjvqiHfasGG7HTvQWhh8eRBNaSSarO6aHObpbTBD=s0)

1 UI1 and 1 UI2 ticks are assumed. If the first F1 procs, use the F3P and cast 3xF4. This line with 3 F4 casts is about 1.7% stronger than slow F3 into 4xF4. 

[There are more variations of this line](https://docs.google.com/document/d/17SlCNw0xbIzBJbzN6E65GoZrmxLHQ1rkZgkb6q_-Hjk/edit?usp=sharing) depending on the exact amount of mana generated and on the timing and type of the downtime. The principle is still the same. If clipping the Transpose is required then whether or not this is a gain over slow F3 would depend on the scenario. 

## Additional niche lines

- - -

### Standard w instant F3 refresh

Forgoes 1 F4 by spending an UH on the F3 refresh. Eliminates the weak F1 with a stronger F3 cast instead. Instant casting the F3 refresh this way is about 0.5% stronger than using the instant on Despair, or about 0.3% stronger with Triple’d instants. This gain becomes more substantial if the instant cast is used on F1.![](https://lh4.googleusercontent.com/Lh_QI7bTW-NdjsBXmqfYQBTNihyf-uIj6S5UO_wiVUBc4LZYwmGXuSAxkLA3nVLqOwEAq8PT2PGvW78WgsG9ZBFJBtTpxF_GYCIIGJWhlSFkbkYJDZ2J2ZmFDEuewCpAaSZs2oOC=s0)

![](https://lh3.googleusercontent.com/A9m2Q2d52ZfLNzjBPat-1rTXkREKGlS2vja1iRXG1K4bvKnkmJRdY5N2SltXsMNI4cINlBXsdXb7-NOMdMnZKPC8euVI3hG2OoWHy5buvFso9o_3nd_29CNyiuShYEGTfBOh_u2K=s0)

### 5xF4 w B4 and Lucid

Under LL, if no second filler is available during UI and only 1 MP tick can be obtained, Lucid can be used with B4 to enable 5xF4. This line is better than the alternative, 4xF4 w B4, but it is not a gain over standard.

![](https://lh3.googleusercontent.com/xf3dzhLP8yNNXqkZ0WTEm7FLCb30UH0fZ-6LjFeoYowwWwZ5qlNvCRgXnWOusWqsUidNI_yvdOGCbsstr03u6kIS4RsDuD83wj9VurBUdF6CT3k7kvfd7_jRwyzUkH6t5lPh783N=s0)

### 4xF4 w 1 filler and Lucid

Lucid can be used to increase the chance of enabling 4xF4 with a single UI3 tick. 2 Lucid ticks are required along with 1 UI3 tick for 4xF4. Since we are aiming to obtain 2 Lucid ticks, it is recommended to weave Lucid earlier in the line to increase the chance of obtaining both ticks. The filler cannot be a MP costing spell, aka hardcasted T3. 

![](https://lh6.googleusercontent.com/0-wuyaQp-39MsQnkJKcfNNUsOAppLKU59EPU0UstYalFWrCIn-JWdzKCIHfrpBn0LGOMm_F5LwdRG6EG7Ha-BZIoDAAnuZUu6FuKn27pT1fhXKWOG3IAXjZOWATeFqV_Ozh52LpT=s0)

### Freeze over B3

There are 2 benefits of transitioning with Freeze over B3. 1. Freeze’s lower cast time eliminates the amount of clip from a fast B3, which could be clutch for a weaved Sharp into T3P. 2. Freeze’s lower cast time allows a longer UI, which could allow for additional alignment with MP ticks. 4xF4 w Freeze is 1% worse than standard in PPS, and becomes equal to standard in PPS if a ~0.3 seconds clip happens with B3. Only do this if you really know what you are doing.

![](https://lh6.googleusercontent.com/onnT1Mxptuxokw_ed6L1J9P6iLwW3zNvkTJU5dLkpbodu_xHqRFIf0JCnwplkXnk0q_mNZ-bjRYO2TSz0CtT5RsPuBkuVK85SiL0iE57nrWJxsv_454qM8RK6GdGh1Q73i3PvbCf=s0)

### Double Transpose w B4

![](https://lh4.googleusercontent.com/_WaKUZiDX-F8gF6oqQQsQJxujOeaeCKJoEjhrTJ76S_UdWO44HRpQY00yZC8yywtmojUOXNPajtGNzOGM_8smfeZbDhpi-Y8oH4tM_kWyKUMd02pRG5BQOKbaujqaBw59MKgmSKc=s0)

A niche line that requires a tick within ~2 seconds after the first Transpose (sps dependent). The second Transpose should be used after the second MP tick. This line is best applied when T3P would fall off before UI with 1 Xeno available. This line is slightly lower in PPS To standard. 

### Double Transpose into F1 w B4

![](https://lh6.googleusercontent.com/IBCT_ioRtBGwZ7XKzSfeycmDg1WGawNa6b2127q6SgnPFACSB0bh5RchnjfBOt8bLsCpVbIt55POPCUOd9T2bKXeTMi4wI_xLCbxBhuqAO5I8hZYNwh0NFFjGmrAChElXJX2WOox=s0)

![](https://lh4.googleusercontent.com/gEOf1yzxVViTbS56m0UJBeylbtlSN-lPn4JOV3wHtzGoeTlrIDXJncUYj6b61Xkrg5n2-M63mWRnl8ajBKC6inBvfuYmJH8PcLsrvg3F3bmprPSMTeeAlMeqXgzURKqHZI8kBiKK=s0)

This line is weaker than 4xF4 Transpose (but stronger than 4xF4) and thus completely useless (or almost, maybe a specific phase timing could benefit from this). I’ve decided to include this line in this document to show its absurdity. If the second F1 procs, use it as a filler to extend AF and allow an additional F4. 

# <div align="center">Appendix</div>

## Acknowledgements

- - -

Written by Reina Kousaka of Leviathan. You can find me on Discord @ Reina#0001

Caro Kann of Exodus of Primal of Earth for his [document on non-standard rotation](https://docs.google.com/document/d/1SBU4HpqBenHAXFr6V-gwAKggkfBgJ2IR9FEbMtT3YRw), which this document is based on. CaroKann#1234 on discord.

Lady Yuna’lesca for developing the simulation “Megumin” AI (origin of the name “AI rotation”) which paved the way of discovering these lines, and for his contributions to this document. 

Fürst Blumier for the help with math, his general BLM inspirations to me and reviewing the Transpose document. 

Laqi Thish for the document format and building the foundation for BLM discussion and optimization. 

A Tasty Strawberry for writing the first half of the lines comparison sections and also for his feedback on the Transpose document.

And Keiji for listening to my caster theorycrafting rants and preventing me from falling into the BLM madness

Shoutout to the Black Mage channels on the [Balance Discord](https://discord.gg/thebalanceffxiv) and every BLM player. 

## Epilogue

- - -

Originally, I wasn’t planning on writing this document as it’s  almost 5.55 and 6.0 changes are around the corner. If I happened to play Black Mage back in 5.3 as much as I do now and had the inspiration to dive deeply into the theorycrafting, I would have chosen to publish this document a year earlier. My initial intention with my previous Transpose lines document was simply to create a compilation of Transpose lines as such a thing was absent. However, as I dug through the different forms of rotations, I became intrigued with them and gradually discovered more things about them and about Black Mage. There is a sort of mathematical beauty in seeing an optimal BLM rotation with upgraded lines and perfect alignment of procs, ticks, and mechanics. The base or standard BLM rotation is extremely easy, but evidently, this is only the surface. Beneath the surface lies a hidden but vast arsenal of optimizations to increase BLM’s damage. Mastering the usage of this arsenal takes incredible skill, and it’s a great contrast to the simplistic nature of the base rotation. If BLM doesn’t get much changed in 6.0 and most of what is listed in this document remains relevant, then with updates, it will continue to serve its purpose. If BLM does get enough change to cause the obsolescence of Transpose and/or no B4 optimizations, then let this be a record of what was once possible. 

![](https://i.imgur.com/u7KQj3X.png)

## Changelog

- - -

Early May 2021

* Draft doc done

May 2021

* Various changes and updates. Formatting, additional info, error fixing, etc

June 27 2021

* Minor edits, links, etc

August 15 2021

* Added an additional opener sequence and opener sequence branching section

August 24 2021

* Minor phrasing edits

August 29 2021

* Drafted the suboptimal lines section

September 11 2021

* Double checked math, final edits and drafted the filler skip chances section

September 12 2021

* Added the standard w instant F3 refresh line