import { FC } from "react";
import HoverBorderGradient from "../hover-border-gradient/hover-border-gradient";

interface StartProjectProps {}

const StartProject: FC<StartProjectProps> = ({}) => {
  return (
    <div className='mx-auto px-5 max-w-[1016px] w-full flex flex-col justify-center items-center'>
      <h2 className='block  text-tt-5 font-satoshi text-[30px] leading-[36px] font-normal text-center'>
        Ready to Start Your Project?
      </h2>
      <h5 className='text-tt-6 mt-[10px] mb-12 font-satoshi text-[20px] leading-[28px] font-normal text-center'>
        Let's take your business or personal blog to the internet.
      </h5>
      <HoverBorderGradient
        containerClassName='rounded-full'
        as='a'
        href='tel:+998998820641'
        target='_blank'
        className='bg-black text-white flex items-center space-x-2'
      >
        Schedule a Consultation
      </HoverBorderGradient>
    </div>
  );
};

export default StartProject;
