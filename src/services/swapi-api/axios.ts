import axios from "axios";

export const http_request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2000,
});
