import React from 'react'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

function AdminGuideAdd() {

    const { form, getdata, getsubmit } = UseCustomAddData(
        {
            id: "",
            name: "",
            designation: "",
            image: ""
        }, "http://localhost:3000/guide", "/adminguide")

    return (
        <div>

            <AdminHeader />
            <AdminHero title="Add Travel Guide" name="Travel Guide" />
            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-white mb-3">Add a Gallery</h1>
                            <form onSubmit={getsubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="name" name="name" value={form.name} onChange={getdata} placeholder="Your name" required />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="designation" name="designation" value={form.designation} onChange={getdata} placeholder="Your designation" required />
                                            <label htmlFor="designation">Designation [Photographer]</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" className="form-control bg-white border-0" id="image" name="image" value={form.image} onChange={getdata} placeholder="Your image" required />
                                            <label htmlFor="image">Image</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Gallery</button>
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

export default AdminGuideAdd