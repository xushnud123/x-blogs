'use client';

import { useState, useRef } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import LogoMark from './logo-mark';
import Link from 'next/link';
import { localePath } from '@/utils/site';
import { useLanguage } from './language-provider';
import LanguageSwitcher from './language-switcher';
import ThemeToggle from './theme-toggle';
import MotionToggle from './motion-toggle';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
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
        <MotionToggle className="menu-motion" />
      </nav>
      <div className="header-actions">
        <LanguageSwitcher />
        <ThemeToggle />
        <MotionToggle className="header-motion" />
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
