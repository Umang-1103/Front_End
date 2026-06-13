import React, { useState } from 'react'

function PlaylistAdder() {
    // const [song, setSong] = useState("")
    // const [artist, setArtist] = useState("")
    const [form, setForm] = useState({
        song: "",
        artist: ""
    })
    const [list, setList] = useState([])

    const getchange=(s)=>{
        setForm({
            ...form,
            [s.target.name] : s.target.value
        })
    }

    const addsong = (e) => {
        e.preventDefault()
        setList([...list, form])
        setForm({ song: "", artist: "" })
    }

    return (
        <div className='container'>
            <form action="" onSubmit={addsong}>
                <div className="mb-3">
                    <label className="form-label">Song Name</label>
                    <input type="text" name='song' className="form-control" value={form.song} onChange={getchange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Artist Name</label>
                    <input type="text" name='artist' className="form-control" value={form.artist} onChange={getchange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
            {
                list.map((item, index) => (
                    <div key={index}>
                        <h4>Song Name :- {item.song}</h4>
                        <h4>Artist Name :- {item.artist}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default PlaylistAdder