import React from 'react';
import portfolioData from '../data/portfolio.json';

const Education = () => {
  return (
    <section className="fade-in-up stagger-4" style={{ padding: '4rem 0' }}>
      <h2 style={{ marginTop: 0 }}>Educación</h2>
      <div className="flex-col gap-6" style={{ display: 'flex' }}>
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="double-bezel-shell">
            <div className="double-bezel-core" style={{ padding: '2rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{edu.degree}</h3>
                <span className="tag gray" style={{ margin: 0 }}>{edu.dates}</span>
              </div>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-primary)' }}>{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
