import React from "react";


const SongItem = React.memo(({ song, toggleFavorite }) => {


    console.log("Song Render:", song.name);


    return (

        <div>

            <h3>
                {song.name}
            </h3>


            <button

                onClick={() => toggleFavorite(song.id)}

            >

                {
                    song.favorite
                        ?
                        "❤️ Favorite"
                        :
                        "☆ Add Favorite"
                }


            </button>


        </div>


    )


});


export default SongItem;