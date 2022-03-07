import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postOfFollowingSlice = createSlice({
  name: "postOfFollowing",
  initialState,
  reducers: {
    postOfFollowingRequest: (state) => {
      state.isLoading = true;
    },
    postOfFollowingSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    },
    postOfFollowingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  postOfFollowingRequest,
  postOfFollowingSuccess,
  postOfFollowingFailure,
  clearError,
} = postOfFollowingSlice.actions;

export default postOfFollowingSlice.reducer;
