import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://demo.sibers.com',
  timeout: 5000,
});
