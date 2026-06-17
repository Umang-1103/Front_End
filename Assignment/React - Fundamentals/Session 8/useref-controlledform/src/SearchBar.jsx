// Task 1
// import React, { useEffect, useRef, useState } from 'react'
import React, { useRef, useState } from 'react'

function SearchBar() {

    // const inputfield = useRef(null)
    const messageref = useRef(null)
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    // useEffect(() => {
    //     inputfield.current.focus()
    // },[])

  return (
    <div>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            console.log("Name :- "+name+"\nFeedback :- "+message)
            setName("")
            setMessage("")
            // inputfield.current.focus()
            messageref.current.focus()
        }}>
            <div>
                <label htmlFor="name">Name :- </label>
                <input type="text" value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required />
            </div>
            <br/>
            {/* Task 4 */}
            <div>
                <label htmlFor="feedback">Feedback :- </label>
                <textarea ref={messageref} value={message} placeholder='Enter a Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
                <br/><br/>
                <button type="submit" >Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default SearchBar