import axios from "axios";

export const CoingeckoClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
});