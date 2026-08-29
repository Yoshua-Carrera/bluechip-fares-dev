# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm**. Dev/build scripts wrap the process with dotenv (`.env.local`) and Sentry instrumentation.

- `pnpm dev` — Vite dev server on port 3000 (loads `.env.local`, imports `instrument.server.mjs`, and the `neon-vite-plugin` provisions/claims a Neon database if `DATABASE_URL` is empty).
- `pnpm build` — Vite build, then copies `instrument.server.mjs` into `.output/server`.
- `pnpm start` — Runs the Netlify/Node output with Sentry instrumentation.
- `pnpm lint` / `pnpm format` / `pnpm check` — ESLint (`@tanstack/eslint-config` + storybook flat config) / Prettier write + eslint --fix / Prettier check.
- `pnpm generate-routes` — Regenerate `src/routeTree.gen.ts` via `tsr`. The Vite plugin also generates it during dev/build.
- `pnpm db:generate | db:migrate | db:push | db:pull | db:studio` — Drizzle Kit against `src/db/schema.ts`. Config reads `DATABASE_URL` from `.env.local`/`.env`.
- `pnpm storybook` / `pnpm build-storybook` — Storybook 10 on port 6006. Stories double as Vitest browser tests.
- Tests: `pnpm vitest` (the Vitest project runs Storybook stories in headless Chromium via `@vitest/browser-playwright`). Single story test: `pnpm vitest run <story-file>`.
- Add Shadcn components with `pnpm dlx shadcn@latest add <component>` (New York style, zinc base, aliases in `components.json`).

## Architecture

### TanStack Start + file-based routing

- Entry factory is `src/router.tsx` (`getRouter`), wired to `src/routes/__root.tsx` (root context type is `{ queryClient: QueryClient }`, injects `PostHogProvider` and `TanStackDevtools`).
- Routes live in `src/routes/` and are compiled to `src/routeTree.gen.ts`. Preloading is `intent` with `defaultPreloadStaleTime: 0`.
- Server routes use the `server` handler pattern on `createFileRoute` (e.g. `src/routes/api/auth/$.ts`, `src/routes/mcp.ts`).
- Server functions use `createServerFn` from `@tanstack/react-start` (see `src/data/loaders/articles.ts`).
- SSR/Query integration is set up via `setupRouterSsrQueryIntegration` in `src/router.tsx`; the query client comes from `src/integrations/tanstack-query/root-provider.tsx`.

### Two database entry points (do not confuse them)

- `src/db.ts` — Neon HTTP serverless client (`@neondatabase/serverless`). Exports `getClient()` that returns `undefined` when `DATABASE_URL` is missing. Used for lightweight/edge queries.
- `src/db/index.ts` — Drizzle ORM over `node-postgres`, bound to the schema in `src/db/schema.ts`. Use this for typed queries/migrations.
- Drizzle migrations output to `./drizzle`; seed SQL is in `db/init.sql` (fed to the Neon plugin during dev bootstrap).

### Auth

- Better Auth server config: `src/lib/auth.ts` (email/password + `tanstackStartCookies` plugin). The catch-all route `src/routes/api/auth/$.ts` forwards GET/POST to `auth.handler`.
- Client: `src/lib/auth-client.ts` (`createAuthClient` from `better-auth/react`).

### Content: Strapi

- SDK singleton in `src/data/strapi-sdk.ts` (reads `VITE_STRAPI_URL`, appends `/api`).
- Loaders in `src/data/loaders/` wrap Strapi collections in `createServerFn`s. `PAGE_SIZE` in `articles.ts` controls the page size for the articles demo. Block rendering lives in `src/components/blocks/`.

### i18n (Paraglide)

- Locales: `en` (base), `de`. Messages: `messages/{locale}.json`. Config: `project.inlang/settings.json`.
- The Paraglide Vite plugin generates `src/paraglide/` (runtime + messages) on dev/build — do not edit those outputs. Import via `#/paraglide/runtime` and `#/paraglide/messages`.
- URL-based locale strategy (`strategy: ['url', 'baseLocale']`); root route sets `<html lang>` from `getLocale()`.

### MCP server

- `src/routes/mcp.ts` exposes a POST handler that connects an `McpServer` (from `@modelcontextprotocol/sdk`) to `handleMcpRequest` in `src/utils/mcp-handler.ts`. Todo state persists to `mcp-todos.json` at repo root via `src/mcp-todos.ts`.

### Observability

- Sentry init lives in `instrument.server.mjs` (imported via `--import` for `dev`/`start`, and copied to `.output/server` on build). Guarded by `VITE_SENTRY_DSN`; sampling is `tracesSampleRate: 0.1`.
- When adding server functions, wrap the handler body in `Sentry.startSpan({ name: '...' }, async () => { ... })` (imported from `@sentry/tanstackstart-react`).
- PostHog client provider is `src/integrations/posthog/provider.tsx`; needs `VITE_POSTHOG_KEY` (and optionally `VITE_POSTHOG_HOST`).

## Conventions

- Path aliases: `#/*` and `@/*` both resolve to `src/*` (see `tsconfig.json` and `package.json` imports map). Both are in use — prefer `#/*` for new code to match `components.json` aliases.
- React Compiler is enabled via `@rolldown/plugin-babel` + `reactCompilerPreset()` in `vite.config.ts`. Avoid patterns that defeat auto-memoization (e.g., inline mutating closures).
- Strict TS with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` — imports of types must use `import type`.
- ESLint disables `import/no-cycle`, `import/order`, `sort-imports`, `@typescript-eslint/array-type`, `@typescript-eslint/require-await`, and `pnpm/json-enforce-catalog` on top of the TanStack config.
- Storybook stories under `src/**/*.stories.*` are executed as Vitest browser tests (`.storybook/main.ts`); keep them runnable headless.
- Vite plugin order matters: `devtools()` must remain the first plugin (see `vite.config.ts`).

## TanStack Intent skills

`AGENTS.md` contains an `intent-skills` manifest of `pnpm dlx @tanstack/intent@latest load <id>` commands. Before non-trivial changes to a TanStack surface (router data-loading, server functions, table features, devtools, Start SSR, etc.), consult `AGENTS.md`, find the matching id (the `for:` field describes when to load it), and run the `load` command to pull the up-to-date guidance for that area.

## Environment

`.env.local` is the source of truth in dev. Required/known variables:

- `DATABASE_URL`, `DATABASE_URL_POOLER` — Postgres (auto-provisioned by `vite-plugin-neon-new` when empty; claimable Neon DBs expire in 72h).
- `VITE_STRAPI_URL` — Strapi base URL (default `http://localhost:1337`).
- `VITE_SENTRY_DSN` — enables Sentry; warning-only when missing.
- `VITE_POSTHOG_KEY` (+ optional `VITE_POSTHOG_HOST`) — PostHog.
- `BETTER_AUTH_SECRET` — generate with `pnpm dlx @better-auth/cli secret`.

### Code Standards

1. If you create components, make them modular, do not exceed 400 lines in a single file
2. Make sure you rely on Paraglide for any copy that you put into the page, with English and Turkish translations (base locale is Turkish)
3. Do not use `any` types, everything should be end-to-end type safe (`@typescript-eslint/no-explicit-any` is set to `error`)
4. In order to verify the quality of the changes you are to run `pnpm precommit`; this will run prettier + lint (via `pretty`) and `build`, which should all pass without any errors or warnings
5. Do not overdo it with comments, ideally these should be minimal if existent at all on new code being generated, if something happens to be really complex it is fine to add a comment, but for most tasks there should be little to no comments on generated code.

### Rules regarding permissions

1. Do not run Git push/commit/add directly, just ask for reviews
2. Do not ever run any db migration or even generation commands (any package.json script that starts with db:). If you want to make changes to the schema, just provide a heads up and reminder to the user to run the appropriate DB commands in order to publish the changes online

### Code quality checks

1. The main one you should run is just `pnpm precommit` that includes all that you need
