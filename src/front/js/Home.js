import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Welcome from './Welcome'; 
import Proyects from './Proyects';
import Footer from './Footer';
import { FaMoon, FaSun } from 'react-icons/fa';

const Home = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`super-home ${theme}`}>
            <button className="theme-toggle-button" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            <Welcome />
            <Proyects />
            <Footer />
        </div>
    );
};

export default Home;
