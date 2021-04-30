import React from 'react';
import './style.css'
import NavBar from '../NavBar/NavBar';
import SearchBTN from '../SearchBTN/SearchBtn'
function SearchBar() {
    return (
        <>
            <div>
                <div className="HomeBackground">
                <NavBar /> 
                <div className="searchBtn">
                <SearchBTN/>
                </div>
                </div>
            </div>

        </>
    );
}

export default SearchBar;