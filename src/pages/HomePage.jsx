import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const HomePage = () => {
  const revealRef = useReveal();
  const { name, title, avatar, email, linkedin, github } = portfolioData.personal;

  // Split name for styling
  const nameParts = name.split(' ');

  return (
    <div ref={revealRef}>
      <section className="hero">
        <div className="hero-text reveal">
          <div className="eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Full Stack Developer
          </div>

          <h1 className="hero-title">
            {nameParts[0]}
            <span className="hero-title-accent">{nameParts.slice(1).join(' ')}</span>
          </h1>

          <p className="hero-subtitle">{title}</p>
        </div>

        <div className="hero-image-wrapper reveal">
          <div className="hero-image-shell">
            <img src={avatar} alt={name} className="hero-image" />
            <div className="hero-image-decoration">
              <div className="hero-image-dots">
                <span className="hero-image-dot" style={{ borderColor: '#fff' }}></span>
                <span className="hero-image-dot" style={{ borderColor: '#fff' }}></span>
              </div>
            </div>

            {/* Spinning badge */}
            <div className="hero-badge">
              <div className="hero-badge-circle">
                <svg viewBox="0 0 100 100" width="100" height="100" style={{ position: 'absolute', inset: 0, animation: 'spinSlow 12s linear infinite' }}>
                  <defs>
                    <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fill="white" fontSize="9" fontWeight="700" letterSpacing="3">
                    <textPath href="#circlePath">
                      FULL STACK • DEVELOPER • 2025 •
                    </textPath>
                  </text>
                </svg>
                <span className="hero-badge-icon">↗</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-buttons reveal">
          {email && (
            <a href={`mailto:${email}`} className="btn btn-primary">
              Contactar
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
