import React from 'react';
import './homepage.styles.css';
import { Link } from 'react-router-dom';
import Windowbox from '../../images/windowbox.jpg';
import AnnualBed from '../../images/annualFlowers.jpg';

const HomePage = () => {

    return (
    <div className ='homepage'>
        <article className='homepage-container'>
        <Link className='contact-button-container' to='/contact-us'><button className='contact-button'>Contact Us</button></Link>
            <h2>Welcome to Alyssa's Garden</h2>
            <p className='vip-info'>Woman owned and operated environmentally friendly landscaping</p>
            <img className='image-display'alt ='succulents in a windowbox'src= { Windowbox }></img>
            <p className='open-p'>
                We are a family-owned and operated gardening and landscaping business. We focus on the smaller details of your yard that make it 
                extra special. Our specialties include annual and perennial flower bed installation and maintenance, container planting and care, 
                weeding, hand pruning, and other small, detail-oriented gardening tasks.
            </p>
            <h3>Are you tired of...</h3>
            <ul>
                <li>Loud equipment</li>
                <li>Big crews rushing in and out</li>
                <li>Your needs not being heard</li>
                <li>Details, like weeds, not being taken care of</li>
            </ul>
            <p>
                Do you want to try and make your carbon footprint smaller?
            </p>
            <p>
                Do you have a garden area that needs some extra TLC?
            </p>
            <p>
                Then Alyssa’s Garden is the right fit for you.  All of our equipment is electric and 
                significantly quieter than gas powered lawn equipment. Crews are very small and take 
                the time to listen to customers so we can best serve them. We notice the details in 
                your garden like weeds and plants that need attention. Gardening is our passion, 
                especially perennials and annuals.
            </p>
            <p>
                We specialize in landscape maintenance for smaller yards, perennial and annual 
                installation and care, as well as gardening in general.
            </p>
            <img className='image-display'alt ='small flower bed with pansies and dianthus'src= { AnnualBed }></img>
            <Link className='contact-button-container' to='/contact-us'><button className='contact-button'>Contact Us</button></Link>
        </article>
    </div>
)};

export default HomePage;