# LATCH — Café & Bakery

Neighborhood **café + bakery** small-business site: full-bleed shop photos, menu, hours, location, and catering request. Built as a portfolio piece with a strong first-viewport brand test.

**Live (after Pages enable):** [https://achrafbennanizia.github.io/latch-bakery/](https://achrafbennanizia.github.io/latch-bakery/)

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Motion for section entrances
- Lenis (desktop) + ~93% threshold section snap + progress rail
- Static export → GitHub Pages (`/latch-bakery`)

## Design
- Brand-first hero: **LATCH** as the dominant signal on a full-bleed storefront photo
- Cool linen / ink / butter / sage — photography-led, not cream-terracotta defaults
- Display: Fraunces · Body: Outfit
- Sections: Menu · Hours · Location · Catering

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run build:pages
npm run typecheck
npm run lint
```

## CI/CD

| Workflow | File | Trigger | Steps |
|---|---|---|---|
| **CI** | `.github/workflows/ci.yml` | PR + push `main` | `npm ci` → lint → typecheck → `build:pages` → verify `out/` + photos |
| **Deploy** | `.github/workflows/deploy.yml` | push `main` + manual | same checks → upload artifact → GitHub Pages |

Enable once: **Settings → Pages → Source: GitHub Actions**.

Local Pages build:

```bash
npm run build:pages
npx serve out
```
# Latch
