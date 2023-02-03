import { configureStore } from "@reduxjs/toolkit";
import { poemSlide } from "../features/poemSlice";

export const store = configureStore({
  reducer: {
    poems: poemSlide,
  },
});
