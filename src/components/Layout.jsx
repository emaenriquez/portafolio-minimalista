import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="frame-wrapper">
      <div className="frame-screen">
        <Navbar />
        <main className="page-content page-enter" key={location.pathname}>
          {children}
        </main>
        <footer className="footer">
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Emanuel Enriquez. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
