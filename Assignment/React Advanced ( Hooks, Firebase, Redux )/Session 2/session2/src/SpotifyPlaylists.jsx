import React from "react";
import useFetchData from "./useFetchData";

function SpotifyPlaylists() {
    const {
        data,
        loading,
        error,
    } = useFetchData("./playlist.json");

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="container">
            <h1>Spotify Playlists</h1>
            <hr/>
            {
                
                data.results?.map((playlist) => (
                    <div key={playlist.trackId}>
                        <p>Track Name :- {playlist.trackName}</p>
                        <p>Artist Name :- {playlist.artistName}</p>
                        <hr/>
                    </div>
                ))
                
            }
        </div>
    );
}

export default SpotifyPlaylists;