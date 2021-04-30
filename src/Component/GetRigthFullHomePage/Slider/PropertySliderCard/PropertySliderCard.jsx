import React from 'react';
import './style.css'
import city from './city.jpg'
function PropertySliderCard(props) {
    return (
        <React.Fragment>
            <div className='sliderCard'>
                <div className='sliderCardBody'>
                    <hr className='hl' />
                    <div className='sliderCardImage'>
                        <img className='img' src={city} alt='demo' />
                    </div>
                    <div className='sliderCardTitle'>
                        <div className='sliderTitle text-left ml-1 mt-1'>Sobha Dream Acears
                        <br/>
                            <small className='text-muted text-left sliderTitleHidden'>Sobha Windsore Developer</small>
                        </div>
                    </div>
                    <div className='sliderCardText mt-1'>
                        <div className='sliderSubTitle text-left ml-3'>Details</div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='ApartmentSize text-left ml-3'>2BHK Apartment 
                                        <br />
                                    <small className='text-muted text-left'>Sobha Dream Acares</small>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='ApartmentSize text-left ml-3 '><i class="fas fa-rupee-sign"></i> : 67 L - 1.2 Cr
                                    <br />
                                    <small className='text-muted text-left'>Panatur</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sliderCardFooter mt-1 text-center mb-1'>
                        <button className="btn btn-default PropertySliderKnowMoreCantact">
                            Contact
                              </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PropertySliderCard;