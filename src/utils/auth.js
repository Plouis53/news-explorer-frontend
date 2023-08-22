import { baseUrl, checkResponse } from "./constants";

export const signUp = (email, password, name) => {
  console.log(email, password, name);
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => checkResponse(res))
    .then((res) => res);
};

export const signIn = (data) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      return checkResponse(res);
    })
    .then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const checkTokenValidity = (token) => {
  console.log("Fetching user data...");
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("Response status:", res.status);
      return checkResponse(res);
    })
    .then((data) => {
      console.log("User data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};


