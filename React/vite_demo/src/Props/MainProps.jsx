import React, { Component } from 'react'
import PropsClass from './PropsClass'
import PropsFunction from './PropsFunction'

export class MainProps extends Component {
    render() {
        return (
            <div>
                {/* <div className="container">
                    <h1>This is Class Props</h1>
                    <div className="row">
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 4" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                        <PropsClass img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 6" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam? " />
                    </div>
                </div> */}
                <div className="container">
                    <h1>This is Function Props</h1>
                    <div className="row">
                        <PropsFunction img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam?" />
                        <PropsFunction img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam?" />
                        <PropsFunction img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam?" />
                        <PropsFunction img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 4" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam?" />
                        <PropsFunction img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" title="Car 5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla doloremque itaque numquam?" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainProps