import React from 'react'
import Clock from './Clock'
import MoviesList from './MoviesList'
import PostCard from './PostCard'
import SpotifyPlaylists from './SpotifyPlaylists'
import ProductList from './ProductList'

function App() {
  return (
    <div>

      <Clock />
      <MoviesList/>
      <PostCard />
      <SpotifyPlaylists />
      <ProductList/>

    </div>
  )
}

export default App