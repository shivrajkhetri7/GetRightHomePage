import React from 'react';
import './style.css'
function FeaturedProperty() {
    return (
        <>
            <div className="py-3" id="venue">
                <div className="container-fluid">
                    <h3 class="font-weight-bold mb-0 FuturePropetyTitle">Feuture Property</h3>
                    <p class="text-muted mb-4 FuturePropetySubTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="row bg-primary animate-in-down">
                        <div className="p-4 col-md-6 align-self-center text-color">
                            <p className="m-0">Feel comfortable, and purchase Apartment</p>
                            <h2>Discover the Apartment's</h2>
                            <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p> <a href="#" className="btn mb-3 p-2 btn-light btnviewAllPartment ">View All Apatment's</a>
                        </div>
                        <div className="p-0 col-md-6">
                            <div className="carousel slide" data-ride="carousel" id="carousel1">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item"> <img className="d-block img-fluid w-100" src="https://i.imgur.com/K7A78We.jpg" alt="first slide" />
                                        {/* <div className="carousel-caption">
                                            <h3>Bangalore</h3>
                                            <p>Good architecture, services</p>
                                        </div> */}
                                    </div>
                                    <div className="carousel-item active"> <img className="d-block img-fluid w-100" src="https://i.imgur.com/c8952Iz.jpg" data-holder-rendered="true" />
                                        {/* <div className="carousel-caption">
                                            <h3>Bangalore</h3>
                                            <p>Enjoy our Service</p>
                                        </div> */}
                                    </div>
                                    <div className="carousel-item"> <img className="d-block img-fluid w-100" src="https://i.imgur.com/K7A78We.jpg" data-holder-rendered="true" />
                                        {/* <div className="carousel-caption">
                                            <h3>Bangalore</h3>
                                            <p>Sobha Windsor</p>
                                        </div> */}
                                    </div>
                                </div> <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="ViewAncherTag">
                                <a href="#">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FeaturedProperty;