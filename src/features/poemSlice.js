import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/poem/";

export const poemSlide = createSlice({
  name: "poem",
  initialState: {
    data: [],
  },
  reducers: {
    getPoem: (state, action) => {
      state.data = action.payload;
    },
    createPoem: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const getPoemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getPoem(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const { getPoem } = poemSlide.actions;
export default poemSlide.reducer;
