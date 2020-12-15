import React from 'react';
import ReactDOM, { Route, Router } from 'react-dom';
// import AppRouter from './router/AppRouter';
import App from './App'
// import store from './store/store';
import './css/main.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
     <Route path = "/" component = {App}>
     </Route>
  </Router>
, rootElement)

