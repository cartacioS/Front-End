import axios from "axios";

export default (jwtToken = null) => {
  if (jwtToken) {
    axios.defaults.headers.common.authorization = `jwt ${jwtToken}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
