import React from 'react'
import '../styles/about.css';

const About = ({ theme }) => {
  return (
    <div className={`container-fluid about-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        About
    </div>
  )
}

export default About
