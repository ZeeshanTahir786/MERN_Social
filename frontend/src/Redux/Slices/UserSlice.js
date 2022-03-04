import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // -====================================
    registerRequest: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // -====================================

    loadUserRequest: (state) => {
      state.isLoading = true;
    },
    loadUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loadUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadUserFailure,
  loadUserRequest,
  loginFailure,
  loadUserSuccess,
  loginRequest,
  registerFailure,
  loginSuccess,
  registerRequest,
  registerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
