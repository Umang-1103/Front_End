import { useEffect, useState } from "react";

function useTrendingMovies(url) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getdata()
    }, []);

    const getdata = () => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setMovies(result);
            })
    }

    return { movies }
}

export default useTrendingMovies;