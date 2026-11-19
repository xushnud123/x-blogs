'use client';

import { useState, useRef } from 'react';
import { IconPlayerPause, IconPlayerPlay, IconMenu2, IconX } from '@tabler/icons-react';
import LogoMark from './logo-mark';
import { usePageMotion } from './motion/motion';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { paused, reduced, toggle } = usePageMotion();
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
      <a className="wordmark" href="/" aria-label="Xushnudbek home">
        <LogoMark />
      </a>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? 'main-nav is-open' : 'main-nav'}
      >
        {[
          ['Work', 'Work'],
          ['About', 'Experience'],
          ['Expertise', 'Skills'],
        ].map(([label, id]) => (
          <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="motion-toggle"
          onClick={toggle}
          aria-label={reduced ? 'Reduced motion enabled' : paused ? 'Play motion' : 'Pause motion'}
          disabled={reduced}
          aria-pressed={paused}
        >
          {paused ? (
            <IconPlayerPlay size={16} aria-hidden />
          ) : (
            <IconPlayerPause size={16} aria-hidden />
          )}
          <span>Motion</span>
        </button>
        <a className="pill-button header-contact" href="/#Contact">
          Let’s talk <span aria-hidden>✳</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          ref={menuRef}
          aria-controls="main-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>
    </header>
  );
}
