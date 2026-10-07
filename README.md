# sanam-links

SANAM link page (Platform Stack design). React 18 + TypeScript + Vite 5 + Tailwind 3.4 + Framer Motion. Hosted on Vercel.

- Live: https://sanam-links.vercel.app
- QR code: https://sanam-links.vercel.app/go (files in `qr/`)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Edit content
Everything on the page comes from **`src/data/links.ts`**:
- `events`: add or edit event cards (newest first).
- `links`: website and social links.
- `tagline`, `platforms`: hero text and tiles.

## Change where the QR goes
Edit `vercel.json` → `destination` → commit. Live in about 30 seconds.
```json
{ "source": "/go", "destination": "https://new-link-here", "permanent": false }
```
- `"/"` = the link page (default).
- Keep `"permanent": false`, or phones cache the old link.

## Deploy (first time)
1. Push this folder to a GitHub repo `sanam-links`.
2. Vercel → Add New Project → import the repo → **Project name: `sanam-links`** (must match, or the QR breaks). Vite is auto-detected → Deploy.

## Structure
```
src/data/links.ts          content
src/components/            PlatformTiles, EventCard, LinkCard
src/App.tsx                layout
public/                    SANAM logo (white), favicon
qr/                        QR files (not deployed)
vercel.json                /go redirect
```

## Brand
Onyx #21201F · Charcoal Taupe #564D48 · Stone Taupe #807068 · Warm Sand #BDABA2 · Ivory Mist #F6F1F0. Montserrat headings, Lato body. Tokens are in `tailwind.config.js`.
