import React from 'react';
import './top-intro.styles.css';
import { Link } from 'react-router-dom';
import MenuIcon from '../menuIcon/menuIcon.component';
import Icon from '../Icon/icon.component';


const TopIntro = () => {

    return (
        <div className = 'top-intro'>
            <div className='spacer'></div>
            <section className='heading-section'>
                <Link className='icon-link' to='/'><Icon /></Link>
                <h1>Alyssa's Garden</h1>
                <div className='tag-line-area'>
                    <p className="tag-line">Don't sweat the small stuff, that's our job</p>
                    <p className="tag-line" >Detailed garden specalist</p>
                </div>
            </section>
            <MenuIcon />
        </div>
    )
};

export default TopIntro;