import Hero from './_components/hero/hero';
import Projects from './_components/projects/projects';
import Company from './_components/company/company';
import Experience from './_components/experience/experience';
import Skills from './_components/skills/skills';
import Faq from './_components/faq/faq';
import StartProject from './_components/start-project/start-project';

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
