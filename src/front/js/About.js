import React, { useState, useEffect, useRef } from 'react';
import '../styles/about.css';

const About = ({ theme }) => {
  const startDate = new Date(2023, 10, 1); // Noviembre 2023 (mes 10, porque los meses empiezan en 0)
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const diffInTime = currentDate - startDate;
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365); // Convierte el tiempo en años

    // Si ya pasó más de un año, mostramos "1+" y si no, mostramos "1+" igualmente (ajustado).
    setExperienceYears(Math.floor(diffInYears) >= 1 ? 1 : 0); // Asegura que no se muestre 2+ aún
  }, []);

  return (
    <div id="about" className={`container-fluid about-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h2 className="title-about">
        Sobre mí
      </h2>
      <div className="about-content">
        <p>
          Mi camino en la programación comenzó en 2023, cuando decidí dar el paso y aprender aquello que siempre me había apasionado. Me formé en el bootcamp de 4Geeks Academy, donde adquirí experiencia en <strong>JavaScript</strong>, <strong>React</strong>, <strong>Python</strong>, <strong>Flask</strong>, <strong>PostgreSQL</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>
        , entre otras tecnologías y frameworks. Desde entonces, he trabajado en diversos proyectos tanto personales como colectivos, aplicando mis conocimientos en escenarios reales.
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
          Actualmente, sigo programando cada día, explorando nuevas tecnologías y perfeccionando mis habilidades. Estoy siempre abierto a nuevos retos.
        </p>
      </div>
      <div className="experience-counter">
        <span className="experience-number">{experienceYears}+</span> años de experiencia aprendiendo y creando
      </div>
    </div>
  );
}

export default About;
