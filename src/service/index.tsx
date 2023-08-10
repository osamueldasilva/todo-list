import axios from "axios";

export function createApi() {

  const api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  return api;
}

export const api = createApi();