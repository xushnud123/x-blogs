import type { MetadataRoute } from 'next';
import { defaultLocale, locales, siteUrl } from '@/utils/site';
import { projects } from '@/utils/portfolio';
import { projectMedia } from '@/utils/project-media';
import { site } from '@/utils/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/about', ...projects.map((project) => `/projects/${project.id}`)].flatMap((path) =>
    locales.map((locale) => ({
      url: siteUrl(locale, path),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((language) => [language, siteUrl(language, path)]),
          ['x-default', siteUrl(defaultLocale, path)],
        ]),
      },
      ...(path.startsWith('/projects/') && {
        images: projectMedia[path.split('/')[2]].images.map(
          (image) => `${site.url}/images/projects/real/${image.file}.webp`,
        ),
      }),
    })),
  );
}
