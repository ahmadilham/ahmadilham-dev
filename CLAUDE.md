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

- `src/content/config.ts` — defines the `notes` collection and its Zod frontmatter schema (`title`, `standfirst`, `date`, `topic`, optional `source` URL, `draft`). Changing a note's shape starts here.
- `src/content/notes/*.md` — the notes themselves. Adding a `.md` file with valid frontmatter is the only step needed to publish; no index to update.
- `src/pages/index.astro` — home page. Queries the collection, filters out `draft`, sorts newest-first, and renders the numbered logbook.
- `src/pages/notes/[slug].astro` — note template. `getStaticPaths()` generates one route per non-draft note; uses `note.slug` and `note.render()`.
- `src/layouts/Base.astro` — shared `<head>`, Google Fonts (Inter + JetBrains Mono), and footer. Takes `title` (required) and `description` props.
- `src/styles/global.css` — design tokens (CSS custom properties: `--amber`, `--ink`, `--mono`, `--measure`, etc.). Component styles live in per-`.astro` `<style>` blocks and reference these tokens; change colors/spacing globally here.

Both `index.astro` and `[slug].astro` filter `draft` notes identically (`({ data }) => !data.draft`) — keep that filter consistent if you touch one.

## Conventions

- **Add a note** by dropping a Markdown file in `src/content/notes/` with the frontmatter shape from `config.ts`. Set `draft: true` to hide it. See README for the frontmatter template.
- Code blocks are highlighted via Shiki (`github-dark` theme, configured in `astro.config.mjs`).
- `site` is set to `https://ahmadilham.dev` in `astro.config.mjs`; `public/CNAME` pins the custom domain. Deploy target is GitHub Pages (static).
