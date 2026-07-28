import React from 'react'
import Navbar from '../../../Component/Navbar'
import Footer from '../../../Component/Footer'

export default function page() {
    return (
        <div>
            <Navbar />

            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">Our Blog</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Blog</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
                {/* Blog Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Our Blog</h5>
                            <h1 className="mb-4">Popular Travel Blogs</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
                            </p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-1.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-2.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-3.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe End */}
            </div>


            <Footer />
        </div>
    )
}
