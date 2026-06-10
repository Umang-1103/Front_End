import React, { useState } from 'react'
import IsImage from './IsImage'

function FunctionState() {
    const [name, setname] = useState("Raj")
    const [count, setcount] = useState(0)
    const [isimage, setisimage] = useState(true)
    function increase2(){
      setcount(count+2)
    }
  return (
    <div>
        <h1>Function State</h1>
        <h2>Name :- {name}</h2>
        <button onClick={()=>(setname("Krish"))}>Change Name 1</button>
        <button onClick={()=>(setname("Vikram"))}>Change Name 2</button>
        <br />
        <h2>Count :- {count}</h2>
        <button onClick={()=>(setcount(count+1))}>Increase</button>
        <button onClick={()=>(setcount(count-1))}>Decrease</button>
        <button onClick={increase2}>Increase By 2</button>
        <button onClick={()=>(setcount(0))}>Reset</button>
        <br /><hr />
        <h2>Image :-</h2>
        <button onClick={()=>(setisimage(false))}>Hide</button>
        <button onClick={()=>(setisimage(true))}>Show</button>
        <button onClick={()=>(setisimage(!isimage))}>Toggle</button>
        {
          (isimage) ? <IsImage/> : false
        }
    </div>
  )
}

export default FunctionState