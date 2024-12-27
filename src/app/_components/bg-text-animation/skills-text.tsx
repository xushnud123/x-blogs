import { FC } from 'react';
import TextRevealByWord from './text-reveal';

interface SkillsTextProps {}

const SkillsText: FC<SkillsTextProps> = ({}) => {
  return (
    <div className="block px-5">
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg md:min-h-max">
        <TextRevealByWord text="I have been working as a Frontend Developer for more than 2-3 years. Currently, I am building websites based on React.js and Next.js technologies. I extensively use JavaScript and TypeScript as my base languages. I also have experience working with Redux and Context API. Additionally, I am proficient in Vue.js, Nuxt.js and UI/UX design." />
      </div>
    </div>
  );
};

export default SkillsText;
