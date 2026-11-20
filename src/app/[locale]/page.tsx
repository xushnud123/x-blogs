import Hero from '@/app/_components/hero/hero';
import Projects from '@/app/_components/projects/projects';
import Company from '@/app/_components/company/company';
import Experience from '@/app/_components/experience/experience';
import Skills from '@/app/_components/skills/skills';
import Faq from '@/app/_components/faq/faq';
import StartProject from '@/app/_components/start-project/start-project';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Company />
      <Experience />
      <Skills />
      <Faq />
      <StartProject />
    </>
  );
}
