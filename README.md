# Flash — a Manish Labs experiment

A fast-paced color-sequence **memory game** (Simon-Says style). Watch the
flashing pattern, repeat it back, and see how far you can go. Fully
**client-side / serverless** — no backend, no account, no network calls.

Part of the [Manish Labs](https://manishlabs.com) ecosystem.

## Features

- **Normal mode** — repeat ever-growing sequences until you slip.
- **Blitz mode** — score as much as you can before the 30-second clock runs out.
- **Local high score** — your best run is saved in the browser via `localStorage` (key `flash-highscore`); no sign-in needed.
- **Manish Labs theme** — dark UI, purple accent, Geist type, glassmorphism.

## Tech stack

- React 19 + Vite 6
- React Router 7 (SPA)
- Tailwind CSS 3
- lucide-react (icons), react-toastify (feedback)

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deployment

This is a static SPA. `public/_redirects` provides the SPA fallback
(`/* /index.html 200`) for Netlify; on Vercel add an equivalent rewrite to
`/index.html`. Build command `npm run build`, publish directory `dist`.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx, Footer.jsx
│   └── Play/            # Color board, Normal/Blitz modes, mode selector
├── pages/              # Home, Features, Play, Play.css
├── context/            # AuthContext (high score + game mode state)
├── util/gameUtil.js    # sequence/scoring logic + localStorage high score
├── App.jsx             # routes
└── main.jsx            # entry
```
