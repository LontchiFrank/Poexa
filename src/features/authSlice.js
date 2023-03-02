import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/user";

const initialState = {
  authenticate: null,
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

export const signInUser = createAsyncThunk("auth/login", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/login`, body, config);
    console.log(res, "res");
    const result = await res;
    // localStorage.setItem("userToken", res.data.token);
    console.log(result);
    return result;
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
  reducers: {},
  extraReducers: {
    //*************Login**************/
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
      state.error = null;
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authenticate = true;
      state.userToken = payload.data.token;
      state.userInfo = payload.data.user;

      // localStorage.setItem("msg", msg);
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      localStorage.setItem("token", JSON.stringify(state.userToken));
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

export default authSlide;
