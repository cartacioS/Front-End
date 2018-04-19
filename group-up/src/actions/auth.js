import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

// action to be dispatched to then be reduced
export const accountRegistered = jwt => ({
  type: "ACCOUNT_REGISTERED",
  jwt
});

export const accountLoggedIn = response => ({
  type: "ACCOUNT_LOGGED_IN",
  response
});

export const accountLoginError = response => ({
  type: "ACCOUNT_ERROR",
  response
});

export const requestCreated = response => ({
  type: "REQUEST_CREATED",
  response
});

export const createRequest = ({
  title,
  expirationDate,
  groupSize,
  membersNeeded,
  description
}) => dispatch =>
  api.auth
    .createRequest(title, expirationDate, groupSize, membersNeeded, description)
    .then(response => dispatch(requestCreated(response)));

// action that can be called from a component
export const registerAccount = ({
  email,
  firstName,
  lastName,
  password,
  zipCode
}) => dispatch =>
  api.auth
    .registerAccount(email, firstName, lastName, password, zipCode)
    .then(response => dispatch(accountRegistered(response)));

export const login = ({ email, password }) => dispatch =>
  api.auth.login(email, password).then(response => {
    window.localStorage.jwtToken = response.jwtToken;
    setAuthorizationHeader(response.jwtToken);
    dispatch(accountLoggedIn(response));
  });
