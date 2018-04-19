import axios from "axios";

export default (jwtToken = null) => {
  if (jwtToken) {
    axios.defaults.headers.common.authorization = `jwt ${jwtToken}`;
    window.console.log(axios.defaults.headers.common.authorization);
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
