'use client';

import React from 'react';
import { items } from './data';
import { motion } from 'framer-motion';

function Card({
  id,
  title,
  category,
  theme,
  onId,
}: {
  onId: (e: string) => void;
  id: string;
  title: string;
  category: string;
  theme: string;
}) {
  return (
    <li className={`relative h-[460px] w-full p-6 md:max-w-[40%] md:flex-[0_0_40%] ${theme}`}>
      <div className="pointer-events-none relative block h-full w-full">
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-2xl bg-[#1c1c1e]"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="absolute left-0 top-0 h-[420px] w-full overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            <img className="h-full w-full object-cover" src={`/images2/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="absolute left-4 top-4 max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="text-sm uppercase text-white">{category}</span>
            <h2 className="mt-2 text-white">{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <div onClick={() => onId(id)} className="absolute bottom-0 left-0 right-0 top-0" />
    </li>
  );
}

export function List({ selectedId, onId }: { selectedId: string; onId: (e: string) => void }) {
  return (
    <ul className="flex flex-wrap items-start justify-center">
      {items.map((card: any) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} onId={onId} />
      ))}
    </ul>
  );
}
