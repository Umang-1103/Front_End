// Task 1
import React, { useEffect } from 'react'

function TrendingSongs() {

  useEffect(() => {
    console.log("Component mounted")
  },[])

  return (
    <div>
        <h1>TrendingSongs</h1>
    </div>
  )
}

export default TrendingSongs