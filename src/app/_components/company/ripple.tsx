"use client";
import { useWindowSize } from "@/hooks";
import React, { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) {
  const { width } = useWindowSize();
  return (
    <div className='absolute inset-0 z-[-1] flex items-center justify-center'>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * (width > 768 ? 90 : 45);
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + (i + 8) * 5;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full shadow-1  border [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "2px",
                borderColor: `rgba(255, 255, 255, ${100 - borderOpacity})`,

                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
