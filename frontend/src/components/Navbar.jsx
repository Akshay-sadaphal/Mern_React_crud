import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">  <Link to="/" className="nav-link" >Home</Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/create" className="nav-link" >Create Customer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all" className="nav-link" >Customer Card</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;

