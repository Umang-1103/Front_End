import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [
        {
            id: 1,
            title: "Believer",
            artist: "Imagine Dragons",
        },
        {
            id: 2,
            title: "Perfect",
            artist: "Ed Sheeran",
        },
        {
            id: 3,
            title: "Shape of You",
            artist: "Ed Sheeran",
        },
    ],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
        removeSong: (state, action) => {
            state.songs.splice(action.payload, 1);
        },
    },
});
export const { addSong, removeSong } = playlistSlice.actions
export default playlistSlice.reducer;