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

    deleteSong: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song.id !== action.payload
      );
    },

    editSong: (state, action) => {
      const { id, title, artist } = action.payload;

      const song = state.songs.find(
        (item) => item.id === id
      );

      if (song) {
        song.title = title;
        song.artist = artist;
      }
    },
  },
});

export const {
  addSong,
  editSong,
  deleteSong,
} = playlistSlice.actions;

export default playlistSlice.reducer;