import React from 'react'

function PropsFunction({ img, title, description }) {
    return (

        <div className="col-md-4">
            <div className="card m-2">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary px-4">Buy</button>
                </div>
            </div>
        </div>

    )
}

export default PropsFunction