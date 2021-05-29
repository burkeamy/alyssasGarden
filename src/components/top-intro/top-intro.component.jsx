import React from 'react';
import './top-intro.styles.css';
import { Link } from 'react-router-dom';
import MenuIcon from '../menuIcon/menuIcon.component';
import SvgComponent from '../Icon/icon.component';


const TopIntro = () => {

    return (
        <div className = 'top-intro'>
            <SvgComponent />
            <h1>Alyssa's Garden, LLC</h1>
            <MenuIcon />
        </div>
    )
};

export default TopIntro;