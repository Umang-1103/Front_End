import React from 'react'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

function AdminGalleryAdd() {

    const { form, getdata, getsubmit } = UseCustomAddData(
        {
            id: "",
            image: "",
            title: "",
        }, "http://localhost:3000/gallery", "/admingallery")

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Add Gallery" name="Gallery" />
            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-white mb-3">Add a Gallery</h1>
                            <form onSubmit={getsubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select bg-white border-0" id="title" name="title" value={form.title} onChange={getdata} required >
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

export default AdminGalleryAdd