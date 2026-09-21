---
title: "An automated check that can fail silently is worse than the rule it replaced"
standfirst: "The usual move is to take a standard people keep forgetting and put it in a machine, because a machine doesn't get tired. But a machine that isn't running looks exactly like a machine that found nothing — so automation quietly trades an unreliable control for an invisible one."
date: 2026-08-26
topic: "Risk"
draft: false
---

> From the governance doc of our internal tooling repo: "Components can register and
> still fail to load, and that failure is a non-fatal entry in the Errors tab —
> indistinguishable from working."

I have argued before that automated standards beat agreed ones. I still think that is
right; that sentence is the half I left out.

The case for automation was always human frailty. A guideline depends on people having the
attention to keep it, and deadline pressure is what removes attention. A linter does not
get tired.

What that skips is the failure mode automation introduces in exchange. A
guideline nobody follows is visibly not followed — the mess is right there in the pull
request. A check that is not running looks exactly like a check that found nothing. Both
produce silence, and silence, once you have installed something you believe is watching,
gets read as a pass.

The damage is not only the missing check. It is what believing in it does to everyone
around it: a team that knows it has no layering rule checks layering by hand, and a team
that believes it has one stops looking. So when a control quietly dies, its protection is
replaced by a false sense of it — the real risk rises and the felt risk drops together.

We have a repository whose lint configuration declares its architectural boundaries:
which layers may import which. The configuration is correct. It has also never run, because
the linter and one of its plugins sit a major version apart and the process crashes before
it evaluates a single rule. Nothing invokes it, so nothing surfaced the crash. For months
the honest description was "our layering is unenforced", while the one everyone carried
around was "we have a rule for that". The second is worse, because the first makes you
check by hand.

That is the trade nobody prices. Automation converts an unreliable control into a reliable
one and, in the same motion, converts a visible absence into an invisible one.

Which changes what the work is. The engineering is not writing the check; it is making the
check's absence loud. A gate that exits quietly when it errors has no opinion, and no
opinion reads as approval — and a control that retired a written rule and then stopped
running leaves you worse off than the rule did.

So what I ask for is not the check but the demonstration. Before I count a gate as
protection, someone has to break it on purpose in front of me: commit the thing it should
block, and show me it blocked. The question stops being whether the check passed and
becomes whether it ran.

None of this is new; what has gone is the slack. More of what a team ships was produced by
something working while nobody watched, and the controls around it are automated too —
layers of silence, stacked. Agents did not invent this failure mode. They removed the lag
that hid it.

The test I apply: if this control quietly stopped working tomorrow, how long until anyone
noticed, and what would tell them? If the answer is "the next incident", you do not have a
control. You have a belief with a config file.
