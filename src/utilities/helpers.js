export function injectReducer(initialState, handlers) {
  return (state = initialState, action = {}) =>
    action.hasOwnProperty("type")
      ? handlers[action.type]
        ? handlers[action.type](state, action)
        : state
      : state;
};

export function createAsyncActionType(type) {
  return {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
  };
}
