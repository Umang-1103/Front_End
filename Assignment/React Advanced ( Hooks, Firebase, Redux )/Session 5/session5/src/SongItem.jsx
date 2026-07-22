import React, { useState } from "react";

function SongItem({ song, dispatch }) {
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState(song.name);

    const saveSong = () => {
        dispatch({
            type: "EDIT_SONG",
            payload: {
                id: song.id,
                name: newName,
            },
        });

        setEdit(false);
    };

    return (
        <div style={{ border: "1px solid gray", margin: "20px", padding: "10px" }} >
            {
                edit ?
                    (
                        <div>
                            <input value={newName} onChange={(e) => setNewName(e.target.value)} /> &nbsp;
                            <button onClick={saveSong}>
                                Save
                            </button>
                        </div>
                    ) :
                    (
                        <div>
                            <h3>{song.name}</h3>
                            <button onClick={() => setEdit(true)} >
                                Edit
                            </button>
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_SONG",
                                        payload: song.id,
                                    })
                                } > Delete </button>
                        </div>
                    )
            }
        </div>
    );
}

export default SongItem;