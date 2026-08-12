import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const submit = async (e) => {
        e.preventDefault()

        if (form.name == "" || form.email == "" || form.password == "") {
            toast.error("Please Field the data....")
            return false
        }

        const res = await axios.post("http://localhost:3000/users", form)
        toast.success("Register Successfully!")
        redirect("/login")
        setform({
            id: "",
            name: "",
            email: "",
            password: "",
            status: ""
        })

    }

    return (
        <div>
            <div className="container-fluid booking" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover', padding: "90px 0 90px 0" }}>
                <div className="container py-5 text-center">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-primary mb-3">Sign Up</h1>
                            {/* <p className="text-gray-dark mb-4">Please Enter Your E-mail and Password!</p> */}
                            <form onSubmit={submit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="name" className="form-control bg-white border-0" id="name" name="name" value={form.name} onChange={getchange} placeholder="Name" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-white border-0" id="email" name="email" value={form.email} onChange={getchange} placeholder="E-mail" />
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control bg-white border-0" id="password" name="password" value={form.password} onChange={getchange} placeholder="Password" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                                    </div>
                                    <div className='col-12'>
                                        <p className="text-gray-dark mb-4">
                                            already have an account? &nbsp;
                                            <Link to="/login" className="text-dark fw-bold">
                                                Sign In
                                            </Link>
                                        </p>
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

export default Register