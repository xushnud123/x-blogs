'use client';

import { useLanguage } from '@/app/_components/language-provider';

import { Reveal } from '../motion/motion';
const questions = [
  {
    question: 'What can we build together?',
    answer:
      'Web applications, admin dashboards, backend APIs, and mobile apps. My recent work includes EV charging, payment and billing flows, real-time integrations, and queue management. I’m happy to discuss a role on your team or a specific project.',
  },
  {
    question: 'Do you work across the whole stack?',
    answer:
      'Yes. I work with React and Next.js on the web, Node.js with NestJS or Fastify for APIs, and Flutter or React Native on mobile. The tools follow the project, its existing architecture, and the people using it.',
  },
  {
    question: 'Where can I explore the code?',
    answer:
      'The Full-stack Monorepo links to its public GitHub repository. Other projects describe my contributions to private repositories. The galleries show actual applications with sample data; open any image to see it in full.',
  },
  {
    question: 'What’s the best way to reach you?',
    answer:
      'Call +998 99 882 06 41, message me on Telegram, or send an email. Tell me about the role or project and what you’d like to build.',
  },
];
export default function Faq() {
  const { t } = useLanguage();
  return (
    <section id="FAQ" className="faq-section section-wrap" aria-labelledby="faq-title">
      <Reveal className="section-heading">
        <h2 id="faq-title">
          {t('Good')} <span>{t('questions.')}</span>
        </h2>
        <p>{t('A few things before we say hello.')}</p>
      </Reveal>
      <div className="faq-list">
        {questions.map(({ question, answer }) => (
          <Reveal key={question}>
            <details>
              <summary>
                {t(question)}
                <span className="faq-plus" aria-hidden>
                  +
                </span>
              </summary>
              <p>{t(answer)}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
