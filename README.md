# Krishna Kalakonda — Portfolio

A modern, animated, and accessibility-focused portfolio for Krishna Kalakonda. Built with Next.js App Router, Tailwind CSS, and Framer Motion to showcase AI, data-science, and full-stack work.

## Highlights

- **Pitch-first hero** with animated stats, skill visualizations, and CTA flows.
- **Centralized content** via `content/siteContent.ts` powering pages and charts.
- **Projects explorer** with sticky category nav, client-side search/tag filter, and lazy embeds.
- **Article system** using MDX content compiled from `siteContent` with copyable code blocks.
- **Downloads hub** with QR-enabled CV/Resume cards.
- **Contact modal** featuring React Hook Form + Zod validation, honeypot, and local rate limiting.
- **Performance & a11y** tuned for WCAG 2.1 AA, focus-visible styling, skip links, and JSON-LD.

## Tech Stack

- [Next.js 15 App Router](https://nextjs.org/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- [Framer Motion](https://www.framer.com/motion/) for view transitions and micro-interactions
- [ApexCharts](https://apexcharts.com/) via `react-apexcharts` (code-split + lazy)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://github.com/colinhacks/zod) validation
- [MDX](https://mdxjs.com/) rendered server-side with custom code blocks and copy buttons
- [Vitest](https://vitest.dev/) + Testing Library for component/data tests

## Quick Start

```bash
npm install
npm run dev
```

Then visit http://localhost:3000. The global layout is preconfigured with sticky navigation, skip link, toasts, and modal support.

### Useful Scripts

| Command           | Description |
| ----------------- | ----------- |
| `npm run dev`     | Start local dev server |
| `npm run build`   | Production build |
| `npm run start`   | Serve the built app |
| `npm run lint`    | Run ESLint across the repo |
| `npm run test`    | Run Vitest + Testing Library suite |

## Content Management

**All primary content lives in [`content/siteContent.ts`](content/siteContent.ts).**

- Update profile, stats, socials, experience, education, activities, projects, articles, and downloads in one place.
- Articles accept Markdown/MDX (including headings, lists, blockquotes, `~~~language` fenced code blocks, and inline emphasis).
- Project embeds support `iframe`, `img`, or `video`, and cards automatically expose tech tags for filtering.

After editing, restart the dev server to recompute derived metadata if necessary.

## Testing & Quality

- `npm run test` exercises data invariants and interactive components (e.g., download card QR toggling).
- `npm run lint` enforces code style and accessibility lint rules from Next.js ESLint config.
- A default `vitest.setup.ts` loads `@testing-library/jest-dom`, fetch polyfill, and mocks canvas contexts used by charts.

## Deployment

### Vercel
1. Push the repo to GitHub.
2. Import to Vercel, set build command `npm run build`, output directory `.next`.
3. Add environment variables if integrating analytics or email providers.

### Netlify
1. Create a new site from Git.
2. Build command `npm run build`, publish directory `.next`.
3. Enable Next.js runtime on Netlify (or use Netlify adapter if required).

> Contact submissions write to `data/contact-submissions.json` in dev/statically hosted environments. For production email delivery, wire `submitContact` to a provider such as Resend or AWS SES.

## Accessibility & Performance

- Meets WCAG 2.1 AA color contrast and focus-visible guidelines.
- Keyboard-friendly nav, modal, and filters; skip-to-content anchor shipped from `app/layout.tsx`.
- Charts include `aria-label`s and tooltips; hero stats announce via `aria-live`.
- Lazy loads heavy assets (charts, embeds) and preloads the hero portrait.
- Target Lighthouse scores ≥90 (Perf/SEO/A11y). Example metrics in [`docs/lighthouse-report.md`](docs/lighthouse-report.md).

## Project Structure

```
app/
  (site)/          # Route group with layout + pages (home, projects, articles, downloads)
components/        # UI building blocks (layout, home sections, charts, etc.)
content/siteContent.ts
hooks/             # Scroll spy and other client utilities
lib/               # Fonts, utils, analytics, validation, mdx helpers
public/            # Optimized assets (favicons, portrait, OG image, downloads)
tests/             # Vitest suites
```

## Updating Assets

- Replace `public/me.png` with a high-resolution portrait (same filename for preload).
- Update `/public/downloads/CV.pdf` and `/public/downloads/Resume.pdf` when refreshing documents.
- Refresh `public/og-cover.png` to match new visuals (used for Open Graph/Twitter cards).

## Lighthouse Snapshot

A recent local run (Chrome Lighthouse 11, throttled simulated 4G) delivered:

| Category | Score |
| -------- | ----- |
| Performance | 92 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Full notes are stored at [`docs/lighthouse-report.md`](docs/lighthouse-report.md).

## Future Enhancements

- Integrate production email service with the contact action.
- Add animated screen recordings or live embeds for flagship projects.
- Expand analytics toggle (`lib/analytics.ts`) to connect privacy-friendly tracking.

---

Crafted with care for hiring managers, recruiters, and collaborators evaluating Krishna Kalakonda's impact across AI, research, and product engineering.
