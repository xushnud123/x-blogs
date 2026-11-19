import { recentExperience, earlierExperience } from '@/utils/portfolio';
import { Reveal } from '../motion/motion';

export default function Experience() {
  return (
    <section
      id="Experience"
      className="experience-section section-wrap"
      aria-labelledby="experience-title"
    >
      <Reveal className="about-intro">
        <span className="section-kicker">A bit about me</span>
        <h2 id="experience-title">
          Curious by nature.
          <br />
          <span>A builder by practice.</span>
        </h2>
        <p>
          I’m Xushnudbek. I started with interfaces and kept following the questions behind them.
          Today, my work connects web, backend, and mobile — from the services that power EV
          charging to the small details that make an app feel right.
        </p>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about my background
        </a>
      </Reveal>
      <div className="experience-list">
        <Reveal className="experience-label">Recent contributions · 2026</Reveal>
        {recentExperience.map((item) => (
          <Reveal key={item.name} className="experience-row">
            <h3>{item.name}</h3>
            <div>
              <h4>{item.area}</h4>
              <p>{item.description}</p>
            </div>
          </Reveal>
        ))}
        <Reveal className="experience-label earlier-label">Earlier experience</Reveal>
        {earlierExperience.map((item) => (
          <Reveal key={item.name} className="experience-row compact">
            <h3>{item.name}</h3>
            <div>
              <h4>{item.role}</h4>
              <p>{item.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
