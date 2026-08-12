import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import { Link } from 'react-router-dom'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'

function AdminGallery() {

    // const [gallery, setgallery] = useState([])

    // useEffect(() => {
    //     GalleryFetchData()
    // }, [])

    // const GalleryFetchData = async () => {
    //     const res = await axios.get("http://localhost:3000/gallery")
    //     console.log(res.data)
    //     setgallery(res.data)
    // }

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/gallery")

    const { view, ViewCard } = UseCustomCard("http://localhost:3000/gallery")

    const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData(
        {
            id: "",
            image: "",
            title: ""
        }, "http://localhost:3000/gallery", FetchApi)

    const { deletedata } = UseCustomDeleteData("http://localhost:3000/gallery", FetchApi)

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Gallery" name="Gallery" />
            <h1 className='text-center my-4'>Admin Gallery</h1>
            <div className="container my-5">
                <table className="table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th colSpan="10">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className='m-0'>Gallery Details</h2>
                                    <Link to="/admingalleryadd" className='btn btn-success fs-5 px-5 py-2'>
                                        Add Gallery
                                    </Link>
                                </div>
                            </th>
                        </tr>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
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
                            <h1 className="modal-title fs-5" id="viewcardLabel">Gallery</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid gallery py-2">
                                <div className="mx-auto text-center mb-2" style={{ maxWidth: 900 }}>
                                    <h5 className="section-title px-3">Our Gallery</h5>
                                </div>
                                <div className="tab-class text-center">
                                    <div className="tab-content">
                                        <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                                            <div className="row g-2">
                                                <div className="col-12">
                                                    <div className="gallery-item h-100">
                                                        <img src={view.image} className="img-fluid w-100 h-100 rounded" alt="Image" />
                                                        <div className="gallery-content">
                                                            <div className="gallery-info">
                                                                <h5 className="text-white text-uppercase mb-2">{view.title}</h5>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="gallery-plus-icon">
                                                            <a href="img/gallery-1.jpg" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
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
                            <h1 className="modal-title fs-5" id="viewcardLabel"> Update Gallery </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 mb-3">
                                        <div className="form-floating border">
                                            <select className="form-select bg-white border-0" id="title" name="title" value={edit.title} onChange={getdata} required >
                                                <option value="" hidden> -- Select Tour -- </option>
                                                {/* <summary>Click to see more</summary> */}
                                                <option value="World Tour">World Tour</option>
                                                <option value="Ocean Tour">Ocean Tour</option>
                                                <option value="Summer Tour">Summer Tour</option>
                                                <option value="Sport Tour">Sport Tour</option>
                                            </select>
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-floating border">
                                            <input type="url" className="form-control bg-white border-0" id="image" name="image" value={edit.image} onChange={getdata} placeholder="Your image" required />
                                            <label htmlFor="image">Image</label>
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

export default AdminGallery