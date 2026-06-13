import React, { useState } from 'react'

function FormObj() {

    const [form,setform] = useState({
        name:"",
        email:"",
        surname:"",
        password:""
    })

    console.log(form)

    const getchange=(s)=>{
        setform({
            ...form,
            [s.target.name] : s.target.value
        })
    }

  return (
    <div>
         {/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                             <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="name" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="Surname" className="form-label">Surname</label>
                                <input type="text" value={form.surname} onChange={(e)=>setform({...form,surname:e.target.value})} className="form-control" id="Surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})}  className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div> */}

         <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                             <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name='name' value={form.name} onChange={getchange}  className="form-control" id="name" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="Surname" className="form-label">Surname</label>
                                <input type="text" name='surname' onChange={getchange} value={form.surname}  className="form-control" id="Surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={form.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' onChange={getchange} value={form.password}   className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default FormObj