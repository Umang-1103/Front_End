import { useEffect, useState } from "react";

function useSearchMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!query) {
            setMovies([]);
            return;
        }

        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=8223efb09dd930e9a2bc0678f0ba9079&query=${query}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch");
                setLoading(false);
            });
    }, [query]);

    return { movies, loading, error };
}

export default useSearchMovies;