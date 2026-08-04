import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [slug]);

  const project = portfolioData.projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="fade-in-up" style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'var(--color-text-muted)',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          background: '#f9fafb',
          border: '1px solid var(--color-border)'
        }}
      >
        <span>&larr;</span> Volver al inicio
      </Link>

      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <h1 style={{ margin: 0, border: 'none', padding: 0, fontSize: '3rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {project.name}
          </h1>
          {project.role && (
            <span style={{
              display: 'inline-block',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--color-primary)',
              background: '#f3f4f6',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              width: 'fit-content'
            }}>
              {project.role}
            </span>
          )}
        </div>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: 1.6,
          color: 'var(--color-text)',
          maxWidth: '600px',
          marginBottom: '2rem'
        }}>
          {project.fullDescription || project.description}
        </p>

        {(project.url || project.github) && (
          <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Visitar Sitio
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'white', color: '#111',
                  border: '1px solid var(--color-border)',
                  padding: '0.6rem 1.2rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Ver Código
              </a>
            )}
          </div>
        )}
      </header>

      {project.image && (
        <div style={{ marginBottom: '4rem' }}>
          <img
            src={project.image}
            alt={`Imagen principal de ${project.name}`}
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid var(--color-border)'
            }}
          />
        </div>
      )}

      {project.video && (
        <div style={{ marginBottom: '4rem' }}>
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg-subtle)'
            }}
          />
        </div>
      )}

      {project.mockups && project.mockups.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Galería</h3>
          {project.mockups.length === 1 ? (
            <img
              src={project.mockups[0]}
              alt={`Mockup 1 de ${project.name}`}
              style={{
                width: '100%',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              }}
            />
          ) : (
            <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', overflow: 'hidden', paddingBottom: '10px' }}>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(calc(-${currentImageIndex * 100}% - ${currentImageIndex * 10}px))`
                }}>
                  {project.mockups.map((mockup, i) => (
                    <img
                      key={i}
                      src={mockup}
                      alt={`Mockup ${i + 1} de ${project.name}`}
                      style={{
                        width: '100%',
                        flexShrink: 0,
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: '1px solid var(--color-border)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem', justifyContent: 'center' }}>
                {project.mockups.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      padding: 0,
                      border: '2px solid #9ca3af',
                      backgroundColor: currentImageIndex === i ? '#9ca3af' : 'transparent',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    aria-label={`Ir a la imagen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectDetail;
