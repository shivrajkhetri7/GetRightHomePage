import React from 'react';
import './style.css';
import loremImage from './img1.jpg'
function RentProperty() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="JamboCard">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="PropertyImageCintainer">
                                                <span className="PropertyImageCintainerMarger">
                                                    <img src={loremImage} className='ViewAllPropertyImage' alt='demoImage' />
                                                    <button className='btn btnRent m-auto'>Rental</button>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className='JumboInnerData'>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="ViewAllPropertyApartmentTitle">
                                                            3 BHK Apartment
                                                </div>
                                                        <div className="ViewAllPropertyApartmentTitleMutedText">
                                                            <small className="text-muted">Project By :<span style={{ color: '#1a73e8', marginLeft: '5px' }} >ARS Green Villae Rosaceae by ARS Properties</span> </small>
                                                            <small className="text-muted ml-2">location :<span style={{ color: '#1a73e8', marginLeft: '5px' }} >HSR Layout</span> </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="ViewAllPropertyDetailCard">
                                                            <div className="row mt-2">
                                                                <div className="col-md-6 col-6">
                                                                    <div className="viewAllPropertyArea">
                                                                        <div className="viewAllPropertyArea-title">
                                                                            Floor
                                                                </div>
                                                                        <small className="text-muted">4</small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-6">
                                                                    <div className="viewAllPropertyArea">
                                                                        <div className="viewAllPropertyArea-title">
                                                                            Bathroom
                                                                </div>
                                                                        <small className="text-muted">2 </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-md-6 col-6">
                                                                    <div className="viewAllPropertyArea">
                                                                        <div className="viewAllPropertyArea-title">
                                                                            Carpet Area
                                                                </div>
                                                                        <small className="text-muted">1118 sq.ft </small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-6">
                                                                    <div className="viewAllPropertyArea">
                                                                        <div className="viewAllPropertyArea-title">
                                                                            Available from
                                                                </div>
                                                                        <small className="text-muted">Available now </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-2">
                                                        <div className="ViewAllPropertyDetailAmenitiesCard">
                                                            <div className="ViewAllPropertyDetailAmenitiesCard-title">
                                                                Amenities
                                                </div>
                                                            <div className="ViewAllPropertyDetailAmenitiesCardData">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-6">
                                                                        <span className="ViewAllAmenitiesHere">Parking</span>
                                                                    </div>
                                                                    <div className="col-md-6 col-6">
                                                                        <span className="ViewAllAmenitiesHere">Power Backup</span>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6 col-6">
                                                                        <span className="ViewAllAmenitiesHere">Security</span>
                                                                    </div>
                                                                    <div className="col-md-6 col-6">
                                                                        <span className="ViewAllAmenitiesHere">Swimming Pool</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className='col-md-8'>
                                                        <small className="text-muted"> It is a spacious,Semi-furnished 3 BHK Apartment. Affordable rental house available in Sompura</small>

                                                    </div>
                                                    <div className='col-md-4'>
                                                        <button className="btn btnViewAllContact">Contact US</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Here To Add New Small Cards Or Add Banner Like That So that's Why Keept Space Here   */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RentProperty;