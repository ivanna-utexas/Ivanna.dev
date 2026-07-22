# Ivanna Personal Website

My personal portfolio site — a single-page React app introducing me, my experience, and my projects, with a terminal/pixel-art aesthetic.

**Live site:** https://ivanna-portfolio.com

## About

This is my full personal portfolio build. It's a single-page app made up of independent sections — hero, about, experience, projects, and contact — each rendered as its own component and styled with CSS Modules.

## Sections

- **Hero** — landing intro with app-icon-style links (GitHub, Gmail, LinkedIn) and a terminal-style visual
- **About** — background, interests, and skills
- **Experience** — timeline of research and work experience, driven by `src/data/experience.json`
- **Projects** — card grid of featured projects (Bit Blast, Squirrel++, Snake, Tic-Tac-Toe, StARLinG Lab research) with expandable detail modals, driven by `src/data/projects.js`
- **Contact** — links and a downloadable resume

## Tech Stack

- **React 19** + **Vite 7**
- **CSS Modules** for scoped component styling
- **ESLint** for linting

## Project Structure

```
src/
├── components/       # NavBar, Hero, About, Experience, Projects, Contact
├── data/             # experience.json, projects.js — content is data-driven
├── assets/           # images, icons, and fonts organized by section
├── styles/           # shared effects (e.g. TypingText) and CSS variables
├── App.jsx           # top-level layout composing all sections
└── main.jsx          # React entry point
```

## Getting Started

```bash
npm install
npm run dev       # start local dev server with HMR
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Updating Content

- **Add/edit a project card:** edit `src/data/projects.js` (each entry includes a thumbnail, description, bullet points, tech stack, and links)
- **Update experience timeline:** edit `src/data/experience.json`
- **Swap the resume:** replace `public/Ivanna-Aleman-Coronado-Resume.pdf`
