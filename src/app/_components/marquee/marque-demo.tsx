import { FC } from "react";
import Marquee from "./marquee";
import { cn } from "@/utils/cn";

import cls from "./marque.module.scss";

interface MarqueDemoProps {}

const MarqueDemo: FC<MarqueDemoProps> = ({}) => {
  const firstRow = [
    {
      img: "/images/marquee/reactjs.svg",
      name: "React JS",
      body: "A JavaScript library for building user interfaces",
    },
    {
      img: "/images/marquee/Vue.svg",
      name: "Vue JS",
      body: "The Progressive JavaScript Framework",
    },
    {
      img: "/images/marquee/js.svg",
      name: "JavaScript",
      body: "A programming language that conforms to the ECMAScript specification",
    },
    {
      img: "/images/marquee/typescript.svg",
      name: "TypeScript",
      body: "An open-source language which builds on JavaScript",
    },
    {
      img: "/images/marquee/nextjs2.svg",
      name: "Next JS",
      body: "The React Framework for Production",
    },
    {
      img: "/images/marquee/nuxt.svg",
      name: "Nuxt JS",
      body: "The Intuitive Vue Framework",
    },
    {
      img: "/images/marquee/reactquery.svg",
      name: "React Query",
      body: "A data-fetching library for React",
    },
    {
      img: "/images/marquee/reactrouter.svg",
      name: "React Router",
      body: "Declarative routing for React",
    },
    {
      img: "/images/marquee/nodejs.svg",
      name: "Node JS",
      body: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
      img: "/images/marquee/mongodb.svg",
      name: "MongoDB",
      body: "A general purpose, document-based, distributed database",
    },
    {
      img: "/images/marquee/tailwindcss.svg",
      name: "Tailwind CSS",
      body: "A utility-first CSS framework for rapid UI development",
    },
    {
      img: "/images/marquee/antd.svg",
      name: "Ant Design",
      body: "A design system for enterprise-level products",
    },
  ];

  return (
    <div className={cn(cls.wrapper, "max-w-[976px] w-full  mx-auto relative")}>
      <Marquee pauseOnHover className='[--duration:50s]'>
        {firstRow.map(({ img, name, body }) => (
          <figure
            key={name}
            className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
            )}
          >
            <div className='flex flex-row items-center gap-2'>
              <img
                className='rounded-full'
                width='32'
                height='32'
                alt=''
                src={img}
              />
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium dark:text-white '>
                  {name}
                </figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-sm text-left'>{body}</blockquote>
          </figure>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueDemo;
