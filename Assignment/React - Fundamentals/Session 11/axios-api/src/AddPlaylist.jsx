// Task 2
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function AddPlaylist() {

    const [playlist, setPlaylist] = useState({
        name: "",
        description: ""
    });

    const handleChange = (e) => {

        setPlaylist({
            ...playlist,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", playlist)
        alert("Playlist Added Successfully");
        setPlaylist({
            name: "",
            description: ""
        })
        console.log(res.data)

    }

    return (

        <div>

            <h2>Add Playlist</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Playlist Name" onChange={handleChange} />
                <br /> <br />
                <textarea name="description" placeholder="Description" onChange={handleChange} />
                <br /> <br />
                <button type="submit">Submit</button>
            </form>

        </div>

    );
}

export default AddPlaylist;