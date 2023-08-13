import { getCurrentDate, getLastWeek, checkResponse } from "./constants";

export const getNews = (input) => {
  return fetch(
    // `https://newsapi.org/register/success=${input}&apiKey=03163e8f2a6b45419e69c39fbacf5fe2=${getLastWeek()}&to=${getCurrentDate}&pageSize=100`
    `https://nomoreparties.co/news/v2/everything?q=${input}&apiKey=03163e8f2a6b45419e69c39fbacf5fe2&from=${getLastWeek()}&to=${getCurrentDate}&pageSize=100`
  ).then((res) => checkResponse(res));
};

export const getTempArticles = (input) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${input}&apiKey=03163e8f2a6b45419e69c39fbacf5fe2&pageSize=5`
  ).then((res) => checkResponse(res));
};
