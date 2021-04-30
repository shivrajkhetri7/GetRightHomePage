import React from 'react'
import './style.css'
import loremImage from './img.jpg'
export default function PropertySaleModel() {
    return (
        <>
            <div className="JamboCard mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="PropertyImageCintainer">
                                    <span className="PropertyImageCintainerMargerViewAll">
                                        <img src={loremImage} className='ViewAllPropertyImage' alt='demoImage' />
                                        <button className='btn btnSale m-auto'>Sale</button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className='JumboInnerData'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="ViewAllPropertyApartmentTitle">
                                                2BHK Apartment for Sale in Panathur
                                                </div>
                                            <div className="ViewAllPropertyApartmentTitleMutedText">
                                                <small className="text-muted">Project By :<span style={{ color: '#1a73e8', marginLeft: '5px' }} >Sobha Dream Acres</span> </small>
                                                <small className="text-muted">location :<span style={{ color: '#1a73e8', marginLeft: '5px' }} >Hennur Cross</span> </small>
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
                                                            <small className="text-muted">10</small>
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
                                                            <small className="text-muted">290 Sq.ft </small>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6">
                                                        <div className="viewAllPropertyArea">
                                                            <div className="viewAllPropertyArea-title">
                                                                Possition On
                                                                </div>
                                                            <small className="text-muted">Aug 2021 </small>
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
                                                            <span className="ViewAllAmenitiesHere">Play Ground</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-md-8'>
                                            <small className="text-muted"> Well designed 2 BHK apartment, 960 sqft carpet area, is available in Sobha Dream Acres, Panathur. It is</small>
                                        </div>
                                        <div className='col-md-4'>
                                            <button className="btn btnViewAllContactUpdated">Contact US</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
