# 3DP-Website-

Website for **3DP — Data Driven Decisions Partners**, a Kigali-based firm helping companies and individuals become data driven through training, data products, data-driven systems, and strategy.

- Original design preview (Claude artifact): https://claude.ai/artifact/1z7pjkroKX7cH38wWSiVDS

Built with **React**, **Vite** and **Tailwind CSS v4**.

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html               Vite entry (fonts, root element)
src/
  main.jsx               React entry point
  App.jsx                Page layout — composes the sections
  index.css              Tailwind import, colour tokens (dark/light), animations
  data/content.js        All website text (nav, services, programs, sectors, contact…)
  components/
    Header.jsx           Sticky nav with mobile menu
    Hero.jsx             Hero section and animated chart graphic
    WhatWeDo.jsx         Train / Build / Advise pillars
    Programs.jsx         Capacity building programs
    HowWeWork.jsx        4-step engagement process
    Sectors.jsx          Sectors list
    Contact.jsx          Contact details and form (mockup — not wired to an inbox yet)
    Footer.jsx           Footer links and socials
    Container.jsx        Shared max-width wrapper
    Section.jsx          Shared section shell with heading
    Logo.jsx             3DP logo
```

To change website text, edit `src/data/content.js`.
