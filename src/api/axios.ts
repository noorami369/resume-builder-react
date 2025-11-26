import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jioresume.com",
});
export default instance;
