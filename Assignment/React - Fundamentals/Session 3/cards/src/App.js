import React from "react";
import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App container">

      {/* Task 1 */}
      <h2>Product Card</h2>
      <div className="row">
        <ProductCard img="p1.png" productName="Pizza" price="98.52" />
        <ProductCard img="p2.png" productName="Burrito" price="108.64" />
      </div>

      {/* Task 2 */}
      <h2>User Profile</h2>
      <div className="row">
        <UserProfile followers="20000" profilePic="team1.png" username="John Doe" />
        <UserProfile followers="100000" profilePic="team2.png" username="Jane Doe" />
      </div>

      {/* Task 3 */}
      <h2>Set up default props for UserProfile</h2>
      <UserProfile/>
    </div>
  );
}

export default App;
