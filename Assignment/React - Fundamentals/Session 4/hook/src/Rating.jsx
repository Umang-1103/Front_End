// Task 4
import React, { useState } from 'react'

function Rating() {
    const [rate, setRate] = useState(0)
  return (
    <div>

        <h1>Zomato-style Rating</h1>
        <span onClick={() => setRate(1)} style={{color: (rate >= 1) ? "gold" : "gray", cursor: "pointer", fontSize:"32px"}} >★</span>
        <span onClick={() => setRate(2)} style={{color: (rate >= 2) ? "gold" : "gray", cursor: "pointer", fontSize:"32px"}} >★</span>
        <span onClick={() => setRate(3)} style={{color: (rate >= 3) ? "gold" : "gray", cursor: "pointer", fontSize:"32px"}} >★</span>
        <span onClick={() => setRate(4)} style={{color: (rate >= 4) ? "gold" : "gray", cursor: "pointer", fontSize:"32px"}} >★</span>
        <span onClick={() => setRate(5)} style={{color: (rate >= 5) ? "gold" : "gray", cursor: "pointer", fontSize:"32px"}} >★</span>

    </div>
  )
}

export default Rating

