import type { Metadata } from 'next';
import { profile, projects } from './portfolio';
import { projectSeo } from './project-seo';
import { defaultLocale, locales, siteUrl, site, type Locale } from './site';
import { translate } from './translations';

export function pageCopy(locale: Locale, path: string) {
  const about = path === '/about';
  const project = projects.find((item) => path === `/projects/${item.id}`);
  return {
    title: project
      ? `${project.name} | ${translate('Xushnudbek Raimov', locale)}`
      : translate(about ? 'About Xushnudbek Raimov | xushnud.dev' : profile.title, locale),
    description: translate(
      project
        ? projectSeo[project.id].description
        : about
          ? 'Get to know Xushnudbek Raimov: his development journey, interests, and the ideas behind his web, mobile, and desktop projects.'
          : profile.description,
      locale,
    ),
    url: siteUrl(locale, path),
  };
}

export function pageMetadata(locale: Locale, path = '/'): Metadata {
  const copy = pageCopy(locale, path);
  return {
    metadataBase: new URL(site.url),
    title: copy.title,
    description: copy.description,
    authors: [{ name: 'Xushnudbek Raimov', url: siteUrl(locale, '/about') }],
    creator: 'Xushnudbek Raimov',
    robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
    alternates: {
      canonical: copy.url,
      languages: Object.fromEntries([
        ...locales.map((language) => [language, siteUrl(language, path)]),
        ['x-default', siteUrl(defaultLocale, path)],
      ]),
    },
    openGraph: {
      ...copy,
      siteName: site.name,
      type: 'website',
      locale: { uz: 'uz_UZ', en: 'en_US', ru: 'ru_RU' }[locale],
      images: [
        { url: '/og-image.png', width: 1200, height: 630, alt: 'Xushnudbek Raimov — xushnud.dev' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: '/og-image.png',
    },
  };
}
