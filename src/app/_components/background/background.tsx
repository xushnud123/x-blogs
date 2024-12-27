import { FC } from "react";

import { cn } from "@/utils/cn";

import cls from "./background.module.scss";

interface BackgroundProps {}

const Background: FC<BackgroundProps> = ({}) => (
  <div className={cn("w-full h-full relative")}></div>
);

export default Background;
