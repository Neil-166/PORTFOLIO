# Neil Dua — Portfolio

A premium, responsive developer portfolio built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Zustand, Lenis, React Three Fiber, Recharts, and EmailJS.

## Quick start

1. Use Node.js 20.19+ (or 22.12+).
2. Install packages: `npm install`
3. Copy `.env.example` to `.env` and add your values.
4. Start the app: `npm run dev`
5. Create an optimized production bundle: `npm run build`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Public site URL used by SEO canonical tags. |
| `VITE_GITHUB_USERNAME` | GitHub account shown in the Coding dashboard. |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID. |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID. |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key. |
| `VITE_GOOGLE_MAPS_EMBED_URL` | Optional map embed URL for the contact page. |

For EmailJS, create a template containing `from_name`, `reply_to`, `message`, and `to_name`, then copy the service, template, and public key identifiers into `.env`. The form intentionally falls back to an informative direct-email prompt until those values exist.

## Project structure

```
src/
  app/           Application composition and routes
  components/    Layout, UI primitives, and reusable sections
  data/          Typed content and portfolio data
  hooks/         Reusable React hooks
  lib/           Constants and utilities
  pages/         Route-level screens
  services/      Typed external API integrations
  store/         Zustand state
  styles/        Global design tokens and Tailwind styles
  types/         Shared TypeScript types
```

## Data integration

The GitHub dashboard fetches public profile and repository data directly from GitHub’s REST API. Competitive-programming services are isolated in `src/services/codingProfiles.ts`; add a public endpoint or proxy once the relevant usernames are available. Dev.to RSS/API and quote service wrappers are also ready in `src/services/`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Vercel detects Vite automatically. Use `npm run build` and `dist` if asked.
4. Add all variables from `.env.example` in **Settings → Environment Variables**.
5. Deploy. Set `VITE_SITE_URL` to the final production domain and update `public/robots.txt` / `public/sitemap.xml` to match.

## Deploy to Netlify

1. Create a new site from the repository in [Netlify](https://app.netlify.com/start).
2. Use build command `npm run build` and publish directory `dist`.
3. Add the environment variables in **Site configuration → Environment variables**.
4. Deploy. Netlify’s SPA fallback is supplied by `_redirects`.

## Quality notes

- Dark mode is the default and the preference persists in `localStorage`.
- Animations respect `prefers-reduced-motion`.
- Route-level lazy loading keeps the initial bundle lighter.
- Project images use `loading="lazy"`; replace remote previews with optimized local assets before a final content launch.
