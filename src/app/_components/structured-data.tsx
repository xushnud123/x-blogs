'use client';

import { structuredData } from '@/utils/structured-data';
import { useLanguage } from './language-provider';

export default function StructuredData({ path }: { path: string }) {
  const { locale } = useLanguage();
  return (
    <script
      id="page-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData(locale, path)).replace(/</g, '\\u003c'),
      }}
    />
  );
}
