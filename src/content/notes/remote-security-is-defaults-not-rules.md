---
title: "Remote data security is a set of defaults, not a set of rules"
standfirst: "A rule asks every person to remember to do the secure thing. A default makes the secure thing the only thing that happens — and only the second kind survives a distributed team."
date: 2024-05-19
topic: "Security"
source: "https://www.linkedin.com/advice/3/youre-tasked-managing-remote-software-team-7hxwf"
draft: false
---

> The advice I gave on LinkedIn: "Since we are a fully remote team, we need to
> ensure everyone operates with the highest standards of data security. Here
> are the measures we've put in place: we grant permissions based on the least
> privilege principle... we use a password manager to securely share
> credentials... we've adopted a security platform that includes installing
> security agents on each device and regular security training... we require
> all team members to use a VPN when accessing cloud resources."

I'd stand behind that list. But re-read it and something jumps out — what all
those measures quietly have in common.

Look at that list again and notice that almost none of it depends on a person
choosing well in the moment. Least privilege means the access simply isn't
there to misuse. A password manager means nobody is inventing or emailing
credentials. Security agents and enforced VPN mean the protection runs whether
or not anyone remembers it. These aren't instructions — they're defaults, and
the secure outcome happens by construction.

That distinction matters more on a remote team than anywhere else, because you
can't see anyone. In an office you might notice the unlocked laptop or the
password on a sticky note. Distributed, you have no such visibility, so any
control that relies on individual vigilance is a control you're quietly hoping
holds. Hope doesn't scale across time zones and home networks.

Training is the one item on the list that *is* a rule — it asks people to
behave well — which is exactly why it's the backstop, not the foundation. The
foundation is everything that removes the chance to err in the first place. So
I judge a remote security setup by a simple test: how much of it would still
protect us if everyone forgot the policy tomorrow? Whatever survives that
question is the part actually doing the work.
