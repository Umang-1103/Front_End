import React, { useState } from "react";
import useSearchMovies from "./useSearchMovies";

function MoviesList() {
    const [search, setSearch] = useState("");

    const { movies, loading, error } = useSearchMovies(search);

    return (
        <div className="container">
            <h1>Trending Movies</h1>
            <input
                type="text"
                placeholder="Search movie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <h2>Loading...</h2>}

            {error && <h2>{error}</h2>}

            <div className="row">
                {
                    movies.map((movie) => (
                        <div className="col-md-6 col-lg-4">
                            <div key={movie.id} className="my-4">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <h3>{movie.title}</h3>

                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MoviesList;