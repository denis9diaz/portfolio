import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/about.css';

const About = ({ theme }) => {
  const startDate = new Date(2023, 10, 1);
  const [experienceYears, setExperienceYears] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    const currentDate = new Date();
    const diffInTime = currentDate - startDate;
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365);
    setExperienceYears(Math.floor(diffInYears) >= 1 ? 1 : 0);
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className={`about-section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <motion.div 
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="about-title">Sobre mí</h2>
          <p className="about-subtitle">
            Mi trayectoria como desarrollador full-stack
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="about-content-grid">
          {/* Story Card */}
          <motion.div className="about-card story-card" variants={itemVariants}>
            <div className="card-icon">
              <span>👨‍💻</span>
            </div>
            <h3>Mi Historia</h3>
            <p>
              Mi camino en la programación comenzó en 2023, cuando decidí dar el paso y aprender aquello que siempre me había llamado la atención. Me formé en el bootcamp de <strong>4Geeks Academy</strong>, donde aprendí tecnologías como <strong>JavaScript</strong>, <strong>React</strong>, <strong>Python</strong>, <strong>Flask</strong>, <strong>PostgreSQL</strong> y más.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div className="about-card experience-card" variants={itemVariants}>
            <div className="card-icon">
              <span>🚀</span>
            </div>
            <h3>Experiencia Profesional</h3>
            <p>
              Participé en un <strong>Training IT</strong> con <strong>Igrowker</strong>, trabajando en el backend de una aplicación para un cliente real en un equipo de más de 20 personas. Aprendí <strong>TypeScript</strong>, <strong>Angular</strong>, <strong>Django</strong>, <strong>Redis</strong> y <strong>FastAPI</strong>.
            </p>
          </motion.div>

          {/* Projects Card */}
          <motion.div className="about-card projects-card" variants={itemVariants}>
            <div className="card-icon">
              <span>💼</span>
            </div>
            <h3>Proyectos Personales</h3>
            <p>
              He desarrollado varios <strong>proyectos personales</strong> aplicados al análisis estadístico deportivo y la bolsa de valores, que actualmente utilizo como herramientas profesionales. Colaboro constantemente con otros desarrolladores en proyectos innovadores.
            </p>
          </motion.div>
        </div>

        {/* Skills & Stats */}
        <motion.div className="about-stats" variants={itemVariants}>
          <div className="stat-item">
            <motion.div 
              className="stat-number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {experienceYears}+
            </motion.div>
            <span className="stat-label">Años de Experiencia</span>
          </div>
          <div className="stat-item">
            <motion.div 
              className="stat-number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            >
              10+
            </motion.div>
            <span className="stat-label">Tecnologías Dominadas</span>
          </div>
          <div className="stat-item">
            <motion.div 
              className="stat-number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
            >
              4+
            </motion.div>
            <span className="stat-label">Proyectos Completados</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="about-cta" variants={itemVariants}>
          <p className="cta-text">
            Me considero una persona <strong>perseverante</strong>, <strong>perfeccionista</strong> y <strong>trabajadora</strong>, 
            con gran capacidad de comunicación y trabajo en equipo. Siempre estoy en busca de nuevos 
            aprendizajes y oportunidades para seguir evolucionando como desarrollador.
          </p>
          <div className="cta-highlight">
            <span className="highlight-icon">⚡</span>
            <span>Actualmente disponible para nuevos proyectos y colaboraciones</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
