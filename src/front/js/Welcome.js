import React, { useEffect, useRef } from 'react';
import '../styles/welcome.css';
import mifoto from '../img/mifoto.png';
import { FaGithub, FaLinkedin, FaAddressCard, FaEnvelope } from 'react-icons/fa';

const Welcome = () => {
    const welcomeTextRef = useRef(null);
    const welcomeImageRef = useRef(null);
    const lineTopRef = useRef(null);
    const lineBottomRef = useRef(null);

    useEffect(() => {
        const textElement = welcomeTextRef.current;
        const imageElement = welcomeImageRef.current;
        const lineTopElement = lineTopRef.current;
        const lineBottomElement = lineBottomRef.current;

        setTimeout(() => {
            if (textElement && imageElement && lineTopElement && lineBottomElement) {
                textElement.classList.add('animate-text');
                imageElement.classList.add('animate-image');
                lineTopElement.classList.add('animate-line');
                lineBottomElement.classList.add('animate-line');
            }
        }, 300);
    }, []);

    return (
        <div className="container-fluid welcome-container">
            <div className="line-top" ref={lineTopRef}></div>
            <div className="row">
                <div className="col-md-6 welcome-text" ref={welcomeTextRef}>
                    <h1>Bienvenido!</h1>
                    <h4>
                        Soy <b>Denis Díaz</b>, desarrollador Full Stack en Madrid, España.
                    </h4>
                    <h4>Aquí podrás explorar algunos de mis proyectos más destacados. ¡Espero que te gusten!</h4>
                </div>
                <div className="col-md-6 welcome-image" ref={welcomeImageRef}>
                    <img src={mifoto} alt="Foto de Denis" />
                    <div className="social-icons">
                        <a href="https://github.com/denis9diaz" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/denis-diaz-romero-1b7055165/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                        <a href="https://drive.google.com/file/d/14cDUIdz_0quk7I3rRXKddDuhW6_hwlTR/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <FaAddressCard size={40} />
                        </a>
                    </div>
                    <a href="mailto:denis9diaz@hotmail.com" className="contact-button">
                        <FaEnvelope size={20} /> Contáctame
                    </a>
                </div>
            </div>
            <div className="line-bottom" ref={lineBottomRef}></div>
        </div>
    );
};

export default Welcome;
