import React from 'react';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const ExperiencePage = () => {
  const revealRef = useReveal();

  return (
    <section id="experiencia" ref={revealRef} className="section">
      <div className="section-header reveal">
        <div className="eyebrow">Trayectoria Profesional</div>
        <h1>Experiencia</h1>
        <p style={{ maxWidth: '520px', fontSize: '1.1rem' }}>
          Mi recorrido profesional en el desarrollo de software, construyendo soluciones digitales de impacto.
        </p>
      </div>

      <div className="timeline reveal-stagger">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="timeline-item reveal">
            <div className="card-shell">
              <div className="card-core card-accent-stripe" style={{ paddingLeft: '2.5rem' }}>
                <div className="timeline-header">
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{exp.role}</h3>
                  <span className="tag tag-yellow">{exp.dates}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
