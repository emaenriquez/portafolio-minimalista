import React from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  return (
    <section className="fade-in-up stagger-2" style={{ padding: '4rem 0' }}>
      <div style={{ maxWidth: '700px' }}>
        <h2 style={{ marginTop: 0 }}>Sobre mí</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>{portfolioData.about}</p>
      </div>
    </section>
  );
};

export default About;
