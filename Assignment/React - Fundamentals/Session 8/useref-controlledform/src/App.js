import React from "react";
import SearchBar from "./SearchBar";
import LoginForm from "./LoginForm";
import AddToPlaylist from "./AddToPlaylist";

function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <SearchBar/>
      {/* Task 2 */}
      <LoginForm/>
      {/* Task 3 */}
      <AddToPlaylist/>
    </div>
  );
}

export default App;
