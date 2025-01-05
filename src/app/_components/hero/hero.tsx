'use client';
import { FC } from 'react';
import Image from 'next/image';
import HoverBorderGradient from '../hover-border-gradient/hover-border-gradient';
import Button from '../button/button';
import { motion } from 'framer-motion';
import MarqueDemo from '../marquee/marque-demo';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTelegram } from '@tabler/icons-react';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="mt-10 flex flex-col justify-center gap-[90px] text-center md:gap-[120px]">
      <div className="block px-5">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
              delay: 0,
              damping: 10,
              stiffness: 190,
              type: 'spring',
            }}
            className="flex flex-col items-center justify-center gap-0"
          >
            <div className="h-[140px] overflow-hidden rounded-[140px] bg-white/20 p-4 pb-0">
              <Image
                src="/images/hero/image 2 (1).svg"
                alt="Raimov Xushnudbek"
                width={108}
                height={108}
              />
            </div>
            <div className="-translate-y-6 rounded-[10px] bg-white p-[10px_14px] font-inter text-sm font-semibold capitalize leading-none text-black">
              Raimov Xushnudbek
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
              delay: 0.075,
              damping: 10,
              stiffness: 190,
              type: 'spring',
            }}
          >
            <h1 className="bg-text-radial bg-clip-text text-center text-[32px] font-medium leading-[38px] text-transparent md:text-[44.56px] md:leading-[55.20px]">
              Hi I'm a Frontend Developer, <br />
              nice to see you
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
              delay: 0.15,
              damping: 10,
              stiffness: 190,
              type: 'spring',
            }}
          >
            <h2 className="mx-auto max-w-[500px] text-center font-satoshi text-[18px] font-normal leading-[25.2px] text-gran-1">
              As a developer and designer, I specialize in creating minimalistic, efficient, and
              beautiful websites. Let’s build something amazing together.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
              delay: 0.225,
              damping: 10,
              stiffness: 190,
              type: 'spring',
            }}
            className="flex items-center justify-center gap-3"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="https://github.com/xushnud123"
              target="_blank"
              className="flex items-center space-x-2 bg-black text-white"
            >
              <div className="flex items-center gap-2">
                <IconBrandGithub className="size-full text-neutral-300" />
                GitHub
              </div>
            </HoverBorderGradient>
            <Button
              child={
                <div className="flex items-center gap-2">
                  <IconBrandLinkedin className="size-full text-neutral-300" />
                  Linkedin
                </div>
              }
              href="https://linkedin.com/in/xushnudbek-raimov-a876a9228"
              target="_blank"
            />
            <Button
              child={
                <div className="flex items-center gap-2">
                  <IconBrandTelegram className="size-full text-neutral-300" />
                  Telegram
                </div>
              }
              href="https://t.me/XushnudbekRaimov"
              target="_blank"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: 'linear',
          delay: 0.3,
          damping: 10,
          stiffness: 190,
          type: 'spring',
        }}
      >
        <MarqueDemo />
      </motion.div>
    </div>
  );
};

export default Hero;
