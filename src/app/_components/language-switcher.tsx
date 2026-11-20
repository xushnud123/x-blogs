'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { languageNames, locales, localePath, parseLocalePath } from '@/utils/site';
import { useLanguage } from './language-provider';
import { ease, usePageMotion } from './motion/motion';

export default function LanguageSwitcher() {
  const { locale, t, switchLanguage } = useLanguage();
  const { paused } = usePageMotion();
  const { path } = parseLocalePath(usePathname());
  return (
    <nav className="language-switcher" aria-label={t('Choose language')}>
      {locales.map((language) => (
        <a
          key={language}
          href={localePath(language, path)}
          hrefLang={language}
          lang={language}
          aria-label={languageNames[language]}
          aria-current={language === locale ? 'true' : undefined}
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey ||
              event.button !== 0
            )
              return;
            event.preventDefault();
            switchLanguage(language);
          }}
        >
          {language === locale && (
            <motion.span
              className="language-indicator"
              layoutId={paused ? undefined : 'language-indicator'}
              transition={{ duration: paused ? 0 : 0.25, ease }}
            />
          )}
          <span>{language.toUpperCase()}</span>
        </a>
      ))}
    </nav>
  );
}
