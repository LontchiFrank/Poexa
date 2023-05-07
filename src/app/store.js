import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlide } from "../features/authSlice";
import { poemSlide } from "../features/poemSlice";

const rootReducer = combineReducers({
  poems: poemSlide.reducer,
  user: authSlide.reducer,
});

export const store = configureStore({ reducer: rootReducer });
