import api from "../api";

export const accountRegistered = jwt => ({
  type: "ACCOUNT_REGISTERED",
  jwt
});

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
