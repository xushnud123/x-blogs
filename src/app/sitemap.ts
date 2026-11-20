import type { MetadataRoute } from 'next';
import { locales, localePath, site } from '@/utils/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/about'].flatMap((path) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((language) => [language, `${site.url}${localePath(language, path)}`]),
        ),
      },
    })),
  );
}
