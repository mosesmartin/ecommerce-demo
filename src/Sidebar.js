import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import './Sidebar.css'


function Sidebar(){
    return(
<div className="container">

    <div className="card-deck row">
    <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12">

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
                <button type="button" className="collapsible">FABRIC TYPE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1" >
                        <input type="checkbox"/> <label for="check">XS</label>
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
      
                
                </div>

                <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12">

                <div className="card">

                <div className="view overlay">
                        <Link to="/Thirdpage"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="/Thirdpage">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN292</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>


                </div>

                {/* card2 */}
        
                <div className="card">

                <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>

                </div>

            {/* card3 */}
                
                <div className="card">

                <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>

                </div>

                


        

                </div>
    
    
    {/* card2-row */}

    <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12">

                <div className="card">

                <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>
                   
                   {/* card222 */}


                   <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>


                    <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>

                
                

                    

                </div>


        

                </div>

  {/* card3-row */}

  <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12">

<div className="card">

<div className="view overlay">
        <Link to="/"><img className="card-img-top "
                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                alt="Card image cap"/></Link>


        <Link to="#!">
            <div className="mask rgba-white-slight"></div>
        </Link>
    </div>

     <div className="card-body">

        
        <h4 className="card-title card-heading" >DESIGN191</h4>
        <h6 className="card-link">PKR 1,799.00</h6>
    </div>


    <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>


                    <div className="view overlay">
                        <Link to="/"><img className="card-img-top "
                                src="//cdn.shopify.com/s/files/1/2277/5269/products/1_44_600x_crop_center.jpg?v=1625225335"
                                alt="Card image cap"/></Link>


                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                     <div className="card-body">

                        
                        <h4 className="card-title card-heading" >DESIGN191</h4>
                        <h6 className="card-link">PKR 1,799.00</h6>
                    </div>

</div>




</div>


 {/* cards-sec-row */}

 



                
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    </div>
</div>
    )
}

export default Sidebar