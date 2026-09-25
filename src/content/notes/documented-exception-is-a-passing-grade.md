---
title: "Don't chase a green scorecard — make \"failed, with a reason\" a passing state"
standfirst: "A score rewards the colour, so the cheapest way to raise it is to delete whatever is failing. A failure someone chose on purpose, with the reason written down, is the only thing that keeps a score worth reading a year later."
date: 2026-09-21
topic: "Code Quality"
draft: false
---

> From the audit checklist in one of our internal repos: "**A FAIL is not
> automatically a bug to fix.** Two of the checks are judgement calls, and a red
> check with a documented reason is better than a green score bought by deleting
> something needed."

That sentence is in there because the checklist works. It scores a repository
against eight baselines, it produces a number, and a number invites exactly one
behaviour: make it go up. One of the baselines caps how many capabilities a repo
advertises to an agent, on the theory that a long list crowds attention and the
things at the bottom stop getting picked. The fastest way to pass that check is
to delete things. Not the ones crowding anything — the ones nobody will defend.
The score improves. The problem the check existed to prevent does not.

This is not a flaw in that particular checklist. It is what a two-state
measurement does. Pass and fail leaves you one legitimate response to red, and
if the honest response — we looked, and we are keeping it — has no box to go in,
people will find the box that does exist. The usual reaction is to fix the
instrument: weight the checks, add a second metric that catches the deletion,
require a reviewer. Each of those works for a quarter and costs you a page of
rules, and you end up with a scorecard nobody can hold in their head, which is
its own way of not being read.

The cheaper move is to give the score a third state. Pass, fail, and failed
deliberately — here is why. What that buys is not leniency. It is the reasoning,
in writing, at the moment someone had it. A year later nobody asks
whether the repo was green; they ask whether a thing was decided or whether it
drifted. A documented exception answers that question. A green box cannot,
because green is what you get both from doing the work and from removing the
evidence that the work was needed.

It also changes who the audit is addressed to. A pass-fail score talks to
whoever collects scores. A score that accepts a reasoned failure talks to the
next person who has to touch this — and increasingly that reader is an agent
working through the repository, not a colleague reading a dashboard. Neither
benefits from a clean number with the argument deleted out of it.

The obvious failure mode is that the exception becomes a rubber stamp, and it
will if the bar is just typing something in a box. The bar that has held up for
us is narrow: the exception names what the check was protecting against and says
what you are doing instead. "We accept this risk" is not an exception. "This
list is long because these four are loaded conditionally and never compete for
attention" is.

So the test I now apply before putting a team under any scorecard: is there an
answer I would accept that isn't green? If every acceptable answer is green, I
have not built a measurement. I have built a demand wearing a measurement's
clothes, and I should say it plainly instead.
