import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/user";

const initialState = {
  userInfo: null,
  userToken: null,
  loading: false,
  error: null,
};

export const signUpUser = createAsyncThunk("registeruser", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/signup`, data, config);
    return res.json();
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default authSlide.reducer;
