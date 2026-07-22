import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import playlistReducer from "./features/playlistSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    playlist: playlistReducer,
  },
});

export default store;