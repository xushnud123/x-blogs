import { forwardRef } from "react";
import { motion } from "framer-motion";
import Button from "../button/button";
import Image from "next/image";
import { cn } from "@/utils/cn";

const Content = forwardRef<any, any>(
  (
    {
      child,
      scale,
      top,
      name,
      description,
      link,
      engagement,
      userSatisfaction,
      image,
      bgColor,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className='flex-none h-auto mx-auto  max-w-[1016px] px-5 perspective-1200  w-full will-change-transform z-[1] sticky'
        style={{ top, scale }}
      >
        <div className='h-max p-[30px_20px]  md:p-[60px_40px] bg-bg-1 flex md:flex-row flex-col gap-10 border border-br-1 rounded-[32px] text-2xl w-full overflow-hidden relative'>
          <div className='flex flex-col relative z-[2] justify-between w-full md:w-1/2'>
            <div>
              <h2 className='text-2xl font-normal text-left font-satoshi leading-[42px] text-tt-1'>
                {name}
              </h2>
              <h4 className='text-sm font-normal text-left font-satoshi leading-relaxed text-tt-2'>
                {description}
              </h4>
            </div>
            <Button href={link} child='View case study' className='mt-8' />
          </div>
          <div className={cn("relative z-[2] w-full md:w-1/2")}>
            <div className='relative z-[2]'>
              <Image
                src={image}
                alt={name}
                width={364}
                height={228}
                className='w-full h-auto rounded-[8px]'
              />
              <div className='flex gap-5 mt-5'>
                <div>
                  <h4 className='text-base text-left font-normal font-satoshi leading-7 text-tt-3'>
                    Engagement
                  </h4>
                  <h5 className='mt-2 text-[32px] text-left font-normal font-satoshi leading-[50px] text-tt-3'>
                    {engagement}
                  </h5>
                </div>
                <div>
                  <h4 className='text-base text-left font-normal font-satoshi leading-7 text-tt-3'>
                    User Satisfaction
                  </h4>
                  <h5 className='mt-2 text-left text-[32px] font-normal font-satoshi leading-[50px] text-tt-3'>
                    {userSatisfaction}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "absolute right-0 top-[-50px] w-[600px]  h-[600px] blur-[100px] z-[1] opacity-[0.15]",
              bgColor
            )}
          />
        </div>
      </motion.div>
    );
  }
);

Content.displayName = "Content";

export default Content;
