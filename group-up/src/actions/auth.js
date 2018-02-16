import api from "../api";

// action to be dispatched to then be reduced
export const accountRegistered = jwt => ({
  type: "ACCOUNT_REGISTERED",
  jwt
});
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
