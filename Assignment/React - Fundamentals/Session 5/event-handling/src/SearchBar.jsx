// Task 2
import React, { useState } from 'react'

function SearchBar() {
    const [text, setText] = useState("")
  return (
    <div className='container'>
        <h1>Search</h1>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <h2>Search Result :- {text}</h2>
    </div>
  )
}

export default SearchBar