import React from 'react';
import './style.css'
import PropertyModules from '../PropertySaleModel/PropertySaleModel';
export default function CardContainer() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <PropertyModules />
                    <PropertyModules />
                    <PropertyModules />
                    <PropertyModules />
                    <PropertyModules />
                    <PropertyModules />
                    <PropertyModules />
                </div>
                <div className="col-md-3">
                    <div className="filterModel mt-5 text-left">
                        <p className="grid-title"><i className="fa fa-filter"></i> Filters</p>
                        <hr />
                        <form autocomplete="off">
                            <div className="calender">
                                <small className='text-muted text-left'>Posted Ads From Date</small>
                                <div className='form-group'>
                                    <input type="date" class="form-control input1" placeholder="From Date" readonly />
                                </div>
                                <small className='text-muted text-left'> To Date</small>
                                <div className='form-group'>
                                    <input type="date" class="form-control input1" placeholder="To Date" readonly />
                                </div>
                            </div>

                            <div className="priceCardPropertySale mt-2">
                                <small className='text-muted text-left'>By Price</small>
                                <div className="form-group">
                                <select class="form-select form-select  form-control input1" aria-label=".form-select-lg example">
                                        <option selected>Select The Price Range</option>
                                        <option value="1">  20L -  40 L</option>
                                        <option value="1">  40L -  60 L</option>
                                        <option value="1">  60L -  80 L</option>
                                        <option value="1">  80L -  1 Cr</option>
                                        <option value="1">  1 Cr -  1.2 Cr </option>
                                        <option value="1">  1.2 Cr -  1.4 Cr </option>
                                        <option value="1">  1.4 Cr -  1.6 Cr </option>
                                    </select>
                                </div>
                            </div>

                            {/* Filter Button */}
                            <div className="FilterBtnSalePage mt-1 text-center  mb-1">
                            <button className='btn btnFilter'>Filter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
