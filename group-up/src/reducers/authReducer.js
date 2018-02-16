const defaultState = {
  jwt: null
};

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "ACCOUNT_REGISTERED":
      return { jwt: "test" };
    default:
      return state;
  }
}

export default authReducer;
