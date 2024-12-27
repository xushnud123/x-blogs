import { FC } from "react";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <div className='block mx-auto  max-w-[1016px] w-full'>
      <h2 className='block px-5  text-tt-5 font-satoshi text-[30px] leading-[36px] font-normal md:text-left text-center'>
        Experience
      </h2>
      <div className='mt-12'>
        <div className='w-full'>
          <div className='flex items-center justify-between px-5 md:px-8'>
            <h3 className='text-gran-1 font-hanken-grotesk text-[20px] md:text-[26px] leading-[26px] md:leading-[31px] font-regular'>
              Junior Frontend Developer
            </h3>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-gran-1 font-hanken-grotesk text-[32px] leading-[38px] font-regular'>
                Famic
              </h4>
              <h5 className='text-gran-1 font-hanken-grotesk md:text-[18px] md:leading-[25px] text-[14px] leading-[19.6px] font-regular'>
                Oct 2020 - May 2021
              </h5>
            </div>
          </div>
          <div className='w-full h-[1px] my-4 bg-white/[0.2]' />
        </div>
        <div className='w-full'>
          <div className='flex items-center justify-between px-5 md:px-8'>
            <h3 className='text-gran-1 font-hanken-grotesk text-[20px] md:text-[26px] leading-[26px] md:leading-[31px] font-regular'>
              Frontend Developer
            </h3>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-gran-1 font-hanken-grotesk text-[32px] leading-[38px] font-regular'>
                Comfi
              </h4>
              <h5 className='text-gran-1 font-hanken-grotesk md:text-[18px] md:leading-[25px] text-[14px] leading-[19.6px] font-regular'>
                Jul 2021 - Continues
              </h5>
            </div>
          </div>
          <div className='w-full h-[1px] my-4 bg-white/[0.2]' />
        </div>
        <div className='w-full'>
          <div className='flex items-center justify-between px-5 md:px-8'>
            <h3 className='text-gran-1 font-hanken-grotesk text-[20px] md:text-[26px] leading-[26px] md:leading-[31px] font-regular'>
              Frontend Developer
            </h3>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-gran-1 font-hanken-grotesk text-[32px] leading-[38px] font-regular'>
                Buduar
              </h4>
              <h5 className='text-gran-1 font-hanken-grotesk md:text-[18px] md:leading-[25px] text-[14px] leading-[19.6px] font-regular'>
                Jan 2022 - Apr 2022
              </h5>
            </div>
          </div>
          <div className='w-full h-[1px] my-4 bg-white/[0.2]' />
        </div>
      </div>
    </div>
  );
};

export default Experience;
