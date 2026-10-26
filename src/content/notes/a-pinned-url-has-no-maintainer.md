---
title: "A dependency pinned to a URL has no maintainer unless you name one"
standfirst: "When a library leaves the package registry, pointing at the vendor's download link looks like the same dependency from a different address. It is a different arrangement, because the registry was quietly doing a job for you, and that job now needs an owner."
date: 2026-10-26
topic: "Security"
draft: false
---

> "It's not on the registry anymore, so we point at the vendor's download link. Same version, same code."

I have agreed to that sentence, and the code really was the same. What changed was everything around the code, and none of it showed up in the diff.

Consider what a registry does for a team without anyone asking it to. It gives every release a name and a number, so tooling can tell you when a newer one exists. It carries advisories, so a scanner can match a known flaw to the version you run. It makes updates a routine event, because a bot can open a change whenever a release appears. Nobody on the team owns those behaviours. They come with the address, and a team stops noticing them the way it stops noticing the lights in a corridor.

Move the dependency to a URL and the corridor goes dark. Many tools will still install it. Many will not track it, because they match on registry names and a link has none. The lockfile will record a hash, which is good, and it proves you got the same bytes you got last time. It says nothing about whether those bytes are still the ones you want. The version is now a string that someone has to remember to look at.

The part that matters for a leader is that the work did not disappear. Watching for advisories, deciding when to move up, checking that the vendor's link still resolves, noticing if the vendor changes how it publishes: all of that was done by the registry, for free, and is now done by nobody. In my experience nobody becomes the answer by default, because everyone assumes the old safety net is still under them.

I don't think the answer is to refuse these dependencies. Sometimes a vendor leaves the registry for reasons that have nothing to do with quality, and the library is still the best option you have. Pinning to a link can be a perfectly reasonable decision. The mistake is making it as a one-line edit with no owner, in the same breath as a change that needed no thought.

What I'd ask for is small. Put a name next to the pin, a person and not a team. Put a date next to it, when it will next be looked at, and put that date somewhere a calendar can find it. Write down why it is there and what would let you return to the registry. If the dependency matters enough to ship, it matters enough for a single sentence of ownership.

There is a quieter version of the same problem with any dependency that sits outside the tooling's field of view, whether it is a copied file, a vendored folder or a binary someone downloaded once. The tell is that nothing in your process will ever mention it again unless a person does.

So when someone proposes pointing at a link instead of a registry entry, I now ask one thing: which of the jobs the registry was doing for us are we taking over, and whose name goes next to each one?
