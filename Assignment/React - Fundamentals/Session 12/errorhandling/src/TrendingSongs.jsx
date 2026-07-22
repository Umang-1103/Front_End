// Tsk 1, 2 & 4
import React, { useEffect, useState } from "react";

function TrendingSongs() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {

        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) => res.json())
        //     .then((data) => setData(data))
        //     .catch((err) => setError(true));

        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setSongs(data.slice(0, 3));
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>Trending Songs</h2>

            {error ? (
                <h3>Error loading data</h3>
            ) : (
                <ul>
                    {
                        songs.map((song) => (
                            <li key={song.id}>Song Title :- {song.title}</li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default TrendingSongs;