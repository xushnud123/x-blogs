'use client';

import { useSyncExternalStore } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { themeMediaQuery, themeStorageKey, type Theme } from '@/utils/theme';
import { useLanguage } from './language-provider';

let preference: Theme | null | undefined;

function savedPreference() {
  if (preference !== undefined) return preference;
  try {
    const value = localStorage.getItem(themeStorageKey);
    preference = value === 'dark' || value === 'light' ? value : null;
  } catch {
    preference = null;
  }
  return preference;
}

function syncTheme() {
  document.documentElement.dataset.theme =
    savedPreference() ?? (window.matchMedia(themeMediaQuery).matches ? 'dark' : 'light');
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(themeMediaQuery);
  const update = () => {
    syncTheme();
    onChange();
  };
  const storage = (event: StorageEvent) => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    preference = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    update();
  };
  window.addEventListener('themechange', update);
  window.addEventListener('storage', storage);
  media.addEventListener('change', update);
  update();
  return () => {
    window.removeEventListener('themechange', update);
    window.removeEventListener('storage', storage);
    media.removeEventListener('change', update);
  };
}

const getSnapshot = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
const getServerSnapshot = () => 'light' as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { t } = useLanguage();
  function toggle() {
    preference = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(themeStorageKey, preference);
    } catch {
      /* Keep the in-memory choice. */
    }
    window.dispatchEvent(new Event('themechange'));
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={t('Dark mode')}
      aria-pressed={theme === 'dark'}
      title={t(theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')}
    >
      <IconMoon className="theme-moon" size={20} aria-hidden />
      <IconSun className="theme-sun" size={20} aria-hidden />
    </button>
  );
}
