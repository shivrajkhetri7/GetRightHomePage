import './style.css'
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card  from  './TrendingPropertyCard/TrendingPropertyCard'
class TrendingPropertySlider extends Component{

    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    }

    render() {
        return (
            <div>
                <div class='container mt-5'>
                <h3 class="font-weight-bold mb-0 SliderHomeCardTitle">Exclusive Rental Properties</h3>
                    <p class="text-muted mb-4 SliderHomeCardTitle ">Check out the latest properties in Bengaluru</p>
                    <OwlCarousel margin={20} autoplay={true} items={2}
                        responsive={this.state.responsive} >
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
                        </div>
                        <div className="items" >
                           <Card/>
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


export default TrendingPropertySlider;