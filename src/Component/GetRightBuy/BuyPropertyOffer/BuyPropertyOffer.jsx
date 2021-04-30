import React from 'react';
import './style.css';
import offerToBuy from './OfferBuy.png';
export default function BuyPropertyOffer() {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-12'>
                    <div className='offer-banner'>
                        <div className="row">
                            <div className='col-6'>
                                <div className="offerText">
                                    <h3 class="font-weight-bold BuyOfferTitle"> Post Your Property Free</h3>
                                    <p class="text-muted mb-4 BuyOfferSubTitle ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className='col-6 order-sm-1'>
                                        <img src={offerToBuy} className="buyOfferImage" alt='offer to buy'></img>
                                    </div>
                                    <div className='col-6 order-sm-2 buyOfferKnowMoreBtnCol'>
                                        <button className='btn btn-default buyOfferKnowMoreBtn'>Post Property</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
