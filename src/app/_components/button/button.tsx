import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/utils/cn";

const button = cva(
  "flex overflow-hidden items-center justify-center gap-2 w-max transition-all duration-[220ms] disabled:cursor-not-allowed rounded-xl relative px-7 py-3 rounded-[28px] ease-in text-[16px]  font-satoshi font-normal leading-[19.2px] cursor-pointer",
  {
    variants: {
      intent: {
        text: ["border-none  bg-transparent text-white hover:text-white/70"],
        border: [
          "bg-transparent border border-white/15 hover:bg-black text-white disabled:bg-black disabled:text-white-100 h-11",
        ],
      },
    },
    defaultVariants: {
      intent: "border",
    },
  }
);

interface ButtonProps extends VariantProps<typeof button> {
  onClick?: () => void;
  className?: string;
  child?: React.ReactNode;
  href?: string;
  target?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  child,
  href,
  intent = "border",
  target,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        className={cn("block", button({ intent }), className)}
      >
        {child}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={cn("block", button({ intent }), className)}
    >
      {child}
    </button>
  );
};

export default Button;
