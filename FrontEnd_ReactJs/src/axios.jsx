import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8090/products",
});
delete API.defaults.headers.common["Authorization"];
export default API;