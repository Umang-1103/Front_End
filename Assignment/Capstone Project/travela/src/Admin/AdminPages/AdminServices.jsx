import React, { useEffect } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import { Link } from 'react-router-dom'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'

function AdminServices() {

  useEffect(() => {
    FetchApi()
  }, [])

  const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/services")

  const { view, ViewCard } = UseCustomCard("http://localhost:3000/services")

  const { deletedata } = UseCustomDeleteData("http://localhost:3000/services", FetchApi)

  const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData(
    {
      id: "",
      icon: "",
      service: "",
      desc: ""
    }, "http://localhost:3000/services", FetchApi)

  return (
    <div>
      <AdminHeader />
      <AdminHero title="Admin Services" name="Services" />
      <h2 className='text-center my-4'>Admin Services</h2>
      <div className="container my-5 table-responsive">
        <table className="table text-center table-bordered table-hover">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className='m-0'>Services Details</h2>
                  <Link to="/adminserviceadd" className='btn btn-success fs-5 px-5 py-2'>
                    Add Service
                  </Link>
                </div>
              </th>
            </tr>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">Services</th>
              <th scope="col">Description</th>
              <th scope="col">Icon</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              api && api.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.service}</td>
                    <td style={{ width: "400px" }}>{data.desc}</td>
                    <td>
                      <i className={`${data.icon} fa-4x text-primary`} />
                    </td>
                    <td>
                      <button className=' btn btn-success' data-bs-toggle="modal" data-bs-target="#viewcard" onClick={() => ViewCard(data.id)}>View</button>
                      <button className=' btn btn-info m-2' data-bs-toggle="modal" data-bs-target="#editcard" onClick={() => opendata(data)} >Edit</button>
                      <button className=' btn btn-danger' onClick={() => deletedata(data.id)} >Delete</button>
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
              <h1 className="modal-title fs-5" id="viewcardLabel">Service</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container-fluid bg-light service py-5">
                <div className="container py-5">
                  <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                    <h5 className="section-title px-3">Searvices</h5>
                    {/* <h1 className="mb-0">Our Services</h1> */}
                  </div>
                  <div className="row g-4">
                    <div className="col-12" key={view.id}>
                      <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">

                        <div className="service-icon p-4">
                          <i className={`${view.icon} fa-4x text-primary`} />
                        </div>
                        <div className="service-content">
                          <h5 className="mb-4">{view.service}</h5>
                          <p className="mb-0">{view?.desc?.slice(0, 100)}...</p>
                          {/* <p className="mb-0">{view.desc}</p> */}
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
              <h1 className="modal-title fs-5" id="viewcardLabel"> Update Service </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3">
                  <div className="col-12 mb-3">
                    <div className="form-floating border">
                      <input type="text" className="form-control bg-white border-0" id="service" name="service" value={edit.service} onChange={getdata} placeholder="Your Service" required />
                      <label htmlFor="service">Name Of Service</label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-floating border">
                      <input type="text" className="form-control bg-white border-0" id="icon" name="icon" value={edit.icon} onChange={getdata} placeholder="Your Name" required />
                      <label htmlFor="icon">Icon [fas fa-hotel fa]</label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-floating border">
                      <textarea className="form-control bg-white border-0" placeholder="Special Request" id="desc" name='desc' value={edit.desc} onChange={getdata} style={{ height: 100 }} required />
                      <label htmlFor="description">Description of Service</label>
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

export default AdminServices