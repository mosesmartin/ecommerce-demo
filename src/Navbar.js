import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'
// import './Navbar.css'


function Navbar() {
    return (
        <div>
       {/* <!-- ---NABAR-AREA-START--- --> */}
    <nav className="navbar navbar-expand-lg  navbar-light" >
        <div className="container">
            <Link className="navbar-brand media3" to="/"><img
                    src="https://cdn.shopify.com/s/files/1/2277/5269/t/59/assets/Baroque_green.jpg?v=1232842068771143212"
                    className="img-fluid logo" alt=""/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse media4" id="navbarSupportedContent">
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0  navbar1"
                    >
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="sale.html">Sale</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="collection.html" id="navbarScrollingDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="flase">
                            Collection
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to="lawn.html">Lawn</Link></li>
                            <li><Link className="dropdown-item" to="Chantelle.html">Chantelle</Link></li>
                            <li><Link className="dropdown-item" to="swis-voile.html">Swiss</Link></li>
                            <li><Link className="dropdown-item" to="fuchsia-lawn.html">Fuchsia</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="unstiched.html">Unstiched</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="pret.html">Pret</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="dupattas.html">Dupattas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="bottoms.html">Bottoms</Link>
                    </li>
                </ul>

                <div className= 'iconss' >
                   
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor"
                        className="bi bi-search srch" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                    <select  name="Curr">
                        <option value="PKR">PKR</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        className="bi bi-person srch" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                   
                </div>
            </div>
        </div>
    </nav>



        </div>
    )


}
export default Navbar

