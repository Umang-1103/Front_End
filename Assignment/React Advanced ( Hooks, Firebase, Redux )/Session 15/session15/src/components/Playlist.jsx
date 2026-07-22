import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../features/playlistSlice";

function Playlist() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !artist.trim()) {
      alert("Please enter both Title and Artist");
      return;
    }

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
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-success text-white text-center">
          <h2 className="mb-0">🎵 Spotify Playlist Manager</h2>
        </div>

        <div className="card-body">

          <div className="row g-3 mb-4">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Song Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Artist Name"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>

            <div className="col-md-2 d-grid">
              <button
                className="btn btn-success"
                onClick={handleSubmit}
              >
                + Add Song
              </button>
            </div>
          </div>

          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Song Title</th>
                <th>Artist</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {songs.length > 0 ? (
                songs.map((song, index) => (
                  <tr key={song.id}>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeSong(index))}
                      >
                        🗑 Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No Songs Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Playlist;