import React from 'react'
import axios from 'axios';
import { apiUrl } from './globalVariables.js'

axios.defaults.baseURL = `${apiUrl}`;

axios.interceptors.request.use(
  function(request) {
    request.headers.authorization = localStorage.getItem('token')
    return request;
  },
  function(error) {
    return Promise.reject(error);
  }
)