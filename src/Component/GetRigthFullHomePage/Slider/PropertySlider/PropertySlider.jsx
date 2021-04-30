import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

// Component
import PropertySliderCard from '../PropertySliderCard/PropertySliderCard'

export class PropertySlider extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <div>
                <div class='container mt-5'>
                <h3 class="font-weight-bold mb-0 SliderHomeCardTitle">Property For Sale</h3>
                    <p class="text-muted mb-4 SliderHomeCardSubTitle ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <OwlCarousel margin={20} autoplay={true} items={4}
                        responsive={this.state.responsive} >
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                    </OwlCarousel>
                    <div className="row">
                        <div className="col-12">
                            <div className="ViewAncherTag">
                                <a href="#">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PropertySlider;