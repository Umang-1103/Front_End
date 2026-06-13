import React from "react";
import SongDetail from "./SongDetail";
import OrderStatus from "./OrderStatus";
import FollowerList from "./FollowerList";
import CartSummary from "./CartSummary";


function App() {

  return (
    <div className="App">
      {/* Task 1 */}
      <SongDetail/>
      {/* Task 2 */}
      <OrderStatus isDelivered={true} />
      {/* Task 3 */}
      <FollowerList/>
      {/* Task 4 */}
      <CartSummary/>
    </div>
  );
}

export default App;
