import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.p2.lc2s6.foxhub.space",
});

export default instance;
