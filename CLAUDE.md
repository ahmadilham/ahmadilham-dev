# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal site + engineering-leadership notes for Ahmad Ilham, built with **Astro** (static output). Each note states one position; the home page is a logbook that lists them newest-first.

## Commands

- `npm run dev` — dev server at `localhost:4321`, auto-reloads on save
- `npm run build` — builds the static site to `dist/`
- `npm run preview` — serves the built `dist/` locally
- `npm run astro -- check` — type-check `.astro` files (no standalone test/lint setup)

There is no test suite. `tsconfig.json` extends `astro/tsconfigs/strict`.

## Architecture

Content-driven: the **notes collection is the single source of truth**, and pages derive from it.

- `src/content.config.ts` — defines the `notes` collection and its Zod frontmatter schema (`title`, `standfirst`, `date`, `topic`, optional `source` URL, `featured`, `draft`). Changing a note's shape starts here.
- `src/content/notes/*.md` — the notes themselves. Adding a `.md` file with valid frontmatter is the only step needed to publish; no index to update.
- `src/pages/index.astro` — home page. Queries the collection, filters out `draft`, sorts newest-first, and renders the hero, stats strip, topic chips, featured card and note rows. The featured card takes the note with `featured: true`, else the newest. The chips filter the rendered list client-side (a small inline script) — there is no archive page, so every note is on this page.
- `src/pages/notes/[slug].astro` — note template. `getStaticPaths()` generates one route per non-draft note, keyed by `note.id`, and passes each note its logbook number; renders `<Content />` from `render(note)`.
- `src/layouts/Base.astro` — shared `<head>`, Google Fonts (Geist + Geist Mono), header nav, the hero dot field, theme toggle and footer. Takes `title` (required) and `description` props, and a named `top` slot for content that sits under the header inside the dot field (the home page's hero).
- `src/styles/global.css` — design tokens (CSS custom properties: `--bg`, `--surface`, `--ink`, `--muted`, `--rule`, `--accent`, `--accent-text`, `--sans`, `--mono`, `--wrap`, etc.) plus shared primitives (`.wrap`, `.eyebrow`, `.btn`, `.chip`). Component styles live in per-`.astro` `<style>` blocks and reference these tokens; change colors/spacing globally here.

Both `index.astro` and `[slug].astro` filter `draft` notes identically (`({ data }) => !data.draft`) — keep that filter consistent if you touch one.

**Theming.** Light is the default; dark follows the visitor's system setting unless the nav toggle pins a choice in `localStorage`, which `Base.astro` applies to `<html data-theme>` before first paint. Every dark rule therefore has to be written twice — once under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme='light'])`, and once under `:root[data-theme='dark']`. Use the tokens rather than adding new dark-mode rules in component styles.

## Conventions

- **Add a note** by dropping a Markdown file in `src/content/notes/` with the frontmatter shape from `config.ts`. Set `draft: true` to hide it. See README for the frontmatter template.
- Code blocks are highlighted via Shiki with two themes (`github-light` / `github-dark`, configured in `astro.config.mjs`); `global.css` switches them the same way as the rest of the palette.
- `site` is set to `https://ahmadilham.dev` in `astro.config.mjs`; `public/CNAME` pins the custom domain. Deploy target is GitHub Pages (static).
