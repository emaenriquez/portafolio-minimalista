import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Educación & Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';

  // Scroll spy: track which section is in view
  useEffect(() => {
    if (!isLandingPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isLandingPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const handleNavClick = useCallback(
    (e, href) => {
      if (!isLandingPage) {
        // We're on ProjectDetail or other page — navigate back to landing + hash
        e.preventDefault();
        navigate('/' + href);
      }
      // If on landing page, default anchor behavior handles the scroll
      setIsOpen(false);
      document.body.style.overflow = '';
    },
    [isLandingPage, navigate]
  );

  return (
    <>
      <nav className="navbar">
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          EE<span className="navbar-logo-dot"></span>
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={isLandingPage && activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="navbar-cta navbar-cta-desktop"
          onClick={(e) => handleNavClick(e, '#contacto')}
        >
          Hablemos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

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
          <a
            key={item.href}
            href={item.href}
            className={isLandingPage && activeSection === item.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
