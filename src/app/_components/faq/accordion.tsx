'use client';
import * as React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { IconChevronRight } from '@tabler/icons-react';

export interface AccordionProps {
  header: string;
  content: React.ReactNode;
  expanded: string | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<string | boolean>>;
  desktop: boolean;
}

const Accordion = ({ expanded, setExpanded, content, header, desktop }: AccordionProps) => {
  const isOpen = header === expanded;

  return (
    <motion.div
      whileHover={{
        x: 20,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      initial={{ x: 0 }}
      className={clsx('group w-full overflow-hidden border-b border-white/[0.2]', {})}
    >
      <motion.div
        initial={false}
        onClick={() => {
          setExpanded(isOpen ? false : header);
        }}
        className={clsx(
          't-all-300 flex h-max cursor-pointer items-center justify-between overflow-hidden px-8 py-8 text-left font-satoshi text-[24px] font-medium leading-[28.8px] text-gran-1 md:text-[28px] md:leading-[33.6px]',
          { 'cursor-auto': desktop },
        )}
      >
        {header}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{
            duration: 0.5,
            damping: 10,
            stiffness: 190,
            type: 'spring',
          }}
        >
          <IconChevronRight
            width={32}
            height={32}
            className={clsx('t-all-300 origin-center text-gran-1 duration-500')}
          />
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial={'collapsed'}
            animate="open"
            exit={'collapsed'}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div
              className={clsx(
                'flex w-full flex-col gap-4 px-8 pb-[20px] text-left font-satoshi text-[20px] leading-[28px] text-tt-6',
                { 'pb-4': !desktop },
              )}
            >
              {content}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
