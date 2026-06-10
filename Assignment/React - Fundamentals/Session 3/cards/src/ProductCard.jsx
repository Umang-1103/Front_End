// Task 1
import React from 'react'
// Task 4
import PropTypes from 'prop-types';

function ProductCard({ img, productName, price }) {
    return (

        <div className="col-md-3 m-2">

            <div className="card text-center" style={{ width: "250px" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Product Name : {productName}</h5>
                    <p className="card-text">Price : $ {price}</p>
                </div>
            </div>

        </div>
    )
}

ProductCard.propTypes = {
    productName : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired
}

export default ProductCard