import { FC } from 'react';
import TextRevealByWord from './text-reveal';
import { motion } from 'framer-motion';

interface SkillsTextProps {}

const SkillsText: FC<SkillsTextProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="block px-5"
    >
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg md:min-h-max">
        <TextRevealByWord text="I have been working as a Frontend Developer for more than 2-3 years. Currently, I am building websites based on React.js and Next.js technologies. I extensively use JavaScript and TypeScript as my base languages. I also have experience working with Redux and Context API. Additionally, I am proficient in Vue.js, Nuxt.js and UI/UX design." />
      </div>
    </motion.div>
  );
};

export default SkillsText;
