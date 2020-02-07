import React from 'react';
import FoodLog from './FoodLog';
import SadFace from '../img/SadFace.png';
import FineFace from '../img/FineFace.png';
import HappyFace from '../img/HappyFace.png';

export default function Homepage () {
    return (
        <div className='homepage'>
            <FoodLog />
            <div>
                <img src={HappyFace} className='avatar'/>
            </div>
        </div>
    )
}