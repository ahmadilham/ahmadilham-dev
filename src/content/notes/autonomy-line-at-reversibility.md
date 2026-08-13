---
title: "Draw the autonomy line at what's reversible, not at what's risky"
standfirst: "Risk is a judgment call, so it gets re-made badly or skipped entirely. Reversibility is a property of the action itself — and it gives the same answer every time."
date: 2026-08-13
topic: "Delegation"
draft: false
---

> From the operating rules in our main repo: "Act without confirmation on
> standard tasks. Make routine decisions autonomously and keep working rather
> than asking 'shall I continue?'... NEVER push, open/merge a PR, or post a
> comment without explicit user confirmation... Committing locally is fine;
> commits are reversible and stay on your machine until pushed."

We wrote that for coding agents, but I've come to think it's the better rule
for delegating to people too, and the reason sits in the last clause rather
than the first.

The instinct, when you hand someone write access to something that matters, is
to gate the risky parts. It sounds obviously right, and it fails in a specific
way: "risky" isn't a property of an action, it's an assessment of a situation.
It has to be made fresh every time, usually in the moment, usually by the
person least equipped to make it — the one doing the work, who has the least
context on what else is in flight. So it goes one of two ways. Either
everything gets escalated, because nobody wants to be the person who guessed
wrong, and you've built a bottleneck with your own name on it. Or nothing does,
because after the fortieth trivial check-in the habit quietly dies, and it dies
right before the one that mattered.

Reversibility doesn't have that problem. A local commit is undone by one person
in one command. A push is not — it's in other people's history now. A comment
on a pull request is technically deletable and socially permanent, because
someone has already read it. None of those classifications change when the task
changes, which means the boundary can be written down once and then simply
obeyed. Nobody has to be clever about it at six in the evening.

What surprised me is that it cuts friction in both directions. The gate stops
being asked to do work it was never good at — most of what anyone does in a day
is local and undoable, so it flows — and it holds firmly on the small set of
actions that leave the room. People stop asking permission for things that were
always theirs, and stop making calls that were never theirs. The same rule
produces more autonomy and more control, which is not a trade I expected to be
able to make.

The honest caveat is that reversibility isn't binary, it's a cost. Reverting a
merged migration is possible and expensive. So the line really sits at
"reversible by the person who did it, without involving anyone else" — and
anything failing that test deserves a gate even when the blast radius looks
small.

There is a fair objection to writing any of this down, and it arrived while I
was drafting. Anthropic published [what it learned from deleting more than 80%
of Claude Code's system
prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
for its newest models, with no measurable loss on its coding evaluations. Its
first then-and-now pair is blunt about it: then, give the model rules; now, let
the model use judgment. Guidance written to stop a weaker model doing something
stupid becomes noise for a stronger one, so you delete it and let the thing
decide.

I think that argument is right and that it sharpens this note rather than
undercutting it. What a pass like that deletes is instruction the model can now
supply for itself — sometimes by reading the surrounding code, sometimes just
because it got better and no longer needs the worked example or the reminder to
check its work. Either way the words had become redundant with the thing reading
them. What no amount of capability supplies is whether a push is recoverable
*here*, in this organization, with these people reading the notification. That
isn't taste, and it isn't sitting in the codebase waiting to be read; it's a
fact about the environment the work lands in. Which is exactly the residue you
would expect a good deletion pass to leave behind — and a decent test for any
rule you are about to write down. If the person doing the work would arrive at
it on their own, from the work itself, delete it. If they would only learn it by
getting it wrong in front of everyone, keep it.

Which gives me the question I now ask about any delegated action, in place of
guessing at severity: if this turns out to be wrong, who has to be involved to
undo it? If the answer is only the person who did it, it doesn't need my
approval. If the answer includes anyone else, no amount of confidence makes it
theirs to decide alone.
