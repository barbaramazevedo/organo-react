// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : process.env.REACT_APP_API_URL
});