import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../services/myAxios";

// Define the async thunk for fetching data
export const fetchImages = createAsyncThunk(
  "data/fetchItems",
  async (endPoint) => {
    const response = await myAxios(endPoint);
    return response.data;
  }
);

// Create the slice
const imagesSlice = createSlice({
  name: "images",
  initialState:{
    items: [],
    jpgArr:[],
    status: "",
    error: null,
  },
  reducers: {
  },

   // Add the reducers for the fetchData async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
