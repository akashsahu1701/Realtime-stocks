import axios, { Axios } from "axios";
export const baseUrl = "http://localhost:8080/api";

export const apiHandler: Axios = axios.create({
  baseURL: baseUrl,
});
