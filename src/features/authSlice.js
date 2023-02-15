import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/user";

const initialState = {
  userInfo: null,
  userToken: null,
  loading: false,
  error: null,
};

const signUpUser = createAsyncThunk("registeruser", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/register`, body, config);
    return res.json();
  } catch (error) {}
});

export const authSlide = createSlice({
  name: "",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlide.reducer;
