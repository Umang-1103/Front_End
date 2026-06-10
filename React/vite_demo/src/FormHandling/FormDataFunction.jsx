import React, { useState } from 'react'

function FormDataFunction() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <div>
            <div className="container">
                <h1>Form Handling In Function</h1>
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} id="exampleInputName" aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
                                <input type="text" className="form-control" value={surname} onChange={(e)=>setsurname(e.target.value)} id="exampleInputSurname" aria-describedby="surnameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDataFunction