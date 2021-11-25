import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://practice-news.herokuapp.com/api",
});

export function gettopics() {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticles(query) {
  let queryStr = `/articles`;
  if (query) {
    queryStr += `?topic=${query}`;
  }
  return newsApi.get(queryStr).then((res) => {
    return res.data.articles;
  });
}

export function getSingleArticle(article_id) {
  return newsApi.get(`/articles/${article_id}`).then((data) => {
    const { article } = data.data;
    return article;
  });
}

export function getUsers() {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
}

export const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    console.log(res.data, "in Api Calls");
    return res.data.comments;
  });
};
