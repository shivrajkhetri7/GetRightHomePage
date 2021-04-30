import React from 'react';
import './style.css'
function Footer(props) {
    return (
        <>
            <footer className=" container-fluid footer">
                <div className="bottom_border">
                    <div className="row">
                        <div className="col-md col-12 ">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

                            <p className="mb10">GetRightProperty is a new home rental platform that makes it easier to find your new home without paying any brokerage. Use our verified listing to ensure you find your dream home by contacting the owners directly. In case you cannot find a property you are looking for, please post a requirement and we'll send you email notification with properties matching your requirements.</p>
                            <p><i className="fa fa-location-arrow"></i>Bangalore, Karnataka, India</p>
                            <p><i className="fa fa-phone"></i>  +91-9513134810  </p>
                            <p><i className="fa fa fa-envelope"></i> info@rpclan.com  </p>


                        </div>


                        <div className="col-md  col-6 ">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="/">Image Rectoucing</a></li>
                                <li><a href="/">Clipping Path</a></li>
                                <li><a href="/">Hollow Man Montage</a></li>
                                <li><a href="/">Ebay & Amazon</a></li>
                                <li><a href="/">Hair Masking/Clipping</a></li>
                                <li><a href="/">Image Cropping</a></li>
                            </ul>

                        </div>


                        <div className="col-md  col-6">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="/">Property In Bangalore</a></li>
                                <li><a href="/">Property In Mumbai</a></li>
                                <li><a href="/">Property In Pune</a></li>
                                <li><a href="/">Property In Delhi</a></li>
                                <li><a href="/">Property In Kolkata</a></li>
                                <li><a href="/">Property In Navi Mumbai</a></li>
                            </ul>

                        </div>


                        <div className="col-md col-12">
                            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                            <ul className="footer_ul2_amrc">
                                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i></a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i></a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i></a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div>
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/property-list">Property</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    <p className="text-center">Copyright @2021 | <a href="#">Get Right Property</a></p>

                    <ul className="social_footer_ul">
                        <li><a href="https://m.facebook.com/pages/category/Advertising-Marketing/Get-Right-Property-111223380335151/"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </footer>



        </>
    );
}

export default Footer;