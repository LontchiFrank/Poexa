import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
export const createPoemAsync = createAsyncThunk(
  "poem/createPoem",
  async (data) => {
    try {
      const token = localStorage.getItem("token");
      console.log(localStorage.getItem("token"));
      const res = await axios.post(`${API_URL}new-poem`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": token,
        },
      });
      createPoem(res.data);
      console.log({ res });
      if (res.status == "200") {
        myAlert(true, "Created successfully");
        window.location.reload(false);
      }
      console.log(token, "haha");
    } catch (error) {
      // throw new Error(error);

      console.log(error);
    }
  }
);

export const editPoemAsync = createAsyncThunk("poem/editPoem", async (data) => {
  try {
    const response = await axios.put(`${API_URL}${data.id}`, data.info, config);
    editPoem(response.data);
    if (response.status == "200") {
      myAlert(true, "Edited successfully");
      window.location.reload(false);
    }
  } catch (error) {
    console.log(error);
  }
});

export const deletePoemAsync = createAsyncThunk(
  "poem/deletePoem",
  async (data) => {
    try {
      console.log(data);
      const response = await axios.delete(`${API_URL}${data}`, config);
      deletePoem(response);
      if (response.status == "200") {
        myAlert(true, "Deleted successfully");
        window.location.reload(false);
      } else {
        myAlert(false, "Failed to Delete");
      }
      // return true;
    } catch (error) {
      console.log(error);
    }
  }
);

export const poemSlide = createSlice({
  name: "poem",
  initialState: {
    data: [],
    loading: false,
    authenticate: null,
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
  extraReducers: {
    [createPoemAsync.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
    },
    [createPoemAsync.fulfilled]: (state) => {
      state.loading = false;
      state.authenticate = true;
    },
    [editPoemAsync.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
    },
    [editPoemAsync.fulfilled]: (state) => {
      state.loading = false;
      state.authenticate = true;
    },
    [deletePoemAsync.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
    },
    [deletePoemAsync.fulfilled]: (state) => {
      state.loading = false;
      state.authenticate = true;
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
// export const getPoemAsync = createAsyncThunk(
//   "poem/getPoem",
//   async (dispatch) => {
//     try {
//       const response = await axios.get(`${API_URL}`);

//       dispatch(getPoem(response.data));
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );

export const getPrivatePoemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}userpoem`, config);
    dispatch(getPrivatePoem(response.data));
    // console.log(response.data);
  } catch (error) {
    throw new Error(error);
  }
};

// export const getPrivatePoemAsync = createAsyncThunk(
//   "poem/getPrivatePoem",
//   (data) => async (dispatch) => {
//     try {
//       const response = await axios.get(`${API_URL}userpoem`, config);
//       dispatch(getPrivatePoem(response.data));
//       // console.log(response.data);
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );

// export const signUpUser = createAsyncThunk("registeruser",
// export const createPoemAsync = (data) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     console.log(localStorage.getItem("token"));
//     const res = await axios.post(`${API_URL}new-poem`, data, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         "auth-token": token,
//       },
//     });
//     dispatch(createPoem(res.data));
//     console.log({ res });
//     if (res.status == "200") {
//       myAlert(true, "Created successfully");
//     }
//     console.log(token, "haha");
//   } catch (error) {
//     // throw new Error(error);

//     console.log(error);
//   }
// };

// export const editPoemAsync = createAsyncThunk(
//   "poem/editPoem",
//   (data) => async (dispatch) => {
//     try {
//       const response = await axios.put(
//         `${API_URL}${data.id}`,
//         data.info,
//         config
//       );
//       dispatch(editPoem(response.data));
//       if (response.status == "200") {
//         myAlert(true, "Edited successfully");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const { getPoem, createPoem, getPrivatePoem, editPoem, deletePoem } =
  poemSlide.actions;
export default poemSlide.reducer;
