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
      </div>
    </div>
  );
};

export default Layout;
