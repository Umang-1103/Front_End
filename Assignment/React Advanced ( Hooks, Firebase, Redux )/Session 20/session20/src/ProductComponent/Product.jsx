
import { collection, deleteDoc, doc, onSnapshot, query, QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebasedb } from '../firebase';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Product() {

    const [product, setproduct] = useState([])

    const view = () => {
        const res = query(collection(firebasedb, "products"))
        const data = onSnapshot(res, (QuerySnapshot) => {
            const viewdata = QuerySnapshot.docs.map((items) => {
                return {
                    id: items.id,
                    ...items.data()
                }
            })
            setproduct(viewdata)
        })
        // return data
    }

    useEffect(() => {
        view()
    }, [])

    const deleteproduct = async (id) => {
        await deleteDoc(doc(firebasedb, "products", id))
        toast.success("Product deleted successfully!")
    }

    return (
        <div className="bg-light min-vh-100">

            {/* Header */}
            <header className="bg-white shadow-sm py-3 mb-4 position-sticky top-0 z-1">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold m-0 fs-2">Product Management</h2>

                    <Link to="/addproduct" >
                        <button className="btn btn-success text-nowrap">
                            <i className="fa-solid fa-plus me-2"></i>
                            Add Product
                        </button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="container my-5">

                <div className="card shadow border-0">
                    <div className="card-header bg-white">

                        <div className="row align-items-center">

                            <div className="col-md-12">
                                <h4 className="mb-0 py-1 text-center">All Products</h4>
                            </div>

                        </div>

                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover align-middle text-center">

                                <thead className="table-dark">
                                    <tr>
                                        <th width="70">Id</th>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th width="220">Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        product.map((data) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td>{data.id}</td>

                                                    <td>
                                                        <img src={data.image}
                                                            style={{ maxWidth: "100px" }}
                                                            alt="image"
                                                        />
                                                    </td>

                                                    <td>{data.title}</td>

                                                    <td>{data.category}</td>

                                                    <td>${data.price}</td>

                                                    <td>
                                                        <Link to="/viewproduct" state={data}>
                                                            <button className="btn btn-primary btn-sm">
                                                                <i className="fa-solid fa-eye"></i>
                                                            </button>
                                                        </Link>

                                                        <Link to="/updateproduct" state={data}>
                                                            <button className="btn btn-warning btn-sm m-2">
                                                                <i className="fa-solid fa-pen"></i>
                                                            </button>
                                                        </Link>

                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteproduct(data.id)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
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

        </div>
    );
}

export default Product;


