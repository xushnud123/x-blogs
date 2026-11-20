import type { Metadata } from 'next';
import { profile } from './portfolio';
import { defaultLocale, locales, siteUrl, site, type Locale } from './site';
import { translate } from './translations';

export function pageCopy(locale: Locale, path: string) {
  const about = path === '/about';
  return {
    title: translate(about ? 'About Xushnudbek Raimov | xushnud.dev' : profile.title, locale),
    description: translate(
      about
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
