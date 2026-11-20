'use client';

import { localePath, site, socialProfiles } from '@/utils/site';
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
        {socialProfiles.map((profile) => (
          <a key={profile.name} href={profile.url} target="_blank" rel="me noopener noreferrer">
            {profile.name}
          </a>
        ))}
        <a href="#top">{t('Back to top')}</a>
      </div>
    </footer>
  );
}
