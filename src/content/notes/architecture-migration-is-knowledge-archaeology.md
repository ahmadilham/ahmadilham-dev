---
title: "An architecture migration is mostly archaeology on the system you're leaving"
standfirst: "Migration plans obsess over the destination. The risk lives in the origin — the undocumented, half-supported legacy system whose authors have left."
date: 2024-03-31
topic: "Architecture"
source: "https://www.linkedin.com/advice/0/how-can-you-migrate-new-software-architecture"
draft: false
---

> The advice I gave on LinkedIn: "An example I've seen of the major pain points
> migrating to new software architecture is dealing with legacy systems and
> accumulated technical debt. Legacy systems often have outdated technologies,
> undocumented code, and dependencies that are no longer supported. Identifying
> and understanding these components can be challenging, as they may not have
> been well-documented or may have been developed by employees who are no
> longer with the company."

That's still my view. What's worth pressing on is a detail hiding in plain
sight: *where the risk actually lives*.

A migration plan almost always points forward. The new architecture, the new
stack, the diagram of how clean everything will be. That's the fun half, and
it's the half people staff and schedule for. The half that sinks the timeline
is behind you: the system you're migrating *from*, which nobody fully
understands anymore.

Undocumented code, dependencies no one supports, behavior that only made sense
to someone who left two years ago — these aren't edge cases, they're the
substance of the work. You can't move a system you can't explain, and most of
the schedule overrun on a migration is the unbudgeted time spent reconstructing
what the old thing actually does and why.

So I treat the early phase of a migration as archaeology, not engineering.
Before designing the target, I want to know what undocumented behavior we're
depending on and which knowledge already walked out the door. The destination
is a design problem you control. The origin is a discovery problem you don't —
and pretending otherwise is how migrations slip.
