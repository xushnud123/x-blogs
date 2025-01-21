import { FC } from 'react';
import Button from '../button/button';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="relative z-[1] mx-auto w-full max-w-[1016px]">
      <div className="flex flex-col items-center justify-between gap-11 px-5 py-6 sm:flex-row">
        <p className="font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 transition-all hover:text-tt-2">
          X-Blogs &copy; Raimov Xushnudbek 2024
        </p>
        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <Button
            intent="text"
            child="Linkedin"
            href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
            target="_blank"
            className="px-2 py-0 font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 transition-all hover:text-tt-2"
          />
          <Button
            intent="text"
            child="Mail"
            href="mailto:12xushnudbek34@gmail.com"
            target="_blank"
            className="cursor-pointer px-2 py-0 font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 transition-all hover:text-tt-2"
          />
          <Button
            intent="text"
            child="GitHub"
            href="https://github.com/xushnud123"
            target="_blank"
            className="px-2 py-0 font-satoshi text-[12px] font-medium leading-[14px] text-tt-4 transition-all hover:text-tt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
