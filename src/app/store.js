import { configureStore } from "@reduxjs/toolkit";
import { authSlide } from "../features/authSlice";
import { poemSlide } from "../features/poemSlice";

export const store = configureStore({
  reducer: {
    poems: poemSlide.reducer,
    user: authSlide.reducer,
  },
});
