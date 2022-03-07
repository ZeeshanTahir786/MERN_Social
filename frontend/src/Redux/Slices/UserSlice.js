import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  isAuthenticated: false,
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
      state.error = null;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    // -====================================
    registerRequest: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    // -====================================

    loadUserRequest: (state) => {
      state.isLoading = true;
    },
    loadUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    loadUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
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
  clearError,
} = userSlice.actions;

export default userSlice.reducer;
