import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
console.log('axios.defaults.baseURL', axios.defaults.baseURL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

