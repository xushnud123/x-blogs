'use client';

import { useLanguage } from '@/app/_components/language-provider';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/utils/portfolio';
import Content from './content';
import { Reveal, usePageMotion, ease } from '../motion/motion';

const filters = ['All projects', 'GitHub', 'GitLab'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All projects');
  const { paused } = usePageMotion();
  const { t, locale } = useLanguage();
  const visible = projects.filter(
    (project) => filter === 'All projects' || project.sources.includes(filter),
  );
  const countLabel =
    locale === 'ru'
      ? (
          { one: 'проект', few: 'проекта', many: 'проектов', other: 'проекта' } as Record<
            string,
            string
          >
        )[new Intl.PluralRules('ru').select(visible.length)]
      : t('projects');
  return (
    <section id="Work" className="work-section section-wrap" aria-labelledby="work-title">
      <Reveal className="section-heading">
        <h2 id="work-title">
          {t('Selected')} <span>{t('work.')}</span>
        </h2>
        <p>
          {t('A few things I’ve helped bring to life.')}
          <br />
          {t('Updated November 2026.')}
        </p>
      </Reveal>
      <div className="project-filters" role="group" aria-label={t('Filter projects by source')}>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {filter === item && (
              <motion.span
                className="filter-highlight"
                layoutId={paused ? undefined : 'filter-indicator'}
                transition={{ duration: 0.3, ease }}
              />
            )}
            <span>{t(item)}</span>
            <span className="filter-count">
              {item === 'All projects'
                ? projects.length
                : projects.filter((p) => p.sources.includes(item)).length}
            </span>
          </button>
        ))}
        <p className="results-count" role="status">
          {visible.length} {countLabel}
        </p>
      </div>
      <div className="project-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <motion.div
              layout={!paused}
              className="project-slot"
              key={project.id}
              initial={{ opacity: 0, y: paused ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: paused ? 1 : 0.98 }}
              transition={{ duration: paused ? 0 : 0.4, ease }}
            >
              <Reveal delay={Math.min((index % 2) * 0.08, 0.08)}>
                <Content project={project} />
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
