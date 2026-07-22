// Task 2
import React, { useContext } from 'react'
import { usercontext } from './UserContext'

function Navbar() {

    const context = useContext(usercontext)
    const {data, setdata} = context

  return (
    <div>
        <p>Username :- {data.username}</p>
        <p>Log In :- {data.login ? "yes" : "no"}</p>
    </div>
  )
}

export default Navbar