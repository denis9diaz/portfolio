import React from 'react'
import '../styles/about.css';

const About = ({ theme }) => {
  return (
    <div id="about" className={`container-fluid about-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <h2>About</h2>
    </div>
  )
}

export default About
