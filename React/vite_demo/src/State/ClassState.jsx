import React, { Component } from 'react'
import IsImage from './IsImage'

class ClassState extends Component {
    constructor(){
        super()
        this.state = {
            name: "Umang",
            count: 0,
            isImage: true
        }
    }
  render() {
    return (
      <div>
        <h1>Class State</h1>
        <br />
        <h2> Hello {this.state.name} </h2>
        <button onClick={()=>this.setState({name: "Bhavesh"})}>Change Name 1</button>
        <button onClick={()=>this.setState({name: "Ketan"})}>Change Name 2</button>
        <br />
        <h2>Count :- {this.state.count}</h2>
        <button onClick={()=>this.setState({count: ++this.state.count})}>Increase</button>
        <button onClick={()=>this.setState({count: --this.state.count})}>Decrease</button>
        <button onClick={()=>this.setState({count: 0})}>Reset</button>
        <br /> <hr />
        <h2>Image :- </h2>
        <button onClick={()=>this.setState({isImage: false})}>Hide</button>
        <button onClick={()=>this.setState({isImage: true})}>Show</button>
        <button onClick={()=>this.setState({isImage: !this.state.isImage})}>Toggle</button>
        {
            (this.state.isImage) ? <IsImage/> : false
        }

      </div>
    )
  }
}

export default ClassState