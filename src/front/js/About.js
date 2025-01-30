import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const startDate = new Date(2023, 10, 1); // Noviembre 2023 (mes 10, porque los meses empiezan en 0)
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const diffInTime = currentDate - startDate;
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365); // Convierte el tiempo en años

    // Si ya pasó más de un año, mostramos "1+" y si no, mostramos "1+" igualmente (ajustado).
    setExperienceYears(Math.floor(diffInYears) >= 1 ? 1 : 0); // Asegura que no se muestre 2+ aún
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Activa la animación cuando el 30% de la sección sea visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className={`container-fluid about-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <motion.h2 
        className="title-about"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Sobre mí
      </motion.h2>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p>
          Mi camino en la programación comenzó en 2023, cuando decidí dar el paso y aprender aquello que siempre me había apasionado. Me formé en el bootcamp de 4Geeks Academy, donde adquirí experiencia en <strong>JavaScript, React, Python, Flask, PostgreSQL, HTML, CSS, Bootstrap</strong>, entre muchas otras tecnologías y frameworks. Desde entonces, he trabajado en diversos proyectos tanto personales como colectivos, aplicando mis conocimientos en escenarios reales.
        </p>
        <p>
          He desarrollado <strong>dos proyectos personales</strong> que actualmente utilizo como parte de mis fuentes de ingresos, aplicando análisis de datos en la bolsa de valores y el análisis estadístico en el ámbito deportivo para optimizar mis decisiones. Además, sigo trabajando en otros proyectos en paralelo y colaboro activamente con algunos compañeros del bootcamp en el desarrollo de uno de sus proyectos, lo que me ha permitido seguir ampliando mis conocimientos y experiencia en entornos colaborativos.
        </p>
        <p>
          Para seguir creciendo profesionalmente, participé en un <strong>Training IT</strong> con la empresa <strong>Igrowker</strong>, donde trabajé en el backend de una aplicación desarrollada para un cliente real. Formé parte de un equipo de más de 20 personas en un entorno que simulaba la dinámica de una empresa tecnológica, adquiriendo experiencia en metodologías ágiles, trabajo en equipo y comunicación efectiva. Durante este entrenamiento, aprendí desde cero tecnologías como <strong>TypeScript, Angular y Django</strong>. Una vez finalizado el programa, decidí continuar mejorando la aplicación con un grupo reducido de compañeros, encargándome tanto del backend como del frontend. Durante esta etapa, incorporamos <strong>Redis y FastAPI</strong> para mejorar el rendimiento del sistema.
        </p>
        <p>
          Me considero una persona <strong>perseverante, perfeccionista y trabajadora</strong>, con gran capacidad de comunicación y trabajo en equipo. Siempre estoy en busca de nuevos aprendizajes y oportunidades para seguir evolucionando como desarrollador.
        </p>
        <p className="about-highlight">
          Actualmente, sigo programando cada día, explorando nuevas tecnologías y perfeccionando mis habilidades. Me apasiona crear soluciones eficientes y funcionales, y estoy siempre abierto a nuevos retos.
        </p>
      </motion.div>
      <motion.div 
        className="experience-counter"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <span className="experience-number">{experienceYears}+</span> años de experiencia aprendiendo y creando
      </motion.div>
    </div>
  );
}

export default About;
