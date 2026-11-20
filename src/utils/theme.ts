export type Theme = 'light' | 'dark';
export const themeStorageKey = 'xushnud-theme';
export const themeMediaQuery = '(prefers-color-scheme: dark)';

// Runs before the page paints, including when a visitor has saved a preference.
export const themeInitScript = `(() => {
  let theme;
  try { theme = localStorage.getItem(${JSON.stringify(themeStorageKey)}); } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia(${JSON.stringify(themeMediaQuery)}).matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();`;
