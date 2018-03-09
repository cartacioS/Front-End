import axios from "axios";

// API object that gives an interface to our backend using axios get & posting
const api = {
  auth: {
    registerAccount: (email, firstName, lastName, password, zipCode) =>
      axios
        .post("users/create", {
          email,
          firstName,
          lastName,
          password,
          zipCode
        })
        .then(res => res.data),
    login: (email, password) =>
      axios.post("users/login", { email, password }).then(res => res.data)
  }
};

export default api;
