import React from 'react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  return (
    <section className="fade-in-up stagger-3" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginTop: 0 }}>Experiencia laboral</h2>
      <div className="flex-col gap-8" style={{ display: 'flex' }}>
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="double-bezel-shell">
            <div className="double-bezel-core" style={{ padding: '2rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{exp.role}</h3>
                <span className="tag gray" style={{ margin: 0 }}>{exp.dates}</span>
              </div>
              <p style={{ margin: '0 0 1.5rem 0', fontWeight: 600, color: 'var(--color-primary)' }}>{exp.company}</p>
              <p style={{ margin: 0, fontSize: '1rem' }}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
