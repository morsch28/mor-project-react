import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

function setDefaultHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

const httpServices = {
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  get: axios.get,
  delete: axios.delete,
  setDefaultHeader,
};

export default httpServices;
