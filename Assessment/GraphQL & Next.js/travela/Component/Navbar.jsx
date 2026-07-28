'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {

    const pathname = usePathname()

    const pageactive = pathname.startsWith("/Destination") || pathname.startsWith("/Tour") 
    || pathname.startsWith("/Booking") || pathname.startsWith("/Gallery") || 
    pathname.startsWith("/Guides") || pathname.startsWith("/Testimonial")

    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#"><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2" />Register</small></a>
                            <a href="#"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small></a>
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> My Dashboard</small></a>
                                <div className="dropdown-menu rounded">
                                    <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2" /> My Profile</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2" /> Inbox</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-bell me-2" /> Notifications</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-cog me-2" /> Account Settings</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2" /> Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="#" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Travela</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link href="/" className={`nav-item nav-link ${pathname === "/" ? "active" : "" }`} >Home</Link>
                            <Link href="/About" className={`nav-item nav-link ${pathname === "/About" ? "active" : "" }`}>About</Link>
                            <Link href="/Services" className={`nav-item nav-link ${pathname === "/Services" ? "active" : "" }`} >Services</Link>
                            <Link href="/Packages" className={`nav-item nav-link ${pathname === "/Packages" ? "active" : "" }`} >Packages</Link>
                            <Link href="/Blog" className={`nav-item nav-link ${pathname === "/Blog" ? "active" : "" }`} >Blog</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className={`nav-link dropdown-toggle ${pageactive ? "active" : ""}`} data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="/Destination" className={`dropdown-item ${pathname === "/Destination" ? "active" : "" }`} >Destination</a>
                                    <a href="/Tour" className={`dropdown-item ${pathname === "/Tour" ? "active" : "" }`} >Explore Tour</a>
                                    <a href="/Booking" className={`dropdown-item ${pathname === "/Booking" ? "active" : "" }`} >Travel Booking</a>
                                    <a href="/Gallery" className={`dropdown-item ${pathname === "/Gallery" ? "active" : "" }`} >Our Gallery</a>
                                    <a href="/Guides" className={`dropdown-item ${pathname === "/Guides" ? "active" : "" }`} >Travel Guides</a>
                                    <a href="/Testimonial" className={`dropdown-item ${pathname === "/Testimonial" ? "active" : "" }`} >Testimonial</a>
                                </div>
                            </div>
                            <a href="/Contact" className={`nav-item nav-link ${pathname === "/Contact" ? "active" : "" }`}>Contact</a>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>

            </div>
            {/* <div className="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
                <div className="container">
                    <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
                        <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                        <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: 46, transform: 'translateY(-50%)' }}>Search</button>
                    </div>
                </div>
            </div> */}
            {/* Navbar & Hero End */}
        </div>

    )
}

export default Navbar