'use client';

import { useLanguage } from '@/app/_components/language-provider';

import { useState } from 'react';
import { IconBrandGithub, IconBrandGitlab, IconPlus } from '@tabler/icons-react';
import type { Project } from '@/utils/portfolio';
import ProjectArt from './project-art';

export default function Content({ project }: { project: Project }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`project-card project-${project.id}`}>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <p className="project-category">{t(project.category)}</p>
            <h3>{project.name}</h3>
          </div>
          <button
            type="button"
            className="project-expand"
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
            aria-label={`${t(expanded ? 'Hide' : 'Explore')} ${project.name}`}
            onClick={() => setExpanded(!expanded)}
          >
            <IconPlus size={24} aria-hidden />
          </button>
        </div>
        <p className="project-description">{t(project.description)}</p>
        <div className="project-meta">
          <div className="source-labels">
            {project.sources.map((source) => (
              <span key={source}>
                {source === 'GitHub' ? (
                  <IconBrandGithub size={16} aria-hidden />
                ) : (
                  <IconBrandGitlab size={16} aria-hidden />
                )}
                {source}
              </span>
            ))}
          </div>
          <span>{t(project.access)}</span>
        </div>
        <div
          className="project-details"
          data-open={expanded}
          id={`details-${project.id}`}
          inert={!expanded ? true : undefined}
        >
          <div>
            <div className="project-details-inner">
              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
              <ul className="technology-tags" aria-label={`${project.name} ${t('technologies')}`}>
                {project.stack.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
              {project.href && (
                <a
                  className="pill-button small"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(project.linkLabel ?? 'Visit website')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <ProjectArt id={project.id} />
    </article>
  );
}
