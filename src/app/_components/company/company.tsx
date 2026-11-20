'use client';

import { useLanguage } from '@/app/_components/language-provider';

import { Reveal } from '../motion/motion';
export default function Company() {
  const { t } = useLanguage();
  return (
    <Reveal className="company-strip section-wrap">
      <p>
        {t('Some of the teams')}
        <br />
        {t('and products along the way.')}
      </p>
      <div>
        <span>TOK BOR</span>
        <span className="beon-word">beon.</span>
        <span>comfi</span>
      </div>
    </Reveal>
  );
}
