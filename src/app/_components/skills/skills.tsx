'use client';

import { useLanguage } from '@/app/_components/language-provider';

import { skillGroups } from '@/utils/portfolio';
import { Reveal } from '../motion/motion';

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="Skills" className="skills-section section-wrap" aria-labelledby="skills-title">
      <Reveal className="section-heading">
        <h2 id="skills-title">
          {t('Many tools.')}
          <br />
          <span>{t('One whole product.')}</span>
        </h2>
        <p>
          {t('From the first interaction to the service behind it.')}
          <br />
          {t('The technologies I work with.')}
        </p>
      </Reveal>
      <div className="skills-list">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.04} className="skill-row">
            <h3>{t(group.name)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
