import React from 'react';
import './Style.css'
function LeftImageCard(props) {
    return (
        <div>
            <div>
                <div class="CardLeft">
                    <div class="row">
                        <div class="col-5">
                        <div className='smallImageContainer'>
                        <img class="LeftSliderCardImage" height='100px' src="https://picsum.photos/150?image=641" alt="" />
                        </div>  
                        </div>
                        <div class="col-7">
                            <div class="card-block card-block-text">
                                <p>Location : Bangalore HSR</p>
                                <p><i class="fas fa-rupee-sign"></i> : 5000</p>
                                <p>Owner : RP Clan </p>
                                <a href="#" class="btn btn-outline-primary btn-sm float-right mr-1 btnRentContact">Contact</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default LeftImageCard;