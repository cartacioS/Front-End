const defaultState = {
  payload: "empty"
};

// reducers are just switches that generate state based on an action type
function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "ACCOUNT_REGISTERED":
      return { jwt: "test" };
    case "ACCOUNT_LOGGED_IN":
      return { payload: action.response };
    case "ACCOUNT_LOGIN_ERROR":
      return { errors: action.response.errors };
    case "REQUEST_CREATED":
      return {request: action.response};
    default:
      return state;
  }
}

export default authReducer;
