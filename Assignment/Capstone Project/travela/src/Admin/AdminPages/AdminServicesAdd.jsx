import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomAddData from '../../CustomHooks/UseCustomAddData'
import { toast } from 'react-toastify'

function AdminServicesAdd() {

    const { form, getdata, getsubmit } = UseCustomAddData(
        {
            id: "",
            icon: "",
            service: "",
            desc: ""
        }
        , "http://localhost:3000/services", "/adminservice")


    return (
        <div>
            <AdminHeader />
            <AdminHero title="Add Services" name="Services" />
            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-white mb-3">Add a Service</h1>
                            <form onSubmit={getsubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="service" name="service" value={form.service} onChange={getdata} placeholder="Your Service" required />
                                            <label htmlFor="service">Name Of Service</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="icon" name="icon" value={form.icon} onChange={getdata} placeholder="Your Name" required />
                                            <label htmlFor="icon">Icon [fas fa-hotel fa]</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-white border-0" placeholder="Special Request" id="desc" name='desc' value={form.desc} onChange={getdata} style={{ height: 100 }} required />
                                            <label htmlFor="description">Description of Service</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit" >Add Service</button>
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

export default AdminServicesAdd