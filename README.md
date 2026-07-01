# Body Forge - Marketing Landing Page

A bilingual (RU / EN) landing page for the Body Forge iOS app. Built with Next.js (App Router) + Tailwind CSS + Framer Motion. Dark OLED aesthetic matching the app, neon volt accent, bento grid, smooth scroll animations and tilted device mockups.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /ru)
```

Build and production:

```bash
npm run build
npm start
```

## Languages

- `/ru` - Russian version
- `/en` - English version

The language switcher lives in the header. The locale is detected automatically from the browser's `Accept-Language` header (`src/middleware.ts`), then pinned to the URL. All copy is stored in `src/lib/dictionaries.ts` - edit the wording there.

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
Links are set in `src/lib/config.ts` (separate for ru/us). If a single domain or
support email appears later, change it there (`support@bodyforge.app` is currently
a placeholder).

## Deployment

The project is ready for Vercel out of the box: `Framework Preset = Next.js`, no extra
setup. Before publishing, set the real domain in `metadataBase`
(`src/app/[locale]/layout.tsx`).

## Assets

- `public/logo/` - logo
- `public/screens/` - clean screen captures (in custom iPhone frames)
- `public/shots/{ru,en}/` - ready-made marketing compositions and the ecosystem image
