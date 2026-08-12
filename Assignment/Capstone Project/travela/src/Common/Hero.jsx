import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero({title, name}) {
    
    return (
        <div>
            {/* Hero Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">{name}</li>
                    </ol>
                </div>
            </div>
            {/* Hero End */}
        </div>
    )
}

export default Hero