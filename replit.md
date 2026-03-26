# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── zest-website/       # Zest brand website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Zest Website (artifacts/zest-website)

A premium, multi-page website for Zest — a family-led importer and distributor of natural beauty, wellness, spa, and lifestyle products, established 23 years ago.

### Pages
- `/` — Homepage (hero, brand philosophy, collections, B2B preview, rituals, story, testimonials)
- `/our-story` — Company story and values
- `/brand-partners` — Grid of all brand partners
- `/brands/:slug` — Individual brand detail template
- `/collections` — Product collection worlds
- `/products/:slug` — Rich product detail template
- `/b2b-hospitality` — B2B and hospitality support page
- `/bespoke` — Bespoke solutions page
- `/journal` — Blog/journal page
- `/contact` — Contact and enquiry page

### Key Components
- `Header.tsx` — Sticky nav with logo, links, Enquire CTA, mobile menu
- `Footer.tsx` — Links, newsletter, social, WhatsApp
- `Cards.tsx` — BrandCard, ProductCard, CollectionCard, TestimonialCard
- `EnquiryCTA.tsx` — Reusable enquiry block
- `WhatsAppButton.tsx` — Fixed floating WhatsApp button

### Data Files (src/data/)
- `brands.ts` — 12-15 placeholder brand records
- `products.ts` — 20-30 placeholder product records
- `collections.ts` — 9-10 collection/category records
- `testimonials.ts` — 6-8 placeholder testimonials

### Dependencies
- `framer-motion` — Subtle animations
- `lucide-react` — Clean iconography
- `clsx` + `tailwind-merge` — Class utilities

### Design
- Warm off-white background, terracotta/coral primary accent
- Playfair Display / Georgia serif for headings, Inter for body
- Airy, editorial, minimal premium feel
- Unsplash placeholder images (spa, botanical, wellness)

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages.

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec.
