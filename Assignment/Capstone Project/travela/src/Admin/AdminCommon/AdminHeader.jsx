import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminHeader() {

    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Admin_ID")) {
            redirect("/adminlogin")
        }
    })

    const logout = () => {
        localStorage.removeItem("Admin_ID")
        localStorage.removeItem("Admin_Name")
        toast.success("Logout successfully!")
        redirect("/adminlogin")
    }

    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>

                            {
                                (() => {
                                    if (localStorage.getItem("Admin_ID")) {
                                        return (
                                            // <Link>
                                            <small className="me-3 text-light"><i className="fa fa-user me-2" />Hello {localStorage.getItem("Admin_Name")}</small>
                                            // </Link>
                                        )
                                    }
                                })()
                            }

                            {
                                (
                                    () => {
                                        if (localStorage.getItem("Admin_ID")) {
                                            return (
                                                <Link>
                                                    <small className="me-3 text-light" onClick={logout}><i className="fas fa-power-off me-2" />Log Out</small>
                                                </Link>
                                            )
                                        }
                                        else {
                                            <Link to="/adminlogin">
                                                <small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small>
                                            </Link>
                                        }
                                    }
                                )()
                            }

                            {/* <div className="dropdown">
                                <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> My Dashboard</small></a>
                                <div className="dropdown-menu rounded">
                                    <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2" /> My Profile</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2" /> Inbox</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-bell me-2" /> Notifications</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-cog me-2" /> Account Settings</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2" /> Log Out</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Dashboard</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/dash" className="nav-item nav-link">Home</NavLink>
                            {/* <NavLink to="/adminabout" className="nav-item nav-link">About</NavLink> */}
                            {/* <NavLink to="/adminservice" className="nav-item nav-link">Services</NavLink> */}
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/adminservice" className="dropdown-item">Manage Services</NavLink>
                                    <NavLink to="/adminserviceadd" className="dropdown-item">Add Services</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Packages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/adminpackages" className="dropdown-item">Manage Packages</NavLink>
                                    <NavLink to="/adminpackagesadd" className="dropdown-item">Add Packages</NavLink>
                                </div>
                            </div>
                            {/* <NavLink to="/adminpackages" className="nav-item nav-link">Packages</NavLink> */}
                            {/* <NavLink to="/adminblog" className="nav-item nav-link">Blog</NavLink> */}
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tour</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/admintour" className="dropdown-item">Tour Manage</NavLink>
                                    <NavLink to="/admintouradd" className="dropdown-item">Add Tour</NavLink>
                                </div>
                            </div> */}
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/adminblog" className="dropdown-item">Blog Manage</NavLink>
                                    <NavLink to="/adminblogadd" className="dropdown-item">Add Blog</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/admindestination" className="dropdown-item">Manage Destination</NavLink>
                                    <NavLink to="/admintour" className="dropdown-item">Manage Tour</NavLink>

                                    {/* <NavLink to="/admintour" className="dropdown-item">Manage Tour</NavLink> */}
                                    {/* <NavLink to="/adminbooking" className="dropdown-item">Travel Booking</NavLink> */}
                                    
                                    <NavLink to="/admingallery" className="dropdown-item">Manage Gallery</NavLink>
                                    <NavLink to="/adminguide" className="dropdown-item">Manage Travel Guides</NavLink>
                                    <NavLink to="/admintestimonial" className="dropdown-item">Manage Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/admincontact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </div>
    )
}

export default AdminHeader