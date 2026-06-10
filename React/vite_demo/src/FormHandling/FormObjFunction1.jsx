import React, { useState } from 'react'

function FormObjFunction1() {

    const [form, setform] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    console.log(form)

    return (
        <div>
            <h1>Form Handling In Function With Object</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" value={form.name} onChange={(e)=>setform({...form,name: e.target.value})} id="exampleInputName" aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
                                <input type="text" className="form-control" value={form.surname} onChange={(e)=>setform({...form,surname: e.target.value})} id="exampleInputSurname" aria-describedby="surnameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" value={form.email} onChange={(e)=>setform({...form,email: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={form.password} onChange={(e)=>setform({...form,password: e.target.value})} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormObjFunction1