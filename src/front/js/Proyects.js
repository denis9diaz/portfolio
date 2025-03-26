import React, { useEffect, useRef, useState } from 'react';
import '../styles/individualproyect.css';
import IndividualProyect from './IndividualProyect';

import UrbanTreasures from '../img/UrbanTreasures.png';
import DenisBets from '../img/DenisBets.png';
import BetIntel from '../img/BetIntel.png';
import ElRinconcito from '../img/ElRinconcito.png';

import bootstrap from '../img/bootstrap.png';
import css from '../img/css.png';
import flask from '../img/flask.png';
import html from '../img/html.png';
import javascript from '../img/javascript.webp';
import jwt from '../img/jwt.webp';
import python from '../img/python.webp';
import react from '../img/react.png';
import sql from '../img/sql.png';

const Proyects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const proyectsRef = useRef(null);

    const projectsData = [
        {
            image: UrbanTreasures,
            title: 'Urban Treasures',
            descriptions: [
                'Plataforma web interactiva donde los usuarios pueden registrarse para esconder o descubrir "tesoros urbanos".',
                'Funcionalidades como sistema de puntuación, rankings, perfil de usuario, entre otras.'
            ],
            videoLink: 'https://res.cloudinary.com/dxzhssh9m/video/upload/v1715946078/Compartir_pantalla_-_2024-05-17_13_39_52_ixmpsg.mp4',
            codeLink: 'https://github.com/denis9diaz/Urban_Treasures',
            technologies: [
                { src: react, alt: 'react' },
                { src: python, alt: 'python' },
                { src: javascript, alt: 'javascript' },
                { src: html, alt: 'html' },
                { src: css, alt: 'css' },
                { src: sql, alt: 'sql' },
                { src: jwt, alt: 'jwt' },
                { src: flask, alt: 'flask' },
                { src: bootstrap, alt: 'bootstrap' }
            ]
        },
        {
            image: DenisBets,
            title: 'DenisBets',
            descriptions: [
                'Plataforma personal donde se ofrecen servicios de asesoramiento de pronósticos deportivos.',
                'Diseñada para ayudarte a optimizar tus apuestas deportivas mediante estadísticas.'
            ],
            videoLink: 'https://res.cloudinary.com/dxzhssh9m/video/upload/v1729007870/DenisBets720_opneva.mp4',
            codeLink: 'https://github.com/denis9diaz/DenisBets_web',
            technologies: [
                { src: react, alt: 'react' },
                { src: python, alt: 'python' },
                { src: javascript, alt: 'javascript' },
                { src: html, alt: 'html' },
                { src: css, alt: 'css' },
                { src: flask, alt: 'flask' },
                { src: bootstrap, alt: 'bootstrap' }
            ]
        },
        {
            image: BetIntel,
            title: 'BetIntel',
            descriptions: [
                'Enfocado tanto para pronosticadores como para usuarios que quieran ver quienes son los pronosticadores mas rentables.',
                'También podrás seguirlos o contratar sus servicios.'
            ],
            videoLink: 'https://res.cloudinary.com/dxzhssh9m/video/upload/v1738247617/Compartir_pantalla_-_2025-01-30_15_31_55_oddiw4.mp4',
            codeLink: 'https://github.com/denis9diaz/BetIntel',
            technologies: [
                { src: react, alt: 'react' },
                { src: python, alt: 'python' },
                { src: javascript, alt: 'javascript' },
                { src: html, alt: 'html' },
                { src: css, alt: 'css' },
                { src: sql, alt: 'sql' },
                { src: jwt, alt: 'jwt' },
                { src: flask, alt: 'flask' },
                { src: bootstrap, alt: 'bootstrap' }
            ]
        },
        {
            image: ElRinconcito,
            title: 'El Rinconcito',
            descriptions: [
                'Diseño completo de página web personalizada para el restaurante Madrileño "El Rinconcito"',
                'Información acerca del restaurante y funcionalidades como crear ruta desde tu ubicación y reservar una mesa.'
            ],
            videoLink: 'https://res.cloudinary.com/dxzhssh9m/video/upload/v1729710170/Compartir_pantalla_-_2024-10-23_20_58_03_yv4fbk.mp4',
            codeLink: 'https://github.com/denis9diaz/El_Rinconcito',
            technologies: [
                { src: react, alt: 'react' },
                { src: python, alt: 'python' },
                { src: javascript, alt: 'javascript' },
                { src: html, alt: 'html' },
                { src: css, alt: 'css' },
                { src: sql, alt: 'sql' },
                { src: flask, alt: 'flask' },
                { src: bootstrap, alt: 'bootstrap' }
            ]
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

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
            <div className={`projects-grid ${isVisible ? 'fade-in' : 'fade-out'}`}>
                {projectsData.map((project, index) => (
                    <IndividualProyect key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Proyects;
