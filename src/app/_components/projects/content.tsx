'use client';

import { useState } from 'react';
import { IconBrandGithub, IconBrandGitlab, IconPlus } from '@tabler/icons-react';
import type { Project } from '@/utils/portfolio';
import ProjectArt from './project-art';

export default function Content({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`project-card project-${project.id}`}>
      <ProjectArt id={project.id} />
      <div className="project-info">
        <div className="project-heading">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <button
            type="button"
            className="project-expand"
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
            aria-label={`${expanded ? 'Hide' : 'Explore'} ${project.name}`}
            onClick={() => setExpanded(!expanded)}
          >
            <IconPlus size={24} aria-hidden />
          </button>
        </div>
        <p className="project-description">{project.description}</p>
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
          <span>{project.access}</span>
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="technology-tags" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.href && (
                <a
                  className="pill-button small"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
