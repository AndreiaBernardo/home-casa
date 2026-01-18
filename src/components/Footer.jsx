import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <div className="container">
        <p className="mb-0">Feito por Andreia</p>
        <div className="mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
