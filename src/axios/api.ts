import axios from "axios";

export const api = axios.create({
  baseURL:'https://pokeapi.co/api/v2',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})