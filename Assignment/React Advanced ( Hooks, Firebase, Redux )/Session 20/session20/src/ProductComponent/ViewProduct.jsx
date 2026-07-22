import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ViewProduct() {

    const location = useLocation();
    const redirect = useNavigate();

    const product = location.state;


    if (!product) {
        return (
            <div className="container mt-5">
                <h3>No Product Found</h3>
            </div>
        );
    }


    return (
        <div className="bg-light min-vh-100 py-5">

            <div className="container">

                <div className="card shadow border-0">

                    <div className="card-header bg-primary text-white">
                        <h3 className="mb-0 py-1">
                            Product Details
                        </h3>
                    </div>


                    <div className="card-body">

                        <div className="row align-items-center">


                            <div className="col-md-5 text-center">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight:"300px"
                                    }}
                                />

                            </div>


                            <div className="col-md-7">

                                <h2>
                                    {product.title}
                                </h2>


                                <p>
                                    <b>Category:</b> {product.category}
                                </p>


                                <p>
                                    <b>Price:</b> ${product.price}
                                </p>


                                <p>
                                    <b>Description:</b>
                                    <br/>
                                    {product.desc}
                                </p>


                                <button
                                    className="btn btn-dark px-3 pe-4 py-2 fs-5"
                                    onClick={() => redirect("/")}
                                >
                                    <i className='fa-solid fa-arrow-left me-2' />
                                    Back
                                </button>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ViewProduct;