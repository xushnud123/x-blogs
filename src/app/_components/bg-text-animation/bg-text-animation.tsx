'use client';
import { cn } from '@/utils/cn';
import { CSSProperties, FC, ReactNode } from 'react';

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <div className="border-br-2 shadow-2 w-max rounded-[24px] border bg-black px-[18px] py-[6px]">
      <p
        style={
          {
            '--shiny-width': `${shimmerWidth}px`,
          } as CSSProperties
        }
        className={cn(
          'text-anim-6/85 font-satoshi mx-auto max-w-md text-[20px] font-normal leading-[28px] md:text-[24px] md:leading-[33px]',

          // Shine effect
          'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

          // Shine gradient
          'bg-gradient-to-r from-transparent via-white/100 via-50% to-transparent backdrop-blur',

          className,
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default AnimatedShinyText;
