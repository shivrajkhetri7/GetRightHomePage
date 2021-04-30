import React from 'react'
import './style.css'
export default function Search() {
    return (
        <>
        <div>
            <div className="search-wrap css-15m0r3w">
                <nav data-q="service" className="css-k008qs">
                    <a data-q="active" className="search-tab search-active-tab css-rzl9ot" href="#" >Buy</a>
                    <a data-q="false" className="search-tab css-1hd5vrj" href="#" >Rent</a>
                    <a data-q="false" className="search-tab css-1hd5vrj" href="#" >Plot</a>
                </nav>
                <div className="search-box css-fvnb3i">
                    <div className=" css-1u2a8ed">
                        <div className="input-container">
                            <div>
                                <div class="dropdown css-80eldr">
                                    <button class="btn btn-default btnDrop dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Bangalore
                                     </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Pune</a>
                                        <a class="dropdown-item" href="#">Mumbai</a>
                                        <a class="dropdown-item" href="#">Delhi</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div data-q="search" className="css-18ytggf">
                        <input placeholder="Search Location" className="css-1eqt4wh" />
                    </div>
                    <button className="cta css-84bdd7">Search</button>
                </div>
            </div>
        </div>
        </>
    )
}
