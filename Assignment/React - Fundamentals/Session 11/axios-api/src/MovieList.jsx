// Task 1
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // console.log(res.data)
        setMovies(res.data.slice(0, 5))
    }

    return (
        <div>

            <h2>Top 5 Movies</h2>
            {
                movies.map((movie) => (
                    <p key={movie.id}>Movie Title :- {movie.title}</p>
                ))
            }

        </div>
    );
}

export default MovieList;