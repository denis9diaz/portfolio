import React from 'react'
import '../styles/technologies.css';

const Technologies = ({ theme }) => {
  return (
    <div className={`container-fluid technologies-component ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        Technologies
    </div>
  )
}

export default Technologies
