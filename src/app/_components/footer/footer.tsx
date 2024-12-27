import { FC } from "react";
import Button from "../button/button";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='mx-auto relative z-20 max-w-[1016px] w-full'>
      <div className='px-5 py-6 flex items-center flex-col gap-11 sm:flex-row justify-between'>
        <p className='font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 hover:text-tt-2 transition-all'>
          X-Blogs &copy; Raimov Xushnudbek 2024
        </p>
        <div className='flex gap-2 items-center sm:justify-end justify-center'>
          <Button
            intent='text'
            child='Linkedin'
            href='https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/'
            target='_blank'
            className='px-2 py-0 font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 hover:text-tt-2 transition-all'
          />
          <Button
            intent='text'
            child='Mail'
            href='mailto:12xushnudbek34@gmail.com'
            target='_blank'
            className='px-2 py-0 font-satoshi cursor-pointer text-[12px] font-medium leading-[14px] text-tt-4 hover:text-tt-2 transition-all'
          />
          <Button
            intent='text'
            child='GitHub'
            href='https://github.com/xushnud123'
            target='_blank'
            className='px-2 py-0 font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 hover:text-tt-2 transition-all'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
