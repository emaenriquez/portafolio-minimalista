import React from 'react';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const tagColors = ['tag-blue', 'tag-green', 'tag-purple', 'tag-yellow'];

const SkillsPage = () => {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="section">
      {/* Education Section */}
      <div className="section-header reveal">
        <div className="eyebrow">Formación Académica</div>
        <h1>Educación</h1>
      </div>

      <div className="bento-grid reveal-stagger" style={{ marginBottom: '5rem' }}>
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="card-shell reveal">
            <div className="card-core">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.35rem' }}>{edu.degree}</h3>
                <span className="tag tag-gray">{edu.dates}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'var(--accent)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a0a" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  {edu.institution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="section-header reveal">
        <div className="eyebrow">Stack Tecnológico</div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Habilidades</h2>
      </div>

      <div className="skills-grid reveal-stagger">
        {portfolioData.skills.map((skillGroup, index) => {
          const colorClass = tagColors[index % tagColors.length];
          return (
            <div key={index} className="card-shell reveal">
              <div className="card-core">
                <h4 className="skill-category-title">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`tag ${colorClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
