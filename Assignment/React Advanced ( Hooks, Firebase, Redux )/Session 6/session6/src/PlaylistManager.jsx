import React, { useCallback, useState } from "react";
import SongItem from "./SongItem";


const PlaylistManager = () => {


    const [songs, setSongs] = useState([

        {
            id: 1,
            name: "Shape Of You",
            favorite: false
        },

        {
            id: 2,
            name: "Believer",
            favorite: false
        },

        {
            id: 3,
            name: "Perfect",
            favorite: false
        }

    ]);



    const toggleFavorite = useCallback((id) => {


        setSongs((prevSongs) =>

            prevSongs.map((song) =>

                song.id === id

                    ?
                    {
                        ...song,
                        favorite: !song.favorite
                    }

                    :
                    song

            )

        );


    }, []);



    return (

        <div>

            <h2>Playlist Manager</h2>


            {
                songs.map((song) => (

                    <SongItem

                        key={song.id}

                        song={song}

                        toggleFavorite={toggleFavorite}

                    />

                ))

            }


        </div>

    )

}


export default PlaylistManager;