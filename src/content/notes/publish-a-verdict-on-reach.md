---
title: "Don't ask for a careful review — ask for a conclusion only a careful review could produce"
standfirst: "The usual way to make reviewers look past the changed lines is to tell them to consider the wider impact, and it fails quietly because nobody can tell whether they did. Ask instead for a verdict on how far the change reaches, and the looking becomes the only way to produce an answer."
date: 2026-11-16
topic: "Code Review"
draft: false
---

> From the review instructions in one of our internal repos: "The diff is not the
> review boundary. Check what the change can break elsewhere… State a blast-radius
> verdict in the summary: **contained** / **module-wide** / **cross-subsystem**."

Our review guidance used to ask reviewers to consider the impact of a change beyond the
lines it touched. It was good advice and it did nothing. There was no way to tell a
reviewer who had looked from one who had not, and the reviewer could not reliably tell
either, because looking and not looking feel much the same from the inside when nothing
turns up.

That is the flaw in every instruction of that shape. It asks for an activity rather than
an artefact, and an activity leaves no trace. You cannot inspect diligence. You can only
inspect what diligence produced — so an instruction that produces nothing is
indistinguishable from one nobody followed.

The replacement asks for a verdict: one word, from a closed set, in the summary. It is
trivial to type and almost impossible to type honestly without doing the work. You cannot
call a change to a shared type contained unless you have been to look at who depends on
it. The word is a receipt for an activity that otherwise leaves none behind.

What interests me is that it is not a check. Nothing validates the verdict; a reviewer can
write "contained" about a change that breaks three other services, and the review will
post. It is weaker than a gate, and it works better than the sentence it replaced, because
it changes what being wrong looks like. Advice that went unheeded was invisible. A verdict
that turns out wrong is on the record, under someone's name, next to an incident that
disagrees with it.

The second effect I did not predict. The author now sees a claim about their own change's
reach, and can disagree with it. That argument — is this really contained? — is the
conversation that was never happening, because nothing was concrete enough to disagree
with. A review about lines produces comments about lines. A review that ends in a
classification produces an argument about scope, and scope is where the expensive mistakes
live.

Working with agents makes the distinction harder to ignore. Ask an agent to review
thoroughly and you get thorough-sounding prose, with no way to tell whether anything
was opened. Ask for one word from three and it has to commit to something a human
can check later. A small, falsifiable output beats a large, agreeable one.

The general move: when you want work you cannot observe, don't ask for the work. Ask
for the smallest artefact that the work produces and that nothing else produces as
convincingly. It has to be falsifiable, which rules out most of what we ask for; a
tick-box confirming that impact was considered costs the same whether or not anyone
looked.

The test I apply now, when I am about to write "please be thorough about X": what could
someone write down that they could only write down having done X, and would I find out
later if they got it wrong? If no such sentence exists, I am not asking for work. I am
expressing a hope.
