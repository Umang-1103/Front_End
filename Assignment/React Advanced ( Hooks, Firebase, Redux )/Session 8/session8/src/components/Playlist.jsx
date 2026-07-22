import { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

const Playlist = () => {

  const { songs } = useContext(PlaylistContext);

  console.log("Playlist Render");

  return (
    <div>

      <h2>Spotify Playlist</h2>

      <ul>
        {
          songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))
        }
      </ul>

    </div>
  );
};

export default Playlist;