import React, { useEffect } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import { Link } from 'react-router-dom'
import UseCustomCard from '../../CustomHooks/UseCustomCard'
import UseCustomEditData from '../../CustomHooks/UseCustomEditData'
import UseCustomDeleteData from '../../CustomHooks/UseCustomDeleteData'

function AdminPackages() {

  useEffect(() => {
    FetchApi()
  }, [])

  const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/packages")

  const { view, ViewCard } = UseCustomCard("http://localhost:3000/packages")

  const { editmodel, edit, opendata, editformdata, getdata } = UseCustomEditData(
    {
      "id": "",
      "image": "",
      "price": "",
      "location": "",
      "person": "",
      "day": "",
      "desc": "",
      "hotel": "",
      "rating": ""
    }, "http://localhost:3000/packages", FetchApi)

  const {deletedata} = UseCustomDeleteData("http://localhost:3000/packages", FetchApi)

  return (
    <div>
      <AdminHeader />
      <AdminHero title="Admin Packages" name="Packages" />
      <div className="container py-5 table-responsive">
        <table className="table text-center my-5 table-bordered table-hover">
          <thead>
            <tr>
              <th colSpan="10">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className='m-0'>Packages Details</h2>
                  <Link to="/adminpackagesadd" className='btn btn-success fs-5 px-5 py-2'>
                    Add Package
                  </Link>
                </div>
              </th>
            </tr>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">Location</th>
              <th scope="col">Hotel</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Person</th>
              <th scope="col">Day</th>
              <th scope="col">Description</th>
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
                    <td>{data.location}</td>
                    <td>{data.hotel}</td>
                    <td>{data.price}</td>
                    <td>{data.rating}</td>
                    <td>{data.person} Person</td>
                    <td>{data.day} Day</td>
                    <td>{data.desc}</td>
                    <td>
                      <img src={data.image} alt="" style={{ width: "100px" }} />
                    </td>
                    <td>
                      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#viewcard" onClick={() => ViewCard(data.id)} >View</button>
                      <button className='btn btn-info m-2' data-bs-toggle="modal" data-bs-target="#editcard" onClick={() => opendata(data)} >Edit</button>
                      <button className='btn btn-danger' onClick={() => deletedata(data.id)} >Delete</button>
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
              <h1 className="modal-title fs-5" id="viewcardLabel">Package</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container-fluid packages ">
                <div className="container py-2">
                  <div className="mx-auto text-center mb-4" style={{ maxWidth: 900 }}>
                    <h5 className="section-title px-3">Packages</h5>
                  </div>
                  {/* <div className="packages-carousel owl-carousel"> */}
                  <div className="row g-4 justify-content-center">
                    
                          <div className="packages-item col-12" key={view.id}>
                            <div className="packages-img">
                              <img src={view.image} className="img-fluid w-100 rounded-top" alt="Image" />
                              <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />{view.location}</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />{view.day} days</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />{view.person} Person</small>
                              </div>
                              <div className="packages-price py-2 px-3">{view.price}</div>
                            </div>
                            <div className="packages-content bg-light">
                              <div className="p-4 pb-0">
                                <h5 className="mb-0">{view.location}</h5>
                                <small className="text-uppercase">{view.hotel}</small>
                                <div className="mb-3">
                                  <span style={{ fontSize: "16px", color: "#13357b" }}>{view.rating}</span>
                                  {/* <small className="fa fa-star text-primary" />
                                                      <small className="fa fa-star text-primary" />
                                                      <small className="fa fa-star text-primary" />
                                                      <small className="fa fa-star text-primary" />
                                                      <small className="fa fa-star text-primary" /> */}
                                </div>
                                <p className="mb-4">{view?.desc?.slice(0, 100)} ...</p>
                              </div>
                              <div className="row bg-primary rounded-bottom mx-0">
                                <div className="col-6 text-start px-0">
                                  <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                </div>
                                <div className="col-6 text-end px-0">
                                  <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
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
              <h1 className="modal-title fs-5" id="viewcardLabel"> Update Package </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="text" className="form-control bg-white border-0" id="location" name="location" value={edit.location} onChange={getdata} placeholder="Your location" />
                      <label htmlFor="location">Name Of Location [Paris, France]</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="text" className="form-control bg-white border-0" id="hotel" name="hotel" value={edit.hotel} onChange={getdata} placeholder="Your hotel" />
                      <label htmlFor="hotel">Name Of Hotel [Hotel Le Meurice]</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="tel" className="form-control bg-white border-0" id="price" name="price" value={edit.price} onChange={getdata} placeholder="Your price" />
                      <label htmlFor="price"> Price [₹89,999]</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="tel" className="form-control bg-white border-0" id="person" name="person" value={edit.person} onChange={getdata} placeholder="Your person" />
                      <label htmlFor="person"> Person [How many person for visit?] </label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="tel" className="form-control bg-white border-0" id="day" name="day" value={edit.day} onChange={getdata} placeholder="Your day" />
                      <label htmlFor="day"> Day [How many day of stay?]</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <input type="url" className="form-control bg-white border-0" id="image" name="image" value={edit.image} onChange={getdata} placeholder="Your image" />
                      <label htmlFor="image">Image</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <select className="form-select bg-white border-0" id="rating" name="rating" value={edit.rating} onChange={getdata} >
                        <option value="" hidden> -- Select Rating -- </option>
                        {/* <summary>Click to see more</summary> */}
                        <option value="★☆☆☆☆ ">★☆☆☆☆</option>
                        <option value="★★☆☆☆">★★☆☆☆</option>
                        <option value="★★★☆☆ ">★★★☆☆</option>
                        <option value="★★★★☆">★★★★☆</option>
                        <option value="★★★★★ ">★★★★★</option>
                      </select>
                      <label htmlFor="rating">Rating</label>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="form-floating border">
                      <textarea className="form-control bg-white border-0" placeholder="Special Request" id="desc" name='desc' value={edit.desc} onChange={getdata} style={{ height: 100 }} />
                      <label htmlFor="description">Description of Package</label>
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

export default AdminPackages