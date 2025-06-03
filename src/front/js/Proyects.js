import React, { useEffect, useRef, useState } from "react";
import "../styles/individualproyect.css";
import IndividualProyect from "./IndividualProyect";

import UrbanTreasures from "../img/UrbanTreasures.png";
import DenisBets from "../img/DenisBets.png";
import BetTracker from "../img/BetTracker.png";
import FutbolAnalytics from "../img/FutbolAnalytics.png";

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

const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const proyectsRef = useRef(null);

  const projectsData = [
    {
      image: BetTracker,
      title: "BetTracker",
      descriptions: [
        "Diseño completo de página web personalizada para registar todos tus análisis deportivos y estadísticas.",
        "Sistema de registro de usuarios, estadísticas y análisis deportivos.",
      ],
      videoLink: "https://analisis-virid.vercel.app/",
      codeLink: "https://github.com/denis9diaz/Analisis",
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
      image: FutbolAnalytics,
      title: "Fútbol Analytics",
      descriptions: [
        "Diseño completo de página web donde se muestran las probabilidades de cada partido basadas en métodos estadísticos verificados.",
        "Sistema de registro de usuarios y cálculo automático de estadísticas.",
      ],
      videoLink: "https://res.cloudinary.com/dxzhssh9m/video/upload/v1748975479/Compartir_pantalla_-_2025-06-03_20_26_14_xwili4.mp4",
      codeLink: "https://github.com/denis9diaz/Football_Analytics",
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
    <div id="proyects" className="proyects-component" ref={proyectsRef}>
      <div className={`projects-grid ${isVisible ? "fade-in" : "fade-out"}`}>
        {projectsData.map((project, index) => (
          <IndividualProyect key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
