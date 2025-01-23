import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

const Navbar = ({ theme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#proyects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technologies">Tecnologías</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre mí</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
