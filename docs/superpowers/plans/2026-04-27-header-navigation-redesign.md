# Header Navigation Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the cramped responsive header with a cleaner desktop navigation bar and a compact anchored sandwich-menu sheet on mobile.

**Architecture:** Keep `SiteHeader` as the public entry point, but move interactive navigation behavior into a focused client component that owns mobile menu state, dismissal rules, and pathname-aware highlighting. Add a small pure helper module for menu labels and active-link logic so the behavior can be tested without introducing a browser test harness.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS in `src/app/globals.css`, Vitest

---

## File Structure

- Create: `src/components/header-nav.tsx`
  - Client-side header controller for desktop/mobile layout, sandwich trigger, mobile sheet, and active-link rendering.
- Create: `src/lib/header-nav.ts`
  - Pure helpers for menu button labels and active-link matching.
- Create: `src/lib/header-nav.test.tsx`
  - Tests for helper behavior and static header markup expectations.
- Modify: `src/components/site-ui.tsx`
  - Delegate `SiteHeader` rendering to the new client component.
- Modify: `src/app/globals.css`
  - Replace the current mobile scroll-nav treatment with explicit desktop/mobile header and menu-sheet styles.
- Modify: `package.json`
  - Bump version for the repo rule.
- Modify: `package-lock.json`
  - Sync the top-level package version fields only.

### Task 1: Define Header Navigation Behavior With Tests

**Files:**
- Create: `src/lib/header-nav.ts`
- Test: `src/lib/header-nav.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { HeaderMenuButton } from "../components/header-nav";
import {
  getHeaderMenuButtonLabel,
  isNavigationItemActive
} from "./header-nav";

describe("header navigation helpers", () => {
  it("returns the right button label for open and closed states", () => {
    expect(getHeaderMenuButtonLabel(false)).toBe("Open navigation menu");
    expect(getHeaderMenuButtonLabel(true)).toBe("Close navigation menu");
  });

  it("matches localized root and section routes without false positives", () => {
    expect(isNavigationItemActive("/ro", "/")).toBe(true);
    expect(isNavigationItemActive("/ro/about", "/about")).toBe(true);
    expect(isNavigationItemActive("/ro/about/team", "/about")).toBe(true);
    expect(isNavigationItemActive("/ro/research", "/about")).toBe(false);
  });

  it("renders an accessible sandwich trigger", () => {
    const html = renderToStaticMarkup(
      <HeaderMenuButton expanded={false} label="Open navigation menu" />
    );

    expect(html).toContain("aria-expanded=\"false\"");
    expect(html).toContain("Open navigation menu");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`

Expected: FAIL because `src/lib/header-nav.ts` and `src/components/header-nav.tsx` do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```ts
export function getHeaderMenuButtonLabel(expanded: boolean) {
  return expanded ? "Close navigation menu" : "Open navigation menu";
}

export function isNavigationItemActive(pathname: string, href: string) {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const normalizedHref = href === "/" ? normalizedPath.split("/").slice(0, 2).join("/") : href;

  if (href === "/") {
    return /^\/(ro|en)$/.test(normalizedPath);
  }

  return normalizedPath === `/ro${href}` ||
    normalizedPath.startsWith(`/ro${href}/`) ||
    normalizedPath === `/en${href}` ||
    normalizedPath.startsWith(`/en${href}/`);
}
```

```tsx
export function HeaderMenuButton({
  expanded,
  label
}: {
  expanded: boolean;
  label: string;
}) {
  return (
    <button
      aria-controls="site-mobile-nav"
      aria-expanded={expanded}
      aria-label={label}
      className="site-header__menu-button"
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`

Expected: PASS for all new tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/header-nav.ts src/lib/header-nav.test.tsx src/components/header-nav.tsx
git commit -m "feat: define responsive header navigation helpers"
```

### Task 2: Implement Desktop Header And Mobile Sandwich Sheet

**Files:**
- Create: `src/components/header-nav.tsx`
- Modify: `src/components/site-ui.tsx:1-80`

- [ ] **Step 1: Write the failing test**

Add one more test to `src/lib/header-nav.test.tsx`:

```tsx
it("renders the mobile sheet container and desktop nav landmarks", () => {
  const html = renderToStaticMarkup(
    <HeaderNavigation
      dictionary={{
        brand: {
          name: "Kids Kicking Cancer with Budo",
          chapter: "Romania",
          tagline: "Courage, breath, and purpose."
        },
        nav: [
          { href: "/about", label: "About" },
          { href: "/method", label: "Method" }
        ]
      } as never}
      locale="en"
    />
  );

  expect(html).toContain("site-header__desktop-nav");
  expect(html).toContain("site-mobile-nav");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`

Expected: FAIL because `HeaderNavigation` does not render the final structure yet.

- [ ] **Step 3: Write minimal implementation**

Implement `HeaderNavigation` in `src/components/header-nav.tsx` as a client component that:

```tsx
"use client";

const MOBILE_BREAKPOINT = 920;

export function HeaderNavigation({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shellRef = useRef<HTMLElement | null>(null);

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    function onPointerDown(event: MouseEvent) {
      if (!shellRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="site-header" ref={shellRef}>
      {/* brand */}
      {/* desktop nav */}
      {/* desktop meta */}
      {/* mobile controls */}
      {/* mobile sheet */}
    </header>
  );
}
```

Update `SiteHeader` in `src/components/site-ui.tsx` to:

```tsx
export function SiteHeader({ locale, dictionary }: HeaderProps) {
  return <HeaderNavigation dictionary={dictionary} locale={locale} />;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`

Expected: PASS with the structural header markup in place.

- [ ] **Step 5: Commit**

```bash
git add src/components/header-nav.tsx src/components/site-ui.tsx src/lib/header-nav.test.tsx
git commit -m "feat: add responsive header navigation shell"
```

### Task 3: Apply Header Styles And Responsive Layout Rules

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write the failing test**

No new automated CSS-specific test is required here; use the existing header structure tests plus build/typecheck as the verification surface for the styling task.

- [ ] **Step 2: Run test to verify baseline is green before styling**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`

Expected: PASS before the CSS changes.

- [ ] **Step 3: Write minimal implementation**

Replace the current header/nav responsive rules with styles for:

```css
.site-header {
  position: sticky;
  top: 0.65rem;
  grid-template-columns: auto minmax(0, 1fr) auto;
}

.site-header__desktop-nav {
  display: flex;
}

.site-header__mobile-controls,
.site-header__mobile-sheet,
.site-header__menu-button {
  display: none;
}

@media (max-width: 920px) {
  .site-header {
    grid-template-columns: minmax(0, 1fr) auto;
    border-radius: 28px;
  }

  .site-header__desktop-nav,
  .site-header__tagline--desktop,
  .site-header__meta--desktop {
    display: none;
  }

  .site-header__mobile-controls {
    display: flex;
  }

  .site-header__menu-button {
    display: inline-flex;
  }

  .site-header__mobile-sheet[data-open="true"] {
    display: grid;
  }
}
```

- [ ] **Step 4: Run verification to confirm styles did not break structure**

Run:
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH node node_modules/vitest/vitest.mjs run src/lib/header-nav.test.tsx`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run typecheck`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "style: redesign header navigation for desktop and mobile"
```

### Task 4: Sync Version And Run Full Verification

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Write the failing test**

The repository already enforces this through `npm run version:check`, so no separate test file is needed.

- [ ] **Step 2: Run version check to verify it fails before bumping**

Run: `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run version:check`

Expected: FAIL if the header changes have not been accompanied by a new version bump.

- [ ] **Step 3: Write minimal implementation**

Update:

```json
{
  "version": "0.1.7"
}
```

Apply the same top-level version to `package-lock.json` and the root package entry only.

- [ ] **Step 4: Run full verification**

Run:
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm test`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run typecheck`
- `PATH=/Users/petricabutusina/.nvm/versions/node/v22.20.0/bin:$PATH npm run build`

Expected:
- Header navigation test passes.
- Typecheck passes.
- Build passes.
- If full `npm test` still fails on the known media-approval inventory issue, report that as a pre-existing unrelated repository failure rather than a header regression.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: bump version for header redesign"
```
