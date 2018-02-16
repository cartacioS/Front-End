const defaultState = {
  jwt: null
};

// reducers are just switches that generate state based on an action type
function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "ACCOUNT_REGISTERED":
      return { jwt: "test" };
    default:
      return state;
  }
}

export default authReducer;
