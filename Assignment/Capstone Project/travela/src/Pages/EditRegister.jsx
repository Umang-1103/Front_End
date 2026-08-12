import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../Common/Header'
import Hero from '../Common/Hero'

function EditRegister() {

    const redirect = useNavigate()

    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("User_ID")}`)
        console.log(res.data)
        setedit(res.data)
    }

    const getchange = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const update = async (e) => {
        e.preventDefault()
        
        const res = await axios.put(`http://localhost:3000/users/${edit.id}`, edit)
        setedit({
            id: "",
            name: "",
            email: "",
            password: ""
        })
        redirect("/")
        localStorage.setItem("User_Name",edit.name)
        toast.success("Profile update successfully!")
    }

    return (
        <div>
            <Header/>
            <Hero title="Profile" name="Profile" />
            <div className="container-fluid booking" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover', padding: "90px 0 90px 0" }}>
                <div className="container py-5 text-center">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-primary mb-3">Profile Update</h1>
                            {/* <p className="text-gray-dark mb-4">Please Enter Your E-mail and Password!</p> */}
                            <form onSubmit={update}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="name" className="form-control bg-white border-0" id="name" name="name" value={edit.name} onChange={getchange} placeholder="Name" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-white border-0" id="email" name="email" value={edit.email} onChange={getchange} placeholder="E-mail" />
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control bg-white border-0" id="password" name="password" value={edit.password} onChange={getchange} placeholder="Password" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Update Profile</button>
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

export default EditRegister