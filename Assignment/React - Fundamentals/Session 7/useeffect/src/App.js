import React from "react";
import TrendingSongs from "./TrendingSongs";
import IPLScoreFetcher from "./IPLScoreFetcher";
import MovieSuggestions from "./MovieSuggestions";

function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <TrendingSongs/>
      {/* Task 2 */}
      <IPLScoreFetcher/>
      {/* Task 3 */}
      <MovieSuggestions/>
    </div>
  );
}

export default App;
