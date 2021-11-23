import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://practice-news.herokuapp.com/api",
});

export function gettopics() {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticles() {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
}
