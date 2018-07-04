import { combineReducers, createStore } from "redux";

import { flushTokenAction, setTokenAction } from "./module/auth/actions";
import auth from "./module/auth/reducer";
import { FlushTokenAction } from "./module/auth/types";
import {
  SetTokenAction,
  SetUserIdAction,
  SetUserNameAction
} from "./module/auth/types";

const store = createStore(
  combineReducers({
    auth
  })
);

// This is only used to show us the store state on every dispatch
const initial = store.getState();
console.log("Initial: ", initial);
let changeCounter = 0;
store.subscribe(() => {
  changeCounter++;
  console.log(`State ${changeCounter}: `, store.getState());
});

// Notice here that we have to keep passing the type
store.dispatch<SetTokenAction>({
  type: "auth/set-token", // However, TypeScript will force you to use the correct type for SetTokenAction
  payload: "userToken"
});
store.dispatch<SetUserIdAction>({
  type: "auth/set-user-id",
  payload: "1"
});
store.dispatch<SetUserNameAction>({
  type: "auth/set-user-name",
  payload: "John"
});
store.dispatch<FlushTokenAction>({
  type: "auth/flush-token"
});

// However, we can use or actions created by createAction to help us
// provides the type property
store.dispatch(setTokenAction("123"));
store.dispatch(flushTokenAction());
