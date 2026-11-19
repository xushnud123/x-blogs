import { Reveal } from '../motion/motion';
export default function StartProject() {
  return (
    <section id="Contact" className="contact-section section-wrap" aria-labelledby="contact-title">
      <Reveal>
        <span className="section-kicker">A new role. A new idea. A good conversation.</span>
        <h2 id="contact-title">
          Let’s make
          <br />
          <span>something</span> <i aria-hidden>✳</i>
          <br />
          real.
        </h2>
        <div className="contact-bottom">
          <a
            className="pill-button solid"
            href="https://t.me/XushnudbekRaimov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello on Telegram
          </a>
          <a className="contact-email" href="mailto:12xushnudbek34@gmail.com">
            12xushnudbek34@gmail.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
