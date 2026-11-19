import { skillGroups } from '@/utils/portfolio';
import { Reveal } from '../motion/motion';

export default function Skills() {
  return (
    <section id="Skills" className="skills-section section-wrap" aria-labelledby="skills-title">
      <Reveal className="section-heading">
        <h2 id="skills-title">
          Many tools.
          <br />
          <span>One whole product.</span>
        </h2>
        <p>
          From the first interaction to the service behind it.
          <br />
          The technologies I work with.
        </p>
      </Reveal>
      <div className="skills-list">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.04} className="skill-row">
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
