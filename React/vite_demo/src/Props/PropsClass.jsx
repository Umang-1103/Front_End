import React, { Component } from 'react'

class PropsClass extends Component {

    constructor(props) {
        super(props)
        this.data = props
    }

    render() {
        return (

            // <div>
                <div className="col-md-4">
                    <div className="card m-2">
                        <img src={this.data.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}

export default PropsClass