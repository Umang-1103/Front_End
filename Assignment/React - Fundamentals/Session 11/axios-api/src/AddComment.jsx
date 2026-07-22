// Task 5
import React, { useState } from "react";
import axios from "axios";

function AddComment() {

    const [form, setForm] = useState({
        username: "",
        comment: ""
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post("https://jsonplaceholder.typicode.com/comments", form)
        console.log(res.data)
        setResponse(res.data)
    }

    return (

        <div>

            <h2>Add Comment</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <br /><br />
                <textarea name="comment" placeholder="Comment" onChange={handleChange} />
                <br /><br />
                <button>Submit</button>
            </form>

            {
                response && (
                    <div>
                        <h3>Server Response</h3>
                        <p> ID:- {response.id}</p>
                        <p> Username:- {response.username}</p>
                        <p> Comment:- {response.comment}</p>
                    </div>

                )
            }

        </div>

    );
}

export default AddComment;