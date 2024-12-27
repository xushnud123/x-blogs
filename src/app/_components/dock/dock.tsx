"use client";
import { useRef, useState } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";

import { cn } from "@/utils/cn";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: Array<{ title: string; icon: React.ReactNode; href: string }>;
  desktopClassName?: string;
  mobileClassName?: string;
}) => (
  <>
    <FloatingDockDesktop items={items} className={desktopClassName} />
    <FloatingDockMobile items={items} className={mobileClassName} />
  </>
);

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: Array<{ title: string; icon: React.ReactNode; href: string }>;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative hidden md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId='nav'
            className='absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2'
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className='size-10 rounded-full bg-neutral-900 flex items-center justify-center'
                >
                  <div className='size-4'>{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className='size-10 rounded-full bg-neutral-800  flex items-center justify-center'
      >
        <IconLayoutNavbarCollapse className='size-5 text-neutral-400' />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: Array<{ title: string; icon: React.ReactNode; href: string }>;
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 gap-4 items-end  rounded-2xl bg-neutral-900/45 border border-white/15 backdrop-blur-[18px] px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='aspect-square rounded-full bg-neutral-800/45 backdrop-blur-[18px] flex items-center justify-center relative'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className='px-2 py-0.5 whitespace-pre rounded-md  border bg-neutral-800 border-neutral-900 text-white   absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className='flex items-center justify-center'
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
