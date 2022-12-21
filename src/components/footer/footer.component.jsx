import React from 'react';
import './footer.styles.css'
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <p>	&#169; 2023 Alyssa's Garden, LLC</p>
        <div className='footer-menu'>
            <Link className='footer-option' to='/'>home |</Link>
            <Link className='footer-option' to='/portfolio'> portfolio |</Link>
            <Link className='footer-option' to='/about-us'> about us |</Link>
            <Link className='footer-option' to='/contact-us'> contact</Link>
        </div>
    </footer>
);

export default Footer;