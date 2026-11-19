export const profile = {
  name: 'Raimov Xushnudbek',
  title: 'Raimov Xushnudbek | Full-stack & Mobile Developer',
  description:
    'Full-stack and mobile developer building web platforms, APIs, and mobile apps. Recent work includes EV charging at TOK BOR and Beon, queue management, and desktop experiments.',
  updated: 'November 2026',
  github: 'https://github.com/xushnud123',
};

export type Project = {
  id: string;
  name: string;
  category: string;
  sources: ('GitHub' | 'GitLab')[];
  access: 'Private source' | 'Public source';
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

// Curated summaries only. Never add internal hosts, credentials, or client data here.
export const projects: Project[] = [
  {
    id: 'tokbor',
    name: 'TOK BOR',
    category: 'EV charging platform',
    sources: ['GitLab'],
    access: 'Private source',
    featured: true,
    description:
      'Work across charging services and the admin dashboard, connecting station operations with the tools people use to manage them.',
    highlights: [
      'OCPP station actions and OCPI roaming integrations',
      'Charging limits, station-specific vouchers, and connector QR codes',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'Fastify', 'PostgreSQL', 'OCPP / OCPI'],
  },
  {
    id: 'beon',
    name: 'Beon',
    category: 'EV charging & operations',
    sources: ['GitHub', 'GitLab'],
    access: 'Private source',
    featured: true,
    description:
      'Backend and dashboard contributions for an EV charging platform, spanning charging sessions, payments, billing, and network reporting.',
    highlights: [
      'Network monitoring, growth charts, and period comparisons',
      'Charging balance validation and billing behavior tests',
    ],
    stack: ['React', 'Node.js', 'Fastify', 'PostgreSQL', 'TanStack Query', 'Drizzle'],
  },
  {
    id: 'navbat',
    name: 'Navbat',
    category: 'Queue & appointment platform',
    sources: ['GitHub'],
    access: 'Private source',
    description:
      'A queue and appointment project for service businesses, with customer, staff, and owner experiences across web and mobile.',
    highlights: [
      'Walk-in queues and scheduled appointments',
      'Shared types across web, mobile, and API',
    ],
    stack: ['Next.js', 'React Native', 'Expo', 'NestJS', 'Prisma', 'Redis'],
  },
  {
    id: 'mobile',
    name: 'TOK BOR & Beon Mobile',
    category: 'Mobile applications',
    sources: ['GitHub'],
    access: 'Private source',
    description:
      'Flutter work on EV charging apps, with station discovery, charging sessions, payments, and voucher experiences.',
    highlights: ['Map-based station discovery', 'Voucher balances and scheduled activation states'],
    stack: ['Flutter', 'Dart', 'Provider / BLoC', 'Mapbox', 'Firebase'],
  },
  {
    id: 'jonli-navbat',
    name: 'Jonli Navbat',
    category: 'Telegram Mini App',
    sources: ['GitHub'],
    access: 'Private source',
    description:
      'A Telegram Mini App and bot for physical queues, helping people see their place and who they are waiting behind.',
    highlights: [
      'Queue participation through Telegram',
      'A focused web interface for waiting in line',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Telegram'],
  },
  {
    id: 'coucoupet',
    name: 'CoucouPet',
    category: 'macOS desktop experiment',
    sources: ['GitHub'],
    access: 'Private source',
    description:
      'Two animated desktop companions, Oppoq and Shaftoli, that move around the screen, play, and respond to conversations with AI.',
    highlights: [
      'Animated pets with interactive behavior',
      'Conversation memory and a desktop control panel',
    ],
    stack: ['Swift', 'macOS', 'Claude Code'],
  },
  {
    id: 'tokbor-web',
    name: 'TOK BOR Website',
    category: 'Interactive website',
    sources: ['GitHub'],
    access: 'Private source',
    description:
      'A responsive website for the EV charging network, combining product storytelling, an interactive map, and motion.',
    highlights: [
      'Prerendered pages and responsive layouts',
      'Interactive network map and product sections',
    ],
    stack: ['React', 'TanStack Start', 'Tailwind CSS', 'Motion'],
    href: 'https://tokbor-web.vercel.app',
    linkLabel: 'Visit website',
  },
  {
    id: 'turborepo',
    name: 'Full-stack Monorepo',
    category: 'Public development project',
    sources: ['GitHub'],
    access: 'Public source',
    description:
      'A full-stack workspace connecting a React client and Express API through tRPC, with shared validation and database packages.',
    highlights: [
      'Typed client–server communication',
      'Shared Zod schemas and a Prisma database package',
    ],
    stack: ['Turborepo', 'React Router', 'tRPC', 'Express', 'Prisma', 'Zod'],
    href: 'https://github.com/xushnud123/turborepo-project',
    linkLabel: 'View source',
  },
];

export const skillGroups = [
  {
    name: 'Web interfaces',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Vue / Nuxt',
      'Tailwind CSS',
      'TanStack Query & Router',
    ],
  },
  {
    name: 'Backend & data',
    items: [
      'Node.js',
      'NestJS',
      'Fastify',
      'PostgreSQL',
      'Prisma / Drizzle / TypeORM',
      'Redis',
      'tRPC / oRPC',
    ],
  },
  { name: 'Mobile & desktop', items: ['Flutter', 'Dart', 'React Native', 'Expo', 'Swift / macOS'] },
  {
    name: 'Integrations & tooling',
    items: [
      'OCPP / OCPI',
      'WebSockets',
      'Payments & billing',
      'Nx / Turborepo',
      'GitHub / GitLab',
      'Docker',
    ],
  },
];

export const recentExperience = [
  {
    name: 'TOK BOR',
    area: 'Charging services, admin tools & mobile',
    description:
      'Contributions across station communication, roaming, voucher controls, and mobile charging flows.',
  },
  {
    name: 'Beon',
    area: 'Backend, dashboards & billing',
    description:
      'Charging and payment flows, network monitoring, growth analytics, and billing behavior coverage.',
  },
];

export const earlierExperience = [
  { name: 'Comfi', role: 'Frontend Developer', period: 'Started Jul 2021' },
  { name: 'Buduar', role: 'Frontend Developer', period: 'Jan 2022 – Apr 2022' },
  { name: 'Famic', role: 'Junior Frontend Developer', period: 'Oct 2020 – May 2021' },
];
