import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import portfolioData from '../data/portfolio.json';
import useReveal from '../hooks/useReveal';

const ContactPage = () => {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { email: personalEmail, linkedin, github } = portfolioData.personal;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const templateParams = {
      nombre: formData.name,
      correo: formData.email,
      mensaje: formData.message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('Hubo un error al enviar el mensaje.');
      });
  };

  return (
    <section id="contacto" ref={revealRef} className="section">
      <div className="section-header reveal" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ margin: '0 auto 1.5rem' }}>Hablemos</div>
        <h1>Contacto</h1>
        <p style={{ maxWidth: '480px', margin: '0 auto', fontSize: '1.1rem' }}>
          ¿Tienes un proyecto en mente? Me encantaría escucharte.
        </p>
      </div>

      <div className="contact-wrapper reveal">
        <div className="card-shell">
          <div className="card-core" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-accent"
                disabled={status === 'Enviando...'}
                style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                {status === 'Enviando...' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spinSlow 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <span className="btn-icon" style={{ background: 'rgba(0,0,0,0.1)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </>
                )}
              </button>

              {status && status !== 'Enviando...' && (
                <p className={status.includes('éxito') ? 'status-success' : 'status-error'} style={{ margin: 0 }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact links */}
        <div className="contact-info reveal" style={{ justifyContent: 'center' }}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
