import React from 'react';
import '../styles/technologies.css';

import bootstrap from '../img/bootstrap.png';
import css from '../img/css.png';
import flask from '../img/flask-icon.jpg';
import html from '../img/html.png';
import javascript from '../img/javascript.webp';
import jwt from '../img/jwt.webp';
import python from '../img/python.webp';
import react from '../img/react.png';
import sql from '../img/sql.png';
import angular from '../img/angular.jpg';
import django from '../img/django.jpg';
import fastapi from '../img/fastapi.png';
import typescript from '../img/typescript.png';

const Technologies = ({ theme }) => {

  return (
    <div id="technologies" className={`container-fluid technologies-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h2>Technologies</h2>
      <div className="technologies-wheel">
      </div>
    </div>
  );
};

export default Technologies;
