import React from 'react'
import Header from './components/Header'
import Restaurant from './components/Restaurant'
import Playlist from './components/Playlist'
import Profile from './components/Profile'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <Header/>
      <hr />
      <Restaurant/>
      <hr />
      <Profile />
      <hr />
      <Cart/>
      <hr />
      <Playlist/>
    </div>
  )
}

export default App
