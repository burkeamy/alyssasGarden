import React from 'react';
import './blogPage.styles.css';
import { Link } from 'react-router-dom';
import LawnMower from '../../images/kobaltMower.jpg';
import Redbud from '../../images/redbudTreeWeb.jpg';



const Blog = () => (
    <div className ='blog'>
        <h2>Alyssa's Garden Blog</h2>
        <article className='blog-container '>
            <h3>Growing Green  </h3>
            <h4>My Perspective on Environmentally Friendly Landscaping</h4>
            <p>March 2023</p>
            <div className='blogPost-container'>
                <div>
                    <img className='thumbnail'alt ='native redbud tree full of purple blooms'src= { Redbud }></img>
                </div>
                <div>
                <p>
                    Environmentally friendly landscaping can be interpreted differently by everyone. I just wanted to take a 
                    moment and explain what it means to me. I have been working in the landscaping industry for over a decade 
                    in addition to my decade of work in a park. These experiences give me a unique perspective on this. 
                </p>
                </div>
            </div>
            <Link className='blog-option' to ='/environmentally-friendly'>More on environmentally friendly landscaping</Link>
        </article>
        <article className='blog-container '>
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