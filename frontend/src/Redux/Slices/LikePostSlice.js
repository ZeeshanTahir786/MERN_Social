import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  message: null,
  error: null,
};

const likePostSlice = createSlice({
  name: "likePostSlice",
  initialState,
  reducers: {
    likeRequest: (state) => {
      state.isLoading = true;
    },
    likeSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    likeFailure: (state, action) => {
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
  likeSuccess,
  likeRequest,
  likeFailure,
  clearError,
  clearMessage,
} = likePostSlice.actions;

export default likePostSlice.reducer;
