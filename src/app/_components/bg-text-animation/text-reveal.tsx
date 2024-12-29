'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(' ');

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
      <div
        className={
          'sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]'
        }
      >
        <p
          ref={targetRef}
          className={
            'text-tt-1/80 font-satoshi flex flex-wrap justify-center p-5 text-center text-[20px] font-medium leading-[32px] md:p-8 md:text-[24px] md:leading-[36px] lg:p-10'
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} text={word} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  text: string;
}

const skillsAndExperience = [
  'Frontend',
  'Developer',
  '2-3',
  'years.',
  'React.js',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Redux',
  'Context',
  'API.',
  'Vue.js,',
  'Nuxt.js',
  'UI/UX',
];

const Word: FC<WordProps> = ({ children, progress, range, text }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn('text-tt-1', skillsAndExperience.includes(text) && 'text-teal-400')}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
