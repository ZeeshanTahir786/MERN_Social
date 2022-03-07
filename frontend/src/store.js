import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Redux/Slices/UserSlice";
import PostOfFollowingSlice from "./Redux/Slices/PostOfFollowingSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    user: UserSlice,
    postOfFollowing: PostOfFollowingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
