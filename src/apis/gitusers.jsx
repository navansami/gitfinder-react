import React from "react";
import axios from "axios";

const access_token = "aa91bd25292da3ecbbe8643ac2532fde98120c78";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: access_token,
  },
});
