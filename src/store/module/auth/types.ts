import { Action, PayloadedAction } from "../../core";

export interface AuthStore {
  token: string | null;
  userId: string | null;
  userName: string | null;
}

export interface SetTokenAction
  extends PayloadedAction<"auth/set-token", string> {}
export interface FlushTokenAction extends Action<"auth/flush-token"> {}
export type TokenActions = SetTokenAction | FlushTokenAction;

export interface SetUserIdAction
  extends PayloadedAction<"auth/set-user-id", string> {}
export type UserIdActions = SetUserIdAction | FlushTokenAction;

export interface SetUserNameAction
  extends PayloadedAction<"auth/set-user-name", string> {
  payload: string;
}
export type UserNameActions = SetUserNameAction | FlushTokenAction;
