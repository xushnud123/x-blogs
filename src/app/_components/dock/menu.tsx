import Image from "next/image";
import { FC } from "react";
import {
  IconBinaryTree2,
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconBubbleText,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const links = [
    {
      title: "Work",
      icon: <IconBriefcase className='size-8 text-neutral-300' />,
      href: "#Work",
    },

    {
      title: "Experience",
      icon: <IconTerminal2 className='size-8 text-neutral-300' />,
      href: "#Experience",
    },
    {
      title: "Skills",
      icon: <IconBinaryTree2 className='size-8 text-neutral-300' />,
      href: "#Skills",
    },
    // {
    //   title: "X-Blogs",
    //   icon: <Image src='/logo X.png' width={40} height={40} alt='Xushnudbek' />,
    //   href: "#",
    // },
    {
      title: "FUQ",
      icon: <IconBubbleText className='size-8 text-neutral-300' />,
      href: "#FAQ",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className='size-8 text-neutral-300' />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className='size-8 text-neutral-300' />,
      href: "#",
    },
  ];
  return (
    <div className='w-full'>
      <div className='fixed z-[31] bg-bg-3  top-0 left-0 right-0 flex justify-between items-center px-5 py-3'>
        <Image src='/logo X.png' alt='X-Blogs' width={44} height={44} />
        <div className='text-white'>Btn</div>
      </div>
      <div
        className='flex fixed z-30
      ] bg-bg-3   top-0 left-0 right-0  h-screen items-center justify-center flex-col'
      >
        <ul className='flex flex-col gap-6 justify-center items-left'>
          {links.map((item) => (
            <li className='' key={item.title}>
              <Link href={item.href} className='group flex items-center gap-3'>
                {item.icon}
                <p className='group-hover:translate-x-2 transition-all ease-in text-tt-4'>
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
