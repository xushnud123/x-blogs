'use client';

import Image from 'next/image';
import Link from 'next/link';
import { localePath } from '@/utils/site';
import { useLanguage } from '../language-provider';
import { Reveal } from '../motion/motion';
import Experience from '../experience/experience';
import StartProject from '../start-project/start-project';

const interests = [
  {
    title: 'Anime & imagined worlds',
    description:
      'Bleach, Fullmetal Alchemist, and Marvel draw me into questions about characters, their choices, and how a story fits together. I like looking beyond the ending to understand the world behind it.',
    label: 'Bleach / Fullmetal Alchemist / Marvel',
  },
  {
    title: 'Architecture & engineering',
    description:
      'I explore how drawings, BIM models, calculations, and estimates connect. I’m especially interested in using software and AI to make that work more consistent and easier to check.',
    label: 'CAD / BIM / AI',
  },
  {
    title: 'Interfaces in motion',
    description:
      'Thoughtful typography, geometric identity, and animation that makes an interface feel clear and natural. This portfolio is one place where I explore those details.',
    label: 'UI / Motion',
  },
  {
    title: 'AI & small experiments',
    description:
      'CoucouPet is an experiment with animated companions, AI conversations, and a little personality on the desktop. I enjoy exploring how software can feel more personal.',
    label: 'CoucouPet / macOS',
  },
];

export default function About() {
  const { t, locale } = useLanguage();
  return (
    <>
      <section className="about-page-hero section-wrap" aria-labelledby="about-title">
        <Reveal>
          <span className="section-kicker">{t('About me')} · Xushnudbek Raimov</span>
        </Reveal>
        <div className="about-hero-grid">
          <Reveal>
            <h1 id="about-title">
              {t('Behind')}
              <br />
              <span>{t('the projects.')}</span>
            </h1>
            <p className="about-lead">{t('A developer, always learning.')}</p>
            <Link className="text-link" href={`${localePath(locale)}#Work`}>
              {t('Back to work')}
            </Link>
          </Reveal>
          <Reveal className="about-portrait" delay={0.08}>
            <Image src="/images/hero/image 2 (1).svg" alt="" width={480} height={480} priority />
            <span>Xushnudbek Raimov</span>
          </Reveal>
        </div>
      </section>
      <section className="about-approach section-wrap" aria-labelledby="approach-title">
        <Reveal>
          <h2 id="approach-title">{t('How I work')}</h2>
        </Reveal>
        <Reveal>
          <p>
            {t(
              'I like understanding how the whole product works: what people see, how data moves, and what happens behind each action. That curiosity has taken my work from frontend interfaces to backend services and mobile apps.',
            )}
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('View my background on LinkedIn')}
          </a>
        </Reveal>
      </section>
      <section className="about-interests section-wrap" aria-labelledby="interests-title">
        <Reveal className="section-heading">
          <h2 id="interests-title">{t('Things I explore')}</h2>
          <p>{t('Small experiments, real curiosity.')}</p>
        </Reveal>
        <div className="interest-list">
          {interests.map((interest) => (
            <Reveal className="interest-row" key={interest.title}>
              <h3>{t(interest.title)}</h3>
              <p>{t(interest.description)}</p>
              <span>{interest.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <Experience standalone />
      <StartProject />
    </>
  );
}
