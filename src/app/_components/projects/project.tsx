import { cn } from "@/utils/cn";
import { useScroll, useTransform, motion } from "framer-motion";
import { FC, useRef } from "react";

interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  return (
    <motion.div
      key={1}
      className={cn(
        "bg-[#141414] relative h-[450px] w-[450px] overflow-hidden rounded-[32px] border border-br-1"
      )}
      style={{
        scale,
      }}
    >
      <div className='flex justify-center items-center h-full'>
        <h1 className='text-white text-4xl'>1</h1>
      </div>
    </motion.div>
  );
};

export default Project;
