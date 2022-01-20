import React from 'react';
import { Link } from 'react-router-dom';
import './Maincard.css'


function Maincard() {
    return (
        <div>
             <div className="container">
        <div className="row">
            <div className="col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12 ml-lg-0 btn1 media5">
                <img src="img1.jpg" className="img-fluid media5" alt="..."/>
                <button type="button" className="btn btn-outline-dark bt btn-lg btn-sm btn-md shop-now1 shop-now  "
                    >
                        <Link className='linkbutton' to="./Home" >Shop
                        Now</Link></button>
            </div>
        </div>
    </div>
            
        </div>
    )


}
export default Maincard

