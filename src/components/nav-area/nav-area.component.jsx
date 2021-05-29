import React from 'react';
import './nav-area.styles.css';
import { Link } from 'react-router-dom';




const NavArea = () => {

    return (
        <div className = 'top-nav'>
            <nav className='options'>
                    <Link className='option' to='/'>home |</Link>
                    <Link className='option' to='/portfolio'> portfolio |</Link>
                    <Link className='option' to='/aboutus'> about us |</Link>
                    <Link className='option' to='/contact'> contact</Link>
            </nav>
        </div>
    )
};

export default NavArea;