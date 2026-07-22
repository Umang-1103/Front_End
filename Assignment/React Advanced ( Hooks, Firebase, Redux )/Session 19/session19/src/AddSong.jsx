import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./playlistSlice";

function AddSong() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const submit = (e) => {

    e.preventDefault();

    dispatch(
      addSong({
        id: Date.now(),
        title,
        artist,
      })
    );

    setTitle("");
    setArtist("");

  };

  return (

    <form onSubmit={submit}>

      <h2>Add Song</h2>

      <input
        placeholder="Song Name"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Artist Name"
        value={artist}
        onChange={(e)=>setArtist(e.target.value)}
      />

      <br /><br />

      <button>
        Add Song
      </button>

    </form>

  );
}

export default AddSong;