import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
            <p className='copyright'>© {currentYear} Denis Díaz Romero. Todos los derechos reservados.</p>
        </div>
    );
}

export default Footer;
