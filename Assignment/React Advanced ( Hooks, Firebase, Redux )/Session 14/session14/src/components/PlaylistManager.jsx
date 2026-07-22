import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../features/playlistSlice";

function PlaylistManager() {
  const [song, setSong] = useState("");

  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);

  const handleAddSong = () => {
    if (song.trim() === "") return;

    dispatch(addSong(song));
    setSong("");
  };

  return (
    <div>
      <h2>Playlist Manager</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter song name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />

        <button onClick={handleAddSong}>Add Song</button>

      </div>

      <h3>Current Playlist</h3>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song} <button onClick={() => dispatch(removeSong(index))}style={{ marginLeft: "10px" }}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistManager;