'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ease, usePageMotion } from '../motion/motion';

export default function Hero() {
  const { paused } = usePageMotion();
  const entrance = (delay: number) => ({
    initial: paused ? (false as const) : { y: 70, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: paused ? 0 : 0.9, delay: paused ? 0 : delay, ease },
  });
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <motion.div className="hero-eyebrow" {...entrance(0)}>
        <span>Raimov Xushnudbek</span>
        <span>Full-stack & mobile developer</span>
      </motion.div>
      <h1 id="hero-title" className="hero-title">
        <span className="title-line">
          <motion.span {...entrance(0.08)}>Ideas into</motion.span>
        </span>
        <span className="title-line title-line-bottom">
          <motion.span className="portrait-pill" {...entrance(0.16)}>
            <Image src="/images/hero/image 2 (1).svg" alt="" width={130} height={130} priority />
          </motion.span>
          <motion.span {...entrance(0.22)}>real things.</motion.span>
        </span>
      </h1>
      <motion.div className="hero-bottom" {...entrance(0.32)}>
        <p>
          I build the interface, the engine,
          <br className="desktop-break" /> and everything in between.
        </p>
        <div className="hero-note">
          <span>Web platforms. Mobile apps. Thoughtful details.</span>
          <a href="#Work" className="text-link">
            Explore selected work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
