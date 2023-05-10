import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./features/imagesSlice";

export const store = configureStore({
  reducer: {
    imagesSlice,
  },
});
