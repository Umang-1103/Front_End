// 
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebasedb } from '../firebase';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateProduct() {

    const location = useLocation()
    const redirect = useNavigate()

    const [form, setForm] = useState(location.state);
    console.log(location.state)
    // console.log(redirect)
    const getData = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };



    const submitData = async (e) => {
        e.preventDefault();
        await updateDoc(doc(firebasedb, "products", form.id),form)
        toast.success("Product updated successfully!")
        redirect("/")
    };

    // const submitData = async (id) => {
    //     e.preventDefault();
    //     await updateDoc(doc(firebasedb, "products", id),form)
    //     toast.success("Product updated successfully!")
    //     redirect("/")
    // };

    return (
        <div className="bg-light py-5">

            <div className="container my-2">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0">

                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Edit Product</h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={submitData}>

                                    <div className="row">
                                        {/* Product Name */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Product Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Product Name"
                                                name="title"
                                                value={form.title}
                                                onChange={getData}
                                            />
                                        </div>

                                        {/* Category */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Category
                                            </label>

                                            <select
                                                className="form-select"
                                                name="category"
                                                value={form.category}
                                                onChange={getData}
                                            >
                                                <option value="">Select Category</option>
                                                <option>Mobile</option>
                                                <option>Laptop</option>
                                                <option>Watch</option>
                                                <option>Accessories</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="row">
                                        {/* Price */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Price
                                            </label>

                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter Price"
                                                name="price"
                                                value={form.price}
                                                onChange={getData}
                                            />
                                        </div>

                                        {/* Image URL */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Product Image URL
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="https://example.com/image.jpg"
                                                name="image"
                                                value={form.image}
                                                onChange={getData}
                                            />
                                        </div>

                                    </div>


                                    {/* Description */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Enter Product Description"
                                            name="desc"
                                            value={form.desc}
                                            onChange={getData}
                                        ></textarea>
                                    </div>

                                    {/* Buttons */}
                                    <div className="text-end">

                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >
                                            <i className="fa-solid fa-plus me-2"></i>
                                            Edit Product
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default UpdateProduct;