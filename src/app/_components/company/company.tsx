'use client';
import { FC, useState } from 'react';
import Ripple from './ripple';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';
import { imagesBlur } from '@/utils/images-blur';

interface CompanyProps {}

const Company: FC<CompanyProps> = ({}) => {
  const [isLoaded, setIsLoaded] = useState({ comfi: false, buduar: false });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex min-h-[560px] w-full flex-col items-center justify-center overflow-x-hidden overflow-y-visible md:min-h-[850px]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
        {!isLoaded.comfi && (
          <Blurhash
            hash={imagesBlur.company.comfi}
            className="h-auto !w-full overflow-hidden rounded-[8px]"
            width={210}
            height={65}
          />
        )}
        <Image
          src="/images/company/New.svg"
          alt="comfi"
          width={210}
          height={65}
          className="h-auto w-[210px]"
          onLoadingComplete={() => {
            setIsLoaded({ ...isLoaded, comfi: true });
          }}
        />
        <div className="h-[160px] w-[210px] md:h-auto" />
        {!isLoaded.buduar && (
          <Blurhash
            hash={imagesBlur.company.buduar}
            className="h-auto !w-full overflow-hidden rounded-[8px]"
            width={240}
            height={80}
          />
        )}
        <Image
          src="/images/company/Лого.svg"
          alt="buduar"
          width={240}
          height={80}
          className="h-auto w-[210px]"
          onLoadingComplete={() => setIsLoaded({ buduar: true, comfi: true })}
        />
      </div>
      <Ripple />
    </motion.div>
  );
};

export default Company;
