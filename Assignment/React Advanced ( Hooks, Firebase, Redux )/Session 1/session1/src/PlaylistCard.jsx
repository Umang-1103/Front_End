import React from "react";

function PlaylistCard({ song, artist }) {
    return (
        <div>

            <h3>🎵 {song}</h3>
            <p>Artist: {artist}</p>

        </div>
    );
}

export default PlaylistCard;