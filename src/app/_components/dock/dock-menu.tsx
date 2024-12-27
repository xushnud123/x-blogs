"use client";
import React from "react";
import {
  IconBinaryTree2,
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconBubbleText,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import { FloatingDock } from "./dock";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Work",
      icon: <IconBriefcase className='size-full text-neutral-300' />,
      href: "#Work",
    },

    {
      title: "Experience",
      icon: <IconTerminal2 className='size-full text-neutral-300' />,
      href: "#Experience",
    },
    {
      title: "Skills",
      icon: <IconBinaryTree2 className='size-full text-neutral-300' />,
      href: "#Skills",
    },
    // {
    //   title: "X-Blogs",
    //   icon: <Image src='/logo X.png' width={40} height={40} alt='Xushnudbek' />,
    //   href: "#",
    // },
    // {
    //   title: "FUQ",
    //   icon: <IconBubbleText className='size-full text-neutral-300' />,
    //   href: "#FAQ",
    // },

    // {
    //   title: "Twitter",
    //   icon: <IconBrandX className='size-full text-neutral-300' />,
    //   href: "#",
    // },
    {
      title: "GitHub",
      icon: <IconBrandGithub className='size-full text-neutral-300' />,
      href: "#",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: 0.375,
        damping: 10,
        stiffness: 190,
        type: "spring",
      }}
      className='flex items-center justify-center h-max w-full'
    >
      <FloatingDock mobileClassName='translate-y-20' items={links} />
    </motion.div>
  );
}
