import { createSlice } from "@reduxjs/toolkit";


const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        songs: [],
    },
    reducers: {
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
        removeSong: (state, action) => {
            state.songs.splice(action.payload, 1);
        },
    },
});

export const { addSong, removeSong } = playlistSlice.actions;

export default playlistSlice.reducer;