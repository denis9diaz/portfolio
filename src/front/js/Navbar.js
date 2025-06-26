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
          <span className="brand-text">Denis Díaz</span>
          <span className="brand-subtitle">Full Stack Developer</span>
        </a>

        <div className="navbar-controls">
          {/* Theme Toggle Button */}
          <button
            className="theme-toggle-navbar"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
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
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
