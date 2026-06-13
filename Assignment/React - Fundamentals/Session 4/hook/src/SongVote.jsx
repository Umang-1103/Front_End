// Task 3
import React, { useState } from 'react'

function SongVote() {
    const [vote, setVote] = useState(2)
  return (
    <div>
        <h1>SongVote :- {vote}</h1>
        <button onClick={() => setVote(vote+1)}> ⬆️ </button> &nbsp;&nbsp;
        <button onClick={() => setVote(Math.max(0, vote-1))}> ⬇️ </button>
    </div>
  )
}

export default SongVote