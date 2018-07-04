export interface PayloadedAction<TType, TPayload> {
  type: TType;
  payload: TPayload;
}

export interface Action<TType> {
  type: TType;
}

export function createPayloadedAction<
  TAction extends PayloadedAction<TAction["type"], TAction["payload"]>
>(
  type: TAction["type"]
): (
  payload: TAction["payload"]
) => PayloadedAction<TAction["type"], TAction["payload"]> {
  return (payload: TAction["payload"]) => ({
    type,
    payload
  });
}

export function createAction<TAction extends Action<TAction["type"]>>(
  type: TAction["type"]
): () => Action<TAction["type"]> {
  return () => ({
    type
  });
}
