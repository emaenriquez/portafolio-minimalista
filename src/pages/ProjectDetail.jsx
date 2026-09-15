import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const revealRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [slug]);

  const project = portfolioData.projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div ref={revealRef}>
      <article className="project-detail page-enter">
        <Link to="/#proyectos" className="project-detail-back reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </Link>

        <header className="reveal" style={{ marginBottom: '2.5rem' }}>
          <h1 className="project-detail-title">{project.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {project.role && (
              <span className="project-detail-role" style={{ marginBottom: 0 }}>{project.role}</span>
            )}
            {project.status && (
              <span className={`project-status-badge project-status-badge--${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            )}
          </div>

          {project.availabilityNotice && (
            <div className="project-availability-notice" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.06))',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>
                {project.availabilityNotice.replace('emaenriquez1985@gmail.com', '').replace('⚠️ ', '')}
                <a
                  href="mailto:emaenriquez1985@gmail.com"
                  style={{ color: '#f59e0b', fontWeight: 600, textDecoration: 'underline' }}
                >
                  emaenriquez1985@gmail.com
                </a>
              </span>
            </div>
          )}

          <p className="project-detail-desc">
            {project.fullDescription || project.description}
          </p>

          {project.techStack && (
            <div className="project-tech-stack reveal">
              <h3>Stack Tecnológico</h3>
              {Object.entries(project.techStack).map(([group, items]) => (
                <div key={group} className="project-tech-group">
                  <div className="project-tech-group-label">{group}</div>
                  <div className="project-tech-tags">
                    {items.map((tech) => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {(project.url || project.github) && (
            <div className="project-detail-links">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Visitar Sitio
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Ver Código
                </a>
              )}
            </div>
          )}
        </header>

        {project.video && (
          <div className="project-detail-media reveal">
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        )}

        {project.image && (
          <div className="project-detail-media reveal">
            <img
              src={project.image}
              alt={`Imagen principal de ${project.name}`}
            />
          </div>
        )}

        {project.mockups && project.mockups.length > 0 && (
          <div className="project-detail-gallery reveal">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Galería</h3>

            {project.mockups.length === 1 ? (
              <div className="card-shell">
                <img
                  src={project.mockups[0]}
                  alt={`Mockup 1 de ${project.name}`}
                  style={{
                    width: '100%',
                    borderRadius: 'calc(var(--card-radius) - 6px)',
                    display: 'block',
                  }}
                />
              </div>
            ) : (
              <>
                <div className="project-gallery-slider">
                  <div
                    className="project-gallery-track"
                    style={{
                      transform: `translateX(calc(-${currentImageIndex * 100}% - ${currentImageIndex * 10}px))`,
                    }}
                  >
                    {project.mockups.map((mockup, i) => (
                      <img
                        key={i}
                        src={mockup}
                        alt={`Mockup ${i + 1} de ${project.name}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="project-gallery-dots">
                  {project.mockups.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`project-gallery-dot ${currentImageIndex === i ? 'is-active' : ''}`}
                      aria-label={`Ir a la imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </article>
    </div>
  );
};

export default ProjectDetail;
