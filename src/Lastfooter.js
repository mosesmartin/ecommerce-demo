import React from 'react';
import { Link } from 'react-router-dom';

import './Lastfooter.css'


function Lastfooter(){
    return(
        <>
        {/* <!-- ---FOOTER-AREA-START--- --> */}

<footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Who Are We</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Lookbook</a></li>
                            <li><a href="#">Our Responsibility</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Exchange Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Track your Order</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                        <h5>Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Privacy and Policy</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                            <li><a href="#">Covid 19 updates</a></li>
                            <li><a href="#">FAQ's</a></li>
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5>We Accept</h5>
                    <ul className="social-network social-circle">
                        <li><img src="visa-new.png" height="42px" alt=""/></li>
                        <li><img src="master-new.png" height="42px" alt=""/></li>
                        <li><img src="ssl-new.png" height="42px" alt=""/></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h5>Follow Us</h5>
                    <ul className="social-network social-circle">
                        <li><a href="#"><img src="fb-new.png" height="37px" alt=""/></a></li>
                        <li><a href="#"><img src="insta-new.png" height="37px" alt=""/></a></li>
                        <li><a href="#"><img src="Snap_logo.png" height="37px" alt=""/></a></li>
                    </ul>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end div-input" >
                    <h5>Subscribe Now</h5>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                    <input className="inputstyle"  type="text"/><button className="btn-dark"><a href="#"
                            >SUBSCRIBE</a></button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 copy">
                    <p className="text-center" >&copy; Copyright 2021 by BAROQUE All
                        rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
{/* <!-- ---FOOTER-AREA-END--- --> */}
        
        
        </>
    )
    
}
export default Lastfooter