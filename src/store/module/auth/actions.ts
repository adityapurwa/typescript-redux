import { createAction, createPayloadedAction } from "../../core";
import {
  FlushTokenAction,
  SetTokenAction,
  SetUserIdAction,
  SetUserNameAction
} from "./types";

export const setTokenAction = createPayloadedAction<SetTokenAction>(
  "auth/set-token"
);
export const flushTokenAction = createAction<FlushTokenAction>(
  "auth/flush-token"
);
export const setUserIdAction = createPayloadedAction<SetUserIdAction>(
  "auth/set-user-id"
);
export const setUserNameAction = createPayloadedAction<SetUserNameAction>(
  "auth/set-user-name"
);
