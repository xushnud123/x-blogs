'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { usePathname } from 'next/navigation';
import {
  defaultLocale,
  languageNames,
  localePath,
  locales,
  parseLocalePath,
  siteUrl,
  type Locale,
} from '@/utils/site';
import { pageCopy } from '@/utils/site-metadata';
import { translate } from '@/utils/translations';
import { usePageMotion } from './motion/motion';

const LanguageContext = createContext<{
  locale: Locale;
  t: (text: string) => string;
  switchLanguage: (locale: Locale) => void;
}>({ locale: defaultLocale, t: (text) => text, switchLanguage: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [locale, setLocale] = useState(initialLocale);
  const [announcement, setAnnouncement] = useState('');
  const { paused } = usePageMotion();
  const animations = useRef<Animation[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    setLocale(parseLocalePath(pathname).locale);
  }, [pathname]);

  useEffect(() => {
    // The initial metadata is server-rendered; leave it untouched during hydration.
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    const { path } = parseLocalePath(pathname);
    const copy = pageCopy(locale, path);
    document.documentElement.lang = locale;
    document.title = copy.title;
    const values: Record<string, string> = {
      'meta[name="description"]': copy.description,
      'meta[property="og:title"]': copy.title,
      'meta[property="og:description"]': copy.description,
      'meta[property="og:url"]': copy.url,
      'meta[property="og:locale"]': { uz: 'uz_UZ', en: 'en_US', ru: 'ru_RU' }[locale],
      'meta[name="twitter:title"]': copy.title,
      'meta[name="twitter:description"]': copy.description,
    };
    for (const [selector, content] of Object.entries(values)) {
      document.querySelector(selector)?.setAttribute('content', content);
    }
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', copy.url);
    for (const language of [...locales, 'x-default'] as const) {
      document
        .querySelector(`link[hreflang="${language}"]`)
        ?.setAttribute('href', siteUrl(language === 'x-default' ? defaultLocale : language, path));
    }
  }, [locale, pathname]);

  useEffect(() => () => animations.current.forEach((animation) => animation.cancel()), []);

  useEffect(() => {
    if (paused) animations.current.forEach((animation) => animation.cancel());
  }, [paused]);

  function switchLanguage(next: Locale) {
    if (next === locale) return;
    const { path } = parseLocalePath(window.location.pathname);
    const url = `${localePath(next, path)}${window.location.search}${window.location.hash}`;
    animations.current.forEach((animation) => animation.cancel());
    // Native history keeps galleries, filters, focus, and the scroll position in place.
    flushSync(() => {
      window.history.pushState(null, '', url);
      setLocale(next);
      setAnnouncement(`${translate('Language changed', next)}: ${languageNames[next]}`);
    });
    if (!paused) {
      animations.current = Array.from(document.querySelectorAll('#main-content, .main-nav')).map(
        (element) =>
          element.animate(
            [
              { opacity: 0.3, transform: 'translateY(6px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
          ),
      );
    }
  }

  return (
    <LanguageContext.Provider
      value={{ locale, t: (text) => translate(text, locale), switchLanguage }}
    >
      <a className="skip-link" href="#main-content">
        {translate('Skip to content', locale)}
      </a>
      {children}
      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
    </LanguageContext.Provider>
  );
}
