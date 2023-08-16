export const APIkey = "03163e8f2a6b45419e69c39fbacf5fe2";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const lastWeeksDate = new Date();
const currentDate = new Date();

export const getLastWeek = () => {
  lastWeeksDate.setDate(lastWeeksDate.getDate() - 7);
  return lastWeeksDate.toLocaleString();
};

export const getCurrentDate = () => {
  return currentDate.toLocaleString();
};

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsquest.mooo.com"
    : "http://localhost:3001";
