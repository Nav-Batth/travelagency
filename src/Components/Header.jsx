import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo1 from './logo1.png'

export default function Header() {
    return (
        <>
        <div className="container-fluid w-100 overflow-hidden navbar-scroll position-relative"> 
            <div className="row">
                <header className="shadow sticky z-50 top-0">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="offset-lg-1 col-4">
                        <img src={logo1} alt='' className="img-fluid w-50" />
                            {/* <Link className="navbar-brand fs-1 text-decoration-none text-dark px-5" to="/">QuickStart</Link> */}
                            </div>
                            <div className="offset-lg-1 col-lg-6">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <ul className="list-unstyled navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-3">
                                   <NavLink className={({isActive})=> `nav-link ${isActive ? 'text-danger' : 'text-black'}`} aria-current="page" to="/">Home</NavLink>
                                </li>
                                
                                <li className="nav-item px-3">
                                  <NavLink className={({isActive})=> `nav-link ${isActive ? 'text-danger' : 'text-black'}`} to="/about">About Us</NavLink>
                                </li>

                                <li className="nav-item px-3">
                                  <NavLink className={({isActive})=> `nav-link ${isActive ? 'text-danger' : 'text-black'}`} to="/destination">Destination</NavLink>
                                </li>
                                <li className="nav-item px-3">
                                  <NavLink className={({isActive})=> `nav-link ${isActive ? 'text-danger' : 'text-black'}`} to="/portfolios">Portfolios</NavLink>
                                </li>

                                <li className="nav-item px-3">
                                  <NavLink className={({isActive})=> `nav-link ${isActive ? 'text-danger' : 'text-black'}`} to="/contact">Contact Us</NavLink>
                                </li> 
                              </ul>
                      </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
        </>
    );
}