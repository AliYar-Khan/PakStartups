# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version

This project uses **Next.js 16** with **React 19**. APIs, conventions, and file structure may differ from older versions in training data. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code and heed deprecation notices.

## Commands

All commands must be run from within the `pakstartups/` subdirectory (the actual project root — the repo root contains only this subdirectory and documentation).

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also catches TypeScript errors)
npm run lint     # Run ESLint
npm run start    # Start production server (requires build first)
```

There is no test runner configured. `npm run build` is the primary correctness check.

## Environment Setup

Copy `.env.local.example` to `.env.local` and fill in Firebase credentials. All required variables are prefixed `NEXT_PUBLIC_FIREBASE_*`. The optional `ENABLE_PUBLIC_WRITES=false` flag gates API route writes — keep it `false` unless intentionally opening public submissions.

## Architecture

### App Structure

Uses Next.js App Router. All pages live in `app/` as `page.tsx` files. API routes live in `app/api/` (4 routes: `/auth/register`, `/events`, `/match`, `/startups`). The root layout (`app/layout.tsx`) wraps everything in `AuthProvider` and renders `Header`, `Footer`, and `CookieConsent`.

### Auth & State

Authentication state lives in `lib/context/AuthContext.tsx`. It exposes `{ user, profile, loading }` via the `useAuth()` hook. `user` is the raw Firebase `User` object; `profile` is the Firestore document from the `users/{uid}` collection typed as `UserProfile`. Both update in real-time via `onSnapshot`. Any component needing auth state should consume `useAuth()` — do not initialize Firebase directly in components.

### Firebase Integration

- `lib/firebase/config.ts` — initializes the client SDK (singleton pattern to prevent hot-reload duplication) and exports `auth`, `db`, `storage`
- `lib/firebase/auth.ts` — auth helpers (register, login, logout, createUserProfile)
- `lib/firebase/firestore.ts` — general Firestore utilities
- `firebase-admin` is a dev dependency used only in API routes for server-side operations

### Service Layer

Business logic lives in `lib/services/`. Each feature has its own file (`startups.ts`, `match.ts`, `events.ts`, `ideas.ts`, `blog.ts`, `b2b.ts`, `siteConfig.ts`). Services talk directly to Firestore — they are not wrappers around the API routes. `siteConfig.ts` manages the canonical cities/categories filter lists stored at `siteConfig/filters` in Firestore (falls back to `DEFAULT_SITE_FILTERS` if the doc doesn't exist).

API routes in `app/api/` exist for public/unauthenticated submissions and are separate entry points. **Note:** `app/api/match/route.ts` currently returns hardcoded stub profiles — it is not wired to Firestore yet.

### Firestore Collections & Access Patterns

Key collections and their approval patterns:
- `startups`, `events`, `blogPosts` — require admin approval (`status: "pending"` on create, `status: "approved"` to be public)
- `matchProfiles`, `connections` — user-owned, no moderation
- `b2bDemands`, `b2bSolutions` — user-owned, public read
- `knowledgeResources`, `siteConfig` — admin write only

Security rules enforce `ownerId == request.auth.uid` on creates and block role escalation to `admin`. Users cannot grant themselves admin via profile updates.

### Real-time Data Hook

`lib/hooks/useCollection.ts` exports `useCollection<T>(collectionName, options)` — a generic hook for real-time Firestore reads via `onSnapshot`. Pass Firestore `QueryConstraint` objects in `options.constraints`. Use this in client components that need live updates; use one-shot service functions (from `lib/services/`) for server-initiated or non-reactive reads.

### Admin Route Protection

`components/admin/AdminGuard.tsx` wraps every admin page. It redirects unauthenticated users to `/auth/login` and authenticated non-admins to `/dashboard`. All pages under `app/admin/` must render their content inside `<AdminGuard>`.

### Design System

Tailwind CSS 4 with a Material Design 3 token set. Custom color tokens are defined in `tailwind.config.ts` under `theme.extend.colors`. A partial set is also mirrored as plain CSS custom properties in `app/globals.css` (`:root` block) — these are separate from the Tailwind tokens and used for direct CSS use. The palette is green/earth toned — use the Tailwind token names (e.g., `text-primary`, `bg-surface-container`) rather than raw hex values. Typography uses Plus Jakarta Sans loaded via Google Fonts. Icons use Lucide React (`lucide-react`) and Material Symbols Outlined (via Google Fonts CSS). The `clsx` and `tailwind-merge` packages are available for conditional class merging.

### Path Aliases

`@/` maps to the project root (`pakstartups/`), configured in `tsconfig.json`. Use `@/lib/...`, `@/components/...`, `@/app/...` for imports.

## Contribution Conventions

Branch names: `feat/...`, `fix/...`, `docs/...`  
Commit messages: `feat: ...`, `fix: ...`, `docs: ...`  
Run `npm run lint` before committing. Keep PRs scoped to one logical change.
