import React from 'react';
import './imageContainer.styles.css';
import Mulch from '../../images/lotsOfMulch.png';
import SmallPerennialGarden from '../../images/smallPerennialGarden.png';

const ImageContainer = () => {

    return (
        <div className = 'image-container'>
            <img className='image-display'alt ='four yards of triple shred mulch in a flower bed'src= { Mulch }></img>
            <img className='image-display'alt ='a small perennial garden'src= { SmallPerennialGarden }></img>
        </div>
    )
};

export default ImageContainer;