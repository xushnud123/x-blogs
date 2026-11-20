'use client';

import { localePath, site } from '@/utils/site';
import { useLanguage } from '../language-provider';
import Link from 'next/link';

export default function Footer() {
  const { t, locale } = useLanguage();
  return (
    <footer className="site-footer section-wrap">
      <p>
        © {new Date().getFullYear()} <a href={site.url}>{site.name}</a>
      </p>
      <div>
        <Link href={localePath(locale, '/about')}>{t('About me')}</Link>
        <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        <a href="https://github.com/xushnud123" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="#top">{t('Back to top')}</a>
      </div>
    </footer>
  );
}
