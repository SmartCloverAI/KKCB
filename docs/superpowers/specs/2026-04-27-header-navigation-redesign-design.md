# Header Navigation Redesign Design

## Goal

Redesign the site header so it feels more deliberate on desktop and works cleanly on mobile through a compact sandwich-menu sheet instead of the current cramped, horizontally scrolling navigation row.

## Current Context

- The current header lives in `src/components/site-ui.tsx` as `SiteHeader`.
- It is styled entirely in `src/app/globals.css`.
- The locale switcher is already a client component in `src/components/locale-switcher.tsx`.
- The current mobile behavior hides the tagline but keeps the nav inline, which causes the header to feel overcrowded and mechanically collapsed rather than intentionally adapted.

## Product Direction

- Desktop and mobile should feel like one header system, not two unrelated layouts.
- The overall tone stays calm, warm, and editorial, matching the existing site palette and rounded glass-like surfaces.
- Mobile navigation should open as a compact anchored sheet below the header, not a full-screen takeover.
- The redesign should improve clarity first, not add decorative motion or novelty.

## Approved Direction

### Desktop

The desktop header remains a single rounded bar, but with cleaner structure:

1. Left zone: brandmark only.
2. Center zone: primary navigation in a balanced row.
3. Right zone: tagline and locale switch.

The desktop layout should keep the current sticky behavior and soft blurred surface, but spacing, alignment, and visual hierarchy should be refined so the nav feels intentional rather than squeezed between brand and utility content.

### Mobile

On smaller screens, the header compresses into:

1. Left zone: brandmark.
2. Right zone: locale switch and circular sandwich button.
3. Secondary layer: a rounded dropdown sheet anchored below the header when opened.

The mobile sheet contains the primary navigation links in a stacked vertical layout and should visually read as an extension of the header rather than a modal.

## Interaction Design

### Sandwich Trigger

- The trigger is a button, not a link or generic div.
- It is visible only on mobile and tablet breakpoints where the inline nav is hidden.
- The icon starts as a three-line sandwich and animates into an `X` while open.
- The button exposes `aria-expanded`, `aria-controls`, and a meaningful accessible label.

### Menu Open/Close Behavior

- Tapping the button toggles the menu open and closed.
- Tapping a nav link closes the menu before route transition.
- Pressing `Escape` closes the menu.
- Clicking or tapping outside the sheet closes the menu.
- Resizing from mobile to desktop should close and reset the mobile menu state.

### Locale Placement

- On desktop, the locale switch remains in the right utility zone.
- On mobile, the locale switch stays visible in the header beside the sandwich button so language switching does not require opening the sheet.

## Visual Design

### Desktop Header

- Preserve the rounded pill silhouette and blurred surface already used by the site.
- Increase breathing room between nav items.
- Tighten the relationship between brandmark lines so the identity feels more polished.
- Keep the nav centered visually, not merely present in the middle grid column.
- Reduce the sense of crowding on the right side by treating the tagline as quiet supporting copy.

### Mobile Header

- The main header bar stays compact.
- The sandwich trigger should feel integrated with the locale switch, not appended as an afterthought.
- The dropdown sheet should have the same warm surface tone, border language, and shadow family as the rest of the site.
- Nav rows inside the sheet should be large enough to tap comfortably and should use the display font so they still feel part of the brand system.

### Motion

- Use small, controlled transitions only:
  - sandwich-to-close icon morph
  - sheet fade/slide reveal
  - subtle hover/press feedback on links and trigger
- Avoid full-screen overlays or exaggerated menu animation.

## Architecture

### Component Boundary

Introduce a dedicated client-side header controller component rather than pushing interactive state into the current server-rendered `SiteHeader`.

Recommended split:

- `SiteHeader` remains the public entry point used by the locale layout.
- Add a focused client component responsible for:
  - menu open state
  - outside-click handling
  - `Escape` handling
  - viewport reset behavior

This keeps the stateful mobile interaction isolated and avoids bloating unrelated shared UI code.

### Likely File Impact

- Modify `src/components/site-ui.tsx`
  - simplify `SiteHeader` composition and hand off nav interaction to a smaller unit
- Add a new client component under `src/components/`
  - encapsulate sandwich menu behavior
- Modify `src/app/globals.css`
  - replace the current mobile scroll-nav behavior with explicit desktop/mobile header styles
- Reuse `src/components/locale-switcher.tsx`
  - no product-level redesign needed, but styling hooks may need to expand

## Responsive Rules

### Desktop

- Inline nav visible.
- Sandwich trigger hidden.
- Tagline visible.
- Header uses a multi-zone horizontal layout.

### Tablet / Mobile

- Inline nav hidden.
- Sandwich trigger visible.
- Tagline hidden once space becomes constrained.
- Mobile sheet appears directly below the header.

The breakpoint should be chosen to solve actual crowding rather than merely mirroring the current `760px` cutoff.

## Accessibility

- Sandwich trigger must be keyboard focusable.
- The menu must be operable with keyboard only.
- Focus state must be visible on trigger and menu links.
- Accessible text should describe whether the menu is open or closed.
- The mobile menu should have a stable ID referenced by the trigger.

This redesign does not require a complex focus trap because the menu is an anchored sheet, not a modal dialog, but keyboard dismissal and focus visibility are required.

## Error Handling and Edge Cases

- If JavaScript is unavailable, the desktop nav still renders on larger screens and the mobile view should fail gracefully without breaking the header layout.
- If viewport changes while the menu is open, the menu state should reset so stale mobile UI does not persist into desktop layout.
- Long localized labels must wrap or truncate cleanly inside the sheet without breaking the header width.

## Testing Strategy

### Behavioral Checks

- Verify the sandwich button toggles the menu.
- Verify clicking a menu link closes the sheet.
- Verify `Escape` closes the menu.
- Verify outside click closes the menu.
- Verify resizing to desktop closes the mobile menu.

### Layout Checks

- Desktop header aligns brand, nav, and utility content cleanly.
- Tablet/mobile header shows brand, locale, and sandwich trigger without overflow.
- Mobile sheet spacing and tap targets remain usable.

### Repo Verification

- Run targeted tests for any new header behavior.
- Run `npm run typecheck`.
- Run `npm run build`.
- Run full `npm test`, while noting any pre-existing unrelated failures separately if they still exist.

## Out of Scope

- Rewriting the information architecture of the nav.
- Adding new pages or links.
- Introducing a full-screen drawer or overlay navigation system.
- Changing footer behavior or other site sections as part of this task.

## Implementation Notes

- Keep the new header consistent with the site’s current fonts and palette.
- Prefer a small, explicit client component over broad client conversion of shared UI.
- Avoid desktop-only design choices that collapse awkwardly again on medium screens.
- The end result should look intentionally designed on mobile, not like a compressed desktop bar.
