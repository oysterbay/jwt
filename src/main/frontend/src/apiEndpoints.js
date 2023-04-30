// apiEndpoints.js
let environment = '';
let BASE_URL = '';

if (process.env.NODE_ENV === 'development') {
  environment = 'development';
  BASE_URL = 'http://localhost:8080/api'
} else {
  environment = 'production';
  BASE_URL = 'http://129.146.85.90:8080/api'
}

console.log("env: " + environment)
console.log("base url: " + BASE_URL)

export const MOVIES_ENDPOINT = `${BASE_URL}/movies`;
export const MOVIES_SEARCH_ENDPOINT = (query) => `${BASE_URL}/search?q=${query}`;
export const MOVIES_PAGINATION_ENDPOINT = (pageNumber, pageSize) => `${BASE_URL}/items?pageNumber=${pageNumber}&pageSize=${pageSize}`;
export const MOVIE_DETAILS_ENDPOINT = (movieId) => `/movies/${movieId}`;
export const MOVIE_REVIEWS_ENDPOINT = (movieId) => `/movies/${movieId}/reviews`;

export const USERS_ENDPOINT = "/users";
export const USER_DETAILS_ENDPOINT = (userId) => `/users/${userId}`;
export const USER_FAVORITES_ENDPOINT = (userId) => `/users/${userId}/favorites`;

export const LOGIN_ENDPOINT = "/login";
export const LOGOUT_ENDPOINT = "/logout";
