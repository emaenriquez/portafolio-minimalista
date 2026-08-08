import React from 'react';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const AboutPage = () => {
  const revealRef = useReveal();
  const { name, location, email, linkedin, github } = portfolioData.personal;

  return (
    <div ref={revealRef} className="section">
      <div className="section-header reveal">
        <div className="eyebrow">Conóceme</div>
        <h1>Sobre Mí</h1>
      </div>

      <div className="about-grid">
        <div className="reveal">
          <div className="card-shell">
            <div className="card-core" style={{ padding: '2.5rem' }}>
              <p className="about-text" style={{ margin: 0 }}>
                {portfolioData.about}
              </p>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card-shell">
            <div className="card-core about-info-item">
              <div className="about-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a0a" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>Ubicación</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{location}</div>
              </div>
            </div>
          </div>

          <div className="card-shell">
            <div className="card-core about-info-item">
              <div className="about-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a0a" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>Email</div>
                <a href={`mailto:${email}`} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{email}</a>
              </div>
            </div>
          </div>

          <div className="card-shell">
            <div className="card-core about-info-item">
              <div className="about-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a0a" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>LinkedIn</div>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  /in/emaenriquez
                </a>
              </div>
            </div>
          </div>

          <div className="card-shell">
            <div className="card-core about-info-item">
              <div className="about-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a0a" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>GitHub</div>
                <a href={github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  /emaenriquez
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
