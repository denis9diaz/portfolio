import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import { FaHome, FaProjectDiagram, FaCogs, FaUser, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['home', 'proyects', 'technologies', 'about'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', href: '#home', label: 'Inicio', icon: FaHome },
    { id: 'proyects', href: '#proyects', label: 'Proyectos', icon: FaProjectDiagram },
    { id: 'technologies', href: '#technologies', label: 'Tecnologías', icon: FaCogs },
    { id: 'about', href: '#about', label: 'Sobre mí', icon: FaUser }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img
            src={require('../img/logo.png')}
            alt="Logo"
            style={{
              height: '72px',
              width: '72px',
              objectFit: 'contain',
              filter: theme === 'light' ? 'brightness(0) saturate(100%) invert(12%) sepia(60%) saturate(600%) hue-rotate(220deg)' : 'none',
              transition: 'filter 0.3s'
            }}
          />
        </a>
        {/* Botón de theme toggle SOLO visible en móvil (junto al hamburguesa) */}
        <button
          className="theme-toggle-navbar ms-2 d-lg-none"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          style={{ marginRight: '0.75rem' }}
        >
          {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="nav-item">
                  <a 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`} 
                    href={item.href}
                  >
                    <IconComponent className="nav-icon" />
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              );
            })}
            {/* Botón de theme toggle SOLO visible en escritorio (a la derecha de Sobre mí) */}
            <li className="nav-item d-none d-lg-flex">
              <button
                className="theme-toggle-navbar ms-3"
                onClick={onThemeToggle}
                aria-label="Toggle theme"
                style={{ marginLeft: '1.5rem' }}
              >
                {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
