import React from 'react'
import LoginForm from './LoginForm'
import AddSong from './AddSong'
import PlaylistList from './PlaylistList'

function App() {
  return (
    <div className='container my-5'>
      <LoginForm />
      <hr />
      <AddSong />
      <hr />
      <PlaylistList />
    </div>
  )
}

export default App