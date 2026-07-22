import React from 'react'

export const initialState = [];

function playlistReducer(state, action) {

    switch (action.type) {
        case "ADD_SONG":
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload,
                },
            ];

        case "REMOVE_SONG":
            return state.filter((song) => song.id !== action.payload);

        case "EDIT_SONG":
            return state.map((song) =>
                song.id === action.payload.id
                    ? { ...song, name: action.payload.name }
                    : song
            );

        default:
            return state;
    }
    // return (
    //     <div>playlistReducer</div>
    // )
}

export default playlistReducer