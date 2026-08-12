import React, { useEffect } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'
import Newsletter from '../Common/Newsletter'
import UseCustomApiHook from '../CustomHooks/UseCustomApiHook'
import Hero from '../Common/Hero'

function Blog() {

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/blogs")

    return (
        <div>
            <Header />
            <Hero title="Our Blog" name="Blog" />

            <div>

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
                            {/* 12<div className="col-lg-4 col-md-6"> */}
                            {
                                api && api.map((data, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6">
                                            <div className="blog-item h-100">
                                                <div className="blog-img">
                                                    <div className="blog-img-inner">
                                                        <img className="img-fluid w-100 rounded-top" src={data.image} alt="Image" style={{height:"300px"}} />
                                                        <div className="blog-icon">
                                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{data.date}</small>
                                                        <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                                        <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                                    </div>
                                                </div>
                                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                                    <p className="mb-3">Posted By: {data.post} </p>
                                                    <a href="#" className="h4">{data.name}</a>
                                                    <p className="my-3 text-break">{data.desc.slice(0,80)} ...</p>
                                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* 12</div> */}
                        </div>
                    </div>
                </div>
                {/* Blog End */}
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Blog