---
title: "Cap the optional findings in a review — the ranking is the contribution"
standfirst: "An uncapped review lists everything it noticed, which trains the author to skim. A cap forces the reviewer to rank, and the ranking was the part worth reading."
date: 2026-08-13
topic: "Code Review"
draft: false
---

> From our repo's review instructions: "**[Optional · High/Medium/Low]** —
> author may defer or decline... Max 5 per review; pick the most actionable.
> Never post pure style remarks. Do not invent findings. If the change is
> sound, say so in two sentences."

That cap exists because we put an automated reviewer on every pull request, and
an automated reviewer taught us something about reviewing that I had been
getting wrong for years.

A machine reviewer has no fatigue and no social cost. It will not decide that
it has already left enough comments, or that the author had a rough week, or
that this is the third round and everyone would like to ship. So it finds
everything it can find, and posts all of it. What arrives is forty comments, of
which two matter. The author does what any reasonable person does with forty
comments — skims, resolves the easy ones, and misses one of the two. The review
was thorough and useless at the same time, a combination I had never seen
stated so plainly before a machine stated it.

The fix wasn't a better reviewer. It was a budget. Five optional findings,
ranked, most actionable first.

What a cap actually forces is a decision the reviewer was previously allowed to
skip. With unlimited space, "which of these matters most?" never has to be
answered — you list them and let the author sort it out. But sorting it out
requires exactly the context the reviewer has and the author doesn't: what
breaks in production, what we have already been bitten by, what is merely
preference. Handing over an unranked list outsources the judgment back to the
person who needed it. The cap makes a reviewer spend judgment instead of
attention, and judgment is the scarce one.

Two things have to stay outside the budget or it becomes an excuse. Findings
that leak customer data, break production, or violate a rule written in blood
are uncapped and ungraded — those aren't ranked against each other, they're
binary, and a review that swallowed one to stay under five would be worse than
no review. And a clean change has to be allowed to be clean. If the cap
silently becomes a floor, reviewers start manufacturing findings to look
diligent, and the noise is back with a reputation attached.

The wider version of this argument turned up somewhere I wasn't looking for it.
Anthropic [removed more than 80% of Claude Code's system
prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
for its newest models and measured no loss on its coding evaluations — the
instructions had not been doing the work their length implied, and some of them
were competing with each other for the model's attention. That is the
forty-comment review reached from the other end. Volume of instruction is not a
proxy for quality of outcome, and past some point it stops being neutral and
starts being corrosive, because everything you add dilutes the thing you most
needed read. A review is a system prompt for one pull request. It fails the
same way, for the same reason.

The part I didn't expect was how well it transfers to humans. The most
exhausting reviewer I have worked with was not the harsh one; it was the one
who commented on everything, whose approval and rejection were equally
uninformative because both arrived with thirty notes. Thoroughness reads as
care and functions as noise.

So the question I ask myself before submitting a review now: if I could leave
only three comments, which three? Whatever I would drop was never going to
change what the author did. It was only ever going to prove I had read it.
