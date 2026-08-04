import React from 'react';
import portfolioData from '../data/portfolio.json';

const Header = () => {
  const { name, title, location, avatar, email, linkedin, github } = portfolioData.personal;

  return (
    <header className="flex-col gap-6 fade-in-up stagger-1" style={{ marginBottom: '8rem' }}>
      <div className="flex justify-between items-center" style={{ flexWrap: 'wrap-reverse', gap: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>{name}</h1>
          <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.25rem', }}>{title}</p>

          <div className="flex gap-4 mt-8" style={{ flexWrap: 'wrap' }}>
            {email && (
              <a href={`mailto:${email}`} className="btn">
                Contactar
                <span className="btn-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.75rem 1.2rem' }}>
                LinkedIn
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.75rem 1.2rem' }}>
                GitHub
              </a>
            )}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-12px', background: 'var(--color-bg-subtle)', borderRadius: '50%', zIndex: -1 }}></div>
          <img
            src={avatar}
            alt={name}
            style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{location}</span>
      </div>
    </header>
  );
};

export default Header;
