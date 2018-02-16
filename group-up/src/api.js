import axios from "axios";

const api = {
  auth: {
    registerAccount: (email, first_name, last_name, password, zip_code) =>
      axios
        .post("users/create", {
          email,
          first_name,
          last_name,
          password,
          zip_code
        })
        .then(res => res.data)
  }
};

export default api;
