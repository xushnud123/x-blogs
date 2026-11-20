# X-Blogs — Raimov Xushnudbek

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Development

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bunx tsc --noEmit
```

## Updating the portfolio

`src/utils/portfolio.ts` holds the profile, selected projects, skills, and experience.
Project cards are rendered by `src/app/_components/projects/`; filters use the
project's GitHub/GitLab source labels. Profile metadata uses the same content.

The November 2026 refresh is based on repository READMEs, package manifests, and
recent authored contributions. It covers TOK BOR and Beon platform/mobile work,
Navbat, Jonli Navbat, CoucouPet, Comfi, and the public
[full-stack monorepo](https://github.com/xushnud123/turborepo-project).
Comfi and Famic retain the earlier portfolio's historical experience references;
"2026 contributions" is a project-work label, not an inferred employment date.

Only link to a public website or an accessible public repository. Private-source
projects use a label without a repository link. Do not include internal addresses,
credentials, customer records, unsupported ratings, or production statistics.

The main page uses Urbanist and a light editorial design inspired by the user’s
Ron Design Lab reference. Real product images use application captures with sample data.
Project details, GitHub/GitLab filters, a mobile menu, motion pause controls, and
reduced-motion support are included. The FAQ uses native disclosure controls. `/tests` remains the existing animation demonstration route.

## Product images and identity

`src/utils/project-media.ts` maps the real product images to each project. Click an
image to open the accessible viewer; Escape closes it and arrow keys switch images.
The headline features the developer's name. The approved standalone sage symbol is
based on the [Xentam reference by Tuintrick Studio](https://logosystems.app/logo/ls-xentam),
with lighter branches and open spacing. Its geometry lives in `src/utils/brand.json`;
matching browser and mobile icons live in `public/brand/`. Three parts assemble briefly
on entry and respond to hover/focus. Pause and reduced-motion preferences leave the
logo fully visible without animation.

Image provenance (captured November 2026):

- TOK BOR: the application's actual Flutter `ChargingStatusBody` and `FilterScreen`,
  rendered at 402 × 874 logical pixels with bundled assets, Inter/Roboto fonts,
  and sample session/filter data. Capture configuration points to a closed loopback
  port; no live charging action, customer account, or remote API is used.
- Beon: existing native test-app captures from the charging setup and starting flow,
  with sample balance/amounts. The development ribbon is preserved. These are app
  screens, not the App Store promotional artwork used in the earlier refresh.
- Navbat: the repository's `apps/web/public/screens/search.png` and `ticket.png`;
  business and staff names were checked against the demo seed.
- Jonli Navbat: actual Mini App screens captured locally using its built-in simulator
  and intercepted sample API responses. No live queue or Telegram account was used.
- CoucouPet: the actual SwiftUI panel, rendered by the app's built-in snapshot mode
  with sample pets. No personal memory, calendars, or conversations were loaded.
- Comfi: the existing portfolio's `public/images/projects/Hero.png`, showing the
  earlier Comfi website. Preserved as a historical project image rather than a claim
  about the developer's authorship of the current public website. The stack is
  verified against the Comfi landing repository's package manifest.
- Full-stack Monorepo: the actual product table rendered locally with sample products
  and a demo account. No production database was contacted.

Assets in `public/images/projects/real/` are locally served WebP files. Native PNG
captures are compressed for delivery without cropping or changing their interfaces.
Portrait galleries scroll and snap on narrow screens, with previous/next controls;
all images remain available in the full-size viewer. Tablet navigation collapses
before it becomes crowded, and landscape image viewers allow vertical scrolling.
