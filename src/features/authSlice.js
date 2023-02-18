import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/user";

const initialState = {
  msg: "",
  userInfo: "",
  userToken: "",
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

export const signInUser = createAsyncThunk("loginuser", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/login`, data, config);
    console.log(res, "res");
    return await res;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const authSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.userToken = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.userInfo = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.userToken = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    //*************Login**************/
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signInUser.fulfilled]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      state.msg = msg;
      state.userToken = token;
      state.userInfo = user;

      localStorage.setItem("msg", msg);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //**************register***************** */

    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { addToken, addUser, logout } = authSlide.actions;

export default authSlide.reducer;
