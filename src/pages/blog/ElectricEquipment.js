import React from 'react';
import './blogPage.styles.css';
import { Link } from 'react-router-dom';
import LawnMower from '../../images/kobaltMower.jpg'

const ElectricEquipment = () => {
    return (
      <div class= 'blogPostsContainer'>
          <div classname="side-space"></div>
            <div classname="main-blog-area">
                <h2>Revolutionizing Lawn Care</h2>
                    <h3>The Benefits and Convenience of Electric Lawn Equipment plus tips on choosing your own </h3>
                        <p>Feb 2023</p>
                        <img className='bigger-image'alt ='40 volkt kobalt battery powered lawn mower'src= { LawnMower }></img>
                            <p>
                                If you have been paying attention to your local hardware store, you might have noticed the 
                                increasing number of electric and battery-powered lawn care equipment available. Maybe you have 
                                been considering purchasing something to use at your house, but you are unsure whether it is 
                                right for you. I will walk you through some of the pros and cons I have experienced with my 
                                electric equipment. Then I will give you a few pointers to allow you to make an informed purchase.
                            </p>
                            <h4>Pros to Electric</h4>
                            <p>
                                Most people think of the environmental benefits of going electric first, and yes, I did consider these 
                                when I chose to use primarily electric equipment in my landscaping business. Electric lawn care equipment 
                                has zero emissions which helps combat climate change. A battery-powered backpack blower is significantly 
                                quieter than its gas-powered counterpart. Silence is difficult to find during leaf season, and your neighbors 
                                will appreciate you more. Batteries get a gold star because I don’t  have to worry about gas jugs tipping over 
                                in the back of my truck. 
                            </p>
                            <p>
                                These reasons are great, but my body loves these other great reasons to choose 
                                battery-powered equipment over gas-powered equipment. I don’t have to pull start anything. My equipment works 
                                with the push of a button, something my elbows and shoulders appreciate. My body also loves that electric equipment 
                                is lighter. Did I mention that they are quieter? My ears love this. Battery-powered lawn care equipment requires 
                                less maintenance, and no oil changes or spark plugs. With gas prices going up, you will appreciate that you can 
                                skip the trip to the gas station for lawn mower gas.
                            </p>
                            <h4>Cons to Electric</h4>
                            <p>
                                Nothing is perfect. There are downfalls to battery-powered equipment too. Most that I can think of involve the batteries 
                                themselves. I am limited to how long I can use my equipment based on how much battery charge I have available. The initial 
                                purchase of batteries can be high, and they don’t  last forever. Over time, batteries cannot hold as much energy and can run 
                                for shorter lengths of time. Cost can also be a barrier to the electric landscaping world. I already mentioned how expensive 
                                batteries are. I have already invested well over a thousand just in batteries. New commercial-grade equipment is even more 
                                costly, probably because of the larger batteries. Homeowner models, like the ones from those hardware store shelves, offer a 
                                more affordable option. These models are great for small-scale operations or individuals. My first battery-operated lawn mower 
                                is over five years old and still works great.
                            </p>
                            <p>
                                Something else to think about is the weather. No one wants to work in the rain, but sometimes it happens. Electric lawn care equipment 
                                displays a warning sticker that reminds you electricity and water don’t  mix well. I do what I can in wet weather, but I really don’t 
                                want to test this out.
                            </p>
                            <h4>Which Equipment is Right for You</h4>
                            <p>
                                You decided you want to try electric, now what? Pick something that is within your budget. Look at some reviews to educate yourself on available 
                                brands. If your plan involves several pieces of equipment, I recommend a brand that shares batteries between tools. One battery type will reduce 
                                the number of chargers you need and possibly even the number of batteries overall. I recommend batteries over corded electric equipment. Batteries 
                                mean you don’t have to drag a cord around the yard and worry about accidentally cutting it. Check the amp hours of the battery before you buy it. 
                                Larger amp-hour batteries hold more charge and are great for large lawns and backpack blowers. These batteries tend to be heavy. If you plan on 
                                purchasing a line trimmer or hedge trimmer, look for lower amp hour batteries that are easier to carry.
                            </p>
                            <p>
                                Choose a brand that has replacement parts. While shopping, look around to see what other things are available. Check for extra blades or any line trimmer 
                                heads. It is true that electric equipment has lower maintenance costs things do still go wrong. You might save a Saturday knowing you can pop down to the 
                                store and get what you need instead of waiting for an order to be shipped.
                            </p>
                            <h4>Now What</h4>
                            <p>
                                The decision between electric or gas-powered lawn care equipment is up to you. Here at Alyssa’s Garden, we have already chosen to go all in on electric 
                                equipment. If you decide to go electric, pick what is in your budget and build from there. Another option is the increasing number of landscaping companies 
                                going electric. So if you want the benefits of electric equipment but with less actual work on your part, check out one in your area. If you live in 
                                Chapel Hill or Pittsboro North Carolina, contact us to see if we are a good fit for you! 
                            </p>
                            </div>
        <div classname="side-space"></div>
        <Link className='blog-option' to ='/blog'>Want to read more blog posts?</Link>
    </div>
  )
}

export default ElectricEquipment