export type ProjectImage = { file: string; alt: string; width: number; height: number };
export type ProjectMedia = {
  title: string;
  layout: 'portrait' | 'landscape';
  caption: string;
  source?: string;
  images: ProjectImage[];
};
const appScreen = (file: string, alt: string): ProjectImage => ({
  file,
  alt,
  width: 1206,
  height: 2622,
});

export const projectMedia: Record<string, ProjectMedia> = {
  tokbor: {
    title: 'TOK BOR',
    layout: 'portrait',
    caption: 'App screens · demo data',
    source: 'https://apps.apple.com/uz/app/tokbor/id1562120388',
    images: [
      appScreen('tokbor-charging-app', 'TOK BOR in-app charging status with a sample session'),
      appScreen(
        'tokbor-filters-app',
        'TOK BOR station filters with connector types and power options',
      ),
    ],
  },
  beon: {
    title: 'Beon',
    layout: 'portrait',
    caption: 'App screens · demo data',
    source: 'https://apps.apple.com/uz/app/beon/id6478271325',
    images: [
      appScreen('beon-charging-app', 'Beon charging setup with sample balance and charge amount'),
      appScreen('beon-starting-app', 'Beon starting a charging session in the test app'),
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
    caption: 'App screens · demo data',
    images: [
      appScreen('tokbor-charging-app', 'TOK BOR mobile charging status with sample readings'),
      appScreen('beon-charging-app', 'Beon mobile charging setup with sample balance'),
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
  comfi: {
    title: 'Comfi',
    layout: 'landscape',
    caption: 'Comfi website',
    source: 'https://comfi.ai',
    images: [
      {
        file: 'comfi-website',
        alt: 'Comfi website presenting flexible B2B payment terms',
        width: 1280,
        height: 800,
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
