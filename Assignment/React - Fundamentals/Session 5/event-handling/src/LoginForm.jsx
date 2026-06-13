// Task 3
import React, { useState } from 'react'

function LoginForm() {
    const [text, setText] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='container'>
            <form onSubmit={
                (e) => {
                    e.preventDefault() 
                    alert(`Username :- ${text} \nPassword :- ${password}`)
                    // Task 4
                    setText("")
                    setPassword("")
                }
            }>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={text} onChange={(e) => setText(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           
        </div>
    )
}

export default LoginForm