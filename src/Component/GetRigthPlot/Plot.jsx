import React from 'react'
import './style.css'
// component 
import Background from './PropertyBackground/PropertyBackGround';
import TopCardSlider from './TopImageSlider/TopImageSlider';
import TrendingProperty from './TrendingProperty/TrendingProperty';
import TopProperty from './TopProperty/TopProperty';
import BuyOffer from './PlotPropertyOffer/PlotPropertyOffer'
export default function Plot() {
    return (
        <div >
            <Background/>
            <TopCardSlider/>
            <TrendingProperty/>
            <TopProperty/>
            <BuyOffer/>
        </div>
    )
}
