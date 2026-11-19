export type ProjectImage = { file: string; alt: string; width: number; height: number };
export type ProjectMedia = {
  title: string;
  layout: 'portrait' | 'landscape';
  caption: string;
  source?: string;
  images: ProjectImage[];
};
const storeImage = (file: string, alt: string): ProjectImage => ({
  file,
  alt,
  width: file.startsWith('tokbor') ? 598 : 600,
  height: file.startsWith('tokbor') ? 1300 : 1299,
});

export const projectMedia: Record<string, ProjectMedia> = {
  tokbor: {
    title: 'TOK BOR',
    layout: 'portrait',
    caption: 'Official App Store images',
    source: 'https://apps.apple.com/uz/app/tokbor/id1562120388',
    images: [
      storeImage('tokbor-map', 'TOK BOR official station discovery preview'),
      storeImage('tokbor-session', 'TOK BOR official charging session preview'),
      storeImage('tokbor-qr', 'TOK BOR official QR charging preview'),
    ],
  },
  beon: {
    title: 'Beon',
    layout: 'portrait',
    caption: 'Official App Store images',
    source: 'https://apps.apple.com/uz/app/beon/id6478271325',
    images: [
      storeImage('beon-map', 'Beon official charging station map preview'),
      storeImage('beon-networks', 'Beon official charging network selection preview'),
    ],
  },
  navbat: {
    title: 'Navbat',
    layout: 'portrait',
    caption: 'App screenshots · demo data',
    images: [
      {
        file: 'navbat-search',
        alt: 'Navbat service discovery screen with sample businesses',
        width: 552,
        height: 1200,
      },
      {
        file: 'navbat-ticket',
        alt: 'Navbat queue ticket for a sample appointment',
        width: 552,
        height: 1200,
      },
    ],
  },
  mobile: {
    title: 'TOK BOR & Beon Mobile',
    layout: 'portrait',
    caption: 'Official App Store images',
    images: [
      storeImage('tokbor-session', 'TOK BOR mobile charging status and Live Activity'),
      storeImage('beon-offers', 'Beon mobile charging offers screen'),
    ],
  },
  'jonli-navbat': {
    title: 'Jonli Navbat',
    layout: 'portrait',
    caption: 'App screenshots · demo data',
    images: [
      {
        file: 'jonli-standing',
        alt: 'Jonli Navbat queue position with sample participants',
        width: 780,
        height: 1688,
      },
      {
        file: 'jonli-nearby',
        alt: 'Jonli Navbat nearby queues with sample data',
        width: 780,
        height: 1688,
      },
    ],
  },
  coucoupet: {
    title: 'CoucouPet',
    layout: 'landscape',
    caption: 'Native app · demo data',
    images: [
      {
        file: 'coucoupet-home',
        alt: 'CoucouPet actual macOS panel with Oppoq and Shaftoli',
        width: 1600,
        height: 1148,
      },
    ],
  },
  'tokbor-web': {
    title: 'TOK BOR Website',
    layout: 'landscape',
    caption: 'Live website',
    source: 'https://tokbor-web.vercel.app',
    images: [
      {
        file: 'tokbor-website',
        alt: 'TOK BOR website homepage featuring its charging network',
        width: 1440,
        height: 1000,
      },
    ],
  },
  turborepo: {
    title: 'Full-stack Monorepo',
    layout: 'landscape',
    caption: 'App screenshot · demo data',
    source: 'https://github.com/xushnud123/turborepo-project',
    images: [
      {
        file: 'turborepo-dashboard',
        alt: 'Full-stack Monorepo product dashboard with sample products',
        width: 1440,
        height: 900,
      },
    ],
  },
};
