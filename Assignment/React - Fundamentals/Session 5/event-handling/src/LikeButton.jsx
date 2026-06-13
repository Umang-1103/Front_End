// Task 1
import React, { useState } from 'react'

function LikeButton() {
    const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <h1>Count :- {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LikeButton