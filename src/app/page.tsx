'use client';
import {
  BgTextAnimation,
  Company,
  Experience,
  Fuq,
  Hero,
  Projects,
  Skills,
  SkillsText,
  StartProject,
} from './_components';
import { BackgroundGradientAnimation } from './_components/background/random-shape';

export default function Home() {
  return (
    <>
      <div className="fixed left-[10%] top-[10%] z-0 h-4/5 w-4/5">
        <BackgroundGradientAnimation interactive />
      </div>
      <div className="relative z-20 text-white">
        <div className="flex flex-col justify-center gap-[120px] pb-20 text-center md:gap-[192px]">
          <Hero />
          <Projects />
        </div>
        <SkillsText />
        <div className="flex flex-col justify-center gap-[120px] pb-20 text-center md:gap-[192px]">
          <Company />
          <Skills />
          <Experience />
          <Fuq />
          <StartProject />
        </div>
      </div>
    </>
  );
}
