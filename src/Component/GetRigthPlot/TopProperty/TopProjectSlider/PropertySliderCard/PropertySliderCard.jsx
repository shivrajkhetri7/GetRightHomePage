import React from 'react';
import './style.css'
import Plot from './Plot.jpg'
function PropertySliderCard(props) {
    return (
        <React.Fragment>
            <div className='sliderCard'>
                <div className='sliderCardBody'>
                    <hr className='hl' />
                    <div className='sliderCardImage'>
                        <img className='img' src={Plot} alt='demo' />
                    </div>
                    <div className='sliderCardTitle mt-1'>
                        <div className='sliderTitle text-left ml-1'>Location
                        <br />
                            <small className='text-muted text-left sliderTitleHidden'>Sarjapur</small>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className='sliderCardText mt-1'>
                                <div className='sliderSubTitle text-left ml-3'>Details</div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='ApartmentSize text-left ml-3'>Plot Area
                                        <br />
                                            <small className='text-muted text-left'>1200 sq.ft</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='ApartmentSize text-left ml-3 '>Dimention
                                    <br />
                                            <small className='text-muted text-left'> 40 x 30 ft</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='sliderCardText mt-4'>
                                <div className='row'>
                                    <div className='col-md-12 '>
                                        <div className='ApartmentSize text-left ml-3'>Owner 
                                        <br />
                                            <small className='text-muted text-left'>Neeraj</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='ApartmentSize text-left ml-3 '>Posted On
                                    <br />
                                            <small className='text-muted text-left'> 14 April 2021 </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='sliderCardFooter mt-1 text-right mr-1 mb-1'>
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