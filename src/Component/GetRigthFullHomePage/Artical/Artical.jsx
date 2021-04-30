import React from 'react';
import './style.css'
function Artical(props) {
    return (
        <div>
            <div class="container py-5">
                <div class="py-5">
                    <h3 class="font-weight-bold mb-0 ArticalTitle">Artical And News</h3>
                    <p class="text-muted mb-4 ArticalSubTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="row">
                        {/* First Cox */}
                        <div class="col-lg-6 mb-3 mb-lg-0">
                            <div class="hover hover-3 text-white rounded"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570786274/hoverSet-5_ifnajv.jpg" alt="" />
                                <div class="hover-overlay"></div>
                                <div class="hover-3-content px-5 py-4">
                                    <h3 class="hover-3-title text-uppercase font-weight-bold mb-1"><span class="font-weight-light">Get Right </span>Property</h3>
                                    <p class="hover-3-description small text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        {/* Second Box   */}
                        <div class="col-lg-6">
                            <div class="hover hover-3 text-white rounded"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570786268/hoverSet-6_hkumk8.jpg" alt="" />
                                <div class="hover-overlay"></div>
                                <div class="hover-3-content px-5 py-4">
                                    <h3 class="hover-3-title text-uppercase font-weight-bold mb-1"><span class="font-weight-light">Image </span>Caption</h3>
                                    <p class="hover-3-description small text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artical;