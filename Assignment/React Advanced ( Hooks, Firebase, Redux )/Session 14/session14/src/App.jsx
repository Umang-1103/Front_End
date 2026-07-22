import { useDispatch, useSelector } from "react-redux";
import { addSong } from "./features/playlistSlice";
import PlaylistManager from "./components/PlaylistManager";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const songs = useSelector((state) => state.playlist.songs);

  return (
    <div>
      <h1>Redux Toolkit Setup</h1>
      <h2>Count: {count}</h2>
      <hr />
      
      <PlaylistManager />

    </div>
  );
}

export default App;