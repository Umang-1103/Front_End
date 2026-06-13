import React from 'react';
import LikeButton from './LikeButton';
import CartItem from './CartItem';
import SongVote from './SongVote';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
      {/* Task 1 */}
      <LikeButton/>
      {/* Task 2 */}
      <CartItem/>
      {/* Task 3 */}
      <SongVote/>
      {/* Task 4 */}
      <Rating/>
    </div>
  );
}

export default App;
