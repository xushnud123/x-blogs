import { FC } from 'react';
import BgTextAnimation from './bg-text-animation';
import TextRevealByWord from './text-reveal';

interface SkillsTextProps {}

const SkillsText: FC<SkillsTextProps> = ({}) => {
  return (
    <div className="block px-5">
      {/* <div className="font-satoshi text-tt-1 mx-auto flex w-full max-w-[680px] flex-wrap items-center justify-center gap-2 gap-x-3 text-[20px] font-normal leading-[32px] md:text-[24px] md:leading-[36px]">
        I have been working as a
        <BgTextAnimation children="Frontend Developer" />
        for more than <BgTextAnimation children="2-3 years" />
        Currently, I am building websites based on <BgTextAnimation children="React js" /> and{' '}
        <BgTextAnimation children="Next js" />
        technologies. I use <BgTextAnimation children="JavaScript" />
        and <BgTextAnimation children="TypeScript" />
        extensively as my base language. I have experience in working with
        <BgTextAnimation children="Redux" />
        , <BgTextAnimation children="Context API" />.
      </div> */}
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg md:min-h-max">
        <TextRevealByWord text="I have been working as a Frontend Developer for more than 2-3 years. Currently, I am building websites based on React.js and Next.js technologies. I extensively use JavaScript and TypeScript as my base languages. I also have experience working with Redux and Context API. Additionally, I am proficient in Vue.js, Nuxt.js and UI/UX design." />
      </div>
    </div>
  );
};

export default SkillsText;
