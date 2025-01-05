import { FC } from 'react';
import HoverBorderGradient from '../hover-border-gradient/hover-border-gradient';
import { motion } from 'framer-motion';

interface StartProjectProps {}

const StartProject: FC<StartProjectProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mx-auto flex w-full max-w-[1016px] flex-col items-center justify-center px-5"
    >
      <h2 className="block text-center font-satoshi text-[30px] font-normal leading-[36px] text-tt-5">
        Ready to Start Your Project?
      </h2>
      <h3 className="mb-12 mt-[10px] text-center font-satoshi text-[20px] font-normal leading-[28px] text-tt-6">
        Let's take your business or personal blog to the internet.
      </h3>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href="tel:+998998820641"
        target="_blank"
        className="flex items-center space-x-2 bg-black text-white"
      >
        Schedule a Consultation
      </HoverBorderGradient>
    </motion.div>
  );
};

export default StartProject;
