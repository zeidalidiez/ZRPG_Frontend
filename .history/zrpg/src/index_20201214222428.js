import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './router/AppRouter';
import App from './App'
// import store from './store/store';
import './css/main.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  React.createElement(App)
, document.getElementById('root'))

