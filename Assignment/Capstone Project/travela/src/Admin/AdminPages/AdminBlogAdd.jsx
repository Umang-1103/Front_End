import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminBlogAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        post: "",
        desc: "",
        date: "",
        image: ""

    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const onsubmit = async(e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:3000/blogs", form)
        setform({
            id: "",
            name: "",
            post: "",
            desc: "",
            date: "",
            image: ""
        })
        toast.success("Data Added Successfully....")
        redirect("/adminblog")
    }

  return (
    <div>
        <AdminHeader/>
        <AdminHero title="Add Blog" name="Blog" />
        <div className="container-fluid booking py-5">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 mx-auto">
                                <h1 className="text-white mb-3">Add Blog</h1>
                                
                                <form onSubmit={onsubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-floating">
                                            <input type="text" className="form-control bg-white border-0" id="name" name="name" value={form.name} onChange={getchange} placeholder="Your Name" required />
                                                <label htmlFor="name">Name Of The Trip [Cultural Trip]</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating"> 
                                                <input type="text" className="form-control bg-white border-0" id="post" name="post" value={form.post} onChange={getchange} placeholder="Your Email" required />
                                                <label htmlFor="post">Posted By Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-white border-0" id="date" name='date' value={form.date} onChange={getchange} placeholder="Date" data-target="#date3" data-toggle="datetimepicker" required />
                                                <label htmlFor="date">Date [20 Jan 2022]</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="url" className="form-control bg-white border-0" id="image" name='image' value={form.image} onChange={getchange} placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" required />
                                                <label htmlFor="date">Image</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-white border-0" placeholder="Special Request" id="desc" name='desc' value={form.desc} onChange={getchange} style={{ height: 100 }} required />
                                                <label htmlFor="desc">Description About Trip</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Blog</button>
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

export default AdminBlogAdd