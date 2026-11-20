'use client';

import { useLanguage } from '@/app/_components/language-provider';

import Link from 'next/link';
import { localePath } from '@/utils/site';
import { recentExperience, earlierExperience } from '@/utils/portfolio';
import { Reveal } from '../motion/motion';

export default function Experience({ standalone = false }: { standalone?: boolean }) {
  const { t, locale } = useLanguage();
  return (
    <section
      id="Experience"
      className="experience-section section-wrap"
      aria-labelledby="experience-title"
    >
      <Reveal className="about-intro">
        <span className="section-kicker">{t(standalone ? 'My path' : 'A bit about me')}</span>
        <h2 id="experience-title">
          {t('Curious by nature.')}
          <br />
          <span>{t('A builder by practice.')}</span>
        </h2>
        <p>
          {t(
            'I’m Xushnudbek. I started with interfaces and kept following the questions behind them. Today, my work connects web, backend, and mobile — from the services that power EV charging to the small details that make an app feel right.',
          )}
        </p>
        {!standalone && (
          <Link className="text-link" href={localePath(locale, '/about')}>
            {t('More about me')}
          </Link>
        )}
      </Reveal>
      <div className="experience-list">
        <Reveal className="experience-label">{t('Recent contributions · 2026')}</Reveal>
        {recentExperience.map((item) => (
          <Reveal key={item.name} className="experience-row">
            <h3>{item.name}</h3>
            <div>
              <h4>{t(item.area)}</h4>
              <p>{t(item.description)}</p>
            </div>
          </Reveal>
        ))}
        <Reveal className="experience-label earlier-label">{t('Earlier experience')}</Reveal>
        {earlierExperience.map((item) => (
          <Reveal key={item.name} className="experience-row compact">
            <h3>{item.name}</h3>
            <div>
              <h4>{t(item.role)}</h4>
              <p>{t(item.period)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
