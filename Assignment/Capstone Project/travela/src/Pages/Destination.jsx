import React, { useEffect } from 'react'
import Header from '../Common/Header'
import Newsletter from '../Common/Newsletter'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'
import UseCustomApiHook from '../CustomHooks/UseCustomApiHook'
import Hero from '../Common/Hero'

function Destination() {

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/destinations")

    const destinationdata = (category) => {
        return api.filter((data, index) => {
            return data.category === category
        })
    }

    return (
        <div>
            <Header />
            <Hero title="Travel Destination" name="Destination" />

            <div>
                
                {/* Destination Start */}
                <div className="container-fluid destination py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Destination</h5>
                            <h1 className="mb-0">Popular Destination</h1>
                        </div>
                        <div className="tab-class text-center">
                            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{ width: 150 }}>All</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{ width: 150 }}>USA</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{ width: 150 }}>Canada</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{ width: 150 }}>Europe</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{ width: 150 }}>China</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                        <span className="text-dark" style={{ width: 150 }}>Singapore</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {
                                            api && api.map((data, index) => {
                                                return (
                                                    <div className="col-lg-4" key={data.id}>
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-1.jpg" data-lightbox="destination-1"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        {
                                            destinationdata("USA") && destinationdata("USA").map((data, index) => {
                                                return (
                                                    <div className="col-lg-4">
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        {
                                            destinationdata("Canada") && destinationdata("Canada").map((data, index) => {
                                                return (
                                                    <div className="col-lg-4">
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        {
                                            destinationdata("Europe") && destinationdata("Europe").map((data, index) => {
                                                return (
                                                    <div className="col-lg-4">
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="tab-5" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        {
                                            destinationdata("China") && destinationdata("China").map((data, index) => {
                                                return (
                                                    <div className="col-lg-4">
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="tab-6" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        {
                                            destinationdata("Singapore") && destinationdata("Singapore").map((data, index) => {
                                                return (
                                                    <div className="col-lg-4">
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={data.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Destination End */}
            </div>


            <Newsletter />
            <Footer />
        </div>
    )
}

export default Destination