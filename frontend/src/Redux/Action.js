import axios from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./Slices/UserSlice";

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      "/login",
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
    dispatch(loginFailure(error.response.data.message));
  }
};
