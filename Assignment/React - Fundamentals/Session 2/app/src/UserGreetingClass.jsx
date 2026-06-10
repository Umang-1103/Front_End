// Task 3
import React, { Component } from 'react'

class UserGreetingClass extends Component {
  
  render() {
    return (
      <div>
        <h1>Hello, {this.props.username}!</h1>
      </div>
    )
  }
}

export default UserGreetingClass