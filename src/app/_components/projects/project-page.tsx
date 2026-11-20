'use client';

import Link from 'next/link';
import { projects, type Project } from '@/utils/portfolio';
import { projectSeo } from '@/utils/project-seo';
import { projectMedia } from '@/utils/project-media';
import { localePath } from '@/utils/site';
import { useLanguage } from '../language-provider';
import { Reveal } from '../motion/motion';
import ProjectArt from './project-art';

export default function ProjectPage({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  const index = projects.findIndex((item) => item.id === project.id);
  const related = [
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];
  const publicUrl = project.href ?? projectMedia[project.id].source;
  return (
    <article className={`project-page project-${project.id} section-wrap`}>
      <nav className="project-breadcrumb" aria-label={t('Breadcrumb')}>
        <Link href={localePath(locale)}>{t('Home')}</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">{project.name}</span>
      </nav>
      <header className="project-page-heading">
        <Reveal>
          <p className="section-kicker">{t(project.category)}</p>
        </Reveal>
        <Reveal>
          <h1>{project.name}</h1>
        </Reveal>
        <Reveal className="project-page-intro">
          <Link href={localePath(locale, '/about')}>{t('Project work by Xushnudbek Raimov')}</Link>
          <p>{t(project.description)}</p>
        </Reveal>
      </header>
      <section className="project-contribution" aria-labelledby="contribution-title">
        <Reveal>
          <h2 id="contribution-title">{t('My contribution')}</h2>
          <p>{t(projectSeo[project.id].contribution)}</p>
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{t(highlight)}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h2>{t('Technologies')}</h2>
          <ul className="technology-tags">
            {project.stack.map((tech) => (
              <li key={tech}>{t(tech)}</li>
            ))}
          </ul>
          {publicUrl && (
            <a className="text-link" href={publicUrl} target="_blank" rel="noopener noreferrer">
              {t(project.linkLabel ?? 'View on the App Store')}
            </a>
          )}
        </Reveal>
      </section>
      <section className="project-page-gallery" aria-labelledby="screens-title">
        <h2 id="screens-title">{t('Project screens')}</h2>
        <ProjectArt id={project.id} />
      </section>
      <section className="related-projects" aria-labelledby="related-title">
        <h2 id="related-title">{t('More projects')}</h2>
        <div>
          {related.map((item) => (
            <Link key={item.id} href={localePath(locale, `/projects/${item.id}`)}>
              <span>{t(item.category)}</span>
              <h3>{item.name}</h3>
              <p>{t(item.description)}</p>
            </Link>
          ))}
        </div>
      </section>
      <div className="project-page-bottom">
        <Link className="text-link" href={`${localePath(locale)}#Work`}>
          {t('Back to work')}
        </Link>
        <Link className="pill-button" href={`${localePath(locale)}#Contact`}>
          {t('Let’s talk')}
        </Link>
      </div>
    </article>
  );
}
