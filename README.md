
# MyPortfolio

A personal portfolio site built with React and Vite showcasing projects, skills, and contact information.

This repository contains the source for the portfolio website. It uses Vite for development, Tailwind CSS for styling, and several React libraries for animation and UI.

## Table of contents
- About
- Quick start
- Available scripts
- Project structure
- Tech stack


## About

The site highlights recent projects, tools/tech used, and a resume link. Pages and UI components are implemented as React components in the `src` directory. The `Development` page lists featured projects and tech stack icons.

## Quick start

Prerequisites

- Node.js (LTS recommended, Node 18+)
- npm (bundled with Node) or yarn

Install dependencies

```powershell
npm install
```

Run dev server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

Lint the project

```powershell
npm run lint
```

## Available scripts

The following scripts are defined in `package.json`:
# My Portfolio

Hi — I'm Ganesh. This is my personal portfolio site where I showcase projects I built, tools I use, and a link to my resume. I built this site with React and Vite to keep the dev experience fast and the output lightweight.

## What this repo contains

- The complete source for my portfolio website.
- React components live under `src/` (pages, components and styles).
- Static assets (images) live in `public/Images`.
- Build and dev configuration files are at the project root (`vite.config.js`, `tailwind.config.js`, `postcss.config.js`).

## Quick start (how I run this locally)

Prerequisites:

- Node.js (I use LTS, Node 18+)
- npm (comes with Node) — you can use yarn if you prefer

Install dependencies:

```powershell
npm install
```

Start the dev server:

```powershell
npm run dev
```

Open http://localhost:5173/ in your browser (Vite will show the exact URL when it starts).

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

Lint the project (I keep lint rules strict):

```powershell
npm run lint
```

## Scripts (from package.json)

I keep the following scripts available:

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
	"preview": "vite preview"
}
```

## Notable files & structure

- `src/pages/Development.jsx` — shows my recent projects and tech stack.
- `src/` — all React code (pages, components, hooks, styles).
- `public/Images/` — images used for project cards and avatars.
- `package.json` — dependencies and scripts.

If you want to update project cards, replace images in `public/Images` and update the corresponding links/titles inside `src/pages/Development.jsx`.

## Tech I use

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- react-icons and small helper libraries (see `package.json` for the full list)

## Notes for future me (and contributors)

- Keep images optimized: use compressed PNG/JPEG and reasonable dimensions to improve load times.
- If you add new dependencies, run `npm install` and verify the app builds with `npm run build`.
- Run `npm run lint` and fix any reported issues before committing.

## Contact & resume

My resume is linked from the site (check the Development page). To update the resume link, edit the anchor URL in `src/pages/Development.jsx`.




