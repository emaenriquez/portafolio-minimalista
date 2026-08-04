import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    setTimeout(() => {
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="fade-in-up stagger-5" style={{ padding: '4rem 0 8rem 0' }}>
      <div className="double-bezel-shell" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="double-bezel-core" style={{ padding: '3rem' }}>
          <h2 style={{ margin: '0 0 1rem 0', textAlign: 'center' }}>Hablemos</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>¿Tienes algún proyecto en mente?</p>
          
          <form onSubmit={handleSubmit} className="flex-col gap-6" style={{ display: 'flex' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Nombre</label>
              <input 
                type="text" id="name" name="name" 
                value={formData.name} onChange={handleChange} 
                className="form-input" required 
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
              <input 
                type="email" id="email" name="email" 
                value={formData.email} onChange={handleChange} 
                className="form-input" required 
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Mensaje</label>
              <textarea 
                id="message" name="message" 
                value={formData.message} onChange={handleChange} 
                className="form-textarea" rows="4" required 
              ></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={status === 'Enviando...'} style={{ marginTop: '1rem', width: '100%' }}>
              {status === 'Enviando...' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {status && status !== 'Enviando...' && (
              <p style={{ margin: 0, textAlign: 'center', color: '#346538', fontWeight: 600, padding: '1rem', background: 'var(--pastel-green-bg)', borderRadius: '8px' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
