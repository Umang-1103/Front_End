import React from "react";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import NotificationContext from "./NotificationContext";

function App() {
  return (
    <div className="App">
      <UserContext/>
      <ThemeContext/>
      <NotificationContext/>
    </div>
  );
}

export default App;
