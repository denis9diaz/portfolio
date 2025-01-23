import React from 'react';
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
];

const Technologies = ({ theme }) => {
  return (
    <div id="technologies" className={`container-fluid technologies-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h2 className='title-tech'>Tecnologías</h2>
      <div className="technologies-columns">
        <div className="technologies-section">
          <h4 className='title-end'>Backend</h4>
          <div className="technologies-grid">
            {backendTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img src={tech.img} alt={tech.name} className="technology-img" />
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="technologies-section">
          <h4 className='title-end'>Frontend</h4>
          <div className="technologies-grid">
            {frontendTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img src={tech.img} alt={tech.name} className="technology-img" />
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
