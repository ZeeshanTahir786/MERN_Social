import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Redux/Slices/UserSlice";
import PostOfFollowingSlice from "./Redux/Slices/PostOfFollowingSlice";
import logger from "redux-logger";
import AllUsersSlice from "./Redux/Slices/AllUsersSlice";
import LikePostSlice from "./Redux/Slices/LikePostSlice";
import AddCommentSlice from "./Redux/Slices/AddCommentSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    postOfFollowing: PostOfFollowingSlice,
    allUsers: AllUsersSlice,
    LikePost: LikePostSlice,
    addComment: AddCommentSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
