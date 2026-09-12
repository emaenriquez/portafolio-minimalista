import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="frame-wrapper">
      <div className="frame-screen">
        <Navbar />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
