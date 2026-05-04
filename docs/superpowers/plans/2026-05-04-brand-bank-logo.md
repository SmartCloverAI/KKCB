# Brand, Bank, and Logo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Make the site consistently present the NGO as "Kids Kicking Cancer with Budo", use "Power Peace Purpose" as the tagline, publish verified bank-transfer details, add the deployment verification repo rule, and keep release/version rules satisfied.

**Architecture:** Keep content in `src/content/site.ts`, shared rendering in `src/components/site-ui.tsx`, and page-specific support content on the Get Involved route. Publish the logo as a static asset under `public/media/` and keep `_raw/` clear after intake.

**Tech Stack:** Next.js App Router, TypeScript, CSS in `src/app/globals.css`, Sharp/image tooling, npm scripts, Git.

---

### Task 1: Logo Asset

**Files:**
- Move source into: `assets/originals/brand/`
- Create processed asset in: `public/media/`
- Modify: `content/media-review.json`
- Remove raw intake files from: `_raw/`

- [x] Select `_raw/Logo KKC romania.jpg` as the highest-resolution source.
- [x] Crop empty canvas and apply light JPEG cleanup without changing the mark or wording.
- [x] Export a web-ready logo asset.
- [x] Record the approved source in `content/media-review.json`.
- [x] Remove processed raw intake files so `_raw/` contains only `.gitkeep`.

### Task 2: Brand, Tagline, and Bank Copy

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/components/site-ui.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/[locale]/get-involved/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `content/blog/*/*.md`

- [x] Replace NGO-name uses with "Kids Kicking Cancer with Budo".
- [x] Keep "Romanian chapter", "Bucharest", and "in Romania" only as context, never as part of the NGO name.
- [x] Set the Romanian and English tagline to "Power Peace Purpose".
- [x] Add bank-transfer details from `_raw/bank.md` to the Get Involved / Implicare page.

### Task 3: Repo Rules and Version

**Files:**
- Modify: `AGENTS.md`
- Modify: `package.json`
- Modify: `package-lock.json`

- [x] Add a guardrail requiring commit, push, online auto-update wait, and online deployment verification before handoff.
- [x] Preserve the existing version-bump rule.
- [x] Increment `package.json` version and sync `package-lock.json`.

### Task 4: Verification, Commit, Push, Live Test

**Commands:**
- `npm test`
- `npm run typecheck`
- `npm run build`
- `git status --short`
- `git add ... && git commit -m "..."`
- `git push`

- [x] Run local verification.
- [x] Commit and push the completed change set.
- [x] Identify the public deployment URL.
- [x] Wait for the online worker/deployment to update to the pushed commit.
- [x] Test the online version and report the result.
