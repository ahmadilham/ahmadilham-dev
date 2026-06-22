---
title: "Under deadline pressure, automated standards beat agreed-upon ones"
standfirst: "A coding guideline everyone agreed to relies on discipline — the first thing pressure burns through. A linter doesn't get tired or behind schedule."
date: 2024-04-14
topic: "Code Quality"
source: "https://www.linkedin.com/advice/0/developers-odds-over-code-review-frequency-tyoxf"
draft: false
---

> The advice I gave on LinkedIn: "In my experience, maintaining coding
> standards is challenging, especially under tight deadlines. The pressure to
> deliver can lead to compromises in code quality, resulting in technical debt,
> unmaintainable code, and security and performance issues. To address these
> challenges, I believe it's essential to establish clear guidelines and use
> automated tools. Clear guidelines keep everyone aligned, while automated
> tools like linters and static code analyzers catch issues early."

That holds. The thing I glossed over is that the two halves aren't equal — and
the difference matters more than it looks.

Clear guidelines and automated enforcement get listed together as if they're a
matched pair. They're not. A guideline is a promise the team makes to itself,
and like every promise it depends on the people keeping it having the time and
attention to do so. Deadline pressure is precisely the thing that strips away
time and attention. So the standards lean hardest on discipline exactly when
discipline is most depleted — which is when quality quietly slips.

Automation doesn't have that failure mode. A linter, a formatter, a static
analyzer in the pipeline applies the same rule on the calm Tuesday and the
panicked Friday before launch. It doesn't negotiate with the deadline. That's
the whole point: it moves the standard from something people have to *remember
to do* to something that simply happens.

So I've come to think of the guideline as the spec and the tooling as the
enforcement, and to distrust any standard that exists only as a guideline.
If a rule matters, it should fail a build, not just a code review — because the
review is also staffed by tired people on a deadline. Write the agreement down,
yes, but the version that survives a crunch is the version a machine checks.
