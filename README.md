# Calculator

A simple calculator built with React, Vite, and Tailwind CSS. It supports basic arithmetic, parentheses, clearing the full input or the last character, and button click sounds.

## Run locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The Vite configuration uses relative asset paths so the build can be hosted under a GitHub repository path with GitHub Pages.

## Deploy with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the app and deploys it to GitHub Pages whenever a commit is pushed to `main`. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. After the first successful workflow run, the site will be available at:

<https://dipendramca-cell.github.io/Calculator/>

## Technologies

- React
- Vite
- Tailwind CSS
