import { FC } from 'react';
import Main from './_components/main/main';

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="relative z-10 block">
      <Main />
    </div>
  );
};

export default Page;
