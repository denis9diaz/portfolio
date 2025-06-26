import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/technologies.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import css from '../img/css.png';
import flask from '../img/flask.png';
import html from '../img/html.png';
import javascript from '../img/javascript.webp';
import python from '../img/python.webp';
import react from '../img/react.png';
import sql from '../img/sql.png';
import angular from '../img/angular.png';
import django from '../img/django.png';
import fastapi from '../img/fastapi.png';
import typescript from '../img/typescript.png';
import astro from '../img/astro.png';

const backendTechnologies = [
  { name: 'Python', img: python },
  { name: 'Flask', img: flask },
  { name: 'Django', img: django },
  { name: 'PostgreSQL', img: sql },
  { name: 'FastAPI', img: fastapi },
];

const frontendTechnologies = [
  { name: 'JavaScript', img: javascript },
  { name: 'React', img: react },
  { name: 'Angular', img: angular },
  { name: 'TypeScript', img: typescript },
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'Astro', img: astro },
];

// Variantes de animación para el contenedor
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Variantes de animación para cada tecnología
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Componente para cada tecnología individual
const TechnologyCard = ({ tech, index }) => {
  return (
    <motion.div
      className="tech-card"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="tech-image-container">
        <img 
          src={tech.img} 
          alt={tech.name} 
          className="tech-image"
        />
        <div className="tech-overlay">
          <span className="tech-name">{tech.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Componente para cada sección (Frontend/Backend)
const TechnologySection = ({ title, technologies, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.1,
    margin: "-50px 0px"
  });

  return (
    <motion.div 
      ref={ref}
      className="tech-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h3 
        className="tech-section-title"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.div 
        className="tech-grid"
        variants={containerVariants}
      >
        {technologies.map((tech, techIndex) => (
          <TechnologyCard 
            key={tech.name} 
            tech={tech} 
            index={techIndex}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Technologies = ({ theme }) => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { 
    once: true, 
    threshold: 0.5,
    margin: "-50px 0px"
  });

  return (
    <section id="technologies" className={`technologies-section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="technologies-container">
        {/* Título principal */}
        <motion.div 
          ref={titleRef}
          className="technologies-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="technologies-title">Tecnologías</h2>
          <p className="technologies-subtitle">
            Las herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </motion.div>

        {/* Secciones de tecnologías */}
        <div className="technologies-content">
          <TechnologySection 
            title="Frontend" 
            technologies={frontendTechnologies}
            index={0}
          />
          <TechnologySection 
            title="Backend" 
            technologies={backendTechnologies}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
