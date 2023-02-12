import React from 'react';
import './imageContainer.styles.css';
import Mulch from '../../images/lotsOfMulch.png';
import SmallPerennialGarden from '../../images/smallPerennialGarden.png';
import SageAndBasil from '../../images/sageAndBasil.png';
import ButterflyPot from '../../images/butterflyPot.png';
import Windowbox from '../../images/windowbox.jpg';

const ImageContainer = () => {

    return (
        <div className = 'image-container'>
            <img className='image-display'alt ='four yards of triple shred mulch in a flower bed'src= { Mulch }></img>
            <img className='image-display'alt ='a small perennial garden'src= { SmallPerennialGarden }></img>
            <img className='image-display'alt ='a pot filled with sage, basil, and tomato'src= { SageAndBasil }></img>
            <img className='image-display'alt ='a window box full of scullents'src= { Windowbox }></img>
            <img className='image-display'alt ='a painted flower pot filled with flowers'src= { ButterflyPot }></img>
        </div>
    )
};

export default ImageContainer;