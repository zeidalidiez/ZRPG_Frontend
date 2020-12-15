import React from 'react';
import ReactDOM, { Route, Router } from 'react-dom';
// import AppRouter from './router/AppRouter';
import App from './App'
// import store from './store/store';
import './css/main.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
<div className='Title Nav'>
  <h1> ReadNext </h1>
  <h2> A list to track what you want to read. </h2>
  <ul>
    <li><a href="/">LinkedIn handle</a></li>

  </ul>
  <App />
</div>

, rootElement)

