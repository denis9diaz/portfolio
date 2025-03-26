import React from 'react';
import { FaPlay, FaGithub } from 'react-icons/fa';

const IndividualProyect = ({ image, title, descriptions, videoLink, codeLink, technologies }) => {
    return (
        <div className="project">
            <img src={image} className="img-proyects" alt={title} />
            <h3 className='h3-proyects'>{title}</h3>
            {descriptions.map((desc, index) => (
                <p key={index} className='p-proyects'>{desc}</p>
            ))}
            <div className="project-buttons">
                <a href={videoLink} target="_blank" rel="noopener noreferrer" className="button play-button">
                    <FaPlay size={24} />
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="button code-button">
                    <FaGithub size={24} />
                </a>
            </div>
            <div className="technologies">
                {technologies.map((tech, index) => (
                    <img key={index} src={tech.src} alt={tech.alt} className="tech-icon" />
                ))}
            </div>
        </div>
    );
};

export default IndividualProyect;
