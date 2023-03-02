import React from 'react';
import './blogPage.styles.css';
import { Link } from 'react-router-dom';
import Redbud from '../../images/redbudTreeWeb.jpg'

const EnvironmentallyFriendly = () => {
    return (
      <div class= 'blogPostsContainer'>
          <div classname="side-space"></div>
            <div classname="main-blog-area">
                <h2>Growing Green</h2>
                <h3>My Perspective on Environmentally Friendly Landscaping </h3>
                <p>March 2023</p>
                <img className='bigger-image'alt ='native redbud tree in full bloom'src= { Redbud }></img>
                <p>
                    Environmentally friendly landscaping can be interpreted differently by everyone. I just wanted 
                    to take a moment and explain what it means to me. I have been working in the landscaping 
                    industry for over a decade in addition to my decade of work in a park. These experiences give 
                    me a unique perspective on this. I will break it down into sections. Each section is no more or 
                    less important than any other section. It is simply easier to describe pieces of the puzzle and 
                    not the puzzle as a whole. The goal is to do what you can when you are able.
                </p>
                <h4>Electric equipment</h4>  
                <p>
                    Electric equipment releases fewer carbon emissions into the atmosphere. This helps with the reduction 
                    of greenhouse gasses, one of the main contributors to climate change. From a user’s standpoint, they 
                    are lighter, quieter, and easier to operate. I have a blog post on electric lawn care equipment. Check 
                    it out if you want to go a little deeper into this topic.
                </p> 
                <h4>Organic or natural fertilizers</h4>     
                <p>
                    Organic or natural fertilizers like compost and blood meal are easier to make and release nutrients that 
                    are easier for a plant to use. They also encourage natural soil inhabitants to live in an environment. 
                    Healthy soil means healthy plants.
                </p>
                <p>
                    The key to using any type of fertilizer is to not over-fertilize and check the weather before applying. 
                    Any nitrogen not absorbed by plants could wash off with rainwater. This adds to excess nitrogen in the water, 
                    a cause of algae blooms.
                </p>
                <h4>Native plants</h4>
                <p>
                    Native plants are often the host for many insects. Some of these insects are a key source of nutrition for many 
                    bird species. A healthy insect population means there is a healthy bird population. A well-known example of this 
                    is the monarch butterfly. It only lays eggs on milkweed plants. There are numerous species of insects that only 
                    lay their eggs on one type or group of plants. If we don’t add these plants to our landscape, these insects will 
                    not be able to reproduce.
                </p>
                <p>
                    Generally, native plants are easier to grow. Once established, they should need very little water and fertilizer. Native 
                    plants have already adapted to your environment and shouldn’t need much extra care from you. I could easily write a blog 
                    post on native plants alone, and I probably will in the future.
                </p>
                <p>
                    You may also want to consider plants that are grown locally. These plants will not need to be shipped as far and will already 
                    be adjusted to your climate. Imagine how stressful it would be for a small tree grown in the pacific northwest to be planted 
                    in the deep south, even if it is native.
                </p>
                <h4>Limit the use of chemicals</h4>
                <p>
                    Chemicals can linger in the soil after they are applied. This can affect the critters living in the soil, and, as I mentioned, 
                    healthy soil is an important part of a healthy environment. Many chemicals are not selective. If you are trying to get rid of 
                    mosquitoes by spraying an insecticide, you might be inadvertently killing butterflies and beneficial insects. On top of that, 
                    if a bird eats an insect that was sprayed with a chemical, now that chemical is in the bird as well.
                </p>
                <h4>Other things to consider</h4>
                <p>
                    There are other things to consider when installing a landscape. One thing to think about is water conservation. 
                    A good landscape design will require little to no additional water once the plants are established. This will not 
                    only lower your water bill but will also help during drought situations. Also, consider using sustainable products 
                    for your patio, walkways, and retaining walls. Some hardscape products impact the environment more than others. If 
                    this is important to you, I recommend doing some additional research. As a plant person, I am not familiar with 
                    the different types of stone and other patio products.
                </p>
                <h4>Important takeaway</h4>
                <p>
                    The important thing is to not get overwhelmed. Start with one thing. Consider a native plant next time you are 
                    plant shopping. When the time comes, replace that gas-powered lawn mower with an electric one. Look into organic 
                    fertilizer and natural ways to control pests. Think locally. Little things do make a difference.
                </p>
            </div>
        <div classname="side-space"></div>
        <Link className='blog-option' to ='/blog'>Want to read more blog posts?</Link>
    </div>
  )
}

export default EnvironmentallyFriendly