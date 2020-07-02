import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import './assets/js/dashforge.aside';
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// axios.defaults.baseURL = "https://api.themoviedb.org/3/movie"; // Movie
// axios.defaults.headers.common['Authorization'] ='Say hi to me :)';
axios.interceptors.request.use(request => {
  console.log("request");
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log("Response");
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
