'use client';

import { site } from '@/utils/site';
import { useLanguage } from '../language-provider';
import { Reveal } from '../motion/motion';
export default function StartProject() {
  const { t } = useLanguage();
  return (
    <section id="Contact" className="contact-section section-wrap" aria-labelledby="contact-title">
      <Reveal>
        <span className="section-kicker">{t('A new role. A new idea. A good conversation.')}</span>
        <h2 id="contact-title">
          {t('Let’s make')}
          <br />
          <span>{t('something')}</span> <i aria-hidden>✳</i>
          <br />
          {t('real.')}
        </h2>
        <div className="contact-bottom">
          <a className="contact-phone" href={`tel:${site.phone}`}>
            <span>{t('Call me')}</span>
            <strong>{site.phoneDisplay}</strong>
          </a>
          <a
            className="pill-button solid"
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Say hello on Telegram')}
          </a>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
