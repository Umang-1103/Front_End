import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("User_ID")) {
            redirect("/")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault()

        if (form.email == "" || form.password == "") {
            toast.error("Please Field the data....")
            return false
        }

        const res = await axios(`http://localhost:3000/users?email=${form.email}`)
        console.log(res.data)

        if (res.data.length === 0) {
            toast.error("E-mail does not found")
            return false
        }
        const user = res.data[0]
        console.log(user)

        if (form.password != user.password) {
            toast.error("Password does not found")
            return false
        }

        if(user.status == "block"){
            toast.error("Account has been blocked....")
            return false
        }

        localStorage.setItem("User_ID", user.id)
        localStorage.setItem("User_Name", user.name)
        toast.success("Login Successfully!")
        redirect("/")

    }

    return (
        <div>
            <div className="container-fluid booking" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover', padding: "90px 0 90px 0" }}>
                <div className="container py-5 text-center">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-primary mb-3">Login</h1>
                            <p className="text-gray-dark mb-4">Please Enter Your E-mail and Password!</p>
                            <form onSubmit={submit}>
                                <div className="row g-3">
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
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                    </div>
                                    <div className='col-12'>
                                        <p className="text-gray-dark mb-4">
                                            Don't have an account? &nbsp;
                                            <Link to="/register" className="text-dark fw-bold">
                                                Sign Up
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

export default Login