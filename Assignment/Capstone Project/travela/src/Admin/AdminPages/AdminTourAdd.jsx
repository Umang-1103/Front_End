import React, { useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'
import { toast } from 'react-toastify'

function AdminTourAdd() {

    // const redirect = useNavigate()

    // const [form, setform] = useState({
    //     id: "",
    //     title: "",
    //     image: "",
    //     category: ""
    // })

    // const getdata = (e) => {
    //     setform({
    //         ...form,
    //         id: new Date().getDate().toString(),
    //         [e.target.name] : e.target.value
    //     })
    // }

    // const submittour = async(e) => {
    //     e.preventDefault()
    //     const res = await axios.post("http://localhost:3000/tour", form)
    //     setform({
    //         id: "",
    //         title: "",
    //         image: "",
    //         category: ""
    //     })
    //     redirect("/admintour")

    const {form, getdata, getsubmit} = UseCustomAddData({
        id: "",
        title: "",
        image: "",
        category: ""
    }, "http://localhost:3000/tour", "/admintour" )
    // toast.success("Data Added Successfully....")

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Add Tour" name="Tour" />
            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={getsubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="title" name="title" value={form.title} onChange={getdata} placeholder="Your Name" />
                                            <label htmlFor="title">Title [Cruise Tour / France]</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" className="form-control bg-white border-0" id="image" name="image" value={form.image} onChange={getdata} placeholder="Your Email" />
                                            <label htmlFor="image">Image</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select bg-white border-0" id="category" name="category" value={form.category} onChange={getdata} >
                                                <option value="" hidden> -- Select Category -- </option>
                                                {/* <summary>Click to see more</summary> */}
                                                <option value="National">National</option>
                                                <option value="International">International</option>
                                            </select>
                                            <label htmlFor="category">Category</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTourAdd