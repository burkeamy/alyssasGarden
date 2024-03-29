import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './menuIcon.styles.css';

const MenuIcon = () => {

    const [ menuHide, setMenuHide ] = useState(false);

    const changeView = () => {
        setMenuHide(!menuHide)
        if (menuHide === true) {
       setMenuHide('mobile-options')
        } 
        if (menuHide === false) {
            setMenuHide('mobile-hidden')
        }
    }

    return (
        <div className='mobile-container'>
            <button className="container" aria-label="mobile menu"onClick={changeView}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>
            <nav className={ menuHide }>
                <Link className='mobile-option' to='/'onClick={changeView}>home</Link>
                <Link className='mobile-option' to='/portfolio'onClick={changeView}> portfolio</Link>
                <Link className='mobile-option' to='/services'onClick={changeView}> services</Link>
                <Link className='mobile-option' to='/about-us'onClick={changeView}> about</Link>
                <Link className='mobile-option' to='/blog'onClick={changeView}> blog</Link>
                <Link className='mobile-option' to='/contact-us'onClick={changeView}> contact</Link>
            </nav>  
        </div>
    )
};

export default MenuIcon;