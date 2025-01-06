'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FC, useRef } from 'react';
import Content from './content';
import { imagesBlur } from '@/utils/images-blur';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const { scrollYProgress: scrollY2 } = useScroll({
    target: ref2,
    offset: ['1 0 ', 'start center'],
  });
  const { scrollYProgress: scrollY3 } = useScroll({
    target: ref3,
    offset: ['1 0', 'start end'],
  });
  const { scrollYProgress: scrollY4 } = useScroll({
    target: ref4,
    offset: ['1 0', 'start end'],
  });

  const scale2 = useTransform(scrollY2, [0, 1], [0.7, 1]);
  const scale3 = useTransform(scrollY3, [0, 1], [0.9, 1]);
  const scale4 = useTransform(scrollY4, [0, 1], [0.95, 1]);

  const projects = [
    {
      name: 'Comfi B2B Payments UAE',
      description:
        'Comfi B2B Payments UAE is a software solution designed to streamline accounts receivable management for businesses in the United Arab Emirates. The software allows B2B suppliers to automate invoicing and offer flexible credit terms, fostering stronger relationships with buyers.',
      link: 'https://comfi.ai',
      engagement: '2 years',
      userSatisfaction: '5',
      image: '/images/projects/Hero.png',
      bgColor: 'bg-projects-1',
      ref: ref1,
      top: 100,
      scale: scale2,
      blurhash: imagesBlur.content.comfi,
    },
    {
      name: 'Buduar',
      description:
        "A platform aimed at increasing sales by promoting your clothing store's 3D content on social networks or marketplaces",
      link: 'https://buduar.space',
      engagement: '4-5 months',
      userSatisfaction: '4.5',
      image: '/images/projects/Screenshot 2024-08-26 at 20.58.24.png',
      bgColor: 'bg-projects-2',
      ref: ref2,
      top: 140,
      scale: scale3,
      blurhash: imagesBlur.content.buduar,
    },
    {
      name: 'Personal project',
      description: 'A small project that tells about myself',
      link: 'https://xushnudbek-2023.vercel.app/',
      engagement: '1-2 months',
      userSatisfaction: '4.5',
      image: '/images/projects/Screenshot 2024-12-29 at 17.27.40.png',
      bgColor: 'bg-projects-3',
      ref: ref2,
      top: 140,
      scale: scale3,
      blurhash: imagesBlur.content.personal,
    },
    // {
    //   name: 'Comfi B2B Payments UAE',
    //   description:
    //     'Comfi B2B Payments UAE is a software solution designed to streamline accounts receivable management for businesses in the United Arab Emirates. The software allows B2B suppliers to automate invoicing and offer flexible credit terms, fostering stronger relationships with buyers.',
    //   link: 'https://comfi.ai',
    //   engagement: '2 years',
    //   userSatisfaction: '5',
    //   image: '/images/projects/Hero.png',
    //   bgColor: 'bg-projects-3',
    //   ref: ref3,
    //   top: 175,
    //   scale: scale4,
    // },
    // {
    //   name: 'Buduar',
    //   description:
    //     "A platform aimed at increasing sales by promoting your clothing store's 3D content on social networks or marketplaces",
    //   link: 'https://buduar.space.com',
    //   engagement: '4-5 months',
    //   userSatisfaction: '4.5',
    //   image: '/images/projects/Screenshot 2024-08-26 at 20.58.24.png',
    //   bgColor: 'bg-projects-4',
    //   ref: ref4,
    //   top: 210,
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex min-h-min flex-col flex-nowrap gap-[48px] overflow-visible perspective-1200"
    >
      {projects.map(({ ref, ...project }, index) => (
        <Content key={index} {...project} ref={ref} />
      ))}
    </motion.div>
  );
};

export default Projects;
