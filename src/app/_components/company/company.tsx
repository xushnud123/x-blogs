import { FC } from "react";
import Ripple from "./ripple";
import Image from "next/image";

interface CompanyProps {}

const Company: FC<CompanyProps> = ({}) => {
  return (
    <div className='relative flex overflow-x-hidden min-h-[560px] md:min-h-[850px] overflow-y-visible w-full flex-col items-center justify-center '>
      <div className='flex gap-10 w-full md:flex-row flex-col items-center justify-center'>
        <Image
          src='/images/company/New.svg'
          alt='comfi'
          width={210}
          height={65}
          className='w-[210px] h-auto'
        />
        <div className='w-[210px] md:h-auto h-[160px]' />
        <Image
          src='/images/company/Лого.svg'
          alt='buduar'
          width={240}
          height={80}
          className='w-[210px] h-auto'
        />
      </div>
      <Ripple />
    </div>
  );
};

export default Company;
