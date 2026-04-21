# KKCB Agent Guide

This repository hosts the public website for `Kids Kicking Cancer with Budo Romania`.

## Primary goals

- present the Romanian chapter credibly in both Romanian and English
- explain the therapeutic Budo method with dignity and clarity
- support volunteering, research partnerships, and fundraising
- keep a living blog and a documented path for continuous improvement

## Stack

- Next.js App Router
- TypeScript
- CSS in [src/app/globals.css](/home/andrei/work/SmartClover/KKCB/src/app/globals.css)
- Markdown blog content in `content/blog/<locale>/`

## Key locations

- app routes: [src/app](/home/andrei/work/SmartClover/KKCB/src/app)
- shared components: [src/components](/home/andrei/work/SmartClover/KKCB/src/components)
- site copy: [src/content/site.ts](/home/andrei/work/SmartClover/KKCB/src/content/site.ts)
- media manifest: [content/media-manifest.json](/home/andrei/work/SmartClover/KKCB/content/media-manifest.json)
- curated original images: `assets/originals/`
- quarantined non-approved originals: `_unapproved/`
- temporary intake folder: [\_raw](/home/andrei/work/SmartClover/KKCB/_raw)
- processed website images: `public/media/`
- blog loader and helpers: [src/lib/content.ts](/home/andrei/work/SmartClover/KKCB/src/lib/content.ts)

## Commands

- install: `npm install`
- verify empty raw inbox: `npm run media:check`
- verify version bump rule: `npm run version:check`
- process images: `npm run media:process`
- tests: `npm test`
- typecheck: `npm run typecheck`
- dev server: `npm run dev`
- production build: `npm run build`

## Content workflow

1. Add or edit bilingual copy in `src/content/site.ts`.
2. Add blog posts as Markdown files under `content/blog/ro` and `content/blog/en`.
3. Import new unreviewed files into `_raw/`.
4. Curate and move approved originals into `assets/originals/*`; move rejected or confidential originals into `_unapproved/*`; do not commit source files in `_raw/`.
5. Add or update entries in `content/media-manifest.json`.
6. Run `npm run media:process`.
7. Run `npm test` and `npm run typecheck` before handing off.

## Guardrails

- Do not invent donation links, contact emails, or medical claims that are not yet verified.
- Keep the tone calm, specific, and credible; avoid charity cliches.
- Prefer real archive photography over decorative filler.
- Treat the research page as an agenda and partnership invitation, not as proof beyond available evidence.
- `_raw/` must stay empty in the committed repo state except for `.gitkeep`.
- Every repository change set must include a version bump in `package.json`, with `package-lock.json` kept in sync.
- Only originals marked approved in `content/media-review.json` may appear in `content/media-manifest.json` or `public/media/`.
