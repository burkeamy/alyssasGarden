import React from 'react';
import './top-intro.styles.css';
/*import { Link } from 'react-router-dom';*/
import MenuIcon from '../menuIcon/menuIcon.component';
import Icon from '../Icon/icon.component';


const TopIntro = () => {

    return (
        <div className = 'top-intro'>
            <Icon />
            <h1>Alyssa's Garden, LLC</h1>
            <MenuIcon />
            <div className='tag-line-area'>
                <p className="tag-line">Don't sweat the small stuff, that's our job</p>
                <p className="tag-line" >Detailed garden specalist</p>
            </div>
        </div>
    )
};

export default TopIntro;