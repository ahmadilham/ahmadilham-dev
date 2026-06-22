# ahmadilham.dev

Personal site + engineering-leadership notes. Built with [Astro](https://astro.build).

## Prerequisites

- **Node.js 18.14 or newer** (20+ recommended). Check with `node --version`.
  Get it from [nodejs.org](https://nodejs.org) if you don't have it.
- **npm** (ships with Node). Check with `npm --version`.

## Run locally

**1. Install dependencies** (first time only, or after pulling new changes):

```bash
npm install
```

**2. Start the dev server** — live-reloads as you edit:

```bash
npm run dev
```

Then open **http://localhost:4321** in your browser. Leave this running while
you work; saving a file refreshes the page automatically. Press `Ctrl+C` to stop.

**3. Build the production site** when you're ready to deploy:

```bash
npm run build
```

This generates the static site into the `dist/` folder.

**4. Preview the built site** (optional — checks the production output before deploying):

```bash
npm run preview
```

### Quick reference

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies into `node_modules/` |
| `npm run dev` | Dev server at `localhost:4321`, auto-reloads on save |
| `npm run build` | Builds static site to `dist/` |
| `npm run preview` | Serves the built `dist/` locally to check it |

### Troubleshooting

- **`command not found: npm`** → Node isn't installed or not on your PATH. Install from [nodejs.org](https://nodejs.org).
- **Port 4321 already in use** → run `npm run dev -- --port 3000` (or any free port).
- **Changes not showing** → make sure `npm run dev` is still running and you saved the file; a hard refresh (`Ctrl+Shift+R`) clears cached assets.

## Add a new note

Drop a Markdown file into `src/content/notes/`. Use this frontmatter:

```markdown
---
title: "The headline of the position you're taking"
standfirst: "One-sentence summary shown under the title and on the home list."
date: 2024-06-01
topic: "Tooling"          # short label, e.g. Tooling / Stakeholders / Hiring
source: "https://..."      # optional — the LinkedIn article it grew from
draft: false               # set true to hide it
---

Body goes here in Markdown. Code blocks get C#-friendly highlighting:

\`\`\`csharp
Console.WriteLine("hello");
\`\`\`
```

The home page auto-lists notes newest-first and numbers them.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Add a GitHub Actions workflow for Astro (Settings → Pages → Build with GitHub Actions — it suggests the Astro template), **or** build locally and push `dist/`.
3. `public/CNAME` already contains `ahmadilham.dev` so the custom domain sticks.
4. Point DNS for `ahmadilham.dev` to GitHub Pages (same A records + www CNAME as csharp-indonesia.com).

> Note: `.dev` requires HTTPS — GitHub Pages provisions it free once DNS resolves.

## Structure

```
src/
  content/notes/      ← your notes (Markdown) live here
  layouts/Base.astro  ← <head>, fonts, footer
  pages/index.astro   ← home (hero + notes index)
  pages/notes/[slug]  ← note template
  styles/global.css   ← design tokens
public/                ← favicon, CNAME, static assets
```
