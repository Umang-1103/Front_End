import React, { useEffect } from 'react'
import Header from '../Common/Header'
import Newsletter from '../Common/Newsletter'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import UseCustomApiHook from '../CustomHooks/UseCustomApiHook'
import Hero from '../Common/Hero'

function TourCategory() {

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/tour")

    const national = api.filter((data, index) => {
        return data.category === "National"
    })

    const international = api.filter((data, index) => {
        return data.category === "International"
    })

    return (
        <div>

            <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/lightbox/js/lightbox.min.js"></script>
                <script src="js/main.js"></script>
            </Helmet>

            <Header />
            <Hero title="Tour Category" name="Tour" />

            <div>
                
                {/* Explore Tour Start */}
                <div className="container-fluid ExploreTour py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Explore Tour</h5>
                            <h1 className="mb-4">The World</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                        </div>
                        <div className="tab-class text-center">
                            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                        <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                        <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {/* <div className="col-md-6 col-lg-4"> */}
                                        {
                                            national && national.map((data, index) => {
                                                return (
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="national-item">
                                                            {/* <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" /> */}
                                                            <img src={data.image} className="img-fluid w-100 rounded" style={{ height: "300px" }} alt="Image" />
                                                            <div className="national-content">
                                                                <div className="national-info">
                                                                    <h5 className="text-white text-uppercase mb-2">{data.title}</h5>
                                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="national-plus-icon">
                                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* </div> */}
                                        {/* <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Holiday Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Road Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-info">15% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Historical Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Family Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-warning">50% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-6.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Beach Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="InternationalTab-2" className="tab-pane fade show p-0">
                                    {/* <div className="InternationalTour-carousel owl-carousel"> */}
                                        {
                                            // international && international.map((data, index) => {
                                            //     <div className="international-item">
                                            //         {/* <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" /> */}
                                            //         <img src={data.image} className="img-fluid w-100 rounded" alt="Image" />
                                            //         <div className="international-content">
                                            //             <div className="international-info">
                                            //                 <h5 className="text-white text-uppercase mb-2">{data.title}</h5>
                                            //                 <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                                            //                 <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>143+ Tour Places</span></a>
                                            //             </div>
                                            //         </div>
                                            //         <div className="tour-offer bg-success">30% Off</div>
                                            //         <div className="international-plus-icon">
                                            //             <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            //         </div>
                                            //     </div>
                                            // })
                                        }
                                        {/* <div className="international-item">
                                            <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Germany</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 12 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>21+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="tour-offer bg-warning">45% Off</div>
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Spain</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 9 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>133+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Japan</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>137+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="tour-offer bg-info">70% Off</div>
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">London</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 17 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>26+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                    <div className="row g-4">
                                        {/* <div className="col-md-6 col-lg-4"> */}
                                        {
                                            international && international.map((data, index) => {
                                                return (
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="international-item">
                                                            {/* <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" /> */}
                                                            <img src={data.image} className="img-fluid w-100 rounded" style={{ height: "300px" }} alt="Image" />
                                                            <div className="international-content">
                                                                <div className="international-info">
                                                                    <h5 className="text-white text-uppercase mb-2">{data.title}</h5>
                                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="international-plus-icon">
                                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* </div> */}
                                        {/* <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Holiday Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Road Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-info">15% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Historical Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Family Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-warning">50% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-6.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Beach Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Explore Tour Start */}
            </div>


            <Newsletter />
            <Footer />
        </div>
    )
}

export default TourCategory