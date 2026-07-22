function App() {
  return (
    <div className="container mt-5">
      <h2>Spotify API Key</h2>
      <h4>{import.meta.env.VITE_SPOTIFY_API_KEY}</h4>

      <hr />

      <h2>Firebase API Key</h2>
      <h4>{import.meta.env.VITE_FIREBASE_API_KEY}</h4>

      <hr />


      <h2>Environment Variables Demo</h2>
      <h4>{import.meta.env.VITE_WELCOME_MSG}</h4>

      <hr />
      

    </div>
  );
}

export default App;