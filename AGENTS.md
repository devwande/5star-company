# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page **Vite + React + TypeScript + Tailwind** frontend app (a "5Star Company" membership sign-up page). There is no backend, database, or other service — the only thing to run is the Vite dev server.

- Package manager: **npm** (uses `package-lock.json`). Dependencies are refreshed automatically by the startup update script (`npm install`).
- Standard commands are defined in `package.json` `scripts`:
  - Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`).
  - Lint: `npm run lint` (ESLint, `--max-warnings 0`).
  - Build: `npm run build` (runs `tsc` type-check then `vite build`).
  - Preview production build: `npm run preview`.
- The dev server binds to localhost only. Use `npm run dev -- --host` if you need it reachable on the network.
