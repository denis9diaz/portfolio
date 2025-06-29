import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/individualproyect.css";
import IndividualProyect from "./IndividualProyect";

import UrbanTreasures from "../img/UrbanTreasures.png";
import DenisBets from "../img/DenisBets.png";
import BetTracker from "../img/BetTracker.png";
import Golytick from "../img/Golytick.png";

import bootstrap from "../img/bootstrap.png";
import css from "../img/css.png";
import flask from "../img/flask.png";
import html from "../img/html.png";
import javascript from "../img/javascript.webp";
import jwt from "../img/jwt.webp";
import python from "../img/python.webp";
import react from "../img/react.png";
import sql from "../img/sql.png";
import typescript from "../img/typescript.png";
import django from "../img/django.png";
import astro from "../img/astro.png";
import tailwind from "../img/tailwind.png";

const Proyects = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const proyectsRef = useRef(null);

  const projectsData = [
    {
      image: Golytick,
      title: "Golytick",
      descriptions: [
        "Diseño completo de página web donde se muestran las probabilidades de cada partido basadas en métodos estadísticos verificados.",
        "Sistema de registro de usuarios y cálculo automático de estadísticas.",
      ],
      videoLink: "https://res.cloudinary.com/dxzhssh9m/video/upload/v1751226372/demo_kmu5n8.mp4",
      codeLink: "https://www.golytick.com/",
      technologies: [
        { src: astro, alt: "astro" },
        { src: react, alt: "react" },
        { src: typescript, alt: "typescript" },
        { src: tailwind, alt: "tailwind" },
        { src: python, alt: "python" },
        { src: django, alt: "django" },
        { src: jwt, alt: "jwt" },
        { src: sql, alt: "sql" },
      ],
    },
    {
      image: BetTracker,
      title: "BetTracker",
      descriptions: [
        "Diseño completo de página web personalizada para registar todos tus análisis deportivos y estadísticas.",
        "Sistema de registro de usuarios, estadísticas y análisis deportivos.",
      ],
      videoLink: "https://analisis-virid.vercel.app/",
      codeLink: "https://analisis-virid.vercel.app/",
      technologies: [
        { src: astro, alt: "astro" },
        { src: react, alt: "react" },
        { src: typescript, alt: "typescript" },
        { src: tailwind, alt: "tailwind" },
        { src: python, alt: "python" },
        { src: django, alt: "django" },
        { src: jwt, alt: "jwt" },
        { src: sql, alt: "sql" },
      ],
    },
    {
      image: UrbanTreasures,
      title: "Urban Treasures",
      descriptions: [
        'Plataforma web interactiva donde los usuarios pueden registrarse para esconder o descubrir "tesoros urbanos".',
        "Funcionalidades como sistema de puntuación, rankings, perfil de usuario, entre otras.",
      ],
      videoLink:
        "https://res.cloudinary.com/dxzhssh9m/video/upload/v1715946078/Compartir_pantalla_-_2024-05-17_13_39_52_ixmpsg.mp4",
      codeLink: "https://github.com/denis9diaz/Urban_Treasures",
      technologies: [
        { src: react, alt: "react" },
        { src: python, alt: "python" },
        { src: javascript, alt: "javascript" },
        { src: html, alt: "html" },
        { src: css, alt: "css" },
        { src: sql, alt: "sql" },
        { src: jwt, alt: "jwt" },
        { src: flask, alt: "flask" },
        { src: bootstrap, alt: "bootstrap" },
      ],
    },
    {
      image: DenisBets,
      title: "DenisBets",
      descriptions: [
        "Plataforma personal donde se ofrecen servicios de asesoramiento de pronósticos deportivos.",
        "Diseñada para ayudarte a optimizar tus apuestas deportivas mediante estadísticas.",
      ],
      videoLink:
        "https://res.cloudinary.com/dxzhssh9m/video/upload/v1729007870/DenisBets720_opneva.mp4",
      codeLink: "https://github.com/denis9diaz/DenisBets_web",
      technologies: [
        { src: react, alt: "react" },
        { src: python, alt: "python" },
        { src: javascript, alt: "javascript" },
        { src: html, alt: "html" },
        { src: css, alt: "css" },
        { src: flask, alt: "flask" },
        { src: bootstrap, alt: "bootstrap" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (proyectsRef.current) {
      observer.observe(proyectsRef.current);
    }

    return () => {
      if (proyectsRef.current) {
        observer.unobserve(proyectsRef.current);
      }
    };
  }, []);

  return (
    <div id="proyects" className={`proyects-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} ref={proyectsRef}>
      <div className="projects-header">
        <h2 className="projects-title">Proyectos Destacados</h2>
        <p className="projects-subtitle">
          Una selección de mis trabajos más recientes y significativos
        </p>
      </div>
      <div className={`projects-grid ${isVisible ? "fade-in" : "fade-out"}`}>
        {projectsData.map((project, index) => (
          <IndividualProyect key={index} {...project} index={index} />
        ))}
      </div>
      
      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element element-${i % 3}`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
