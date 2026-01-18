import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-light shadow-sm">
      <div className="container">
        <div className=" home-page text-center py-3 border-bottom mb-5 mt-3">
          <h1 className="h2">utenkHome</h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid ">
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMenu}
              aria-controls="navbarNav" 
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div 
              className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`}
              id="navbarNav"
            >
              <ul className="navbar-nav nav-pills">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" onClick={closeMenu}>Página Inicial</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sala" onClick={closeMenu}>Sala</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/quarto" onClick={closeMenu}>Quarto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cozinha" onClick={closeMenu}>Cozinha</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/banheiro" onClick={closeMenu}>Banheiro</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

