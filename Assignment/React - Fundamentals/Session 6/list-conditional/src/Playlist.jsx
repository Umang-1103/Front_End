// Task 1
import React from 'react'

function Playlist({ song }) {

    return (
        <div>

            {
                song.map((item, index) => (
                    <ul key={index}>
                        <li>{item.song_title}</li>
                        <li>{item.song_artist}</li>
                    </ul>
                ))
            }

        </div>
    )
}

export default Playlist