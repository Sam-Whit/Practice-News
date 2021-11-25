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

export const votesForArticle = (article_id, newVote) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const deleteComment = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`).then((res) => {
    return res.status;
  });
};

export const postComment = (article_id, username, comment) => {
  const commentObj = { username: username, body: comment };
  return newsApi
    .post(`/articles/${article_id}/comments`, commentObj)
    .then((res) => {
      return res.status;
    });
};
