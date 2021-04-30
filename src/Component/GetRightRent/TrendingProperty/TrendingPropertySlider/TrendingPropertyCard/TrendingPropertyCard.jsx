import React from 'react'
import './style.css'
export default function TrendingPropertyCard() {
    return (
        <>
            <section id="TrendingProperty">
                <div class="container">
                    <div class="card trendingProperty">
                        <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                        <div class="card-body card-body-imp">
                            <div className="BtnAreAvilableORNot">
                            <button className="btnAvilable">Available</button>
                            </div>
                            <div className='CardBodyInnerData'>
                            <h5 class="card-title text-left">Sobha Dreams Acear</h5>
                            <div className="text-left"><small className='text-muted'>Posted On : <span> 29 <sup>th</sup> April, 2021 </span></small></div>
                            <div className="text-left"><small className='text-muted'>Location : <a href="#">Bangalore, White Field</a></small></div>
                            <div className="text-left">
                            <strong>About</strong>
                            </div>
                            <div className="TrendingPropertyCardText">
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat  </p>
                            </div>
                   
                            <div className='row'>
                                <div className='col-md-4  p-1'>
                                    <strong  style={{backgroundColor:'yellow',padding:'5px 10px 5px 10px'}}><i class="fas fa-rupee-sign"></i> : 10,000 K - 15,000 K</strong>
                                </div>
                                <div className='col-md-4  p-1'>
                                    <strong style={{backgroundColor:'yellow',padding:'5px 10px 5px 10px'}}>Offer :5% Off</strong>
                                </div>
                                <div className='col-md-4 p-1'>
                                    <strong style={{backgroundColor:'yellow',padding:'5px 10px 5px 10px'}}>Owner : Shivraj </strong>
                                </div>
                            </div>
                            <div className="FlexSpaceBtn pt-2">
                            <a href="" class="btn btn-outline-success btn-sm ml-1">Book Now</a>
                                <a href="" class="btn btn-outline-success btn-sm ml-1">Contact</a>
                                <a href="" class="btn btn-outline-success btn-sm ml-1">What's App</a>
                                {/* <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a> */}
                            </div>
                            </div>
                        </div>
                    
                    
                    
                    
                    </div>

                </div>
            </section>
        </>
    )
}
