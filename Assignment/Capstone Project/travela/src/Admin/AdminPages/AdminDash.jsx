import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import axios from 'axios'
import { toast } from 'react-toastify'


function AdminDash() {

    useEffect(() => {
        FetchApi()
    }, [])

    const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/users")

    const [editmodel, seteditmodel] = useState(null)
    const [edit, setedit] = useState({
        // id: "",
        // name: "",
        // email: "",
        // password: "",
        status: ""
    })
    const opendata = (data) => {
        seteditmodel(data)
        setedit(data)
        console.log(data)
    }
    const editdata = async (e) => {
        e.preventDefault()
        const res = await axios.patch(`http://localhost:3000/users/${edit.id}`, edit)
        toast.success("Data Edited Successfully....")
        seteditmodel(null)
        FetchApi()
    }

    const getdata = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }
    // FetchApi()

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Dashboard" name="Dashboard" />
            {/* <h1 className='text-center my-4'> Admin Dashboard </h1> */}
            <div className="container my-5">
                <div className="card shadow border-0">
                    <div className="card-header bg-white">
                        <div className="row align-items-center">

                            <div className="col-md-12">
                                <h1 className="mb-0 py-1 text-center">Admin Dashboard</h1>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table text-center table-bordered table-hover align-items-center">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Status</th>
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
                                                        <td>{data.email}</td>
                                                        <td>{data.password}</td>
                                                        <td>{data.status}</td>
                                                        <td>
                                                            {/* <button className='btn btn-success m-1'>View</button> */}
                                                            <button className='btn btn-success m-1' data-bs-toggle="modal" data-bs-target="#editcard" onClick={() => opendata(data)}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="modal fade" id="editcard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="editcardLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="viewcardLabel"> Update User Account </h1>
                                
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p className='text-danger'>Only allowed to change status!</p>
                                <form>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <div className="form-floating border ">
                                                <input type="name" className="form-control bg-white border-0" id="name" name="name" value={edit.name} placeholder="Name" readOnly />
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <div className="form-floating border">
                                                <input type="email" className="form-control bg-white border-0" id="email" name="email" value={edit.email} placeholder="E-mail" readOnly />
                                                <label htmlFor="email">E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <div className="form-floating border">
                                                <input type="text" className="form-control bg-white border-0" id="password" name="password" value={edit.password} placeholder="Password" readOnly />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <div className="form-floating border">
                                                <select className="form-select bg-white border-0" id="status" name="status" value={edit.status} onChange={getdata} >
                                                    <option value="" hidden> -- Select Status -- </option>
                                                    <option value="block">block</option>
                                                    <option value="unblock">unblock</option>
                                                </select>
                                                <label htmlFor="status">Status</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={editdata} >Update</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => seteditmodel(null)} >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default AdminDash