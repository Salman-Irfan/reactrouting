import React from 'react';
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" class="nav-link active" aria-current="page" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" class="nav-link" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" class="nav-link" aria-current="page">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" class="nav-link" aria-current="page">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Link to="/signin" className='mt-3 mx-2 text-light bg-primary'>Sign in</Link>

                            <Link to="/signup" className='mt-3 mx-2 text-light bg-primary'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
