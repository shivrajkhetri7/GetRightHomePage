import React from 'react';
import PropertyDetailsCard from './PropertyDetailCard/PropertyDetailCard';
import RentProperty from '../RentProperty/RentProperty'
import './style.css'
function ViewAllProperty() {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <PropertyDetailsCard />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12'>
                    <RentProperty/>
                </div>
            </div>

        </>
    )
}

export default ViewAllProperty;