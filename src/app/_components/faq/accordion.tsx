"use client";
import * as React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronRight } from "@tabler/icons-react";

export interface AccordionProps {
  header: string;
  content: React.ReactNode;
  expanded: string | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<string | boolean>>;
  desktop: boolean;
}

const Accordion = ({
  expanded,
  setExpanded,
  content,
  header,
  desktop,
}: AccordionProps) => {
  const isOpen = header === expanded;

  return (
    <div
      className={clsx(
        "group w-full overflow-hidden border-b border-white/[0.2]",
        {}
      )}
    >
      <motion.div
        initial={false}
        onClick={() => {
          setExpanded(isOpen ? false : header);
        }}
        className={clsx(
          "t-all-300 text-gran-1 font-satoshi text-[24px] leading-[28.8px] md:text-[28px] font-medium md:leading-[33.6px] flex h-max cursor-pointer items-center justify-between text-left overflow-hidden px-8 py-8 ",
          { "cursor-auto": desktop }
        )}
      >
        {header}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{
            duration: 0.5,
            damping: 10,
            stiffness: 190,
            type: "spring",
          }}
        >
          <IconChevronRight
            width={32}
            height={32}
            className={clsx("t-all-300 text-gran-1 origin-center duration-500")}
          />
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial={"collapsed"}
            animate='open'
            exit={"collapsed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div
              className={clsx(
                "flex w-full flex-col gap-4 px-8 pb-[20px] text-[20px] font-satoshi text-tt-6 leading-[28px] text-left",
                { "pb-4": !desktop }
              )}
            >
              {content}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
