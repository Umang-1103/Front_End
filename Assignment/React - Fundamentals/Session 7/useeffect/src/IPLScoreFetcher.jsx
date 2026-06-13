// Task 2
// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'

function IPLScoreFetcher() {

    const [user, setUser] = useState([])
    

    // useEffect(() => {

        const fetchdata = () => {
            fetch("https://jsonplaceholder.typicode.com/posts",{
            method : "GET"
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data)
            setUser(data[0].title)
        })
        }

    // },[])

  return (
    <div>
        <h2>IPLScoreFetcher</h2>
        <h3>Match Headline :- {user}</h3>
        {/* Task 4 */}
        <button onClick={fetchdata}>Get Data</button>
    </div>

  )
}

export default IPLScoreFetcher