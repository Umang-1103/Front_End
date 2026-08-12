import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import { Link } from 'react-router-dom'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'

function AdminDestination() {

    // const [destination, setdestination] = useState([])

    // useEffect(() => {
    //     DestinationaFetchData()
    // }, [])

    // const DestinationaFetchData = async () => {
    //     const res = await axios.get("http://localhost:3000/destinations")
    //     console.log(res.data)
    //     setdestination(res.data)
    // }

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/destinations")

    const { view, ViewCard } = UseCustomCard("http://localhost:3000/destinations")

    const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData(
        {
            id: "",
            image: "",
            title: "",
            category: ""
        }, "http://localhost:3000/destinations", FetchApi)

    const { deletedata } = UseCustomDeleteData("http://localhost:3000/destinations", FetchApi)


    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Travel Destination" name="Destination" />
            <h1 className='text-center my-4'>Admin Travel Destination</h1>
            <div className="container my-5">
                <table className="table text-center my-5 table-bordered table-hover">
                    <thead>
                        <tr>
                            <th colSpan="10">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className='m-0'>Destinations Details</h2>
                                    <Link to="/admindestinationadd" className='btn btn-success fs-5 px-5 py-2'>
                                        Add Destination
                                    </Link>
                                </div>
                            </th>
                        </tr>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>{data.category}</td>
                                        <td>
                                            <img src={data.image} alt="" style={{ width: "100px" }} />
                                        </td>
                                        <td>
                                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#viewcard" onClick={() => ViewCard(data.id)} >View</button>
                                            <button className="btn btn-info m-2" data-bs-toggle="modal" data-bs-target="#editcard" onClick={() => opendata(data)} >Edit</button>
                                            <button className="btn btn-danger" onClick={() => deletedata(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="viewcard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="viewcardLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewcardLabel">Destination</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid destination">
                                <div className="container">
                                    <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                                        <h5 className="section-title px-3 py-0 mb-0">Destination</h5>
                                        <h1 className="mb-0">Popular Destination</h1>
                                    </div>
                                    <div className="tab-class text-center">
                                        <div className="tab-content">
                                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                                <div className="row g-4">
                                                    <div className="col-12" key={view.id}>
                                                        <div className="destination-img">
                                                            <img className="img-fluid rounded w-100" src={view.image} style={{ aspectRatio: "16/11", objectFit: "cover" }} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{view.title}</h4>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-1.jpg" data-lightbox="destination-1"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editcard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="editcardLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewcardLabel"> Update Destination </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 mb-3">
                                        <div className="form-floating border">
                                            <input type="text" className="form-control bg-white border-0" id="title" name="title" value={edit.title} onChange={getdata} placeholder="Your Title" required />
                                            <label htmlFor="title">Title [Berlin]</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-floating border">
                                            <input type="url" className="form-control bg-white border-0" id="image" name="image" value={edit.image} onChange={getdata} placeholder="Your image" required />
                                            <label htmlFor="image">Image</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-floating border">
                                            <select className="form-select bg-white border-0" id="category" name="category" value={edit.category} onChange={getdata} required >
                                                <option value="" hidden> -- Select Category -- </option>
                                                <option value="USA ">USA</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Europe">Europe</option>
                                                <option value="China">China</option>
                                                <option value="Singapore">Singapore</option>
                                            </select>
                                            <label htmlFor="category">Category</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={editformdata} >Update</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => seteditmodel(null)} >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDestination

