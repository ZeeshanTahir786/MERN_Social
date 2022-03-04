import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Redux/Slices/UserSlice";
const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
export default store;
