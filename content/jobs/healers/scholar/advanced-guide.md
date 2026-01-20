---
title: Advanced Guide
card_header_image: /img/jobs/sch/advanced.png
authors:
  - Balance-SCH-Staff
patch: "6.3"
lastmod: 2023-01-19T16:46:57.454Z
changelog:
  - date: 2021-11-15T20:47:45.649Z
    message: Added page
  - date: 2023-01-19T16:46:58.029Z
    message: Patch bump 6.3
---
## In-depth Fairy Mechanics

**Healing output**

The healing output of SCH's fairy is lower than what its potencies suggest when compared to the SCH themselves. This phenomenon can also be seen with other pet entities like SMN's various summons and MCH's Automaton Queen. It is commonly dubbed "pet potency" by the community. However, despite this label the potencies themselves are not the cause of the discrepancy, at least in the case of SCH's fairy. Rather, the fairy differs in two key ways from the SCH:

1. Lower job modifier for MND
2. Only gains MND from the SCH's gear.

Each job in the game has hidden stats called job modifiers which are assigned to each of the six attributes (main stats). These determine the job's base attributes and base weapon damage. For example, SCH has a job modifier of 115 for MND. The default base attribute value at level 100 is 440, so SCH's base MND at level 100 is calculated as:
`floor(115 * 440 / 100) = 506.`
Your base MND may different from this by 1-3 points. This will be from racial stat differences. Similarly, SCH's base weapon damage for MND-based actions is:
`floor(115 * 440 / 1000) = 50,`
although this is a hidden value. Contrary to the SCH, the fairy has a job modifier of 100 for MND, giving it 440 base MND and 44 base WD. The effect this has on output relative to the SCH depends on how much MND and WD the SCH has. To give a rough idea, at current BiS the fairy has around 95% of the output of the SCH per potency if the SCH is alone in the party. The point on the SCH being alone is relevant because of the second difference of the fairy.

The fairy only gains MND from SCH's gear meaning its total MND is its 440 base MND plus the MND from the SCH's gear. This is updated live and does not depend on summon timing. This means the fairy does not gain MND from pots or from party role bonus. This is why the fairy's output per potency relative to the SCH is actually closer to 90% when in a party with full role bonus.\
\
**Embrace targeting**

The fairy's Embrace targets are primarily determined by HP. Upon summoning, the fairy will first look for a party member whose HP is *below* 20% and use Embrace on them if one exists. Then it will look for a party member whose HP is below 40% and use Embrace on them. It will repeat this process for the following five HP thresholds before looping back to 20%:
20% -> 40% -> 60% -> 80% -> 99.9% -> 20% -> ...
Notably, the fairy does not attempt to use Embrace if every party member is above 99.9% HP even if HP is missing.

If multiple party members satisfy an HP threshold then the closest party member to the fairy is *generally* prioritised. A party member who is below 20% HP and 3y away from the fairy will always be prioritised over a party member who is below 20% HP and 15y away from the fairy. However, when the distance difference between the party members is less extreme there are some deviations from the proximity priority which we currently do not understand. This is still an area of research.

All of this information was made possible thanks to the efforts of **Himenyan Biwaco** and their collaborators. You may find more in-depth observations of Embrace targeting behaviour and Hime's testing methodology in their video here:
<https://youtu.be/f-H9V9DICLw>
Hime's image summarises their main findings on Embrace targeting behaviour.