import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  message: null,
  error: null,
};

const addCommentSlice = createSlice({
  name: "addCommentSlice",
  initialState,
  reducers: {
    addCommentRequest: (state) => {
      state.isLoading = true;
    },
    addCommentSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    addCommentFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});
export const {
  addCommentRequest,
  addCommentSuccess,
  addCommentFailure,
  clearError,
  clearMessage,
} = addCommentSlice.actions;

export default addCommentSlice.reducer;
