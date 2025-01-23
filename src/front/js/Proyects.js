import React, { useEffect, useRef, useState } from 'react';
import '../styles/proyects.css';
import UrbanTreasures from '../img/UrbanTreasures.png';
import DenisBets from '../img/DenisBets.png';
import Portfolio from '../img/portfolio.png';
import ElRinconcito from '../img/ElRinconcito.png';

import bootstrap from '../img/bootstrap.png';
import css from '../img/css.png';
import flask from '../img/flask-icon.png';
import html from '../img/html.png';
import javascript from '../img/javascript.webp';
import jwt from '../img/jwt.webp';
import python from '../img/python.webp';
import react from '../img/react.png';
import sql from '../img/sql.png';

import { FaPlay, FaGithub } from 'react-icons/fa';

const Proyects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const proyectsRef = useRef(null);

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
        <div className="proyects-component" ref={proyectsRef}>
            <div className={`projects-grid ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div className="project">
                    <img src={UrbanTreasures} className="img-proyects" alt="Urban Treasures" />
                    <h3 className='h3-proyects'>Urban Treasures</h3>
                    <p className='p-proyects'>Plataforma web interactiva donde los usuarios pueden registrarse para esconder o descubrir "tesoros urbanos".</p>
                    <p className='p-proyects'>Funcionalidades como sistema de puntuación, rankings, perfil de usuario, entre otras.</p>
                    <div className="project-buttons">
                        <a href="https://res.cloudinary.com/dxzhssh9m/video/upload/v1715946078/Compartir_pantalla_-_2024-05-17_13_39_52_ixmpsg.mp4" target="_blank" rel="noopener noreferrer" className="button play-button">
                            <FaPlay size={24} />
                        </a>
                        <a href="https://github.com/denis9diaz/Urban_Treasures" target="_blank" rel="noopener noreferrer" className="button code-button">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <div className="technologies">
                        <img src={react} alt="react" className="tech-icon" />
                        <img src={python} alt="python" className="tech-icon" />
                        <img src={javascript} alt="javascript" className="tech-icon" />
                        <img src={html} alt="html" className="tech-icon" />
                        <img src={css} alt="css" className="tech-icon" />
                        <img src={sql} alt="sql" className="tech-icon" />
                        <img src={jwt} alt="jwt" className="tech-icon" />
                        <img src={flask} alt="flask" className="tech-icon" />
                        <img src={bootstrap} alt="bootstrap" className="tech-icon" />
                    </div>
                </div>

                <div className="project">
                    <img src={DenisBets} className="img-proyects" alt="DenisBets" />
                    <h3 className='h3-proyects'>DenisBets</h3>
                    <p className='p-proyects'>Plataforma personal donde se ofrecen servicios de asesoramiento de pronósticos deportivos.</p>
                    <p className='p-proyects'>Diseñada para ayudarte a optimizar tus apuestas deportivas mediante estadísticas.</p>
                    <div className="project-buttons">
                        <a href="https://res.cloudinary.com/dxzhssh9m/video/upload/v1729007870/DenisBets720_opneva.mp4" target="_blank" rel="noopener noreferrer" className="button play-button">
                            <FaPlay size={24} />
                        </a>
                        <a href="https://github.com/denis9diaz/DenisBets_web" target="_blank" rel="noopener noreferrer" className="button code-button">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <div className="technologies">
                        <img src={react} alt="react" className="tech-icon" />
                        <img src={python} alt="python" className="tech-icon" />
                        <img src={javascript} alt="javascript" className="tech-icon" />
                        <img src={html} alt="html" className="tech-icon" />
                        <img src={css} alt="css" className="tech-icon" />
                        <img src={flask} alt="flask" className="tech-icon" />
                        <img src={bootstrap} alt="bootstrap" className="tech-icon" />
                    </div>
                </div>

                <div className="project">
                    <img src={Portfolio} className="img-proyects" alt="Portfolio" />
                    <h3 className='h3-proyects'>Portfolio</h3>
                    <p className='p-proyects'>Explora mis proyectos más recientes, que destacan mis habilidades en desarrollo web y diseño.</p>
                    <p className='p-proyects'>También puedes acceder a mi GitHub, LinkedIn y mi currículum.</p>
                    <div className="project-buttons">
                        <a href="https://denis9diaz.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="button play-button">
                            <FaPlay size={24} />
                        </a>
                        <a href="https://github.com/denis9diaz/portfolio" target="_blank" rel="noopener noreferrer" className="button code-button">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <div className="technologies">
                        <img src={react} alt="react" className="tech-icon" />
                        <img src={python} alt="python" className="tech-icon" />
                        <img src={javascript} alt="javascript" className="tech-icon" />
                        <img src={html} alt="html" className="tech-icon" />
                        <img src={css} alt="css" className="tech-icon" />
                        <img src={flask} alt="flask" className="tech-icon" />
                        <img src={bootstrap} alt="bootstrap" className="tech-icon" />
                    </div>
                </div>

                <div className="project">
                    <img src={ElRinconcito} className="img-proyects" alt="El Rinconcito" />
                    <h3 className='h3-proyects'>El Rinconcito</h3>
                    <p className='p-proyects'>Diseño completo de página web personalizada para el restaurante Madrileño "El Rinconcito"</p>
                    <p className='p-proyects'>Información acerca del restaurante y funcionalidades como crear ruta desde tu ubicación y reservar una mesa.</p>
                    <div className="project-buttons">
                        <a href="https://res.cloudinary.com/dxzhssh9m/video/upload/v1729710170/Compartir_pantalla_-_2024-10-23_20_58_03_yv4fbk.mp4" target="_blank" rel="noopener noreferrer" className="button play-button">
                            <FaPlay size={24} />
                        </a>
                        <a href="https://github.com/denis9diaz/El_Rinconcito" target="_blank" rel="noopener noreferrer" className="button code-button">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <div className="technologies">
                        <img src={react} alt="react" className="tech-icon" />
                        <img src={python} alt="python" className="tech-icon" />
                        <img src={javascript} alt="javascript" className="tech-icon" />
                        <img src={html} alt="html" className="tech-icon" />
                        <img src={css} alt="css" className="tech-icon" />
                        <img src={sql} alt="sql" className="tech-icon" />
                        <img src={flask} alt="flask" className="tech-icon" />
                        <img src={bootstrap} alt="bootstrap" className="tech-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyects;