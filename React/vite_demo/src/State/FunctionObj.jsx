import React, { useState } from 'react'
import IsImage from './IsImage'

function FunctionObj() {
    const [data, setdata] = useState({
        name: "Raj",
        count: 0,
        isimage: true
    })
  return (
    <div>
        <h1>Function Object State</h1>
        <h2>Name :- {data.name}</h2>
        <button onClick={()=>setdata({...data, name: "Nikhil"})}>Change Name 1</button>
        <button onClick={()=>setdata({...data, name: "Jay"})}>Change Name 2</button>
        <br />
        <h2>Count :- {data.count}</h2>
        <button onClick={()=>setdata({...data, count : data.count + 1})}>Increase</button>
        <button onClick={()=>setdata({...data, count: data.count - 1})}>Decrease</button>
        <button onClick={()=>setdata({...data, count: 0})}>Reset</button>
        <br /><hr />
        <h2>Image :-</h2>
        <button onClick={()=>setdata({...data, isimage: false})}>Hide</button>
        <button onClick={()=>setdata({...data, isimage: true})}>Show</button>
        <button onClick={()=>setdata({...data, isimage: !data.isimage})}>Toggle</button>
        {
            (data.isimage) ? <IsImage/> : false
        }
    </div>
  )
}

export default FunctionObj