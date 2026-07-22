import React from 'react'
import PlaylistCard from './PlaylistCard'
import LikeCounter from './LikeCounter'
import { createContext } from "react";
import Feed from './Feed';
import FlipkartProductList from './FlipkartProductList';

export const UserContext = createContext();

function App() {

  const user = {
    name: "Umang",
    age: 22,
  }


  return (
    <div>

      <h1>My Playlist</h1>
      <PlaylistCard
        song="Shape of You"
        artist="Ed Sheeran"
      />

      <LikeCounter />

      <UserContext.Provider value={user}>
        <Feed />
      </UserContext.Provider>

       <FlipkartProductList />

    </div>
  )
}

export default App