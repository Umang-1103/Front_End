import React, { useEffect } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import { Link } from 'react-router-dom'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'

function AdminGuide() {

  useEffect(() => {
    FetchApi()
  }, [])

  const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/guide")

  const { view, ViewCard } = UseCustomCard("http://localhost:3000/guide")

  const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData(
    {
      id: "",
      name: "",
      designation: "",
      image: ""
    }, "http://localhost:3000/guide", FetchApi)

  const { deletedata } = UseCustomDeleteData("http://localhost:3000/guide", FetchApi)

  return (
    <div>
      <AdminHeader />
      <AdminHero title="Admin Tour Guide" name="Guide" />
      <h1 className='text-center my-4'>Admin Travel Guide</h1>
      <div className="container my-5">
        <table className="table table-bordered table-hover text-center">
          <thead>
            <tr>
              <th colSpan="10">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className='m-0'>Travel Guide Details</h2>
                  <Link to="/adminguideadd" className='btn btn-success fs-5 px-5 py-2'>
                    Add Guide
                  </Link>
                </div>
              </th>
            </tr>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
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
                    <td>{data.name}</td>
                    <td>{data.designation}</td>
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
              <h1 className="modal-title fs-5" id="viewcardLabel">Travel Guide</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container-fluid guide">
                <div className="container py-2">
                  <div className="mx-auto text-center mb-4" style={{ maxWidth: 900 }}>
                    <h5 className="section-title px-3">Travel Guide</h5>
                    <h1 className="mb-0">Meet Our Guide</h1>
                  </div>
                  <div className="row g-4 justify-content-center" >
                          <div className="col-9" key={view.id}>
                            <div className="guide-item">
                              <div className="guide-img">
                                <div className="guide-img-efects">
                                  <img src={view.image} style={{ width: "330px", height: "350px" }} className="img-fluid w-100 rounded-top" alt="Image" />
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
                                  <h4 className="mt-3">{view.name}</h4>
                                  <p className="mb-0">{view.designation}</p>
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
                      <input type="text" className="form-control bg-white border-0" id="name" name="name" value={edit.name} onChange={getdata} placeholder="Your name" required />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-floating border">
                      <input type="text" className="form-control bg-white border-0" id="designation" name="designation" value={edit.designation} onChange={getdata} placeholder="Your designation" required />
                      <label htmlFor="designation">Designation [Photographer]</label>
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

export default AdminGuide