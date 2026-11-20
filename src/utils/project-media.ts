export type ProjectImage = {
  file: string;
  label: string;
  alt: string;
  width: number;
  height: number;
};
export type ProjectMedia = {
  title: string;
  layout: 'portrait' | 'landscape';
  caption: string;
  source?: string;
  images: ProjectImage[];
};
const appScreen = (
  file: string,
  label: string,
  alt: string,
  width = 1206,
  height = 2622,
): ProjectImage => ({
  file,
  label,
  alt,
  width,
  height,
});

export const projectMedia: Record<string, ProjectMedia> = {
  tokbor: {
    title: 'TOK BOR',
    layout: 'portrait',
    caption: 'App screens · demo data',
    source: 'https://apps.apple.com/uz/app/tokbor/id1562120388',
    images: [
      appScreen(
        'tokbor-charging-app',
        'Charging session',
        'TOK BOR in-app charging status with a sample session',
      ),
      appScreen(
        'tokbor-filters-app',
        'Station filters',
        'TOK BOR station filters with connector types and power options',
      ),
    ],
  },
  beon: {
    title: 'Beon',
    layout: 'portrait',
    caption: 'Home screen · demo data',
    source: 'https://apps.apple.com/uz/app/beon/id6478271325',
    images: [
      appScreen(
        'beon-home-app',
        'Home · map & station search',
        'Beon home screen with the Tashkent map, station search and sample balance',
        852,
        1846,
      ),
    ],
  },
  navbat: {
    title: 'Navbat',
    layout: 'portrait',
    caption: 'App screenshots · demo data',
    images: [
      {
        file: 'navbat-search',
        label: 'Discover services',
        alt: 'Navbat service discovery screen with sample businesses',
        width: 552,
        height: 1200,
      },
      {
        file: 'navbat-ticket',
        label: 'Your queue ticket',
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
      appScreen(
        'tokbor-charging-app',
        'TOK BOR · charging',
        'TOK BOR mobile charging status with sample readings',
      ),
      appScreen(
        'beon-home-app',
        'Beon · home',
        'Beon mobile home screen with map and station search',
        852,
        1846,
      ),
    ],
  },
  'jonli-navbat': {
    title: 'Jonli Navbat',
    layout: 'portrait',
    caption: 'App screenshots · demo data',
    images: [
      {
        file: 'jonli-standing',
        label: 'Your place in line',
        alt: 'Jonli Navbat queue position with sample participants',
        width: 780,
        height: 1688,
      },
      {
        file: 'jonli-nearby',
        label: 'Nearby queues',
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
        label: 'Desktop companion',
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
        label: 'Flexible B2B payments',
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
        label: 'Product management',
        alt: 'Full-stack Monorepo product dashboard with sample products',
        width: 1440,
        height: 900,
      },
    ],
  },
};
