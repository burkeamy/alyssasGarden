import React from 'react';
import './blogPage.styles.css';
import { Link } from 'react-router-dom';
import LawnMower from '../../images/kobaltMower.jpg';



const Blog = () => (
    <div className ='blog'>
        <article className='blog-container '>
            <h2>Alyssa's Garden Blog</h2>
            <h3>Revolutionizing Lawn Care</h3>
            <h4>The Benefits and Convenience of Electric Lawn Equipment plus tips on choosing your own </h4>
            <p>Feb 2023</p>
            <div className='blogPost-container'>
                <div>
                    <img className='thumbnail'alt ='40 volkt kobalt battery powered lawn mower'src= { LawnMower }></img>
                </div>
                <div>
                <p>
                    If you have been paying attention to your local hardware store, you might have noticed the 
                    increasing number of electric and battery-powered lawn care equipment available. Maybe you have 
                    been considering purchasing something to use at your house, but you are unsure whether it is 
                    right for you. I will walk you through some of the pros and cons I have experienced with my 
                    electric equipment. Then I will give you a few pointers to allow you to make an informed purchase.
                </p>
                </div>
            </div>
            <Link className='blog-option' to ='/electric-equipment'>More on choosing electric lawn care equipment</Link>
        </article>
    </div>
);

export default Blog;