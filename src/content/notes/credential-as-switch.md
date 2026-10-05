---
title: "When a credential is the feature switch, whoever handles secrets decides what ships"
standfirst: "Gating a new capability on whether its API key is present is tidy: no flag, no ceremony, one variable and it's on. But it quietly moves the decision to adopt from the person accountable for it to whoever is copying environment files that day."
date: 2026-10-05
topic: "Security"
draft: false
---

> "It only turns on if the key is set, so it's safe to merge."

I have approved pull requests on the strength of that sentence, and most of the time it was true. The pattern behind it is attractive. A new integration ships dark. The code checks whether its credential exists, and if it doesn't, the old behaviour runs as before. Nobody has to build a flag system or argue about a rollout plan. Adoption becomes a one-variable change.

That last property is the selling point, and it is also the risk. A one-variable change is easy to make on purpose and just as easy to make by accident.

Think about where credentials actually travel in a team. They get copied from one environment to the next so a staging bug can be reproduced. They get pasted into a shared vault entry because someone needed them for a demo. They get added to a deployment template "for later", while someone is fixing something else entirely. None of those people is deciding to adopt the feature. Every one of them can do it, and nothing tells them that's what they just did.

So the decision has moved. On paper, turning the capability on belongs to whoever owns the outcome: the person who knows what it costs, what it changes for users, and what has to be watched once it's live. In practice it belongs to whoever has write access to the secrets, which in most organisations is a wider and less deliberate group. The credential was meant to be an access control. Used as a switch, it becomes a governance control too, held by people who were never told they hold it.

There is a second, quieter cost. A flag usually leaves a trail: who changed it, when, and often why. A credential appearing in an environment leaves much less. When someone later asks when the new path started handling real traffic, the honest answer may be "sometime after the key was added, which was during an unrelated incident". That isn't a timeline you can reason about, let alone explain to someone who has to sign off on it.

None of this means the pattern is wrong. Not crashing when a credential is missing is good engineering, and the convenience is real. The mistake is letting one setting answer two questions: "may this system call that service?" and "have we decided to rely on it?" They have different owners, and they deserve different switches. Keep the credential for the first. Make the second explicit, visible, and owned by someone with a name, even if it's a single boolean that sits right next to the key.

Leaders can usually spot this in planning, before it's in the code. The tell is a rollout plan with no step for turning the thing on, because turning it on happens by itself once the key arrives.

So when I see a capability that wakes up the moment its key appears, I now ask one question: if this went live by accident tomorrow, who would notice first, and would they know it was a decision someone was supposed to make?
