import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPlay, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const IndividualProyect = ({ image, title, descriptions, videoLink, codeLink, technologies, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = image;
    }, [image]);

    // Hook para detectar dispositivos móviles
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const containerVariants = {
        hidden: { 
            opacity: 0, 
            y: 50
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    const techVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1
            }
        }
    };

    const techItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    // Determinar si el codeLink es una web o un repositorio de GitHub
    const isWebLink = !codeLink.includes('github.com');

    return (
        <motion.div 
            ref={ref}
            className={`project ${isMobile ? 'mobile-project' : ''}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="project-image-container">
                {!imageLoaded && (
                    <div className="image-skeleton">
                        <div className="skeleton-animation"></div>
                    </div>
                )}
                <img 
                    src={image} 
                    className={`img-proyects ${imageLoaded ? 'loaded' : ''}`}
                    alt={title}
                />
            </div>

            <div className="project-content">
                <motion.h3 
                    className='h3-proyects'
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h3>
                
                <div className="descriptions-container">
                    {descriptions.map((desc, descIndex) => (
                        <motion.p 
                            key={descIndex} 
                            className='p-proyects'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + descIndex * 0.1 }}
                        >
                            {desc}
                        </motion.p>
                    ))}
                </div>

                <motion.div 
                    className="technologies"
                    variants={techVariants}
                    initial="hidden"
                    animate={isMobile ? (isInView ? "visible" : "hidden") : (isHovered ? "visible" : "hidden")}
                >
                    {technologies.map((tech, techIndex) => (
                        <motion.div
                            key={techIndex}
                            className="tech-icon-container"
                            variants={techItemVariants}
                        >
                            <img 
                                src={tech.src} 
                                alt={tech.alt} 
                                className="tech-icon"
                                title={tech.alt}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div 
                className="project-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <motion.a 
                    href={videoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button play-button"
                >
                    <FaPlay size={18} />
                    <span>Demo</span>
                </motion.a>
                <motion.a 
                    href={codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`button ${isWebLink ? 'web-button' : 'code-button'}`}
                >
                    {isWebLink ? <FaExternalLinkAlt size={18} /> : <FaGithub size={18} />}
                    <span>{isWebLink ? 'Web' : 'Código'}</span>
                </motion.a>
            </motion.div>

            <div className="project-number">
                {String(index + 1).padStart(2, '0')}
            </div>
        </motion.div>
    );
};

export default IndividualProyect;
