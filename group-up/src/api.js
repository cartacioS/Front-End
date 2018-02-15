import axios from "axios";

const api = {
  auth: {
    register: data => axios.post("some/url", { data }).then(res => res.data)
  }
};

export default api;
