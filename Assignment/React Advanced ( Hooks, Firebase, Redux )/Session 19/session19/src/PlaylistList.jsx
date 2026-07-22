import { useDispatch, useSelector } from "react-redux";
import { deleteSong, editSong } from "./playlistSlice";

function PlaylistList() {

    const songs = useSelector(
        (state) => state.playlist.songs
    );

    const dispatch = useDispatch();

    const edit = (song) => {

        const newTitle = prompt(
            "Enter New Song Name",
            song.title
        );

        const newArtist = prompt(
            "Enter Artist Name",
            song.artist
        );

        if (!newTitle || !newArtist) return;

        dispatch(
            editSong({
                id: song.id,
                title: newTitle,
                artist: newArtist,
            })
        );

    };

    return (

        <div>

            <h2>Playlist</h2>

            {
                songs.map((song) => (

                    <div
                        key={song.id}
                        style={{
                            border: "1px solid gray",
                            marginBottom: "10px",
                            padding: "10px",
                        }}
                    >

                        <h3>{song.title}</h3>

                        <p>{song.artist}</p>

                        <button
                            onClick={() => edit(song)}
                        >
                            Edit
                        </button>

                        {" "}

                        <button
                            onClick={() =>
                                dispatch(deleteSong(song.id))
                            }
                        >
                            Remove
                        </button>

                    </div>

                ))
            }

        </div>

    );
}

export default PlaylistList;