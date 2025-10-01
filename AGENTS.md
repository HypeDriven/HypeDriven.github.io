# Repository Guidelines

## Project Structure & Module Organization
- The Vue 3 app lives in `src/`: `components/` are grouped by feature with `index.vue` entry points, `view/` contains router-level pages, `store/` hosts Vuex modules with `store.js` as root, and `api/` centralizes remote helpers.
- Shared styling sits in `src/index.css` and `src/assets/css/`, with Tailwind utilities configured via `tailwind.config.js`.
- Translations load from `src/assets/locales/*.json` through `lang/i18n.js`; ensure new strings follow the existing language keys.
- GitHub Pages deployment helpers are in `src/scripts/gh-pages-deploy.js`. Built artifacts land in `dist/` and should never be edited manually. Static files and SEO assets stay in `public/`.

## Build, Test, and Development Commands
- `npm install` installs Vue CLI, Tailwind, and CKEditor dependencies.
- `npm run serve` launches the dev server on localhost with hot reload and Firebase analytics.
- `npm run build` outputs an optimized bundle in `dist/`; run before proposing deployment changes.
- `npm run lint` applies the Vue 3 ESLint preset; use `--fix` to auto-resolve style issues.
- `npm run deploy` builds and pushes the site to GitHub Pages via the Node script; start from a clean, committed branch.

## Coding Style & Naming Conventions
- Use 2-space indentation in scripts/configs and keep templates compact; prefer single quotes in JavaScript.
- Name Vue files in kebab-case inside feature folders (`components/card/index.vue`) while exporting PascalCase component names.
- Lean on Tailwind utilities first, reserving scoped CSS for bespoke interactions. Place shared assets under `src/assets/`.
- Centralize hard-coded copy in locale JSON and access via `$t` helpers.

## Testing Guidelines
- Automated tests are not yet configured; at minimum run `npm run lint` and verify affected views manually in `npm run serve`.
- When adding significant features, include reproducible manual test notes in the PR and consider introducing Vue Test Utils coverage under a future `tests/` directory.

## Commit & Pull Request Guidelines
- Follow the existing short imperative commit style (`Fix hero carousel autoplay`). Combine related changes per commit.
- PRs should describe intent, list manual verification steps, link the relevant issue, and attach UI screenshots for visual updates.
- Note any localization, routing, or deployment impacts so reviewers can focus on regression risks.

## Deployment & Configuration Tips
- Firebase keys and third-party tokens belong in `.env` files prefixed with `VUE_APP_`; avoid committing secrets.
- Keep `vue.config.js` and `tailwind.config.js` changes tightly scoped and document any build-time assumptions in the PR discussion.
