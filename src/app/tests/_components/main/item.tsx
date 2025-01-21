'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum';
import { items } from './data';
import { Close } from '@/app/_components/icons';
import { closeButtonVariants } from '@/utils/motion-variants';

export function Item({ id, onId }: { id: string; onId: (e: string) => void }) {
  const { category, title } = items.find((item) => item.id === id) || {};

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: 'auto' }}
        className="fixed inset-0 z-10 bg-black bg-opacity-80"
      >
        <div className="block h-full w-full" />
      </motion.div>
      <div
        onClick={() => onId('')}
        className="fixed inset-0 z-20 flex items-center justify-center p-6"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative h-[100%] w-full max-w-[700px] overflow-hidden overflow-y-auto rounded-2xl bg-[#1c1c1e]"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            onClick={() => onId('')}
            variants={closeButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="absolute right-4 top-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-md bg-black/50 backdrop-blur-[_16px_]"
          >
            <Close className="size-7" />
          </motion.div>
          <motion.div
            className="relative h-[420px] w-full overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            <img className="h-full w-full object-cover" src={`/images2/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="absolute left-6 top-6 max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="text-sm uppercase text-white">{category}</span>
            <h2 className="mt-2 text-white">{title}</h2>
          </motion.div>
          <motion.div className="p-6 text-lg leading-7 text-[#9d9ca1]" animate>
            <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
