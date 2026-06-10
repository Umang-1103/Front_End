import React from "react";
import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";
import MiniProfile from "./MiniProfile";

function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <h1>Welcome to React JSX!</h1>
      {/* Task 2 */}
      <UserGreeting username={"Umang"} />
      {/* Task 3 */}
      <UserGreetingClass username={"Umang"} />
      {/* Task 4 */}
      <MiniProfile/>
    </div>
  );
}

export default App;
