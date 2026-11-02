---
title: "A number without an expiry date is a rumour, not a measurement"
standfirst: "Dashboards and status updates show the latest value and let the reader assume it is current. A reading that carries the time it stops being true cannot be mistaken for one that is merely the last thing somebody wrote down."
date: 2026-11-02
topic: "Communication"
draft: false
---

> "We're at forty percent, so there's plenty of room."

That sentence is true or false depending on something it never mentions: when anyone last looked. A reading is a fact about a moment. Everything it gets used for happens later, and the gap between the two is where decisions go wrong.

I came to this from reading a small script that guards a metered budget. It cannot ask the meter directly. The only place the figure appears is a display that redraws on a timer, so the script records each reading as it passes, and a second process reads those records and speaks up when one crosses a line. What caught my attention was how much of it exists to answer a single question: how old is this number?

Each reading is stored with the time it was taken. Each also carries the moment its window resets, because a high reading from a window that has already closed describes a budget that no longer exists, and it must not set off an alarm. And if no fresh reading has arrived for a while, the watcher does not treat that as good news. It reports that it has gone blind, which is a different message from the one that says the line was crossed. That makes three states rather than two: over the line, under the line, and I don't know.

Most reporting I see in teams has only the first two. A dashboard shows the last value and a green colour. A status update says the migration is on track. Nobody wrote down when that was true, and nobody wrote down what would make it stop being true: a release, a reset, the person who looked going on leave. The reader fills the gap with optimism, because a number looks current simply by being the number on the screen.

The failure runs in both directions. An old low reading gives false comfort. An old high reading gives a false alarm, and a team that has been burned by one false alarm learns to wait before believing the next. Either way the cost is trust in the figure.

So I now ask for an expiry on anything I am meant to act on. Not a refresh schedule, which says when someone intends to look again, but a statement of when this stops being true. For a budget it is the end of the window. For a status it is the next event that could change it. For an estimate it is the first discovery that would make the estimator revise it. A reading that cannot name one is not wrong, but it is an opinion, and I treat it as one.

There is a margin to add as well, because the number you can read always trails the number that is real. If parallel work keeps spending between refreshes, an alarm set at the limit fires after the limit. The line belongs where the budget will be by the time anyone can react.

The test I apply to any figure in front of me: can I say when it was true, and when it stops being true? If I can't, what exactly am I looking at?
