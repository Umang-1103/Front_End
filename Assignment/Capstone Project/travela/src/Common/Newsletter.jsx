import React from 'react'

function Newsletter() {
    return (
        <div>
            {/* Subscribe Start */}
            <div className="container-fluid subscribe py-5">
                <div className="container text-center py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                        <h5 className="subscribe-title px-3">Subscribe</h5>
                        <h1 className="text-white mb-4">Our Newsletter</h1>
                        <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                        </p>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Subscribe End */}
        </div>
    )
}

export default Newsletter