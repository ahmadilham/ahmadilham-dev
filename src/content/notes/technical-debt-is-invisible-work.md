---
title: "Technical debt is invisible work — so the job is making it visible"
standfirst: "The hard part of managing debt isn't the refactoring. It's convincing the people who can't see it that paying it down is worth as much as a feature they can."
date: 2024-03-24
topic: "Technical Debt"
source: "https://www.linkedin.com/advice/3/how-can-you-manage-technical-debt-scrum-projects"
draft: false
---

> The advice I gave on LinkedIn: "One thing that became quite a challenge is to
> be able to effectively communicate the concept, implications and plans to
> address technical debt to non-technical stakeholders. This ensures aligned
> expectations and understanding that sometimes, investing time in addressing
> this 'invisible' issue is as valuable as developing new visible features."

I stand by that. The word doing the heavy lifting, though, is *invisible* — and
it's worth unpacking why.

Most advice about technical debt is about the debt: how to measure it, when to
refactor, which patterns rot fastest. That's the engineering problem, and
engineers are usually fine at it. The part that actually stalls debt work is
that the people who fund it can't see it. A slow query, a brittle deploy, a
module only one person dares touch — none of it shows up in a demo. So when it
competes for time against a feature someone *can* see, it loses by default.

Which means the real skill isn't paying the debt down — it's translation.
Turning "this module is fragile" into "every change here costs us three days
and a weekend on-call" gives a non-technical stakeholder something they can
actually weigh. The goal isn't to make them understand the architecture; it's
to make the cost of *not* acting as concrete as the cost of acting.

So I've stopped treating debt as a thing I argue *for* and started treating it
as a thing I make legible. A feature defends itself — you can point at it. Debt
can't, so it needs an advocate who'll put a number and a consequence on the
invisible. Do that consistently and "invisible work" stops being a hard sell
and becomes just another line item with a price next to it.
