// Task 2
import React, { useRef, useState } from 'react'

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userref = useRef(null)

  return (
    <div>
        <form action="" onSubmit={
            (e) => {
                e.preventDefault()
                console.log(`Username :- ${username} \nPassword :- ${password}`)
                setUsername("")
                setPassword("")
                userref.current.focus()
            }
        }>
            <br/>
            <div>
                <label htmlFor="username">Username :- </label>
                <input type="text" ref={userref} value={username} placeholder='Enter Your Username' onChange={(e) => setUsername(e.target.value)} required /> 
            </div>
            <br/>
            <div>
                <label htmlFor="password">Password :- </label>
                <input type="password" value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required /> 
            </div>
            <br/>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm