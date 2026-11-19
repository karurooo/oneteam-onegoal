# Butuan City Sports Department

Website for the Butuan City Sports Department.

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, TanStack Query, Zustand,
React Hook Form + Zod, Radix UI. Tested with Vitest and Playwright.

## Requirements

Node 22

## Setup

```sh
npm ci
cp .env.example .env
npm run dev
```

## Scripts

| Script               | Description                   |
| -------------------- | ----------------------------- |
| `npm run dev`        | Start the Vite dev server     |
| `npm run build`      | Type-check and build for prod |
| `npm run preview`    | Preview the production build  |
| `npm run lint`       | Run ESLint                    |
| `npm run type-check` | Run `tsc -b`                  |
| `npm test`           | Run unit tests (Vitest)       |
| `npm run test:e2e`   | Run end-to-end tests          |
| `npm run format`     | Format with Prettier          |
