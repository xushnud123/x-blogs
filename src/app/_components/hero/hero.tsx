"use client";
import { FC } from "react";
import Image from "next/image";
import HoverBorderGradient from "../hover-border-gradient/hover-border-gradient";
import Button from "../button/button";
import { motion } from "framer-motion";
import MarqueDemo from "../marquee/marque-demo";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className='flex justify-center text-center flex-col gap-[90px] md:gap-[120px] mt-10'>
      <div className='block px-5'>
        <div className='max-w-[1080px] mx-auto flex gap-6 flex-col'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0,
              damping: 10,
              stiffness: 190,
              type: "spring",
            }}
            className='flex gap-0 flex-col justify-center items-center'
          >
            <div className='bg-white/20 p-4 rounded-[140px] h-[140px] pb-0 overflow-hidden'>
              <Image
                src='/images/hero/image 2 (1).svg'
                alt='Raimov Xushnudbek'
                width={108}
                height={108}
              />
            </div>
            <div className='p-[10px_14px]  -translate-y-6 font-inter text-black  rounded-[10px] bg-white text-sm font-semibold capitalize leading-none'>
              Raimov Xushnudbek
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0.075,
              damping: 10,
              stiffness: 190,
              type: "spring",
            }}
          >
            <h1 className='bg-clip-text bg-text-radial text-center text-transparent text-[32px] md:text-[44.56px] font-medium md:leading-[55.20px] leading-[38px]'>
              Hi I'm a Frontend Developer, <br />
              nice to see you
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0.15,
              damping: 10,
              stiffness: 190,
              type: "spring",
            }}
          >
            <h5 className='text-[18px] text-gran-1 font-satoshi font-normal leading-[25.2px] max-w-[500px] text-center mx-auto'>
              As a developer and designer, I specialize in creating
              minimalistic, efficient, and beautiful websites. Let’s build
              something amazing together.
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0.225,
              damping: 10,
              stiffness: 190,
              type: "spring",
            }}
            className='flex gap-3 items-center justify-center'
          >
            <HoverBorderGradient
              containerClassName='rounded-full'
              as='a'
              href='https://github.com/xushnud123'
              target='_blank'
              className='bg-black  text-white flex items-center space-x-2'
            >
              <div className='flex items-center gap-2'>
                <IconBrandGithub className='size-full text-neutral-300' />
                GitHub
              </div>
            </HoverBorderGradient>
            <Button
              child={
                <div className='flex items-center gap-2'>
                  <IconBrandLinkedin className='size-full text-neutral-300' />
                  Linkedin
                </div>
              }
              href='https://linkedin.com/in/xushnudbek-raimov-a876a9228'
              target='_blank'
            />
            <Button
              child={
                <div className='flex items-center gap-2'>
                  <IconBrandLinkedin className='size-full text-neutral-300' />
                  Telegram
                </div>
              }
              href='https://t.me/XushnudbekRaimov'
              target='_blank'
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.3,
          damping: 10,
          stiffness: 190,
          type: "spring",
        }}
      >
        <MarqueDemo />
      </motion.div>
    </div>
  );
};

export default Hero;
