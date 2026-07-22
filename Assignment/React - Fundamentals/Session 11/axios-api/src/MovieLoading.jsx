// Task 4
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieLoading() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // console.log(res.data)
        setMovies(res.data.slice(0, 5))
        setLoading(false)
    }

    if (loading){
        return <h2>Loading...</h2>
    }

    return (

        <div>

            <h2>Movies</h2>
            {
                movies.map((movie) => (
                    <p key={movie.id}> Movie Title :- {movie.title} </p>
                ))
            }

        </div>

    )
}

export default MovieLoading;