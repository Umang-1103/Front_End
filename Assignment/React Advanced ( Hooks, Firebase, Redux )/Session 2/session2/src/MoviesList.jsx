import React from "react";
import useTrendingMovies from "./useTrendingMovies";

function MoviesList() {
    const { movies } = useTrendingMovies("https://api.tvmaze.com/search/shows?q=friends");

    return (
        <div className="container">
            <h1>Trending Movies</h1>

            {
                movies.map((movie) => (
                    <div key={movie.show.id}>
                        <h5>Movie Name :- {movie.show.name}</h5>
                    </div>
                ))
            }
        </div>
    );
}

export default MoviesList;