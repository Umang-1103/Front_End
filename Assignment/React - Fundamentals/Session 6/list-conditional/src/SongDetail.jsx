// Task 1
import React from 'react'
import Playlist from './Playlist'

function SongDetail() {

    const songdetail = [
    {
      song_title: "ABC",
      song_artist: "John Doe"
    },
    {
      song_title: "XYZ",
      song_artist: "Jane Doe"
    }
  ]

  return (
    <div>
        <Playlist song={songdetail} />
    </div>
  )
}

export default SongDetail