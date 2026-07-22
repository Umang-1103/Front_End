import React from 'react'
import MovieList from './MovieList'
import AddPlaylist from './AddPlaylist'
import RestaurantSearch from './RestaurantSearch'
import MovieLoading from './MovieLoading'
import AddComment from './AddComment'

function App() {
  return (
    <div>
      <MovieList/>
      <AddPlaylist/>
      <RestaurantSearch/>
      <MovieLoading/>
      <AddComment/>
    </div>
  )
}

export default App