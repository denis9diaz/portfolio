import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = ({ theme }) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/denis9diaz',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/in/denis-diaz-romero',
            color: '#0077B5'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:denis9diaz@gmail.com',
            color: '#EA4335'
        }
    ];

    return (
        <footer className={`footer ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="footer-container">
                {/* Footer Content */}
                <div className="footer-content">
                    {/* Brand */}
                    <motion.div 
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <a className="navbar-brand" href="#home">
                            <span className="brand-text">Denis Díaz</span>
                            <span className="brand-subtitle">Full Stack Developer</span>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="footer-social"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="social-title">Conectemos</p>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: 0.4 + index * 0.1 
                                    }}
                                    viewport={{ once: true }}
                                    aria-label={link.name}
                                >
                                    <link.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Footer Bottom */}
                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="copyright">
                        © {currentYear}. Todos los derechos reservados.
                    </p>
                    <p className="made-with">
                        Hecho con <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="heart"
                        >
                            <FaHeart size={12} />
                        </motion.span> usando React & Framer Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
