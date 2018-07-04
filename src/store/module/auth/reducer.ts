import { combineReducers } from "redux";
import * as Auth from "./types";
import { AuthStore, UserIdActions, UserNameActions } from "./types";

const token = (
  state: AuthStore["token"] = null,
  action: Auth.TokenActions
): AuthStore["token"] => {
  switch (action.type) {
    case "auth/set-token":
      return action.payload;
    case "auth/flush-token":
      return null;
    default:
      return state;
  }
};

const userId = (
  state: AuthStore["userId"] = null,
  action: Auth.UserIdActions
): AuthStore["userId"] => {
  switch (action.type) {
    case "auth/set-user-id":
      return action.payload;
    case "auth/flush-token":
      return null;
    default:
      return state;
  }
};

const userName = (
  state: AuthStore["userName"] = null,
  action: Auth.UserNameActions
): AuthStore["userName"] => {
  switch (action.type) {
    case "auth/set-user-name":
      return action.payload;
    case "auth/flush-token":
      return null;
    default:
      return state;
  }
};

export default combineReducers<AuthStore>({
  token,
  userId,
  userName
});
