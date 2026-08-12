import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import axios from 'axios'
import { toast } from 'react-toastify'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import { Link, useNavigate } from 'react-router-dom'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'

function AdminTour() {

  useEffect(() => {
    FetchApi()
  }, [])

  const redirect = useNavigate()

  const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/tour")

  const { view, ViewCard } = UseCustomCard("http://localhost:3000/tour")

  const { deletedata } = UseCustomDeleteData("http://localhost:3000/tour", FetchApi)

  const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData({
    id: "",
    title: "",
    image: "",
    category: ""
  },
    "http://localhost:3000/tour",
    FetchApi)

  // const tour = (category) => {
  //   return api.filter((data, index) => {
  //   return data.category === category
  // })
  // } 

  // const national = api.filter((data, index) => {
  //   return data.category === "National"
  // })

  // const international = api.filter((data, index) => {
  //   return data.category === "International"
  // })

  // const deletedata = async(id) => {
  //   const res = await axios.delete(`http://localhost:3000/tour/${id}`)
  //   console.log(res.data)
  //   toast.success("Data Deleted Successfully....")
  //   FetchApi()
  // }

  // const [editmodel, seteditmodel] = useState(null)
  // const [edit, setedit] = useState({
  //   id: "",
  //   title: "",
  //   image: "",
  //   category: ""
  // })

  // const opendata = (data) => {
  //   seteditmodel(data)
  //   setedit(data)
  //   console.log(data)
  // }

  // const editdata = async (e) => {
  //   e.preventDefault()
  //   const res = await axios.put(`http://localhost:3000/tour/${edit.id}`, edit)
  //   toast.success("Data Edited Successfully....")
  //   seteditmodel(null)
  //   FetchApi()
  // }

  // const getdata = (e) => {
  //   setedit({
  //     ...edit,
  //     [e.target.name]: e.target.value
  //   })
  // }


  return (
    <div>
      <AdminHeader />
      <AdminHero title="Admin Tour Category" name="Tour" />
      {/* <h1 className='text-center my-4'>Admin Tour Categoty</h1> */}

      <div className="container my-5 table-responsive">
        <table className="table text-center table-bordered table-hover">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className='m-0'>Tour Details</h2>
                  <Link to="/admintouradd" className='btn btn-success fs-5 px-5 py-2'>
                    Add Tour
                  </Link>
                </div>
              </th>
            </tr>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">
                Action
              </th>
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
                    <td><img src={data.image} alt="" style={{ width: "100px" }} /></td>
                    <td>
                      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#viewcard" onClick={() => ViewCard(data.id)}>View</button>



                      <button className='btn btn-info m-2' data-bs-toggle="modal" data-bs-target="#editdatamodel" onClick={() => opendata(data)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => deletedata(data.id)}>Delete</button>
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
              <h1 className="modal-title fs-5" id="viewcardLabel">Tour Category</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container-fluid ExploreTour py-2">
                <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-md-12">
                      <h3>{view.category}</h3>
                      <div className="national-item">
                        {/* <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" /> */}
                        <img src={view.image} className="img-fluid w-100 rounded" style={{ height: "300px" }} alt="Image" />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">{view.title}</h5>
                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
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

      <div className="modal fade" id="editdatamodel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="editdatamodelLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title">Update Tour</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="col-12 mb-3">
                  <div className="form-floating border">
                    <input type="text" className="form-control bg-white border-0" id="title" name="title" value={edit.title} onChange={getdata} placeholder="Your Name" />
                    <label htmlFor="title">Title</label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-floating border">
                    <input type="url" className="form-control bg-white border-0" id="image" name="image" value={edit.image} onChange={getdata} placeholder="Your Email" />
                    <label htmlFor="image">Image</label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-floating border">
                    <select className="form-select bg-white border-0" id="category" name="category" value={edit.category} onChange={getdata} >
                      <option value="" hidden> -- Select Category -- </option>
                      <option value="National">National</option>
                      <option value="International">International</option>
                    </select>
                    <label htmlFor="category">Category</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={editformdata} >Update</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => seteditmodel(null)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default AdminTour
