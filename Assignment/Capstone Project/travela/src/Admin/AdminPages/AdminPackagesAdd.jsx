import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'

function AdminPackagesAdd() {

  const { form, getdata, getsubmit } = UseCustomAddData(
    {
      id: "",
      image: "",
      price: "",
      location: "",
      person: "",
      day: "",
      desc: "",
      hotel: "",
      rating: ""
    }, "http://localhost:3000/packages", "/adminpackages")

  return (
    <div>
      <AdminHeader />
      <AdminHero title="Add Packages" name="Packages" />
      <div className="container-fluid booking py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 mx-auto">
              <h1 className="text-white mb-3">Add a Package</h1>
              <form onSubmit={getsubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-white border-0" id="location" name="location" value={form.location} onChange={getdata} placeholder="Your location" required />
                      <label htmlFor="location">Name Of Location [Paris, France]</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-white border-0" id="hotel" name="hotel" value={form.hotel} onChange={getdata} placeholder="Your hotel" required />
                      <label htmlFor="hotel">Name Of Hotel [Hotel Le Meurice]</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="tel" className="form-control bg-white border-0" id="price" name="price" value={form.price} onChange={getdata} placeholder="Your price" required />
                      <label htmlFor="price"> Price [₹89,999]</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="tel" className="form-control bg-white border-0" id="person" name="person" value={form.person} onChange={getdata} placeholder="Your person" required />
                      <label htmlFor="person"> Person [How many person for visit?] </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="tel" className="form-control bg-white border-0" id="day" name="day" value={form.day} onChange={getdata} placeholder="Your day" required />
                      <label htmlFor="day"> Day [How many day of stay?]</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="url" className="form-control bg-white border-0" id="image" name="image" value={form.image} onChange={getdata} placeholder="Your image" required />
                      <label htmlFor="image">Image</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select bg-white border-0" id="rating" name="rating" value={form.rating} onChange={getdata} required >
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
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-white border-0" placeholder="Special Request" id="desc" name='desc' value={form.desc} onChange={getdata} style={{ height: 100 }} required />
                      <label htmlFor="description">Description of Package</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Package</button>
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

export default AdminPackagesAdd