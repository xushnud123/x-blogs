'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/utils/constants';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mx-auto block max-w-[1016px] px-5"
    >
      <h5 className="text-center font-satoshi text-[30px] font-normal leading-[36px] text-tt-5 md:text-left">
        Skills
      </h5>
      <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {skillsData.map((item, index) => (
          <motion.li
            key={item}
            className="list-none rounded-[8px] border border-white/[0.2] bg-bg-2 px-3 py-2 font-satoshi text-[16px] font-medium leading-[22px] text-tt-4"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
