import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { myAlert } from "../components/Alert/myAlert";

const API_URL = "https://poexabackend.onrender.com/api/poem/";
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
      state.data = [{ ...action.payload }, ...state.data];
    },
    getPrivatePoem: (state, action) => {
      state.data = action.payload;
    },
    editPoem: (state, action) => {
      state.data = data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deletePoem: (state, action) => {
      state.data = data.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: {},
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
// export const signUpUser = createAsyncThunk("registeruser",
export const createPoemAsync = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    const res = await axios.post(`${API_URL}new-poem`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": token,
      },
    });
    dispatch(createPoem(res.data));
    console.log({ res });
    if (res.status == "200") {
      myAlert(true, "Created successfully");
    }
    console.log(token, "haha");
  } catch (error) {
    // throw new Error(error);

    console.log(error);
  }
};

export const editPoemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}${data.id}`, data.info, config);
    dispatch(editPoem(response.data));
    if (response.status == "200") {
      myAlert(true, "Edited successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePoemAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    const response = await axios.delete(`${API_URL}${data}`, config);
    dispatch(deletePoem(response));
    if (response.status == "200") {
      myAlert(true, "Deleted successfully");
    }
    // return true;
  } catch (error) {
    console.log(error);
  }
};

export const { getPoem, createPoem, getPrivatePoem, editPoem, deletePoem } =
  poemSlide.actions;
export default poemSlide.reducer;
