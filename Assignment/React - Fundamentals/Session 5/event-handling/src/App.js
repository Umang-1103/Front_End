import React from "react";
import LikeButton from "./LikeButton";
import SearchBar from "./SearchBar";
import LoginForm from "./LoginForm";
import PlaylistAdder from "./PlaylistAdder";

function App() {
  return (
    <div className="App">
      {/* Task 1 */}  <br/>
      <LikeButton/>
      {/* Task 2 */}  <br/>
      <SearchBar/>
      {/* Task 3 */}  <br/>
      <LoginForm/>
      {/* Task 4 */} <br/>
      <PlaylistAdder/>

    </div>
  );
}

export default App;
