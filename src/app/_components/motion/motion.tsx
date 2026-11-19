'use client';

import { createContext, useContext, useState, useSyncExternalStore, type ReactNode } from 'react';
import { MotionConfig, motion } from 'framer-motion';

const MotionContext = createContext({ paused: false, reduced: false, toggle: () => {} });
const motionQuery = '(prefers-reduced-motion: reduce)';
function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}
const getMotionPreference = () => window.matchMedia(motionQuery).matches;
const getServerMotionPreference = () => false;
export const usePageMotion = () => useContext(MotionContext);
export const ease = [0.22, 1, 0.36, 1] as const;

export function PageMotion({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeMotion,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [manuallyPaused, setPaused] = useState(false);
  const paused = !!prefersReducedMotion || manuallyPaused;
  return (
    <MotionContext.Provider
      value={{ paused, reduced: prefersReducedMotion, toggle: () => setPaused((value) => !value) }}
    >
      <MotionConfig reducedMotion={paused ? 'always' : 'user'}>
        <div className="site-shell" data-motion={paused ? 'paused' : 'playing'}>
          {children}
        </div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { paused } = usePageMotion();
  return (
    <motion.div
      className={className}
      initial={paused ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: paused ? 0 : 0.7, delay: paused ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}
