import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6969/", //change when backend gets deployed in heroku

  // baseURL: "https://art-aficionado.onrender.com/", //change when backend gets deployed in heroku
});

export default instance;
