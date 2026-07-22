import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurant = createAsyncThunk(
  "restaurant/fetchRestaurant",
  async (city = "", thunkAPI) => {
    try {
      const res = await axios.get("./restaurant.json");

      if (city) {
        return res.data.filter((item) =>
          item.address.toLowerCase().includes(city.toLowerCase())
        );
      }

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch restaurant");
    }
  }
);

const initialState = {
  restaurant: [],
  loading: false,
  error: "",
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchRestaurant.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(fetchRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })

      .addCase(fetchRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;