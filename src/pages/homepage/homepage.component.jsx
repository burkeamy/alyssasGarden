import React from 'react';
import './homepage.styles.css';



const HomePage = () => (
    <div className ='homepage'>
        <article className='homepageContainer'>
            <h2>Welcome to Alyssa's Garden</h2>
            <p className='open-p'>
                We are a family-owned and operated gardening and landscaping business. We focus on the smaller details of your yard that make it 
                extra special. Our specialties include annual and perennial flower bed installation and maintenance, container planting and care, 
                weeding, hand pruning, and other small, detail-oriented gardening tasks.
            </p>
            <p>
                We are an environmentally friendly company. Currently, all equipment is battery-powered. When available, we apply organic chemicals 
                and fertilizers.
            </p>
            <p>
                In the future, we hope to offer mowing and other landscaping services. If you are interested, please let us know. If there is enough 
                interest, we can speed this process up.
            </p>
        </article>
    </div>
);

export default HomePage;