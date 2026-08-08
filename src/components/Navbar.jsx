import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/experience', label: 'Experiencia' },
  { to: '/skills', label: 'Educación & Skills' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/contact', label: 'Contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          EE<span className="navbar-logo-dot"></span>
        </NavLink>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="navbar-cta navbar-cta-desktop">
          Hablemos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NavLink>

        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={item.to === '/'}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
