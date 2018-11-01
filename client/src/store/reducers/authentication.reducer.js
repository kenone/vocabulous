import { userConstants } from "../constants/constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.SIGNUP_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };

    case userConstants.SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case userConstants.SIGNUP_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}