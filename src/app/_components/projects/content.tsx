import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../button/button';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { Blurhash } from 'react-blurhash';

const Content = forwardRef<any, any>(
  (
    { scale, top, name, description, link, engagement, userSatisfaction, image, bgColor, blurhash },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <motion.div
        ref={ref}
        className="sticky z-[1] mx-auto h-auto w-full max-w-[1016px] flex-none px-5 will-change-transform perspective-1200"
        style={{ top, scale }}
      >
        <div className="relative flex h-max w-full flex-col gap-10 overflow-hidden rounded-[32px] border border-br-1 bg-bg-1 p-[30px_20px] text-2xl md:flex-row md:p-[60px_40px]">
          <div className="relative z-[2] flex w-full flex-col justify-between md:w-1/2">
            <div>
              <h2 className="text-left font-satoshi text-2xl font-normal leading-[42px] text-tt-1">
                {name}
              </h2>
              <h3 className="text-left font-satoshi text-sm font-normal leading-relaxed text-tt-2">
                {description}
              </h3>
            </div>
            <Button href={link} child="View case study" className="mt-8" />
          </div>
          <div className={cn('relative z-[2] w-full md:w-1/2')}>
            <div className="relative z-[2]">
              {!isLoaded && (
                <Blurhash
                  hash={blurhash}
                  className="h-auto !w-full overflow-hidden rounded-[8px]"
                  width={364}
                  height={228}
                />
              )}

              <Image
                src={image}
                alt={name}
                width={364}
                height={228}
                className="h-auto w-full rounded-[8px]"
                onLoadingComplete={() => setIsLoaded(true)}
              />
              <div className="mt-5 flex gap-5">
                <div>
                  <h4 className="text-left font-satoshi text-base font-normal leading-7 text-tt-3">
                    Engagement
                  </h4>
                  <h5 className="mt-2 text-left font-satoshi text-[32px] font-normal leading-[50px] text-tt-3">
                    {engagement}
                  </h5>
                </div>
                <div>
                  <h4 className="text-left font-satoshi text-base font-normal leading-7 text-tt-3">
                    User Satisfaction
                  </h4>
                  <h5 className="mt-2 text-left font-satoshi text-[32px] font-normal leading-[50px] text-tt-3">
                    {userSatisfaction}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'absolute right-0 top-[-50px] z-[1] h-[600px] w-[600px] opacity-[0.15] blur-[100px]',
              bgColor,
            )}
          />
        </div>
      </motion.div>
    );
  },
);

Content.displayName = 'Content';

export default Content;
