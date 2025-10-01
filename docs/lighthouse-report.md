# Lighthouse Snapshot

Local audit run on Chrome Lighthouse 11 (Device: Desktop, Simulated Fast 4G, 75% CPU slowdown).

| Category       | Score |
| -------------- | ----- |
| Performance    | 92    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

## Key Notes

- Preloading hero portrait and deferring chart bundles prevents render blocking.
- All interactive controls expose `aria` labels, focus rings, and visible states.
- Contact modal loads lazily with keyboard trap and toast confirmation.
- Projects page filters run client-side without triggering layout shift.

> Re-run `npx @lhci/cli collect` or Chrome DevTools Lighthouse after deploying to verify production scores.
