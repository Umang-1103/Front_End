// Task 3
import React, { useRef, useState } from 'react'

function AddToPlaylist() {

    const [song, setSong] = useState("")
    const [playlist, setPlaylist] = useState([])
    const songref = useRef(null)


    return (
        <div>
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault()
                    setPlaylist([...playlist,song])
                    setSong("")
                    songref.current.focus()
                }
            }>
                <div>
                    <br />
                    <label htmlFor="song_name">Song Name :- </label>
                    <input type='text' ref={songref} value={song} placeholder='Enter a Song Name' onChange={(e) => setSong(e.target.value)} required />
                    <br /><br />
                    <button type='submit'>Add</button>
                </div>
            </form>
            {
                playlist.map((item, index) => (
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default AddToPlaylist