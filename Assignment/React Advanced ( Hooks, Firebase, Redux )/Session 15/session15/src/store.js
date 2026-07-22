import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./features/playlistSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    cart: cartReducer,
  },
});

export default store;