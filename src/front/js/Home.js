import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.css';
import Welcome from './Welcome'; 
import Proyects from './Proyects';
import Footer from './Footer';
import Navbar from './Navbar';
import Technologies from './Technologies';
import About from './About';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
    const [theme, setTheme] = useState('light');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
        
        // Simular carga inicial
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Loading screen component
    const LoadingScreen = () => (
        <motion.div 
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="loading-content">
                <motion.img 
                    src={require('../img/logo.png')} 
                    alt="Logo"
                    className="loading-logo"
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1.5, repeat: Infinity }
                    }}
                    style={{ width: 80, height: 80, objectFit: 'contain' }}
                />
                <motion.h2 
                    className="loading-text"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Cargando Portfolio...
                </motion.h2>
            </div>
        </motion.div>
    );

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <AnimatePresence>
            <motion.div 
                className={`super-home ${theme}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Navbar theme={theme} onThemeToggle={toggleTheme} />

                {/* Main Content */}
                <div id="home">
                    <Welcome theme={theme} />
                </div>
                <Proyects theme={theme} />
                <Technologies theme={theme}/>
                <About theme={theme}/>
                <Footer theme={theme} />

                {/* Scroll to Top Button */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            className="scroll-to-top"
                            onClick={scrollToTop}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Scroll to top"
                        >
                            <FaArrowUp size={20} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default Home;
