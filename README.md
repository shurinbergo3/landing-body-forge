# Body Forge - Marketing Landing Page

A bilingual (RU / EN) landing page for the Body Forge iOS app. Built with Next.js (App Router) + Tailwind CSS + Framer Motion. Dark OLED aesthetic matching the app, neon volt accent, bento grid, smooth scroll animations and tilted device mockups.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (Russian by default)
```

Build and production:

```bash
npm run build
npm start
```

## Languages

- `/` - Russian version (default, no locale prefix)
- `/en` - English version

The language switcher lives in the header. Russian is served on the clean root URL: `src/middleware.ts` rewrites `/` to the Russian content internally and redirects any `/ru` URL back to `/` so there's no duplicate. English keeps the `/en` prefix. All copy is stored in `src/lib/dictionaries.ts` - edit the wording there.

## Where to change what

| What | File |
| --- | --- |
| RU/EN copy | `src/lib/dictionaries.ts` |
| App Store link, support email | `src/lib/config.ts` |
| Colors, fonts, animations | `tailwind.config.ts`, `src/app/globals.css` |
| Page sections | `src/components/*`, composed in `src/app/[locale]/page.tsx` |
| Images (screenshots, logo) | `public/` |

### App Store

The app: **Body Forge - AI Fitness Coach**, `id6761138589`.
Links are set in `src/lib/config.ts` (separate for ru/us), along with the support
email (`alex@buildbyalex.com`). Change them there if anything moves.

## Deployment

The project is ready for Vercel out of the box: `Framework Preset = Next.js`, no extra
setup. The canonical domain (`https://bodyforges.com`) is already set in `metadataBase`
(`src/app/[locale]/layout.tsx`) - change it there if the domain moves.

For a self-hosted setup there's a Docker build (`output: "standalone"` in
`next.config.mjs`). The `Dockerfile` produces a slim runtime image, and
`.github/workflows/docker.yml` builds and pushes it to GHCR on every push to `main`.

## Assets

- `public/logo/` - logo
- `public/screens/` - clean screen captures (in custom iPhone frames)
- `public/shots/{ru,en}/` - ready-made marketing compositions and the ecosystem image
