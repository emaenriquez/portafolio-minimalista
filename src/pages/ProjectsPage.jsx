import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const ProjectsPage = () => {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="section">
      <div className="section-header reveal">
        <div className="eyebrow">Mi Trabajo</div>
        <h1>Proyectos</h1>
        <p style={{ maxWidth: '520px', fontSize: '1.1rem' }}>
          Una selección de proyectos donde apliqué mis habilidades de desarrollo full stack.
        </p>
      </div>

      <div className="projects-grid reveal-stagger">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="card-shell reveal">
            <div className="card-core" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
              {/* Project image preview */}
              {project.mockups && project.mockups.length > 0 && (
                <Link to={`/project/${project.slug}`}>
                  <img
                    src={project.mockups[0]}
                    alt={project.name}
                    className="project-card-image"
                  />
                </Link>
              )}

              <div className="project-card-content">
                {project.role && (
                  <span className="tag tag-yellow" style={{ marginBottom: '0.75rem' }}>
                    {project.role}
                  </span>
                )}

                <h3 className="project-card-title">
                  <Link to={`/project/${project.slug}`}>{project.name}</Link>
                </h3>

                <p className="project-card-desc">{project.description}</p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link to={`/project/${project.slug}`} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.7rem 1.5rem' }}>
                    Ver detalles
                    <span className="btn-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.7rem 1.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
