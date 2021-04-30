import React from 'react';
import './style.css'
// Components
import SearchBar from './HomeSearchBar/SearchBar';
import FeatureProperty from './FeaturedProperty/FeaturedProperty'
import LeftImageSlider from './LeftImageSlider/LeftImageSlider/LeftImageSlider'
import Slider from './Slider/PropertySlider/PropertySlider';
import Artical from './Artical/Artical';
import NewsLatter from './NewsLatter/NewsLatter';
import Footer from "./Footer/Footer";
import SearchBTN from './SearchBTN/SearchBtn';
function Home() {
    return (
        <React.Fragment>   
            <SearchBar />
            <FeatureProperty />
            <LeftImageSlider />
            <Slider />
            <Artical />
            <NewsLatter />
            <Footer />
        </React.Fragment>
    );
}

export default Home;