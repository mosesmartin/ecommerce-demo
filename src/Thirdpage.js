
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'


function Thirdpage (){
    return(

        

    <div className="container">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <img src="//cdn.shopify.com/s/files/1/2277/5269/products/17_9.jpg?v=1627539555" className="img-thumbnail"
                alt=""/>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" id="fourphotos">
            <div className="wrape6">
                <img src="//cdn.shopify.com/s/files/1/2277/5269/products/16_9_150x150.jpg?v=1627539555"
                    className="img-thumbnail" alt=""/>
                <img onclick="imgSel()"
                    src="//cdn.shopify.com/s/files/1/2277/5269/products/19_7_150x150.jpg?v=1627539450"
                    className="img-thumbnail" alt=""/>
                <img onclick="imgSel()"
                    src="https://cdn.shopify.com/s/files/1/2277/5269/products/17_9_150x150.jpg?v=1627539555"
                    className="img-thumbnail" alt=""/>
                <img onclick="imgSel()"
                    src="//cdn.shopify.com/s/files/1/2277/5269/products/18_9_150x150.jpg?v=1627539555"
                    className="img-thumbnail" alt=""/>
            </div>
        </div>

        <div className=" noclassa col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" >
            <div className="form-heading">
                <h6>DAPHNE</h6>
                <span className='spanclass' >PKR 5,490.00</span>
            </div>

         
            {/* <!-- ................... --> */}

            <br/>

           

            {/* <!-- This is what will be included inside the popup --> */}
            <div className="popup" id="popup">
                {/* <!-- <p style="text-align: center;">This is a popup!</p> --> */}
                <h6 className='classh2' >DEPHNE - Unstiched</h6>
                <img className = 'imgclass'  src="https://cdn.shopify.com/s/files/1/2277/5269/products/17_9_medium.jpg"
                    alt=""/>
                <div className="popup-btn buttonclas">
                    <Link className = 'linkclass' to="cart.html" onclick="show('popup')" >GO TO CART PAGE</Link>
                    <Link className = 'linkclass1' to="#" onclick="hide('popup')">CLOSE</Link>

                </div>
            </div>


            <div className=" divclass col-12 col-xl-12 col-lg-12 col-md-3 col-sm-12" >

                <button type="button" className="collapsible">SIZE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">XS</label>
                        <input type="checkbox"/> <label for="check">S</label>
                        <input type="checkbox"/> <label for="check">M</label>
                    </div>
                    <div className="wrape2">
                        <input type="checkbox"/> <label for="check">L</label>
                        <input type="checkbox"/> <label for="check">XL</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">PIECES <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">3 Piece</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">PRICE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">RS 10000</label>
                        <input type="checkbox"/> <label for="check">RS 11999</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">Write a Review<i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1 stylecass" >
                        <h6 className = 'hclass'>Write a Review</h6>
                        <h6 className = 'hclass1' >Name <span className = 'spanhclas'>*</span></h6>
                        <input className='inputttclass'  type="Name" placeholder="Enter your name"/>
                        <h6 className = 'hclass2' >Email <span className ='spanclass33' >*</span></h6>
                        <input className = 'inputclass' type="Name" placeholder="abc@example.com"/><br/>
                        <h6 className = 'hclass11' >Ratings <span className='spanclasss'
                                >*</span>
                            <div className="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        </h6>
                        <h6 className='classhh'>Review Title <span className='spannnn'
                               >*</span></h6>
                        <input className='inputttclas' type="Name"
                            placeholder="Give your review a title"/>
                        <h6 className='classhhh'>Body of Review (1500) <span className='spaannnn'
                                >*</span></h6>
                        <textarea className='textareaa'  name="text" id="" cols="30" rows="10"
                            placeholder="Write your comments here"></textarea><br/>
                        {/* <!-- <input type="checkbox"> <label for="check">XS</label> --> */}
                        <button className ='buttonclass'
                       >Submit Review</button>
                    </div>
                </div>



            </div>



        </div>
    </div>






    {/* <!-- ---MAIN-SECTION-END--- --> */}

    <br/>
    {/* <!-- ----CARD-SECTION-START---- --> */}

    <div className='container'>
    <h6 className='classssh' >you may also like</h6>
            
    </div>
    <div className="container">
        {/* <!-- Card deck --> */}
        <div className="card-deck row">
        
            

            <div className="col-xs-12 col-sm-6 col-md-4 pt-3">
                {/* <!-- Card --> */}
                <div className="card">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <img className="card-img-top"
                            src="https://cdn.shopify.com/s/files/1/2277/5269/files/bannert.jpg?v=1627971591"
                            alt="Card image cap"/>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >Swiss Voile</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p> --> */}
                        {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="#" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 pt-3">
                {/* <!-- Card --> */}
                <div className="card mb-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <img className="card-img-top"
                            src="https://cdn.shopify.com/s/files/1/2277/5269/files/jk_896bbfeb-58c3-4bce-89fe-7d1a0269d242.jpg?v=1628672712"
                            alt="Card image cap"/>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >Pret</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p> --> */}
                        {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="#">Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
                
            </div>
{/* 
            <div className="col-xs-12 col-sm-6 col-md-4">
                <!-- Card -->
                <div className="card mb-4">

                    <!--Card image-->
                    <div className="view overlay">
                        <img className="card-img-top card-img"
                            src="https://cdn.shopify.com/s/files/1/2277/5269/files/ui_ba04f40a-a7c8-4c80-950a-38788bce2166.jpg?v=1627971632"
                            alt="Card image cap"/>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    <!--Card content-->
                    <div className="card-body">

                        <!--Title-->
                        <h4 className="card-title card-heading">Fuchsia Lawn</h4>
                        
                        <Link className="card-link" to="#">Shop Now</Link>

                    </div>

                </div>
                <!-- Card -->
            </div> */}

            {/* <!-- Card deck --> */}

        </div>
    </div>

</div>

    )
}

export default Thirdpage
