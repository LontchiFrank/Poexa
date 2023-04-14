import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const API_URL = "http://localhost:8000/api/poem/";
const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "auth-token": token,
  },
};

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
    getPrivatePoem: (state, action) => {
      state.data = action.payload;
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
export const getPrivatePoemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}userpoem`, config);
    dispatch(getPrivatePoem(response.data));
    // console.log(response.data);
  } catch (error) {
    throw new Error(error);
  }
};
export const createPoemAsync = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    const response = await axios.post(`${API_URL}new-poem`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": token,
      },
    });
    dispatch(createPoem(response.data));
    console.log(token, "haha");
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

export const { getPoem, createPoem, getPrivatePoem } = poemSlide.actions;
export default poemSlide.reducer;
