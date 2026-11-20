import { notFound } from 'next/navigation';
import { projects } from '@/utils/portfolio';
import { isLocale } from '@/utils/site';
import { pageMetadata } from '@/utils/site-metadata';
import ProjectPage from '@/app/_components/projects/project-page';
import StructuredData from '@/app/_components/structured-data';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !projects.some((project) => project.id === slug)) notFound();
  return pageMetadata(locale, `/projects/${slug}`);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!isLocale(locale) || !project) notFound();
  return (
    <>
      <StructuredData path={`/projects/${slug}`} />
      <ProjectPage project={project} />
    </>
  );
}
