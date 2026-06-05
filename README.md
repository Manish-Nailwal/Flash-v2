# Flash by Manish Labs

A fast, minimal color-sequence **memory game** (Simon-Says style). Watch the
flashing pattern, repeat it back, and see how far you can go. Fully
**client-side / serverless**: no backend, no account, no network calls.

Part of the [Manish Labs](https://manishlabs.com) ecosystem.

## Features

- **Normal mode**: repeat ever-growing sequences until you slip.
- **Blitz mode**: score as much as you can before the 30-second clock runs out.
- **Local high score**: your best run is saved in the browser via `localStorage` (key `flash-highscore`); no sign-in needed.
- **Light and dark themes**: toggle from the top bar; the whole UI adapts and your choice is remembered.

## Tech stack

- React 19 + Vite 6
- React Router 7 (SPA)
- Tailwind CSS 3 (class-based dark mode, CSS-variable palette)
- lucide-react (icons), react-toastify (feedback)

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build to dist/
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
│   ├── Navbar.jsx, Footer.jsx, ThemeToggle.jsx
│   └── Play/            # Color board, DemoBoard, Normal/Blitz modes, mode selector
├── pages/              # Home (with features), Play, Play.css
├── context/            # AuthContext (high score + game mode), ThemeContext (light/dark)
├── util/gameUtil.js    # sequence/scoring logic + localStorage high score
├── App.jsx             # routes + app shell
└── main.jsx            # entry
```
