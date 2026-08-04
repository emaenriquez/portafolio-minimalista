import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const ProjectsPreview = () => {
  return (
    <section className="fade-in-up stagger-5" style={{ padding: '2rem 0' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Proyectos</h2>
      </div>

      <div className="bento-grid">
        {portfolioData.projects.slice(0, 4).map((project, index) => (
          <div key={index} className="double-bezel-shell" style={{ display: 'flex' }}>
            <div className="double-bezel-core" style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>
                  <Link to={`/project/${project.slug}`} style={{ color: 'var(--color-primary)' }}>
                    {project.name}
                  </Link>
                </h3>
              </div>

              <p style={{ flex: 1, marginBottom: '2rem' }}>{project.description}</p>

              <div>
                <Link to={`/project/${project.slug}`} className="btn">
                  Ver detalles
                  <span className="btn-icon-wrapper">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
