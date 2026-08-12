import React, { useEffect } from 'react'
import Header from '../Common/Header'
import Newsletter from '../Common/Newsletter'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'
import Hero from '../Common/Hero'
import UseCustomApiHook from '../CustomHooks/UseCustomApiHook'

function TravelGuides() {

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/guide")

    return (
        <div>
            <Header />
            <Hero title="Our Travel Guides" name="Travel Guides" />

            <div>

                {/* Travel Guide Start */}
                <div className="container-fluid guide py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Travel Guide</h5>
                            <h1 className="mb-0">Meet Our Guide</h1>
                        </div>
                        <div className="row g-4">
                            {
                                api && api.map((data, index) => {
                                    return (
                                        <div className="col-md-6 col-lg-3" key={data.id}>
                                            <div className="guide-item">
                                                <div className="guide-img">
                                                    <div className="guide-img-efects">
                                                        <img src={data.image} style={{width: "330px", height: "350px"}} className="img-fluid w-100 rounded-top" alt="Image" />
                                                    </div>
                                                    <div className="guide-icon rounded-pill p-2">
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                                    </div>
                                                </div>
                                                <div className="guide-title text-center rounded-bottom p-4">
                                                    <div className="guide-title-inner">
                                                        <h4 className="mt-3">{data.name}</h4>
                                                        <p className="mb-0">{data.designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Travel Guide End */}
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default TravelGuides