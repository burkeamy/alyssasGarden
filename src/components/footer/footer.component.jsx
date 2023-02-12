import React from 'react';
import './footer.styles.css'
import Instagram from '../../images/instagramLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <p>	&#169; 2023 Alyssa's Garden, LLC</p>
        <div>
            <p>Follow us on social media</p>
            <Link className='social-links' to='https://www.instagram.com/alyssas_gardennc/'><img className='social-icon'alt ='link to instagram'src= { Instagram }></img></Link>
            
        </div>
        <div className='footer-menu'>
            <Link className='footer-option' to='/'>home |</Link>
            <Link className='footer-option' to='/services'> services |</Link>
            <Link className='footer-option' to='/portfolio'> portfolio |</Link>
            <Link className='footer-option' to='/about-us'> about us |</Link>
            <Link className='footer-option' to='/blog'> blog |</Link>
            <Link className='footer-option' to='/contact-us'> contact</Link>
        </div>
    </footer>
);
export default Footer;