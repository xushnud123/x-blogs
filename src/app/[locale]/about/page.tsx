import { notFound } from 'next/navigation';
import { isLocale } from '@/utils/site';
import { pageMetadata } from '@/utils/site-metadata';
import About from '@/app/_components/about/about';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, '/about');
}

export default function AboutPage() {
  return <About />;
}
