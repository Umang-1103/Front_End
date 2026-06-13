// Task 3
import React, { useEffect, useState } from 'react'

function MovieSuggestions() {
    const [movie, setMovie] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
       
            fetch("https://jsonplaceholder.typicode.com/users",{
                method : "GET"
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setMovie(data)
                setLoad(false)
            })

    },[])


  return (
    <div>
        
        
        {
            load ?
            (
                <h2>Loading ....</h2>
            ) 
            :
            (
                movie.map((item) => (
                    <ul key={item.id}>
                        <li>Name :- {item.name}</li>
                    </ul>
                ))            
            )
        }

       
    </div>
  )
}

export default MovieSuggestions
