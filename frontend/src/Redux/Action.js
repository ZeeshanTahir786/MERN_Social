import axios from "axios";
import {
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
} from "./Slices/AddCommentSlice";
import {
  allUsersFailure,
  allUsersRequest,
  allUsersSuccess,
} from "./Slices/AllUsersSlice";
import { likeFailure, likeRequest, likeSuccess } from "./Slices/LikePostSlice";
import {
  postOfFollowingFailure,
  postOfFollowingRequest,
  postOfFollowingSuccess,
} from "./Slices/PostOfFollowingSlice";
import {
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from "./Slices/UserSlice";

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      "/api/v1//login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(loginSuccess(data.user));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const loadUser = () => async (dispatch) => {
  dispatch(loadUserRequest());
  try {
    const { data } = await axios.get("/api/v1//me");
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFailure(error));
  }
};

export const getFollowingPosts = () => async (dispatch) => {
  try {
    dispatch(postOfFollowingRequest());
    const { data } = await axios.get("/api/v1/posts");
    dispatch(postOfFollowingSuccess(data?.posts));
  } catch (error) {
    dispatch(postOfFollowingFailure(error));
  }
};
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(allUsersRequest());
    const { data } = await axios.get("/api/v1/users");
    dispatch(allUsersSuccess(data?.users));
  } catch (error) {
    dispatch(allUsersFailure(error));
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch(likeRequest());
    const { data } = await axios.get(`/api/v1/post/${id}`);
    dispatch(likeSuccess(data?.message));
  } catch (error) {
    dispatch(likeFailure(error));
  }
};
export const addComment = (id, comment) => async (dispatch) => {
  try {
    dispatch(addCommentRequest());
    const { data } = await axios.put(
      `/api/v1/post/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(addCommentSuccess(data?.message));
  } catch (error) {
    dispatch(addCommentFailure(error));
  }
};
