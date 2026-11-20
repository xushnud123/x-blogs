import { projects } from './portfolio';
import { projectMedia } from './project-media';
import { pageCopy } from './site-metadata';
import { locales, site, siteUrl, socialProfiles, type Locale } from './site';
import { translate } from './translations';

export function structuredData(locale: Locale, path: string) {
  const copy = pageCopy(locale, path);
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;
  const project = projects.find((item) => path === `/projects/${item.id}`);
  const pageId = `${copy.url}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Xushnudbek Raimov',
      alternateName: ['Raimov Xushnudbek', 'Xushnud', 'Хушнудбек Раимов'],
      url: site.url,
      mainEntityOfPage: siteUrl(locale, '/about'),
      jobTitle: translate('Full-stack & mobile developer', locale),
      telephone: site.phone,
      sameAs: socialProfiles.map((profile) => profile.url),
      knowsAbout: [
        'Full-stack development',
        'Mobile development',
        'React',
        'TypeScript',
        'Node.js',
        'Flutter',
        'EV charging',
        'OCPP',
        'OCPI',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: site.url,
      name: 'Xushnudbek Raimov',
      alternateName: site.name,
      publisher: { '@id': personId },
      inLanguage: [...locales],
    },
    {
      '@type': path === '/about' ? 'ProfilePage' : path === '/' ? 'CollectionPage' : 'WebPage',
      '@id': pageId,
      url: copy.url,
      name: copy.title,
      description: copy.description,
      inLanguage: locale,
      isPartOf: { '@id': websiteId },
      author: { '@id': personId },
      about: { '@id': personId },
      mainEntity: {
        '@id': path === '/about' ? personId : `${copy.url}${project ? '#project' : '#projects'}`,
      },
      ...(path !== '/' && { breadcrumb: { '@id': `${copy.url}#breadcrumb` } }),
    },
  ];

  if (path === '/') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${copy.url}#projects`,
      name: translate('Selected projects', locale),
      itemListElement: projects.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: siteUrl(locale, `/projects/${item.id}`),
      })),
    });
  }
  if (project) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${copy.url}#project`,
      name: project.name,
      description: translate(project.description, locale),
      genre: translate(project.category, locale),
      contributor: { '@id': personId },
      url: project.href ?? copy.url,
      image: projectMedia[project.id].images.map(
        (image) => `${site.url}/images/projects/real/${image.file}.webp`,
      ),
      mainEntityOfPage: { '@id': pageId },
    });
  }
  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${copy.url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: translate('Home', locale),
          item: siteUrl(locale),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: project?.name ?? translate('About me', locale),
          item: copy.url,
        },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
