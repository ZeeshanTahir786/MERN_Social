import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

const allUsersSlice = createSlice({
  name: "allUsersSlice",
  initialState,
  reducers: {
    allUsersRequest: (state) => {
      state.isLoading = true;
    },
    allUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    allUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { allUsersRequest, allUsersSuccess, allUsersFailure, clearError } =
  allUsersSlice.actions;

export default allUsersSlice.reducer;
