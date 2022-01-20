import React from 'react';
import { Link } from 'react-router-dom';

import './Cardsrows.css'



function Cardsrows(){
    return(

        <div>
               {/* card section start */}
    <div className="container">
        {/* <!-- Card deck --> */}
        <div className="card-deck row">

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="Pret">
                            <img className="card-img-top" src="img2.jpg" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >PRET</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> -->
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="Pret" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card mb-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="bottoms.html">
                            <img className="card-img-top" src="img3.jpg" alt="Card image cap"/>

                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading">Bottoms</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> --> */}
                        {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="bottoms.html" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card mb-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="dupattas.html">
                            <img className="card-img-top" src="img4.jpg" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >UNSTICHED</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> -->
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="swis-voile.html">
                            <img className="card-img-top" src="img5.jpg" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >Swiss Voile</h4>
                        {/* <!--Text-->
                        <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> -->
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="swis-voile.html" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card mb-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="pret.html">
                            <img className="card-img-top" src="img6.jpg" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >DUPATTAS</h4>
                        {/* <!--Text--> */}
                        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> -->
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="pret.html" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                {/* <!-- Card --> */}
                <div className="card mb-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <Link to="fuchsia-lawn.html">
                            <img className="card-img-top card-img" src="img7.jpg" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">

                        {/* <!--Title--> */}
                        <h4 className="card-title card-heading" >Fuchsia Lawn</h4>
                        {/* <!--Text-->
                        <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p> -->
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link className="card-link" to="Fuchsia-lawn.html" >Shop Now</Link>

                    </div>

                </div>
                {/* <!-- Card --> */}
            </div>

            {/* <!-- Card deck --> */}

        </div>
    </div>

        </div>
    
    )
        
}

export default Cardsrows