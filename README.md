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
