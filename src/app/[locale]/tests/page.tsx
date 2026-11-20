import { FC } from 'react';
import Main from './_components/main/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animation preview | xushnud.dev',
  robots: { index: false, follow: false },
  alternates: { canonical: null, languages: {} },
};

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="relative z-10 block">
      <Main />
    </div>
  );
};

export default Page;
