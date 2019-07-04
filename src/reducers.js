export function isValue(value) {
  return value !== undefined && value !== null;
}

export function spaceReducer(state, action) {
  if (action.type === "update") {
    const { index, value } = action;
    return state.map((val, i) => {
      if (i === index) {
        return value;
      }
      return val;
    });
  }
  if (action.type === "add") {
    if (state && state.length && state.some(isValue)) {
      return Array.from({ length: action.payload }).reduce((acc, _, index) => {
        if (state[index]) {
          return [...acc, state[index]];
        }
        return [...acc, null];
      }, []);
    }
    return Array.from({ length: action.payload }, () => null);
  }

  throw new Error(`Invalid action dispatched to spaceReducer: ${JSON.stringify(
    action
  )}.

Allowed actions are: 'update', 'add'.`);
}

export function appReducer(state, action) {
  if (action.type === "update-space") {
    return {
      ...state,
      space: action.payload
    };
  }
  throw new Error(`Invalid action dispatched to appReducer: ${JSON.stringify(
    action
  )}.

Allowed actions are: 'update-space'.`);
}
