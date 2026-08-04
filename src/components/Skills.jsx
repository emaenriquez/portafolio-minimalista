import React from 'react';
import portfolioData from '../data/portfolio.json';

const colorClasses = ['gray', 'blue', 'green', 'red'];

const Skills = () => {
  return (
    <section className="fade-in-up stagger-5" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginTop: 0 }}>Habilidades</h2>
      <div className="flex-col gap-8" style={{ display: 'flex' }}>
        {portfolioData.skills.map((skillGroup, index) => {
          const colorClass = colorClasses[index % colorClasses.length];
          return (
            <div key={index}>
              <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`tag ${colorClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
