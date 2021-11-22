import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://practice-news.herokuapp.com/api",
});
