# KKCB

Public website for `Kids Kicking Cancer with Budo Romania`.

## Development

```bash
npm install
npm run media:check
npm run media:process
npm test
npm run typecheck
npm run dev
```

`npm test` now enforces the repository rule that every change set must include a version bump in `package.json` and a synced `package-lock.json`.

## Production

For a standard production build and local production run:

```bash
npm install
npm run media:check
npm run build
npm run start
```

If you have added or re-curated source images before the build, regenerate processed media first:

```bash
npm run media:check
npm run media:process
npm run build
npm run start
```

## Versioning Rule

- Any repository modification must include a version bump in `package.json`.
- Keep `package-lock.json` in sync with the bumped package version.
- Run `npm run version:check` directly if you want to verify the rule without running the full test suite.

## Content structure

- global bilingual site copy: `src/content/site.ts`
- bilingual blog posts: `content/blog/ro` and `content/blog/en`
- curated original images: `assets/originals`
- temporary intake folder that must stay empty in commits: `_raw`
- processed site images: `public/media`

## Reference notes

- domain shortlist: `docs/domain-options.md`
- inspiration and research references: `docs/competitive-landscape.md`
- improvement backlog: `docs/continuous-improvement.md`
- media catalog: `docs/media-catalog.md`
