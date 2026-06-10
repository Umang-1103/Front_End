import React, { useState } from 'react'

function FormObjFunction2() {

    const [form, setform] = useState({
        name : "",
        surname : "",
        email : "",
        password : ""
    })

    console.log(form)

    const input = (e) => {
        setform({...form,[e.target.name] : e.target.value})
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={form.name} onChange={input} id="exampleInputName" aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
                                <input type="text" className="form-control" name='surname' value={form.surname} onChange={input} id="exampleInputSurname" aria-describedby="surnameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={form.email} onChange={input} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={form.password} onChange={input} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormObjFunction2