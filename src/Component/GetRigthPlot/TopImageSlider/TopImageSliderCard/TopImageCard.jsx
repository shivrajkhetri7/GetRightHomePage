import React from 'react'
import './style.css'
import ExclusivePlot from './ExclusivePlot.jpg'
export default function TopImageCard() {
    return (
        
            <div className="new-deal">
                <div>
                    <div>
                        <div className="item-slide">
                            <div className="box-img">
                                {/* <img src="http://orig11.deviantart.net/6356/f/2010/156/e/f/swallowed_by_nature_by_danutza88.jpg" alt="dasdas" /> */}
                                <img src={ExclusivePlot}/>
                                <div className="text-wrap">
                                    <h4>Get Right Property <span className="deal-data"><span className="glyphicon glyphicon-calendar"></span>Exclusive</span></h4>
                                    <div className="desc">
                                        {/* <span>Starting from</span>
                                        <h3>$1000</h3> */}
                                    </div>
                                    <div className="book-now-c">
                                        <a href="#">Contact</a>
                                    </div>
                                </div>
                            </div>

                            {/*After Slider Effect  */}
                            <div className="slide-hover">
                                <div className="text-wrap">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    <h4>Sobha Windsor<span className="deal-data"><span className="glyphicon glyphicon-calendar"></span> Sun, Jan 29 - Tue, Jan 31</span></h4>
                                    <div className="desc">
                                        {/* <span>Starting from</span>
                                        <h3>25 Lac</h3> */}
                                    </div>
                                    <div className="book-now-c">
                                        <a href="#">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    )
}
