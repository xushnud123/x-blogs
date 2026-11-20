'use client';

import { useState, useRef } from 'react';
import { IconPlayerPause, IconPlayerPlay, IconMenu2, IconX } from '@tabler/icons-react';
import LogoMark from './logo-mark';
import { usePageMotion } from './motion/motion';
import Link from 'next/link';
import { localePath } from '@/utils/site';
import { useLanguage } from './language-provider';
import LanguageSwitcher from './language-switcher';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { paused, reduced, toggle } = usePageMotion();
  const { locale, t } = useLanguage();
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <Link className="wordmark" href={localePath(locale)} aria-label={t('Xushnudbek home')}>
        <LogoMark />
      </Link>
      <nav
        id="main-navigation"
        aria-label={t('Main navigation')}
        className={open ? 'main-nav is-open' : 'main-nav'}
      >
        {[
          ['Work', `${localePath(locale)}#Work`],
          ['About', localePath(locale, '/about')],
          ['Expertise', `${localePath(locale)}#Skills`],
        ].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>
            {t(label)}
          </Link>
        ))}
        <Link
          className="mobile-contact"
          href={`${localePath(locale)}#Contact`}
          onClick={() => setOpen(false)}
        >
          {t('Let’s talk')}
        </Link>
      </nav>
      <div className="header-actions">
        <LanguageSwitcher />
        <button
          type="button"
          className="motion-toggle"
          onClick={toggle}
          aria-label={t(
            reduced ? 'Reduced motion enabled' : paused ? 'Play motion' : 'Pause motion',
          )}
          disabled={reduced}
          aria-pressed={paused}
        >
          {paused ? (
            <IconPlayerPlay size={16} aria-hidden />
          ) : (
            <IconPlayerPause size={16} aria-hidden />
          )}
          <span>{t('Motion')}</span>
        </button>
        <Link className="pill-button header-contact" href={`${localePath(locale)}#Contact`}>
          {t('Let’s talk')} <span aria-hidden>✳</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          ref={menuRef}
          aria-controls="main-navigation"
          aria-label={t(open ? 'Close menu' : 'Open menu')}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>
    </header>
  );
}
