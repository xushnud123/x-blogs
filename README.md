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
Ron Design Lab reference. Original illustrative UI scenes use demo content.
Project details, GitHub/GitLab filters, a mobile menu, motion pause controls, and
reduced-motion support are included. The FAQ uses native disclosure controls. `/tests` remains the existing animation demonstration route.
