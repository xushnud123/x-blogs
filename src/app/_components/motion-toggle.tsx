'use client';

import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
import { useLanguage } from './language-provider';
import { usePageMotion } from './motion/motion';

export default function MotionToggle({ className = '' }: { className?: string }) {
  const { paused, reduced, toggle } = usePageMotion();
  const { t } = useLanguage();
  return (
    <button
      type="button"
      className={`motion-toggle ${className}`}
      onClick={toggle}
      aria-label={t(reduced ? 'Reduced motion enabled' : paused ? 'Play motion' : 'Pause motion')}
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
  );
}
