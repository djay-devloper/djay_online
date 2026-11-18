# djay.online

Personal developer portfolio for Dhananjay Yadav, built with React, Vite, Tailwind CSS, and Lucide icons.

## Features

- Responsive single-page layout with experience, projects, skills, education, and contact sections
- Mobile navigation and smooth section scrolling
- Project cards with GitHub and live demo links
- Resume link to Google Drive
- Contact form that opens a prefilled email draft

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the site.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/       Reusable page sections and UI components
  data/             Portfolio content and links
  App.jsx           Page composition
  index.css         Tailwind and global styles
```

Update the portfolio text, contact details, and external links in [`src/data/portfolioData.js`](src/data/portfolioData.js).
