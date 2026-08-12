import React from 'react'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

function AdminDestinationAdd() {

    const { form, getdata, getsubmit } = UseCustomAddData(
        {
            id: "",
            image: "",
            title: "",
            category: ""
        }, "http://localhost:3000/destinations", "/admindestination")

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Add Destinations" name="Destinations" />
            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-white mb-3">Add a Destination</h1>
                            <form onSubmit={getsubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="title" name="title" value={form.title} onChange={getdata} placeholder="Your Title" required />
                                            <label htmlFor="title">Title [Berlin]</label>
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
                                            <select className="form-select bg-white border-0" id="category" name="category" value={form.category} onChange={getdata} required >
                                                <option value="" hidden> -- Select Category -- </option>
                                                {/* <summary>Click to see more</summary> */}
                                                <option value="USA ">USA</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Europe">Europe</option>
                                                <option value="China">China</option>
                                                <option value="Singapore">Singapore</option>
                                            </select>
                                            <label htmlFor="category">Category</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Destination</button>
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

export default AdminDestinationAdd