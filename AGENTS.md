<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# WorkBot

A web application built with Next.js, TypeScript, Tailwind CSS and shadcn/ui.

## Commands

- `pnpm dev` — start the dev server
- `pnpm check` — run lint, format check, typecheck and build (CI runs this)
- `pnpm lint` — ESLint with zero warnings allowed
- `pnpm format:check` — Prettier check

## Conventions

- **App Router** with the `src/` directory. Routes live under `src/app/`.
- **Server Components by default.** Only add `"use client"` when the component needs browser APIs or interactivity.
- **One config module** at `src/lib/config.ts` reads `process.env`. No other file should read environment variables directly.
- **shadcn/ui** components live in `src/components/ui/`. App components go in `src/components/`.
- Keep pull requests small: one feature, one PR.
- Every PR must pass `pnpm check` before merge.
