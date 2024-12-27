"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/constants";

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
    <div className='block px-5 mx-auto  max-w-[1016px]'>
      <h5 className='font-satoshi  text-tt-5 text-[30px] leading-[36px] font-normal md:text-left text-center'>
        Skills
      </h5>
      <ul className='flex flex-wrap items-center gap-3 justify-center mt-12'>
        {skillsData.map((item, index) => (
          <motion.li
            key={item}
            className='bg-bg-2 rounded-[8px] font-satoshi text-tt-4 text-[16px] leading-[22px] font-medium px-3 py-2 border border-white/[0.2] list-none'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
