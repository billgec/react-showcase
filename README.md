# react-showcase

Showing every JSF component in a React Environment, meant to replace Primefaces.

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Mantine](https://mantine.dev) as component library (MIT), incl. `dates`, `form`, `notifications`, `modals`, `dropzone`, `tiptap`
- [TanStack Table](https://tanstack.com/table) for data tables
- [React Router](https://reactrouter.com) for navigation
- [Tabler Icons](https://tabler.io/icons)
- [oxlint](https://oxc.rs) for linting

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev
```

| Script            | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build      |
| `npm run lint`    | Lint the sources                |

## Structure

```
src/
  main.tsx            Providers (Mantine, dates, modals, notifications, router)
  router.tsx          Route definitions
  shell/              App shell (header, navigation)
  styles/theme.ts     Colour scales, primary colour, CSS variable resolver
  styles/tokens.css   Semantic tokens (--primary-color, --surface-card, …) built on the scales
  pages/              Static pages (home, 404, placeholder) and showcase pages
  showcase/pages.ts   Registry of showcase pages – routes and navigation are generated from it
```
