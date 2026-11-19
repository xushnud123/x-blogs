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
Navbat, Jonli Navbat, CoucouPet, the TOK BOR website, and the public
[full-stack monorepo](https://github.com/xushnud123/turborepo-project).
Comfi, Buduar, and Famic retain the earlier portfolio's historical references;
"2026 contributions" is a project-work label, not an inferred employment date.

Only link to a public website or an accessible public repository. Private-source
projects use a label without a repository link. Do not include internal addresses,
credentials, customer records, unsupported ratings, or production statistics.

The main page uses Urbanist and a light editorial design inspired by the user’s
Ron Design Lab reference. Real product images use official store artwork or application captures with sample data.
Project details, GitHub/GitLab filters, a mobile menu, motion pause controls, and
reduced-motion support are included. The FAQ uses native disclosure controls. `/tests` remains the existing animation demonstration route.

## Product images and identity

`src/utils/project-media.ts` maps the real product images to each project. Click an
image to open the accessible viewer; Escape closes it and arrow keys switch images.
The headline features the developer's name. The original SVG monogram draws in on
entry and replays on hover/focus, inspired by the short kinetic identity treatments
on [Prompt Motion](https://prompt-motion.com/techhalla-90b8ec). Pause and reduced-motion
preferences leave the logo fully visible without animation.

Image provenance (captured November 2026):

- TOK BOR and Beon: official public App Store promotional images, preserved without
  alteration. They represent the products, including their mobile interfaces, rather
  than private dashboard captures. Source pages are linked in the viewer.
- Navbat: the repository's `apps/web/public/screens/search.png` and `ticket.png`;
  business and staff names were checked against the demo seed.
- Jonli Navbat: actual Mini App screens captured locally using its built-in simulator
  and intercepted sample API responses. No live queue or Telegram account was used.
- CoucouPet: the actual SwiftUI panel, rendered by the app's built-in snapshot mode
  with sample pets. No personal memory, calendars, or conversations were loaded.
- TOK BOR Website: a browser capture of the public homepage.
- Full-stack Monorepo: the actual product table rendered locally with sample products
  and a demo account. No production database was contacted.

Assets in `public/images/projects/real/` are locally served WebP files. Store images
retain their original public artwork; local PNG captures are compressed for delivery.
