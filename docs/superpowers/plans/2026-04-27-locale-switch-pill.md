# Locale Switch Pill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the language switch stand out more by styling it as a light outlined pill in both desktop and mobile header contexts.

**Architecture:** Keep the behavior unchanged and limit the change to a small markup hook plus CSS updates. Add one focused test around the locale switch output so the visual-control treatment has a stable structural contract.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS in `src/app/globals.css`, Vitest

---

## File Structure

- Create: `src/components/locale-switcher.test.tsx`
- Modify: `src/components/locale-switcher.tsx`
- Modify: `src/app/globals.css`
- Modify: `package.json`
- Modify: `package-lock.json`

### Task 1: Add A Failing Locale Switch Test

**Files:**
- Create: `src/components/locale-switcher.test.tsx`
- Test: `src/components/locale-switcher.test.tsx`

- [ ] **Step 1: Write the failing test**

Write a test that mocks `usePathname()` to return `/ro/about`, renders `LocaleSwitcher`, and expects:
- `href="/en/about"`
- class name includes `locale-switch locale-switch--pill`
- visible label `EN`

- [ ] **Step 2: Run test to verify it fails**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/components/locale-switcher.test.tsx`

Expected: FAIL because the component currently renders only `locale-switch`.

- [ ] **Step 3: Write minimal implementation**

Update `src/components/locale-switcher.tsx` so the link class becomes:

```tsx
className="locale-switch locale-switch--pill"
```

- [ ] **Step 4: Run test to verify it passes**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/components/locale-switcher.test.tsx`

Expected: PASS.

### Task 2: Apply The Outlined Pill Styling

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Confirm the new locale switch test is green before styling**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/components/locale-switcher.test.tsx`

Expected: PASS.

- [ ] **Step 2: Write minimal implementation**

Add a dedicated `.locale-switch--pill` treatment that:
- adds a light outline
- adds a soft warm surface
- increases horizontal padding
- slightly tightens letter spacing
- adds a subtle hover lift and darker border

Keep it visually lighter than the sandwich trigger.

- [ ] **Step 3: Run verification**

Run:
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/components/locale-switcher.test.tsx`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run typecheck`

Expected: PASS.

### Task 3: Sync Version And Re-Verify

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Bump version**

Update the root version to `0.1.8` in `package.json`, plus the top-level and root package entry in `package-lock.json`.

- [ ] **Step 2: Run final verification**

Run:
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm test`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run typecheck`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run build`

Expected:
- new locale switch test passes
- typecheck passes
- build passes
- if full `npm test` still fails on the known media inventory issue, report it as unrelated
