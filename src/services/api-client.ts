import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e429bd85efa54c35a1fb91dfc0b0a36f",
  },
});
