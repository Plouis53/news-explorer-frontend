import { baseUrl, checkResponse } from "./constants";

export const getArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
      authorization: `Bearer ${(localStorage.getItem("jwt"), token)}`,
    },
  }).then((res) => checkResponse(res));
};

export const addArticle = (card) => {
  return fetch(`${baseUrl}/articles `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      keyword: card.keyword || " /",
      title: card.title,
      text: card.description,
      date: card.publishedAt.slice(0, 10),
      source: card.source.name,
      link: card.url,
      image: card.urlToImage,
    }),
  }).then((res) => checkResponse(res));
};

export const removeArticle = (id, token) => {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
