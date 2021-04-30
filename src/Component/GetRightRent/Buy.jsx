import React from 'react'
import './style.css'
// component 
import Background from './PropertyBackground/PropertyBackGround';
import TrendingProperty from './TrendingProperty/TrendingProperty';
import TopProperty from './TopProperty/TopProperty';
import BuyOffer from './RentPropertyOffer/RentPropertyOffer'
export default function Buy() {
    return (
        <div >
            <Background/>
            <TrendingProperty/>
            <TopProperty/>
            <BuyOffer/>
        </div>
    )
}
