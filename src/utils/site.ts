export const site = {
  url: 'https://xushnud.dev',
  name: 'xushnud.dev',
  phone: '+998998820641',
  phoneDisplay: '+998 99 882 06 41',
  email: '12xushnudbek34@gmail.com',
  telegram: 'https://t.me/XushnudbekRaimov',
};

export const locales = ['en', 'uz', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const languageNames: Record<Locale, string> = {
  uz: 'O‘zbekcha',
  en: 'English',
  ru: 'Русский',
};
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export function localePath(locale: Locale, path = '/') {
  const suffix = path === '/' ? '' : path;
  return locale === defaultLocale ? suffix || '/' : `/${locale}${suffix}`;
}

export function siteUrl(locale: Locale, path = '/') {
  const localized = localePath(locale, path);
  return `${site.url}${localized === '/' ? '' : localized}`;
}

export function parseLocalePath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const locale: Locale = isLocale(segments[0]) ? (segments.shift() as Locale) : defaultLocale;
  return { locale, path: segments.length ? `/${segments.join('/')}` : '/' };
}
