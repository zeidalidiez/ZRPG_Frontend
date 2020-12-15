import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './router/AppRouter';
import App from './App'
// import store from './store/store';
import './css/main.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
<div className='Title Nav'>
  <h1> ReadNext </h1>
  <p> A list to track what you want to read. </p>
  <h2> Please add a title to begin </h2>
  <App />
</div>

, rootElement)

