import { FC } from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mx-auto block w-full max-w-[1016px]"
    >
      <h2 className="block px-5 text-center font-satoshi text-[30px] font-normal leading-[36px] text-tt-5 md:text-left">
        Experience
      </h2>
      <div className="mt-12">
        <motion.div
          whileHover={{
            x: 20,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          initial={{ x: 0 }}
          className="w-full"
        >
          <div className="flex items-center justify-between px-5 md:px-8">
            <h3 className="font-regular font-hanken-grotesk text-[20px] leading-[26px] text-gran-1 md:text-[26px] md:leading-[31px]">
              Junior Frontend Developer
            </h3>
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-regular font-hanken-grotesk text-[32px] leading-[38px] text-gran-1">
                Famic
              </h4>
              <h5 className="font-regular font-hanken-grotesk text-[14px] leading-[19.6px] text-gran-1 md:text-[18px] md:leading-[25px]">
                Oct 2020 - May 2021
              </h5>
            </div>
          </div>
          <div className="my-4 h-[1px] w-full bg-white/[0.2]" />
        </motion.div>
        <motion.div
          whileHover={{
            x: 20,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          initial={{ x: 0 }}
          className="w-full"
        >
          <div className="flex items-center justify-between px-5 md:px-8">
            <h3 className="font-regular font-hanken-grotesk text-[20px] leading-[26px] text-gran-1 md:text-[26px] md:leading-[31px]">
              Frontend Developer
            </h3>
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-regular font-hanken-grotesk text-[32px] leading-[38px] text-gran-1">
                Comfi
              </h4>
              <h5 className="font-regular font-hanken-grotesk text-[14px] leading-[19.6px] text-gran-1 md:text-[18px] md:leading-[25px]">
                Jul 2021 - Continues
              </h5>
            </div>
          </div>
          <div className="my-4 h-[1px] w-full bg-white/[0.2]" />
        </motion.div>
        <motion.div
          whileHover={{
            x: 20,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          initial={{ x: 0 }}
          className="w-full"
        >
          <div className="flex items-center justify-between px-5 md:px-8">
            <h3 className="font-regular font-hanken-grotesk text-[20px] leading-[26px] text-gran-1 md:text-[26px] md:leading-[31px]">
              Frontend Developer
            </h3>
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-regular font-hanken-grotesk text-[32px] leading-[38px] text-gran-1">
                Buduar
              </h4>
              <h5 className="font-regular font-hanken-grotesk text-[14px] leading-[19.6px] text-gran-1 md:text-[18px] md:leading-[25px]">
                Jan 2022 - Apr 2022
              </h5>
            </div>
          </div>
          <div className="my-4 h-[1px] w-full bg-white/[0.2]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
